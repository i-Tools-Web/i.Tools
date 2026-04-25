<?php
header('Content-Type: text/plain; charset=utf-8');
echo "iTools API\n";
echo "==========\n\n";
echo "Endpoints (all accept CORS):\n\n";
echo "  paste.php        — POST JSON {content,language?,ttl?,burn_after?} → {id,url}\n";
echo "                     GET  ?id=XXX → paste content\n\n";
echo "  shorturl.php     — POST JSON {target} → {id,short_url}\n";
echo "                     GET  ?id=XXX → 302 to target\n";
echo "                     GET  ?stats=XXX → hit stats\n\n";
echo "  fileshare.php    — POST multipart file[] + ttl,max_downloads → {id,url}\n";
echo "                     GET  ?id=XXX → download\n";
echo "                     GET  ?id=XXX&meta=1 → metadata\n\n";
echo "  whois.php        — GET ?q=domain-or-ip → plain text WHOIS\n\n";
echo "  headers.php      — GET ?url=... → JSON with full HTTP headers and timing\n\n";
echo "  gzipcheck.php    — GET ?url=... → JSON with uncompressed/gzip/brotli sizes\n\n";
echo "  brokenlinks.php  — GET ?url=... → JSON with 40 links checked\n\n";
echo "  bcrypt.php       — GET ?user=...&pass=...&cost=10 → htpasswd line\n";
