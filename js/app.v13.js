/* ============================================
   iTools — Application Logic
   ============================================ */

(() => {
  'use strict';

  // ── SVG Icons (clean line icons, no emoji) ────
  const icons = {
    json: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"/><path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"/></svg>`,
    base64: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>`,
    url: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
    password: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></svg>`,
    uuid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 12h8"/><path d="M8 8h3"/><path d="M8 16h5"/></svg>`,
    hash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`,
    color: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="4.5"/><circle cx="17.5" cy="14.5" r="4.5"/><circle cx="8.5" cy="14.5" r="4.5"/></svg>`,
    qr: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="3" height="3" rx="0.5"/><line x1="21" y1="14" x2="21" y2="21"/><line x1="14" y1="21" x2="21" y2="21"/></svg>`,
    wordcount: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h10"/><path d="M4 17h12"/></svg>`,
    caseconv: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15h4l2-6 2 6h4"/><path d="M17 7h4"/><path d="M19 5v4"/><circle cx="19" cy="15" r="3"/><path d="M22 15v3"/></svg>`,
    regex: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v6l4-3-4-3z"/><circle cx="12" cy="16" r="1.5"/><path d="M17 8l-3 4"/><path d="M7 8l3 4"/><path d="M5 20h14"/></svg>`,
    jwt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18"/><path d="M3 15h18"/><circle cx="7" cy="6" r="1" fill="currentColor" stroke="none"/></svg>`,
    numberbase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16"/><path d="M17 4v16"/><path d="M4 12h16"/><path d="M4 8h4"/><path d="M16 8h4"/><path d="M4 16h4"/><path d="M16 16h4"/></svg>`,
    timestamp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M11 14h1v3"/></svg>`,
    diff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v6"/><path d="M9 6h6"/><path d="M9 18h6"/><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="4" y1="12" x2="20" y2="12"/></svg>`,
    cron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 8 14"/><path d="M17 17l2 2"/></svg>`,
    htmlentity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    slug: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/><path d="M8 17h8"/></svg>`,
    sqlformat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 5v6c0 1.66-4.03 3-9 3s-9-1.34-9-3V5"/><path d="M21 11v6c0 1.66-4.03 3-9 3s-9-1.34-9-3v-6"/></svg>`,
    cssminify: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><path d="M12 3v4m0 10v4"/><path d="M9 8l3 2 3-2"/><path d="M9 16l3-2 3 2"/></svg>`,
    chmod: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l7 4v6c0 5.25-3.5 9.5-7 11-3.5-1.5-7-5.75-7-11V6l7-4z"/><path d="M9 12l2 2 4-4"/></svg>`,
    epoch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/><path d="M4 4l2 2"/><path d="M18 18l2 2"/></svg>`,
    useragent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    boxshadow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="14" height="14" rx="2"/><path d="M7 21h12a2 2 0 0 0 2-2V7" opacity="0.4"/></svg>`,
    gradient: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="7" y1="3" x2="7" y2="21"/><line x1="11" y1="3" x2="11" y2="21" opacity="0.6"/><line x1="15" y1="3" x2="15" y2="21" opacity="0.35"/><line x1="19" y1="3" x2="19" y2="21" opacity="0.15"/></svg>`,
    borderradius: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M9 21h6"/><path d="M3 9v6"/><path d="M21 9v6"/><path d="M3 9a6 6 0 0 1 6-6"/><path d="M21 9a6 6 0 0 0-6-6"/><path d="M3 15a6 6 0 0 0 6 6"/><path d="M21 15a6 6 0 0 1-6 6"/></svg>`,
    json2yaml: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h6v7H4z" rx="1"/><path d="M14 13h6v7h-6z" rx="1"/><path d="M10 7h2l2 3-2 3h-2"/></svg>`,
    json2csv: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,
    img2base64: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/><path d="M2 17l3 3"/><path d="M19 7h3"/></svg>`,
    placeholder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="3" x2="21" y2="21"/><line x1="21" y1="3" x2="3" y2="21"/><path d="M3 12h18"/><path d="M12 3v18"/></svg>`,
    imgcrop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v4H2"/><path d="M18 22v-4h4"/><rect x="6" y="6" width="12" height="12" rx="1"/><path d="M6 2v4"/><path d="M2 6h4"/><path d="M18 22v-4"/><path d="M22 18h-4"/></svg>`,
    imgcompress: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/><path d="M14 3v4l2-2 2 2V3"/></svg>`,
    imgconvert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="8" height="8" rx="1"/><rect x="14" y="13" width="8" height="8" rx="1"/><path d="M14 7h4"/><path d="M16 5v4"/><path d="M6 13v4"/><path d="M4 15h4"/></svg>`,
    imgfilters: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v18"/><path d="M3 12c3-4 6-4 9 0s6 4 9 0"/></svg>`,
    linesort: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h10"/><path d="M4 12h7"/><path d="M4 18h4"/><path d="M18 6v12"/><path d="M15 15l3 3 3-3"/></svg>`,
    textreplace: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4v7"/><path d="M4 4l7 7"/><path d="M13 20h7v-7"/><path d="M20 20l-7-7"/><path d="M4 15h6"/><path d="M14 9h6"/></svg>`,
    metatags: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><path d="M12 2v4"/><circle cx="12" cy="9" r="1"/></svg>`,
    htaccess: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2l1-1 1 1h2"/><path d="M10 17h4"/></svg>`,
    apitester: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z" rx="2"/><path d="M9 9l3 3-3 3"/><path d="M14 15h3"/></svg>`,
    md2html: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="8" height="7" rx="1"/><path d="M4 7v2l1.5-1.5L7 9V7"/><path d="M12 8h2l1.5-2L17 8"/><path d="M12 11h5"/><path d="M4 15h16"/><path d="M4 19h12"/></svg>`,
    aspectratio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9l4 3-4 3"/><path d="M17 9l-4 3 4 3"/></svg>`,
    linecount: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><circle cx="20" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="20" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="20" cy="17" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  };

  // ── Tool Definitions ──────────────────────────
  const tools = [
    // Text
    { id: 'wordcount', cat: 'Text',             title: 'Word Counter',       desc: 'Count words, characters, sentences & lines' },
    { id: 'caseconv',  cat: 'Text',             title: 'Case Converter',     desc: 'Transform text case -- upper, lower, title & more' },
    { id: 'diff',      cat: 'Text',             title: 'Text Diff',          desc: 'Compare two texts and highlight differences' },
    { id: 'slug',      cat: 'Text',             title: 'Slug Generator',     desc: 'Generate URL-friendly slugs from text' },
    { id: 'linesort',  cat: 'Text',             title: 'Line Sorter',        desc: 'Sort lines, remove duplicates, reverse order' },
    { id: 'textreplace',cat: 'Text',            title: 'Find & Replace',     desc: 'Find and replace text with regex support' },
    // Encode / Decode
    { id: 'base64',    cat: 'Encode / Decode',  title: 'Base64 Codec',       desc: 'Encode & decode Base64 strings' },
    { id: 'url',       cat: 'Encode / Decode',  title: 'URL Encoder',        desc: 'Encode & decode URL components' },
    { id: 'htmlentity',cat: 'Encode / Decode',  title: 'HTML Entities',      desc: 'Encode & decode HTML entities and special chars' },
    { id: 'jwt',       cat: 'Encode / Decode',  title: 'JWT Decoder',        desc: 'Decode and inspect JSON Web Tokens' },
    // Formatters
    { id: 'json',      cat: 'Formatters',       title: 'JSON Formatter',     desc: 'Beautify, minify & validate JSON' },
    { id: 'sqlformat', cat: 'Formatters',       title: 'SQL Formatter',      desc: 'Beautify and minify SQL queries' },
    { id: 'cssminify', cat: 'Formatters',       title: 'CSS/JS Minifier',    desc: 'Minify and beautify CSS or JavaScript' },
    { id: 'md2html',   cat: 'Formatters',       title: 'Markdown to HTML',   desc: 'Convert Markdown to clean HTML' },
    // Developer
    { id: 'regex',     cat: 'Developer',        title: 'Regex Tester',       desc: 'Test regular expressions with live matching' },
    { id: 'hash',      cat: 'Developer',        title: 'Hash Generator',     desc: 'MD5, SHA-1 & SHA-256 hashing' },
    { id: 'cron',      cat: 'Developer',        title: 'Cron Parser',        desc: 'Parse and describe cron schedule expressions' },
    { id: 'chmod',     cat: 'Developer',        title: 'Chmod Calculator',   desc: 'Calculate file permission modes' },
    { id: 'epoch',     cat: 'Developer',        title: 'Epoch Converter',    desc: 'Convert between Unix timestamps and dates' },
    { id: 'useragent', cat: 'Developer',        title: 'User Agent Parser',  desc: 'Parse and analyze browser user agent strings' },
    { id: 'numberbase',cat: 'Developer',        title: 'Number Base',        desc: 'Convert between decimal, hex, octal & binary' },
    { id: 'apitester', cat: 'Developer',        title: 'API Tester',         desc: 'Send HTTP requests and inspect responses' },
    { id: 'htaccess',  cat: 'Developer',        title: '.htaccess Generator',desc: 'Generate common .htaccess rules' },
    { id: 'metatags',  cat: 'Developer',        title: 'Meta Tag Generator', desc: 'Generate Open Graph & SEO meta tags' },
    // Generators
    { id: 'password',  cat: 'Generators',       title: 'Password Generator', desc: 'Generate secure random passwords' },
    { id: 'uuid',      cat: 'Generators',       title: 'UUID Generator',     desc: 'Generate random UUID v4 identifiers' },
    { id: 'qr',        cat: 'Generators',       title: 'QR Code Generator',  desc: 'Generate QR codes from text or URLs' },
    // CSS Tools
    { id: 'color',     cat: 'CSS Tools',        title: 'Color Converter',    desc: 'Convert between HEX, RGB & HSL' },
    { id: 'boxshadow', cat: 'CSS Tools',        title: 'Box Shadow',         desc: 'Generate CSS box-shadow with live preview' },
    { id: 'gradient',  cat: 'CSS Tools',        title: 'Gradient Generator', desc: 'Create CSS gradients with live preview' },
    { id: 'borderradius',cat: 'CSS Tools',      title: 'Border Radius',      desc: 'Generate CSS border-radius with live preview' },
    { id: 'aspectratio',cat: 'CSS Tools',       title: 'Aspect Ratio',       desc: 'Calculate and convert aspect ratios' },
    // Data
    { id: 'json2yaml', cat: 'Data',             title: 'JSON / YAML',        desc: 'Convert between JSON and YAML formats' },
    { id: 'json2csv',  cat: 'Data',             title: 'JSON / CSV',         desc: 'Convert between JSON and CSV formats' },
    // Image
    { id: 'img2base64',cat: 'Image',            title: 'Image to Base64',    desc: 'Convert images to Base64 data URIs' },
    { id: 'placeholder',cat: 'Image',           title: 'Placeholder Image',  desc: 'Generate placeholder images with custom size' },
    { id: 'imgcrop',   cat: 'Image',            title: 'Image Crop & Resize',desc: 'Crop and resize images in the browser' },
    { id: 'imgcompress',cat: 'Image',           title: 'Image Compressor',   desc: 'Compress images by adjusting quality' },
    { id: 'imgconvert', cat: 'Image',           title: 'Image Converter',    desc: 'Convert between PNG, JPG & WebP formats' },
    { id: 'imgfilters', cat: 'Image',           title: 'Image Filters',      desc: 'Adjust brightness, contrast, saturation & more' },
    // Keep timestamp as Epoch Converter (renamed)
    { id: 'timestamp', cat: 'Developer',        title: 'Epoch Converter',    desc: 'Format dates and convert between formats' },
  ];

  // ── Render Tool Cards (grouped by category) ──
  const grid = document.getElementById('tool-grid');
  const categories = [...new Set(tools.map(t => t.cat))];

  // Build sticky category nav
  const catNav = document.createElement('nav');
  catNav.className = 'cat-nav';
  catNav.id = 'cat-nav';
  const catNavInner = document.createElement('div');
  catNavInner.className = 'cat-nav-inner';
  categories.forEach(cat => {
    const slug = cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const btn = document.createElement('a');
    btn.className = 'cat-nav-item';
    btn.href = '#cat-' + slug;
    btn.textContent = cat;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('cat-' + slug);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    catNavInner.appendChild(btn);
  });
  catNav.appendChild(catNavInner);
  grid.parentNode.insertBefore(catNav, grid);

  // Highlight active category on scroll
  const sectionEls = [];
  categories.forEach(cat => {
    const slug = cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const section = document.createElement('div');
    section.className = 'tool-section';
    section.id = 'cat-' + slug;

    const heading = document.createElement('div');
    heading.className = 'section-title';
    heading.textContent = cat;
    section.appendChild(heading);

    const sectionGrid = document.createElement('div');
    sectionGrid.className = 'tool-grid';

    tools.filter(t => t.cat === cat).forEach(t => {
      const card = document.createElement('div');
      card.className = 'glass-card';
      card.dataset.tool = t.id;
      card.innerHTML = `
        <div class="card-icon">${icons[t.id]}</div>
        <div class="card-title">${t.title}</div>
        <div class="card-desc">${t.desc}</div>
      `;
      card.addEventListener('click', () => openTool(t));
      sectionGrid.appendChild(card);
    });

    section.appendChild(sectionGrid);
    grid.appendChild(section);
    sectionEls.push({ slug, el: section });
  });

  // Active state tracking on scroll
  let navItems = catNavInner.querySelectorAll('.cat-nav-item');
  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    let activeSlug = sectionEls[0].slug;
    for (const s of sectionEls) {
      if (s.el.offsetTop <= scrollY) activeSlug = s.slug;
    }
    navItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('href') === '#cat-' + activeSlug);
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // ── Panel Overlay ─────────────────────────────
  const overlay = document.getElementById('panel-overlay');
  const panel   = document.getElementById('tool-panel');
  const panelTitle   = document.getElementById('panel-title');
  const panelContent = document.getElementById('panel-content');
  const closeBtn     = document.getElementById('panel-close');

  let activeInterval = null;

  function openTool(t) {
    panelTitle.innerHTML = `<span class="panel-icon">${icons[t.id]}</span> ${t.title}`;
    panelContent.innerHTML = '';
    clearInterval(activeInterval);
    activeInterval = null;

    const builder = toolBuilders[t.id];
    if (builder) builder(panelContent);

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePanel() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    clearInterval(activeInterval);
    activeInterval = null;
  }

  closeBtn.addEventListener('click', closePanel);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closePanel();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePanel();
  });

  // ── Utility Helpers ───────────────────────────
  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'className') node.className = v;
      else if (k === 'textContent') node.textContent = v;
      else if (k === 'innerHTML') node.innerHTML = v;
      else if (k.startsWith('on')) node.addEventListener(k.slice(2).toLowerCase(), v);
      else node.setAttribute(k, v);
    }
    children.forEach(c => {
      if (typeof c === 'string') node.appendChild(document.createTextNode(c));
      else if (c) node.appendChild(c);
    });
    return node;
  }

  function resultBox(container, text) {
    let box = container.querySelector('.result-box');
    if (!box) {
      box = el('div', { className: 'result-box' });
      const copyBtn = el('button', { className: 'copy-btn', textContent: 'Copy', onClick: () => {
        navigator.clipboard.writeText(box.textContent.replace('Copy', '').trim());
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy', 1500);
      }});
      box.appendChild(copyBtn);
      container.appendChild(box);
    }
    const copyBtn = box.querySelector('.copy-btn');
    box.textContent = text;
    if (copyBtn) box.appendChild(copyBtn);
  }

  // iOS-style toggle switch builder
  function iosToggle(id, labelText, checked, onChange) {
    const row = el('div', { className: 'toggle-row' });
    const label = el('label', { className: 'ios-toggle-label', for: id, textContent: labelText });
    const wrapper = el('label', { className: 'ios-switch' });
    const input = el('input', { type: 'checkbox', id: id });
    input.checked = checked;
    if (onChange) input.addEventListener('change', onChange);
    const slider = el('span', { className: 'ios-switch-track' });
    wrapper.appendChild(input);
    wrapper.appendChild(slider);
    row.appendChild(label);
    row.appendChild(wrapper);
    return { row, input };
  }

  // Liquid Glass range slider — custom div-based with glass thumb
  function lgSlider(id, min, max, value, labelId, onInput) {
    const group = el('div', { className: 'form-group' });
    const label = el('label', { id: labelId });
    group.appendChild(label);

    const slider = el('div', { className: 'lg-slider', id: id });
    const track = el('div', { className: 'lg-slider-track' });
    const fill = el('div', { className: 'lg-slider-fill' });
    const thumb = el('div', { className: 'lg-slider-thumb' });
    track.appendChild(fill);
    slider.appendChild(track);
    slider.appendChild(thumb);
    group.appendChild(slider);

    let currentValue = value;
    const input = { get value() { return currentValue; } };

    function pctFromVal(v) {
      return ((v - min) / (max - min)) * 100;
    }

    function valFromPct(pct) {
      return Math.round(min + (pct / 100) * (max - min));
    }

    function update(v) {
      currentValue = Math.max(min, Math.min(max, v));
      const pct = pctFromVal(currentValue);
      fill.style.width = pct + '%';
      thumb.style.left = pct + '%';
      slider.style.setProperty('--fill', pct + '%');
      if (onInput) onInput();
    }

    function posFromEvent(e) {
      const rect = slider.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      return Math.max(0, Math.min(100, (x / rect.width) * 100));
    }

    let dragging = false;

    function onStart(e) {
      e.preventDefault();
      dragging = true;
      thumb.classList.add('dragging');
      update(valFromPct(posFromEvent(e)));
    }
    function onMove(e) {
      if (!dragging) return;
      e.preventDefault();
      update(valFromPct(posFromEvent(e)));
    }
    function onEnd() {
      dragging = false;
      thumb.classList.remove('dragging');
    }

    slider.addEventListener('mousedown', onStart);
    slider.addEventListener('touchstart', onStart, { passive: false });
    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchend', onEnd);

    // Set position without firing callback (caller hasn't destructured yet)
    currentValue = Math.max(min, Math.min(max, value));
    const initPct = pctFromVal(currentValue);
    fill.style.width = initPct + '%';
    thumb.style.left = initPct + '%';
    slider.style.setProperty('--fill', initPct + '%');

    return { group, input, label };
  }

  // Liquid Glass picker — custom dropdown
  function glassPicker(id, options, selectedValue, onChange) {
    const wrapper = el('div', { className: 'glass-picker', id: id });
    const trigger = el('button', { className: 'glass-picker-trigger', type: 'button' });
    trigger.textContent = selectedValue;
    const menu = el('div', { className: 'glass-picker-menu' });

    let current = selectedValue;

    function render() {
      menu.innerHTML = '';
      options.forEach(opt => {
        const btn = el('button', {
          className: 'glass-picker-option' + (opt === current ? ' selected' : ''),
          type: 'button',
          textContent: opt,
          onClick: () => {
            current = opt;
            trigger.textContent = opt;
            wrapper.classList.remove('open');
            render();
            if (onChange) onChange(opt);
          }
        });
        menu.appendChild(btn);
      });
    }

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      // Close other open pickers
      document.querySelectorAll('.glass-picker.open').forEach(p => {
        if (p !== wrapper) p.classList.remove('open');
      });
      wrapper.classList.toggle('open');
    });

    // Close on outside click
    document.addEventListener('click', () => wrapper.classList.remove('open'));
    wrapper.addEventListener('click', e => e.stopPropagation());

    wrapper.appendChild(trigger);
    wrapper.appendChild(menu);
    render();

    return { wrapper, get value() { return current; } };
  }

  // ── Tool Builders ─────────────────────────────

  const toolBuilders = {};

  // ── JSON Formatter ──
  toolBuilders.json = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input JSON' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: '{"key": "value"}', rows: '8' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const btns = el('div', { className: 'btn-group' });
    btns.appendChild(el('button', { className: 'btn btn-primary btn-sm', textContent: 'Beautify', onClick: () => {
      try {
        const obj = JSON.parse(textarea.value);
        const pretty = JSON.stringify(obj, null, 2);
        textarea.value = pretty;
        resultBox(container, pretty);
      } catch (e) {
        resultBox(container, 'Error: ' + e.message);
      }
    }}));
    btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Minify', onClick: () => {
      try {
        const obj = JSON.parse(textarea.value);
        const mini = JSON.stringify(obj);
        textarea.value = mini;
        resultBox(container, mini);
      } catch (e) {
        resultBox(container, 'Error: ' + e.message);
      }
    }}));
    btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Validate', onClick: () => {
      try {
        JSON.parse(textarea.value);
        resultBox(container, 'Valid JSON');
      } catch (e) {
        resultBox(container, 'Invalid JSON: ' + e.message);
      }
    }}));
    container.appendChild(btns);
  };

  // ── Base64 Codec ──
  toolBuilders.base64 = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'Enter text or Base64 string...', rows: '5' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const btns = el('div', { className: 'btn-group' });
    btns.appendChild(el('button', { className: 'btn btn-primary btn-sm', textContent: 'Encode', onClick: () => {
      try {
        resultBox(container, btoa(unescape(encodeURIComponent(textarea.value))));
      } catch (e) {
        resultBox(container, 'Error: ' + e.message);
      }
    }}));
    btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Decode', onClick: () => {
      try {
        resultBox(container, decodeURIComponent(escape(atob(textarea.value.trim()))));
      } catch (e) {
        resultBox(container, 'Error: Invalid Base64 string');
      }
    }}));
    container.appendChild(btns);
  };

  // ── URL Encoder ──
  toolBuilders.url = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'Enter URL or encoded string...', rows: '4' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const btns = el('div', { className: 'btn-group' });
    btns.appendChild(el('button', { className: 'btn btn-primary btn-sm', textContent: 'Encode', onClick: () => {
      resultBox(container, encodeURIComponent(textarea.value));
    }}));
    btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Decode', onClick: () => {
      try {
        resultBox(container, decodeURIComponent(textarea.value));
      } catch (e) {
        resultBox(container, 'Error: Invalid encoded string');
      }
    }}));
    btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Encode Full URL', onClick: () => {
      resultBox(container, encodeURI(textarea.value));
    }}));
    container.appendChild(btns);
  };

  // ── Password Generator ──
  toolBuilders.password = (container) => {
    // Length slider -- liquid glass
    const { group: lenGroup, input: lenSlider, label: lenLabel } = lgSlider(
      'pw-length', 8, 64, 20, 'pw-len-label', () => {
        lenLabel.textContent = `Length: ${lenSlider.value}`;
      }
    );
    lenLabel.textContent = 'Length: 20';
    container.appendChild(lenGroup);

    // Options -- iOS toggle switches
    const opts = [
      { id: 'pw-upper', label: 'Uppercase (A-Z)', checked: true },
      { id: 'pw-lower', label: 'Lowercase (a-z)', checked: true },
      { id: 'pw-digits', label: 'Digits (0-9)', checked: true },
      { id: 'pw-symbols', label: 'Symbols (!@#$...)', checked: true },
    ];
    opts.forEach(o => {
      const { row } = iosToggle(o.id, o.label, o.checked);
      container.appendChild(row);
    });

    const genBtn = el('button', { className: 'btn btn-primary', style: 'margin-top:16px;width:100%', textContent: 'Generate Password', onClick: generate });
    container.appendChild(genBtn);

    function generate() {
      const len = parseInt(lenSlider.value, 10);
      let charset = '';
      if (document.getElementById('pw-upper').checked) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (document.getElementById('pw-lower').checked) charset += 'abcdefghijklmnopqrstuvwxyz';
      if (document.getElementById('pw-digits').checked) charset += '0123456789';
      if (document.getElementById('pw-symbols').checked) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
      if (!charset) { resultBox(container, 'Select at least one character set'); return; }

      const arr = new Uint32Array(len);
      crypto.getRandomValues(arr);
      let pw = '';
      for (let i = 0; i < len; i++) {
        pw += charset[arr[i] % charset.length];
      }
      resultBox(container, pw);
    }
    generate();
  };

  // ── UUID Generator ──
  toolBuilders.uuid = (container) => {
    const countGroup = el('div', { className: 'form-group' });
    countGroup.appendChild(el('label', { textContent: 'Number of UUIDs' }));
    const countInput = el('input', { className: 'glass-input', type: 'number', value: '5', min: '1', max: '50' });
    countGroup.appendChild(countInput);
    container.appendChild(countGroup);

    const genBtn = el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Generate UUIDs', onClick: generate });
    container.appendChild(genBtn);

    function uuidv4() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
    }

    function generate() {
      const n = Math.min(50, Math.max(1, parseInt(countInput.value, 10) || 1));
      const uuids = Array.from({ length: n }, () => uuidv4()).join('\n');
      resultBox(container, uuids);
    }
    generate();
  };

  // ── Hash Generator ──
  toolBuilders.hash = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input Text' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'Enter text to hash...', rows: '4' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    // Tabs for algorithm
    const tabRow = el('div', { className: 'tab-row' });
    const algorithms = ['SHA-256', 'SHA-1', 'SHA-384', 'SHA-512'];
    let currentAlgo = 'SHA-256';

    algorithms.forEach(algo => {
      const btn = el('button', {
        className: `tab-btn ${algo === currentAlgo ? 'active' : ''}`,
        textContent: algo,
        onClick: () => {
          tabRow.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentAlgo = algo;
          doHash();
        }
      });
      tabRow.appendChild(btn);
    });
    container.appendChild(tabRow);

    const genBtn = el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Generate Hash', onClick: doHash });
    container.appendChild(genBtn);

    async function doHash() {
      const text = textarea.value;
      if (!text) { resultBox(container, 'Enter text above'); return; }
      try {
        const encoded = new TextEncoder().encode(text);
        const hashBuffer = await crypto.subtle.digest(currentAlgo, encoded);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        resultBox(container, hashHex);
      } catch (e) {
        resultBox(container, 'Error: ' + e.message);
      }
    }
  };

  // ── Color Converter ──
  toolBuilders.color = (container) => {
    const preview = el('div', { className: 'color-preview', style: 'background:#007AFF;margin-bottom:18px' });
    container.appendChild(preview);

    // HEX
    const hexGroup = el('div', { className: 'form-group' });
    hexGroup.appendChild(el('label', { textContent: 'HEX' }));
    const hexInput = el('input', { className: 'glass-input', value: '#007AFF', placeholder: '#007AFF' });
    hexGroup.appendChild(hexInput);
    container.appendChild(hexGroup);

    // RGB
    const rgbGroup = el('div', { className: 'form-group' });
    rgbGroup.appendChild(el('label', { textContent: 'RGB' }));
    const rgbRow = el('div', { className: 'form-row' });
    const rInput = el('input', { className: 'glass-input', type: 'number', min: '0', max: '255', value: '0', placeholder: 'R' });
    const gInput = el('input', { className: 'glass-input', type: 'number', min: '0', max: '255', value: '122', placeholder: 'G' });
    const bInput = el('input', { className: 'glass-input', type: 'number', min: '0', max: '255', value: '255', placeholder: 'B' });
    rgbRow.append(rInput, gInput, bInput);
    rgbGroup.appendChild(rgbRow);
    container.appendChild(rgbGroup);

    // HSL
    const hslGroup = el('div', { className: 'form-group' });
    hslGroup.appendChild(el('label', { textContent: 'HSL' }));
    const hslRow = el('div', { className: 'form-row' });
    const hInput = el('input', { className: 'glass-input', type: 'number', min: '0', max: '360', value: '211', placeholder: 'H' });
    const sInput = el('input', { className: 'glass-input', type: 'number', min: '0', max: '100', value: '100', placeholder: 'S%' });
    const lInput = el('input', { className: 'glass-input', type: 'number', min: '0', max: '100', value: '50', placeholder: 'L%' });
    hslRow.append(hInput, sInput, lInput);
    hslGroup.appendChild(hslRow);
    container.appendChild(hslGroup);

    // Color picker
    const pickerGroup = el('div', { className: 'form-group' });
    pickerGroup.appendChild(el('label', { textContent: 'Color Picker' }));
    const picker = el('input', { type: 'color', className: 'ios-color-picker', value: '#007AFF' });
    pickerGroup.appendChild(picker);
    container.appendChild(pickerGroup);

    function hexToRgb(hex) {
      hex = hex.replace('#', '');
      if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
      const n = parseInt(hex, 16);
      return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    }

    function rgbToHex(r, g, b) {
      return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('').toUpperCase();
    }

    function rgbToHsl(r, g, b) {
      r /= 255; g /= 255; b /= 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;
      if (max === min) { h = s = 0; }
      else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
          case g: h = ((b - r) / d + 2) / 6; break;
          case b: h = ((r - g) / d + 4) / 6; break;
        }
      }
      return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
    }

    function hslToRgb(h, s, l) {
      h /= 360; s /= 100; l /= 100;
      let r, g, b;
      if (s === 0) { r = g = b = l; }
      else {
        const hue2rgb = (p, q, t) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1/6) return p + (q - p) * 6 * t;
          if (t < 1/2) return q;
          if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
      }
      return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
    }

    function updateFromHex() {
      const hex = hexInput.value.trim();
      if (!/^#?[0-9a-fA-F]{3,6}$/.test(hex)) return;
      const { r, g, b } = hexToRgb(hex);
      rInput.value = r; gInput.value = g; bInput.value = b;
      const hsl = rgbToHsl(r, g, b);
      hInput.value = hsl.h; sInput.value = hsl.s; lInput.value = hsl.l;
      const fullHex = rgbToHex(r, g, b);
      preview.style.background = fullHex;
      picker.value = fullHex;
    }

    function updateFromRgb() {
      const r = parseInt(rInput.value) || 0;
      const g = parseInt(gInput.value) || 0;
      const b = parseInt(bInput.value) || 0;
      const hex = rgbToHex(r, g, b);
      hexInput.value = hex;
      const hsl = rgbToHsl(r, g, b);
      hInput.value = hsl.h; sInput.value = hsl.s; lInput.value = hsl.l;
      preview.style.background = hex;
      picker.value = hex;
    }

    function updateFromHsl() {
      const h = parseInt(hInput.value) || 0;
      const s = parseInt(sInput.value) || 0;
      const l = parseInt(lInput.value) || 0;
      const { r, g, b } = hslToRgb(h, s, l);
      rInput.value = r; gInput.value = g; bInput.value = b;
      const hex = rgbToHex(r, g, b);
      hexInput.value = hex;
      preview.style.background = hex;
      picker.value = hex;
    }

    hexInput.addEventListener('input', updateFromHex);
    [rInput, gInput, bInput].forEach(i => i.addEventListener('input', updateFromRgb));
    [hInput, sInput, lInput].forEach(i => i.addEventListener('input', updateFromHsl));
    picker.addEventListener('input', () => {
      hexInput.value = picker.value;
      updateFromHex();
    });
  };

  // ── QR Code Generator ──
  toolBuilders.qr = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Text or URL' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'https://example.com', rows: '3' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const genBtn = el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Generate QR Code', onClick: generate });
    container.appendChild(genBtn);

    const qrDiv = el('div', { className: 'qr-output', id: 'qr-canvas' });
    container.appendChild(qrDiv);

    function generate() {
      const text = textarea.value.trim();
      if (!text) return;
      qrDiv.innerHTML = '';

      if (typeof QRCode !== 'undefined') {
        new QRCode(qrDiv, {
          text: text,
          width: 200,
          height: 200,
          colorDark: '#1d1d1f',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H
        });
      } else {
        qrDiv.textContent = 'QR library not loaded. Please check your connection.';
      }
    }
  };

  // ── Word Counter ──
  toolBuilders.wordcount = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input Text' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'Paste or type your text here...', rows: '8' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const statsDiv = el('div');
    container.appendChild(statsDiv);

    function update() {
      const text = textarea.value;
      const chars = text.length;
      const charsNoSpace = text.replace(/\s/g, '').length;
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
      const lines = text.trim() ? text.split(/\n/).length : 0;
      const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim()).length : 0;
      const readTime = Math.max(1, Math.ceil(words / 200));
      statsDiv.innerHTML = '';
      [
        ['Characters', chars],
        ['Characters (no spaces)', charsNoSpace],
        ['Words', words],
        ['Sentences', sentences],
        ['Lines', lines],
        ['Paragraphs', paragraphs],
        ['Reading Time', readTime + ' min'],
      ].forEach(([label, value]) => {
        const row = el('div', { className: 'info-row' });
        row.appendChild(el('span', { className: 'info-label', textContent: label }));
        row.appendChild(el('span', { className: 'info-value', textContent: String(value) }));
        statsDiv.appendChild(row);
      });
    }
    textarea.addEventListener('input', update);
    update();
  };

  // ── Case Converter ──
  toolBuilders.caseconv = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input Text' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'Enter text to convert...', rows: '4' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const conversions = [
      ['UPPERCASE', s => s.toUpperCase()],
      ['lowercase', s => s.toLowerCase()],
      ['Title Case', s => s.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase())],
      ['Sentence case', s => s.toLowerCase().replace(/(^\s*|[.!?]\s+)(\w)/g, (m, p, c) => p + c.toUpperCase())],
      ['camelCase', s => s.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, c) => c.toUpperCase())],
      ['snake_case', s => s.replace(/\s+/g, '_').replace(/[A-Z]/g, c => '_' + c.toLowerCase()).replace(/^_/, '').replace(/__+/g, '_').toLowerCase()],
      ['kebab-case', s => s.replace(/\s+/g, '-').replace(/[A-Z]/g, c => '-' + c.toLowerCase()).replace(/^-/, '').replace(/--+/g, '-').toLowerCase()],
      ['CONSTANT_CASE', s => s.replace(/\s+/g, '_').replace(/[A-Z]/g, c => '_' + c).replace(/^_/, '').replace(/__+/g, '_').toUpperCase()],
    ];

    const btns = el('div', { className: 'btn-group', style: 'flex-wrap:wrap' });
    conversions.forEach(([name, fn]) => {
      btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: name, onClick: () => {
        if (textarea.value) resultBox(container, fn(textarea.value));
      }}));
    });
    container.appendChild(btns);
  };

  // ── Regex Tester ──
  toolBuilders.regex = (container) => {
    const fg1 = el('div', { className: 'form-group' });
    fg1.appendChild(el('label', { textContent: 'Regular Expression' }));
    const regexRow = el('div', { className: 'form-row' });
    const regexInput = el('input', { className: 'glass-input', placeholder: '[a-z]+', style: 'flex:3' });
    const flagsInput = el('input', { className: 'glass-input', placeholder: 'gi', value: 'gi', style: 'flex:1' });
    regexRow.append(regexInput, flagsInput);
    fg1.appendChild(regexRow);
    container.appendChild(fg1);

    const fg2 = el('div', { className: 'form-group' });
    fg2.appendChild(el('label', { textContent: 'Test String' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'Enter text to test against...', rows: '4' });
    fg2.appendChild(textarea);
    container.appendChild(fg2);

    const testBtn = el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Test', onClick: test });
    container.appendChild(testBtn);

    function test() {
      try {
        const regex = new RegExp(regexInput.value, flagsInput.value);
        const matches = textarea.value.match(regex);
        if (matches) {
          resultBox(container, `${matches.length} match${matches.length > 1 ? 'es' : ''} found:\n\n${matches.join('\n')}`);
        } else {
          resultBox(container, 'No matches found');
        }
      } catch (e) {
        resultBox(container, 'Error: ' + e.message);
      }
    }
  };

  // ── JWT Decoder ──
  toolBuilders.jwt = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'JSON Web Token' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'eyJhbGciOiJIUzI1NiIs...', rows: '4' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const decBtn = el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Decode', onClick: decode });
    container.appendChild(decBtn);

    function decode() {
      try {
        const parts = textarea.value.trim().split('.');
        if (parts.length < 2) { resultBox(container, 'Invalid JWT format'); return; }
        const header = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')));
        const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
        let out = 'HEADER:\n' + JSON.stringify(header, null, 2) + '\n\nPAYLOAD:\n' + JSON.stringify(payload, null, 2);
        if (payload.exp) out += '\n\nExpires: ' + new Date(payload.exp * 1000).toLocaleString();
        if (payload.iat) out += '\nIssued: ' + new Date(payload.iat * 1000).toLocaleString();
        resultBox(container, out);
      } catch (e) {
        resultBox(container, 'Error: Invalid JWT -- ' + e.message);
      }
    }
  };

  // ── Number Base Converter ──
  toolBuilders.numberbase = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input Number' }));
    const input = el('input', { className: 'glass-input', placeholder: '255' });
    fg.appendChild(input);
    container.appendChild(fg);

    const fg2 = el('div', { className: 'form-group' });
    fg2.appendChild(el('label', { textContent: 'Input Base' }));
    container.appendChild(fg2);
    const basePicker = glassPicker('base-picker', ['Decimal (10)', 'Hexadecimal (16)', 'Octal (8)', 'Binary (2)'], 'Decimal (10)');
    fg2.appendChild(basePicker.wrapper);

    const convBtn = el('button', { className: 'btn btn-primary', style: 'width:100%;margin-top:12px', textContent: 'Convert', onClick: convert });
    container.appendChild(convBtn);

    function getBase(label) {
      if (label.includes('16')) return 16;
      if (label.includes('8')) return 8;
      if (label.includes('2')) return 2;
      return 10;
    }

    function convert() {
      try {
        const base = getBase(basePicker.value);
        const num = parseInt(input.value, base);
        if (isNaN(num)) { resultBox(container, 'Invalid number'); return; }
        resultBox(container, `Decimal: ${num}\nHexadecimal: 0x${num.toString(16).toUpperCase()}\nOctal: 0o${num.toString(8)}\nBinary: 0b${num.toString(2)}`);
      } catch (e) {
        resultBox(container, 'Error: ' + e.message);
      }
    }
  };

  // ── Epoch Converter (renamed from Date Formatter / timestamp) ──
  toolBuilders.timestamp = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Date Input' }));
    const input = el('input', { className: 'glass-input', type: 'datetime-local' });
    input.value = new Date().toISOString().slice(0, 16);
    fg.appendChild(input);
    container.appendChild(fg);

    const nowBtn = el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Use Now', style: 'margin-bottom:16px', onClick: () => {
      input.value = new Date().toISOString().slice(0, 16);
      format();
    }});
    container.appendChild(nowBtn);

    const resultDiv = el('div');
    container.appendChild(resultDiv);

    function format() {
      const d = new Date(input.value);
      if (isNaN(d.getTime())) return;
      resultDiv.innerHTML = '';
      [
        ['ISO 8601', d.toISOString()],
        ['UTC String', d.toUTCString()],
        ['Local String', d.toLocaleString()],
        ['Unix Timestamp', Math.floor(d.getTime() / 1000).toString()],
        ['Unix (ms)', d.getTime().toString()],
        ['Date Only', d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })],
        ['Time Only', d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })],
        ['Relative', getRelative(d)],
      ].forEach(([label, value]) => {
        const row = el('div', { className: 'info-row' });
        row.appendChild(el('span', { className: 'info-label', textContent: label }));
        row.appendChild(el('span', { className: 'info-value', textContent: value }));
        resultDiv.appendChild(row);
      });
    }
    function getRelative(d) {
      const diff = d.getTime() - Date.now();
      const abs = Math.abs(diff);
      const suffix = diff < 0 ? ' ago' : ' from now';
      if (abs < 60000) return Math.round(abs / 1000) + ' seconds' + suffix;
      if (abs < 3600000) return Math.round(abs / 60000) + ' minutes' + suffix;
      if (abs < 86400000) return Math.round(abs / 3600000) + ' hours' + suffix;
      return Math.round(abs / 86400000) + ' days' + suffix;
    }
    input.addEventListener('input', format);
    format();
  };

  // ── Text Diff ──
  toolBuilders.diff = (container) => {
    const fg1 = el('div', { className: 'form-group' });
    fg1.appendChild(el('label', { textContent: 'Original Text' }));
    const ta1 = el('textarea', { className: 'glass-textarea', rows: '5', placeholder: 'Original text...' });
    fg1.appendChild(ta1);
    container.appendChild(fg1);

    const fg2 = el('div', { className: 'form-group' });
    fg2.appendChild(el('label', { textContent: 'Modified Text' }));
    const ta2 = el('textarea', { className: 'glass-textarea', rows: '5', placeholder: 'Modified text...' });
    fg2.appendChild(ta2);
    container.appendChild(fg2);

    const diffBtn = el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Compare', onClick: compare });
    container.appendChild(diffBtn);

    function compare() {
      const lines1 = ta1.value.split('\n');
      const lines2 = ta2.value.split('\n');
      const maxLen = Math.max(lines1.length, lines2.length);
      let out = '';
      let added = 0, removed = 0, unchanged = 0;
      for (let i = 0; i < maxLen; i++) {
        const a = lines1[i], b = lines2[i];
        if (a === undefined) { out += `+ ${b}\n`; added++; }
        else if (b === undefined) { out += `- ${a}\n`; removed++; }
        else if (a === b) { out += `  ${a}\n`; unchanged++; }
        else { out += `- ${a}\n+ ${b}\n`; added++; removed++; }
      }
      resultBox(container, `${added} added, ${removed} removed, ${unchanged} unchanged\n\n${out}`);
    }
  };

  // ── Cron Parser ──
  toolBuilders.cron = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Cron Expression' }));
    const input = el('input', { className: 'glass-input', value: '*/5 * * * *', placeholder: '* * * * *' });
    fg.appendChild(input);
    container.appendChild(fg);

    const parseBtn = el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Parse', onClick: parse });
    container.appendChild(parseBtn);

    const presets = [
      ['Every minute', '* * * * *'],
      ['Every 5 min', '*/5 * * * *'],
      ['Every hour', '0 * * * *'],
      ['Every day at midnight', '0 0 * * *'],
      ['Every Monday 9 AM', '0 9 * * 1'],
      ['Every 1st of month', '0 0 1 * *'],
    ];
    const presetGroup = el('div', { className: 'btn-group', style: 'margin-top:12px;flex-wrap:wrap' });
    presets.forEach(([label, expr]) => {
      presetGroup.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: label, onClick: () => {
        input.value = expr; parse();
      }}));
    });
    container.appendChild(presetGroup);

    function parse() {
      const parts = input.value.trim().split(/\s+/);
      if (parts.length < 5) { resultBox(container, 'Need 5 fields: minute hour day month weekday'); return; }
      const names = ['Minute', 'Hour', 'Day of Month', 'Month', 'Day of Week'];
      const ranges = ['0-59', '0-23', '1-31', '1-12', '0-6 (Sun=0)'];
      let desc = parts.map((p, i) => {
        let meaning;
        if (p === '*') meaning = `every ${names[i].toLowerCase()}`;
        else if (p.startsWith('*/')) meaning = `every ${p.slice(2)} ${names[i].toLowerCase()}(s)`;
        else meaning = `at ${names[i].toLowerCase()} ${p}`;
        return `${names[i]} (${ranges[i]}): ${p} -- ${meaning}`;
      }).join('\n');
      resultBox(container, desc);
    }
    parse();
  };

  // ── HTML Entities ──
  toolBuilders.htmlentity = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: '<div class="hello">&copy; 2025</div>', rows: '4' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const btns = el('div', { className: 'btn-group' });
    btns.appendChild(el('button', { className: 'btn btn-primary btn-sm', textContent: 'Encode', onClick: () => {
      const encoded = textarea.value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
      resultBox(container, encoded);
    }}));
    btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Decode', onClick: () => {
      const tmp = document.createElement('textarea');
      tmp.innerHTML = textarea.value;
      resultBox(container, tmp.value);
    }}));
    container.appendChild(btns);

    const refLabel = el('label', { textContent: 'Common Entities', style: 'margin-top:16px' });
    container.appendChild(refLabel);
    const entities = [
      ['&amp;', '&', 'Ampersand'], ['&lt;', '<', 'Less than'], ['&gt;', '>', 'Greater than'],
      ['&quot;', '"', 'Double quote'], ['&#39;', "'", 'Single quote'], ['&nbsp;', ' ', 'Non-breaking space'],
      ['&copy;', '\u00A9', 'Copyright'], ['&reg;', '\u00AE', 'Registered'], ['&trade;', '\u2122', 'Trademark'],
      ['&mdash;', '\u2014', 'Em dash'], ['&ndash;', '\u2013', 'En dash'], ['&hellip;', '\u2026', 'Ellipsis'],
    ];
    entities.forEach(([entity, char, name]) => {
      const row = el('div', { className: 'info-row' });
      row.appendChild(el('span', { className: 'info-label', textContent: `${entity}  ${char}` }));
      row.appendChild(el('span', { className: 'info-value', textContent: name }));
      container.appendChild(row);
    });
  };

  // ══════════════════════════════════════════════
  // NEW TOOL BUILDERS
  // ══════════════════════════════════════════════

  // ── Slug Generator ──
  toolBuilders.slug = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input Text' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'Enter text to slugify...', rows: '3' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    // Separator picker
    const sepFg = el('div', { className: 'form-group' });
    sepFg.appendChild(el('label', { textContent: 'Separator' }));
    const sepPicker = glassPicker('slug-sep', ['Hyphen (-)', 'Underscore (_)'], 'Hyphen (-)');
    sepFg.appendChild(sepPicker.wrapper);
    container.appendChild(sepFg);

    // Lowercase toggle
    const { row: lcRow, input: lcInput } = iosToggle('slug-lower', 'Force lowercase', true, generate);
    container.appendChild(lcRow);

    function generate() {
      const sep = sepPicker.value.includes('Hyphen') ? '-' : '_';
      let text = textarea.value
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, sep)
        .replace(new RegExp('^' + (sep === '-' ? '\\-' : '_') + '+|' + (sep === '-' ? '\\-' : '_') + '+$', 'g'), '');
      if (lcInput.checked) text = text.toLowerCase();
      resultBox(container, text);
    }
    textarea.addEventListener('input', generate);
  };

  // ── SQL Formatter ──
  toolBuilders.sqlformat = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'SQL Query' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'SELECT id, name FROM users WHERE active = 1 ORDER BY name ASC', rows: '8' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const btns = el('div', { className: 'btn-group' });
    btns.appendChild(el('button', { className: 'btn btn-primary btn-sm', textContent: 'Beautify', onClick: beautify }));
    btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Minify', onClick: minify }));
    container.appendChild(btns);

    function beautify() {
      let sql = textarea.value.trim();
      if (!sql) return;
      // Normalize whitespace
      sql = sql.replace(/\s+/g, ' ');
      // Keywords that start new lines
      const keywords = ['SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'ORDER BY', 'GROUP BY', 'HAVING', 'LIMIT', 'OFFSET', 'INSERT INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE FROM', 'CREATE TABLE', 'ALTER TABLE', 'DROP TABLE', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN', 'CROSS JOIN', 'JOIN', 'ON', 'UNION', 'UNION ALL', 'EXCEPT', 'INTERSECT'];
      // Sort by length descending so longer keywords match first
      const sorted = keywords.slice().sort((a, b) => b.length - a.length);
      sorted.forEach(kw => {
        const regex = new RegExp('\\b' + kw.replace(/ /g, '\\s+') + '\\b', 'gi');
        sql = sql.replace(regex, '\n' + kw);
      });
      // Indent sub-clauses
      const lines = sql.split('\n').filter(l => l.trim());
      const indentKw = ['AND', 'OR', 'ON'];
      const formatted = lines.map(line => {
        const trimmed = line.trim();
        const upper = trimmed.toUpperCase();
        for (const kw of indentKw) {
          if (upper.startsWith(kw + ' ') || upper === kw) {
            return '  ' + trimmed;
          }
        }
        return trimmed;
      }).join('\n');
      textarea.value = formatted;
      resultBox(container, formatted);
    }

    function minify() {
      const sql = textarea.value.replace(/\s+/g, ' ').trim();
      textarea.value = sql;
      resultBox(container, sql);
    }
  };

  // ── CSS/JS Minifier ──
  toolBuilders.cssminify = (container) => {
    const modeFg = el('div', { className: 'form-group' });
    modeFg.appendChild(el('label', { textContent: 'Mode' }));
    const modePicker = glassPicker('cssjs-mode', ['CSS', 'JavaScript'], 'CSS');
    modeFg.appendChild(modePicker.wrapper);
    container.appendChild(modeFg);

    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'Paste CSS or JavaScript here...', rows: '8' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const btns = el('div', { className: 'btn-group' });
    btns.appendChild(el('button', { className: 'btn btn-primary btn-sm', textContent: 'Minify', onClick: doMinify }));
    btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Beautify', onClick: doBeautify }));
    container.appendChild(btns);

    function doMinify() {
      let code = textarea.value;
      if (!code.trim()) return;
      // Remove block comments
      code = code.replace(/\/\*[\s\S]*?\*\//g, '');
      // Remove single-line comments
      code = code.replace(/\/\/.*$/gm, '');
      // Remove excess whitespace and newlines
      code = code.replace(/\s+/g, ' ');
      // CSS-specific: remove spaces around special chars
      if (modePicker.value === 'CSS') {
        code = code.replace(/\s*([{}:;,>~+])\s*/g, '$1');
        code = code.replace(/;}/g, '}');
      } else {
        // JS: be careful with operators, just collapse whitespace
        code = code.replace(/\s*([{}();,])\s*/g, '$1');
      }
      code = code.trim();
      textarea.value = code;
      resultBox(container, code);
    }

    function doBeautify() {
      let code = textarea.value.trim();
      if (!code) return;
      if (modePicker.value === 'CSS') {
        // Simple CSS beautifier
        code = code.replace(/\s*\{\s*/g, ' {\n  ');
        code = code.replace(/\s*;\s*/g, ';\n  ');
        code = code.replace(/\s*\}\s*/g, '\n}\n');
        code = code.replace(/\n\s*\n/g, '\n');
        code = code.replace(/\{\s*\n\s*\n/g, '{\n  ');
        code = code.replace(/  \}/g, '}');
      } else {
        // Simple JS beautifier
        let indent = 0;
        let result = '';
        const chars = code.split('');
        for (let i = 0; i < chars.length; i++) {
          const c = chars[i];
          if (c === '{') {
            indent++;
            result += ' {\n' + '  '.repeat(indent);
          } else if (c === '}') {
            indent = Math.max(0, indent - 1);
            result += '\n' + '  '.repeat(indent) + '}';
            if (chars[i + 1] && chars[i + 1] !== ';' && chars[i + 1] !== ',') {
              result += '\n' + '  '.repeat(indent);
            }
          } else if (c === ';') {
            result += ';\n' + '  '.repeat(indent);
          } else {
            result += c;
          }
        }
        code = result.replace(/\n\s*\n/g, '\n');
      }
      textarea.value = code.trim();
      resultBox(container, code.trim());
    }
  };

  // ── Chmod Calculator ──
  toolBuilders.chmod = (container) => {
    const groups = ['Owner', 'Group', 'Other'];
    const perms = ['Read', 'Write', 'Execute'];
    const permBits = [4, 2, 1];
    const toggles = {};

    groups.forEach((group, gi) => {
      const groupLabel = el('label', { textContent: group, style: 'margin-top:12px;font-weight:600' });
      container.appendChild(groupLabel);
      toggles[gi] = {};
      perms.forEach((perm, pi) => {
        const defaultChecked = gi === 0 ? true : (pi === 2 ? (gi === 1) : (pi === 0));
        const { row, input } = iosToggle(`chmod-${gi}-${pi}`, perm, defaultChecked, updateFromToggles);
        toggles[gi][pi] = input;
        container.appendChild(row);
      });
    });

    // Numeric input
    const numFg = el('div', { className: 'form-group', style: 'margin-top:16px' });
    numFg.appendChild(el('label', { textContent: 'Numeric Value' }));
    const numInput = el('input', { className: 'glass-input', value: '755', placeholder: '755', maxlength: '3' });
    numFg.appendChild(numInput);
    container.appendChild(numFg);

    const resultDiv = el('div');
    container.appendChild(resultDiv);

    function updateFromToggles() {
      let numeric = '';
      let symbolic = '';
      groups.forEach((g, gi) => {
        let val = 0;
        perms.forEach((p, pi) => {
          if (toggles[gi][pi].checked) {
            val += permBits[pi];
            symbolic += 'rwx'[pi];
          } else {
            symbolic += '-';
          }
        });
        numeric += val;
      });
      numInput.value = numeric;
      showResult(numeric, symbolic);
    }

    function updateFromNumeric() {
      const val = numInput.value.trim();
      if (!/^[0-7]{3}$/.test(val)) return;
      let symbolic = '';
      for (let gi = 0; gi < 3; gi++) {
        const digit = parseInt(val[gi]);
        perms.forEach((p, pi) => {
          const has = (digit & permBits[pi]) !== 0;
          toggles[gi][pi].checked = has;
          symbolic += has ? 'rwx'[pi] : '-';
        });
      }
      showResult(val, symbolic);
    }

    function showResult(numeric, symbolic) {
      resultDiv.innerHTML = '';
      [
        ['Numeric', numeric],
        ['Symbolic', symbolic],
        ['Command', `chmod ${numeric} <file>`],
      ].forEach(([label, value]) => {
        const row = el('div', { className: 'info-row' });
        row.appendChild(el('span', { className: 'info-label', textContent: label }));
        row.appendChild(el('span', { className: 'info-value', textContent: value }));
        resultDiv.appendChild(row);
      });
    }

    numInput.addEventListener('input', updateFromNumeric);
    updateFromToggles();
  };

  // ── Epoch Converter (dedicated) ──
  toolBuilders.epoch = (container) => {
    // Timestamp to human
    const fg1 = el('div', { className: 'form-group' });
    fg1.appendChild(el('label', { textContent: 'Unix Timestamp' }));
    const tsInput = el('input', { className: 'glass-input', placeholder: '1700000000' });
    fg1.appendChild(tsInput);
    container.appendChild(fg1);

    const tsBtn = el('button', { className: 'btn btn-primary btn-sm', textContent: 'To Human Date', onClick: tsToHuman });
    container.appendChild(tsBtn);

    const tsResult = el('div', { style: 'margin-bottom:20px' });
    container.appendChild(tsResult);

    // Human to timestamp
    const fg2 = el('div', { className: 'form-group' });
    fg2.appendChild(el('label', { textContent: 'Human Date' }));
    const dateInput = el('input', { className: 'glass-input', type: 'datetime-local' });
    fg2.appendChild(dateInput);
    container.appendChild(fg2);

    const dateBtn = el('button', { className: 'btn btn-primary btn-sm', textContent: 'To Timestamp', onClick: humanToTs });
    container.appendChild(dateBtn);

    const dateResult = el('div', { style: 'margin-bottom:20px' });
    container.appendChild(dateResult);

    // Now button
    const nowBtn = el('button', { className: 'btn btn-secondary', style: 'width:100%;margin-top:8px', textContent: 'Now', onClick: () => {
      const now = Date.now();
      tsInput.value = Math.floor(now / 1000);
      dateInput.value = new Date().toISOString().slice(0, 16);
      tsToHuman();
    }});
    container.appendChild(nowBtn);

    function tsToHuman() {
      tsResult.innerHTML = '';
      let ts = tsInput.value.trim();
      if (!ts) return;
      ts = parseInt(ts, 10);
      if (isNaN(ts)) return;
      // Auto-detect seconds vs milliseconds
      const ms = ts > 1e12 ? ts : ts * 1000;
      const d = new Date(ms);
      [
        ['UTC', d.toUTCString()],
        ['Local', d.toLocaleString()],
        ['ISO 8601', d.toISOString()],
        ['Seconds', Math.floor(ms / 1000).toString()],
        ['Milliseconds', ms.toString()],
      ].forEach(([label, value]) => {
        const row = el('div', { className: 'info-row' });
        row.appendChild(el('span', { className: 'info-label', textContent: label }));
        row.appendChild(el('span', { className: 'info-value', textContent: value }));
        tsResult.appendChild(row);
      });
    }

    function humanToTs() {
      dateResult.innerHTML = '';
      const d = new Date(dateInput.value);
      if (isNaN(d.getTime())) return;
      [
        ['Seconds', Math.floor(d.getTime() / 1000).toString()],
        ['Milliseconds', d.getTime().toString()],
        ['ISO 8601', d.toISOString()],
      ].forEach(([label, value]) => {
        const row = el('div', { className: 'info-row' });
        row.appendChild(el('span', { className: 'info-label', textContent: label }));
        row.appendChild(el('span', { className: 'info-value', textContent: value }));
        dateResult.appendChild(row);
      });
    }
  };

  // ── User Agent Parser ──
  toolBuilders.useragent = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'User Agent String' }));
    const textarea = el('textarea', { className: 'glass-textarea', rows: '3', placeholder: 'Paste a user agent string...' });
    textarea.value = navigator.userAgent;
    fg.appendChild(textarea);
    container.appendChild(fg);

    const parseBtn = el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Parse', onClick: parseUA });
    container.appendChild(parseBtn);

    const resultDiv = el('div');
    container.appendChild(resultDiv);

    function parseUA() {
      resultDiv.innerHTML = '';
      const ua = textarea.value.trim();
      if (!ua) return;

      let browser = 'Unknown', version = '', os = 'Unknown', platform = 'Unknown', device = 'Desktop';

      // Browser detection
      if (/Edg\/(\d[\d.]*)/i.test(ua)) { browser = 'Microsoft Edge'; version = RegExp.$1; }
      else if (/OPR\/(\d[\d.]*)/i.test(ua)) { browser = 'Opera'; version = RegExp.$1; }
      else if (/Chrome\/(\d[\d.]*)/i.test(ua)) { browser = 'Chrome'; version = RegExp.$1; }
      else if (/Firefox\/(\d[\d.]*)/i.test(ua)) { browser = 'Firefox'; version = RegExp.$1; }
      else if (/Safari\/(\d[\d.]*)/i.test(ua) && /Version\/(\d[\d.]*)/i.test(ua)) { browser = 'Safari'; version = RegExp.$1; }
      else if (/MSIE (\d[\d.]*)/i.test(ua) || /Trident.*rv:(\d[\d.]*)/i.test(ua)) { browser = 'Internet Explorer'; version = RegExp.$1; }

      // OS detection
      if (/Windows NT 10/i.test(ua)) os = 'Windows 10/11';
      else if (/Windows NT 6\.3/i.test(ua)) os = 'Windows 8.1';
      else if (/Windows NT 6\.2/i.test(ua)) os = 'Windows 8';
      else if (/Windows NT 6\.1/i.test(ua)) os = 'Windows 7';
      else if (/Mac OS X ([\d_]+)/i.test(ua)) os = 'macOS ' + RegExp.$1.replace(/_/g, '.');
      else if (/Android ([\d.]+)/i.test(ua)) os = 'Android ' + RegExp.$1;
      else if (/iPhone OS ([\d_]+)/i.test(ua)) os = 'iOS ' + RegExp.$1.replace(/_/g, '.');
      else if (/iPad.*OS ([\d_]+)/i.test(ua)) os = 'iPadOS ' + RegExp.$1.replace(/_/g, '.');
      else if (/Linux/i.test(ua)) os = 'Linux';
      else if (/CrOS/i.test(ua)) os = 'ChromeOS';

      // Platform
      if (/Win/i.test(ua)) platform = 'Windows';
      else if (/Mac/i.test(ua)) platform = 'Macintosh';
      else if (/Linux/i.test(ua)) platform = 'Linux';
      else if (/Android/i.test(ua)) platform = 'Android';
      else if (/iPhone|iPad|iPod/i.test(ua)) platform = 'iOS';

      // Mobile/Desktop
      if (/Mobile|Android|iPhone|iPad|iPod/i.test(ua)) device = 'Mobile';

      [
        ['Browser', browser + (version ? ' ' + version : '')],
        ['Operating System', os],
        ['Platform', platform],
        ['Device Type', device],
        ['Full String', ua],
      ].forEach(([label, value]) => {
        const row = el('div', { className: 'info-row' });
        row.appendChild(el('span', { className: 'info-label', textContent: label }));
        row.appendChild(el('span', { className: 'info-value', textContent: value }));
        resultDiv.appendChild(row);
      });
    }
    parseUA();
  };

  // ── Box Shadow Generator ──
  toolBuilders.boxshadow = (container) => {
    const { group: xGroup, input: xSlider, label: xLabel } = lgSlider('bs-x', -50, 50, 5, 'bs-x-label', updateShadow);
    xLabel.textContent = 'X Offset: 5px';
    container.appendChild(xGroup);

    const { group: yGroup, input: ySlider, label: yLabel } = lgSlider('bs-y', -50, 50, 5, 'bs-y-label', updateShadow);
    yLabel.textContent = 'Y Offset: 5px';
    container.appendChild(yGroup);

    const { group: blurGroup, input: blurSlider, label: blurLabel } = lgSlider('bs-blur', 0, 100, 15, 'bs-blur-label', updateShadow);
    blurLabel.textContent = 'Blur: 15px';
    container.appendChild(blurGroup);

    const { group: spreadGroup, input: spreadSlider, label: spreadLabel } = lgSlider('bs-spread', -50, 50, 0, 'bs-spread-label', updateShadow);
    spreadLabel.textContent = 'Spread: 0px';
    container.appendChild(spreadGroup);

    // Color
    const colorFg = el('div', { className: 'form-group' });
    colorFg.appendChild(el('label', { textContent: 'Shadow Color' }));
    const colorInput = el('input', { type: 'color', className: 'ios-color-picker', value: '#000000' });
    colorInput.addEventListener('input', updateShadow);
    colorFg.appendChild(colorInput);
    container.appendChild(colorFg);

    // Opacity slider
    const { group: opGroup, input: opSlider, label: opLabel } = lgSlider('bs-opacity', 0, 100, 30, 'bs-op-label', updateShadow);
    opLabel.textContent = 'Opacity: 30%';
    container.appendChild(opGroup);

    // Inset toggle
    const { row: insetRow, input: insetInput } = iosToggle('bs-inset', 'Inset', false, updateShadow);
    container.appendChild(insetRow);

    // Preview
    const previewContainer = el('div', { style: 'display:flex;justify-content:center;padding:40px 20px;margin:16px 0' });
    const previewBox = el('div', { style: 'width:180px;height:120px;background:rgba(255,255,255,0.15);backdrop-filter:blur(8px);border-radius:16px;border:1px solid rgba(255,255,255,0.2)' });
    previewContainer.appendChild(previewBox);
    container.appendChild(previewContainer);

    function updateShadow() {
      const x = xSlider.value;
      const y = ySlider.value;
      const blur = blurSlider.value;
      const spread = spreadSlider.value;
      const opacity = opSlider.value / 100;
      const hex = colorInput.value;
      const inset = insetInput.checked ? 'inset ' : '';

      xLabel.textContent = `X Offset: ${x}px`;
      yLabel.textContent = `Y Offset: ${y}px`;
      blurLabel.textContent = `Blur: ${blur}px`;
      spreadLabel.textContent = `Spread: ${spread}px`;
      opLabel.textContent = `Opacity: ${opSlider.value}%`;

      // Convert hex to rgba
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      const rgba = `rgba(${r}, ${g}, ${b}, ${opacity})`;

      const css = `${inset}${x}px ${y}px ${blur}px ${spread}px ${rgba}`;
      previewBox.style.boxShadow = css;
      resultBox(container, `box-shadow: ${css};`);
    }
    updateShadow();
  };

  // ── Gradient Generator ──
  toolBuilders.gradient = (container) => {
    // Type picker
    const typeFg = el('div', { className: 'form-group' });
    typeFg.appendChild(el('label', { textContent: 'Type' }));
    const typePicker = glassPicker('grad-type', ['linear', 'radial'], 'linear', updateGradient);
    typeFg.appendChild(typePicker.wrapper);
    container.appendChild(typeFg);

    // Angle slider
    const { group: angleGroup, input: angleSlider, label: angleLabel } = lgSlider('grad-angle', 0, 360, 90, 'grad-angle-label', updateGradient);
    angleLabel.textContent = 'Angle: 90 deg';
    container.appendChild(angleGroup);

    // Colors
    const colorFg = el('div', { className: 'form-group' });
    colorFg.appendChild(el('label', { textContent: 'Colors' }));
    const colorRow = el('div', { className: 'form-row' });
    const color1 = el('input', { type: 'color', className: 'ios-color-picker', value: '#007AFF' });
    const color2 = el('input', { type: 'color', className: 'ios-color-picker', value: '#AF52DE' });
    color1.addEventListener('input', updateGradient);
    color2.addEventListener('input', updateGradient);
    colorRow.append(color1, color2);
    colorFg.appendChild(colorRow);
    container.appendChild(colorFg);

    // Preview
    const previewBox = el('div', { style: 'width:100%;height:140px;border-radius:16px;margin:16px 0;border:1px solid rgba(255,255,255,0.2)' });
    container.appendChild(previewBox);

    function updateGradient() {
      const type = typePicker.value;
      const angle = angleSlider.value;
      const c1 = color1.value;
      const c2 = color2.value;
      angleLabel.textContent = `Angle: ${angle} deg`;

      let css;
      if (type === 'linear') {
        css = `linear-gradient(${angle}deg, ${c1}, ${c2})`;
      } else {
        css = `radial-gradient(circle, ${c1}, ${c2})`;
      }
      previewBox.style.background = css;
      resultBox(container, `background: ${css};`);
    }
    updateGradient();
  };

  // ── Border Radius Generator ──
  toolBuilders.borderradius = (container) => {
    // Link all toggle
    const { row: linkRow, input: linkInput } = iosToggle('br-link', 'Link all corners', true);
    container.appendChild(linkRow);

    const corners = ['Top Left', 'Top Right', 'Bottom Right', 'Bottom Left'];
    const sliders = [];
    const labels = [];

    corners.forEach((corner, i) => {
      const { group, input: slider, label } = lgSlider(`br-${i}`, 0, 100, 16, `br-label-${i}`, () => {
        labels[i].textContent = `${corner}: ${slider.value}px`;
        if (linkInput.checked) {
          sliders.forEach((s, j) => {
            if (j !== i) {
              // Sync others by triggering their update manually
              // We need to set the value directly
            }
          });
          syncAll(i);
        }
        updatePreview();
      });
      label.textContent = `${corner}: 16px`;
      sliders.push(slider);
      labels.push(label);
      container.appendChild(group);
    });

    function syncAll(sourceIdx) {
      // When link is on, we keep all values the same
      // Since lgSlider doesn't expose a setter, we display the source value for all
      // The actual sync happens in the preview output
    }

    // Preview
    const previewContainer = el('div', { style: 'display:flex;justify-content:center;padding:30px 20px;margin:16px 0' });
    const previewBox = el('div', { style: 'width:200px;height:140px;background:rgba(255,255,255,0.15);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.2)' });
    previewContainer.appendChild(previewBox);
    container.appendChild(previewContainer);

    function updatePreview() {
      let vals;
      if (linkInput.checked) {
        // Use the value of whichever slider was last moved (use first as reference)
        const v = sliders[0].value;
        vals = [v, v, v, v];
      } else {
        vals = sliders.map(s => s.value);
      }
      const css = vals.map(v => v + 'px').join(' ');
      previewBox.style.borderRadius = css;
      if (linkInput.checked) {
        corners.forEach((corner, i) => {
          labels[i].textContent = `${corner}: ${vals[i]}px`;
        });
      }
      resultBox(container, `border-radius: ${css};`);
    }
    updatePreview();
  };

  // ── JSON to YAML / YAML to JSON ──
  toolBuilders.json2yaml = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'Paste JSON or YAML here...', rows: '8' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const btns = el('div', { className: 'btn-group' });
    btns.appendChild(el('button', { className: 'btn btn-primary btn-sm', textContent: 'JSON -> YAML', onClick: jsonToYaml }));
    btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'YAML -> JSON', onClick: yamlToJson }));
    container.appendChild(btns);

    function toYaml(obj, indent) {
      indent = indent || 0;
      const pad = '  '.repeat(indent);
      if (obj === null || obj === undefined) return pad + 'null';
      if (typeof obj === 'boolean') return pad + (obj ? 'true' : 'false');
      if (typeof obj === 'number') return pad + obj.toString();
      if (typeof obj === 'string') {
        if (obj.includes('\n') || obj.includes(':') || obj.includes('#') || obj.includes('"') || obj.includes("'") || obj === '' || obj === 'true' || obj === 'false' || obj === 'null' || !isNaN(Number(obj))) {
          return pad + '"' + obj.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
        }
        return pad + obj;
      }
      if (Array.isArray(obj)) {
        if (obj.length === 0) return pad + '[]';
        return obj.map(item => {
          const val = toYaml(item, indent + 1).trim();
          if (typeof item === 'object' && item !== null) {
            const lines = toYaml(item, indent + 1).split('\n').map(l => l.trim()).filter(l => l);
            return pad + '- ' + lines.join('\n' + pad + '  ');
          }
          return pad + '- ' + val;
        }).join('\n');
      }
      if (typeof obj === 'object') {
        const keys = Object.keys(obj);
        if (keys.length === 0) return pad + '{}';
        return keys.map(key => {
          const val = obj[key];
          if (typeof val === 'object' && val !== null) {
            return pad + key + ':\n' + toYaml(val, indent + 1);
          }
          return pad + key + ': ' + toYaml(val, 0).trim();
        }).join('\n');
      }
      return pad + String(obj);
    }

    function parseYaml(text) {
      const lines = text.split('\n');
      return parseYamlLines(lines, 0).value;
    }

    function parseYamlLines(lines, startIndent) {
      // Determine if this is an array or object
      const filtered = lines.filter(l => l.trim() && !l.trim().startsWith('#'));
      if (filtered.length === 0) return { value: null };

      const firstLine = filtered[0];
      const firstTrimmed = firstLine.trim();

      // Check if it is an array
      if (firstTrimmed.startsWith('- ')) {
        return parseYamlArray(lines, startIndent);
      }
      // It is an object
      return parseYamlObject(lines, startIndent);
    }

    function getIndent(line) {
      const match = line.match(/^(\s*)/);
      return match ? match[1].length : 0;
    }

    function parseYamlValue(val) {
      val = val.trim();
      if (val === '' || val === 'null' || val === '~') return null;
      if (val === 'true') return true;
      if (val === 'false') return false;
      if (/^-?\d+$/.test(val)) return parseInt(val, 10);
      if (/^-?\d+\.\d+$/.test(val)) return parseFloat(val);
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        return val.slice(1, -1).replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      }
      if (val === '[]') return [];
      if (val === '{}') return {};
      return val;
    }

    function parseYamlObject(lines, baseIndent) {
      const obj = {};
      let i = 0;
      while (i < lines.length) {
        const line = lines[i];
        if (!line.trim() || line.trim().startsWith('#')) { i++; continue; }
        const indent = getIndent(line);
        if (indent < baseIndent) break;
        const trimmed = line.trim();
        const colonIdx = trimmed.indexOf(':');
        if (colonIdx === -1) { i++; continue; }
        const key = trimmed.slice(0, colonIdx).trim();
        const rest = trimmed.slice(colonIdx + 1).trim();
        if (rest) {
          obj[key] = parseYamlValue(rest);
          i++;
        } else {
          // Nested block
          const childLines = [];
          i++;
          while (i < lines.length) {
            if (!lines[i].trim() || lines[i].trim().startsWith('#')) { childLines.push(lines[i]); i++; continue; }
            if (getIndent(lines[i]) > indent) {
              childLines.push(lines[i]);
              i++;
            } else {
              break;
            }
          }
          const childIndent = childLines.find(l => l.trim()) ? getIndent(childLines.find(l => l.trim())) : indent + 2;
          obj[key] = parseYamlLines(childLines, childIndent).value;
        }
      }
      return { value: obj };
    }

    function parseYamlArray(lines, baseIndent) {
      const arr = [];
      let i = 0;
      while (i < lines.length) {
        const line = lines[i];
        if (!line.trim() || line.trim().startsWith('#')) { i++; continue; }
        const indent = getIndent(line);
        if (indent < baseIndent) break;
        const trimmed = line.trim();
        if (trimmed.startsWith('- ')) {
          const val = trimmed.slice(2);
          if (val.includes(':') && !val.startsWith('"') && !val.startsWith("'")) {
            // Inline object start or nested
            const childLines = [' '.repeat(indent + 2) + val];
            i++;
            while (i < lines.length) {
              if (!lines[i].trim() || lines[i].trim().startsWith('#')) { childLines.push(lines[i]); i++; continue; }
              if (getIndent(lines[i]) > indent) {
                childLines.push(lines[i]);
                i++;
              } else {
                break;
              }
            }
            arr.push(parseYamlLines(childLines, indent + 2).value);
          } else {
            arr.push(parseYamlValue(val));
            i++;
          }
        } else {
          i++;
        }
      }
      return { value: arr };
    }

    function jsonToYaml() {
      try {
        const obj = JSON.parse(textarea.value);
        const yaml = toYaml(obj, 0);
        resultBox(container, yaml);
      } catch (e) {
        resultBox(container, 'Error: Invalid JSON -- ' + e.message);
      }
    }

    function yamlToJson() {
      try {
        const obj = parseYaml(textarea.value);
        const json = JSON.stringify(obj, null, 2);
        resultBox(container, json);
      } catch (e) {
        resultBox(container, 'Error: Could not parse YAML -- ' + e.message);
      }
    }
  };

  // ── JSON to CSV / CSV to JSON ──
  toolBuilders.json2csv = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'Paste JSON array or CSV here...', rows: '8' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const btns = el('div', { className: 'btn-group' });
    btns.appendChild(el('button', { className: 'btn btn-primary btn-sm', textContent: 'JSON -> CSV', onClick: jsonToCsv }));
    btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'CSV -> JSON', onClick: csvToJson }));
    container.appendChild(btns);

    function escCsv(val) {
      const str = String(val === null || val === undefined ? '' : val);
      if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        return '"' + str.replace(/"/g, '""') + '"';
      }
      return str;
    }

    function jsonToCsv() {
      try {
        const arr = JSON.parse(textarea.value);
        if (!Array.isArray(arr) || arr.length === 0) {
          resultBox(container, 'Error: Input must be a non-empty JSON array of objects');
          return;
        }
        const headers = [...new Set(arr.flatMap(obj => Object.keys(obj)))];
        const csv = [
          headers.map(escCsv).join(','),
          ...arr.map(obj => headers.map(h => escCsv(obj[h])).join(','))
        ].join('\n');
        resultBox(container, csv);
      } catch (e) {
        resultBox(container, 'Error: Invalid JSON -- ' + e.message);
      }
    }

    function parseCsvLine(line) {
      const result = [];
      let current = '';
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (inQuotes) {
          if (c === '"') {
            if (i + 1 < line.length && line[i + 1] === '"') {
              current += '"';
              i++;
            } else {
              inQuotes = false;
            }
          } else {
            current += c;
          }
        } else {
          if (c === '"') {
            inQuotes = true;
          } else if (c === ',') {
            result.push(current);
            current = '';
          } else {
            current += c;
          }
        }
      }
      result.push(current);
      return result;
    }

    function csvToJson() {
      try {
        const lines = textarea.value.trim().split('\n').filter(l => l.trim());
        if (lines.length < 2) {
          resultBox(container, 'Error: CSV needs at least a header row and one data row');
          return;
        }
        const headers = parseCsvLine(lines[0]);
        const result = lines.slice(1).map(line => {
          const vals = parseCsvLine(line);
          const obj = {};
          headers.forEach((h, i) => {
            let val = vals[i] || '';
            // Try to parse numbers and booleans
            if (val === 'true') val = true;
            else if (val === 'false') val = false;
            else if (val === 'null') val = null;
            else if (val !== '' && !isNaN(Number(val))) val = Number(val);
            obj[h] = val;
          });
          return obj;
        });
        resultBox(container, JSON.stringify(result, null, 2));
      } catch (e) {
        resultBox(container, 'Error: Could not parse CSV -- ' + e.message);
      }
    }
  };

  // ── Image to Base64 ──
  toolBuilders.img2base64 = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Select Image' }));
    const fileInput = el('input', { type: 'file', className: 'glass-input', accept: 'image/*' });
    fg.appendChild(fileInput);
    container.appendChild(fg);

    const previewDiv = el('div', { style: 'text-align:center;margin:16px 0' });
    container.appendChild(previewDiv);

    const infoDiv = el('div');
    container.appendChild(infoDiv);

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      previewDiv.innerHTML = '';
      infoDiv.innerHTML = '';

      const reader = new FileReader();
      reader.onload = () => {
        const dataUri = reader.result;
        const base64 = dataUri.split(',')[1];

        // Preview
        const img = el('img', { src: dataUri, style: 'max-width:100%;max-height:200px;border-radius:12px;border:1px solid rgba(255,255,255,0.2)' });
        previewDiv.appendChild(img);

        // Info
        [
          ['File Name', file.name],
          ['File Size', (file.size / 1024).toFixed(2) + ' KB'],
          ['MIME Type', file.type],
          ['Base64 Length', base64.length.toLocaleString() + ' chars'],
        ].forEach(([label, value]) => {
          const row = el('div', { className: 'info-row' });
          row.appendChild(el('span', { className: 'info-label', textContent: label }));
          row.appendChild(el('span', { className: 'info-value', textContent: value }));
          infoDiv.appendChild(row);
        });

        // Data URI result
        resultBox(container, dataUri);
      };
      reader.readAsDataURL(file);
    });
  };

  // ── Placeholder Image ──
  toolBuilders.placeholder = (container) => {
    const row1 = el('div', { className: 'form-row' });

    const wFg = el('div', { className: 'form-group', style: 'flex:1' });
    wFg.appendChild(el('label', { textContent: 'Width' }));
    const wInput = el('input', { className: 'glass-input', type: 'number', value: '400', min: '1', max: '2000' });
    wFg.appendChild(wInput);
    row1.appendChild(wFg);

    const hFg = el('div', { className: 'form-group', style: 'flex:1' });
    hFg.appendChild(el('label', { textContent: 'Height' }));
    const hInput = el('input', { className: 'glass-input', type: 'number', value: '300', min: '1', max: '2000' });
    hFg.appendChild(hInput);
    row1.appendChild(hFg);

    container.appendChild(row1);

    const row2 = el('div', { className: 'form-row' });

    const bgFg = el('div', { className: 'form-group', style: 'flex:1' });
    bgFg.appendChild(el('label', { textContent: 'Background' }));
    const bgInput = el('input', { type: 'color', className: 'ios-color-picker', value: '#cccccc' });
    bgFg.appendChild(bgInput);
    row2.appendChild(bgFg);

    const fgFg = el('div', { className: 'form-group', style: 'flex:1' });
    fgFg.appendChild(el('label', { textContent: 'Text Color' }));
    const fgInput = el('input', { type: 'color', className: 'ios-color-picker', value: '#666666' });
    fgFg.appendChild(fgInput);
    row2.appendChild(fgFg);

    container.appendChild(row2);

    const textFg = el('div', { className: 'form-group' });
    textFg.appendChild(el('label', { textContent: 'Text (blank = WxH)' }));
    const textInput = el('input', { className: 'glass-input', placeholder: '400x300' });
    textFg.appendChild(textInput);
    container.appendChild(textFg);

    const genBtn = el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Generate', onClick: generate });
    container.appendChild(genBtn);

    const previewDiv = el('div', { style: 'text-align:center;margin:16px 0' });
    container.appendChild(previewDiv);

    const dlBtn = el('button', { className: 'btn btn-secondary', style: 'width:100%;display:none', textContent: 'Download' });
    container.appendChild(dlBtn);

    function generate() {
      const w = Math.min(2000, Math.max(1, parseInt(wInput.value) || 400));
      const h = Math.min(2000, Math.max(1, parseInt(hInput.value) || 300));
      const bg = bgInput.value;
      const fg = fgInput.value;
      const text = textInput.value || (w + 'x' + h);

      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');

      // Background
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Text
      const fontSize = Math.max(12, Math.min(w, h) / 8);
      ctx.fillStyle = fg;
      ctx.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, w / 2, h / 2);

      previewDiv.innerHTML = '';
      const img = el('img', { src: canvas.toDataURL('image/png'), style: 'max-width:100%;border-radius:12px;border:1px solid rgba(255,255,255,0.2)' });
      previewDiv.appendChild(img);

      dlBtn.style.display = 'block';
      dlBtn.onclick = () => {
        const a = document.createElement('a');
        a.download = `placeholder-${w}x${h}.png`;
        a.href = canvas.toDataURL('image/png');
        a.click();
      };
    }
    generate();
  };

  // ── Line Sorter ──
  toolBuilders.linesort = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input Lines' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'Paste lines here (one per line)...', rows: '8' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const btns = el('div', { className: 'btn-group', style: 'flex-wrap:wrap' });
    const actions = [
      ['Sort A-Z', lines => lines.sort((a, b) => a.localeCompare(b))],
      ['Sort Z-A', lines => lines.sort((a, b) => b.localeCompare(a))],
      ['Sort by Length', lines => lines.sort((a, b) => a.length - b.length)],
      ['Reverse', lines => lines.reverse()],
      ['Remove Duplicates', lines => [...new Set(lines)]],
      ['Remove Empty', lines => lines.filter(l => l.trim())],
      ['Trim Lines', lines => lines.map(l => l.trim())],
      ['Shuffle', lines => lines.sort(() => Math.random() - 0.5)],
    ];
    actions.forEach(([name, fn]) => {
      btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: name, onClick: () => {
        const lines = textarea.value.split('\n');
        const result = fn(lines);
        resultBox(container, result.join('\n'));
      }}));
    });
    container.appendChild(btns);
  };

  // ── Find & Replace ──
  toolBuilders.textreplace = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input Text' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: 'Paste text here...', rows: '6' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const fg2 = el('div', { className: 'form-group' });
    fg2.appendChild(el('label', { textContent: 'Find' }));
    const findInput = el('input', { className: 'glass-input', placeholder: 'Search text or /regex/flags' });
    fg2.appendChild(findInput);
    container.appendChild(fg2);

    const fg3 = el('div', { className: 'form-group' });
    fg3.appendChild(el('label', { textContent: 'Replace with' }));
    const replaceInput = el('input', { className: 'glass-input', placeholder: 'Replacement text' });
    fg3.appendChild(replaceInput);
    container.appendChild(fg3);

    const { row: regexRow, input: regexToggle } = iosToggle('tr-regex', 'Use Regular Expression', false);
    container.appendChild(regexRow);

    const replBtn = el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Replace All', onClick: doReplace });
    container.appendChild(replBtn);

    function doReplace() {
      let find = findInput.value;
      if (!find) return;
      let result;
      try {
        if (regexToggle.checked) {
          const match = find.match(/^\/(.+)\/([gimsuvy]*)$/);
          const regex = match ? new RegExp(match[1], match[2]) : new RegExp(find, 'g');
          result = textarea.value.replace(regex, replaceInput.value);
        } else {
          result = textarea.value.split(find).join(replaceInput.value);
        }
        const count = regexToggle.checked
          ? (textarea.value.match(find.match(/^\/(.+)\/([gimsuvy]*)$/) ? new RegExp(find.match(/^\/(.+)\/([gimsuvy]*)$/)[1], find.match(/^\/(.+)\/([gimsuvy]*)$/)[2]) : new RegExp(find, 'g')) || []).length
          : textarea.value.split(find).length - 1;
        resultBox(container, `${count} replacement${count !== 1 ? 's' : ''} made\n\n${result}`);
      } catch (e) {
        resultBox(container, 'Error: ' + e.message);
      }
    }
  };

  // ── Markdown to HTML ──
  toolBuilders.md2html = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Markdown Input' }));
    const textarea = el('textarea', { className: 'glass-textarea', rows: '8', placeholder: '# Heading\n\nParagraph with **bold** and *italic*.\n\n- List item\n- Another item\n\n```code block```\n\n[Link](https://example.com)' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const btns = el('div', { className: 'btn-group' });
    btns.appendChild(el('button', { className: 'btn btn-primary btn-sm', textContent: 'Convert to HTML', onClick: convert }));
    btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Preview', onClick: preview }));
    container.appendChild(btns);

    const previewDiv = el('div', { className: 'result-box', style: 'white-space:normal;word-break:normal;display:none' });
    container.appendChild(previewDiv);

    function renderMd(md) {
      return md
        .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        .replace(/`(.+?)`/g, '<code>$1</code>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/~~(.+?)~~/g, '<del>$1</del>')
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
        .replace(/!\[(.+?)\]\((.+?)\)/g, '<img alt="$1" src="$2"/>')
        .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>')
        .replace(/^(?!<[hupbold]|<li|<ul|<pre|<block)(.*\S.*)$/gm, '<p>$1</p>')
        .replace(/<\/ul>\s*<ul>/g, '')
        .replace(/\n{2,}/g, '\n');
    }
    function convert() {
      const html = renderMd(textarea.value);
      resultBox(container, html);
      previewDiv.style.display = 'none';
    }
    function preview() {
      previewDiv.style.display = 'block';
      previewDiv.innerHTML = renderMd(textarea.value);
    }
  };

  // ── API Tester ──
  toolBuilders.apitester = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Request URL' }));
    const urlInput = el('input', { className: 'glass-input', placeholder: 'https://api.example.com/data' });
    fg.appendChild(urlInput);
    container.appendChild(fg);

    const fg2 = el('div', { className: 'form-group' });
    fg2.appendChild(el('label', { textContent: 'Method' }));
    const methodPicker = glassPicker('api-method', ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], 'GET');
    fg2.appendChild(methodPicker.wrapper);
    container.appendChild(fg2);

    const fg3 = el('div', { className: 'form-group' });
    fg3.appendChild(el('label', { textContent: 'Headers (JSON)' }));
    const headersInput = el('textarea', { className: 'glass-textarea', rows: '3', placeholder: '{"Authorization": "Bearer xxx"}' });
    fg3.appendChild(headersInput);
    container.appendChild(fg3);

    const fg4 = el('div', { className: 'form-group' });
    fg4.appendChild(el('label', { textContent: 'Body (for POST/PUT/PATCH)' }));
    const bodyInput = el('textarea', { className: 'glass-textarea', rows: '4', placeholder: '{"key": "value"}' });
    fg4.appendChild(bodyInput);
    container.appendChild(fg4);

    const sendBtn = el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Send Request', onClick: send });
    container.appendChild(sendBtn);

    async function send() {
      const url = urlInput.value.trim();
      if (!url) return;
      sendBtn.textContent = 'Sending...';
      sendBtn.disabled = true;
      try {
        const opts = { method: methodPicker.value };
        if (headersInput.value.trim()) {
          opts.headers = JSON.parse(headersInput.value.trim());
        }
        if (['POST', 'PUT', 'PATCH'].includes(methodPicker.value) && bodyInput.value.trim()) {
          opts.body = bodyInput.value.trim();
          if (!opts.headers) opts.headers = {};
          if (!opts.headers['Content-Type']) opts.headers['Content-Type'] = 'application/json';
        }
        const start = performance.now();
        const res = await fetch(url, opts);
        const elapsed = Math.round(performance.now() - start);
        const text = await res.text();
        let body;
        try { body = JSON.stringify(JSON.parse(text), null, 2); } catch { body = text; }
        resultBox(container, `Status: ${res.status} ${res.statusText}\nTime: ${elapsed}ms\nContent-Length: ${text.length}\n\n${body}`);
      } catch (e) {
        resultBox(container, 'Error: ' + e.message);
      }
      sendBtn.textContent = 'Send Request';
      sendBtn.disabled = false;
    }
  };

  // ── .htaccess Generator ──
  toolBuilders.htaccess = (container) => {
    const rules = [
      { id: 'https', label: 'Force HTTPS', code: 'RewriteEngine On\nRewriteCond %{HTTPS} off\nRewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]' },
      { id: 'www', label: 'Force www', code: 'RewriteEngine On\nRewriteCond %{HTTP_HOST} !^www\\. [NC]\nRewriteRule ^(.*)$ https://www.%{HTTP_HOST}/$1 [R=301,L]' },
      { id: 'nowww', label: 'Remove www', code: 'RewriteEngine On\nRewriteCond %{HTTP_HOST} ^www\\.(.*)$ [NC]\nRewriteRule ^(.*)$ https://%1/$1 [R=301,L]' },
      { id: 'gzip', label: 'Enable Gzip', code: '<IfModule mod_deflate.c>\n  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json image/svg+xml\n</IfModule>' },
      { id: 'cache', label: 'Browser Caching', code: '<IfModule mod_expires.c>\n  ExpiresActive On\n  ExpiresByType text/css "access plus 1 month"\n  ExpiresByType application/javascript "access plus 1 month"\n  ExpiresByType image/png "access plus 1 year"\n  ExpiresByType image/jpg "access plus 1 year"\n  ExpiresByType image/jpeg "access plus 1 year"\n  ExpiresByType image/svg+xml "access plus 1 year"\n  ExpiresByType image/webp "access plus 1 year"\n</IfModule>' },
      { id: 'cors', label: 'Enable CORS', code: 'Header set Access-Control-Allow-Origin "*"\nHeader set Access-Control-Allow-Methods "GET, POST, OPTIONS"\nHeader set Access-Control-Allow-Headers "Content-Type, Authorization"' },
      { id: 'sec', label: 'Security Headers', code: 'Header set X-Content-Type-Options "nosniff"\nHeader set X-Frame-Options "SAMEORIGIN"\nHeader set X-XSS-Protection "1; mode=block"\nHeader set Referrer-Policy "strict-origin-when-cross-origin"\nHeader set Strict-Transport-Security "max-age=31536000; includeSubDomains"' },
      { id: 'spa', label: 'SPA Fallback', code: 'RewriteEngine On\nRewriteBase /\nRewriteRule ^index\\.html$ - [L]\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteRule . /index.html [L]' },
      { id: 'hotlink', label: 'Block Hotlinking', code: 'RewriteEngine On\nRewriteCond %{HTTP_REFERER} !^$\nRewriteCond %{HTTP_REFERER} !^https?://(www\\.)?yourdomain\\.com [NC]\nRewriteRule \\.(jpg|jpeg|png|gif|webp|svg)$ - [F,NC]' },
    ];

    rules.forEach(r => {
      const { row, input } = iosToggle('ht-' + r.id, r.label, false, generate);
      r.toggle = input;
      container.appendChild(row);
    });

    function generate() {
      const selected = rules.filter(r => r.toggle.checked);
      if (!selected.length) { resultBox(container, '# Select rules above to generate .htaccess'); return; }
      const output = selected.map(r => `# ${r.label}\n${r.code}`).join('\n\n');
      resultBox(container, output);
    }
    generate();
  };

  // ── Meta Tag Generator ──
  toolBuilders.metatags = (container) => {
    const fields = [
      { id: 'mt-title', label: 'Page Title', placeholder: 'My Awesome Website' },
      { id: 'mt-desc', label: 'Description', placeholder: 'A brief description of your page (150-160 chars)' },
      { id: 'mt-url', label: 'URL', placeholder: 'https://example.com' },
      { id: 'mt-image', label: 'Image URL', placeholder: 'https://example.com/og-image.jpg' },
      { id: 'mt-sitename', label: 'Site Name', placeholder: 'My Website' },
      { id: 'mt-twitter', label: 'Twitter Handle', placeholder: '@username' },
    ];
    const inputs = {};
    fields.forEach(f => {
      const fg = el('div', { className: 'form-group' });
      fg.appendChild(el('label', { textContent: f.label }));
      const inp = el('input', { className: 'glass-input', placeholder: f.placeholder, id: f.id });
      fg.appendChild(inp);
      container.appendChild(fg);
      inputs[f.id] = inp;
    });

    const genBtn = el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Generate Tags', onClick: generate });
    container.appendChild(genBtn);

    function generate() {
      const t = inputs['mt-title'].value || 'Page Title';
      const d = inputs['mt-desc'].value || 'Page description';
      const u = inputs['mt-url'].value || 'https://example.com';
      const img = inputs['mt-image'].value || '';
      const sn = inputs['mt-sitename'].value || '';
      const tw = inputs['mt-twitter'].value || '';
      let tags = `<title>${t}</title>\n<meta name="description" content="${d}">\n\n<!-- Open Graph -->\n<meta property="og:type" content="website">\n<meta property="og:title" content="${t}">\n<meta property="og:description" content="${d}">\n<meta property="og:url" content="${u}">`;
      if (img) tags += `\n<meta property="og:image" content="${img}">`;
      if (sn) tags += `\n<meta property="og:site_name" content="${sn}">`;
      tags += `\n\n<!-- Twitter Card -->\n<meta name="twitter:card" content="${img ? 'summary_large_image' : 'summary'}">\n<meta name="twitter:title" content="${t}">\n<meta name="twitter:description" content="${d}">`;
      if (img) tags += `\n<meta name="twitter:image" content="${img}">`;
      if (tw) tags += `\n<meta name="twitter:site" content="${tw}">`;
      resultBox(container, tags);
    }
  };

  // ── Aspect Ratio Calculator ──
  toolBuilders.aspectratio = (container) => {
    const fg1 = el('div', { className: 'form-group' });
    fg1.appendChild(el('label', { textContent: 'Width' }));
    const wInput = el('input', { className: 'glass-input', type: 'number', value: '1920', placeholder: 'Width' });
    fg1.appendChild(wInput);
    container.appendChild(fg1);

    const fg2 = el('div', { className: 'form-group' });
    fg2.appendChild(el('label', { textContent: 'Height' }));
    const hInput = el('input', { className: 'glass-input', type: 'number', value: '1080', placeholder: 'Height' });
    fg2.appendChild(hInput);
    container.appendChild(fg2);

    const resultDiv = el('div');
    container.appendChild(resultDiv);

    function gcd(a, b) { return b ? gcd(b, a % b) : a; }

    function calc() {
      const w = parseInt(wInput.value) || 0;
      const h = parseInt(hInput.value) || 0;
      if (!w || !h) return;
      const d = gcd(w, h);
      const rw = w / d, rh = h / d;
      resultDiv.innerHTML = '';
      [
        ['Ratio', `${rw}:${rh}`],
        ['Decimal', (w / h).toFixed(4)],
        ['Orientation', w > h ? 'Landscape' : w < h ? 'Portrait' : 'Square'],
        ['Total Pixels', (w * h).toLocaleString()],
        ['Megapixels', ((w * h) / 1000000).toFixed(2) + ' MP'],
      ].forEach(([label, value]) => {
        const row = el('div', { className: 'info-row' });
        row.appendChild(el('span', { className: 'info-label', textContent: label }));
        row.appendChild(el('span', { className: 'info-value', textContent: value }));
        resultDiv.appendChild(row);
      });

      // Common sizes for this ratio
      const common = [
        [320], [640], [768], [1024], [1280], [1366], [1440], [1920], [2560], [3840]
      ];
      resultDiv.appendChild(el('label', { textContent: 'Common Sizes', style: 'margin-top:16px;display:block' }));
      common.forEach(([cw]) => {
        const ch = Math.round(cw * rh / rw);
        const row = el('div', { className: 'info-row' });
        row.appendChild(el('span', { className: 'info-label', textContent: `${cw} x ${ch}` }));
        row.appendChild(el('span', { className: 'info-value', textContent: `${rw}:${rh}` }));
        resultDiv.appendChild(row);
      });
    }
    wInput.addEventListener('input', calc);
    hInput.addEventListener('input', calc);
    calc();
  };

  // ── Image Crop & Resize ──
  toolBuilders.imgcrop = (container) => {
    const fileInput = el('input', { type: 'file', accept: 'image/*', className: 'glass-input', style: 'padding:10px' });
    container.appendChild(fileInput);

    const previewWrap = el('div', { style: 'margin:16px 0;text-align:center;display:none' });
    const img = el('img', { style: 'max-width:100%;max-height:300px;border-radius:12px' });
    previewWrap.appendChild(img);
    container.appendChild(previewWrap);

    const controls = el('div', { style: 'display:none' });
    const fg1 = el('div', { className: 'form-group' });
    fg1.appendChild(el('label', { textContent: 'Resize Width (px)' }));
    const wInput = el('input', { className: 'glass-input', type: 'number', placeholder: 'Width' });
    fg1.appendChild(wInput);
    controls.appendChild(fg1);

    const fg2 = el('div', { className: 'form-group' });
    fg2.appendChild(el('label', { textContent: 'Resize Height (px)' }));
    const hInput = el('input', { className: 'glass-input', type: 'number', placeholder: 'Height' });
    fg2.appendChild(hInput);
    controls.appendChild(fg2);

    const { row: lockRow, input: lockRatio } = iosToggle('crop-lock', 'Lock Aspect Ratio', true);
    controls.appendChild(lockRow);

    // Crop inputs
    const cropLabel = el('label', { textContent: 'Crop (px from edge)', style: 'margin-top:12px;display:block' });
    controls.appendChild(cropLabel);
    const cropRow = el('div', { className: 'form-row' });
    const cropTop = el('input', { className: 'glass-input', type: 'number', placeholder: 'Top', value: '0' });
    const cropRight = el('input', { className: 'glass-input', type: 'number', placeholder: 'Right', value: '0' });
    const cropBottom = el('input', { className: 'glass-input', type: 'number', placeholder: 'Bottom', value: '0' });
    const cropLeft = el('input', { className: 'glass-input', type: 'number', placeholder: 'Left', value: '0' });
    cropRow.append(cropTop, cropRight, cropBottom, cropLeft);
    controls.appendChild(cropRow);

    const fmtFg = el('div', { className: 'form-group', style: 'margin-top:12px' });
    fmtFg.appendChild(el('label', { textContent: 'Output Format' }));
    const fmtPicker = glassPicker('crop-fmt', ['PNG', 'JPEG', 'WebP'], 'PNG');
    fmtFg.appendChild(fmtPicker.wrapper);
    controls.appendChild(fmtFg);

    const processBtn = el('button', { className: 'btn btn-primary', style: 'width:100%;margin-top:12px', textContent: 'Process & Download', onClick: process });
    controls.appendChild(processBtn);
    container.appendChild(controls);

    let origW, origH, ratio;

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
        img.onload = () => {
          origW = img.naturalWidth;
          origH = img.naturalHeight;
          ratio = origW / origH;
          wInput.value = origW;
          hInput.value = origH;
          previewWrap.style.display = 'block';
          controls.style.display = 'block';
        };
      };
      reader.readAsDataURL(file);
    });

    wInput.addEventListener('input', () => {
      if (lockRatio.checked && wInput.value) {
        hInput.value = Math.round(parseInt(wInput.value) / ratio);
      }
    });
    hInput.addEventListener('input', () => {
      if (lockRatio.checked && hInput.value) {
        wInput.value = Math.round(parseInt(hInput.value) * ratio);
      }
    });

    function process() {
      const w = parseInt(wInput.value) || origW;
      const h = parseInt(hInput.value) || origH;
      const ct = parseInt(cropTop.value) || 0;
      const cr = parseInt(cropRight.value) || 0;
      const cb = parseInt(cropBottom.value) || 0;
      const cl = parseInt(cropLeft.value) || 0;

      const canvas = document.createElement('canvas');
      const srcW = origW - cl - cr;
      const srcH = origH - ct - cb;
      const destW = Math.round(w * (srcW / origW));
      const destH = Math.round(h * (srcH / origH));
      canvas.width = destW;
      canvas.height = destH;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, cl, ct, srcW, srcH, 0, 0, destW, destH);

      const fmt = fmtPicker.value;
      const mime = fmt === 'JPEG' ? 'image/jpeg' : fmt === 'WebP' ? 'image/webp' : 'image/png';
      const quality = fmt === 'PNG' ? undefined : 0.92;
      canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.download = `cropped-${destW}x${destH}.${fmt.toLowerCase()}`;
        a.href = url;
        a.click();
        URL.revokeObjectURL(url);
        resultBox(container, `Saved: ${destW} x ${destH} (${fmt}) — ${(blob.size / 1024).toFixed(1)} KB`);
      }, mime, quality);
    }
  };

  // ── Image Compressor ──
  toolBuilders.imgcompress = (container) => {
    const fileInput = el('input', { type: 'file', accept: 'image/*', className: 'glass-input', style: 'padding:10px' });
    container.appendChild(fileInput);

    const previewWrap = el('div', { style: 'margin:16px 0;text-align:center;display:none' });
    const img = el('img', { style: 'max-width:100%;max-height:250px;border-radius:12px' });
    previewWrap.appendChild(img);
    container.appendChild(previewWrap);

    const controls = el('div', { style: 'display:none' });

    const { group: qGroup, input: qSlider, label: qLabel } = lgSlider('comp-quality', 1, 100, 75, 'comp-q-label', () => {
      qLabel.textContent = `Quality: ${qSlider.value}%`;
    });
    qLabel.textContent = 'Quality: 75%';
    controls.appendChild(qGroup);

    const fmtFg = el('div', { className: 'form-group' });
    fmtFg.appendChild(el('label', { textContent: 'Output Format' }));
    const fmtPicker = glassPicker('comp-fmt', ['JPEG', 'WebP', 'PNG'], 'JPEG');
    fmtFg.appendChild(fmtPicker.wrapper);
    controls.appendChild(fmtFg);

    // Max dimension
    const fg3 = el('div', { className: 'form-group' });
    fg3.appendChild(el('label', { textContent: 'Max Dimension (px, 0 = no resize)' }));
    const maxDim = el('input', { className: 'glass-input', type: 'number', value: '0', placeholder: '0 = original size' });
    fg3.appendChild(maxDim);
    controls.appendChild(fg3);

    const compBtn = el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Compress & Download', onClick: compress });
    controls.appendChild(compBtn);
    container.appendChild(controls);

    let origSize = 0;

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      origSize = file.size;
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
        previewWrap.style.display = 'block';
        controls.style.display = 'block';
      };
      reader.readAsDataURL(file);
    });

    function compress() {
      const canvas = document.createElement('canvas');
      let w = img.naturalWidth, h = img.naturalHeight;
      const max = parseInt(maxDim.value) || 0;
      if (max > 0 && (w > max || h > max)) {
        if (w > h) { h = Math.round(h * max / w); w = max; }
        else { w = Math.round(w * max / h); h = max; }
      }
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);

      const fmt = fmtPicker.value;
      const mime = fmt === 'JPEG' ? 'image/jpeg' : fmt === 'WebP' ? 'image/webp' : 'image/png';
      const quality = fmt === 'PNG' ? undefined : qSlider.value / 100;
      canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.download = `compressed.${fmt.toLowerCase()}`;
        a.href = url;
        a.click();
        URL.revokeObjectURL(url);
        const saved = origSize - blob.size;
        const pct = ((saved / origSize) * 100).toFixed(1);
        resultBox(container, `Original: ${(origSize / 1024).toFixed(1)} KB\nCompressed: ${(blob.size / 1024).toFixed(1)} KB\nSaved: ${(saved / 1024).toFixed(1)} KB (${pct}%)\nDimensions: ${w} x ${h}`);
      }, mime, quality);
    }
  };

  // ── Image Format Converter ──
  toolBuilders.imgconvert = (container) => {
    const fileInput = el('input', { type: 'file', accept: 'image/*', className: 'glass-input', style: 'padding:10px', multiple: true });
    container.appendChild(fileInput);

    const fg = el('div', { className: 'form-group', style: 'margin-top:12px' });
    fg.appendChild(el('label', { textContent: 'Convert to' }));
    const fmtPicker = glassPicker('conv-fmt', ['PNG', 'JPEG', 'WebP'], 'WebP');
    fg.appendChild(fmtPicker.wrapper);
    container.appendChild(fg);

    const { group: qGroup, input: qSlider, label: qLabel } = lgSlider('conv-quality', 1, 100, 85, 'conv-q-label', () => {
      qLabel.textContent = `Quality: ${qSlider.value}%`;
    });
    qLabel.textContent = 'Quality: 85%';
    container.appendChild(qGroup);

    const convBtn = el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Convert & Download', onClick: convert });
    container.appendChild(convBtn);

    function convert() {
      const files = fileInput.files;
      if (!files.length) return;
      const fmt = fmtPicker.value;
      const mime = fmt === 'JPEG' ? 'image/jpeg' : fmt === 'WebP' ? 'image/webp' : 'image/png';
      const quality = fmt === 'PNG' ? undefined : qSlider.value / 100;
      let done = 0;
      const results = [];

      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            canvas.getContext('2d').drawImage(img, 0, 0);
            canvas.toBlob(blob => {
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              const name = file.name.replace(/\.[^.]+$/, '') + '.' + fmt.toLowerCase();
              a.download = name;
              a.href = url;
              a.click();
              URL.revokeObjectURL(url);
              results.push(`${file.name} (${(file.size / 1024).toFixed(1)} KB) -> ${name} (${(blob.size / 1024).toFixed(1)} KB)`);
              done++;
              if (done === files.length) {
                resultBox(container, `Converted ${done} file${done > 1 ? 's' : ''}:\n\n${results.join('\n')}`);
              }
            }, mime, quality);
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // ── Image Filters ──
  toolBuilders.imgfilters = (container) => {
    const fileInput = el('input', { type: 'file', accept: 'image/*', className: 'glass-input', style: 'padding:10px' });
    container.appendChild(fileInput);

    const previewWrap = el('div', { style: 'margin:16px 0;text-align:center;display:none' });
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'max-width:100%;border-radius:12px';
    previewWrap.appendChild(canvas);
    container.appendChild(previewWrap);

    const controls = el('div', { style: 'display:none' });
    const filters = [
      { id: 'brightness', label: 'Brightness', min: 0, max: 200, val: 100, unit: '%' },
      { id: 'contrast', label: 'Contrast', min: 0, max: 200, val: 100, unit: '%' },
      { id: 'saturate', label: 'Saturation', min: 0, max: 200, val: 100, unit: '%' },
      { id: 'grayscale', label: 'Grayscale', min: 0, max: 100, val: 0, unit: '%' },
      { id: 'blur', label: 'Blur', min: 0, max: 20, val: 0, unit: 'px' },
      { id: 'sepia', label: 'Sepia', min: 0, max: 100, val: 0, unit: '%' },
      { id: 'hue-rotate', label: 'Hue Rotate', min: 0, max: 360, val: 0, unit: 'deg' },
      { id: 'invert', label: 'Invert', min: 0, max: 100, val: 0, unit: '%' },
    ];

    const sliders = {};
    filters.forEach(f => {
      const { group, input: slider, label: lab } = lgSlider('flt-' + f.id, f.min, f.max, f.val, 'flt-label-' + f.id, () => {
        lab.textContent = `${f.label}: ${slider.value}${f.unit}`;
        applyFilters();
      });
      lab.textContent = `${f.label}: ${f.val}${f.unit}`;
      sliders[f.id] = slider;
      controls.appendChild(group);
    });

    const btnRow = el('div', { className: 'btn-group' });
    btnRow.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Reset All', onClick: () => {
      filters.forEach(f => {
        // Reset by reloading image
      });
      loadImage();
    }}));
    btnRow.appendChild(el('button', { className: 'btn btn-primary btn-sm', textContent: 'Download', onClick: download }));
    controls.appendChild(btnRow);
    container.appendChild(controls);

    let origImg = null;

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        origImg = new Image();
        origImg.onload = () => { loadImage(); previewWrap.style.display = 'block'; controls.style.display = 'block'; };
        origImg.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });

    function loadImage() {
      if (!origImg) return;
      canvas.width = origImg.width;
      canvas.height = origImg.height;
      applyFilters();
    }

    function applyFilters() {
      if (!origImg) return;
      const ctx = canvas.getContext('2d');
      const filterStr = filters.map(f => {
        const v = sliders[f.id].value;
        if (f.id === 'blur') return `blur(${v}px)`;
        if (f.id === 'hue-rotate') return `hue-rotate(${v}deg)`;
        return `${f.id}(${v}%)`;
      }).join(' ');
      ctx.filter = filterStr;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(origImg, 0, 0);
    }

    function download() {
      canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.download = 'filtered-image.png';
        a.href = url;
        a.click();
        URL.revokeObjectURL(url);
      });
    }
  };

})();
