<?php
// Temporary file sharing — upload small files, get a shareable link
// POST multipart: "file" field + optional ttl, max_downloads
// GET  ?id=XXX&meta=1   → JSON metadata
// GET  ?id=XXX          → download the file

require_once __DIR__ . '/_common.php';

const MAX_FILE_BYTES = 20 * 1024 * 1024; // 20 MB per file
const MAX_TOTAL_BYTES = 2 * 1024 * 1024 * 1024; // 2 GB total storage cap

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    rate_limit('file_upload', 10);
    if (empty($_FILES['file'])) error_response('no file uploaded');
    $f = $_FILES['file'];
    if ($f['error'] !== UPLOAD_ERR_OK) {
        error_response('upload error code ' . $f['error']);
    }
    if ($f['size'] <= 0 || $f['size'] > MAX_FILE_BYTES) {
        error_response('file size must be 1 byte to ' . round(MAX_FILE_BYTES / 1024 / 1024) . ' MB');
    }

    // Check total storage cap
    $total = (int)db()->query('SELECT COALESCE(SUM(size), 0) FROM files')->fetchColumn();
    if ($total + $f['size'] > MAX_TOTAL_BYTES) {
        error_response('storage full, try again later', 507);
    }

    // Strict filename: drop directory components, strip CR/LF (header injection)
    // and other shell-special chars; keep dots/dashes/underscores/spaces.
    $orig_name = basename($f['name']);
    $orig_name = preg_replace('/[\x00-\x1f\\\\\/:*?"<>|]/', '_', $orig_name) ?? '';
    $orig_name = trim($orig_name, '. ');
    if ($orig_name === '') $orig_name = 'file';
    $orig_name = substr($orig_name, 0, 200);

    // Store on disk with random name; keep original as metadata
    $id = gen_id(10);
    $storage = $id . '_' . bin2hex(random_bytes(8));
    $dest = UPLOAD_DIR . '/' . $storage;
    if (!move_uploaded_file($f['tmp_name'], $dest)) {
        error_response('failed to save file', 500);
    }
    @chmod($dest, 0600);

    $ttl = (int)($_POST['ttl'] ?? 86400); // default 24h
    $ttl = max(60, min(86400 * 30, $ttl));
    $max_dl = isset($_POST['max_downloads']) ? max(1, min(1000, (int)$_POST['max_downloads'])) : null;

    // Force application/octet-stream regardless of what the client uploaded.
    // Combined with Content-Disposition: attachment + nosniff, this prevents
    // the file from rendering inline as HTML/SVG/etc. Even an .svg with JS
    // payload comes down as a download, not as something the browser executes.
    $mime = 'application/octet-stream';

    $now = time();
    db()->prepare('INSERT INTO files (id, filename, mime_type, size, storage, created_at, expires_at, max_downloads) VALUES (?,?,?,?,?,?,?,?)')
        ->execute([$id, $orig_name, $mime, $f['size'], $storage, $now, $now + $ttl, $max_dl]);

    $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST'] ?? 'localhost';
    json_response([
        'id'            => $id,
        'url'           => $scheme . '://' . $host . '/api/fileshare.php?id=' . $id,
        'filename'      => $orig_name,
        'size'          => (int)$f['size'],
        'mime_type'     => $mime,
        'expires_at'    => $now + $ttl,
        'max_downloads' => $max_dl,
    ]);
}

if ($method === 'GET') {
    $id = (string)($_GET['id'] ?? '');
    if (!preg_match('/^[A-Za-z0-9]{6,16}$/', $id)) error_response('invalid id');
    $stmt = db()->prepare('SELECT * FROM files WHERE id = ?');
    $stmt->execute([$id]);
    $file = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$file) error_response('not found', 404);

    $now = time();
    if ($file['expires_at'] && $file['expires_at'] < $now) {
        @unlink(UPLOAD_DIR . '/' . $file['storage']);
        db()->prepare('DELETE FROM files WHERE id = ?')->execute([$id]);
        error_response('expired', 410);
    }

    if (isset($_GET['meta'])) {
        json_response([
            'id' => $file['id'],
            'filename' => $file['filename'],
            'size' => (int)$file['size'],
            'mime_type' => $file['mime_type'],
            'created_at' => (int)$file['created_at'],
            'expires_at' => (int)$file['expires_at'],
            'download_count' => (int)$file['download_count'],
            'max_downloads' => $file['max_downloads'] !== null ? (int)$file['max_downloads'] : null,
        ]);
    }

    $path = UPLOAD_DIR . '/' . $file['storage'];
    if (!is_file($path)) error_response('file missing on disk', 500);

    // Atomic increment-or-reject to prevent the race where two parallel
    // downloads both pass a "count >= max" check and both succeed.
    $stmt = db()->prepare('UPDATE files SET download_count = download_count + 1 WHERE id = ? AND (max_downloads IS NULL OR download_count < max_downloads)');
    $stmt->execute([$id]);
    if ($stmt->rowCount() === 0) error_response('download limit reached', 410);

    // Sanitize filename for the Content-Disposition header. RFC 5987 uses a
    // "filename*=UTF-8''<percent-encoded>" form which preserves non-ASCII
    // names without giving the attacker any chance to inject CR/LF.
    $safeAscii = preg_replace('/[\x00-\x1f"\\\\\/]/', '_', $file['filename']) ?? 'download';
    $rfc5987   = rawurlencode($file['filename']);
    header('Content-Type: application/octet-stream');
    header('Content-Length: ' . $file['size']);
    header(sprintf('Content-Disposition: attachment; filename="%s"; filename*=UTF-8\'\'%s', $safeAscii, $rfc5987));
    header('Cache-Control: private, max-age=0, no-store');
    header('X-Content-Type-Options: nosniff');
    header('Content-Security-Policy: default-src \'none\'');
    readfile($path);

    // If this was the final permitted download, clean up after serving.
    if ($file['max_downloads'] !== null && ($file['download_count'] + 1) >= $file['max_downloads']) {
        @unlink($path);
        db()->prepare('DELETE FROM files WHERE id = ?')->execute([$id]);
    }
    exit;
}

error_response('method not allowed', 405);
