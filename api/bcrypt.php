<?php
// Server-side bcrypt hashing for htpasswd.
// POST JSON {user, pass, cost?}  (POST so the password doesn't end up in
// access logs / browser history / referrer / Cloudflare logs).

require_once __DIR__ . '/_common.php';

rate_limit('bcrypt', 30);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    error_response('use POST with JSON body {user, pass, cost?} — passwords must not appear in URLs', 405);
}

$body = file_get_contents('php://input');
$data = json_decode($body, true);
if (!is_array($data)) $data = $_POST;

$user = trim((string)($data['user'] ?? ''));
$pass = (string)($data['pass'] ?? '');
$cost = max(4, min(14, (int)($data['cost'] ?? 10)));

if ($user === '' || $pass === '') error_response('user and pass required');
if (!preg_match('/^[a-zA-Z0-9_.\-]{1,64}$/', $user)) error_response('invalid username');
if (strlen($pass) > 72) error_response('password too long (bcrypt max 72 bytes)');

$hash = password_hash($pass, PASSWORD_BCRYPT, ['cost' => $cost]);
json_response([
    'user'  => $user,
    'hash'  => $hash,
    'line'  => $user . ':' . $hash,
    'cost'  => $cost,
]);
