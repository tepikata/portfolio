# Tepi Kata — Website Portofolio

Website portofolio resmi **Tepi Kata** (terpisah dari repositori aplikasi Studio `tepikata/tepikata.github.io`) yang berjalan di GitHub Pages: `https://tepikata.github.io/portfolio/`.

## Struktur File
- `index.html` — Halaman publik portofolio (Fine-Art Gallery White) yang memuat konten secara dinamis dari `data/content.json`.
- `admin.html` — Panel **Studio Editor** untuk mengedit teks, foto, galeri karya, paket prosesi, testimoni, dan kontak WhatsApp langsung dari HP maupun laptop (`/portfolio/admin.html`).
- `data/content.json` — Seluruh data konten dinamis portofolio.
- `js/default-content.js` — Data cadangan bawaan agar website tetap tampil rapi meski dibuka secara lokal (`file://`).
- `images/` — Koleksi foto portofolio (path relatif untuk subpath GitHub Pages).

## Cara Mengedit Konten & Foto via Studio Editor
1. Buka `https://tepikata.github.io/portfolio/admin.html` di browser HP atau laptop.
2. Edit konten melalui 5 tab: **Umum & Kontak**, **Galeri Karya**, **Filosofi & Alur**, **Paket Prosesi**, dan **Testimoni**.
3. Klik **Pratinjau** untuk melihat hasil perubahan sebelum dipublikasikan.
4. Untuk **Simpan & Publish** langsung ke GitHub:
   - Klik tombol **GitHub / Token** di kanan atas.
   - Masukkan **GitHub Fine-Grained Personal Access Token** yang hanya diberi akses ke repo `tepikata/portfolio` dengan izin **Contents: Read and write** (token hanya tersimpan di `localStorage` browser perangkat admin, tidak pernah disimpan di kode repo).
   - Klik **Tes Koneksi** lalu **Simpan Pengaturan**.
   - Klik **Simpan & Publish** — foto baru otomatis dikompresi di browser (maks lebar 1600px, JPEG 80%) dan diunggah ke `images/`, bersamaan dengan pembaruan `data/content.json` di branch `main`.
5. Sebagai alternatif manual, klik **Unduh JSON** untuk mengunduh `content.json` dan mengunggahnya ke folder `data/` di GitHub.
