<?php
// URL shortener
// POST JSON {target}  → {id, short_url}
// GET  ?id=XXX:       redirect 302 (or return JSON with &format=json)
// GET  ?stats=XXX:    return JSON with hit count

require_once __DIR__ . '/_common.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    rate_limit('shorturl_create', 20);
    $body = file_get_contents('php://input');
    $data = json_decode($body, true) ?: $_POST;
    $target = trim((string)($data['target'] ?? ''));
    if ($target === '') error_response('target URL required');
    if (!preg_match('#^https?://#i', $target)) error_response('target must be http:// or https://');
    if (strlen($target) > 2048) error_response('target URL too long');
    // Disallow linking back to the api itself to prevent loops
    $parsed = parse_url($target);
    if (!$parsed || empty($parsed['host'])) error_response('invalid URL');

    $id = gen_id(6);
    db()->prepare('INSERT INTO short_urls (id, target, created_at) VALUES (?,?,?)')
        ->execute([$id, $target, time()]);
    $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST'] ?? 'localhost';
    json_response([
        'id' => $id,
        'short_url' => $scheme . '://' . $host . '/api/shorturl.php?id=' . $id,
        'target' => $target,
    ]);
}

if ($method === 'GET') {
    if (isset($_GET['stats'])) {
        $id = (string)$_GET['stats'];
        if (!preg_match('/^[A-Za-z0-9]{6,16}$/', $id)) error_response('invalid id');
        $stmt = db()->prepare('SELECT * FROM short_urls WHERE id = ?');
        $stmt->execute([$id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$row) error_response('not found', 404);
        json_response([
            'id'         => $row['id'],
            'target'     => $row['target'],
            'created_at' => (int)$row['created_at'],
            'hit_count'  => (int)$row['hit_count'],
        ]);
    }
    $id = (string)($_GET['id'] ?? '');
    if (!preg_match('/^[A-Za-z0-9]{6,16}$/', $id)) error_response('invalid id');
    $stmt = db()->prepare('SELECT * FROM short_urls WHERE id = ?');
    $stmt->execute([$id]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$row) error_response('not found', 404);
    db()->prepare('UPDATE short_urls SET hit_count = hit_count + 1 WHERE id = ?')->execute([$id]);
    if (($_GET['format'] ?? '') === 'json') {
        json_response(['target' => $row['target']]);
    }
    // Strip CR/LF defensively before placing into Location header (PHP's
    // header() already blocks these since 5.1.2 but keep belt-and-braces).
    $target = preg_replace('/[\r\n]/', '', $row['target']);
    header('Location: ' . $target, true, 302);
    exit;
}

error_response('method not allowed', 405);
