const fs = require('fs');
const vm = require('vm');

const catData = fs.readFileSync('assets/js/catalog-data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(catData, sandbox);

let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
  '  <url>\n    <loc>https://www.totebagmalang.id/</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebagmalang.id/"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebagmalang.id/tentang.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebagmalang.id/tentang.html"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebagmalang.id/produk.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebagmalang.id/produk.html"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebagmalang.id/blog.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebagmalang.id/blog.html"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebagmalang.id/blog/minimal-order.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebagmalang.id/blog/minimal-order.html"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebagmalang.id/blog/perbandingan-bahan.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebagmalang.id/blog/perbandingan-bahan.html"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebagmalang.id/blog/menyiapkan-file-logo.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebagmalang.id/blog/menyiapkan-file-logo.html"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebagmalang.id/kontak.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebagmalang.id/kontak.html"/>\n  </url>\n';

sandbox.window.TOTEBAG_CATALOG.forEach(p => {
  sitemap += '  <url>\n    <loc>https://www.totebagmalang.id/produk/' + p.id + '.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebagmalang.id/produk/' + p.id + '.html"/>\n  </url>\n';
});

sitemap += '</urlset>\n';

fs.writeFileSync('sitemap.xml', sitemap, 'utf8');
console.log('Successfully updated sitemap.xml with 8 pages + 72 product pages!');

