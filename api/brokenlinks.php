<?php
// Scan a page for broken links (checks all <a href> via HEAD requests)
// GET ?url=https://...

require_once __DIR__ . '/_common.php';

rate_limit('brokenlinks', 6);

$url = trim((string)($_GET['url'] ?? ''));
if ($url === '') error_response('url required');
$check = check_outbound_url($url);
if ($check['err']) error_response($check['err'], 403);

// Fetch the page (no redirect-following; we don't want the seed URL to redirect
// us into a private network mid-fetch).
$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => false,
    CURLOPT_TIMEOUT        => 15,
    CURLOPT_USERAGENT      => 'iTools-BrokenLinkCheck/1.0 (+https://i.tools)',
    CURLOPT_ENCODING       => '',
]);
curl_safe_setup($ch, $check);
$html = curl_exec($ch);
$info = curl_getinfo($ch);
if ($html === false) error_response('failed to fetch page', 502);

$base = $info['url'] ?? $url;

// Extract <a href="..."> links
preg_match_all('/<a\s[^>]*href=["\']([^"\']+)["\']/i', $html, $m);
$links = array_unique($m[1]);

function resolve_url(string $href, string $base): ?string {
    if (preg_match('/^(javascript:|mailto:|tel:|#)/i', $href)) return null;
    if (preg_match('#^https?://#i', $href)) return $href;
    $parsed = parse_url($base);
    $scheme = $parsed['scheme'] ?? 'http';
    $host = $parsed['host'] ?? '';
    $port = isset($parsed['port']) ? ':' . $parsed['port'] : '';
    $path = $parsed['path'] ?? '/';
    if (str_starts_with($href, '//')) return $scheme . ':' . $href;
    if (str_starts_with($href, '/')) return $scheme . '://' . $host . $port . $href;
    // Relative — drop the last path segment
    $dir = preg_replace('#/[^/]*$#', '/', $path);
    return $scheme . '://' . $host . $port . $dir . $href;
}

$results = [];
$checked = 0;
$max = 40; // cap to be polite
foreach ($links as $href) {
    if ($checked >= $max) break;
    $target = resolve_url($href, $base);
    if (!$target) continue;
    $checked++;

    // SSRF guard EACH link — the page might link to internal hosts (e.g.
    // intranet redirector pages). Skip private/reserved targets.
    $linkCheck = check_outbound_url($target);
    if ($linkCheck['err']) {
        $results[] = [
            'href' => $href, 'target' => $target, 'status' => 0,
            'broken' => true, 'redirect' => null, 'time_ms' => 0,
            'error' => 'blocked: ' . $linkCheck['err'],
        ];
        continue;
    }

    $mh = curl_init($target);
    curl_setopt_array($mh, [
        CURLOPT_NOBODY         => true,
        CURLOPT_RETURNTRANSFER => true,
        // Don't follow redirects: a redirect to a private IP would bypass
        // the per-link SSRF check above.
        CURLOPT_FOLLOWLOCATION => false,
        CURLOPT_TIMEOUT        => 6,
        CURLOPT_USERAGENT      => 'iTools-BrokenLinkCheck/1.0',
    ]);
    curl_safe_setup($mh, $linkCheck);
    $start = microtime(true);
    curl_exec($mh);
    $i = curl_getinfo($mh);
    $err = curl_error($mh);
    $status = (int)$i['http_code'];
    // Some sites reject HEAD — retry with GET on 405/400
    if ($status === 405 || $status === 400 || $status === 501) {
        $mh = curl_init($target);
        curl_setopt_array($mh, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => false,
            CURLOPT_TIMEOUT        => 6,
            CURLOPT_USERAGENT      => 'iTools-BrokenLinkCheck/1.0',
            CURLOPT_RANGE          => '0-0',
        ]);
        curl_safe_setup($mh, $linkCheck);
        curl_exec($mh);
        $i = curl_getinfo($mh);
        $err = curl_error($mh);
        $status = (int)$i['http_code'];
    }
    // 3xx counts as fine (site has the link, target moved); not broken
    $results[] = [
        'href'     => $href,
        'target'   => $target,
        'status'   => $status,
        'broken'   => ($status === 0 || $status >= 400),
        'redirect' => null,
        'time_ms'  => round((microtime(true) - $start) * 1000),
        'error'    => $err ?: null,
    ];
}

json_response([
    'url'            => $url,
    'total_links'    => count($links),
    'checked'        => count($results),
    'max_checked'    => $max,
    'broken_count'   => count(array_filter($results, fn($r) => $r['broken'])),
    'links'          => $results,
]);
