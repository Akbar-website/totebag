const fs = require('fs');

const OLD_DOMAIN = 'https://www.totebagmalang.id';
const OLD_DOMAIN_NO_WWW = 'https://totebagmalang.id';
const NEW_DOMAIN = 'https://totebag-ochre.vercel.app';

function updateMetaInHtml(content, currentUrl, pageTitle, pageDesc, pageImage = `${NEW_DOMAIN}/assets/img/og-cover.jpg`) {
  // Replace old domain
  content = content.split(OLD_DOMAIN).join(NEW_DOMAIN);
  content = content.split(OLD_DOMAIN_NO_WWW).join(NEW_DOMAIN);

  // Ensure full suite of OpenGraph & WhatsApp tags exist
  // Replace og:image block
  const ogBlock = `    <meta property="og:url" content="${currentUrl}">
    <meta property="og:image" content="${pageImage}">
    <meta property="og:image:secure_url" content="${pageImage}">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Totebag Malang - Produsen Tote Bag Custom">
    <meta itemprop="image" content="${pageImage}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${pageTitle}">
    <meta name="twitter:description" content="${pageDesc}">
    <meta name="twitter:image" content="${pageImage}">`;

  // Replace existing og:url and og:image tags
  content = content.replace(/\s*<meta property="og:url"[^>]+>/g, '');
  content = content.replace(/\s*<meta property="og:image"[^>]+>/g, '');
  content = content.replace(/\s*<meta property="og:image:secure_url"[^>]+>/g, '');
  content = content.replace(/\s*<meta property="og:image:type"[^>]+>/g, '');
  content = content.replace(/\s*<meta property="og:image:width"[^>]+>/g, '');
  content = content.replace(/\s*<meta property="og:image:height"[^>]+>/g, '');
  content = content.replace(/\s*<meta property="og:image:alt"[^>]+>/g, '');
  content = content.replace(/\s*<meta itemprop="image"[^>]+>/g, '');
  content = content.replace(/\s*<meta name="twitter:card"[^>]+>/g, '');
  content = content.replace(/\s*<meta name="twitter:title"[^>]+>/g, '');
  content = content.replace(/\s*<meta name="twitter:description"[^>]+>/g, '');
  content = content.replace(/\s*<meta name="twitter:image"[^>]+>/g, '');

  if (content.includes('property="og:title"')) {
    content = content.replace(/(<meta property="og:title"[^>]+>[\s\S]*?<meta property="og:description"[^>]+>)/, `$1\n${ogBlock}`);
  }

  return content;
}

// 1. Root HTML files
const pagesConfig = {
  'index.html': {
    url: `${NEW_DOMAIN}/`,
    title: 'Totebag Malang | Produsen Tote Bag Custom Sablon Logo',
    desc: 'Pilihan bahan terlengkap: Drill, Cotton, Non Woven, Jute, Leather, PU Leather, Nylon, Denim, Linen, Corduroy. Pesan custom mulai 50 pcs.'
  },
  'produk.html': {
    url: `${NEW_DOMAIN}/produk.html`,
    title: 'Portofolio Produk Tote Bag Custom Malang',
    desc: 'Katalog lengkap model tote bag custom drill, kanvas, goni, corduroy, dan kulit.'
  },
  'tentang.html': {
    url: `${NEW_DOMAIN}/tentang.html`,
    title: 'Tentang Totebag Malang | Profil Konveksi & Standar Produksi',
    desc: 'Profil produsen tote bag custom di Kota Malang dengan standar mutu jahitan dan sablon presisi.'
  },
  'blog.html': {
    url: `${NEW_DOMAIN}/blog.html`,
    title: 'Blog & Panduan Tote Bag Custom Malang',
    desc: 'Tips bahan, standar file sablon logo, dan panduan minimal order tote bag custom.'
  },
  'kontak.html': {
    url: `${NEW_DOMAIN}/kontak.html`,
    title: 'Kontak & Workshop Totebag Malang',
    desc: 'Hubungi workshop konveksi Totebag Malang via WhatsApp untuk konsultasi dan penawaran harga.'
  },
  'detail-produk.html': {
    url: `${NEW_DOMAIN}/detail-produk.html`,
    title: 'Detail Produk Tote Bag Custom Malang',
    desc: 'Spesifikasi teknis, pilihan bahan, dan opsi penutupan tote bag custom.'
  }
};

Object.entries(pagesConfig).forEach(([file, cfg]) => {
  if (fs.existsSync(file)) {
    let html = fs.readFileSync(file, 'utf8');
    html = updateMetaInHtml(html, cfg.url, cfg.title, cfg.desc);
    fs.writeFileSync(file, html, 'utf8');
    console.log('Updated root page:', file);
  }
});

// 2. Blog pages
const blogArticles = [
  { file: 'blog/menyiapkan-file-logo.html', title: 'Standar Menyiapkan File Logo & Desain Sablon Tote Bag Agar Hasil Tajam' },
  { file: 'blog/minimal-order.html', title: 'Panduan Lengkap Minimal Order (MOQ) Tote Bag Custom di Malang' },
  { file: 'blog/perbandingan-bahan.html', title: 'Perbandingan 11 Bahan Tas: Kanvas, Blacu, Spunbond, Drill, Goni, Corduroy' }
];

blogArticles.forEach(b => {
  if (fs.existsSync(b.file)) {
    let html = fs.readFileSync(b.file, 'utf8');
    const slug = b.file.split('/')[1];
    html = updateMetaInHtml(html, `${NEW_DOMAIN}/blog/${slug}`, b.title, 'Panduan lengkap dan edukasi pembuatan tote bag custom berkualitas.');
    fs.writeFileSync(b.file, html, 'utf8');
    console.log('Updated blog article:', b.file);
  }
});

// 3. build-detail-pages.js
let bdp = fs.readFileSync('build-detail-pages.js', 'utf8');
bdp = bdp.split(OLD_DOMAIN).join(NEW_DOMAIN);
bdp = bdp.split(OLD_DOMAIN_NO_WWW).join(NEW_DOMAIN);

// Ensure og:image in bdp has full tags
const bdpOgReplacement = `  <meta property="og:url" content="${NEW_DOMAIN}/produk/\${p.id}.html">
  <meta property="og:image" content="${NEW_DOMAIN}/\${p.img}">
  <meta property="og:image:secure_url" content="${NEW_DOMAIN}/\${p.img}">
  <meta property="og:image:type" content="image/webp">
  <meta property="og:image:alt" content="\${escapeHtml(p.name)}">
  <meta itemprop="image" content="${NEW_DOMAIN}/\${p.img}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="\${escapeHtml(p.name)} | Totebag Malang">
  <meta name="twitter:description" content="Detail spesifikasi \${escapeHtml(p.name)}, \${p.moq}. Hubungi kami untuk penawaran harga terbaik.">
  <meta name="twitter:image" content="${NEW_DOMAIN}/\${p.img}">`;

bdp = bdp.replace(/<meta property="og:image"[^>]+>/, bdpOgReplacement);
fs.writeFileSync('build-detail-pages.js', bdp, 'utf8');
console.log('Updated build-detail-pages.js');

// 4. sitemap.xml and update-sitemap.js
if (fs.existsSync('sitemap.xml')) {
  let sm = fs.readFileSync('sitemap.xml', 'utf8');
  sm = sm.split(OLD_DOMAIN).join(NEW_DOMAIN);
  sm = sm.split(OLD_DOMAIN_NO_WWW).join(NEW_DOMAIN);
  fs.writeFileSync('sitemap.xml', sm, 'utf8');
  console.log('Updated sitemap.xml');
}

if (fs.existsSync('update-sitemap.js')) {
  let us = fs.readFileSync('update-sitemap.js', 'utf8');
  us = us.split(OLD_DOMAIN).join(NEW_DOMAIN);
  us = us.split(OLD_DOMAIN_NO_WWW).join(NEW_DOMAIN);
  fs.writeFileSync('update-sitemap.js', us, 'utf8');
  console.log('Updated update-sitemap.js');
}

console.log('Domain update completed.');

