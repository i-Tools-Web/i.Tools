<?php
// Common helpers shared by every /api/*.php endpoint.
// Keeps endpoints thin: they require this and call its functions.

// Endpoints emit JSON. PHP notices/warnings written to stdout (e.g. as <br/><b>…)
// would corrupt the response, so route them to the error log only.
ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL & ~E_DEPRECATED & ~E_USER_DEPRECATED);

// Convert any uncaught PHP exception OR fatal error into a JSON 500 response.
// Without this, a fatal error returns an empty 500 to the client, and the
// browser fails with "Unexpected end of JSON input" — invisible to the user.
// We do NOT echo the raw exception message because PDO/SQL exceptions can leak
// table/column names. The full error goes to the error log; the client gets
// a generic message keyed by an incident id.
set_exception_handler(function (\Throwable $e): void {
    $incident = bin2hex(random_bytes(4));
    error_log("[itools api $incident] " . $e);
    if (!headers_sent()) {
        http_response_code(500);
        header('Content-Type: application/json; charset=utf-8');
        header('Access-Control-Allow-Origin: *');
    }
    echo json_encode([
        'error' => 'internal server error (see log)',
        'incident' => $incident,
    ], JSON_UNESCAPED_SLASHES);
    exit;
});
register_shutdown_function(function (): void {
    $err = error_get_last();
    if ($err && in_array($err['type'], [E_ERROR, E_CORE_ERROR, E_COMPILE_ERROR, E_USER_ERROR, E_RECOVERABLE_ERROR], true)) {
        $incident = bin2hex(random_bytes(4));
        error_log("[itools api $incident fatal] " . $err['message'] . ' at ' . $err['file'] . ':' . $err['line']);
        if (!headers_sent()) {
            http_response_code(500);
            header('Content-Type: application/json; charset=utf-8');
            header('Access-Control-Allow-Origin: *');
        }
        echo json_encode([
            'error' => 'internal server error (see log)',
            'incident' => $incident,
        ], JSON_UNESCAPED_SLASHES);
    }
});

define('DATA_DIR', __DIR__ . '/data');
// Dotfile prefix on the DB so even a misconfigured server (where .htaccess is
// silently ignored, e.g. PHP's built-in dev server) won't serve it as
// directory-indexable static content. In production Apache, .htaccess
// Require-all-denied is the primary protection.
define('DB_PATH',  DATA_DIR . '/.itools.db');
define('UPLOAD_DIR', DATA_DIR . '/uploads');

// Create upload dir if missing
if (!is_dir(UPLOAD_DIR)) @mkdir(UPLOAD_DIR, 0700, true);

function json_response($data, int $code = 200): void {
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function error_response(string $msg, int $code = 400): void {
    json_response(['error' => $msg], $code);
}

function handle_cors_preflight(): void {
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        http_response_code(204);
        exit;
    }
}

function db(): PDO {
    static $pdo = null;
    if ($pdo !== null) return $pdo;
    try {
        $pdo = new PDO('sqlite:' . DB_PATH);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->exec('PRAGMA journal_mode=WAL');
        $pdo->exec('PRAGMA foreign_keys=ON');
        init_schema($pdo);
    } catch (Throwable $e) {
        error_response('DB init failed: ' . $e->getMessage(), 500);
    }
    return $pdo;
}

function init_schema(PDO $pdo): void {
    $pdo->exec('
        CREATE TABLE IF NOT EXISTS pastes (
            id          TEXT PRIMARY KEY,
            content     TEXT NOT NULL,
            language    TEXT,
            created_at  INTEGER NOT NULL,
            expires_at  INTEGER,
            view_count  INTEGER DEFAULT 0,
            burn_after  INTEGER DEFAULT 0
        );
        CREATE TABLE IF NOT EXISTS short_urls (
            id          TEXT PRIMARY KEY,
            target      TEXT NOT NULL,
            created_at  INTEGER NOT NULL,
            hit_count   INTEGER DEFAULT 0
        );
        CREATE TABLE IF NOT EXISTS files (
            id          TEXT PRIMARY KEY,
            filename    TEXT NOT NULL,
            mime_type   TEXT,
            size        INTEGER NOT NULL,
            storage     TEXT NOT NULL,
            created_at  INTEGER NOT NULL,
            expires_at  INTEGER,
            download_count INTEGER DEFAULT 0,
            max_downloads  INTEGER
        );
        CREATE INDEX IF NOT EXISTS idx_pastes_expires ON pastes(expires_at);
        CREATE INDEX IF NOT EXISTS idx_files_expires  ON files(expires_at);
    ');
}

function gen_id(int $len = 8): string {
    // URL-safe base62 random id
    $alpha = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    $id = '';
    $bytes = random_bytes($len);
    for ($i = 0; $i < $len; $i++) {
        $id .= $alpha[ord($bytes[$i]) % strlen($alpha)];
    }
    return $id;
}

function cleanup_expired(): void {
    // Opportunistic cleanup — run ~1% of requests
    if (mt_rand(1, 100) !== 1) return;
    try {
        $pdo = db();
        $now = time();
        // Delete expired files from disk
        $stmt = $pdo->prepare('SELECT storage FROM files WHERE expires_at IS NOT NULL AND expires_at < ?');
        $stmt->execute([$now]);
        foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
            @unlink(UPLOAD_DIR . '/' . $row['storage']);
        }
        $pdo->prepare('DELETE FROM files  WHERE expires_at IS NOT NULL AND expires_at < ?')->execute([$now]);
        $pdo->prepare('DELETE FROM pastes WHERE expires_at IS NOT NULL AND expires_at < ?')->execute([$now]);
    } catch (Throwable $e) { /* ignore cleanup failures */ }
}

// Cloudflare's own IP ranges as of 2024. Used to decide whether to trust
// the CF-Connecting-IP header (which is spoofable from anywhere else).
function _is_from_cloudflare(string $ip): bool {
    static $v4 = ['173.245.48.0/20','103.21.244.0/22','103.22.200.0/22','103.31.4.0/22','141.101.64.0/18','108.162.192.0/18','190.93.240.0/20','188.114.96.0/20','197.234.240.0/22','198.41.128.0/17','162.158.0.0/15','104.16.0.0/13','104.24.0.0/14','172.64.0.0/13','131.0.72.0/22'];
    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4) === false) return false;
    $longIp = ip2long($ip);
    foreach ($v4 as $cidr) {
        [$net, $bits] = explode('/', $cidr);
        $mask = -1 << (32 - (int)$bits);
        if (($longIp & $mask) === (ip2long($net) & $mask)) return true;
    }
    return false;
}

function client_ip(): string {
    $remote = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    // Trust CF-Connecting-IP only when the request actually came from a
    // Cloudflare edge IP, otherwise an attacker could spoof the header to
    // bypass per-IP rate limits.
    if (_is_from_cloudflare($remote) && !empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
        $cf = $_SERVER['HTTP_CF_CONNECTING_IP'];
        if (filter_var($cf, FILTER_VALIDATE_IP)) return $cf;
    }
    return $remote;
}

function rate_limit(string $bucket, int $max_per_minute = 30): void {
    // Per-IP rate limit. Uses the real client IP (CF-Connecting-IP if behind
    // Cloudflare and the request came from a CF edge), otherwise REMOTE_ADDR.
    // Persisted in small JSON files keyed by hash of bucket+ip so concurrent
    // writes don't fight a single SQLite row.
    $ip = client_ip();
    $key = $bucket . ':' . $ip;
    $path = DATA_DIR . '/rl_' . md5($key);
    $now = time();
    $state = @file_get_contents($path);
    $hits = $state ? json_decode($state, true) : [];
    $hits = array_filter(is_array($hits) ? $hits : [], fn($t) => $t > $now - 60);
    if (count($hits) >= $max_per_minute) {
        error_response('Rate limit exceeded. Try again in a minute.', 429);
    }
    $hits[] = $now;
    @file_put_contents($path, json_encode($hits), LOCK_EX);
}

// Returns null if URL is safe for outbound fetch; returns an error message string
// describing why it should be blocked. Validates scheme is http/https, host is
// not a private/reserved IP (after DNS resolution), and returns the resolved IP
// so callers can pin curl to it via CURLOPT_RESOLVE — defeats DNS rebinding.
function check_outbound_url(string $url): array {
    if (!preg_match('#^https?://#i', $url)) return ['err' => 'must be http:// or https://'];
    if (strlen($url) > 2048) return ['err' => 'url too long'];
    $parsed = parse_url($url);
    if (!$parsed || empty($parsed['host'])) return ['err' => 'invalid URL'];
    $host = $parsed['host'];
    // strip user:pass@ — already excluded by parse_url returning to 'host'
    $is_literal = (bool)filter_var($host, FILTER_VALIDATE_IP);
    $ip = $is_literal ? $host : gethostbyname($host);
    if ($ip === $host && !$is_literal) return ['err' => 'unable to resolve hostname'];
    if (!filter_var($ip, FILTER_VALIDATE_IP)) return ['err' => 'host did not resolve to a valid IP'];
    if (str_contains($ip, ':')) {
        $low = strtolower($ip);
        if ($low === '::' || $low === '::1' || str_starts_with($low, 'fe80:') || str_starts_with($low, 'fc') || str_starts_with($low, 'fd') || str_starts_with($low, 'ff')) {
            return ['err' => 'private/reserved IP blocked'];
        }
    } else {
        $longIp = ip2long($ip);
        if ($longIp === false) return ['err' => 'invalid IPv4'];
        $blocked = [
            ['10.0.0.0',    '10.255.255.255'],
            ['172.16.0.0',  '172.31.255.255'],
            ['192.168.0.0', '192.168.255.255'],
            ['127.0.0.0',   '127.255.255.255'],
            ['169.254.0.0', '169.254.255.255'],
            ['0.0.0.0',     '0.255.255.255'],
            ['100.64.0.0',  '100.127.255.255'],   // CG-NAT / shared address
            ['192.0.0.0',   '192.0.0.255'],       // IETF Protocol Assignments
            ['192.0.2.0',   '192.0.2.255'],       // TEST-NET-1
            ['198.18.0.0',  '198.19.255.255'],    // Benchmarking
            ['198.51.100.0','198.51.100.255'],    // TEST-NET-2
            ['203.0.113.0', '203.0.113.255'],     // TEST-NET-3
            ['224.0.0.0',   '255.255.255.255'],   // multicast + reserved
        ];
        foreach ($blocked as [$lo, $hi]) {
            if ($longIp >= ip2long($lo) && $longIp <= ip2long($hi)) {
                return ['err' => 'private/reserved IP blocked'];
            }
        }
    }
    return ['err' => null, 'ip' => $ip, 'host' => $host, 'port' => $parsed['port'] ?? ($parsed['scheme'] === 'https' ? 443 : 80)];
}

// Apply CURLOPT_RESOLVE so curl uses the IP we already validated and
// CANNOT be redirected through DNS rebinding to a private target.
function curl_safe_setup($ch, array $check): void {
    curl_setopt($ch, CURLOPT_RESOLVE, [$check['host'] . ':' . $check['port'] . ':' . $check['ip']]);
    // Belt and braces: only http(s), nothing else (file://, gopher://, dict://, ldap://)
    curl_setopt($ch, CURLOPT_PROTOCOLS, CURLPROTO_HTTP | CURLPROTO_HTTPS);
    curl_setopt($ch, CURLOPT_REDIR_PROTOCOLS, CURLPROTO_HTTP | CURLPROTO_HTTPS);
}

// Every endpoint runs these
handle_cors_preflight();
cleanup_expired();
