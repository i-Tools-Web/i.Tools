<?php
// Anonymous text paste / snippet sharing.
// POST (JSON or form): create paste → {id, url, expires_at, burn_after}
// GET  ?id=XXX:        fetch paste

require_once __DIR__ . '/_common.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    rate_limit('paste_create', 20);
    $body = file_get_contents('php://input');
    $data = json_decode($body, true);
    if (!is_array($data)) {
        // fallback to form fields
        $data = $_POST;
    }
    $content = (string)($data['content'] ?? '');
    if ($content === '') error_response('content required');
    if (strlen($content) > 1_000_000) error_response('paste too large (1 MB max)');
    $language   = substr((string)($data['language'] ?? ''), 0, 32);
    $ttl        = (int)($data['ttl'] ?? 86400 * 30); // default 30 days
    $ttl        = max(60, min(86400 * 365, $ttl));
    $burn_after = !empty($data['burn_after']) ? 1 : 0;

    $id = gen_id(8);
    $now = time();
    db()->prepare('INSERT INTO pastes (id, content, language, created_at, expires_at, burn_after) VALUES (?,?,?,?,?,?)')
        ->execute([$id, $content, $language, $now, $now + $ttl, $burn_after]);
    json_response([
        'id' => $id,
        'url' => 'paste.php?id=' . $id,
        'expires_at' => $now + $ttl,
        'burn_after' => (bool)$burn_after,
    ]);
}

if ($method === 'GET') {
    $id = (string)($_GET['id'] ?? '');
    if (!preg_match('/^[A-Za-z0-9]{6,16}$/', $id)) error_response('invalid id');
    $stmt = db()->prepare('SELECT * FROM pastes WHERE id = ?');
    $stmt->execute([$id]);
    $p = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$p) error_response('not found', 404);
    if ($p['expires_at'] && $p['expires_at'] < time()) {
        db()->prepare('DELETE FROM pastes WHERE id = ?')->execute([$id]);
        error_response('expired', 410);
    }
    db()->prepare('UPDATE pastes SET view_count = view_count + 1 WHERE id = ?')->execute([$id]);
    if ($p['burn_after']) db()->prepare('DELETE FROM pastes WHERE id = ?')->execute([$id]);
    json_response([
        'id'         => $p['id'],
        'content'    => $p['content'],
        'language'   => $p['language'],
        'created_at' => (int)$p['created_at'],
        'expires_at' => (int)$p['expires_at'],
        'view_count' => (int)$p['view_count'] + 1,
        'burn_after' => (bool)$p['burn_after'],
    ]);
}

error_response('method not allowed', 405);
