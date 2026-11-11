const fs = require('fs');
const vm = require('vm');

const BASE = 'https://www.totebag.my.id';
const today = new Date().toISOString().slice(0, 10);

const catData = fs.readFileSync('assets/js/catalog-data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(catData, sandbox);

// Halaman statis (URL bersih, sesuai cleanUrls di vercel.json)
const pages = [
  '/', '/tentang', '/penulis', '/produk', '/blog', '/kontak',
  '/blog/totebag-custom-malang',
  '/blog/jenis-bahan-totebag-custom',
  '/blog/minimal-order',
  '/blog/perbandingan-bahan',
  '/blog/menyiapkan-file-logo',
];

const products = sandbox.window.TOTEBAG_CATALOG.map(p => '/produk/' + p.id);

const urls = [...pages, ...products].map(path =>
  '  <url>\n' +
  '    <loc>' + BASE + path + '</loc>\n' +
  '    <lastmod>' + today + '</lastmod>\n' +
  '  </url>\n'
);

const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.join('') +
  '</urlset>\n';

fs.writeFileSync('sitemap.xml', sitemap, 'utf8');
console.log('sitemap.xml diperbarui: ' + pages.length + ' halaman + ' + products.length + ' produk');