<?php
// Defence in depth — even if .htaccess is ignored by the web server,
// any direct hit on /api/data/ returns 403 here.
http_response_code(403);
header('Content-Type: text/plain');
exit('forbidden');
