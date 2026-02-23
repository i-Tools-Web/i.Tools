<p align="center">
  <img src="hero-logo-512.png" alt="iTools" width="128" height="128">
</p>

<h1 align="center">iTools</h1>

<p align="center">
  A collection of useful web tools for developers — runs entirely in your browser.
</p>

<p align="center">
  <a href="https://i.tools">Live Site</a>
</p>

---

## Features

- **41 tools** across 8 categories
- **Zero backend** — everything runs client-side in your browser
- **No tracking, no cookies, no data collection**
- **Apple Liquid Glass** UI design with frosted glass effects
- **Single page** — instant tool switching, no page reloads
- Vanilla JS, no frameworks, no build step

## Tools

| Category | Tools |
|---|---|
| **Text** | Word Counter, Case Converter, Text Diff, Slug Generator, Line Sorter, Find & Replace |
| **Encode / Decode** | Base64 Codec, URL Encoder, HTML Entities, JWT Decoder |
| **Formatters** | JSON Formatter, SQL Formatter, CSS/JS Minifier, Markdown to HTML |
| **Developer** | Regex Tester, Hash Generator, Cron Parser, Chmod Calculator, Epoch Converter, User Agent Parser, Number Base, API Tester, .htaccess Generator, Meta Tag Generator |
| **Generators** | Password Generator, UUID Generator, QR Code Generator |
| **CSS Tools** | Color Converter, Box Shadow, Gradient Generator, Border Radius, Aspect Ratio |
| **Data** | JSON / YAML, JSON / CSV |
| **Image** | Image to Base64, Placeholder Image, Image Crop & Resize, Image Compressor, Image Converter, Image Filters |

## Tech Stack

- HTML / CSS / vanilla JavaScript
- SVG liquid glass filters for frosted-glass distortion
- [Inter](https://rsms.me/inter/) typeface
- [qrcodejs](https://github.com/davidshimjs/qrcodejs) for QR code generation (only external dependency)

## Run Locally

No build step required. Serve the directory with any static file server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000`.

## License

Open source. See the repository for details.
