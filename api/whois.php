<?php
// Raw WHOIS lookup via TCP socket (port 43)
// GET ?q=example.com | 8.8.8.8
// Returns plain text WHOIS response.

require_once __DIR__ . '/_common.php';

rate_limit('whois', 15);

$q = trim((string)($_GET['q'] ?? ''));
if ($q === '') {
    header('Content-Type: text/plain; charset=utf-8');
    echo "usage: whois.php?q=example.com\n";
    exit;
}
if (strlen($q) > 253) error_response('query too long');
// Accept only domain-ish or IP-ish input
if (!preg_match('/^[a-zA-Z0-9._:\-]+$/', $q)) error_response('invalid characters in query');

// Determine the appropriate WHOIS server
$is_ip = filter_var($q, FILTER_VALIDATE_IP);
$server = 'whois.iana.org';
if ($is_ip) {
    $server = 'whois.arin.net';
} else {
    // Use the TLD to pick a reasonable server
    $parts = explode('.', $q);
    $tld = strtolower(end($parts));
    $tld_map = [
        'com' => 'whois.verisign-grs.com', 'net' => 'whois.verisign-grs.com',
        'org' => 'whois.pir.org', 'info' => 'whois.afilias.net',
        'io' => 'whois.nic.io', 'co' => 'whois.nic.co',
        'me' => 'whois.nic.me', 'cn' => 'whois.cnnic.cn',
        'uk' => 'whois.nic.uk', 'de' => 'whois.denic.de',
        'fr' => 'whois.nic.fr', 'jp' => 'whois.jprs.jp',
        'ru' => 'whois.tcinet.ru', 'br' => 'whois.registro.br',
        'au' => 'whois.auda.org.au', 'nl' => 'whois.domain-registry.nl',
        'ca' => 'whois.cira.ca', 'eu' => 'whois.eu',
        'tv' => 'whois.nic.tv', 'app' => 'whois.nic.google',
        'dev' => 'whois.nic.google', 'ai' => 'whois.nic.ai',
        'xyz' => 'whois.nic.xyz', 'site' => 'whois.nic.site',
        'tech' => 'whois.nic.tech', 'online' => 'whois.nic.online',
    ];
    if (isset($tld_map[$tld])) $server = $tld_map[$tld];
}

function whois_query(string $server, string $query, int $timeout = 8): string {
    $errno = 0; $errstr = '';
    $sock = @fsockopen($server, 43, $errno, $errstr, $timeout);
    if (!$sock) return "# failed to connect to $server:43 — $errstr\n";
    stream_set_timeout($sock, $timeout);
    fwrite($sock, $query . "\r\n");
    $out = '';
    while (!feof($sock)) {
        $chunk = fread($sock, 4096);
        if ($chunk === false) break;
        $out .= $chunk;
        if (strlen($out) > 256 * 1024) break; // 256 KB cap
    }
    fclose($sock);
    return $out;
}

$out = whois_query($server, $q);

// If the initial server hints at a more specific one (common for .com),
// chase the referral so the user gets the real registrar record.
if (preg_match('/(?:Whois Server|Registrar WHOIS Server):\s*(\S+)/i', $out, $m)) {
    $ref = rtrim($m[1], '.;,');
    if ($ref && strcasecmp($ref, $server) !== 0) {
        $second = whois_query($ref, $q);
        if (strlen(trim($second)) > 50) {
            $out .= "\n\n─── referral: $ref ───\n\n" . $second;
        }
    }
}

header('Content-Type: text/plain; charset=utf-8');
header('Access-Control-Allow-Origin: *');
echo "# whois " . htmlspecialchars($q) . " (via $server)\n\n";
echo $out;
