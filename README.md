# e-GiziProlanis

Kalkulator status gizi peserta **Prolanis** (Diabetes Melitus Tipe 2 dan Hipertensi) untuk petugas gizi Puskesmas dan peserta Prolanis. Aplikasi berbentuk PWA: bisa dipasang di HP dan dipakai **tanpa internet**.

Dibuat oleh **Manjilala** – Poltekkes Kemenkes Makassar.

## Fitur

**Mode Petugas**
- IMT dan klasifikasi Kemenkes RI, rentang BB normal, kelebihan/kekurangan BB (kg)
- BB idaman (Broca modifikasi, PERKENI 2021)
- Lingkar perut (obesitas sentral) dan RLPP (opsional)
- Estimasi TB dari tinggi lutut (Chumlea) untuk lansia (opsional)
- Kebutuhan energi metode PERKENI 2021, target zat gizi makro, natrium, serat
- Susunan porsi penukar sehari dan pembagian per waktu makan
- Target penurunan/peningkatan BB bertahap
- Rekomendasi gizi spesifik DM, hipertensi, obesitas sentral, dan lansia
- Data klinis opsional (TD, GDP) untuk menajamkan rekomendasi
- Cetak / simpan PDF dengan kop logo dan kolom tanda tangan petugas

**Mode Peserta**
- Bahasa sederhana dan tampilan "lampu lalu lintas" (hijau/kuning/merah)
- Berat badan dan lingkar perut: lebih/kurang berapa dari batas sehat
- Target 3 bulan yang realistis
- Porsi makan per waktu makan dalam ukuran rumah tangga (gelas, potong, mangkok, sendok)
- Cetak "Kartu Hasil" untuk dibawa pulang

Semua perhitungan berjalan di HP pengguna. **Tidak ada data yang dikirim atau disimpan** di server.

## Alamat aplikasi

https://manjilala-gizi.github.io/e-GiziProlanis/

## Cara memasang di HP

- **Android (Chrome):** buka alamat di atas, ketuk **Pasang** pada tawaran yang muncul, atau menu ⋮ → **Instal aplikasi / Tambahkan ke layar utama**.
- **iPhone (Safari):** buka alamat di atas, ketuk tombol **Bagikan** → **Tambahkan ke Layar Utama**.

Pemasangan pertama memerlukan internet. Setelah itu aplikasi bisa dipakai offline.

## Memperbarui aplikasi

Setelah mengubah file, naikkan nilai `CACHE_VERSION` di `sw.js` (misalnya `v1.0.1`) dan `APP_VERSION` di `index.html`. HP pengguna akan mengambil versi baru otomatis saat online.

## Referensi perhitungan

- Klasifikasi IMT dewasa dan batas lingkar perut: Kemenkes RI (P2PTM)
- RLPP: WHO
- BB idaman dan kebutuhan energi: PERKENI 2021, Pedoman Pengelolaan dan Pencegahan DM Tipe 2 Dewasa di Indonesia
- Estimasi TB dari tinggi lutut: Chumlea (1985)
- Porsi penukar: Daftar Bahan Makanan Penukar
- Batas konsumsi gula, garam, lemak: Permenkes No. 30 Tahun 2013

Hasil aplikasi bersifat panduan dan tidak menggantikan konseling langsung dengan petugas gizi atau dokter.
