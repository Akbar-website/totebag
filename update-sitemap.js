const fs = require('fs');
const vm = require('vm');

const catData = fs.readFileSync('assets/js/catalog-data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(catData, sandbox);

let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
  '  <url>\n    <loc>https://www.totebag.my.id/</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebag.my.id/"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebag.my.id/tentang.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebag.my.id/tentang.html"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebag.my.id/penulis.html</loc>\n    <lastmod>2026-11-11</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebag.my.id/penulis.html"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebag.my.id/produk.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebag.my.id/produk.html"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebag.my.id/blog.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebag.my.id/blog.html"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebag.my.id/blog/minimal-order.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebag.my.id/blog/minimal-order.html"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebag.my.id/blog/perbandingan-bahan.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebag.my.id/blog/perbandingan-bahan.html"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebag.my.id/blog/menyiapkan-file-logo.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebag.my.id/blog/menyiapkan-file-logo.html"/>\n  </url>\n' +
  '  <url>\n    <loc>https://www.totebag.my.id/kontak.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebag.my.id/kontak.html"/>\n  </url>\n';

sandbox.window.TOTEBAG_CATALOG.forEach(p => {
  sitemap += '  <url>\n    <loc>https://www.totebag.my.id/produk/' + p.id + '.html</loc>\n    <lastmod>2026-11-09</lastmod>\n    <xhtml:link rel="alternate" hreflang="id-ID" href="https://www.totebag.my.id/produk/' + p.id + '.html"/>\n  </url>\n';
});

sitemap += '</urlset>\n';

fs.writeFileSync('sitemap.xml', sitemap, 'utf8');
console.log('Successfully updated sitemap.xml with 8 pages + 72 product pages!');

