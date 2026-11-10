# DESIGN: Totebag Malang

Prinsip: Katalog editorial modern dengan palet warna natural organic. Latar putih dan sage muda (#E8EDE3), aksen hijau pinus (#365A45) dan cokelat hangat (#6B4F3A), serta tipografi editorial yang nyaman dibaca.

## Palet Warna Resmi
| Token | Hex | Pemakaian |
|---|---|---|
| `--color-bg-light` | #E8EDE3 | Latar belakang seksi selang-seling, card artikel, detail view |
| `--color-sage` | #A8B89A | Garis batas, badge tag bahan, hover tint, divider breadcrumbs |
| `--color-primary` | #365A45 | Warna merek utama, judul (h1-h6), tombol utama, navbar brand |
| `--color-warm` | #6B4F3A | Aksen hangat, tombol CTA WhatsApp, harga/MOQ, badge pilihan |

## Tipografi
- Teks isi dan judul: **Inter Tight** 400 sampai 700.
- Brand logo: **Nothing You Could Do** (tulisan tangan khas: "tote.malang").
- Breadcrumbs: 0.9rem dengan pembatas garis miring sage (`/`).

## Struktur Multi-Page & Navigasi
1. `index.html`: Beranda dengan hero, pencarian kilat, sorotan 11 bahan, katalog ringkas, artikel pilihan, dan form penawaran.
2. `tentang.html`: Halaman Tentang Kami, profil workshop di Kedungkandang Malang, nilai utama, dan 6 alur pemesanan.
3. `produk.html`: Halaman Portofolio Produk lengkap dengan filter kategori 11+ bahan dan detail view dinamis.
4. `blog.html`: Halaman indeks Blog & Panduan berstandar editorial.
5. Artikel Lengkap:
   - `blog/minimal-order.html` (`/blog/minimal-order`): Panduan Minimal Order (MOQ)
   - `blog/perbandingan-bahan.html` (`/blog/perbandingan-bahan`): Komparasi 11+ Bahan
   - `blog/menyiapkan-file-logo.html` (`/blog/menyiapkan-file-logo`): Standar File Sablon Vektor & 300 DPI
6. `kontak.html`: Halaman Kontak & Workshop, peta Google Maps, dan form WhatsApp lengkap.

## 11+ Jenis Bahan yang Didukung
1. **Drill**: American / Japan Drill tenun diagonal kokoh.
2. **Cotton**: 100% Katun Combed alami lembut.
3. **Non Woven**: Spunbond polypropylene ekonomis untuk acara massal.
4. **Jute**: Karung goni alami bergaya vintage rustic.
5. **Leather**: Kulit sapi asli grade premium dengan grafir deboss.
6. **PU Leather**: Kulit sintetis modern tahan air dan mudah dilap.
7. **Nylon**: Parasut ripstop fleksibel yang dapat dilipat (foldable).
8. **Polyester**: Kain D300/D600 tahan kusut untuk sublimasi full color.
9. **Denim**: Jeans washed kasual trendi.
10. **Linen**: Serat rami halus bernuansa minimalis Jepang.
11. **Corduroy**: Kain bergaris timbul lembut retro streetwear.
*(Plus Kanvas Katun Marsoto)*
