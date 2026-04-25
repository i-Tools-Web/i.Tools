<p align="center">
  <img src="hero-logo-512.png" alt="iTools" width="128" height="128">
</p>

<h1 align="center">iTools</h1>

<p align="center">
  A collection of useful web tools for developers — runs entirely in your browser, with optional PHP backend for cloud features.
</p>

<p align="center">
  <a href="https://i.tools">Live Site</a>
</p>

---

## Features

- **180 tools** across 12 categories
- **Zero backend by default** — most tools run client-side in your browser
- **No tracking, no cookies, no data collection**
- **Optional PHP + SQLite backend** for the Cloud category (file transfer, pastebin, URL shortener, WHOIS, etc.)
- **Apple Liquid Glass** UI design with frosted glass effects
- **Single page** — instant tool switching, no page reloads, searchable
- Vanilla JS, no frameworks, no build step

## Tools

| Category | Tools |
|---|---|
| **Text** | Word Counter, Case Converter, Text Diff, Slug Generator, Line Sorter, Find & Replace, Markdown Table, String Escape/Unescape, Text to ASCII Art, Word Frequency Analyzer, Morse Code Translator, Camel ↔ Snake Case, Full/Half Width, Unicode ↔ ASCII, Text Reverse/Flip, Vertical Text, Simplified ↔ Traditional Chinese, Martian Text (火星文), RMB Uppercase (人民币大写), Auto-Format Article, Text Effects, Text Compression (gzip + base64) |
| **Encode / Decode** | Base64 Codec, URL Encoder, HTML Entities, JWT Decoder, AES, DES, Triple DES, RC4, Rabbit, URL Hex Encoding |
| **Formatters** | JSON Formatter, SQL Formatter, CSS/JS Minifier, Markdown to HTML, XML Formatter, SVG Optimizer |
| **Developer** | Regex Tester, Hash Generator, Cron Parser, Chmod Calculator, Epoch Converter, User Agent Parser, Number Base, API Tester, .htaccess Generator, Meta Tag Generator, JSONPath Tester, HTML Live Preview, Nginx Config, OG Preview, IP/CIDR Calculator, Code Screenshot, JSON Schema Validator, CSS Selector Tester, Robots.txt Generator, Sitemap Generator, Schema.org Generator, Git Command Builder, package.json Generator, Favicon Generator, SRI Hash Generator, CSP Header Builder, HTTP Header Parser, JSON → Java/C#/Go/TypeScript, SQL → Java Class, XML ↔ JSON, JSON ↔ URL Params, HTML → Markdown, HTML ↔ JS String, HTML Formatter, Code Formatter (multi-lang), JS Obfuscator, htaccess ↔ Nginx Converter, XPath Tester, HTML Table Builder, HTML ↔ BBCode, HTML Sanitizer, WebSocket Tester, Browser Info, Keyboard Tester, Auto Refresh URL, Desktop Shortcut Generator, IP ↔ Number, IP Geolocation, Meta Tag Analyzer, Keyword Density, On This Day, WHOIS / RDAP, Regex → Code, World Clock |
| **Generators** | Password Generator, UUID Generator, QR Code Generator, Lorem Ipsum, Emoji Picker, Fake Data Generator, Barcode Generator, SVG Pattern Generator, Credit Card Test Numbers, Random Number Generator, htpasswd Generator |
| **CSS Tools** | Color Converter, Box Shadow, Gradient Generator, Border Radius, Aspect Ratio, Flexbox Playground, Grid Generator, Color Palette, CSS Animation Builder, CSS Filter Playground, CSS Transform Playground, Clip-Path Generator, Glassmorphism, Type Scale |
| **Data** | JSON / YAML, JSON / CSV, JSON Diff, Config Converter (TOML/INI/ENV/JSON/YAML), CSV Viewer/Editor, SQL to MongoDB, Set Diff |
| **Image** | Image to Base64, Placeholder Image, Image Crop & Resize, Image Compressor, Image Converter, Image Filters, Drawing Pad |
| **Math** | Scientific Calculator, Statistics Calculator, Interest Calculator |
| **Converters** | Length, Weight, Temperature, Area, Volume, Time, Speed, Angle, Data Size, Pressure, Power, Energy, Density, Force, rem ↔ px |
| **Reference** | HTTP Status Codes, HTTP Headers, HTTP Methods, MIME Types, Common Ports, ASCII Table, Common User-Agents, Keyboard KeyCodes, Android KeyCodes, Android Permissions, Special Characters, Linux Commands, Regex Cheatsheet, Common Regex Patterns, World Capitals, World Currencies, Dial Codes & Timezones, World Holidays, Chinese Dynasties, Public DNS Servers |
| **Cloud** *(optional, PHP backend)* | File Transfer (≤20 MB, TTL, max-downloads), Pastebin (TTL, burn-after-read), URL Shortener (with stats), HTTP Header Fetcher (bypasses CORS), Gzip / Brotli Check, Broken Link Checker, bcrypt Hash |

## Tech Stack

- HTML / CSS / vanilla JavaScript (no framework, no build step)
- SVG liquid glass filters for frosted-glass distortion
- [Inter](https://rsms.me/inter/) typeface
- External JS libraries (loaded via CDN, deferred):
  - [qrcodejs](https://github.com/davidshimjs/qrcodejs) for QR codes
  - [CryptoJS](https://github.com/brix/crypto-js) for AES/DES/3DES/RC4/Rabbit and APR1-MD5 in htpasswd
- Optional backend: PHP 7.4+ with PDO SQLite (no extra deps). The `/api` directory is independent — the static front-end works without it.

## Run Locally

No build step required. Serve the directory with any static file server:

```bash
# Python (Cloud tools won't work — no PHP)
python3 -m http.server 8000

# PHP — Cloud tools work
php -S localhost:8000
```

Then open `http://localhost:8000`.

> Note: PHP's built-in server (`php -S`) does NOT honor `.htaccess`. In production
> with Apache, the `/api/data/` directory is denied via `.htaccess`. There is also a
> defence-in-depth `index.php` inside that directory that returns 403 even when
> `.htaccess` is ignored. If you deploy behind Nginx, translate the rules in
> `api/data/.htaccess` to a `location /api/data/ { deny all; }` block.

## Backend security

The optional PHP backend stores data in `/api/data/` which contains:
- `itools.db` — SQLite database (pastes, short URLs, file metadata)
- `uploads/` — uploaded files for the file-transfer tool
- `rl_*` — per-IP rate-limit counters

This directory is protected by `.htaccess` (deny all), permissions `drwx------ www:www`, and a runtime `index.php` that returns 403 even if `.htaccess` is ignored. All access is mediated through the `/api/*.php` endpoints which enforce per-IP rate limits, file size caps, and mime-type restrictions.

If you do not want the cloud features, simply delete the `/api/` directory — the static tools continue to work.

## License

[MIT](LICENSE)
