<?php
// Check whether a URL serves gzip / br compression and compute size savings
// GET ?url=https://...

require_once __DIR__ . '/_common.php';

rate_limit('gzipcheck', 20);

$url = trim((string)($_GET['url'] ?? ''));
if ($url === '') error_response('url required');
$check = check_outbound_url($url);
if ($check['err']) error_response($check['err'], 403);

function fetch_with($url, $accept_encoding, $check) {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        // No redirect-following: a redirect to a private IP would bypass the
        // check we just did. If the user wants the post-redirect target they
        // can paste the final URL.
        CURLOPT_FOLLOWLOCATION => false,
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_HTTPHEADER     => ['Accept-Encoding: ' . $accept_encoding],
        CURLOPT_USERAGENT      => 'iTools-GzipCheck/1.0',
        CURLOPT_HEADER         => true,
        CURLOPT_ENCODING       => '',  // do NOT auto-decode — we want to measure bytes on wire
    ]);
    curl_safe_setup($ch, $check);
    $resp = curl_exec($ch);
    $info = curl_getinfo($ch);
    if ($resp === false) return null;
    $hs = $info['header_size'];
    $headers = substr($resp, 0, $hs);
    $body = substr($resp, $hs);
    $enc = '';
    if (preg_match('/content-encoding:\s*(\S+)/i', $headers, $m)) $enc = strtolower(trim($m[1], " \t\r\n;"));
    return [
        'status'     => (int)$info['http_code'],
        'body_bytes' => strlen($body),
        'encoding'   => $enc,
        'final_url'  => $info['url'] ?? null,
    ];
}

$none = fetch_with($url, 'identity', $check);
$gzip = fetch_with($url, 'gzip', $check);
$br   = fetch_with($url, 'br, gzip', $check);

if (!$none) error_response('uncompressed fetch failed', 502);

$result = [
    'url'              => $url,
    'final_url'        => $none['final_url'],
    'status_code'      => $none['status'],
    'uncompressed'     => $none['body_bytes'],
    'gzip'             => $gzip ? [
        'bytes'    => $gzip['body_bytes'],
        'encoding' => $gzip['encoding'] ?: 'none',
        'enabled'  => $gzip['encoding'] === 'gzip',
        'savings_percent' => $none['body_bytes'] ? round((1 - $gzip['body_bytes'] / $none['body_bytes']) * 100, 1) : 0,
    ] : null,
    'brotli'           => $br ? [
        'bytes'    => $br['body_bytes'],
        'encoding' => $br['encoding'] ?: 'none',
        'enabled'  => $br['encoding'] === 'br',
        'savings_percent' => $none['body_bytes'] ? round((1 - $br['body_bytes'] / $none['body_bytes']) * 100, 1) : 0,
    ] : null,
];
json_response($result);
