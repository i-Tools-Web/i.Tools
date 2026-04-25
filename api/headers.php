<?php
// Fetch and return HTTP headers for a URL (server-side, bypasses CORS)
// GET ?url=https://example.com  →  JSON with request/response details

require_once __DIR__ . '/_common.php';

rate_limit('headers', 30);

$url = trim((string)($_GET['url'] ?? ''));
if ($url === '') error_response('url required');
$check = check_outbound_url($url);
if ($check['err']) error_response($check['err'], 403);

$method = strtoupper((string)($_GET['method'] ?? 'GET'));
if (!in_array($method, ['GET','HEAD','POST','PUT','DELETE','OPTIONS','PATCH'], true)) {
    $method = 'GET';
}

$start = microtime(true);
$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HEADER         => true,
    CURLOPT_NOBODY         => ($method === 'HEAD'),
    CURLOPT_CUSTOMREQUEST  => $method,
    CURLOPT_FOLLOWLOCATION => false,
    CURLOPT_TIMEOUT        => 10,
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_USERAGENT      => 'iTools-HeaderFetcher/1.0 (+https://i.tools)',
    CURLOPT_ACCEPT_ENCODING => '',  // accept any compression
    CURLOPT_MAXREDIRS      => 0,
]);
// Pin curl to the resolved IP so DNS rebinding can't swap targets
curl_safe_setup($ch, $check);

$response = curl_exec($ch);
$elapsed = round((microtime(true) - $start) * 1000);
if ($response === false) {
    $err = curl_error($ch);
        error_response('fetch failed: ' . $err, 502);
}
$info = curl_getinfo($ch);
$headerSize = $info['header_size'];
$rawHeaders = substr($response, 0, $headerSize);
$body = substr($response, $headerSize);

// Parse headers
$headers = [];
foreach (preg_split("/\r?\n/", $rawHeaders) as $line) {
    if (strpos($line, ':') === false) continue;
    [$k, $v] = array_map('trim', explode(':', $line, 2));
    if ($k !== '') $headers[] = [$k, $v];
}

$gzipHeader = '';
foreach ($headers as [$k, $v]) {
    if (strcasecmp($k, 'content-encoding') === 0) { $gzipHeader = strtolower($v); break; }
}

json_response([
    'url'               => $url,
    'final_url'         => $info['url'] ?? $url,
    'method'            => $method,
    'status_code'       => (int)$info['http_code'],
    'http_version'      => $info['http_version'] ?? null,
    'response_time_ms'  => $elapsed,
    'connect_time_ms'   => round($info['connect_time'] * 1000, 1),
    'ssl_verify_result' => $info['ssl_verify_result'] ?? null,
    'primary_ip'        => $info['primary_ip'] ?? null,
    'primary_port'      => $info['primary_port'] ?? null,
    'size_download'     => (int)$info['size_download'],
    'size_header'       => (int)$info['header_size'],
    'content_type'      => $info['content_type'] ?? null,
    'content_encoding'  => $gzipHeader ?: null,
    'headers'           => $headers,
    'raw_headers'       => rtrim($rawHeaders),
    'body_preview'      => $method === 'HEAD' ? null : substr($body, 0, 1024),
]);
