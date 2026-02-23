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
    lorem: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 11h16"/><path d="M4 15h10"/><path d="M4 19h13"/></svg>`,
    xmlformat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><path d="M14 4l-4 16"/></svg>`,
    jsonpath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"/><path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><path d="M12 8v2"/><path d="M12 14v2"/></svg>`,
    htmlpreview: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="2" y1="9" x2="22" y2="9"/><circle cx="5" cy="6" r="0.8" fill="currentColor" stroke="none"/><circle cx="8" cy="6" r="0.8" fill="currentColor" stroke="none"/><circle cx="11" cy="6" r="0.8" fill="currentColor" stroke="none"/><polyline points="8 14 6 16 8 18"/><polyline points="16 14 18 16 16 18"/></svg>`,
    jsondiff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="8" height="18" rx="1"/><rect x="14" y="3" width="8" height="18" rx="1"/><path d="M6 8h0"/><path d="M6 12h0"/><path d="M6 16h0"/><path d="M18 8h0"/><path d="M18 12h0"/><path d="M18 16h0"/></svg>`,
    emoji: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
    flexbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><rect x="5" y="8" width="4" height="8" rx="1"/><rect x="10" y="8" width="4" height="8" rx="1"/><rect x="15" y="8" width="4" height="8" rx="1"/></svg>`,
    cssgrid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,
    palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="7" r="1.5"/><circle cx="7.5" cy="11" r="1.5"/><circle cx="9" cy="16" r="1.5"/><circle cx="15" cy="16" r="1.5"/><path d="M16.5 11a1.5 1.5 0 1 0 0-3 4 4 0 0 1 3 7c-1.5 0-3-1.5-3-4z"/></svg>`,
    svgoptimize: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/><path d="M12 8v4"/><path d="M10 10h4"/></svg>`,
    nginx: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 17V7l10 10V7"/></svg>`,
    ogpreview: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/><rect x="3" y="3" width="18" height="9" rx="2" fill="none"/><path d="M7 15h10"/><path d="M7 18h6"/></svg>`,
    mdtable: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="12" y1="3" x2="12" y2="21"/></svg>`,
    cidr: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10"/><path d="M12 2a15 15 0 0 0-4 10 15 15 0 0 0 4 10"/></svg>`,
    codescreenshot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/><path d="M14 3l4 4-4 4"/></svg>`,
    configparse: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h3"/><path d="M8 17h5"/><path d="M16 13h0"/><path d="M16 17h0"/></svg>`,
    strescape: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M9 8l2 2-2 2"/><path d="M13 12h2"/></svg>`,
    asciiart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"/><path d="M4 10h16"/><path d="M4 14h10"/><path d="M4 18h6"/><rect x="2" y="3" width="20" height="18" rx="2"/></svg>`,
    wordfreq: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h7"/><path d="M4 11h16"/><path d="M4 15h12"/><path d="M4 19h9"/><path d="M18 4l2 2-2 2"/><path d="M20 6h-4"/></svg>`,
    morse: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="4" cy="12" r="1.5"/><line x1="8" y1="12" x2="14" y2="12"/><circle cx="18" cy="12" r="1.5"/><circle cx="4" cy="6" r="1.5"/><circle cx="8" cy="6" r="1.5"/><line x1="12" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="10" y2="18"/><circle cx="14" cy="18" r="1.5"/><line x1="18" y1="18" x2="20" y2="18"/></svg>`,
    jsonschema: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"/><path d="M12 8v4"/><path d="M12 16h.01"/><path d="M9 12h6"/></svg>`,
    cssselector: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8l-4 4 4 4"/><path d="M17 8l4 4-4 4"/><path d="M14 4l-4 16"/></svg>`,
    robotstxt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="11" rx="2"/><circle cx="9" cy="14" r="1.5"/><circle cx="15" cy="14" r="1.5"/><path d="M9 18h6"/><path d="M12 4v5"/><circle cx="12" cy="4" r="1.5"/><path d="M3 13l2-2"/><path d="M21 13l-2-2"/></svg>`,
    sitemapgen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v18H3z" rx="2"/><path d="M7 8h10"/><path d="M7 12h7"/><path d="M7 16h9"/><circle cx="4.5" cy="8" r="0.5" fill="currentColor" stroke="none"/><circle cx="4.5" cy="12" r="0.5" fill="currentColor" stroke="none"/><circle cx="4.5" cy="16" r="0.5" fill="currentColor" stroke="none"/></svg>`,
    schemaorg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"/><path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"/><path d="M9 10l2 2-2 2"/><path d="M13 10h2"/><path d="M13 14h2"/></svg>`,
    gitcmd: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><circle cx="6" cy="18" r="2"/><path d="M6 8v8"/><path d="M18 16V9a3 3 0 0 0-3-3H8"/></svg>`,
    pkgjson: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/><path d="M3 7l9 5 9-5"/><path d="M12 12v10"/></svg>`,
    favicogen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="12" cy="12" r="4"/><path d="M12 8v1"/><path d="M12 15v1"/><path d="M8 12h1"/><path d="M15 12h1"/></svg>`,
    srihash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l7 4v6c0 5.25-3.5 9.5-7 11-3.5-1.5-7-5.75-7-11V6l7-4z"/><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`,
    cspbuilder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l7 4v6c0 5.25-3.5 9.5-7 11-3.5-1.5-7-5.75-7-11V6l7-4z"/><path d="M8 12h8"/><path d="M8 9h5"/><path d="M8 15h6"/></svg>`,
    httpheaders: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="2" y1="9" x2="22" y2="9"/><path d="M6 6h4"/><path d="M6 13h5"/><path d="M13 13h5"/><path d="M6 16.5h5"/><path d="M13 16.5h5"/></svg>`,
    fakedata: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="13" y2="12"/><line x1="7" y1="16" x2="15" y2="16"/><circle cx="16" cy="14" r="2.5"/><path d="M18 17l1.5 1.5"/></svg>`,
    barcodegen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="6" y2="16"/><line x1="8.5" y1="8" x2="8.5" y2="16"/><line x1="10" y1="8" x2="10" y2="16"/><line x1="13" y1="8" x2="13" y2="16"/><line x1="15.5" y1="8" x2="15.5" y2="16"/><line x1="17" y1="8" x2="17" y2="16"/><line x1="18.5" y1="8" x2="18.5" y2="16"/></svg>`,
    svgpattern: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1.5"/><circle cx="16" cy="8" r="1.5"/><circle cx="8" cy="16" r="1.5"/><circle cx="16" cy="16" r="1.5"/><circle cx="12" cy="12" r="1.5"/></svg>`,
    testcards: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="3"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="6" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="18" y2="14"/></svg>`,
    cssanim: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-5 0-9 4-9 9s4 9 9 9"/><polyline points="12 7 12 12 15 15"/><path d="M16 3.5c2.5 1.5 4.5 4 5 7"/><polyline points="21 3 21 7.5 16.5 7.5"/></svg>`,
    cssfilter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="3" opacity="0.5"/><circle cx="15" cy="10" r="3" opacity="0.5"/><circle cx="12" cy="15" r="3" opacity="0.5"/></svg>`,
    csstransform: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="1" transform="rotate(15 12 12)" stroke-dasharray="3 2"/><rect x="7" y="7" width="10" height="10" rx="1"/><polyline points="17 10 20 10"/><polyline points="10 17 10 20"/></svg>`,
    clippath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/><circle cx="12" cy="12" r="4" stroke-dasharray="2 2"/></svg>`,
    glassmorph: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="14" height="14" rx="4" opacity="0.4"/><rect x="7" y="4" width="14" height="14" rx="4"/><path d="M11 8h6" opacity="0.5"/><path d="M11 11h4" opacity="0.5"/></svg>`,
    typoscale: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4h16v3"/><path d="M12 4v16"/><path d="M8 20h8"/><path d="M18 14v-2h-6v2"/><path d="M15 12v8"/><path d="M13 20h4"/></svg>`,
    csvview: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><circle cx="6" cy="6" r="0.8" fill="currentColor" stroke="none"/></svg>`,
    sql2mongo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="7" cy="5" rx="5" ry="3"/><path d="M2 5v6c0 1.66 2.24 3 5 3s5-1.34 5-3V5"/><path d="M14 11l3 3-3 3"/><path d="M17 17a5 5 0 1 0 0-10"/><circle cx="17" cy="17" r="1" fill="currentColor" stroke="none"/></svg>`,
    scicalc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="2" width="18" height="20" rx="3"/><rect x="5" y="4" width="14" height="5" rx="1.5"/><circle cx="7.5" cy="13" r="1.2"/><circle cx="12" cy="13" r="1.2"/><circle cx="16.5" cy="13" r="1.2"/><circle cx="7.5" cy="17.5" r="1.2"/><circle cx="12" cy="17.5" r="1.2"/><circle cx="16.5" cy="17.5" r="1.2"/></svg>`,
    statscalc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16"/><rect x="5" y="13" width="3" height="7" rx="0.5"/><rect x="10.5" y="8" width="3" height="12" rx="0.5"/><rect x="16" y="4" width="3" height="16" rx="0.5"/><path d="M4 10l5-4 4 3 6-5" stroke-dasharray="3 2"/></svg>`,
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
    { id: 'jsonpath',  cat: 'Developer',        title: 'JSONPath Tester',    desc: 'Test JSONPath expressions against JSON data' },
    { id: 'htmlpreview',cat: 'Developer',       title: 'HTML Live Preview',  desc: 'Write HTML/CSS/JS and see a live preview' },
    { id: 'nginx',     cat: 'Developer',        title: 'Nginx Config',       desc: 'Generate Nginx server block configurations' },
    { id: 'ogpreview', cat: 'Developer',        title: 'OG Preview',         desc: 'Preview Open Graph meta tags for social sharing' },
    { id: 'cidr',      cat: 'Developer',        title: 'IP/CIDR Calculator', desc: 'Calculate subnets, hosts & network ranges' },
    { id: 'codescreenshot',cat: 'Developer',    title: 'Code Screenshot',    desc: 'Generate beautiful code screenshots' },
    // Generators
    { id: 'lorem',     cat: 'Generators',       title: 'Lorem Ipsum',        desc: 'Generate placeholder lorem ipsum text' },
    { id: 'emoji',     cat: 'Generators',       title: 'Emoji Picker',       desc: 'Search and copy emojis to clipboard' },
    // Formatters
    { id: 'xmlformat', cat: 'Formatters',       title: 'XML Formatter',      desc: 'Beautify and minify XML documents' },
    { id: 'svgoptimize',cat: 'Formatters',      title: 'SVG Optimizer',      desc: 'Optimize and minify SVG code with live preview' },
    // CSS Tools
    { id: 'flexbox',   cat: 'CSS Tools',        title: 'Flexbox Playground', desc: 'Visual flexbox layout generator with live preview' },
    { id: 'cssgrid',   cat: 'CSS Tools',        title: 'Grid Generator',     desc: 'Visual CSS grid layout builder' },
    { id: 'palette',   cat: 'CSS Tools',        title: 'Color Palette',      desc: 'Generate harmonious color palettes from any base color' },
    // Data
    { id: 'jsondiff',  cat: 'Data',             title: 'JSON Diff',          desc: 'Deep compare JSON objects and highlight differences' },
    { id: 'configparse',cat: 'Data',            title: 'Config Converter',   desc: 'Convert between TOML, INI, ENV, JSON & YAML' },
    // Text
    { id: 'mdtable',   cat: 'Text',             title: 'Markdown Table',     desc: 'Build markdown tables with a visual editor' },
    // Text (new)
    { id: 'strescape', cat: 'Text',             title: 'String Escape/Unescape', desc: 'Escape and unescape strings for JS, JSON, HTML, CSV, SQL' },
    { id: 'asciiart',  cat: 'Text',             title: 'Text to ASCII Art',  desc: 'Convert text into block-letter ASCII art using # characters' },
    { id: 'wordfreq',  cat: 'Text',             title: 'Word Frequency Analyzer', desc: 'Analyze word frequency, count, and percentage in any text' },
    { id: 'morse',     cat: 'Text',             title: 'Morse Code Translator', desc: 'Translate between text and Morse code with audio playback' },
    // Developer (new)
    { id: 'jsonschema',cat: 'Developer',        title: 'JSON Schema Validator', desc: 'Validate JSON data against a JSON Schema definition' },
    { id: 'cssselector',cat: 'Developer',       title: 'CSS Selector Tester', desc: 'Test CSS selectors against HTML and see matched elements' },
    { id: 'robotstxt', cat: 'Developer',        title: 'Robots.txt Generator', desc: 'Generate robots.txt files with common crawl directives' },
    { id: 'sitemapgen',cat: 'Developer',        title: 'Sitemap Generator',  desc: 'Generate XML sitemaps from a list of URLs' },
    { id: 'schemaorg', cat: 'Developer',        title: 'Schema.org Generator', desc: 'Generate JSON-LD structured data for SEO' },
    { id: 'gitcmd',    cat: 'Developer',        title: 'Git Command Builder', desc: 'Build git commands with a visual interface' },
    { id: 'pkgjson',   cat: 'Developer',        title: 'package.json Generator', desc: 'Generate package.json files for Node.js projects' },
    { id: 'favicogen', cat: 'Developer',        title: 'Favicon Generator',  desc: 'Create favicons from text or emoji with canvas' },
    { id: 'srihash',   cat: 'Developer',        title: 'SRI Hash Generator', desc: 'Generate Subresource Integrity hashes for scripts & styles' },
    { id: 'cspbuilder',cat: 'Developer',        title: 'CSP Header Builder', desc: 'Build Content-Security-Policy headers visually' },
    { id: 'httpheaders',cat: 'Developer',       title: 'HTTP Header Parser', desc: 'Parse and analyze HTTP headers with security checks' },
    // Generators (new)
    { id: 'fakedata',  cat: 'Generators',       title: 'Fake Data Generator', desc: 'Generate realistic fake data for testing and development' },
    { id: 'barcodegen',cat: 'Generators',       title: 'Barcode Generator',  desc: 'Create Code 128, EAN-13, EAN-8, and UPC-A barcodes' },
    { id: 'svgpattern',cat: 'Generators',       title: 'SVG Pattern Generator', desc: 'Create seamless SVG patterns with live preview' },
    { id: 'testcards', cat: 'Generators',       title: 'Credit Card Test Numbers', desc: 'Test card numbers for payment development' },
    // CSS Tools (new)
    { id: 'cssanim',   cat: 'CSS Tools',        title: 'CSS Animation Builder', desc: 'Build CSS keyframe animations visually' },
    { id: 'cssfilter', cat: 'CSS Tools',        title: 'CSS Filter Playground', desc: 'Experiment with CSS filter effects in real-time' },
    { id: 'csstransform',cat: 'CSS Tools',      title: 'CSS Transform Playground', desc: 'Visualize and build CSS transforms interactively' },
    { id: 'clippath',  cat: 'CSS Tools',        title: 'Clip-Path Generator', desc: 'Create CSS clip-path shapes with live preview' },
    { id: 'glassmorph',cat: 'CSS Tools',        title: 'Glassmorphism',      desc: 'Generate glassmorphism CSS with live preview' },
    { id: 'typoscale', cat: 'CSS Tools',        title: 'Type Scale',         desc: 'Calculate typographic scale with CSS custom properties' },
    // Data (new)
    { id: 'csvview',   cat: 'Data',             title: 'CSV Viewer/Editor',  desc: 'Parse, view, edit and export CSV data' },
    { id: 'sql2mongo', cat: 'Data',             title: 'SQL to MongoDB',     desc: 'Convert SQL queries to MongoDB shell commands' },
    // Math (new)
    { id: 'scicalc',   cat: 'Math',             title: 'Scientific Calculator', desc: 'Full scientific calculator with keyboard support' },
    { id: 'statscalc', cat: 'Math',             title: 'Statistics Calculator', desc: 'Compute mean, median, std dev, quartiles & more' },
  ];

  // ── Render Tool Cards (grouped by category) ──
  const grid = document.getElementById('tool-grid');
  const categories = [...new Set(tools.map(t => t.cat))];

  // Build sticky category nav
  const catNav = document.createElement('nav');
  catNav.className = 'cat-nav';
  catNav.id = 'cat-nav';

  // Search box
  const searchWrap = document.createElement('div');
  searchWrap.className = 'search-wrap';
  searchWrap.innerHTML = `<svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.className = 'search-input';
  searchInput.placeholder = 'Search tools…';
  searchInput.setAttribute('aria-label', 'Search tools');
  searchWrap.appendChild(searchInput);
  const searchClear = document.createElement('button');
  searchClear.className = 'search-clear';
  searchClear.innerHTML = '&times;';
  searchClear.setAttribute('aria-label', 'Clear search');
  searchWrap.appendChild(searchClear);
  catNav.appendChild(searchWrap);

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

  // ── Search Filter ───────────────────────────────
  function filterTools(query) {
    const q = query.trim().toLowerCase();
    searchWrap.classList.toggle('has-value', q.length > 0);
    catNavInner.style.display = q ? 'none' : '';

    document.querySelectorAll('.tool-section').forEach(section => {
      const cards = section.querySelectorAll('.glass-card');
      let visibleCount = 0;
      cards.forEach(card => {
        const tool = tools.find(t => t.id === card.dataset.tool);
        const match = !q || tool.title.toLowerCase().includes(q) || tool.desc.toLowerCase().includes(q) || tool.cat.toLowerCase().includes(q);
        card.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });
      section.style.display = visibleCount ? '' : 'none';
    });
  }
  searchInput.addEventListener('input', () => filterTools(searchInput.value));
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    filterTools('');
    searchInput.focus();
  });
  // Keyboard shortcut: / to focus search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !e.ctrlKey && !e.metaKey && document.activeElement !== searchInput && !document.querySelector('.panel-overlay.active')) {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      filterTools('');
      searchInput.blur();
    }
  });

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

  // ── Lorem Ipsum Generator ──
  toolBuilders.lorem = (container) => {
    const corpus = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula ut dictum pharetra, nisi nunc fringilla magna, in commodo elit erat nec turpis.',
      'Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
      'Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc. Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna. Ut nulla. Vivamus bibendum, nulla ut congue fringilla, lorem ipsum ultricies risus, ut rutrum velit tortor vel purus.',
      'In hac habitasse platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend. Sed porttitor pretium venenatis. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum velit, vel viverra ante neque quis nisi. Nulla facilisi. Donec venenatis massa ac arcu. Ut sit amet quam quis libero fermentum elementum.',
      'Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio. Nunc porta vulputate tellus. Nunc rutrum turpis sed pede. Sed bibendum. Aliquam posuere. Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.',
      'Curabitur vulputate vestibulum lorem. Fusce sagittis, libero non molestie mollis, magna orci ullamcorper dolor, at vulputate neque nulla lacinia eros. Sed id ligula quis est convallis tempor. Curabitur lacinia pulvinar nibh. Nam a sapien. Pellentesque vel dui sed orci faucibus iaculis.',
      'Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.',
      'Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.',
      'Praesent blandit laoreet nibh. Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Quisque id mi. Ut tincidunt tincidunt erat. Etiam vestibulum volutpat enim.',
      'Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.',
      'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.'
    ];
    const { group: countGroup, input: countSlider, label: countLabel } = lgSlider('lorem-count', 1, 20, 5, 'lorem-count-label', () => {
      countLabel.textContent = 'Paragraphs: ' + countSlider.value;
    });
    countLabel.textContent = 'Paragraphs: 5';
    container.appendChild(countGroup);
    const { row: startRow, input: startInput } = iosToggle('lorem-start', 'Start with "Lorem ipsum..."', true);
    container.appendChild(startRow);
    const { row: htmlRow, input: htmlInput } = iosToggle('lorem-html', 'Wrap in <p> tags', false);
    container.appendChild(htmlRow);
    container.appendChild(el('button', { className: 'btn btn-primary', style: 'margin-top:16px;width:100%', textContent: 'Generate', onClick: generate }));
    function generate() {
      const count = parseInt(countSlider.value, 10);
      const paragraphs = [];
      for (let i = 0; i < count; i++) {
        if (i === 0 && startInput.checked) paragraphs.push(corpus[0]);
        else paragraphs.push(corpus[Math.floor(Math.random() * corpus.length)]);
      }
      const output = htmlInput.checked ? paragraphs.map(p => '<p>' + p + '</p>').join('\n\n') : paragraphs.join('\n\n');
      resultBox(container, output);
    }
    generate();
  };

  // ── XML Formatter ──
  toolBuilders.xmlformat = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input XML' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: '<root><item id="1"><name>Test</name></item></root>', rows: '8' });
    fg.appendChild(textarea);
    container.appendChild(fg);
    const btns = el('div', { className: 'btn-group' });
    btns.appendChild(el('button', { className: 'btn btn-primary btn-sm', textContent: 'Beautify', onClick: beautify }));
    btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Minify', onClick: minify }));
    container.appendChild(btns);
    function tokenize(xml) {
      const tokens = [];
      let i = 0;
      while (i < xml.length) {
        if (xml[i] === '<') {
          if (xml.substring(i, i + 4) === '<!--') {
            const end = xml.indexOf('-->', i); if (end === -1) throw new Error('Unterminated comment');
            tokens.push({ type: 'comment', value: xml.substring(i, end + 3) }); i = end + 3;
          } else if (xml.substring(i, i + 9) === '<![CDATA[') {
            const end = xml.indexOf(']]>', i); if (end === -1) throw new Error('Unterminated CDATA');
            tokens.push({ type: 'cdata', value: xml.substring(i, end + 3) }); i = end + 3;
          } else if (xml.substring(i, i + 9).toUpperCase() === '<!DOCTYPE') {
            const end = xml.indexOf('>', i); tokens.push({ type: 'doctype', value: xml.substring(i, end + 1) }); i = end + 1;
          } else if (xml.substring(i, i + 2) === '<?') {
            const end = xml.indexOf('?>', i); tokens.push({ type: 'declaration', value: xml.substring(i, end + 2) }); i = end + 2;
          } else if (xml[i + 1] === '/') {
            const end = xml.indexOf('>', i); tokens.push({ type: 'close', value: xml.substring(i, end + 1) }); i = end + 1;
          } else {
            let end = i + 1, inQ = false, qc = '';
            while (end < xml.length) {
              if (inQ) { if (xml[end] === qc) inQ = false; }
              else { if (xml[end] === '"' || xml[end] === "'") { inQ = true; qc = xml[end]; } else if (xml[end] === '>') break; }
              end++;
            }
            const tag = xml.substring(i, end + 1);
            tokens.push({ type: tag.charAt(tag.length - 2) === '/' ? 'selfclose' : 'open', value: tag }); i = end + 1;
          }
        } else {
          const next = xml.indexOf('<', i);
          const text = next === -1 ? xml.substring(i) : xml.substring(i, next);
          if (text.trim()) tokens.push({ type: 'text', value: text });
          i = next === -1 ? xml.length : next;
        }
      }
      return tokens;
    }
    function beautify() {
      const xml = textarea.value.trim(); if (!xml) return;
      try {
        const tokens = tokenize(xml); let output = '', indent = 0; const tab = '  ';
        for (let i = 0; i < tokens.length; i++) {
          const tok = tokens[i];
          if (tok.type === 'declaration' || tok.type === 'comment' || tok.type === 'cdata' || tok.type === 'doctype') {
            output += tab.repeat(indent) + tok.value + '\n';
          } else if (tok.type === 'open') {
            const n1 = tokens[i + 1], n2 = tokens[i + 2];
            if (n1 && n1.type === 'text' && n2 && n2.type === 'close') {
              output += tab.repeat(indent) + tok.value + n1.value.trim() + n2.value + '\n'; i += 2;
            } else { output += tab.repeat(indent) + tok.value + '\n'; indent++; }
          } else if (tok.type === 'close') { indent = Math.max(0, indent - 1); output += tab.repeat(indent) + tok.value + '\n'; }
          else if (tok.type === 'selfclose') { output += tab.repeat(indent) + tok.value + '\n'; }
          else if (tok.type === 'text') { const t = tok.value.trim(); if (t) output += tab.repeat(indent) + t + '\n'; }
        }
        textarea.value = output.trimEnd(); resultBox(container, output.trimEnd());
      } catch (e) { resultBox(container, 'Error: ' + e.message); }
    }
    function minify() {
      let xml = textarea.value.trim(); if (!xml) return;
      xml = xml.replace(/>\s+</g, '><').replace(/\s+/g, ' ').trim();
      textarea.value = xml; resultBox(container, xml);
    }
  };

  // ── JSONPath Tester ──
  toolBuilders.jsonpath = (container) => {
    const fg1 = el('div', { className: 'form-group' });
    fg1.appendChild(el('label', { textContent: 'JSON Data' }));
    const jsonArea = el('textarea', { className: 'glass-textarea', placeholder: '{\n  "store": {\n    "books": [\n      { "title": "Moby Dick", "price": 8.99 },\n      { "title": "1984", "price": 6.99 }\n    ]\n  }\n}', rows: '8' });
    fg1.appendChild(jsonArea); container.appendChild(fg1);
    const fg2 = el('div', { className: 'form-group' });
    fg2.appendChild(el('label', { textContent: 'JSONPath Expression' }));
    const pathInput = el('input', { className: 'glass-input', placeholder: '$.store.books[0].title', value: '$.store.books[*].title' });
    fg2.appendChild(pathInput); container.appendChild(fg2);
    const refGroup = el('div', { className: 'btn-group', style: 'flex-wrap:wrap;margin-bottom:12px' });
    [['$.key','$.store'],['$.a.b','$.store.books'],['[0]','$.store.books[0]'],['[*]','$.store.books[*]'],['..key','$..title'],['..price','$..price']].forEach(([label, expr]) => {
      refGroup.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: label, onClick: () => { pathInput.value = expr; } }));
    });
    container.appendChild(refGroup);
    container.appendChild(el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Test', onClick: test }));
    function deepScan(obj, key, results) {
      if (obj === null || typeof obj !== 'object') return;
      if (!Array.isArray(obj) && key in obj) results.push(obj[key]);
      if (Array.isArray(obj)) { for (const item of obj) deepScan(item, key, results); }
      else { for (const k of Object.keys(obj)) { if (typeof obj[k] === 'object' && obj[k] !== null) deepScan(obj[k], key, results); } }
    }
    function evaluateJSONPath(data, path) {
      const tokens = []; let i = 0; const s = path.trim();
      if (s[0] !== '$') throw new Error('JSONPath must start with $');
      i = 1;
      while (i < s.length) {
        if (s[i] === '.' && s[i + 1] === '.') { i += 2; let k = ''; while (i < s.length && s[i] !== '.' && s[i] !== '[') { k += s[i]; i++; } if (k) tokens.push({ type: 'deepscan', key: k }); }
        else if (s[i] === '.') { i++; let k = ''; while (i < s.length && s[i] !== '.' && s[i] !== '[') { k += s[i]; i++; } if (k) tokens.push({ type: 'child', key: k }); }
        else if (s[i] === '[') { i++; let expr = ''; while (i < s.length && s[i] !== ']') { expr += s[i]; i++; } i++; expr = expr.trim();
          if (expr === '*') tokens.push({ type: 'wildcard' });
          else if (/^-?\d+$/.test(expr)) tokens.push({ type: 'index', index: parseInt(expr, 10) });
          else if (/^['"](.+)['"]$/.test(expr)) tokens.push({ type: 'child', key: expr.slice(1, -1) });
          else tokens.push({ type: 'child', key: expr });
        } else i++;
      }
      let current = [data];
      for (const token of tokens) {
        const next = [];
        if (token.type === 'child') { for (const item of current) { if (item !== null && typeof item === 'object' && token.key in item) next.push(item[token.key]); } }
        else if (token.type === 'index') { for (const item of current) { if (Array.isArray(item)) { const idx = token.index < 0 ? item.length + token.index : token.index; if (idx >= 0 && idx < item.length) next.push(item[idx]); } } }
        else if (token.type === 'wildcard') { for (const item of current) { if (Array.isArray(item)) item.forEach(e => next.push(e)); else if (item !== null && typeof item === 'object') Object.keys(item).forEach(k => next.push(item[k])); } }
        else if (token.type === 'deepscan') { for (const item of current) deepScan(item, token.key, next); }
        current = next;
      }
      return current;
    }
    function test() {
      try {
        const data = JSON.parse(jsonArea.value); const path = pathInput.value.trim();
        if (!path) { resultBox(container, 'Enter a JSONPath expression'); return; }
        const results = evaluateJSONPath(data, path);
        if (results.length === 0) resultBox(container, 'No matches found');
        else if (results.length === 1) resultBox(container, 'Match:\n\n' + JSON.stringify(results[0], null, 2));
        else resultBox(container, results.length + ' matches:\n\n' + JSON.stringify(results, null, 2));
      } catch (e) { resultBox(container, 'Error: ' + e.message); }
    }
  };

  // ── HTML Live Preview ──
  toolBuilders.htmlpreview = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'HTML / CSS / JS' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: '<h1>Hello World</h1>\n<style>h1{color:#007AFF;font-family:sans-serif}</style>', rows: '10' });
    textarea.value = '<h1 style="font-family:sans-serif;color:#007AFF;">Hello World</h1>\n<p style="font-family:sans-serif;color:#666;">Start typing HTML to see a live preview.</p>';
    fg.appendChild(textarea); container.appendChild(fg);
    container.appendChild(el('label', { textContent: 'Live Preview', style: 'margin-bottom:8px' }));
    const iframe = el('iframe', { className: 'glass-textarea', style: 'width:100%;height:300px;border:none;border-radius:14px;background:#fff;', sandbox: 'allow-scripts' });
    container.appendChild(iframe);
    let timer = null;
    function update() { iframe.setAttribute('srcdoc', textarea.value); }
    textarea.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(update, 500); });
    update();
  };

  // ── JSON Diff ──
  toolBuilders.jsondiff = (container) => {
    const row = el('div', { className: 'form-row', style: 'display:grid;grid-template-columns:1fr 1fr;gap:12px' });
    const fg1 = el('div', { className: 'form-group' });
    fg1.appendChild(el('label', { textContent: 'Original JSON' }));
    const ta1 = el('textarea', { className: 'glass-textarea', placeholder: '{"a":1,"b":2}', rows: '8' });
    fg1.appendChild(ta1); row.appendChild(fg1);
    const fg2 = el('div', { className: 'form-group' });
    fg2.appendChild(el('label', { textContent: 'Modified JSON' }));
    const ta2 = el('textarea', { className: 'glass-textarea', placeholder: '{"a":1,"c":3}', rows: '8' });
    fg2.appendChild(ta2); row.appendChild(fg2);
    container.appendChild(row);
    container.appendChild(el('button', { className: 'btn btn-primary', style: 'width:100%;margin-top:8px', textContent: 'Compare', onClick: compare }));
    const diffOutput = el('div', { style: 'margin-top:16px' });
    container.appendChild(diffOutput);
    function deepDiff(a, b, path) {
      const diffs = [];
      if (a === b) return diffs;
      if (a === null || b === null || typeof a !== typeof b) { diffs.push({ type: 'changed', path: path || '(root)', from: a, to: b }); return diffs; }
      if (Array.isArray(a) && Array.isArray(b)) {
        const len = Math.max(a.length, b.length);
        for (let i = 0; i < len; i++) {
          const p = path ? path + '[' + i + ']' : '[' + i + ']';
          if (i >= a.length) diffs.push({ type: 'added', path: p, value: b[i] });
          else if (i >= b.length) diffs.push({ type: 'removed', path: p, value: a[i] });
          else diffs.push(...deepDiff(a[i], b[i], p));
        }
        return diffs;
      }
      if (typeof a === 'object') {
        const allKeys = new Set([...Object.keys(a), ...Object.keys(b)]);
        for (const key of allKeys) {
          const p = path ? path + '.' + key : key;
          if (!(key in a)) diffs.push({ type: 'added', path: p, value: b[key] });
          else if (!(key in b)) diffs.push({ type: 'removed', path: p, value: a[key] });
          else diffs.push(...deepDiff(a[key], b[key], p));
        }
        return diffs;
      }
      if (a !== b) diffs.push({ type: 'changed', path: path || '(root)', from: a, to: b });
      return diffs;
    }
    function fmt(v) { return v === undefined ? 'undefined' : JSON.stringify(v); }
    function compare() {
      diffOutput.innerHTML = '';
      let objA, objB;
      try { objA = JSON.parse(ta1.value); } catch (e) { diffOutput.appendChild(el('div', { className: 'result-box', textContent: 'Error in Original: ' + e.message })); return; }
      try { objB = JSON.parse(ta2.value); } catch (e) { diffOutput.appendChild(el('div', { className: 'result-box', textContent: 'Error in Modified: ' + e.message })); return; }
      const diffs = deepDiff(objA, objB, '');
      if (diffs.length === 0) { diffOutput.appendChild(el('div', { className: 'result-box', textContent: 'No differences — JSON objects are identical.' })); return; }
      const added = diffs.filter(d => d.type === 'added').length;
      const removed = diffs.filter(d => d.type === 'removed').length;
      const changed = diffs.filter(d => d.type === 'changed').length;
      diffOutput.appendChild(el('div', { style: 'padding:10px 14px;border-radius:10px;background:rgba(0,0,0,0.15);margin-bottom:12px;font-size:13px', textContent: added + ' added, ' + removed + ' removed, ' + changed + ' changed' }));
      const diffList = el('div', { style: 'font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12.5px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,0.1)' });
      diffs.forEach(d => {
        const colors = { added: 'rgba(52,199,89,0.15);color:#22863a', removed: 'rgba(255,69,58,0.15);color:#cb2431', changed: 'rgba(255,214,10,0.15);color:#b08800' };
        const prefix = { added: '+ ', removed: '- ', changed: '~ ' };
        const text = d.type === 'changed' ? prefix[d.type] + d.path + ': ' + fmt(d.from) + ' → ' + fmt(d.to) : prefix[d.type] + d.path + ': ' + fmt(d.value || d.from);
        diffList.appendChild(el('div', { style: 'padding:6px 12px;background:' + colors[d.type] + ';border-bottom:1px solid rgba(0,0,0,0.05)', textContent: text }));
      });
      diffOutput.appendChild(diffList);
    }
  };

  // ── Emoji Picker ──
  toolBuilders.emoji = (container) => {
    const emojiData = {
      'Smileys': '\u{1F600}\u{1F603}\u{1F604}\u{1F601}\u{1F606}\u{1F605}\u{1F602}\u{1F923}\u{1F60A}\u{1F607}\u{1F642}\u{1F643}\u{1F609}\u{1F60C}\u{1F60D}\u{1F970}\u{1F618}\u{1F60B}\u{1F61C}\u{1F61D}\u{1F911}\u{1F917}\u{1F914}\u{1F910}\u{1F60F}\u{1F612}\u{1F644}\u{1F60E}\u{1F913}\u{1F929}\u{1F971}\u{1F974}\u{1F97A}\u{1F622}\u{1F62D}\u{1F624}\u{1F621}\u{1F620}\u{1F92C}\u{1F608}',
      'Hands': '\u{1F44D}\u{1F44E}\u{1F44A}\u{270A}\u{1F91B}\u{1F91C}\u{1F44F}\u{1F64C}\u{1F450}\u{1F91D}\u{1F64F}\u{270D}\u{1F4AA}\u{1F446}\u{1F447}\u{261D}\u{1F448}\u{1F449}\u{1F91E}\u{1F91F}\u{1F918}\u{1F44B}\u{270C}\u{1F596}',
      'Animals': '\u{1F436}\u{1F431}\u{1F42D}\u{1F439}\u{1F430}\u{1F98A}\u{1F43B}\u{1F43C}\u{1F428}\u{1F42F}\u{1F981}\u{1F42E}\u{1F437}\u{1F438}\u{1F435}\u{1F412}\u{1F414}\u{1F427}\u{1F426}\u{1F985}\u{1F422}\u{1F40D}\u{1F433}\u{1F420}\u{1F419}',
      'Food': '\u{1F34E}\u{1F34F}\u{1F34A}\u{1F34B}\u{1F34C}\u{1F349}\u{1F347}\u{1F353}\u{1F352}\u{1F351}\u{1F34D}\u{1F951}\u{1F35E}\u{1F354}\u{1F355}\u{1F32E}\u{1F32F}\u{1F37F}\u{1F370}\u{2615}\u{1F37A}\u{1F377}',
      'Travel': '\u{1F697}\u{1F695}\u{1F68C}\u{1F691}\u{1F680}\u{2708}\u{1F6E9}\u{1F681}\u{1F682}\u{1F6B2}\u{26F5}\u{1F3D6}\u{1F3D4}\u{1F5FC}\u{1F5FD}\u{1F30D}\u{1F30E}\u{1F3E0}\u{1F3E2}\u{1F3EB}',
      'Objects': '\u{2328}\u{1F4BB}\u{1F5A5}\u{1F4F1}\u{1F4F7}\u{1F4FA}\u{23F0}\u{1F4A1}\u{1F50B}\u{1F4E6}\u{1F4B0}\u{1F48E}\u{1F527}\u{1F528}\u{1F4D6}\u{1F4DA}\u{1F4DD}\u{270F}\u{1F4CE}\u{1F4CB}',
      'Symbols': '\u{2764}\u{1F49C}\u{1F49A}\u{1F499}\u{1F49B}\u{1F9E1}\u{1F5A4}\u{2705}\u{274C}\u{2753}\u{2757}\u{1F4AF}\u{1F525}\u{2B50}\u{1F31F}\u{26A1}\u{1F4A5}\u{1F389}\u{1F388}\u{1F3B5}\u{1F3B6}\u{267B}\u{269B}'
    };
    // Convert strings to arrays of emojis
    const emojiArrays = {};
    for (const [cat, str] of Object.entries(emojiData)) {
      emojiArrays[cat] = [...str];
    }
    const searchFg = el('div', { className: 'form-group' });
    searchFg.appendChild(el('label', { textContent: 'Search or browse emojis — click to copy' }));
    const searchInput = el('input', { className: 'glass-input', placeholder: 'Type to filter...' });
    searchFg.appendChild(searchInput); container.appendChild(searchFg);
    const gridWrap = el('div'); container.appendChild(gridWrap);
    function renderGrid(filter) {
      gridWrap.innerHTML = '';
      const q = (filter || '').toLowerCase().trim();
      Object.entries(emojiArrays).forEach(([category, emojis]) => {
        const filtered = q ? emojis.filter(() => category.toLowerCase().includes(q)) : emojis;
        if (filtered.length === 0) return;
        gridWrap.appendChild(el('label', { textContent: category, style: 'display:block;margin:14px 0 6px;font-weight:600;font-size:13px;opacity:0.5' }));
        const grid = el('div', { style: 'display:grid;grid-template-columns:repeat(auto-fill,minmax(44px,1fr));gap:4px' });
        filtered.forEach(emoji => {
          const btn = el('button', { style: 'font-size:24px;padding:8px;border:none;background:rgba(0,0,0,0.04);border-radius:10px;cursor:pointer;transition:background 0.15s,transform 0.15s;line-height:1;text-align:center', textContent: emoji, onClick: () => {
            navigator.clipboard.writeText(emoji);
            btn.style.transform = 'scale(1.3)'; setTimeout(() => { btn.style.transform = 'scale(1)'; }, 200);
          }});
          btn.addEventListener('mouseenter', () => { btn.style.background = 'rgba(0,0,0,0.1)'; });
          btn.addEventListener('mouseleave', () => { btn.style.background = 'rgba(0,0,0,0.04)'; });
          grid.appendChild(btn);
        });
        gridWrap.appendChild(grid);
      });
    }
    searchInput.addEventListener('input', () => renderGrid(searchInput.value));
    renderGrid('');
  };

  // ── Flexbox Playground ──
  toolBuilders.flexbox = (container) => {
    const dirFg = el('div', { className: 'form-group' }); dirFg.appendChild(el('label', { textContent: 'flex-direction' }));
    const dirPicker = glassPicker('fb-dir', ['row', 'column', 'row-reverse', 'column-reverse'], 'row', up); dirFg.appendChild(dirPicker.wrapper); container.appendChild(dirFg);
    const jcFg = el('div', { className: 'form-group' }); jcFg.appendChild(el('label', { textContent: 'justify-content' }));
    const jcPicker = glassPicker('fb-jc', ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'], 'flex-start', up); jcFg.appendChild(jcPicker.wrapper); container.appendChild(jcFg);
    const aiFg = el('div', { className: 'form-group' }); aiFg.appendChild(el('label', { textContent: 'align-items' }));
    const aiPicker = glassPicker('fb-ai', ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'], 'stretch', up); aiFg.appendChild(aiPicker.wrapper); container.appendChild(aiFg);
    const wrapFg = el('div', { className: 'form-group' }); wrapFg.appendChild(el('label', { textContent: 'flex-wrap' }));
    const wrapPicker = glassPicker('fb-wrap', ['nowrap', 'wrap', 'wrap-reverse'], 'nowrap', up); wrapFg.appendChild(wrapPicker.wrapper); container.appendChild(wrapFg);
    const { group: gapGroup, input: gapSlider, label: gapLabel } = lgSlider('fb-gap', 0, 40, 8, 'fb-gap-label', () => { gapLabel.textContent = 'gap: ' + gapSlider.value + 'px'; up(); });
    gapLabel.textContent = 'gap: 8px'; container.appendChild(gapGroup);
    const { group: itemsGroup, input: itemsSlider, label: itemsLabel } = lgSlider('fb-items', 1, 12, 5, 'fb-items-label', () => { itemsLabel.textContent = 'Items: ' + itemsSlider.value; up(); });
    itemsLabel.textContent = 'Items: 5'; container.appendChild(itemsGroup);
    container.appendChild(el('label', { textContent: 'Preview', style: 'margin-top:16px;display:block' }));
    const previewBox = el('div', { style: 'min-height:200px;border-radius:14px;border:1px solid rgba(0,0,0,0.08);background:rgba(0,0,0,0.03);padding:12px;margin:8px 0 16px;overflow:auto' });
    container.appendChild(previewBox);
    const itemColors = ['#007AFF','#34C759','#FF9500','#AF52DE','#FF2D55','#5AC8FA','#FFCC00','#FF3B30','#64D2FF','#30D158','#BF5AF2','#FF6482'];
    const cssBox = el('div', { style: 'font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12.5px;padding:14px 16px;border-radius:12px;background:rgba(0,0,0,0.06);border:1px solid rgba(0,0,0,0.08);white-space:pre;overflow-x:auto;margin:8px 0 12px;line-height:1.5' });
    container.appendChild(el('label', { textContent: 'Generated CSS', style: 'display:block' }));
    container.appendChild(cssBox);
    const copyBtn = el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Copy CSS', onClick: () => { navigator.clipboard.writeText(cssBox.textContent); copyBtn.textContent = 'Copied!'; setTimeout(() => copyBtn.textContent = 'Copy CSS', 1500); } });
    container.appendChild(copyBtn);
    function up() {
      const dir = dirPicker.value, jc = jcPicker.value, ai = aiPicker.value, wrap = wrapPicker.value, gap = gapSlider.value, count = itemsSlider.value;
      previewBox.style.display = 'flex'; previewBox.style.flexDirection = dir; previewBox.style.justifyContent = jc; previewBox.style.alignItems = ai; previewBox.style.flexWrap = wrap; previewBox.style.gap = gap + 'px';
      previewBox.innerHTML = '';
      for (let i = 0; i < count; i++) {
        previewBox.appendChild(el('div', { style: 'min-width:48px;min-height:48px;padding:10px 14px;border-radius:10px;font-size:13px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;background:' + itemColors[i % itemColors.length], textContent: String(i + 1) }));
      }
      cssBox.textContent = '.container {\n  display: flex;\n  flex-direction: ' + dir + ';\n  justify-content: ' + jc + ';\n  align-items: ' + ai + ';\n  flex-wrap: ' + wrap + ';\n  gap: ' + gap + 'px;\n}';
    }
    up();
  };

  // ── CSS Grid Generator ──
  toolBuilders.cssgrid = (container) => {
    const { group: colGroup, input: colSlider, label: colLabel } = lgSlider('cg-cols', 1, 12, 3, 'cg-cols-label', () => { colLabel.textContent = 'Columns: ' + colSlider.value; up(); });
    colLabel.textContent = 'Columns: 3'; container.appendChild(colGroup);
    const { group: rowGroup, input: rowSlider, label: rowLabel } = lgSlider('cg-rows', 1, 6, 2, 'cg-rows-label', () => { rowLabel.textContent = 'Rows: ' + rowSlider.value; up(); });
    rowLabel.textContent = 'Rows: 2'; container.appendChild(rowGroup);
    const { group: cgGroup, input: cgSlider, label: cgLabel } = lgSlider('cg-colg', 0, 40, 10, 'cg-colg-label', () => { cgLabel.textContent = 'Column Gap: ' + cgSlider.value + 'px'; up(); });
    cgLabel.textContent = 'Column Gap: 10px'; container.appendChild(cgGroup);
    const { group: rgGroup, input: rgSlider, label: rgLabel } = lgSlider('cg-rowg', 0, 40, 10, 'cg-rowg-label', () => { rgLabel.textContent = 'Row Gap: ' + rgSlider.value + 'px'; up(); });
    rgLabel.textContent = 'Row Gap: 10px'; container.appendChild(rgGroup);
    const widthFg = el('div', { className: 'form-group' }); widthFg.appendChild(el('label', { textContent: 'Column Widths' }));
    const widthPicker = glassPicker('cg-wmode', ['Equal (1fr)', 'Auto', 'Custom'], 'Equal (1fr)', (val) => { customFrFg.style.display = val === 'Custom' ? 'block' : 'none'; up(); });
    widthFg.appendChild(widthPicker.wrapper); container.appendChild(widthFg);
    const customFrFg = el('div', { className: 'form-group', style: 'display:none' });
    customFrFg.appendChild(el('label', { textContent: 'Custom (e.g. 1fr 2fr 1fr)' }));
    const customFrInput = el('input', { className: 'glass-input', placeholder: '1fr 2fr 1fr', value: '1fr 2fr 1fr' });
    customFrInput.addEventListener('input', up); customFrFg.appendChild(customFrInput); container.appendChild(customFrFg);
    container.appendChild(el('label', { textContent: 'Preview', style: 'margin-top:16px;display:block' }));
    const previewBox = el('div', { style: 'min-height:200px;border-radius:14px;border:1px solid rgba(0,0,0,0.08);background:rgba(0,0,0,0.03);padding:12px;margin:8px 0 16px;overflow:auto' });
    container.appendChild(previewBox);
    const cellColors = ['rgba(0,122,255,0.25)','rgba(52,199,89,0.25)','rgba(255,149,0,0.25)','rgba(175,82,222,0.25)','rgba(255,45,85,0.25)','rgba(90,200,250,0.25)','rgba(255,204,0,0.25)','rgba(255,59,48,0.25)','rgba(100,210,255,0.25)','rgba(48,209,88,0.25)','rgba(191,90,242,0.25)','rgba(255,100,130,0.25)'];
    const cssBox = el('div', { style: 'font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12.5px;padding:14px 16px;border-radius:12px;background:rgba(0,0,0,0.06);border:1px solid rgba(0,0,0,0.08);white-space:pre;overflow-x:auto;margin:8px 0 12px;line-height:1.5' });
    container.appendChild(el('label', { textContent: 'Generated CSS', style: 'display:block' }));
    container.appendChild(cssBox);
    const copyBtn = el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Copy CSS', onClick: () => { navigator.clipboard.writeText(cssBox.textContent); copyBtn.textContent = 'Copied!'; setTimeout(() => copyBtn.textContent = 'Copy CSS', 1500); } });
    container.appendChild(copyBtn);
    function getColTpl() { const m = widthPicker.value, c = colSlider.value; if (m === 'Custom') return customFrInput.value.trim() || 'repeat(' + c + ', 1fr)'; return m === 'Auto' ? 'repeat(' + c + ', auto)' : 'repeat(' + c + ', 1fr)'; }
    function up() {
      const cols = colSlider.value, rows = rowSlider.value, colTemplate = getColTpl();
      previewBox.style.display = 'grid'; previewBox.style.gridTemplateColumns = colTemplate; previewBox.style.columnGap = cgSlider.value + 'px'; previewBox.style.rowGap = rgSlider.value + 'px';
      previewBox.innerHTML = '';
      for (let i = 0; i < cols * rows; i++) {
        previewBox.appendChild(el('div', { style: 'min-height:60px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;opacity:0.7;background:' + cellColors[i % cellColors.length] + ';border:1px solid rgba(0,0,0,0.05)', textContent: String(i + 1) }));
      }
      cssBox.textContent = '.container {\n  display: grid;\n  grid-template-columns: ' + colTemplate + ';\n  column-gap: ' + cgSlider.value + 'px;\n  row-gap: ' + rgSlider.value + 'px;\n}';
    }
    up();
  };

  // ── Color Palette Generator ──
  toolBuilders.palette = (container) => {
    const colorFg = el('div', { className: 'form-group' });
    colorFg.appendChild(el('label', { textContent: 'Base Color' }));
    const colorRow = el('div', { style: 'display:flex;gap:10px;align-items:center' });
    const colorInput = el('input', { type: 'color', className: 'ios-color-picker', value: '#007AFF' });
    const hexInput = el('input', { className: 'glass-input', style: 'flex:1', value: '#007AFF', placeholder: '#007AFF' });
    colorRow.appendChild(colorInput); colorRow.appendChild(hexInput); colorFg.appendChild(colorRow); container.appendChild(colorFg);
    const typeFg = el('div', { className: 'form-group' }); typeFg.appendChild(el('label', { textContent: 'Palette Type' }));
    const typePicker = glassPicker('pal-type', ['Complementary', 'Analogous', 'Triadic', 'Split-Complementary', 'Monochromatic'], 'Complementary', generate);
    typeFg.appendChild(typePicker.wrapper); container.appendChild(typeFg);
    container.appendChild(el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Generate Palette', onClick: generate }));
    const swatchRow = el('div', { style: 'display:flex;gap:8px;margin-top:20px;flex-wrap:wrap' }); container.appendChild(swatchRow);
    function hexToHsl(hex) {
      hex = hex.replace('#', ''); if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
      const r = parseInt(hex.slice(0, 2), 16) / 255, g = parseInt(hex.slice(2, 4), 16) / 255, b = parseInt(hex.slice(4, 6), 16) / 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b); let h, s, l = (max + min) / 2;
      if (max === min) { h = s = 0; } else { const d = max - min; s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) { case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break; case g: h = ((b - r) / d + 2) / 6; break; case b: h = ((r - g) / d + 4) / 6; break; }
      } return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
    }
    function hslToHex(h, s, l) {
      h = ((h % 360) + 360) % 360; s = Math.max(0, Math.min(100, s)) / 100; l = Math.max(0, Math.min(100, l)) / 100;
      let r, g, b; if (s === 0) { r = g = b = l; } else {
        const hue2rgb = (p, q, t) => { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1/6) return p + (q - p) * 6 * t; if (t < 1/2) return q; if (t < 2/3) return p + (q - p) * (2/3 - t) * 6; return p; };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s; const p = 2 * l - q;
        r = hue2rgb(p, q, h / 360 + 1/3); g = hue2rgb(p, q, h / 360); b = hue2rgb(p, q, h / 360 - 1/3);
      } return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v * 255))).toString(16).padStart(2, '0')).join('').toUpperCase();
    }
    function genPalette(hex, type) {
      const { h, s, l } = hexToHsl(hex);
      switch (type) {
        case 'Complementary': return [{h,s,l},{h,s:Math.max(0,s-15),l:Math.min(95,l+20)},{h:(h+180)%360,s,l},{h:(h+180)%360,s:Math.max(0,s-15),l:Math.min(95,l+20)},{h:(h+180)%360,s:Math.min(100,s+10),l:Math.max(10,l-15)}];
        case 'Analogous': return [{h:(h-30+360)%360,s,l},{h:(h-15+360)%360,s,l},{h,s,l},{h:(h+15)%360,s,l},{h:(h+30)%360,s,l}];
        case 'Triadic': return [{h,s,l},{h,s:Math.max(0,s-20),l:Math.min(90,l+15)},{h:(h+120)%360,s,l},{h:(h+240)%360,s,l},{h:(h+240)%360,s:Math.max(0,s-20),l:Math.min(90,l+15)}];
        case 'Split-Complementary': return [{h,s,l},{h,s:Math.max(0,s-15),l:Math.min(90,l+20)},{h:(h+150)%360,s,l},{h:(h+210)%360,s,l},{h:(h+180)%360,s:Math.max(0,s-25),l:Math.min(95,l+30)}];
        case 'Monochromatic': return [{h,s,l:Math.max(10,l-30)},{h,s,l:Math.max(10,l-15)},{h,s,l},{h,s,l:Math.min(95,l+15)},{h,s,l:Math.min(95,l+30)}];
        default: return [{h,s,l},{h,s,l},{h,s,l},{h,s,l},{h,s,l}];
      }
    }
    colorInput.addEventListener('input', () => { hexInput.value = colorInput.value.toUpperCase(); generate(); });
    hexInput.addEventListener('input', () => { const v = hexInput.value.trim(); if (/^#?[0-9a-fA-F]{6}$/.test(v)) { colorInput.value = v.startsWith('#') ? v : '#' + v; generate(); } });
    function generate() {
      const palette = genPalette(colorInput.value, typePicker.value); swatchRow.innerHTML = ''; const hexValues = [];
      palette.forEach(c => {
        const hex = hslToHex(c.h, c.s, c.l); hexValues.push(hex);
        const swatch = el('div', { style: 'flex:1;min-width:60px;text-align:center;cursor:pointer', onClick: () => { navigator.clipboard.writeText(hex); lbl.textContent = 'Copied!'; setTimeout(() => { lbl.textContent = hex; }, 1200); } });
        swatch.appendChild(el('div', { style: 'height:80px;background:' + hex + ';border-radius:12px;border:1px solid rgba(0,0,0,0.1);margin-bottom:6px' }));
        const lbl = el('div', { style: 'font-size:11px;font-family:SF Mono,monospace;opacity:0.8', textContent: hex });
        swatch.appendChild(lbl); swatchRow.appendChild(swatch);
      });
      resultBox(container, hexValues.join('\n'));
    }
    generate();
  };

  // ── SVG Optimizer ──
  toolBuilders.svgoptimize = (container) => {
    const fg = el('div', { className: 'form-group' }); fg.appendChild(el('label', { textContent: 'SVG Code' }));
    const textarea = el('textarea', { className: 'glass-textarea', placeholder: '<svg viewBox="0 0 24 24">...</svg>', rows: '10' });
    fg.appendChild(textarea); container.appendChild(fg);
    const btns = el('div', { className: 'btn-group' });
    btns.appendChild(el('button', { className: 'btn btn-primary btn-sm', textContent: 'Optimize', onClick: optimize }));
    btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Clear', onClick: () => { textarea.value = ''; statsDiv.innerHTML = ''; previewDiv.style.display = 'none'; const b = container.querySelector('.result-box'); if (b) b.remove(); } }));
    container.appendChild(btns);
    const statsDiv = el('div', { style: 'margin-top:12px' }); container.appendChild(statsDiv);
    container.appendChild(el('label', { textContent: 'Preview', style: 'margin-top:16px;display:none', id: 'svg-prev-label' }));
    const previewDiv = el('div', { style: 'display:none;padding:20px;text-align:center;margin:8px 0 16px;background:rgba(0,0,0,0.03);border-radius:12px;border:1px solid rgba(0,0,0,0.08)' });
    container.appendChild(previewDiv);
    function optimize() {
      let svg = textarea.value.trim(); if (!svg) return;
      const beforeSize = new Blob([svg]).size;
      svg = svg.replace(/<!--[\s\S]*?-->/g, '');
      svg = svg.replace(/<metadata[\s\S]*?<\/metadata>/gi, '');
      svg = svg.replace(/<title[\s\S]*?<\/title>/gi, '');
      svg = svg.replace(/<desc[\s\S]*?<\/desc>/gi, '');
      svg = svg.replace(/\s+xmlns:(inkscape|sodipodi|sketch|dc|cc|rdf)="[^"]*"/gi, '');
      svg = svg.replace(/\s+(inkscape|sodipodi|sketch):[a-z\-]+="[^"]*"/gi, '');
      let xc = 0; svg = svg.replace(/\s+xmlns="http:\/\/www\.w3\.org\/2000\/svg"/g, (m) => { xc++; return xc === 1 ? m : ''; });
      svg = svg.replace(/\s+[a-zA-Z\-]+=""/g, '');
      svg = svg.replace(/\s+fill-opacity="1"/g, ''); svg = svg.replace(/\s+stroke-opacity="1"/g, ''); svg = svg.replace(/\s+opacity="1"/g, '');
      svg = svg.replace(/#([0-9a-fA-F])\1([0-9a-fA-F])\2([0-9a-fA-F])\3/g, '#$1$2$3');
      svg = svg.replace(/>\s+</g, '><').replace(/\s{2,}/g, ' ').replace(/\s+\/>/g, '/>').trim();
      const afterSize = new Blob([svg]).size; const savings = beforeSize - afterSize; const pct = beforeSize > 0 ? ((savings / beforeSize) * 100).toFixed(1) : 0;
      statsDiv.innerHTML = '';
      [['Before', beforeSize + ' bytes'], ['After', afterSize + ' bytes'], ['Saved', savings + ' bytes (' + pct + '%)']].forEach(([label, value]) => {
        const row = el('div', { className: 'info-row' }); row.appendChild(el('span', { className: 'info-label', textContent: label })); row.appendChild(el('span', { className: 'info-value', textContent: value })); statsDiv.appendChild(row);
      });
      previewDiv.style.display = 'block'; previewDiv.innerHTML = '';
      const wrap = el('div', { style: 'max-width:200px;max-height:200px;margin:0 auto' }); wrap.innerHTML = svg;
      const svgEl = wrap.querySelector('svg'); if (svgEl) { svgEl.style.maxWidth = '100%'; svgEl.style.maxHeight = '200px'; svgEl.style.width = '100%'; svgEl.style.height = 'auto'; }
      previewDiv.appendChild(wrap);
      resultBox(container, svg);
    }
  };

  // ── Nginx Config Generator ──
  toolBuilders.nginx = (container) => {
    const domainFg = el('div', { className: 'form-group' }); domainFg.appendChild(el('label', { textContent: 'Domain Name' }));
    const domainInput = el('input', { className: 'glass-input', placeholder: 'example.com', value: 'example.com' });
    domainFg.appendChild(domainInput); container.appendChild(domainFg);
    const presetFg = el('div', { className: 'form-group' }); presetFg.appendChild(el('label', { textContent: 'Template' }));
    const presetPicker = glassPicker('nginx-preset', ['Static Site', 'Reverse Proxy', 'PHP-FPM', 'WordPress', 'Node.js App', 'Redirect HTTP→HTTPS'], 'Static Site', onPresetChange);
    presetFg.appendChild(presetPicker.wrapper); container.appendChild(presetFg);
    const portFg = el('div', { className: 'form-group', style: 'display:none' }); portFg.appendChild(el('label', { textContent: 'Backend Port' }));
    const portInput = el('input', { className: 'glass-input', type: 'number', placeholder: '3000', value: '3000' }); portFg.appendChild(portInput); container.appendChild(portFg);
    const phpFg = el('div', { className: 'form-group', style: 'display:none' }); phpFg.appendChild(el('label', { textContent: 'PHP-FPM Socket Path' }));
    const phpInput = el('input', { className: 'glass-input', placeholder: '/run/php/php8.2-fpm.sock', value: '/run/php/php8.2-fpm.sock' }); phpFg.appendChild(phpInput); container.appendChild(phpFg);
    const { row: sslRow, input: sslInput } = iosToggle('nginx-ssl', 'Enable SSL (HTTPS)', true); container.appendChild(sslRow);
    const { row: gzipRow, input: gzipInput } = iosToggle('nginx-gzip', 'Enable Gzip Compression', true); container.appendChild(gzipRow);
    container.appendChild(el('button', { className: 'btn btn-primary', style: 'width:100%;margin-top:12px', textContent: 'Generate Config', onClick: generate }));
    function onPresetChange(val) { portFg.style.display = (val === 'Reverse Proxy' || val === 'Node.js App') ? '' : 'none'; phpFg.style.display = (val === 'PHP-FPM' || val === 'WordPress') ? '' : 'none'; }
    function generate() {
      const d = domainInput.value.trim() || 'example.com', preset = presetPicker.value, port = portInput.value.trim() || '3000', sock = phpInput.value.trim() || '/run/php/php8.2-fpm.sock', ssl = sslInput.checked, gzip = gzipInput.checked;
      let c = '';
      if (ssl && preset !== 'Redirect HTTP→HTTPS') { c += 'server {\n    listen 80;\n    listen [::]:80;\n    server_name ' + d + ' www.' + d + ';\n    return 301 https://$host$request_uri;\n}\n\n'; }
      if (preset === 'Redirect HTTP→HTTPS') { c += 'server {\n    listen 80;\n    listen [::]:80;\n    server_name ' + d + ' www.' + d + ';\n    return 301 https://$host$request_uri;\n}\n'; resultBox(container, c); return; }
      c += 'server {\n';
      c += ssl ? '    listen 443 ssl http2;\n    listen [::]:443 ssl http2;\n' : '    listen 80;\n    listen [::]:80;\n';
      c += '    server_name ' + d + ' www.' + d + ';\n';
      if (ssl) c += '\n    ssl_certificate /etc/letsencrypt/live/' + d + '/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/' + d + '/privkey.pem;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers HIGH:!aNULL:!MD5;\n';
      if (gzip) c += '\n    gzip on;\n    gzip_vary on;\n    gzip_proxied any;\n    gzip_comp_level 6;\n    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript image/svg+xml;\n';
      c += '\n';
      if (preset === 'Static Site') { c += '    root /var/www/' + d + '/html;\n    index index.html index.htm;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n\n    location ~* \\.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2)$ {\n        expires 30d;\n        add_header Cache-Control "public, immutable";\n    }\n'; }
      else if (preset === 'Reverse Proxy' || preset === 'Node.js App') { c += '    location / {\n        proxy_pass http://127.0.0.1:' + port + ';\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n'; }
      else if (preset === 'PHP-FPM' || preset === 'WordPress') { c += '    root /var/www/' + d + '/html;\n    index index.php index.html;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_pass unix:' + sock + ';\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        include fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n'; }
      c += '\n    add_header X-Frame-Options "SAMEORIGIN" always;\n    add_header X-Content-Type-Options "nosniff" always;\n\n    access_log /var/log/nginx/' + d + '.access.log;\n    error_log /var/log/nginx/' + d + '.error.log;\n}\n';
      resultBox(container, c);
    }
    generate();
  };

  // ── Open Graph Preview ──
  toolBuilders.ogpreview = (container) => {
    const fields = [
      { id: 'og-title', label: 'Title', placeholder: 'My Awesome Page' },
      { id: 'og-desc', label: 'Description', placeholder: 'A brief description of the page content...' },
      { id: 'og-image', label: 'Image URL', placeholder: 'https://example.com/image.jpg' },
      { id: 'og-url', label: 'URL', placeholder: 'https://example.com/page' },
      { id: 'og-sitename', label: 'Site Name', placeholder: 'My Website' },
    ];
    const inputs = {};
    fields.forEach(f => {
      const fg = el('div', { className: 'form-group' }); fg.appendChild(el('label', { textContent: f.label }));
      const inp = el('input', { className: 'glass-input', placeholder: f.placeholder, id: f.id });
      inp.addEventListener('input', updatePreview); fg.appendChild(inp); container.appendChild(fg); inputs[f.id] = inp;
    });
    const typeFg = el('div', { className: 'form-group' }); typeFg.appendChild(el('label', { textContent: 'Type' }));
    const typePicker = glassPicker('og-type', ['website', 'article', 'product'], 'website', updatePreview);
    typeFg.appendChild(typePicker.wrapper); container.appendChild(typeFg);
    container.appendChild(el('label', { textContent: 'Social Media Preview', style: 'margin-top:16px;display:block' }));
    const card = el('div', { style: 'border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,0.1);background:rgba(0,0,0,0.03);margin:8px 0 20px' });
    const cardImage = el('div', { style: 'width:100%;height:160px;background:#e8e8e8;display:flex;align-items:center;justify-content:center;overflow:hidden' });
    const cardImg = el('img', { style: 'width:100%;height:100%;object-fit:cover;display:none' });
    const cardImgPlaceholder = el('div', { style: 'opacity:0.4;font-size:13px', textContent: 'No image specified' });
    cardImage.appendChild(cardImg); cardImage.appendChild(cardImgPlaceholder); card.appendChild(cardImage);
    const cardBody = el('div', { style: 'padding:12px 14px' });
    const cardDomain = el('div', { style: 'font-size:11px;text-transform:uppercase;letter-spacing:0.5px;opacity:0.5;margin-bottom:4px', textContent: 'EXAMPLE.COM' });
    const cardTitle = el('div', { style: 'font-size:15px;font-weight:600;line-height:1.3;margin-bottom:4px', textContent: 'Page Title' });
    const cardDesc = el('div', { style: 'font-size:13px;opacity:0.6;line-height:1.4', textContent: 'Page description...' });
    cardBody.appendChild(cardDomain); cardBody.appendChild(cardTitle); cardBody.appendChild(cardDesc); card.appendChild(cardBody); container.appendChild(card);
    container.appendChild(el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Generate Meta Tags', onClick: generateTags }));
    function updatePreview() {
      cardTitle.textContent = inputs['og-title'].value || 'Page Title';
      cardDesc.textContent = inputs['og-desc'].value || 'Page description...';
      const url = inputs['og-url'].value.trim();
      if (url) { try { cardDomain.textContent = new URL(url.startsWith('http') ? url : 'https://' + url).hostname.toUpperCase(); } catch (e) { cardDomain.textContent = url.toUpperCase(); } } else cardDomain.textContent = 'EXAMPLE.COM';
      const img = inputs['og-image'].value.trim();
      if (img) { cardImg.src = img; cardImg.style.display = 'block'; cardImgPlaceholder.style.display = 'none'; cardImg.onerror = () => { cardImg.style.display = 'none'; cardImgPlaceholder.style.display = ''; cardImgPlaceholder.textContent = 'Image failed to load'; }; }
      else { cardImg.style.display = 'none'; cardImgPlaceholder.style.display = ''; cardImgPlaceholder.textContent = 'No image specified'; }
    }
    function generateTags() {
      const t = inputs['og-title'].value || 'Page Title', d = inputs['og-desc'].value || 'Page description', img = inputs['og-image'].value.trim(), u = inputs['og-url'].value.trim() || 'https://example.com', sn = inputs['og-sitename'].value.trim();
      let tags = '<!-- Open Graph -->\n<meta property="og:type" content="' + typePicker.value + '">\n<meta property="og:title" content="' + t + '">\n<meta property="og:description" content="' + d + '">\n<meta property="og:url" content="' + u + '">';
      if (img) tags += '\n<meta property="og:image" content="' + img + '">';
      if (sn) tags += '\n<meta property="og:site_name" content="' + sn + '">';
      tags += '\n\n<!-- Twitter Card -->\n<meta name="twitter:card" content="' + (img ? 'summary_large_image' : 'summary') + '">\n<meta name="twitter:title" content="' + t + '">\n<meta name="twitter:description" content="' + d + '">';
      if (img) tags += '\n<meta name="twitter:image" content="' + img + '">';
      resultBox(container, tags);
    }
    updatePreview();
  };

  // ── Markdown Table Generator ──
  toolBuilders.mdtable = (container) => {
    const { group: colGroup, input: colSlider, label: colLabel } = lgSlider('mt-cols', 2, 10, 3, 'mt-cols-label', () => { colLabel.textContent = 'Columns: ' + colSlider.value; rebuildTable(); });
    colLabel.textContent = 'Columns: 3'; container.appendChild(colGroup);
    const { group: rowGroup, input: rowSlider, label: rowLabel } = lgSlider('mt-rows', 2, 20, 3, 'mt-rows-label', () => { rowLabel.textContent = 'Rows: ' + rowSlider.value; rebuildTable(); });
    rowLabel.textContent = 'Rows: 3'; container.appendChild(rowGroup);
    let alignments = {};
    const alignWrap = el('div', { style: 'margin-bottom:16px' }); container.appendChild(alignWrap);
    const tableWrap = el('div', { style: 'overflow-x:auto;margin-bottom:16px' }); container.appendChild(tableWrap);
    let tableEl = null;
    container.appendChild(el('label', { textContent: 'Markdown Output', style: 'display:block;margin-bottom:8px' }));
    const mdOutput = el('div', { className: 'result-box', style: 'font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12.5px;white-space:pre;overflow-x:auto' });
    const mdCopyBtn = el('button', { className: 'copy-btn', textContent: 'Copy', onClick: () => { navigator.clipboard.writeText(generateMarkdown()); mdCopyBtn.textContent = 'Copied!'; setTimeout(() => mdCopyBtn.textContent = 'Copy', 1500); } });
    mdOutput.appendChild(mdCopyBtn); container.appendChild(mdOutput);
    function rebuildTable() {
      const cols = colSlider.value, rows = rowSlider.value;
      const oldVals = {}; if (tableEl) { tableEl.querySelectorAll('td,th').forEach((cell, idx) => { const r = Math.floor(idx / (tableEl.querySelector('tr').children.length)); const c = idx % (tableEl.querySelector('tr').children.length); oldVals[r + '-' + c] = cell.textContent; }); }
      for (let c = 0; c < cols; c++) { if (!alignments[c]) alignments[c] = 'left'; }
      alignWrap.innerHTML = ''; alignWrap.appendChild(el('label', { textContent: 'Column Alignment', style: 'display:block;margin-bottom:8px' }));
      const alignRow = el('div', { style: 'display:flex;gap:6px;flex-wrap:wrap' });
      for (let c = 0; c < cols; c++) {
        const grp = el('div', { style: 'display:flex;gap:2px' });
        ['left', 'center', 'right'].forEach(a => {
          const sym = a === 'left' ? '⇐' : a === 'center' ? '⇔' : '⇒';
          const btn = el('button', { className: 'btn btn-sm ' + (alignments[c] === a ? 'btn-primary' : 'btn-secondary'), textContent: sym, style: 'padding:4px 8px;min-width:0;font-size:11px', onClick: () => { alignments[c] = a; rebuildTable(); } });
          grp.appendChild(btn);
        });
        alignRow.appendChild(grp);
      }
      alignWrap.appendChild(alignRow);
      tableWrap.innerHTML = '';
      tableEl = el('table', { style: 'width:100%;border-collapse:collapse;font-size:13px' });
      const thead = el('thead'); const headTr = el('tr');
      for (let c = 0; c < cols; c++) {
        const th = el('th', { contenteditable: 'true', style: 'border:1px solid rgba(0,0,0,0.12);padding:8px 12px;background:rgba(0,0,0,0.05);outline:none;min-width:60px;text-align:' + (alignments[c] || 'left'), textContent: oldVals['0-' + c] || 'Header ' + (c + 1) });
        th.addEventListener('input', updateMarkdown); headTr.appendChild(th);
      }
      thead.appendChild(headTr); tableEl.appendChild(thead);
      const tbody = el('tbody');
      for (let r = 1; r <= rows; r++) {
        const tr = el('tr');
        for (let c = 0; c < cols; c++) {
          const td = el('td', { contenteditable: 'true', style: 'border:1px solid rgba(0,0,0,0.12);padding:8px 12px;outline:none;min-width:60px;text-align:' + (alignments[c] || 'left'), textContent: oldVals[r + '-' + c] || '' });
          td.addEventListener('input', updateMarkdown); tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
      tableEl.appendChild(tbody); tableWrap.appendChild(tableEl); updateMarkdown();
    }
    function generateMarkdown() {
      const cols = colSlider.value; const data = []; tableEl.querySelectorAll('tr').forEach(tr => { const row = []; tr.querySelectorAll('td,th').forEach(cell => row.push(cell.textContent.trim() || ' ')); data.push(row); });
      const colWidths = []; for (let c = 0; c < cols; c++) { let max = 3; data.forEach(row => { if (row[c] && row[c].length > max) max = row[c].length; }); colWidths.push(max); }
      const headerCells = []; for (let c = 0; c < cols; c++) headerCells.push(' ' + (data[0][c] || ' ').padEnd(colWidths[c]) + ' ');
      const sepCells = []; for (let c = 0; c < cols; c++) { const w = colWidths[c]; const a = alignments[c] || 'left'; sepCells.push(a === 'center' ? ':' + '-'.repeat(w) + ':' : a === 'right' ? '-'.repeat(w + 1) + ':' : ':' + '-'.repeat(w + 1)); }
      const dataLines = []; for (let r = 1; r < data.length; r++) { const cells = []; for (let c = 0; c < cols; c++) cells.push(' ' + (data[r][c] || ' ').padEnd(colWidths[c]) + ' '); dataLines.push('|' + cells.join('|') + '|'); }
      return ['|' + headerCells.join('|') + '|', '|' + sepCells.join('|') + '|', ...dataLines].join('\n');
    }
    function updateMarkdown() { const md = generateMarkdown(); const btn = mdOutput.querySelector('.copy-btn'); mdOutput.textContent = md; if (btn) mdOutput.appendChild(btn); }
    rebuildTable();
  };

  // ── IP/CIDR Calculator ──
  toolBuilders.cidr = (container) => {
    const fg = el('div', { className: 'form-group' }); fg.appendChild(el('label', { textContent: 'IP Address / CIDR' }));
    const input = el('input', { className: 'glass-input', placeholder: '192.168.1.0/24', value: '192.168.1.0/24' });
    fg.appendChild(input); container.appendChild(fg);
    container.appendChild(el('button', { className: 'btn btn-primary', style: 'width:100%', textContent: 'Calculate', onClick: calculate }));
    const presetGroup = el('div', { className: 'btn-group', style: 'margin-top:12px;flex-wrap:wrap' });
    [['Class A /8','10.0.0.0/8'],['Class B /16','172.16.0.0/16'],['Class C /24','192.168.1.0/24'],['/28 Subnet','192.168.1.0/28'],['/30 P2P','10.0.0.0/30'],['Single /32','192.168.1.1/32']].forEach(([label, cidr]) => {
      presetGroup.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: label, onClick: () => { input.value = cidr; calculate(); } }));
    });
    container.appendChild(presetGroup);
    const resultDiv = el('div', { style: 'margin-top:16px' }); container.appendChild(resultDiv);
    function parseIP(str) { const p = str.split('.'); if (p.length !== 4) return null; const n = p.map(Number); return n.some(v => isNaN(v) || v < 0 || v > 255) ? null : n; }
    function ipToInt(p) { return ((p[0] << 24) | (p[1] << 16) | (p[2] << 8) | p[3]) >>> 0; }
    function intToIP(n) { return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.'); }
    function intToBin(n) { return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].map(v => v.toString(2).padStart(8, '0')).join('.'); }
    function getClass(f) { return f < 128 ? 'A' : f < 192 ? 'B' : f < 224 ? 'C' : f < 240 ? 'D (Multicast)' : 'E (Reserved)'; }
    function calculate() {
      resultDiv.innerHTML = ''; const val = input.value.trim();
      let ipStr, prefix; if (val.includes('/')) { const p = val.split('/'); ipStr = p[0]; prefix = parseInt(p[1], 10); } else { ipStr = val; prefix = 32; }
      const ipParts = parseIP(ipStr); if (!ipParts) { resultDiv.appendChild(el('div', { className: 'result-box', textContent: 'Invalid IP address format' })); return; }
      if (isNaN(prefix) || prefix < 0 || prefix > 32) { resultDiv.appendChild(el('div', { className: 'result-box', textContent: 'CIDR prefix must be 0-32' })); return; }
      const ip = ipToInt(ipParts), mask = prefix === 0 ? 0 : (0xFFFFFFFF << (32 - prefix)) >>> 0, wildcard = (~mask) >>> 0;
      const network = (ip & mask) >>> 0, broadcast = (network | wildcard) >>> 0;
      const totalHosts = Math.pow(2, 32 - prefix), usableHosts = prefix <= 30 ? Math.max(0, totalHosts - 2) : (prefix === 31 ? 2 : 1);
      const firstHost = prefix < 31 ? (network + 1) >>> 0 : network, lastHost = prefix < 31 ? (broadcast - 1) >>> 0 : broadcast;
      [['IP Address', ipStr], ['CIDR Notation', '/' + prefix], ['Network Address', intToIP(network)], ['Broadcast Address', prefix < 31 ? intToIP(broadcast) : 'N/A'],
       ['First Usable Host', intToIP(firstHost)], ['Last Usable Host', intToIP(lastHost)], ['Subnet Mask', intToIP(mask)], ['Wildcard Mask', intToIP(wildcard)],
       ['Total Addresses', totalHosts.toLocaleString()], ['Usable Hosts', usableHosts.toLocaleString()], ['IP Class', getClass(ipParts[0])], ['Binary Subnet Mask', intToBin(mask)]
      ].forEach(([label, value]) => { const row = el('div', { className: 'info-row' }); row.appendChild(el('span', { className: 'info-label', textContent: label })); row.appendChild(el('span', { className: 'info-value', textContent: value })); resultDiv.appendChild(row); });
    }
    calculate();
  };

  // ── Code Screenshot ──
  toolBuilders.codescreenshot = (container) => {
    const fg = el('div', { className: 'form-group' }); fg.appendChild(el('label', { textContent: 'Code' }));
    const textarea = el('textarea', { className: 'glass-textarea', rows: '10', placeholder: 'function hello() {\n  console.log("Hello!");\n}', style: 'font-family:SFMono-Regular,Consolas,monospace;font-size:13px' });
    textarea.value = 'function hello() {\n  console.log("Hello, world!");\n}\n\nhello();';
    fg.appendChild(textarea); container.appendChild(fg);
    const langFg = el('div', { className: 'form-group' }); langFg.appendChild(el('label', { textContent: 'Language Label' }));
    const langInput = el('input', { className: 'glass-input', placeholder: 'JavaScript', value: 'JavaScript' }); langFg.appendChild(langInput); container.appendChild(langFg);
    const themeFg = el('div', { className: 'form-group' }); themeFg.appendChild(el('label', { textContent: 'Theme' }));
    const themePicker = glassPicker('cs-theme', ['Dark', 'Light'], 'Dark', updatePreview); themeFg.appendChild(themePicker.wrapper); container.appendChild(themeFg);
    const bgFg = el('div', { className: 'form-group' }); bgFg.appendChild(el('label', { textContent: 'Background Color' }));
    const bgInput = el('input', { type: 'color', className: 'ios-color-picker', value: '#667eea' }); bgInput.addEventListener('input', updatePreview); bgFg.appendChild(bgInput); container.appendChild(bgFg);
    const { group: padGroup, input: padSlider, label: padLabel } = lgSlider('cs-padding', 16, 64, 32, 'cs-pad-label', () => { padLabel.textContent = 'Padding: ' + padSlider.value + 'px'; updatePreview(); });
    padLabel.textContent = 'Padding: 32px'; container.appendChild(padGroup);
    const { group: fsGroup, input: fsSlider, label: fsLabel } = lgSlider('cs-fontsize', 12, 24, 14, 'cs-fs-label', () => { fsLabel.textContent = 'Font Size: ' + fsSlider.value + 'px'; updatePreview(); });
    fsLabel.textContent = 'Font Size: 14px'; container.appendChild(fsGroup);
    const btns = el('div', { className: 'btn-group' });
    btns.appendChild(el('button', { className: 'btn btn-primary btn-sm', textContent: 'Update Preview', onClick: updatePreview }));
    btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: 'Download PNG', onClick: downloadPNG }));
    container.appendChild(btns);
    const previewDiv = el('div', { style: 'text-align:center;margin:16px 0' }); container.appendChild(previewDiv);
    function renderToCanvas() {
      const code = textarea.value || ' ', lines = code.split('\n'), padding = padSlider.value, fontSize = fsSlider.value, bgColor = bgInput.value, langLabel2 = langInput.value;
      const isDark = themePicker.value === 'Dark', windowBg = isDark ? '#1e1e2e' : '#ffffff', textColor = isDark ? '#cdd6f4' : '#1e1e2e', lineNumColor = isDark ? 'rgba(205,214,244,0.3)' : 'rgba(30,30,46,0.3)', titleBarBg = isDark ? '#181825' : '#f0f0f0', langColor = isDark ? 'rgba(205,214,244,0.5)' : 'rgba(30,30,46,0.5)';
      const fontFamily = 'Consolas, "SF Mono", monospace', lineHeight = Math.round(fontSize * 1.6), titleBarH = 36, lineNumW = 40;
      const mc = document.createElement('canvas'); const mctx = mc.getContext('2d'); mctx.font = fontSize + 'px ' + fontFamily;
      let maxLW = 0; lines.forEach(l => { const w = mctx.measureText(l).width; if (w > maxLW) maxLW = w; });
      const codeBlockW = Math.max(300, lineNumW + maxLW + 40), codeBlockH = titleBarH + lines.length * lineHeight + 20;
      const canvasW = codeBlockW + padding * 2, canvasH = codeBlockH + padding * 2;
      const canvas = document.createElement('canvas'); const dpr = window.devicePixelRatio || 2;
      canvas.width = canvasW * dpr; canvas.height = canvasH * dpr; canvas.style.width = '100%'; canvas.style.maxWidth = canvasW + 'px';
      const ctx = canvas.getContext('2d'); ctx.scale(dpr, dpr);
      const gr = ctx.createLinearGradient(0, 0, canvasW, canvasH);
      const r = parseInt(bgColor.slice(1, 3), 16), g = parseInt(bgColor.slice(3, 5), 16), b = parseInt(bgColor.slice(5, 7), 16);
      gr.addColorStop(0, bgColor); gr.addColorStop(1, 'rgb(' + Math.max(0, r - 40) + ',' + Math.max(0, g - 40) + ',' + Math.max(0, b - 40) + ')');
      ctx.fillStyle = gr; ctx.fillRect(0, 0, canvasW, canvasH);
      const wx = padding, wy = padding, ww = codeBlockW, wh = codeBlockH, rad = 12;
      ctx.beginPath(); ctx.moveTo(wx + rad, wy); ctx.lineTo(wx + ww - rad, wy); ctx.quadraticCurveTo(wx + ww, wy, wx + ww, wy + rad); ctx.lineTo(wx + ww, wy + wh - rad); ctx.quadraticCurveTo(wx + ww, wy + wh, wx + ww - rad, wy + wh); ctx.lineTo(wx + rad, wy + wh); ctx.quadraticCurveTo(wx, wy + wh, wx, wy + wh - rad); ctx.lineTo(wx, wy + rad); ctx.quadraticCurveTo(wx, wy, wx + rad, wy); ctx.closePath();
      ctx.shadowColor = 'rgba(0,0,0,0.3)'; ctx.shadowBlur = 20; ctx.shadowOffsetY = 10; ctx.fillStyle = windowBg; ctx.fill(); ctx.shadowColor = 'transparent';
      ctx.save(); ctx.beginPath(); ctx.moveTo(wx + rad, wy); ctx.lineTo(wx + ww - rad, wy); ctx.quadraticCurveTo(wx + ww, wy, wx + ww, wy + rad); ctx.lineTo(wx + ww, wy + titleBarH); ctx.lineTo(wx, wy + titleBarH); ctx.lineTo(wx, wy + rad); ctx.quadraticCurveTo(wx, wy, wx + rad, wy); ctx.closePath(); ctx.fillStyle = titleBarBg; ctx.fill(); ctx.restore();
      const dotY = wy + titleBarH / 2, dotX = wx + 18, dotR = 6, dotG2 = 20;
      ctx.beginPath(); ctx.arc(dotX, dotY, dotR, 0, Math.PI * 2); ctx.fillStyle = '#ff5f57'; ctx.fill();
      ctx.beginPath(); ctx.arc(dotX + dotG2, dotY, dotR, 0, Math.PI * 2); ctx.fillStyle = '#febc2e'; ctx.fill();
      ctx.beginPath(); ctx.arc(dotX + dotG2 * 2, dotY, dotR, 0, Math.PI * 2); ctx.fillStyle = '#28c840'; ctx.fill();
      if (langLabel2) { ctx.font = '12px -apple-system, BlinkMacSystemFont, sans-serif'; ctx.fillStyle = langColor; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillText(langLabel2, wx + ww - 16, dotY); }
      ctx.font = fontSize + 'px ' + fontFamily; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      const codeStartY = wy + titleBarH + 10;
      lines.forEach((line, i) => { const y = codeStartY + i * lineHeight; ctx.fillStyle = lineNumColor; ctx.textAlign = 'right'; ctx.fillText(String(i + 1), wx + lineNumW - 4, y); ctx.fillStyle = textColor; ctx.textAlign = 'left'; ctx.fillText(line, wx + lineNumW + 12, y); });
      return canvas;
    }
    function updatePreview() { previewDiv.innerHTML = ''; const c = renderToCanvas(); c.style.borderRadius = '12px'; c.style.border = '1px solid rgba(0,0,0,0.1)'; previewDiv.appendChild(c); }
    function downloadPNG() { const c = renderToCanvas(); const a = document.createElement('a'); a.download = 'code-screenshot.png'; a.href = c.toDataURL('image/png'); a.click(); }
    textarea.addEventListener('input', updatePreview); langInput.addEventListener('input', updatePreview);
    updatePreview();
  };

  // ── Config Converter (TOML/INI/ENV/JSON/YAML) ──
  toolBuilders.configparse = (container) => {
    const fg = el('div', { className: 'form-group' }); fg.appendChild(el('label', { textContent: 'Config Input' }));
    const textarea = el('textarea', { className: 'glass-textarea', rows: '10', placeholder: '[database]\nhost = "localhost"\nport = 5432\n\n[server]\nport = 8080\ndebug = true' });
    fg.appendChild(textarea); container.appendChild(fg);
    const fmtFg = el('div', { className: 'form-group' }); fmtFg.appendChild(el('label', { textContent: 'Input Format' }));
    const fmtPicker = glassPicker('cp-fmt', ['TOML', 'INI', 'ENV', 'JSON', 'YAML'], 'TOML');
    fmtFg.appendChild(fmtPicker.wrapper); container.appendChild(fmtFg);
    container.appendChild(el('label', { textContent: 'Convert To', style: 'margin-bottom:8px' }));
    const btns = el('div', { className: 'btn-group', style: 'flex-wrap:wrap' });
    ['TOML', 'INI', 'ENV', 'JSON', 'YAML'].forEach(fmt => { btns.appendChild(el('button', { className: 'btn btn-secondary btn-sm', textContent: fmt, onClick: () => convertTo(fmt) })); });
    container.appendChild(btns);
    // Parsers
    function parseTOML(text) {
      const result = {}; let sec = null;
      text.split('\n').forEach(rawLine => {
        let line = rawLine.trim(); const ci = line.indexOf('#'); if (ci >= 0) { let inS = false, qc = ''; for (let j = 0; j < ci; j++) { if (!inS && (line[j] === '"' || line[j] === "'")) { inS = true; qc = line[j]; } else if (inS && line[j] === qc) inS = false; } if (!inS) line = line.slice(0, ci).trim(); }
        if (!line) return;
        const sm = line.match(/^\[([^\]]+)\]$/); if (sm) { sec = sm[1].trim(); const parts = sec.split('.'); let o = result; parts.forEach(p => { if (!o[p]) o[p] = {}; o = o[p]; }); return; }
        const ei = line.indexOf('='); if (ei === -1) return;
        const key = line.slice(0, ei).trim(); let val = line.slice(ei + 1).trim();
        val = parseTVal(val);
        if (sec) { const parts = sec.split('.'); let o = result; parts.forEach(p => { if (!o[p]) o[p] = {}; o = o[p]; }); o[key] = val; } else result[key] = val;
      });
      return result;
    }
    function parseTVal(v) {
      if (v.startsWith('"') && v.endsWith('"')) return v.slice(1, -1).replace(/\\n/g, '\n').replace(/\\"/g, '"');
      if (v.startsWith("'") && v.endsWith("'")) return v.slice(1, -1);
      if (v === 'true') return true; if (v === 'false') return false;
      if (/^-?\d+$/.test(v)) return parseInt(v, 10); if (/^-?\d+\.\d+$/.test(v)) return parseFloat(v);
      if (v.startsWith('[') && v.endsWith(']')) { try { return JSON.parse(v.replace(/'/g, '"')); } catch (e) { return v.slice(1, -1).split(',').map(x => parseTVal(x.trim())); } }
      return v;
    }
    function parseINI(text) {
      const result = {}; let sec = null;
      text.split('\n').forEach(rawLine => {
        let line = rawLine.trim(); if (line.startsWith(';') || line.startsWith('#') || !line) return;
        const sm = line.match(/^\[([^\]]+)\]$/); if (sm) { sec = sm[1].trim(); if (!result[sec]) result[sec] = {}; return; }
        const ei = line.indexOf('='); if (ei === -1) return;
        const key = line.slice(0, ei).trim(); let val = line.slice(ei + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1);
        if (val === 'true') val = true; else if (val === 'false') val = false; else if (val !== '' && !isNaN(Number(val))) val = Number(val);
        if (sec) result[sec][key] = val; else result[key] = val;
      });
      return result;
    }
    function parseENV(text) {
      const result = {};
      text.split('\n').forEach(rawLine => {
        let line = rawLine.trim(); if (!line || line.startsWith('#')) return; if (line.startsWith('export ')) line = line.slice(7).trim();
        const ei = line.indexOf('='); if (ei === -1) return;
        const key = line.slice(0, ei).trim(); let val = line.slice(ei + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1);
        result[key] = val;
      });
      return result;
    }
    function parseYAML(text) {
      const result = {}; let sec = null;
      text.split('\n').forEach(rawLine => {
        if (!rawLine.trim() || rawLine.trim().startsWith('#')) return;
        const indent = rawLine.search(/\S/); const line = rawLine.trim(); const ci = line.indexOf(':'); if (ci === -1) return;
        const key = line.slice(0, ci).trim(); const val = line.slice(ci + 1).trim();
        if (indent === 0) { if (!val) { sec = key; result[sec] = {}; } else { result[key] = yVal(val); sec = null; } }
        else if (sec) result[sec][key] = yVal(val);
      });
      return result;
    }
    function yVal(v) { if (v === 'true') return true; if (v === 'false') return false; if (v === 'null' || v === '~') return null; if (/^-?\d+$/.test(v)) return parseInt(v, 10); if (/^-?\d+\.\d+$/.test(v)) return parseFloat(v); if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) return v.slice(1, -1); return v; }
    // Serializers
    function toTOML(obj, pfx) {
      pfx = pfx || ''; let top = '', sec = '';
      for (const [k, v] of Object.entries(obj)) {
        if (v !== null && typeof v === 'object' && !Array.isArray(v)) { const sk = pfx ? pfx + '.' + k : k; sec += '[' + sk + ']\n'; for (const [k2, v2] of Object.entries(v)) { if (v2 !== null && typeof v2 === 'object' && !Array.isArray(v2)) sec += toTOML({[k2]: v2}, sk); else sec += k2 + ' = ' + tVal(v2) + '\n'; } sec += '\n'; }
        else top += k + ' = ' + tVal(v) + '\n';
      } return top + (top && sec ? '\n' : '') + sec;
    }
    function tVal(v) { if (v === null || v === undefined) return '""'; if (typeof v === 'boolean') return v ? 'true' : 'false'; if (typeof v === 'number') return String(v); if (Array.isArray(v)) return '[' + v.map(tVal).join(', ') + ']'; return '"' + String(v).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"'; }
    function toINI(obj) {
      let top = '', sec = '';
      for (const [k, v] of Object.entries(obj)) {
        if (v !== null && typeof v === 'object' && !Array.isArray(v)) { sec += '[' + k + ']\n'; for (const [k2, v2] of Object.entries(v)) sec += k2 + '=' + String(v2) + '\n'; sec += '\n'; }
        else top += k + '=' + String(v) + '\n';
      } return top + (top && sec ? '\n' : '') + sec;
    }
    function toENV(obj, pfx) {
      pfx = pfx || ''; let r = '';
      for (const [k, v] of Object.entries(obj)) {
        const ek = pfx ? pfx + '_' + k : k;
        if (v !== null && typeof v === 'object' && !Array.isArray(v)) r += toENV(v, ek.toUpperCase());
        else { const en = ek.toUpperCase().replace(/[^A-Z0-9_]/g, '_'); let ev = v === null || v === undefined ? '' : String(v); if (ev.includes(' ') || ev.includes('#') || ev === '') ev = '"' + ev + '"'; r += en + '=' + ev + '\n'; }
      } return r;
    }
    function toYAML(obj, ind) {
      ind = ind || 0; const pad = '  '.repeat(ind); let r = '';
      for (const [k, v] of Object.entries(obj)) {
        if (v !== null && typeof v === 'object' && !Array.isArray(v)) r += pad + k + ':\n' + toYAML(v, ind + 1);
        else if (Array.isArray(v)) { r += pad + k + ':\n'; v.forEach(item => r += pad + '  - ' + yScalar(item) + '\n'); }
        else r += pad + k + ': ' + yScalar(v) + '\n';
      } return r;
    }
    function yScalar(v) { if (v === null || v === undefined) return 'null'; if (typeof v === 'boolean') return v ? 'true' : 'false'; if (typeof v === 'number') return String(v); const s = String(v); return (s.includes(':') || s.includes('#') || s === '' || s === 'true' || s === 'false' || s === 'null') ? '"' + s + '"' : s; }
    function convertTo(outFmt) {
      const text = textarea.value.trim(); if (!text) { resultBox(container, 'Enter config text above'); return; }
      let parsed;
      try { switch (fmtPicker.value) { case 'TOML': parsed = parseTOML(text); break; case 'INI': parsed = parseINI(text); break; case 'ENV': parsed = parseENV(text); break; case 'JSON': parsed = JSON.parse(text); break; case 'YAML': parsed = parseYAML(text); break; default: parsed = parseTOML(text); } }
      catch (e) { resultBox(container, 'Error parsing ' + fmtPicker.value + ': ' + e.message); return; }
      let output;
      try { switch (outFmt) { case 'TOML': output = toTOML(parsed).trim(); break; case 'INI': output = toINI(parsed).trim(); break; case 'ENV': output = toENV(parsed).trim(); break; case 'JSON': output = JSON.stringify(parsed, null, 2); break; case 'YAML': output = toYAML(parsed).trim(); break; default: output = JSON.stringify(parsed, null, 2); } }
      catch (e) { resultBox(container, 'Error converting to ' + outFmt + ': ' + e.message); return; }
      resultBox(container, output);
    }
  };

  // ── String Escape/Unescape ──
  toolBuilders.strescape = (container) => {
    const fmtFg = el('div', { className: 'form-group' });
    fmtFg.appendChild(el('label', { textContent: 'Format' }));
    const fmtPicker = glassPicker('se-fmt', ['JavaScript', 'JSON', 'HTML', 'CSV', 'SQL'], 'JavaScript');
    fmtFg.appendChild(fmtPicker.wrapper);
    container.appendChild(fmtFg);

    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input' }));
    const textarea = el('textarea', { className: 'glass-input', placeholder: 'Enter text to escape or unescape...', rows: '6', style: 'width:100%;resize:vertical;font-family:monospace' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const btns = el('div', { className: 'tool-row' });
    btns.appendChild(el('button', { className: 'glass-btn', textContent: 'Escape', onClick: () => {
      const t = textarea.value, fmt = fmtPicker.value;
      let r;
      if (fmt === 'JavaScript') r = t.replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/\t/g,'\\t');
      else if (fmt === 'JSON') r = JSON.stringify(t).slice(1,-1);
      else if (fmt === 'HTML') r = t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
      else if (fmt === 'CSV') { const needsQuote = /[",\n\r]/.test(t); r = needsQuote ? '"' + t.replace(/"/g,'""') + '"' : t; }
      else if (fmt === 'SQL') r = t.replace(/'/g,"''").replace(/\\/g,'\\\\');
      else r = t;
      resultBox(container, r);
    }}));
    btns.appendChild(el('button', { className: 'glass-btn-secondary', textContent: 'Unescape', onClick: () => {
      const t = textarea.value, fmt = fmtPicker.value;
      let r;
      try {
        if (fmt === 'JavaScript') r = t.replace(/\\n/g,'\n').replace(/\\r/g,'\r').replace(/\\t/g,'\t').replace(/\\"/g,'"').replace(/\\'/g,"'").replace(/\\\\/g,'\\');
        else if (fmt === 'JSON') r = JSON.parse('"' + t.replace(/"/g,'\\"').replace(/\\"/g,'\\"') + '"');
        else if (fmt === 'HTML') { const d = document.createElement('div'); d.innerHTML = t; r = d.textContent; }
        else if (fmt === 'CSV') r = t.startsWith('"') && t.endsWith('"') ? t.slice(1,-1).replace(/""/g,'"') : t;
        else if (fmt === 'SQL') r = t.replace(/''/g,"'").replace(/\\\\/g,'\\');
        else r = t;
      } catch(e) { r = 'Error: ' + e.message; }
      resultBox(container, r);
    }}));
    container.appendChild(btns);
  };

  // ── Text to ASCII Art ──
  toolBuilders.asciiart = (container) => {
    const GLYPHS = {
      'A':'##\n# #\n###\n# #\n# #','B':'## \n# #\n## \n# #\n## ','C':' ##\n#  \n#  \n#  \n ##','D':'## \n# #\n# #\n# #\n## ','E':'###\n#  \n###\n#  \n###','F':'###\n#  \n###\n#  \n#  ','G':' ##\n#  \n# #\n# #\n ###','H':'# #\n# #\n###\n# #\n# #','I':'###\n # \n # \n # \n###','J':' ##\n  #\n  #\n# #\n ## ','K':'# #\n##\n# \n##\n# #','L':'#  \n#  \n#  \n#  \n###','M':'# #\n###\n###\n# #\n# #','N':'# #\n###\n###\n###\n# #','O':' # \n# #\n# #\n# #\n # ','P':'## \n# #\n## \n#  \n#  ','Q':' # \n# #\n# #\n ###\n  #','R':'## \n# #\n## \n##\n# #','S':' ##\n#  \n ## \n  #\n## ','T':'###\n # \n # \n # \n # ','U':'# #\n# #\n# #\n# #\n ###','V':'# #\n# #\n# #\n ###\n  # ','W':'# #\n# #\n###\n###\n# #','X':'# #\n # \n # \n # \n# #','Y':'# #\n # \n # \n # \n # ','Z':'###\n  #\n # \n#  \n###',
      '0':' # \n# #\n# #\n# #\n # ','1':' # \n## \n # \n # \n###','2':' # \n# #\n  #\n #\n###','3':'## \n  #\n ## \n  #\n## ','4':'# #\n# #\n###\n  #\n  #','5':'###\n#  \n## \n  #\n## ','6':' ##\n#  \n## \n# #\n ## ','7':'###\n  #\n  #\n  #\n  #','8':' # \n# #\n # \n# #\n # ','9':' ##\n# #\n ###\n  #\n ## ',
      ' ':'   \n   \n   \n   \n   ','!':' # \n # \n # \n   \n # ','?':' ##\n# #\n  #\n   \n # ','.':'   \n   \n   \n   \n # ',',':'   \n   \n   \n # \n #  ','-':'   \n   \n###\n   \n   ','_':'   \n   \n   \n   \n###','+':' # \n###\n # \n   \n   ','=':'   \n###\n   \n###\n   ','#':'# #\n###\n# #\n###\n# #','@':' ## \n# ##\n# ##\n#   \n ## ',
    };
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input Text (A-Z, 0-9, punctuation)' }));
    const input = el('input', { className: 'glass-input', placeholder: 'HELLO', style: 'width:100%', onInput: generate });
    fg.appendChild(input);
    container.appendChild(fg);

    const out = el('pre', { style: 'font-family:monospace;font-size:11px;line-height:1.2;overflow-x:auto;padding:12px;background:rgba(0,0,0,0.15);border-radius:8px;margin-top:12px;white-space:pre' });
    container.appendChild(out);

    const copyBtn = el('button', { className: 'glass-btn-secondary', style: 'margin-top:8px', textContent: 'Copy ASCII Art', onClick: () => {
      navigator.clipboard.writeText(out.textContent);
      copyBtn.textContent = 'Copied!';
      setTimeout(() => copyBtn.textContent = 'Copy ASCII Art', 1500);
    }});
    container.appendChild(copyBtn);

    function generate() {
      const text = (input.value || 'HELLO').toUpperCase();
      const rows = ['','','','',''];
      for (const ch of text) {
        const glyph = GLYPHS[ch] || GLYPHS[' '];
        const lines = glyph.split('\n');
        for (let i = 0; i < 5; i++) rows[i] += (lines[i] || '   ').replace(/#/g, '█') + '  ';
      }
      out.textContent = rows.join('\n');
    }
    generate();
  };

  // ── Word Frequency Analyzer ──
  toolBuilders.wordfreq = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Input Text' }));
    const textarea = el('textarea', { className: 'glass-input', placeholder: 'Paste text here to analyze word frequency...', rows: '6', style: 'width:100%;resize:vertical' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const opts = el('div', { className: 'tool-row', style: 'gap:12px;flex-wrap:wrap' });
    const { row: caseRow, input: caseToggle } = iosToggle('wf-case', 'Ignore case', true);
    const { row: stopRow, input: stopToggle } = iosToggle('wf-stop', 'Ignore stop words', true);
    opts.appendChild(caseRow);
    opts.appendChild(stopRow);
    container.appendChild(opts);

    const analyzeBtn = el('button', { className: 'glass-btn', style: 'width:100%;margin-top:8px', textContent: 'Analyze', onClick: analyze });
    container.appendChild(analyzeBtn);

    const tableWrap = el('div', { style: 'margin-top:12px;max-height:320px;overflow-y:auto' });
    container.appendChild(tableWrap);

    const STOP = new Set(['the','a','an','and','or','but','in','on','at','to','for','of','with','by','from','up','about','into','through','during','is','are','was','were','be','been','being','have','has','had','do','does','did','will','would','could','should','may','might','shall','can','need','dare','ought','used','this','that','these','those','i','you','he','she','it','we','they','me','him','her','us','them','my','your','his','its','our','their','what','which','who','whom','whose','when','where','why','how','all','both','each','few','more','most','other','some','such','no','not','only','same','so','than','too','very','just','as','if','then','there','here','s','t']);

    function analyze() {
      const raw = textarea.value;
      if (!raw.trim()) { tableWrap.innerHTML = ''; return; }
      let text = caseToggle.checked ? raw.toLowerCase() : raw;
      const words = text.match(/\b[a-zA-Z']+\b/g) || [];
      const filtered = stopToggle.checked ? words.filter(w => !STOP.has(w.toLowerCase())) : words;
      const freq = {};
      filtered.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
      const total = filtered.length;
      const sorted = Object.entries(freq).sort((a,b) => b[1]-a[1]).slice(0,100);
      tableWrap.innerHTML = '';
      const tbl = el('table', { style: 'width:100%;border-collapse:collapse;font-size:13px' });
      const head = el('tr');
      ['Word','Count','Percent'].forEach(h => head.appendChild(el('th', { textContent: h, style: 'text-align:left;padding:6px 8px;border-bottom:1px solid rgba(255,255,255,0.15);opacity:0.7' })));
      tbl.appendChild(head);
      sorted.forEach(([word, count]) => {
        const tr = el('tr');
        [word, count, (count/total*100).toFixed(1)+'%'].forEach((v, i) => tr.appendChild(el('td', { textContent: v, style: 'padding:5px 8px;border-bottom:1px solid rgba(255,255,255,0.07)' + (i===0?';font-weight:500':'') })));
        tbl.appendChild(tr);
      });
      tableWrap.appendChild(tbl);
      const summary = el('div', { textContent: `${sorted.length} unique words, ${total} total`, style: 'font-size:12px;opacity:0.6;margin-top:8px' });
      tableWrap.appendChild(summary);
    }
  };

  // ── Morse Code Translator ──
  toolBuilders.morse = (container) => {
    const CODE = {A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',J:'.---',K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',S:'...',T:'-',U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..',0:'-----',1:'.----',2:'..---',3:'...--',4:'....-',5:'.....',6:'-....',7:'--...',8:'---..',9:'----.','.':'.-.-.-',',':'--..--','?':'..--..',  "'":'.----.',  '!':'-.-.--','/':'-..-.',  '(':'-.--.',  ')':'-.--.-','&':'.-...',':':'---...',';':'-.-.-.',  '=':'-...-','+':'.-.-.',  '-':'-....-',  '_':'..--.-',  '"':'.-..-.','$':'...-..-','@':'.--.-.','#':''};
    const DECODE = {};
    Object.entries(CODE).forEach(([k,v]) => { if(v) DECODE[v] = k; });

    const row = el('div', { className: 'tool-row', style: 'gap:12px;align-items:flex-start' });

    const leftFg = el('div', { className: 'form-group', style: 'flex:1' });
    leftFg.appendChild(el('label', { textContent: 'Text' }));
    const textArea = el('textarea', { className: 'glass-input', rows: '5', placeholder: 'Type text here...', style: 'width:100%;resize:vertical' });
    leftFg.appendChild(textArea);

    const rightFg = el('div', { className: 'form-group', style: 'flex:1' });
    rightFg.appendChild(el('label', { textContent: 'Morse Code' }));
    const morseArea = el('textarea', { className: 'glass-input', rows: '5', placeholder: '... --- ...', style: 'width:100%;resize:vertical;font-family:monospace' });
    rightFg.appendChild(morseArea);

    row.appendChild(leftFg);
    row.appendChild(rightFg);
    container.appendChild(row);

    const btnRow = el('div', { className: 'tool-row', style: 'gap:8px;flex-wrap:wrap' });
    btnRow.appendChild(el('button', { className: 'glass-btn', textContent: 'Text to Morse', onClick: () => {
      const t = textArea.value.toUpperCase();
      morseArea.value = t.split('').map(c => c === ' ' ? '/' : (CODE[c] || '')).filter((c,i,a) => c || (a[i-1] !== '/' && a[i+1] !== '/')).join(' ');
    }}));
    btnRow.appendChild(el('button', { className: 'glass-btn-secondary', textContent: 'Morse to Text', onClick: () => {
      const words = morseArea.value.trim().split(/\s*\/\s*/);
      textArea.value = words.map(w => w.trim().split(/\s+/).map(s => DECODE[s] || '?').join('')).join(' ');
    }}));
    btnRow.appendChild(el('button', { className: 'glass-btn-secondary', textContent: 'Play Audio', onClick: playAudio }));
    container.appendChild(btnRow);

    async function playAudio() {
      const morse = morseArea.value.trim();
      if (!morse) return;
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const dot = 0.07, dash = 0.21, gap = 0.07, letterGap = 0.21, wordGap = 0.5;
      let t = ctx.currentTime + 0.05;
      function beep(dur) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine'; osc.frequency.value = 600;
        gain.gain.setValueAtTime(0.4, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + dur - 0.01);
        osc.start(t); osc.stop(t + dur);
        t += dur + gap;
      }
      for (const token of morse.split('')) {
        if (token === '.') beep(dot);
        else if (token === '-') beep(dash);
        else if (token === ' ') t += letterGap;
        else if (token === '/') t += wordGap;
      }
    }
  };

  // ── JSON Schema Validator ──
  toolBuilders.jsonschema = (container) => {
    const row = el('div', { className: 'tool-row', style: 'gap:12px;align-items:flex-start' });

    const leftFg = el('div', { className: 'form-group', style: 'flex:1' });
    leftFg.appendChild(el('label', { textContent: 'JSON Data' }));
    const dataArea = el('textarea', { className: 'glass-input', rows: '10', placeholder: '{\n  "name": "Alice",\n  "age": 30\n}', style: 'width:100%;resize:vertical;font-family:monospace' });
    leftFg.appendChild(dataArea);

    const rightFg = el('div', { className: 'form-group', style: 'flex:1' });
    rightFg.appendChild(el('label', { textContent: 'JSON Schema' }));
    const schemaArea = el('textarea', { className: 'glass-input', rows: '10', placeholder: '{\n  "type": "object",\n  "required": ["name"],\n  "properties": {\n    "name": {"type": "string"},\n    "age": {"type": "integer", "minimum": 0}\n  }\n}', style: 'width:100%;resize:vertical;font-family:monospace' });
    rightFg.appendChild(schemaArea);

    row.appendChild(leftFg);
    row.appendChild(rightFg);
    container.appendChild(row);

    const validateBtn = el('button', { className: 'glass-btn', style: 'width:100%;margin-top:4px', textContent: 'Validate', onClick: validate });
    container.appendChild(validateBtn);

    function validateNode(data, schema, path) {
      const errors = [];
      if (!schema || typeof schema !== 'object') return errors;
      if (schema.type) {
        const types = Array.isArray(schema.type) ? schema.type : [schema.type];
        const jsType = data === null ? 'null' : Array.isArray(data) ? 'array' : typeof data;
        const typeMap = { integer: v => Number.isInteger(v) };
        const matches = types.some(t => t === 'integer' ? Number.isInteger(data) : (t === 'number' ? typeof data === 'number' : jsType === t));
        if (!matches) errors.push(`${path || 'root'}: expected type "${types.join('|')}", got "${jsType}"`);
      }
      if (schema.required && typeof data === 'object' && data !== null && !Array.isArray(data)) {
        schema.required.forEach(k => { if (!(k in data)) errors.push(`${path || 'root'}: missing required property "${k}"`); });
      }
      if (schema.properties && typeof data === 'object' && data !== null && !Array.isArray(data)) {
        Object.entries(schema.properties).forEach(([k, s]) => { if (k in data) errors.push(...validateNode(data[k], s, (path ? path + '.' : '') + k)); });
      }
      if (schema.items && Array.isArray(data)) {
        data.forEach((item, i) => errors.push(...validateNode(item, schema.items, (path || 'root') + '[' + i + ']')));
      }
      if (typeof schema.minimum === 'number' && typeof data === 'number' && data < schema.minimum) errors.push(`${path || 'root'}: value ${data} is less than minimum ${schema.minimum}`);
      if (typeof schema.maximum === 'number' && typeof data === 'number' && data > schema.maximum) errors.push(`${path || 'root'}: value ${data} exceeds maximum ${schema.maximum}`);
      if (typeof schema.minLength === 'number' && typeof data === 'string' && data.length < schema.minLength) errors.push(`${path || 'root'}: string length ${data.length} is less than minLength ${schema.minLength}`);
      if (typeof schema.maxLength === 'number' && typeof data === 'string' && data.length > schema.maxLength) errors.push(`${path || 'root'}: string length ${data.length} exceeds maxLength ${schema.maxLength}`);
      if (schema.pattern && typeof data === 'string' && !new RegExp(schema.pattern).test(data)) errors.push(`${path || 'root'}: string does not match pattern "${schema.pattern}"`);
      if (schema.enum && !schema.enum.some(e => JSON.stringify(e) === JSON.stringify(data))) errors.push(`${path || 'root'}: value not in enum ${JSON.stringify(schema.enum)}`);
      if (typeof schema.minItems === 'number' && Array.isArray(data) && data.length < schema.minItems) errors.push(`${path || 'root'}: array length ${data.length} is less than minItems ${schema.minItems}`);
      if (typeof schema.maxItems === 'number' && Array.isArray(data) && data.length > schema.maxItems) errors.push(`${path || 'root'}: array length ${data.length} exceeds maxItems ${schema.maxItems}`);
      return errors;
    }

    function validate() {
      let data, schema;
      try { data = JSON.parse(dataArea.value); } catch(e) { resultBox(container, 'JSON Data parse error: ' + e.message); return; }
      try { schema = JSON.parse(schemaArea.value); } catch(e) { resultBox(container, 'JSON Schema parse error: ' + e.message); return; }
      const errors = validateNode(data, schema, '');
      if (errors.length === 0) resultBox(container, 'PASS — JSON is valid against the schema.');
      else resultBox(container, 'FAIL — ' + errors.length + ' error(s):\n\n' + errors.map((e,i) => (i+1) + '. ' + e).join('\n'));
    }
  };

  // ── CSS Selector Tester ──
  toolBuilders.cssselector = (container) => {
    const fg1 = el('div', { className: 'form-group' });
    fg1.appendChild(el('label', { textContent: 'HTML Input' }));
    const htmlArea = el('textarea', { className: 'glass-input', rows: '7', placeholder: '<div class="container">\n  <p class="text">Hello</p>\n  <p class="text active">World</p>\n  <span id="note">Note</span>\n</div>', style: 'width:100%;resize:vertical;font-family:monospace' });
    fg1.appendChild(htmlArea);
    container.appendChild(fg1);

    const fg2 = el('div', { className: 'form-group' });
    fg2.appendChild(el('label', { textContent: 'CSS Selector' }));
    const selInput = el('input', { className: 'glass-input', placeholder: '.text.active', style: 'width:100%' });
    fg2.appendChild(selInput);
    container.appendChild(fg2);

    const testBtn = el('button', { className: 'glass-btn', style: 'width:100%', textContent: 'Test Selector', onClick: test });
    container.appendChild(testBtn);

    const preview = el('div', { style: 'margin-top:12px' });
    container.appendChild(preview);

    function test() {
      const html = htmlArea.value.trim();
      const sel = selInput.value.trim();
      if (!html || !sel) { resultBox(container, 'Enter HTML and a CSS selector above'); return; }
      try {
        const doc = new DOMParser().parseFromString('<body>' + html + '</body>', 'text/html');
        const matches = Array.from(doc.querySelectorAll(sel));
        preview.innerHTML = '';
        const count = el('div', { textContent: matches.length + ' element(s) matched', style: 'font-weight:600;margin-bottom:8px;color:' + (matches.length ? '#34d399' : '#f87171') });
        preview.appendChild(count);
        matches.forEach((el_, i) => {
          const item = el('div', { style: 'padding:8px;margin-bottom:6px;background:rgba(0,0,0,0.15);border-radius:6px;font-family:monospace;font-size:12px;border-left:3px solid #34d399' });
          item.textContent = (i+1) + '. ' + el_.outerHTML.slice(0, 200);
          preview.appendChild(item);
        });
        resultBox(container, matches.length + ' match(es) for selector "' + sel + '":\n\n' + matches.map((m,i) => (i+1)+'. '+m.outerHTML).join('\n'));
      } catch(e) {
        resultBox(container, 'Error: ' + e.message);
      }
    }
  };

  // ── Robots.txt Generator ──
  toolBuilders.robotstxt = (container) => {
    const agentFg = el('div', { className: 'form-group' });
    agentFg.appendChild(el('label', { textContent: 'User-agent' }));
    const agentInput = el('input', { className: 'glass-input', value: '*', style: 'width:100%' });
    agentFg.appendChild(agentInput);
    container.appendChild(agentFg);

    const presets = [
      { id: 'rb-allowall', label: 'Allow all crawlers', code: () => '' },
      { id: 'rb-disallowall', label: 'Disallow all crawlers', code: () => 'Disallow: /' },
      { id: 'rb-noindex', label: 'Disallow /admin/', code: () => 'Disallow: /admin/' },
      { id: 'rb-noimages', label: 'Disallow /images/', code: () => 'Disallow: /images/' },
      { id: 'rb-noprivate', label: 'Disallow /private/', code: () => 'Disallow: /private/' },
      { id: 'rb-nocgi', label: 'Disallow /cgi-bin/', code: () => 'Disallow: /cgi-bin/' },
      { id: 'rb-noapi', label: 'Disallow /api/', code: () => 'Disallow: /api/' },
      { id: 'rb-allowcss', label: 'Allow /assets/', code: () => 'Allow: /assets/' },
    ];
    const toggles = {};
    presets.forEach(p => {
      const { row, input } = iosToggle(p.id, p.label, false, generate);
      toggles[p.id] = input;
      container.appendChild(row);
    });

    const sitemapFg = el('div', { className: 'form-group', style: 'margin-top:12px' });
    sitemapFg.appendChild(el('label', { textContent: 'Sitemap URL (optional)' }));
    const sitemapInput = el('input', { className: 'glass-input', placeholder: 'https://example.com/sitemap.xml', style: 'width:100%' });
    sitemapInput.addEventListener('input', generate);
    sitemapFg.appendChild(sitemapInput);
    container.appendChild(sitemapFg);

    const customFg = el('div', { className: 'form-group' });
    customFg.appendChild(el('label', { textContent: 'Custom directives (one per line)' }));
    const customArea = el('textarea', { className: 'glass-input', rows: '3', placeholder: 'Disallow: /secret/', style: 'width:100%;font-family:monospace' });
    customArea.addEventListener('input', generate);
    customFg.appendChild(customArea);
    container.appendChild(customFg);

    agentInput.addEventListener('input', generate);

    function generate() {
      const agent = agentInput.value.trim() || '*';
      let lines = ['User-agent: ' + agent];
      if (toggles['rb-allowall'].checked && !toggles['rb-disallowall'].checked) lines.push('Allow: /');
      if (toggles['rb-disallowall'].checked) { lines.push('Disallow: /'); }
      else {
        ['rb-noindex','rb-noimages','rb-noprivate','rb-nocgi','rb-noapi'].forEach(id => { if (toggles[id].checked) lines.push(presets.find(p=>p.id===id).code()); });
      }
      if (toggles['rb-allowcss'].checked) lines.push('Allow: /assets/');
      const custom = customArea.value.trim();
      if (custom) custom.split('\n').forEach(l => { if(l.trim()) lines.push(l.trim()); });
      if (!lines.some(l => l.startsWith('Disallow') || l.startsWith('Allow'))) lines.push('Allow: /');
      if (sitemapInput.value.trim()) lines.push('', 'Sitemap: ' + sitemapInput.value.trim());
      resultBox(container, lines.join('\n'));
    }
    generate();
  };

  // ── Sitemap Generator ──
  toolBuilders.sitemapgen = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'URLs (one per line)' }));
    const urlArea = el('textarea', { className: 'glass-input', rows: '7', placeholder: 'https://example.com/\nhttps://example.com/about\nhttps://example.com/contact', style: 'width:100%;resize:vertical' });
    fg.appendChild(urlArea);
    container.appendChild(fg);

    const optRow = el('div', { className: 'tool-row', style: 'gap:12px;flex-wrap:wrap' });

    const freqFg = el('div', { className: 'form-group', style: 'flex:1;min-width:140px' });
    freqFg.appendChild(el('label', { textContent: 'Changefreq' }));
    const freqPicker = glassPicker('sm-freq', ['always','hourly','daily','weekly','monthly','yearly','never'], 'weekly');
    freqFg.appendChild(freqPicker.wrapper);

    const priFg = el('div', { className: 'form-group', style: 'flex:1;min-width:140px' });
    priFg.appendChild(el('label', { textContent: 'Priority' }));
    const priPicker = glassPicker('sm-pri', ['1.0','0.9','0.8','0.7','0.6','0.5','0.4','0.3','0.2','0.1'], '0.8');
    priFg.appendChild(priPicker.wrapper);

    optRow.appendChild(freqFg);
    optRow.appendChild(priFg);
    container.appendChild(optRow);

    const { row: dateRow, input: dateToggle } = iosToggle('sm-date', 'Include lastmod (today)', true);
    container.appendChild(dateRow);

    const genBtn = el('button', { className: 'glass-btn', style: 'width:100%;margin-top:8px', textContent: 'Generate Sitemap', onClick: generate });
    container.appendChild(genBtn);

    function generate() {
      const urls = urlArea.value.split('\n').map(u => u.trim()).filter(u => u.length > 0);
      if (!urls.length) { resultBox(container, 'Enter at least one URL above'); return; }
      const today = new Date().toISOString().slice(0,10);
      const freq = freqPicker.value;
      const pri = priPicker.value;
      const incDate = dateToggle.checked;
      const entries = urls.map(url => {
        const esc = url.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
        return `  <url>\n    <loc>${esc}</loc>${incDate ? '\n    <lastmod>'+today+'</lastmod>' : ''}\n    <changefreq>${freq}</changefreq>\n    <priority>${pri}</priority>\n  </url>`;
      });
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>`;
      resultBox(container, xml);
    }
  };

  // ── Schema.org Generator ──
  toolBuilders.schemaorg = (container) => {
    const types = ['Article', 'Product', 'LocalBusiness', 'Event', 'Person', 'FAQ', 'Recipe', 'Organization'];
    const typeFg = el('div', { className: 'form-group' });
    typeFg.appendChild(el('label', { textContent: 'Schema Type' }));
    const typePicker = glassPicker('schema-type', types, 'Article');
    typeFg.appendChild(typePicker.wrapper);
    container.appendChild(typeFg);

    const fieldsDiv = el('div');
    container.appendChild(fieldsDiv);

    const genBtn = el('button', { className: 'glass-btn', style: 'width:100%;margin-top:8px', textContent: 'Generate JSON-LD', onClick: generate });
    container.appendChild(genBtn);

    const typeFields = {
      Article: [['name','Title','My Article'],['headline','Headline','Article headline'],['author','Author Name','John Doe'],['datePublished','Date Published','2024-01-01'],['description','Description','Article description'],['url','URL','https://example.com/article']],
      Product: [['name','Product Name','My Product'],['description','Description','Product description'],['sku','SKU','SKU-001'],['brand','Brand','Brand Name'],['price','Price','29.99'],['currency','Currency','USD'],['availability','Availability','InStock']],
      LocalBusiness: [['name','Business Name','My Business'],['description','Description','Business description'],['telephone','Phone','+1-555-000-0000'],['address','Street Address','123 Main St'],['city','City','New York'],['postalCode','Postal Code','10001'],['country','Country','US'],['url','Website','https://example.com']],
      Event: [['name','Event Name','My Event'],['description','Description','Event description'],['startDate','Start Date','2024-06-01T10:00'],['endDate','End Date','2024-06-01T18:00'],['location','Location Name','Event Venue'],['address','Location Address','123 Main St'],['organizer','Organizer','Event Org'],['url','URL','https://example.com/event']],
      Person: [['name','Full Name','Jane Doe'],['jobTitle','Job Title','Software Engineer'],['email','Email','jane@example.com'],['telephone','Phone','+1-555-000-0000'],['url','Website','https://janedoe.com'],['sameAs','Social Profile URL','https://twitter.com/jane']],
      FAQ: [['q1','Question 1','What is this?'],['a1','Answer 1','This is an example.'],['q2','Question 2','How does it work?'],['a2','Answer 2','It works like this.'],['q3','Question 3','Where can I learn more?'],['a3','Answer 3','Visit our website.']],
      Recipe: [['name','Recipe Name','Chocolate Cake'],['description','Description','A delicious cake'],['author','Author','Chef Name'],['prepTime','Prep Time (ISO 8601)','PT30M'],['cookTime','Cook Time (ISO 8601)','PT1H'],['recipeYield','Yield','8 servings'],['ingredients','Ingredients (comma-separated)','2 cups flour, 1 cup sugar']],
      Organization: [['name','Org Name','My Organization'],['description','Description','Org description'],['url','Website','https://example.com'],['logo','Logo URL','https://example.com/logo.png'],['telephone','Phone','+1-555-000-0000'],['email','Email','info@example.com'],['address','Address','123 Main St, New York, NY']],
    };

    const inputs = {};

    function renderFields(type) {
      fieldsDiv.innerHTML = '';
      inputs[type] = inputs[type] || {};
      (typeFields[type] || []).forEach(([key, label, placeholder]) => {
        const fg = el('div', { className: 'form-group' });
        fg.appendChild(el('label', { textContent: label }));
        const inp = el('input', { className: 'glass-input', placeholder });
        if (inputs[type][key]) inp.value = inputs[type][key].value || '';
        fg.appendChild(inp);
        fieldsDiv.appendChild(fg);
        inputs[type][key] = inp;
      });
    }

    function generate() {
      const type = typePicker.value;
      const vals = {};
      (typeFields[type] || []).forEach(([key]) => { vals[key] = (inputs[type] && inputs[type][key]) ? inputs[type][key].value.trim() : ''; });
      let schema = { '@context': 'https://schema.org', '@type': type };
      if (type === 'Article') {
        schema = { ...schema, name: vals.name, headline: vals.headline, author: { '@type': 'Person', name: vals.author }, datePublished: vals.datePublished, description: vals.description, url: vals.url };
      } else if (type === 'Product') {
        schema = { ...schema, name: vals.name, description: vals.description, sku: vals.sku, brand: { '@type': 'Brand', name: vals.brand }, offers: { '@type': 'Offer', price: vals.price, priceCurrency: vals.currency, availability: 'https://schema.org/' + vals.availability } };
      } else if (type === 'LocalBusiness') {
        schema = { ...schema, name: vals.name, description: vals.description, telephone: vals.telephone, address: { '@type': 'PostalAddress', streetAddress: vals.address, addressLocality: vals.city, postalCode: vals.postalCode, addressCountry: vals.country }, url: vals.url };
      } else if (type === 'Event') {
        schema = { ...schema, name: vals.name, description: vals.description, startDate: vals.startDate, endDate: vals.endDate, location: { '@type': 'Place', name: vals.location, address: vals.address }, organizer: { '@type': 'Organization', name: vals.organizer }, url: vals.url };
      } else if (type === 'Person') {
        schema = { ...schema, name: vals.name, jobTitle: vals.jobTitle, email: vals.email, telephone: vals.telephone, url: vals.url, sameAs: vals.sameAs ? [vals.sameAs] : [] };
      } else if (type === 'FAQ') {
        const pairs = [[vals.q1, vals.a1],[vals.q2, vals.a2],[vals.q3, vals.a3]].filter(([q]) => q);
        schema = { ...schema, mainEntity: pairs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
      } else if (type === 'Recipe') {
        schema = { ...schema, name: vals.name, description: vals.description, author: { '@type': 'Person', name: vals.author }, prepTime: vals.prepTime, cookTime: vals.cookTime, recipeYield: vals.recipeYield, recipeIngredient: vals.ingredients ? vals.ingredients.split(',').map(s => s.trim()) : [] };
      } else if (type === 'Organization') {
        schema = { ...schema, name: vals.name, description: vals.description, url: vals.url, logo: vals.logo, telephone: vals.telephone, email: vals.email, address: vals.address };
      }
      // Strip empty values
      const clean = obj => {
        if (Array.isArray(obj)) return obj.map(clean).filter(v => v !== '' && v !== null && v !== undefined);
        if (obj && typeof obj === 'object') {
          const r = {};
          Object.entries(obj).forEach(([k, v]) => { const cv = clean(v); if (cv !== '' && cv !== null && cv !== undefined && !(Array.isArray(cv) && !cv.length)) r[k] = cv; });
          return r;
        }
        return obj;
      };
      const output = `<script type="application/ld+json">\n${JSON.stringify(clean(schema), null, 2)}\n<\/script>`;
      resultBox(container, output);
    }

    typePicker.wrapper.addEventListener('click', () => setTimeout(() => renderFields(typePicker.value), 10));
    renderFields('Article');
  };

  // ── Git Command Builder ──
  toolBuilders.gitcmd = (container) => {
    const cats = ['branch', 'commit', 'remote', 'stash', 'log', 'reset', 'merge', 'rebase'];
    const catFg = el('div', { className: 'form-group' });
    catFg.appendChild(el('label', { textContent: 'Command Category' }));
    const catPicker = glassPicker('git-cat', cats, 'commit');
    catFg.appendChild(catPicker.wrapper);
    container.appendChild(catFg);

    const optionsDiv = el('div');
    container.appendChild(optionsDiv);

    const buildBtn = el('button', { className: 'glass-btn', style: 'width:100%;margin-top:8px', textContent: 'Build Command', onClick: build });
    container.appendChild(buildBtn);

    const catDefs = {
      branch: {
        inputs: [['branch-name','Branch Name','feature/my-feature'],['branch-from','From Branch','main']],
        toggles: [['branch-del','Delete branch (-d)'],['branch-force','Force (-f)'],['branch-all','List all (-a)'],['branch-remote','List remotes (-r)']],
        build(inp, tog) {
          if (tog['branch-all']) return 'git branch -a';
          if (tog['branch-remote']) return 'git branch -r';
          if (tog['branch-del']) return `git branch ${tog['branch-force'] ? '-D' : '-d'} ${inp['branch-name'] || 'branch-name'}`;
          const from = inp['branch-from'] ? ` ${inp['branch-from']}` : '';
          return `git checkout -b ${inp['branch-name'] || 'new-branch'}${from}`;
        }
      },
      commit: {
        inputs: [['commit-msg','Commit Message','feat: add new feature']],
        toggles: [['commit-all','Stage all changes (-a)'],['commit-amend','Amend last commit (--amend)'],['commit-empty','Allow empty (--allow-empty)'],['commit-noverify','Skip hooks (--no-verify)']],
        build(inp, tog) {
          let cmd = 'git commit';
          if (tog['commit-all']) cmd += ' -a';
          if (tog['commit-amend']) cmd += ' --amend';
          if (tog['commit-empty']) cmd += ' --allow-empty';
          if (tog['commit-noverify']) cmd += ' --no-verify';
          if (!tog['commit-amend'] || inp['commit-msg']) cmd += ` -m "${inp['commit-msg'] || 'commit message'}"`;
          return cmd;
        }
      },
      remote: {
        inputs: [['remote-name','Remote Name','origin'],['remote-url','Remote URL','https://github.com/user/repo.git'],['remote-branch','Branch','main']],
        toggles: [['remote-add','Add remote'],['remote-remove','Remove remote'],['remote-push','Push'],['remote-pull','Pull'],['remote-fetch','Fetch all']],
        build(inp, tog) {
          const name = inp['remote-name'] || 'origin';
          if (tog['remote-add']) return `git remote add ${name} ${inp['remote-url'] || 'https://github.com/user/repo.git'}`;
          if (tog['remote-remove']) return `git remote remove ${name}`;
          if (tog['remote-push']) return `git push ${name} ${inp['remote-branch'] || 'main'}`;
          if (tog['remote-pull']) return `git pull ${name} ${inp['remote-branch'] || 'main'}`;
          if (tog['remote-fetch']) return 'git fetch --all';
          return `git remote -v`;
        }
      },
      stash: {
        inputs: [['stash-msg','Stash Message','WIP: work in progress'],['stash-index','Stash Index','0']],
        toggles: [['stash-push','Push (save)'],['stash-pop','Pop'],['stash-apply','Apply'],['stash-list','List'],['stash-drop','Drop'],['stash-include-untracked','Include untracked (-u)']],
        build(inp, tog) {
          if (tog['stash-list']) return 'git stash list';
          if (tog['stash-pop']) return `git stash pop stash@{${inp['stash-index'] || '0'}}`;
          if (tog['stash-apply']) return `git stash apply stash@{${inp['stash-index'] || '0'}}`;
          if (tog['stash-drop']) return `git stash drop stash@{${inp['stash-index'] || '0'}}`;
          let cmd = 'git stash push';
          if (tog['stash-include-untracked']) cmd += ' -u';
          if (inp['stash-msg']) cmd += ` -m "${inp['stash-msg']}"`;
          return cmd;
        }
      },
      log: {
        inputs: [['log-n','Max Commits','10'],['log-author','Filter by Author',''],['log-grep','Grep Message',''],['log-since','Since (date)',''],['log-until','Until (date)','']],
        toggles: [['log-oneline','One line (--oneline)'],['log-graph','Graph (--graph)'],['log-all','All branches (--all)'],['log-stat','Show stats (--stat)'],['log-patch','Show patch (-p)']],
        build(inp, tog) {
          let cmd = 'git log';
          if (inp['log-n']) cmd += ` -n ${inp['log-n']}`;
          if (tog['log-oneline']) cmd += ' --oneline';
          if (tog['log-graph']) cmd += ' --graph';
          if (tog['log-all']) cmd += ' --all';
          if (tog['log-stat']) cmd += ' --stat';
          if (tog['log-patch']) cmd += ' -p';
          if (inp['log-author']) cmd += ` --author="${inp['log-author']}"`;
          if (inp['log-grep']) cmd += ` --grep="${inp['log-grep']}"`;
          if (inp['log-since']) cmd += ` --since="${inp['log-since']}"`;
          if (inp['log-until']) cmd += ` --until="${inp['log-until']}"`;
          return cmd;
        }
      },
      reset: {
        inputs: [['reset-commit','Commit / HEAD~n','HEAD~1']],
        toggles: [['reset-soft','Soft (keep staged)'],['reset-mixed','Mixed (unstage)'],['reset-hard','Hard (discard all)'],['reset-file','Reset specific file']],
        build(inp, tog) {
          const commit = inp['reset-commit'] || 'HEAD~1';
          if (tog['reset-soft']) return `git reset --soft ${commit}`;
          if (tog['reset-hard']) return `git reset --hard ${commit}`;
          return `git reset --mixed ${commit}`;
        }
      },
      merge: {
        inputs: [['merge-branch','Branch to Merge','feature/my-feature']],
        toggles: [['merge-noff','No fast-forward (--no-ff)'],['merge-squash','Squash commits (--squash)'],['merge-abort','Abort merge'],['merge-continue','Continue merge']],
        build(inp, tog) {
          if (tog['merge-abort']) return 'git merge --abort';
          if (tog['merge-continue']) return 'git merge --continue';
          let cmd = `git merge ${inp['merge-branch'] || 'branch-name'}`;
          if (tog['merge-noff']) cmd += ' --no-ff';
          if (tog['merge-squash']) cmd += ' --squash';
          return cmd;
        }
      },
      rebase: {
        inputs: [['rebase-onto','Rebase onto Branch','main'],['rebase-interactive-n','Interactive last N commits','3']],
        toggles: [['rebase-interactive','Interactive (-i)'],['rebase-abort','Abort'],['rebase-continue','Continue'],['rebase-skip','Skip current patch']],
        build(inp, tog) {
          if (tog['rebase-abort']) return 'git rebase --abort';
          if (tog['rebase-continue']) return 'git rebase --continue';
          if (tog['rebase-skip']) return 'git rebase --skip';
          if (tog['rebase-interactive']) return `git rebase -i HEAD~${inp['rebase-interactive-n'] || '3'}`;
          return `git rebase ${inp['rebase-onto'] || 'main'}`;
        }
      },
    };

    const toggleStates = {};
    const inputRefs = {};

    function renderOptions(cat) {
      optionsDiv.innerHTML = '';
      toggleStates[cat] = toggleStates[cat] || {};
      inputRefs[cat] = inputRefs[cat] || {};
      const def = catDefs[cat];
      if (!def) return;
      (def.inputs || []).forEach(([key, label, placeholder]) => {
        const fg = el('div', { className: 'form-group' });
        fg.appendChild(el('label', { textContent: label }));
        const inp = el('input', { className: 'glass-input', placeholder });
        if (inputRefs[cat][key]) inp.value = inputRefs[cat][key];
        fg.appendChild(inp);
        optionsDiv.appendChild(fg);
        inp.addEventListener('input', () => { inputRefs[cat][key] = inp.value; });
        inputRefs[cat][key] = inp.value || '';
        inputRefs[cat]['__el_' + key] = inp;
      });
      (def.toggles || []).forEach(([key, label]) => {
        const { row, input } = iosToggle('git-' + key, label, toggleStates[cat][key] || false, () => { toggleStates[cat][key] = input.checked; });
        optionsDiv.appendChild(row);
        toggleStates[cat][key] = toggleStates[cat][key] || false;
      });
    }

    function build() {
      const cat = catPicker.value;
      const def = catDefs[cat];
      if (!def) return;
      const tog = toggleStates[cat] || {};
      const togActual = {};
      (def.toggles || []).forEach(([key]) => {
        const chk = document.getElementById('git-' + key);
        togActual[key] = chk ? chk.checked : (tog[key] || false);
      });
      const inp = {};
      (def.inputs || []).forEach(([key]) => {
        const elRef = inputRefs[cat] && inputRefs[cat]['__el_' + key];
        inp[key] = elRef ? elRef.value.trim() : (inputRefs[cat] && inputRefs[cat][key]) || '';
      });
      resultBox(container, def.build(inp, togActual));
    }

    catPicker.wrapper.addEventListener('click', () => setTimeout(() => renderOptions(catPicker.value), 10));
    renderOptions('commit');
  };

  // ── package.json Generator ──
  toolBuilders.pkgjson = (container) => {
    const fields = [
      ['pkg-name','name','my-project','text'],
      ['pkg-version','version','1.0.0','text'],
      ['pkg-desc','description','My project description','text'],
      ['pkg-author','author','Your Name <you@example.com>','text'],
      ['pkg-main','main','index.js','text'],
      ['pkg-repo','repository','https://github.com/user/repo','text'],
      ['pkg-keywords','keywords (comma-separated)','node, javascript','text'],
    ];
    const inputs = {};
    fields.forEach(([id, label, placeholder]) => {
      const fg = el('div', { className: 'form-group' });
      fg.appendChild(el('label', { textContent: label }));
      const inp = el('input', { className: 'glass-input', placeholder, id });
      fg.appendChild(inp);
      container.appendChild(fg);
      inputs[id] = inp;
    });

    const licFg = el('div', { className: 'form-group' });
    licFg.appendChild(el('label', { textContent: 'license' }));
    const licPicker = glassPicker('pkg-lic', ['MIT','ISC','Apache-2.0','GPL-3.0','BSD-2-Clause','BSD-3-Clause','UNLICENSED'], 'MIT');
    licFg.appendChild(licPicker.wrapper);
    container.appendChild(licFg);

    const { row: privRow, input: privToggle } = iosToggle('pkg-private', 'private', false);
    const { row: modRow, input: modToggle } = iosToggle('pkg-module', 'type: "module" (ESM)', false);
    const { row: scriptsRow, input: scriptsToggle } = iosToggle('pkg-scripts', 'Include default scripts', true);
    container.appendChild(privRow);
    container.appendChild(modRow);
    container.appendChild(scriptsRow);

    const genBtn = el('button', { className: 'glass-btn', style: 'width:100%;margin-top:8px', textContent: 'Generate package.json', onClick: generate });
    container.appendChild(genBtn);

    function generate() {
      const pkg = {};
      const name = inputs['pkg-name'].value.trim() || 'my-project';
      const version = inputs['pkg-version'].value.trim() || '1.0.0';
      const desc = inputs['pkg-desc'].value.trim();
      const author = inputs['pkg-author'].value.trim();
      const main = inputs['pkg-main'].value.trim() || 'index.js';
      const repo = inputs['pkg-repo'].value.trim();
      const keywords = inputs['pkg-keywords'].value.trim();

      pkg.name = name;
      pkg.version = version;
      if (desc) pkg.description = desc;
      if (privToggle.checked) pkg.private = true;
      if (modToggle.checked) pkg.type = 'module';
      pkg.main = main;
      if (scriptsToggle.checked) pkg.scripts = { start: 'node ' + main, test: 'echo "Error: no test specified" && exit 1', build: 'node build.js' };
      if (keywords) pkg.keywords = keywords.split(',').map(k => k.trim()).filter(Boolean);
      if (author) pkg.author = author;
      pkg.license = licPicker.value;
      if (repo) pkg.repository = { type: 'git', url: repo };
      pkg.engines = { node: '>=16.0.0' };

      resultBox(container, JSON.stringify(pkg, null, 2));
    }
    generate();
  };

  // ── Favicon Generator ──
  toolBuilders.favicogen = (container) => {
    const textFg = el('div', { className: 'form-group' });
    textFg.appendChild(el('label', { textContent: 'Text / Emoji (1-2 chars)' }));
    const textInput = el('input', { className: 'glass-input', placeholder: 'Fx', maxlength: '2', value: 'Fx' });
    textFg.appendChild(textInput);
    container.appendChild(textFg);

    const bgFg = el('div', { className: 'form-group' });
    bgFg.appendChild(el('label', { textContent: 'Background Color' }));
    const bgPicker = glassPicker('fav-bg', ['#007AFF','#34C759','#FF3B30','#FF9500','#AF52DE','#1C1C1E','#FFFFFF','#F2F2F7','#000000','#5856D6'], '#007AFF');
    bgFg.appendChild(bgPicker.wrapper);
    container.appendChild(bgFg);

    const fgFg = el('div', { className: 'form-group' });
    fgFg.appendChild(el('label', { textContent: 'Text Color' }));
    const fgPicker = glassPicker('fav-fg', ['#FFFFFF','#000000','#1C1C1E','#007AFF','#FF3B30','#34C759','#FF9500','#AF52DE'], '#FFFFFF');
    fgFg.appendChild(fgPicker.wrapper);
    container.appendChild(fgFg);

    const { group: sizeGroup, input: sizeSlider, label: sizeLabel } = lgSlider('fav-size', 8, 28, 18, 'fav-size-label', render);
    sizeLabel.textContent = 'Font Size: 18px';
    container.appendChild(sizeGroup);

    const previewWrap = el('div', { style: 'display:flex;align-items:center;gap:16px;margin:12px 0' });
    const canvas = el('canvas', { width: '64', height: '64', style: 'border-radius:12px;width:64px;height:64px' });
    previewWrap.appendChild(canvas);
    const canvas32 = el('canvas', { width: '32', height: '32', style: 'border-radius:8px;width:32px;height:32px' });
    previewWrap.appendChild(canvas32);
    const canvas16 = el('canvas', { width: '16', height: '16', style: 'border-radius:4px;width:16px;height:16px' });
    previewWrap.appendChild(canvas16);
    container.appendChild(previewWrap);

    const dlRow = el('div', { className: 'tool-row' });
    const dl32 = el('button', { className: 'glass-btn', textContent: 'Download 32x32 PNG', onClick: () => download(32) });
    const dl64 = el('button', { className: 'glass-btn glass-btn-secondary', textContent: 'Download 64x64 PNG', onClick: () => download(64) });
    dlRow.appendChild(dl32);
    dlRow.appendChild(dl64);
    container.appendChild(dlRow);

    function render() {
      sizeLabel.textContent = `Font Size: ${sizeSlider.value}px`;
      const text = textInput.value || 'Fx';
      const bg = bgPicker.value;
      const fg2 = fgPicker.value;
      const fontSize = parseInt(sizeSlider.value, 10);
      [canvas, canvas32, canvas16].forEach(cv => {
        const s = parseInt(cv.width);
        const ctx = cv.getContext('2d');
        ctx.clearRect(0, 0, s, s);
        ctx.fillStyle = bg;
        const r = s * 0.18;
        ctx.beginPath();
        ctx.moveTo(r, 0); ctx.lineTo(s - r, 0); ctx.quadraticCurveTo(s, 0, s, r);
        ctx.lineTo(s, s - r); ctx.quadraticCurveTo(s, s, s - r, s);
        ctx.lineTo(r, s); ctx.quadraticCurveTo(0, s, 0, s - r);
        ctx.lineTo(0, r); ctx.quadraticCurveTo(0, 0, r, 0);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = fg2;
        const scaledFont = Math.round(fontSize * s / 64);
        ctx.font = `bold ${scaledFont}px system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text.slice(0, 2), s / 2, s / 2 + scaledFont * 0.05);
      });
    }

    function download(size) {
      const cv = size === 32 ? canvas32 : canvas;
      if (size === 64) { render(); }
      const a = el('a', { download: `favicon-${size}x${size}.png`, href: cv.toDataURL('image/png') });
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
    }

    textInput.addEventListener('input', render);
    bgPicker.wrapper.addEventListener('click', () => setTimeout(render, 10));
    fgPicker.wrapper.addEventListener('click', () => setTimeout(render, 10));
    render();
  };

  // ── SRI Hash Generator ──
  toolBuilders.srihash = (container) => {
    const urlFg = el('div', { className: 'form-group' });
    urlFg.appendChild(el('label', { textContent: 'URL or Paste Content' }));
    const urlInput = el('input', { className: 'glass-input', placeholder: 'https://cdn.example.com/script.js or paste content below' });
    urlFg.appendChild(urlInput);
    container.appendChild(urlFg);

    const contentFg = el('div', { className: 'form-group' });
    contentFg.appendChild(el('label', { textContent: 'Paste Content (optional, used if URL is empty)' }));
    const contentArea = el('textarea', { className: 'glass-textarea', placeholder: 'Paste file content here...', rows: '4' });
    contentFg.appendChild(contentArea);
    container.appendChild(contentFg);

    const algoFg = el('div', { className: 'form-group' });
    algoFg.appendChild(el('label', { textContent: 'Hash Algorithm' }));
    const algoPicker = glassPicker('sri-algo', ['sha256','sha384','sha512'], 'sha384');
    algoFg.appendChild(algoPicker.wrapper);
    container.appendChild(algoFg);

    const tagFg = el('div', { className: 'form-group' });
    tagFg.appendChild(el('label', { textContent: 'Tag Type' }));
    const tagPicker = glassPicker('sri-tag', ['<script>','<link rel="stylesheet">','Hash only'], '<script>');
    tagFg.appendChild(tagPicker.wrapper);
    container.appendChild(tagFg);

    const genBtn = el('button', { className: 'glass-btn', style: 'width:100%;margin-top:8px', textContent: 'Generate SRI Hash', onClick: generate });
    container.appendChild(genBtn);

    async function hashContent(content) {
      const algo = algoPicker.value.toUpperCase().replace('SHA', 'SHA-');
      const encoded = new TextEncoder().encode(content);
      const buf = await crypto.subtle.digest(algo, encoded);
      const b64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
      return `${algoPicker.value}-${b64}`;
    }

    async function generate() {
      const url = urlInput.value.trim();
      const content = contentArea.value;
      let textContent = content;
      let srcUrl = url;

      if (url && !content) {
        try {
          const resp = await fetch(url);
          if (!resp.ok) throw new Error('HTTP ' + resp.status);
          textContent = await resp.text();
        } catch (e) {
          resultBox(container, 'Error fetching URL: ' + e.message + '\n\nNote: URL must support CORS. Paste content directly as an alternative.');
          return;
        }
      }
      if (!textContent) { resultBox(container, 'Enter a URL or paste content'); return; }

      try {
        const integrity = await hashContent(textContent);
        const tag = tagPicker.value;
        let output = `integrity="${integrity}"\ncrossorigin="anonymous"`;
        if (tag === '<script>') {
          output = `<script\n  src="${srcUrl || 'https://cdn.example.com/script.js'}"\n  integrity="${integrity}"\n  crossorigin="anonymous"\n><\/script>`;
        } else if (tag === '<link rel="stylesheet">') {
          output = `<link\n  rel="stylesheet"\n  href="${srcUrl || 'https://cdn.example.com/style.css'}"\n  integrity="${integrity}"\n  crossorigin="anonymous"\n>`;
        }
        resultBox(container, output);
      } catch (e) {
        resultBox(container, 'Error: ' + e.message);
      }
    }
  };

  // ── CSP Header Builder ──
  toolBuilders.cspbuilder = (container) => {
    const directives = [
      { key: 'default-src',  label: 'default-src',  defaultVal: "'self'",   checked: true },
      { key: 'script-src',   label: 'script-src',   defaultVal: "'self'",   checked: true },
      { key: 'style-src',    label: 'style-src',    defaultVal: "'self'",   checked: true },
      { key: 'img-src',      label: 'img-src',      defaultVal: "'self' data:", checked: true },
      { key: 'font-src',     label: 'font-src',     defaultVal: "'self'",   checked: false },
      { key: 'connect-src',  label: 'connect-src',  defaultVal: "'self'",   checked: false },
      { key: 'frame-src',    label: 'frame-src',    defaultVal: "'none'",   checked: false },
      { key: 'object-src',   label: 'object-src',   defaultVal: "'none'",   checked: false },
      { key: 'media-src',    label: 'media-src',    defaultVal: "'self'",   checked: false },
      { key: 'worker-src',   label: 'worker-src',   defaultVal: "'self'",   checked: false },
      { key: 'form-action',  label: 'form-action',  defaultVal: "'self'",   checked: false },
      { key: 'frame-ancestors', label: 'frame-ancestors', defaultVal: "'none'", checked: false },
      { key: 'base-uri',     label: 'base-uri',     defaultVal: "'self'",   checked: false },
      { key: 'upgrade-insecure-requests', label: 'upgrade-insecure-requests', defaultVal: '', checked: false },
    ];

    const toggleMap = {};
    const inputMap = {};

    directives.forEach(d => {
      const row = el('div', { className: 'tool-row', style: 'align-items:center;gap:8px;margin-bottom:6px;flex-wrap:wrap' });
      const { row: togRow, input: togInput } = iosToggle('csp-' + d.key, d.label, d.checked, buildCSP);
      toggleMap[d.key] = togInput;
      row.appendChild(togRow);
      if (d.defaultVal !== '') {
        const inp = el('input', { className: 'glass-input', placeholder: d.defaultVal, value: d.defaultVal, style: 'flex:1;min-width:180px;margin-top:4px' });
        inp.addEventListener('input', buildCSP);
        inputMap[d.key] = inp;
        row.appendChild(inp);
      }
      container.appendChild(row);
    });

    const modeFg = el('div', { className: 'form-group', style: 'margin-top:8px' });
    modeFg.appendChild(el('label', { textContent: 'Report Mode' }));
    const modePicker = glassPicker('csp-mode', ['Content-Security-Policy','Content-Security-Policy-Report-Only'], 'Content-Security-Policy');
    modeFg.appendChild(modePicker.wrapper);
    container.appendChild(modeFg);

    modePicker.wrapper.addEventListener('click', () => setTimeout(buildCSP, 10));

    function buildCSP() {
      const parts = [];
      directives.forEach(d => {
        if (!toggleMap[d.key] || !toggleMap[d.key].checked) return;
        if (d.defaultVal === '') { parts.push(d.key); return; }
        const val = inputMap[d.key] ? inputMap[d.key].value.trim() : d.defaultVal;
        parts.push(`${d.key} ${val}`);
      });
      if (!parts.length) { resultBox(container, '# Enable at least one directive above'); return; }
      const header = `${modePicker.value}: ${parts.join('; ')}`;
      resultBox(container, header);
    }
    buildCSP();
  };

  // ── HTTP Header Parser ──
  toolBuilders.httpheaders = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Paste Raw HTTP Headers' }));
    const textarea = el('textarea', { className: 'glass-textarea', rows: '8', placeholder: 'HTTP/1.1 200 OK\nContent-Type: text/html; charset=UTF-8\nStrict-Transport-Security: max-age=31536000\nX-Frame-Options: SAMEORIGIN\n...' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const parseBtn = el('button', { className: 'glass-btn', style: 'width:100%;margin-top:4px', textContent: 'Parse Headers', onClick: parse });
    container.appendChild(parseBtn);

    const outputDiv = el('div', { style: 'margin-top:12px' });
    container.appendChild(outputDiv);

    const securityHeaders = {
      'strict-transport-security': { name: 'HSTS', pass: v => v.includes('max-age'), tip: 'Should include max-age' },
      'content-security-policy': { name: 'CSP', pass: v => v.length > 0, tip: 'CSP header present' },
      'x-frame-options': { name: 'X-Frame-Options', pass: v => /DENY|SAMEORIGIN/i.test(v), tip: 'Should be DENY or SAMEORIGIN' },
      'x-content-type-options': { name: 'X-Content-Type-Options', pass: v => /nosniff/i.test(v), tip: 'Should be nosniff' },
      'referrer-policy': { name: 'Referrer-Policy', pass: v => v.length > 0, tip: 'Should be set' },
      'permissions-policy': { name: 'Permissions-Policy', pass: v => v.length > 0, tip: 'Should be set' },
      'x-xss-protection': { name: 'X-XSS-Protection', pass: v => /1/.test(v), tip: 'Deprecated; use CSP instead' },
      'cache-control': { name: 'Cache-Control', pass: v => v.length > 0, tip: 'Should define caching policy' },
      'content-security-policy-report-only': { name: 'CSP-RO', pass: v => v.length > 0, tip: 'Report-Only CSP present' },
    };

    const requiredSecurity = ['strict-transport-security','content-security-policy','x-frame-options','x-content-type-options','referrer-policy','permissions-policy'];

    function parse() {
      const raw = textarea.value.trim();
      if (!raw) return;
      outputDiv.innerHTML = '';

      const lines = raw.split('\n');
      const parsed = [];

      lines.forEach(line => {
        const colonIdx = line.indexOf(':');
        if (colonIdx > 0) {
          const name = line.slice(0, colonIdx).trim();
          const value = line.slice(colonIdx + 1).trim();
          parsed.push({ name, value, lname: name.toLowerCase() });
        } else if (line.trim()) {
          parsed.push({ name: line.trim(), value: '', lname: line.trim().toLowerCase(), isStatus: true });
        }
      });

      if (!parsed.length) { outputDiv.textContent = 'No headers found'; return; }

      // Status line
      const statusLine = parsed.find(h => h.isStatus);
      if (statusLine) {
        const statusEl = el('div', { style: 'margin-bottom:12px;font-weight:600;font-size:1.05em' });
        statusEl.textContent = statusLine.name;
        outputDiv.appendChild(statusEl);
      }

      // Header table
      const table = el('div', { style: 'display:grid;gap:2px;margin-bottom:16px' });
      parsed.filter(h => !h.isStatus).forEach(h => {
        const sec = securityHeaders[h.lname];
        const row = el('div', { style: 'display:grid;grid-template-columns:200px 1fr auto;gap:8px;align-items:start;padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.05)' });
        const nameEl = el('span', { style: 'font-weight:600;word-break:break-all;font-size:0.85em' });
        nameEl.textContent = h.name;
        const valEl = el('span', { style: 'font-size:0.82em;opacity:0.85;word-break:break-all' });
        valEl.textContent = h.value;
        const badge = el('span', { style: 'font-size:0.75em;font-weight:700;padding:2px 8px;border-radius:6px;white-space:nowrap' });
        if (sec) {
          const passing = sec.pass(h.value);
          badge.textContent = passing ? 'PASS' : 'WARN';
          badge.style.background = passing ? 'rgba(52,199,89,0.25)' : 'rgba(255,149,0,0.25)';
          badge.style.color = passing ? '#34C759' : '#FF9500';
          badge.title = sec.tip;
        }
        row.appendChild(nameEl);
        row.appendChild(valEl);
        row.appendChild(badge);
        table.appendChild(row);
      });
      outputDiv.appendChild(table);

      // Security audit
      const auditLabel = el('div', { style: 'font-weight:600;margin-bottom:8px;margin-top:4px' });
      auditLabel.textContent = 'Security Audit';
      outputDiv.appendChild(auditLabel);

      const auditGrid = el('div', { style: 'display:grid;gap:4px' });
      const presentKeys = new Set(parsed.map(h => h.lname));

      requiredSecurity.forEach(key => {
        const sec = securityHeaders[key];
        const present = presentKeys.has(key);
        const header = parsed.find(h => h.lname === key);
        const passing = present && header && sec.pass(header.value);

        const row = el('div', { style: 'display:flex;align-items:center;gap:10px;padding:6px 10px;border-radius:8px;background:rgba(255,255,255,0.04)' });
        const icon = el('span', { style: `font-size:1em;font-weight:700;color:${passing ? '#34C759' : '#FF3B30'}` });
        icon.textContent = passing ? '✓' : '✗';
        const txt = el('span', { style: 'font-size:0.85em;flex:1' });
        txt.textContent = sec.name;
        const tip = el('span', { style: 'font-size:0.75em;opacity:0.6' });
        tip.textContent = present ? sec.tip : 'Missing';
        row.appendChild(icon);
        row.appendChild(txt);
        row.appendChild(tip);
        auditGrid.appendChild(row);
      });

      const score = requiredSecurity.filter(key => {
        const present = presentKeys.has(key);
        const header = parsed.find(h => h.lname === key);
        return present && header && securityHeaders[key].pass(header.value);
      }).length;

      outputDiv.appendChild(auditGrid);

      const scoreLine = el('div', { style: 'margin-top:10px;font-weight:600;font-size:0.9em;text-align:center;padding:8px;border-radius:10px;background:rgba(255,255,255,0.06)' });
      scoreLine.textContent = `Security Score: ${score}/${requiredSecurity.length} headers passing`;
      outputDiv.appendChild(scoreLine);
    }
  };

  // ── Fake Data Generator ──
  toolBuilders.fakedata = (container) => {
    const typeFg = el('div', { className: 'form-group' });
    typeFg.appendChild(el('label', { textContent: 'Data Type' }));
    const typePicker = glassPicker('fd-type', ['Name', 'Email', 'Phone', 'Address', 'Company', 'Date', 'UUID', 'IP Address', 'Credit Card', 'URL'], 'Name', null);
    typeFg.appendChild(typePicker.wrapper);
    container.appendChild(typeFg);

    const { group: cntGroup, input: cntSlider, label: cntLabel } = lgSlider('fd-count', 1, 50, 10, 'fd-count-label', () => { cntLabel.textContent = `Count: ${cntSlider.value}`; });
    cntLabel.textContent = 'Count: 10';
    container.appendChild(cntGroup);

    const genBtn = el('button', { className: 'glass-btn', style: 'width:100%', textContent: 'Generate', onClick: generate });
    container.appendChild(genBtn);

    const firstNames = ['James','Mary','John','Patricia','Robert','Jennifer','Michael','Linda','William','Barbara','David','Susan','Richard','Jessica','Joseph','Sarah','Thomas','Karen','Charles','Lisa','Christopher','Nancy','Daniel','Betty','Matthew','Margaret','Anthony','Sandra','Mark','Ashley','Donald','Kimberly','Steven','Emily','Paul','Donna','Andrew','Michelle','Kenneth','Dorothy'];
    const lastNames = ['Smith','Johnson','Williams','Brown','Jones','Garcia','Miller','Davis','Rodriguez','Martinez','Hernandez','Lopez','Gonzalez','Wilson','Anderson','Thomas','Taylor','Moore','Jackson','Martin','Lee','Perez','Thompson','White','Harris','Sanchez','Clark','Ramirez','Lewis','Robinson'];
    const domains = ['gmail.com','yahoo.com','outlook.com','icloud.com','proton.me','fastmail.com','hotmail.com','live.com'];
    const streets = ['Main St','Oak Ave','Maple Dr','Cedar Ln','Pine Rd','Elm St','Washington Blvd','Lake View Dr','Hillside Ave','Park Way'];
    const cities = ['New York','Los Angeles','Chicago','Houston','Phoenix','Philadelphia','San Antonio','San Diego','Dallas','San Jose'];
    const states = ['NY','CA','IL','TX','AZ','PA','TX','CA','TX','CA'];
    const companies = ['Acme Corp','Globex Inc','Initech','Umbrella Ltd','Stark Industries','Wayne Enterprises','Hooli','Pied Piper','Dunder Mifflin','Massive Dynamic'];
    const tlds = ['com','net','org','io','co','dev','app'];

    function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
    function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
    function uuidv4() { return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16); }); }

    function generateOne(type) {
      const fn = rand(firstNames), ln = rand(lastNames);
      switch (type) {
        case 'Name': return `${fn} ${ln}`;
        case 'Email': return `${fn.toLowerCase()}.${ln.toLowerCase()}${randInt(1,99)}@${rand(domains)}`;
        case 'Phone': return `+1 (${randInt(200,999)}) ${randInt(200,999)}-${randInt(1000,9999)}`;
        case 'Address': return `${randInt(100,9999)} ${rand(streets)}, ${rand(cities)}, ${rand(states)} ${randInt(10000,99999)}`;
        case 'Company': return rand(companies);
        case 'Date': { const d = new Date(Date.now() - Math.random() * 315e10); return d.toISOString().slice(0,10); }
        case 'UUID': return uuidv4();
        case 'IP Address': return `${randInt(1,254)}.${randInt(0,255)}.${randInt(0,255)}.${randInt(1,254)}`;
        case 'Credit Card': { const p = rand(['4','5','37','6011']); const rest = Array.from({length: 15 - p.length + 1}, () => randInt(0,9)).join(''); return `${p}${rest}`.replace(/(.{4})/g,'$1 ').trim(); }
        case 'URL': return `https://${fn.toLowerCase()}${ln.toLowerCase()}.${rand(tlds)}/${rand(['about','products','services','blog','contact'])}`;
        default: return '';
      }
    }

    function generate() {
      const type = typePicker.value;
      const count = parseInt(cntSlider.value, 10);
      const results = Array.from({ length: count }, () => generateOne(type)).join('\n');
      resultBox(container, results);
    }
    generate();
  };

  // ── Barcode Generator ──
  toolBuilders.barcodegen = (container) => {
    const valFg = el('div', { className: 'form-group' });
    valFg.appendChild(el('label', { textContent: 'Value' }));
    const valInput = el('input', { className: 'glass-input', placeholder: 'Enter barcode value...', value: '012345678905' });
    valFg.appendChild(valInput);
    container.appendChild(valFg);

    const typeFg = el('div', { className: 'form-group' });
    typeFg.appendChild(el('label', { textContent: 'Barcode Type' }));
    const typePicker = glassPicker('bc-type', ['Code 128', 'EAN-13', 'EAN-8', 'UPC-A'], 'EAN-13', () => renderBarcode());
    typeFg.appendChild(typePicker.wrapper);
    container.appendChild(typeFg);

    const canvasWrap = el('div', { style: 'display:flex;flex-direction:column;align-items:center;gap:12px;padding:20px 0' });
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'border-radius:8px;background:#fff;padding:16px;max-width:100%';
    canvasWrap.appendChild(canvas);
    container.appendChild(canvasWrap);

    const btnRow = el('div', { className: 'tool-row' });
    btnRow.appendChild(el('button', { className: 'glass-btn', textContent: 'Generate', onClick: renderBarcode }));
    btnRow.appendChild(el('button', { className: 'glass-btn-secondary', textContent: 'Download PNG', onClick: () => {
      const a = document.createElement('a'); a.download = 'barcode.png'; a.href = canvas.toDataURL(); a.click();
    }}));
    container.appendChild(btnRow);

    function encodeCode128(text) {
      // Code 128B encoding
      const startB = 104, stop = 106;
      let bars = [startB]; let checksum = startB;
      for (let i = 0; i < text.length; i++) { const v = text.charCodeAt(i) - 32; bars.push(v); checksum += v * (i + 1); }
      bars.push(checksum % 103); bars.push(stop);
      // Code128 bar widths (subset B, indices 0-106 + stop)
      const patterns = ['212222','222122','222221','121223','121322','131222','122213','122312','132212','221213','221312','231212','112232','122132','122231','113222','123122','123221','223211','221132','221231','213212','223112','312131','311222','321122','321221','312212','322112','322211','212123','212321','232121','111323','131123','131321','112313','132113','111221','111221','111122','211312','211321','231112','112132','112321','132112','111212','122112','311132','311221','221113','211213','211312','211321','221123','221222','211411','221311','231211','112133','112231','113123','113221','223121','311213','312113','312311','332111','314111','221411','431111','111224','111422','121124','121421','141122','141221','112214','112412','122114','122411','142112','142211','241211','221114','213111','241112','134111','111242','121142','121241','114212','124112','124211','411212','421112','421211','212141','214121','412121','111143','111341','131141','114113','114311','411113','411311','113141','114131','311141','411131','211412','211214','211232','23311120'];
      return { bars, patterns };
    }

    function renderBarcode() {
      const value = valInput.value.trim();
      const type = typePicker.value;
      if (!value) return;
      const ctx = canvas.getContext('2d');
      const barW = 2, height = 100, margin = 20;

      if (type === 'Code 128') {
        const { bars, patterns } = encodeCode128(value);
        let totalBars = 0;
        bars.forEach(b => { const p = patterns[b] || ''; for (const ch of p) totalBars += parseInt(ch, 10) || 1; });
        canvas.width = totalBars * barW + margin * 2;
        canvas.height = height + 30;
        ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        let x = margin;
        bars.forEach(b => {
          const p = patterns[b] || '';
          let isBar = true;
          for (const ch of p) {
            const w = (parseInt(ch, 10) || 1) * barW;
            if (isBar) { ctx.fillStyle = '#000'; ctx.fillRect(x, 5, w, height); }
            x += w; isBar = !isBar;
          }
        });
        ctx.fillStyle = '#000'; ctx.font = '12px monospace'; ctx.textAlign = 'center';
        ctx.fillText(value, canvas.width / 2, height + 22);
      } else {
        // EAN/UPC — draw simplified version
        const digits = value.replace(/\D/g, '');
        const expected = { 'EAN-13': 13, 'EAN-8': 8, 'UPC-A': 12 };
        const len = expected[type];
        const padded = digits.padEnd(len, '0').slice(0, len);

        // EAN-13 encoding tables
        const L = ['0001101','0011001','0010011','0111101','0100011','0110001','0101111','0111011','0110111','0001011'];
        const G = ['0100111','0110011','0011011','0100001','0011101','0111001','0000101','0010001','0001001','0010111'];
        const R = ['1110010','1100110','1101100','1000010','1011100','1001110','1010000','1000100','1001000','1110100'];
        const parities = { 'EAN-13': ['LLLLLL','LLGLGG','LLGGLG','LLGGGL','LGLLGG','LGGLLG','LGGGLL','LGLGLG','LGLGGL','LGGLGL'], 'EAN-8': null, 'UPC-A': null };

        let code = '';
        if (type === 'EAN-13') {
          const first = parseInt(padded[0], 10);
          const parity = parities['EAN-13'][first];
          code = '101'; // start
          for (let i = 1; i <= 6; i++) { const d = parseInt(padded[i], 10); code += parity[i-1] === 'L' ? L[d] : G[d]; }
          code += '01010'; // middle
          for (let i = 7; i <= 12; i++) { code += R[parseInt(padded[i], 10)]; }
          code += '101'; // end
        } else if (type === 'EAN-8') {
          code = '101';
          for (let i = 0; i < 4; i++) code += L[parseInt(padded[i], 10)];
          code += '01010';
          for (let i = 4; i < 8; i++) code += R[parseInt(padded[i], 10)];
          code += '101';
        } else { // UPC-A
          code = '101';
          for (let i = 0; i < 6; i++) code += L[parseInt(padded[i], 10)];
          code += '01010';
          for (let i = 6; i < 12; i++) code += R[parseInt(padded[i], 10)];
          code += '101';
        }

        canvas.width = code.length * barW + margin * 2;
        canvas.height = height + 30;
        ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < code.length; i++) {
          if (code[i] === '1') { ctx.fillStyle = '#000'; ctx.fillRect(margin + i * barW, 5, barW, height); }
        }
        ctx.fillStyle = '#000'; ctx.font = '12px monospace'; ctx.textAlign = 'center';
        ctx.fillText(padded, canvas.width / 2, height + 22);
      }
    }
    valInput.addEventListener('input', renderBarcode);
    renderBarcode();
  };

  // ── SVG Pattern Generator ──
  toolBuilders.svgpattern = (container) => {
    const typeFg = el('div', { className: 'form-group' });
    typeFg.appendChild(el('label', { textContent: 'Pattern Type' }));
    const typePicker = glassPicker('svgp-type', ['dots', 'lines', 'crosses', 'chevrons', 'waves', 'grid'], 'dots', () => update());
    typeFg.appendChild(typePicker.wrapper);
    container.appendChild(typeFg);

    const { group: sizeGroup, input: sizeSlider, label: sizeLabel } = lgSlider('svgp-size', 2, 40, 10, 'svgp-size-label', () => { sizeLabel.textContent = `Size: ${sizeSlider.value}px`; update(); });
    sizeLabel.textContent = 'Size: 10px';
    container.appendChild(sizeGroup);

    const { group: spGroup, input: spSlider, label: spLabel } = lgSlider('svgp-spacing', 4, 80, 20, 'svgp-sp-label', () => { spLabel.textContent = `Spacing: ${spSlider.value}px`; update(); });
    spLabel.textContent = 'Spacing: 20px';
    container.appendChild(spGroup);

    const colorRow = el('div', { className: 'tool-row' });
    const fgColorFg = el('div', { className: 'form-group', style: 'flex:1' });
    fgColorFg.appendChild(el('label', { textContent: 'Pattern Color' }));
    const fgColor = el('input', { type: 'color', className: 'ios-color-picker', value: '#6366f1' });
    fgColor.addEventListener('input', update);
    fgColorFg.appendChild(fgColor);
    const bgColorFg = el('div', { className: 'form-group', style: 'flex:1' });
    bgColorFg.appendChild(el('label', { textContent: 'Background' }));
    const bgColor = el('input', { type: 'color', className: 'ios-color-picker', value: '#ffffff' });
    bgColor.addEventListener('input', update);
    bgColorFg.appendChild(bgColor);
    colorRow.appendChild(fgColorFg);
    colorRow.appendChild(bgColorFg);
    container.appendChild(colorRow);

    const preview = el('div', { style: 'width:100%;height:160px;border-radius:12px;margin:16px 0;border:1px solid rgba(255,255,255,0.15);overflow:hidden' });
    container.appendChild(preview);

    const codeFg = el('div', { className: 'form-group' });
    codeFg.appendChild(el('label', { textContent: 'SVG Code' }));
    const codeArea = el('textarea', { className: 'glass-input', rows: '5', style: 'width:100%;font-family:monospace;font-size:0.8em;resize:vertical', readOnly: 'true' });
    codeFg.appendChild(codeArea);
    container.appendChild(codeFg);

    const copyBtn = el('button', { className: 'glass-btn-secondary', textContent: 'Copy SVG', onClick: () => {
      navigator.clipboard.writeText(codeArea.value);
      copyBtn.textContent = 'Copied!'; setTimeout(() => copyBtn.textContent = 'Copy SVG', 1500);
    }});
    container.appendChild(copyBtn);

    function buildPattern(type, size, spacing, fg, bg) {
      const s = spacing, h = size;
      let patternContent = '';
      if (type === 'dots') {
        patternContent = `<circle cx="${s/2}" cy="${s/2}" r="${h/2}" fill="${fg}"/>`;
      } else if (type === 'lines') {
        patternContent = `<line x1="0" y1="${s/2}" x2="${s}" y2="${s/2}" stroke="${fg}" stroke-width="${h}"/>`;
      } else if (type === 'crosses') {
        patternContent = `<line x1="${s/2}" y1="${s/2-h}" x2="${s/2}" y2="${s/2+h}" stroke="${fg}" stroke-width="2"/><line x1="${s/2-h}" y1="${s/2}" x2="${s/2+h}" y2="${s/2}" stroke="${fg}" stroke-width="2"/>`;
      } else if (type === 'chevrons') {
        patternContent = `<polyline points="0,${s/2} ${s/2},0 ${s},${s/2}" fill="none" stroke="${fg}" stroke-width="${Math.max(1,h/4)}"/>`;
      } else if (type === 'waves') {
        patternContent = `<path d="M0 ${s/2} Q ${s/4} ${s/2-h} ${s/2} ${s/2} T ${s} ${s/2}" fill="none" stroke="${fg}" stroke-width="${Math.max(1,h/4)}"/>`;
      } else { // grid
        patternContent = `<path d="M${s} 0 L0 0 0 ${s}" fill="none" stroke="${fg}" stroke-width="${Math.max(1,h/5)}"/>`;
      }
      return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="${bg}"/><defs><pattern id="p" x="0" y="0" width="${s}" height="${s}" patternUnits="userSpaceOnUse">${patternContent}</pattern></defs><rect width="200" height="200" fill="url(#p)"/></svg>`;
    }

    function update() {
      const svg = buildPattern(typePicker.value, parseInt(sizeSlider.value), parseInt(spSlider.value), fgColor.value, bgColor.value);
      const encoded = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
      preview.style.backgroundImage = `url("${encoded}")`;
      preview.style.backgroundSize = 'cover';
      codeArea.value = svg;
    }
    update();
  };

  // ── Credit Card Test Numbers ──
  toolBuilders.testcards = (container) => {
    const cards = [
      { brand: 'Visa', number: '4111111111111111', type: 'Valid', cvv: '123', exp: '12/26' },
      { brand: 'Visa', number: '4000000000000002', type: 'Declined', cvv: '123', exp: '12/26' },
      { brand: 'Visa', number: '4000000000009995', type: 'Insufficient Funds', cvv: '123', exp: '12/26' },
      { brand: 'Mastercard', number: '5555555555554444', type: 'Valid', cvv: '123', exp: '12/26' },
      { brand: 'Mastercard', number: '5105105105105100', type: 'Valid', cvv: '123', exp: '12/26' },
      { brand: 'Mastercard', number: '5200828282828210', type: 'Valid', cvv: '123', exp: '12/26' },
      { brand: 'Amex', number: '378282246310005', type: 'Valid', cvv: '1234', exp: '12/26' },
      { brand: 'Amex', number: '371449635398431', type: 'Valid', cvv: '1234', exp: '12/26' },
      { brand: 'Discover', number: '6011111111111117', type: 'Valid', cvv: '123', exp: '12/26' },
      { brand: 'Discover', number: '6011000990139424', type: 'Valid', cvv: '123', exp: '12/26' },
      { brand: 'JCB', number: '3530111333300000', type: 'Valid', cvv: '123', exp: '12/26' },
      { brand: 'JCB', number: '3566002020360505', type: 'Valid', cvv: '123', exp: '12/26' },
      { brand: 'Diners', number: '30569309025904', type: 'Valid', cvv: '123', exp: '12/26' },
      { brand: 'Diners', number: '38520000023237', type: 'Valid', cvv: '123', exp: '12/26' },
      { brand: 'UnionPay', number: '6200000000000005', type: 'Valid', cvv: '123', exp: '12/26' },
    ];

    const brandColors = { Visa: '#1a1f71', Mastercard: '#eb001b', Amex: '#007bc1', Discover: '#ff6600', JCB: '#003087', Diners: '#004a97', UnionPay: '#c0271e' };

    const note = el('div', { style: 'font-size:0.8em;opacity:0.6;margin-bottom:14px' });
    note.textContent = 'Use any future expiry date. CVV shown is typical for testing. These numbers pass Luhn check.';
    container.appendChild(note);

    const table = el('div', { style: 'display:grid;gap:6px' });

    const header = el('div', { style: 'display:grid;grid-template-columns:90px 1fr 100px 60px 50px;gap:8px;padding:6px 10px;font-weight:600;font-size:0.78em;opacity:0.7;text-transform:uppercase;letter-spacing:0.04em' });
    ['Brand','Number','Type','CVV',''].forEach(h => { const c = el('div', { textContent: h }); header.appendChild(c); });
    table.appendChild(header);

    cards.forEach(card => {
      const row = el('div', { style: 'display:grid;grid-template-columns:90px 1fr 100px 60px 50px;gap:8px;align-items:center;padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);font-size:0.85em' });

      const brandDot = el('div', { style: 'display:flex;align-items:center;gap:6px' });
      const dot = el('span', { style: `width:8px;height:8px;border-radius:50%;background:${brandColors[card.brand] || '#888'};flex-shrink:0;display:inline-block` });
      brandDot.appendChild(dot);
      brandDot.appendChild(document.createTextNode(card.brand));

      const numEl = el('div', { style: 'font-family:monospace;letter-spacing:0.05em' });
      numEl.textContent = card.number;

      const typeEl = el('div');
      const badge = el('span', { style: `font-size:0.75em;padding:2px 7px;border-radius:10px;background:${card.type === 'Valid' ? 'rgba(52,199,89,0.2)' : 'rgba(255,59,48,0.2)'};color:${card.type === 'Valid' ? '#34c759' : '#ff3b30'}` });
      badge.textContent = card.type;
      typeEl.appendChild(badge);

      const cvvEl = el('div', { style: 'font-family:monospace;opacity:0.7' });
      cvvEl.textContent = card.cvv;

      const copyBtn = el('button', { className: 'glass-btn-secondary', style: 'font-size:0.75em;padding:3px 8px', textContent: 'Copy', onClick: () => {
        navigator.clipboard.writeText(card.number);
        copyBtn.textContent = 'Done!'; setTimeout(() => copyBtn.textContent = 'Copy', 1500);
      }});

      row.appendChild(brandDot); row.appendChild(numEl); row.appendChild(typeEl); row.appendChild(cvvEl); row.appendChild(copyBtn);
      table.appendChild(row);
    });

    container.appendChild(table);
  };

  // ── CSS Animation Builder ──
  toolBuilders.cssanim = (container) => {
    const typeFg = el('div', { className: 'form-group' });
    typeFg.appendChild(el('label', { textContent: 'Animation Type' }));
    const typePicker = glassPicker('ca-type', ['fade', 'slide', 'bounce', 'rotate', 'pulse', 'shake'], 'fade', () => update());
    typeFg.appendChild(typePicker.wrapper);
    container.appendChild(typeFg);

    const { group: durGroup, input: durSlider, label: durLabel } = lgSlider('ca-dur', 1, 50, 10, 'ca-dur-label', () => { durLabel.textContent = `Duration: ${(durSlider.value / 10).toFixed(1)}s`; update(); });
    durLabel.textContent = 'Duration: 1.0s';
    container.appendChild(durGroup);

    const { group: delGroup, input: delSlider, label: delLabel } = lgSlider('ca-del', 0, 30, 0, 'ca-del-label', () => { delLabel.textContent = `Delay: ${(delSlider.value / 10).toFixed(1)}s`; update(); });
    delLabel.textContent = 'Delay: 0.0s';
    container.appendChild(delGroup);

    const { group: itGroup, input: itSlider, label: itLabel } = lgSlider('ca-iter', 1, 20, 3, 'ca-iter-label', () => { itLabel.textContent = `Iterations: ${itSlider.value === '20' ? 'infinite' : itSlider.value}`; update(); });
    itLabel.textContent = 'Iterations: 3';
    container.appendChild(itGroup);

    const { row: dirRow, input: dirInput } = iosToggle('ca-dir', 'Alternate Direction', false, () => update());
    container.appendChild(dirRow);

    const previewWrap = el('div', { style: 'display:flex;justify-content:center;padding:32px 16px;margin:16px 0' });
    const previewBox = el('div', { style: 'width:80px;height:80px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:16px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.85em;font-weight:600' });
    previewBox.textContent = 'Preview';
    previewWrap.appendChild(previewBox);
    container.appendChild(previewWrap);

    const keyframesMap = {
      fade:   `@keyframes ca-anim {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}`,
      slide:  `@keyframes ca-anim {\n  from { transform: translateX(-40px); opacity: 0; }\n  to   { transform: translateX(0);    opacity: 1; }\n}`,
      bounce: `@keyframes ca-anim {\n  0%, 100% { transform: translateY(0);    }\n  50%       { transform: translateY(-20px); }\n}`,
      rotate: `@keyframes ca-anim {\n  from { transform: rotate(0deg);   }\n  to   { transform: rotate(360deg); }\n}`,
      pulse:  `@keyframes ca-anim {\n  0%, 100% { transform: scale(1);    }\n  50%       { transform: scale(1.15); }\n}`,
      shake:  `@keyframes ca-anim {\n  0%, 100% { transform: translateX(0);    }\n  20%, 60% { transform: translateX(-8px); }\n  40%, 80% { transform: translateX(8px);  }\n}`,
    };

    let styleTag = document.createElement('style');
    document.head.appendChild(styleTag);

    function update() {
      const type = typePicker.value;
      const dur = (durSlider.value / 10).toFixed(1);
      const del = (delSlider.value / 10).toFixed(1);
      const iter = parseInt(itSlider.value) >= 20 ? 'infinite' : itSlider.value;
      const dir = dirInput.checked ? 'alternate' : 'normal';
      const kf = keyframesMap[type] || keyframesMap.fade;
      const animCSS = `animation: ca-anim ${dur}s ${del}s ${iter} ${dir} ease-in-out both;`;
      styleTag.textContent = kf + `\n.ca-preview { ${animCSS} }`;
      previewBox.style.animation = 'none';
      void previewBox.offsetWidth; // reflow
      previewBox.style.cssText = `width:80px;height:80px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:16px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.85em;font-weight:600;animation:ca-anim ${dur}s ${del}s ${iter} ${dir} ease-in-out both`;
      const output = `${kf}\n\n.element {\n  ${animCSS}\n}`;
      resultBox(container, output);
    }
    update();
  };

  // ── CSS Filter Playground ──
  toolBuilders.cssfilter = (container) => {
    const preview = el('div', { style: 'width:100%;height:140px;border-radius:16px;margin-bottom:16px;background:linear-gradient(135deg,#667eea 0%,#f093fb 50%,#f5576c 100%);position:relative;overflow:hidden;border:1px solid rgba(255,255,255,0.15)' });
    const previewInner = el('div', { style: 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center' });
    const previewLabel = el('div', { style: 'color:#fff;font-weight:700;font-size:1.1em;text-shadow:0 1px 4px rgba(0,0,0,0.4);pointer-events:none' });
    previewLabel.textContent = 'Live Preview';
    previewInner.appendChild(previewLabel);
    preview.appendChild(previewInner);
    container.appendChild(preview);

    const filterDefs = [
      { id: 'cf-blur',       label: 'Blur',        min: 0,   max: 20,  val: 0,   unit: 'px',  css: v => `blur(${v}px)` },
      { id: 'cf-brightness', label: 'Brightness',  min: 0,   max: 200, val: 100, unit: '%',   css: v => `brightness(${v}%)` },
      { id: 'cf-contrast',   label: 'Contrast',    min: 0,   max: 200, val: 100, unit: '%',   css: v => `contrast(${v}%)` },
      { id: 'cf-saturate',   label: 'Saturate',    min: 0,   max: 200, val: 100, unit: '%',   css: v => `saturate(${v}%)` },
      { id: 'cf-grayscale',  label: 'Grayscale',   min: 0,   max: 100, val: 0,   unit: '%',   css: v => `grayscale(${v}%)` },
      { id: 'cf-sepia',      label: 'Sepia',       min: 0,   max: 100, val: 0,   unit: '%',   css: v => `sepia(${v}%)` },
      { id: 'cf-hue',        label: 'Hue Rotate',  min: 0,   max: 360, val: 0,   unit: 'deg', css: v => `hue-rotate(${v}deg)` },
      { id: 'cf-invert',     label: 'Invert',      min: 0,   max: 100, val: 0,   unit: '%',   css: v => `invert(${v}%)` },
      { id: 'cf-opacity',    label: 'Opacity',     min: 0,   max: 100, val: 100, unit: '%',   css: v => `opacity(${v}%)` },
    ];

    const sliders = {};
    filterDefs.forEach(f => {
      const { group, input: s, label: lab } = lgSlider(f.id, f.min, f.max, f.val, f.id + '-lab', () => {
        lab.textContent = `${f.label}: ${s.value}${f.unit}`; update();
      });
      lab.textContent = `${f.label}: ${f.val}${f.unit}`;
      sliders[f.id] = s;
      container.appendChild(group);
    });

    const resetBtn = el('button', { className: 'glass-btn-secondary', style: 'margin-top:4px', textContent: 'Reset All', onClick: () => {
      // Rebuild by closing/reopening — just reload defaults by triggering update with reset values
      filterDefs.forEach(f => { sliders[f.id]._reset && sliders[f.id]._reset(); });
      update();
    }});
    container.appendChild(resetBtn);

    function update() {
      const parts = filterDefs.map(f => f.css(sliders[f.id].value));
      const filterStr = parts.join(' ');
      preview.style.filter = filterStr;
      resultBox(container, `filter: ${filterStr};`);
    }
    update();
  };

  // ── CSS Transform Playground ──
  toolBuilders.csstransform = (container) => {
    const previewWrap = el('div', { style: 'display:flex;justify-content:center;align-items:center;padding:40px 16px;margin-bottom:8px;min-height:180px' });
    const previewBox = el('div', { style: 'width:100px;height:100px;background:linear-gradient(135deg,#0ea5e9,#6366f1);border-radius:14px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.8em;font-weight:600;transition:transform 0.2s ease;transform-origin:center center' });
    previewBox.textContent = 'Transform';
    previewWrap.appendChild(previewBox);
    container.appendChild(previewWrap);

    const transformDefs = [
      { id: 'ct-tx',    label: 'Translate X', min: -150, max: 150, val: 0,   css: v => `translateX(${v}px)` },
      { id: 'ct-ty',    label: 'Translate Y', min: -150, max: 150, val: 0,   css: v => `translateY(${v}px)` },
      { id: 'ct-rot',   label: 'Rotate',      min: -180, max: 180, val: 0,   css: v => `rotate(${v}deg)` },
      { id: 'ct-sx',    label: 'Scale X',     min: 10,   max: 300, val: 100, css: v => `scaleX(${(v/100).toFixed(2)})` },
      { id: 'ct-sy',    label: 'Scale Y',     min: 10,   max: 300, val: 100, css: v => `scaleY(${(v/100).toFixed(2)})` },
      { id: 'ct-skx',   label: 'Skew X',      min: -45,  max: 45,  val: 0,   css: v => `skewX(${v}deg)` },
      { id: 'ct-sky',   label: 'Skew Y',      min: -45,  max: 45,  val: 0,   css: v => `skewY(${v}deg)` },
    ];

    const labelFormats = {
      'ct-tx':  v => `Translate X: ${v}px`,
      'ct-ty':  v => `Translate Y: ${v}px`,
      'ct-rot': v => `Rotate: ${v}deg`,
      'ct-sx':  v => `Scale X: ${(v/100).toFixed(2)}`,
      'ct-sy':  v => `Scale Y: ${(v/100).toFixed(2)}`,
      'ct-skx': v => `Skew X: ${v}deg`,
      'ct-sky': v => `Skew Y: ${v}deg`,
    };

    const sliders = {};
    transformDefs.forEach(f => {
      const { group, input: s, label: lab } = lgSlider(f.id, f.min, f.max, f.val, f.id + '-lab', () => {
        lab.textContent = labelFormats[f.id](s.value); update();
      });
      lab.textContent = labelFormats[f.id](f.val);
      sliders[f.id] = s;
      container.appendChild(group);
    });

    const resetBtn = el('button', { className: 'glass-btn-secondary', style: 'margin-top:4px', textContent: 'Reset All', onClick: update });
    container.appendChild(resetBtn);

    function update() {
      const parts = transformDefs.map(f => f.css(sliders[f.id].value));
      const transformStr = parts.join(' ');
      previewBox.style.transform = transformStr;
      resultBox(container, `transform: ${transformStr};`);
    }
    update();
  };

  // ── Clip-Path Generator ──
  toolBuilders.clippath = (container) => {
    const shapes = {
      'Circle':   () => `circle(50% at 50% 50%)`,
      'Ellipse':  () => `ellipse(50% 35% at 50% 50%)`,
      'Triangle': () => `polygon(50% 0%, 0% 100%, 100% 100%)`,
      'Pentagon': () => `polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)`,
      'Hexagon':  () => `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`,
      'Star':     () => `polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)`,
      'Cross':    () => `polygon(33% 0%, 66% 0%, 66% 33%, 100% 33%, 100% 66%, 66% 66%, 66% 100%, 33% 100%, 33% 66%, 0% 66%, 0% 33%, 33% 33%)`,
      'Arrow':    () => `polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)`,
    };

    const shapeFg = el('div', { className: 'form-group' });
    shapeFg.appendChild(el('label', { textContent: 'Shape' }));
    const shapePicker = glassPicker('cp-shape', Object.keys(shapes), 'Circle', updateClip);
    shapeFg.appendChild(shapePicker.wrapper);
    container.appendChild(shapeFg);

    const { group: sizeGroup, input: sizeSlider, label: sizeLabel } = lgSlider('cp-size', 10, 100, 50, 'cp-size-label', () => { sizeLabel.textContent = `Size: ${sizeSlider.value}%`; updateClip(); });
    sizeLabel.textContent = 'Size: 50%';
    container.appendChild(sizeGroup);

    const { group: posXGroup, input: posXSlider, label: posXLabel } = lgSlider('cp-posx', 0, 100, 50, 'cp-posx-label', () => { posXLabel.textContent = `Position X: ${posXSlider.value}%`; updateClip(); });
    posXLabel.textContent = 'Position X: 50%';
    container.appendChild(posXGroup);

    const { group: posYGroup, input: posYSlider, label: posYLabel } = lgSlider('cp-posy', 0, 100, 50, 'cp-posy-label', () => { posYLabel.textContent = `Position Y: ${posYSlider.value}%`; updateClip(); });
    posYLabel.textContent = 'Position Y: 50%';
    container.appendChild(posYGroup);

    const colorFg = el('div', { className: 'form-group' });
    colorFg.appendChild(el('label', { textContent: 'Preview Color' }));
    const colorInput = el('input', { type: 'color', className: 'ios-color-picker', value: '#6366f1' });
    colorInput.addEventListener('input', updateClip);
    colorFg.appendChild(colorInput);
    container.appendChild(colorFg);

    const previewWrap = el('div', { style: 'display:flex;justify-content:center;padding:30px 16px;margin:12px 0' });
    const previewBox = el('div', { style: 'width:180px;height:180px;background:#6366f1;transition:clip-path 0.3s ease,background 0.2s' });
    previewWrap.appendChild(previewBox);
    container.appendChild(previewWrap);

    function updateClip() {
      const name = shapePicker.value;
      const sz = sizeSlider.value;
      const px = posXSlider.value;
      const py = posYSlider.value;
      let clipVal;
      if (name === 'Circle') {
        clipVal = `circle(${sz}% at ${px}% ${py}%)`;
      } else if (name === 'Ellipse') {
        clipVal = `ellipse(${sz}% ${Math.round(sz * 0.7)}% at ${px}% ${py}%)`;
      } else {
        clipVal = shapes[name]();
      }
      previewBox.style.clipPath = clipVal;
      previewBox.style.background = colorInput.value;
      resultBox(container, `clip-path: ${clipVal};`);
    }
    updateClip();
  };

  // ── Glassmorphism Generator ──
  toolBuilders.glassmorph = (container) => {
    const { group: blurGroup, input: blurSlider, label: blurLabel } = lgSlider('gm-blur', 0, 30, 12, 'gm-blur-label', () => { blurLabel.textContent = `Blur: ${blurSlider.value}px`; updateGlass(); });
    blurLabel.textContent = 'Blur: 12px';
    container.appendChild(blurGroup);

    const { group: opGroup, input: opSlider, label: opLabel } = lgSlider('gm-op', 0, 100, 18, 'gm-op-label', () => { opLabel.textContent = `Transparency: ${opSlider.value}%`; updateGlass(); });
    opLabel.textContent = 'Transparency: 18%';
    container.appendChild(opGroup);

    const { group: brGroup, input: brSlider, label: brLabel } = lgSlider('gm-br', 0, 50, 18, 'gm-br-label', () => { brLabel.textContent = `Border Radius: ${brSlider.value}px`; updateGlass(); });
    brLabel.textContent = 'Border Radius: 18px';
    container.appendChild(brGroup);

    const { group: bopGroup, input: bopSlider, label: bopLabel } = lgSlider('gm-bop', 0, 100, 30, 'gm-bop-label', () => { bopLabel.textContent = `Border Opacity: ${bopSlider.value}%`; updateGlass(); });
    bopLabel.textContent = 'Border Opacity: 30%';
    container.appendChild(bopGroup);

    const colorFg = el('div', { className: 'form-group' });
    colorFg.appendChild(el('label', { textContent: 'Tint Color' }));
    const tintColor = el('input', { type: 'color', className: 'ios-color-picker', value: '#ffffff' });
    tintColor.addEventListener('input', updateGlass);
    colorFg.appendChild(tintColor);
    container.appendChild(colorFg);

    const previewWrap = el('div', { style: 'display:flex;justify-content:center;align-items:center;padding:30px 16px;margin:12px 0;background:linear-gradient(135deg,#667eea,#f093fb,#f5576c);border-radius:16px' });
    const previewBox = el('div', { style: 'width:200px;height:120px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-size:0.9em;text-shadow:0 1px 4px rgba(0,0,0,0.3)' });
    previewBox.textContent = 'Glassmorphism';
    previewWrap.appendChild(previewBox);
    container.appendChild(previewWrap);

    function hexToRgbGm(hex) {
      const n = parseInt(hex.replace('#', ''), 16);
      return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    }

    function updateGlass() {
      const blur = blurSlider.value;
      const op = opSlider.value / 100;
      const br = brSlider.value;
      const bop = bopSlider.value / 100;
      const { r, g, b } = hexToRgbGm(tintColor.value);
      const bgRgba = `rgba(${r}, ${g}, ${b}, ${op.toFixed(2)})`;
      const borderRgba = `rgba(${r}, ${g}, ${b}, ${bop.toFixed(2)})`;
      previewBox.style.cssText = `width:200px;height:120px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-size:0.9em;text-shadow:0 1px 4px rgba(0,0,0,0.3);background:${bgRgba};backdrop-filter:blur(${blur}px);-webkit-backdrop-filter:blur(${blur}px);border-radius:${br}px;border:1px solid ${borderRgba};box-shadow:0 8px 32px rgba(0,0,0,0.15)`;
      const css = `.glass {\n  background: ${bgRgba};\n  backdrop-filter: blur(${blur}px);\n  -webkit-backdrop-filter: blur(${blur}px);\n  border-radius: ${br}px;\n  border: 1px solid ${borderRgba};\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n}`;
      resultBox(container, css);
    }
    updateGlass();
  };

  // ── Type Scale ──
  toolBuilders.typoscale = (container) => {
    const ratios = {
      'Minor Second (1.067)':     1.067,
      'Major Second (1.125)':     1.125,
      'Minor Third (1.2)':        1.2,
      'Major Third (1.25)':       1.25,
      'Perfect Fourth (1.333)':   1.333,
      'Augmented Fourth (1.414)': 1.414,
      'Perfect Fifth (1.5)':      1.5,
      'Golden Ratio (1.618)':     1.618,
    };

    const rFg = el('div', { className: 'form-group' });
    rFg.appendChild(el('label', { textContent: 'Scale Ratio' }));
    const ratioPicker = glassPicker('ts-ratio', Object.keys(ratios), 'Perfect Fourth (1.333)', updateScale);
    rFg.appendChild(ratioPicker.wrapper);
    container.appendChild(rFg);

    const bFg = el('div', { className: 'form-group' });
    bFg.appendChild(el('label', { textContent: 'Base Size (px)' }));
    const baseInput = el('input', { className: 'glass-input', type: 'number', value: '16', min: '8', max: '24' });
    baseInput.addEventListener('input', updateScale);
    bFg.appendChild(baseInput);
    container.appendChild(bFg);

    const uFg = el('div', { className: 'form-group' });
    uFg.appendChild(el('label', { textContent: 'Unit' }));
    const unitPicker = glassPicker('ts-unit', ['px', 'rem', 'em'], 'rem', updateScale);
    uFg.appendChild(unitPicker.wrapper);
    container.appendChild(uFg);

    const previewWrap = el('div', { style: 'margin:16px 0' });
    container.appendChild(previewWrap);

    function updateScale() {
      const base = parseFloat(baseInput.value) || 16;
      const ratio = ratios[ratioPicker.value] || 1.333;
      const unit = unitPicker.value;
      const levels = [
        { name: 'h1', steps: 5 }, { name: 'h2', steps: 4 }, { name: 'h3', steps: 3 },
        { name: 'h4', steps: 2 }, { name: 'h5', steps: 1 }, { name: 'h6', steps: 0 },
        { name: 'p', steps: -1 }, { name: 'small', steps: -2 },
      ];
      previewWrap.innerHTML = '';
      const cssLines = [':root {'];
      levels.forEach(lv => {
        const px = base * Math.pow(ratio, lv.steps);
        const pxRound = Math.round(px * 100) / 100;
        const valPx = pxRound.toFixed(2);
        const valRem = (pxRound / 16).toFixed(3);
        const displayVal = unit === 'px' ? `${valPx}px` : unit === 'rem' ? `${valRem}rem` : `${(pxRound / base).toFixed(3)}em`;
        const row = el('div', { style: 'display:flex;align-items:baseline;gap:12px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06)' });
        const nameEl = el('span', { style: 'font-size:0.78em;opacity:0.55;min-width:40px;font-weight:600' });
        nameEl.textContent = lv.name;
        const sizeEl = el('span', { style: 'font-size:0.75em;opacity:0.5;min-width:70px' });
        sizeEl.textContent = displayVal;
        const textEl = el('span', { style: `font-size:${valPx}px;line-height:1.2;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:200px` });
        textEl.textContent = lv.name === 'small' ? 'Small text' : lv.name === 'p' ? 'Paragraph' : `Heading ${lv.name}`;
        row.appendChild(nameEl); row.appendChild(sizeEl); row.appendChild(textEl);
        previewWrap.appendChild(row);
        const varName = lv.name === 'p' ? '--text-base' : lv.name === 'small' ? '--text-sm' : `--text-${lv.name}`;
        cssLines.push(`  ${varName}: ${displayVal};`);
      });
      cssLines.push('}');
      resultBox(container, cssLines.join('\n'));
    }
    updateScale();
  };

  // ── CSV Viewer/Editor ──
  toolBuilders.csvview = (container) => {
    const delimFg = el('div', { className: 'form-group' });
    delimFg.appendChild(el('label', { textContent: 'Delimiter' }));
    const delimPicker = glassPicker('csv-delim', ['Comma (,)', 'Semicolon (;)', 'Tab', 'Pipe (|)'], 'Comma (,)', () => parseCsv());
    delimFg.appendChild(delimPicker.wrapper);
    container.appendChild(delimFg);

    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'CSV Data' }));
    const textarea = el('textarea', { className: 'glass-textarea', rows: '5', placeholder: 'name,age,city\nAlice,30,New York\nBob,25,London' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const btnRow = el('div', { style: 'display:flex;gap:8px;margin-bottom:12px' });
    btnRow.appendChild(el('button', { className: 'glass-btn', textContent: 'Parse CSV', onClick: parseCsv }));
    btnRow.appendChild(el('button', { className: 'glass-btn-secondary', textContent: 'Export CSV', onClick: exportCsv }));
    container.appendChild(btnRow);

    const tableWrap = el('div', { style: 'overflow-x:auto;margin-top:8px' });
    container.appendChild(tableWrap);

    function getDelim() {
      const d = delimPicker.value;
      if (d === 'Comma (,)') return ',';
      if (d === 'Semicolon (;)') return ';';
      if (d === 'Tab') return '\t';
      return '|';
    }

    function parseCsv() {
      const raw = textarea.value.trim();
      if (!raw) { tableWrap.innerHTML = ''; return; }
      const delim = getDelim();
      const rows = raw.split('\n').map(line => {
        const cells = []; let cur = '', inQ = false;
        for (let i = 0; i < line.length; i++) {
          const ch = line[i];
          if (ch === '"') { inQ = !inQ; }
          else if (ch === delim && !inQ) { cells.push(cur); cur = ''; }
          else { cur += ch; }
        }
        cells.push(cur);
        return cells;
      });
      if (!rows.length) return;
      const headers = rows[0];
      const table = el('table', { style: 'width:100%;border-collapse:collapse;font-size:0.85em' });
      const thead = el('thead');
      const hRow = el('tr');
      headers.forEach(h => {
        const th = el('th', { style: 'padding:8px 10px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);text-align:left;font-weight:600;white-space:nowrap' });
        th.textContent = h;
        hRow.appendChild(th);
      });
      thead.appendChild(hRow); table.appendChild(thead);
      const tbody = el('tbody');
      rows.slice(1).forEach(row => {
        const tr = el('tr');
        headers.forEach((_, ci) => {
          const td = el('td', { style: 'padding:6px 10px;border:1px solid rgba(255,255,255,0.07)' });
          const inp = el('input', { className: 'glass-input', value: row[ci] || '', style: 'min-width:80px;width:100%;padding:3px 6px;font-size:0.9em' });
          td.appendChild(inp); tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody); tableWrap.innerHTML = ''; tableWrap.appendChild(table);
    }

    function exportCsv() {
      const table = tableWrap.querySelector('table');
      if (!table) { resultBox(container, 'Parse CSV first'); return; }
      const delim = getDelim();
      const rows = [];
      table.querySelectorAll('tr').forEach(tr => {
        const cells = [];
        tr.querySelectorAll('th,td').forEach(cell => {
          const inp = cell.querySelector('input');
          const val = inp ? inp.value : cell.textContent;
          const escaped = val.includes(delim) || val.includes('"') || val.includes('\n') ? `"${val.replace(/"/g, '""')}"` : val;
          cells.push(escaped);
        });
        rows.push(cells.join(delim));
      });
      resultBox(container, rows.join('\n'));
    }

    textarea.value = 'name,age,city\nAlice,30,New York\nBob,25,London\nCarla,28,Paris';
    parseCsv();
  };

  // ── SQL to MongoDB ──
  toolBuilders.sql2mongo = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'SQL Query' }));
    const textarea = el('textarea', { className: 'glass-textarea', rows: '6', placeholder: 'SELECT * FROM users WHERE age > 18 ORDER BY name LIMIT 10' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const convertBtn = el('button', { className: 'glass-btn', style: 'width:100%;margin-bottom:4px', textContent: 'Convert to MongoDB', onClick: convert });
    container.appendChild(convertBtn);

    function parseWhere(where) {
      if (!where) return '{}';
      where = where.trim();
      const conds = {};
      where.split(/\bAND\b/i).forEach(part => {
        part = part.trim();
        const m = part.match(/^(\w+)\s*(=|!=|<>|>=|<=|>|<|LIKE|IN|IS\s+NOT\s+NULL|IS\s+NULL)\s*(.*)?$/i);
        if (!m) return;
        const field = m[1], op = m[2].replace(/\s+/g,' ').toUpperCase(), valRaw = (m[3] || '').trim();
        const val = valRaw.replace(/^['"]|['"]$/g, '');
        const numVal = parseFloat(val);
        const jsVal = isNaN(numVal) ? `"${val}"` : numVal;
        if (op === '=') { conds[field] = jsVal; }
        else if (op === '!=' || op === '<>') { conds[field] = `{ $ne: ${jsVal} }`; }
        else if (op === '>') { conds[field] = `{ $gt: ${jsVal} }`; }
        else if (op === '>=') { conds[field] = `{ $gte: ${jsVal} }`; }
        else if (op === '<') { conds[field] = `{ $lt: ${jsVal} }`; }
        else if (op === '<=') { conds[field] = `{ $lte: ${jsVal} }`; }
        else if (op === 'LIKE') { conds[field] = `{ $regex: /${val.replace(/%/g, '.*')}/, $options: "i" }`; }
        else if (op === 'IN') { const arr = valRaw.replace(/[()]/g,'').split(',').map(s=>s.trim().replace(/^['"]|['"]$/g,'')); conds[field] = `{ $in: [${arr.map(a=>`"${a}"`).join(', ')}] }`; }
        else if (op === 'IS NULL') { conds[field] = 'null'; }
        else if (op === 'IS NOT NULL') { conds[field] = `{ $ne: null }`; }
      });
      if (!Object.keys(conds).length) return `{ /* ${where} */ }`;
      return '{ ' + Object.entries(conds).map(([k,v]) => `${k}: ${v}`).join(', ') + ' }';
    }

    function convert() {
      const sql = textarea.value.trim();
      if (!sql) { resultBox(container, 'Enter a SQL query'); return; }
      let result = '';

      const selM = sql.match(/^SELECT\s+(.*?)\s+FROM\s+(\w+)((?:\s+WHERE\s+.*?)?)((?:\s+ORDER\s+BY\s+.*?)?)((?:\s+LIMIT\s+\d+)?)((?:\s+OFFSET\s+\d+)?)$/is);
      if (selM) {
        const cols = selM[1].trim(), coll = selM[2];
        const whereM = selM[3].trim().match(/WHERE\s+(.*)/i);
        const filter = whereM ? parseWhere(whereM[1].trim()) : '{}';
        const proj = cols === '*' ? '{}' : '{ ' + cols.split(',').map(c => `${c.trim()}: 1`).join(', ') + ' }';
        let cmd = `db.${coll}.find(${filter}, ${proj})`;
        const ordM = selM[4].trim().match(/ORDER\s+BY\s+(.*)/i);
        if (ordM) { const sp = ordM[1].split(',').map(s => { const [f,d] = s.trim().split(/\s+/); return `${f}: ${(d||'').toUpperCase()==='DESC'?-1:1}`; }); cmd += `.sort({ ${sp.join(', ')} })`; }
        const limM = selM[5].trim().match(/LIMIT\s+(\d+)/i);
        if (limM) cmd += `.limit(${limM[1]})`;
        const offM = selM[6].trim().match(/OFFSET\s+(\d+)/i);
        if (offM) cmd += `.skip(${offM[1]})`;
        result = cmd + ';';
      }

      const insM = sql.match(/^INSERT\s+INTO\s+(\w+)\s*\(([^)]+)\)\s*VALUES\s*\(([^)]+)\)/is);
      if (insM) {
        const coll = insM[1], fields = insM[2].split(',').map(s=>s.trim()), vals = insM[3].split(',').map(s=>s.trim().replace(/^['"]|['"]$/g,''));
        const doc = fields.map((f,i) => { const n=parseFloat(vals[i]); return `${f}: ${isNaN(n)?'"'+vals[i]+'"':n}`; }).join(', ');
        result = `db.${coll}.insertOne({ ${doc} });`;
      }

      const updM = sql.match(/^UPDATE\s+(\w+)\s+SET\s+(.*?)\s+WHERE\s+(.*)/is);
      if (updM) {
        const coll = updM[1], filter = parseWhere(updM[3].trim());
        const sets = updM[2].split(',').map(s => { const [f,v] = s.split('=').map(x=>x.trim()); const clean=v.replace(/^['"]|['"]$/g,''); const n=parseFloat(clean); return `${f}: ${isNaN(n)?'"'+clean+'"':n}`; });
        result = `db.${coll}.updateMany(${filter}, { $set: { ${sets.join(', ')} } });`;
      }

      const delM = sql.match(/^DELETE\s+FROM\s+(\w+)(\s+WHERE\s+(.*?))?$/is);
      if (delM) {
        result = `db.${delM[1]}.deleteMany(${parseWhere(delM[3])});`;
      }

      if (!result) result = '// Unsupported SQL statement\n// Supported: SELECT, INSERT INTO, UPDATE, DELETE FROM';
      resultBox(container, result);
    }

    textarea.value = "SELECT id, name, email FROM users WHERE age > 21 AND status = 'active' ORDER BY name LIMIT 10";
    convert();
  };

  // ── Scientific Calculator ──
  toolBuilders.scicalc = (container) => {
    const display = el('input', { className: 'glass-input', style: 'width:100%;text-align:right;font-size:1.4em;letter-spacing:0.02em;margin-bottom:12px', value: '0' });
    display.setAttribute('readonly', 'readonly');
    container.appendChild(display);

    let expr = '', justEvaled = false;

    function setDisplay(v) { display.value = String(v) || '0'; }

    const btnDefs = [
      ['sin', 'cos', 'tan', 'log'],
      ['ln',  'sqrt','pow', 'PI' ],
      ['e',   '(',   ')',   'C'  ],
      ['7',   '8',   '9',   '/' ],
      ['4',   '5',   '6',   '*' ],
      ['1',   '2',   '3',   '-' ],
      ['0',   '.',   '=',   '+' ],
    ];

    const calcGrid = el('div', { style: 'display:grid;grid-template-columns:repeat(4,1fr);gap:6px' });
    btnDefs.forEach(row => {
      row.forEach(key => {
        const isPrimary = key === '=';
        const cls = isPrimary ? 'glass-btn' : 'glass-btn-secondary';
        const btn = el('button', { className: cls, style: 'padding:10px 6px;font-size:0.95em', textContent: key });
        btn.addEventListener('click', () => pressKey(key));
        calcGrid.appendChild(btn);
      });
    });
    container.appendChild(calcGrid);

    function pressKey(key) {
      if (key === 'C') { expr = ''; justEvaled = false; setDisplay('0'); return; }
      if (key === '=') {
        try {
          const evalExpr = expr
            .replace(/sin\(/g, 'Math.sin(Math.PI/180*')
            .replace(/cos\(/g, 'Math.cos(Math.PI/180*')
            .replace(/tan\(/g, 'Math.tan(Math.PI/180*')
            .replace(/log\(/g, 'Math.log10(')
            .replace(/ln\(/g, 'Math.log(')
            .replace(/sqrt\(/g, 'Math.sqrt(')
            .replace(/pow\(/g, 'Math.pow(')
            .replace(/\bPI\b/g, 'Math.PI')
            .replace(/\be\b/g, 'Math.E');
          const result = Function('"use strict"; return (' + evalExpr + ')')();
          const rounded = Math.round(result * 1e10) / 1e10;
          setDisplay(rounded);
          expr = String(rounded);
          justEvaled = true;
        } catch (err) {
          setDisplay('Error');
          expr = '';
        }
        return;
      }
      if (justEvaled && /[0-9.(]/.test(key)) { expr = ''; justEvaled = false; }
      if (justEvaled && /[+\-*/]/.test(key)) { justEvaled = false; }
      const fnMap = { sin:'sin(', cos:'cos(', tan:'tan(', log:'log(', ln:'ln(', sqrt:'sqrt(', pow:'pow(' };
      if (fnMap[key]) { expr += fnMap[key]; setDisplay(expr); return; }
      if (key === 'PI') { expr += 'PI'; setDisplay(expr); return; }
      if (key === 'e') { expr += 'e'; setDisplay(expr); return; }
      expr += key;
      setDisplay(expr);
    }

    function calcKeydown(e) {
      if (!container.isConnected) { document.removeEventListener('keydown', calcKeydown); return; }
      const k = e.key;
      if ('0123456789.+-*/()'.includes(k)) { pressKey(k); }
      else if (k === 'Enter') { pressKey('='); }
      else if (k === 'Backspace') { expr = expr.slice(0, -1); setDisplay(expr || '0'); }
      else if (k === 'Escape') { pressKey('C'); }
    }
    document.addEventListener('keydown', calcKeydown);
  };

  // ── Statistics Calculator ──
  toolBuilders.statscalc = (container) => {
    const fg = el('div', { className: 'form-group' });
    fg.appendChild(el('label', { textContent: 'Numbers (comma or newline separated)' }));
    const textarea = el('textarea', { className: 'glass-textarea', rows: '5', placeholder: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10' });
    fg.appendChild(textarea);
    container.appendChild(fg);

    const calcBtn = el('button', { className: 'glass-btn', style: 'width:100%;margin-bottom:4px', textContent: 'Calculate Statistics', onClick: calculate });
    container.appendChild(calcBtn);

    function calculate() {
      const raw = textarea.value.replace(/\n/g, ',').split(',').map(s => s.trim()).filter(s => s !== '');
      const nums = raw.map(Number).filter(n => !isNaN(n));
      if (!nums.length) { resultBox(container, 'Enter valid numbers'); return; }
      nums.sort((a, b) => a - b);
      const n = nums.length;
      const sum = nums.reduce((a, b) => a + b, 0);
      const mean = sum / n;
      const median = n % 2 === 0 ? (nums[n/2 - 1] + nums[n/2]) / 2 : nums[Math.floor(n/2)];
      const freq = {}; nums.forEach(x => { freq[x] = (freq[x]||0) + 1; });
      const maxFreq = Math.max(...Object.values(freq));
      const modes = Object.keys(freq).filter(k => freq[k] === maxFreq).map(Number);
      const modeStr = maxFreq === 1 ? 'None' : modes.join(', ');
      const variance = nums.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0) / n;
      const stddev = Math.sqrt(variance);
      const lowerHalf = nums.slice(0, Math.floor(n/2));
      const upperHalf = nums.slice(Math.ceil(n/2));
      const medOf = arr => arr.length === 0 ? 0 : arr.length % 2 === 0 ? (arr[arr.length/2-1]+arr[arr.length/2])/2 : arr[Math.floor(arr.length/2)];
      const q1 = medOf(lowerHalf);
      const q3 = medOf(upperHalf);
      const iqr = q3 - q1;
      const r = v => Math.round(v * 10000) / 10000;
      const lines = [
        `Count:              ${n}`,
        `Sum:                ${r(sum)}`,
        `Mean (Average):     ${r(mean)}`,
        `Median:             ${r(median)}`,
        `Mode:               ${modeStr}`,
        `Min:                ${nums[0]}`,
        `Max:                ${nums[n-1]}`,
        `Range:              ${r(nums[n-1] - nums[0])}`,
        `Variance:           ${r(variance)}`,
        `Std Deviation:      ${r(stddev)}`,
        `Q1 (25th pct):      ${r(q1)}`,
        `Q3 (75th pct):      ${r(q3)}`,
        `IQR (Q3 - Q1):      ${r(iqr)}`,
      ];
      resultBox(container, lines.join('\n'));
    }

    textarea.value = '4, 8, 15, 16, 23, 42, 4, 8, 15';
    calculate();
  };

})();

