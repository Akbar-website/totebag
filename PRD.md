# PRD: Website Totebag Malang (Tote Bag Custom, Malang)

Versi 2.0 | 6 November 2026 | Status: Implementasi Selesai (Multi-Page & 11 Bahan)

## 1. Ringkasan
Website company profile, katalog produk multi-halaman, dan lead generation untuk produsen tote bag custom di Kedungkandang, Kota Malang. Mendukung pemesanan tote bag 11+ jenis bahan dengan CTA utama via WhatsApp (+62 821-3108-7971).

## 2. Struktur Halaman (Multi-Page Architecture)
- **Beranda (`index.html`)**: Hero dengan live search, preview 11 bahan, katalog ringkas, artikel pilihan, dan kontak cepat.
- **Tentang Kami (`tentang.html`)**: Profil konveksi, standar mutu jahitan & sablon, dan 6 tahap alur pengerjaan.
- **Portofolio Produk (`produk.html`)**: Katalog interaktif lengkap dengan filter bahan (Drill, Cotton, Non Woven, Jute, Leather, PU Leather, Nylon, Polyester, Denim, Linen, Corduroy, Kanvas) dan detail view.
- **Blog & Panduan (`blog.html`)**: Indeks artikel edukasi standar editorial.
- **Halaman Artikel Lengkap**:
  - `blog-minimal-order.html`: Panduan Lengkap Minimal Order (MOQ)
  - `blog-perbandingan-bahan.html`: Komparasi 11+ Bahan Tote Bag
  - `blog-menyiapkan-file-logo.html`: Standar Menyiapkan File Logo Sablon
- **Kontak & Penawaran (`kontak.html`)**: Alamat workshop, Google Maps, dan form penawaran dengan pilihan 11 bahan.

## 3. Fitur Utama
1. **Navigasi Multi-Halaman Real**: Setiap menu navbar mengarahkan ke halaman HTML mandiri dengan indikator menu aktif.
2. **Breadcrumbs**: Komponen navigasi breadcrumb di seluruh halaman dilengkapi schema `BreadcrumbList` untuk navigasi user dan SEO.
3. **11+ Jenis Bahan**: Mendukung Drill, Cotton, Non Woven, Jute, Leather, PU Leather, Nylon, Polyester, Denim, Linen, Corduroy, dan Kanvas lengkap dengan foto produk asli.
4. **Palet Warna Baru**: `#E8EDE3` (background lembut), `#A8B89A` (sage border), `#365A45` (hijau pinus utama), `#6B4F3A` (cokelat hangat).
5. **Artikel Standar Editorial**: Artikel mendalam dengan heading, tabel perbandingan, callout, tips praktis, dan author card.
