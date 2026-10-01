# e-GiziProlanis

Kalkulator status gizi peserta **Prolanis** (Diabetes Melitus Tipe 2 dan Hipertensi) untuk petugas gizi Puskesmas dan peserta Prolanis. Aplikasi berbentuk PWA: bisa dipasang di HP dan dipakai **tanpa internet**.

Dibuat oleh **Manjilala** – Poltekkes Kemenkes Makassar.

## Fitur

**Mode Petugas**
- IMT dan klasifikasi WHO Asia-Pasifik, rentang BB normal, kelebihan/kekurangan BB (kg)
- BBI – Berat Badan Ideal (Broca modifikasi, PERKENI 2024) dan %BBI
- Lingkar perut (obesitas sentral) dan RLPP (opsional)
- Estimasi TB dari tinggi lutut (Chumlea) untuk lansia (opsional)
- Kebutuhan energi metode PERKENI 2024 beserta rincian koreksinya
- Anjuran serat, lemak jenuh, dan natrium (PNPK Hipertensi 2026 untuk peserta hipertensi)
- Susunan porsi penukar sehari dengan pembagian makan PERKENI (pagi 20%, siang 30%, malam 25%, selingan)
- Target penurunan BB: DM minimal 7–10%, non-DM 5–10% dalam 3–6 bulan
- Rekomendasi gizi spesifik DM, hipertensi (DASH), kolesterol, obesitas sentral, dan lansia
- Menu **Rumus & Referensi** berisi semua rumus, ketentuan, contoh perhitungan, dan daftar pustaka APA 7

**Mode Peserta**
- Bahasa sederhana dengan tampilan "lampu lalu lintas"
- Berat badan dan lingkar perut saat ini, batas sehat, dan kelebihan/kekurangannya
- Target penurunan BB yang realistis dan panduan Isi Piringku
- Pesan gizi sesuai penyakit; jumlah porsi dikonsultasikan dengan petugas gizi

**Kedua mode**
- Isian opsional tekanan darah, gula darah (puasa / 2 jam setelah makan), dan kolesterol total
- Hasil disimpan sebagai **gambar JPG 1 halaman** (rasio A4) atau dibagikan langsung, misalnya ke WhatsApp

Semua perhitungan berjalan di HP pengguna. **Tidak ada data yang dikirim atau disimpan** di server.

## Alamat aplikasi

https://manjilala-gizi.github.io/e-GiziProlanis/

## Cara memasang di HP

- **Android (Chrome):** buka alamat di atas, ketuk **Pasang** pada tawaran yang muncul, atau menu ⋮ → **Instal aplikasi / Tambahkan ke layar utama**.
- **iPhone (Safari):** buka alamat di atas, ketuk tombol **Bagikan** → **Tambahkan ke Layar Utama**.

Pemasangan pertama memerlukan internet. Setelah itu aplikasi bisa dipakai offline.

## Memperbarui aplikasi

Setelah mengubah file, naikkan nilai `CACHE_VERSION` di `sw.js` dan `APP_VERSION` di `index.html`. HP pengguna akan mengambil versi baru otomatis saat online.

## Referensi

Daftar lengkap (format APA 7) tersedia di menu **Rumus & Referensi** pada mode petugas. Rujukan utama:

- Perkumpulan Endokrinologi Indonesia. (2024). *Pedoman pengelolaan dan pencegahan diabetes melitus tipe 2 dewasa di Indonesia 2024*.
- Kementerian Kesehatan RI. (2026). *KMK No. HK.01.07/MENKES/303/2026 tentang PNPK Tata Laksana Hipertensi Dewasa*.
- Kementerian Kesehatan RI. (2021). *Pedoman pengelolaan dan pencegahan obesitas bagi tenaga kesehatan di FKTP*.
- Persatuan Ahli Gizi Indonesia & Asosiasi Dietisien Indonesia. (2019). *Penuntun diet dan terapi gizi* (Ed. ke-4). EGC.
- WHO WPRO, IASO, & IOTF. (2000). *The Asia-Pacific perspective: Redefining obesity and its treatment*.

Hasil aplikasi bersifat panduan dan tidak menggantikan konseling langsung dengan petugas gizi atau dokter.
