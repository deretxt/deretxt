---
title: "Bruteforce: Teknik Lama yang Masih Ngeri Sampai Sekarang"
date: 2025-04-11
description: Teknik bruteforce dalam cybersecurity bisa jadi ancaman serius kalau digunakan tanpa etika. Saya coba jelaskan dengan gaya ringan untuk kamu yang awam tapi penasaran.
---

Bruteforce — teknik lawas di dunia cybersecurity — akhir-akhir ini kepikiran lagi di kepala saya. Bukan karena ketinggalan zaman, justru karena teknik ini masih sering banget jadi pintu masuk serangan ke sistem yang keamanannya kurang kuat.

Dulu saya udah beberapa kali eksplor teknik ini, dan kemarin saya coba iseng-iseng nyoba lagi. Tapi kali ini bukan sekadar buat eksperimen pribadi, saya pengin bagikan proses dan penjelasannya biar kamu yang awam juga ngerti: gimana sih sebenernya teknik bruteforce itu?

---

## Apa Itu Bruteforce?

Bruteforce itu teknik dalam dunia cybersecurity buat “nebak” password seseorang dengan cara nyoba semua kemungkinan kombinasi username dan password secara otomatis. Misalnya kayak gini:

username=admin password=admin123


Kalau gagal? Tool-nya coba lagi:

username=admin password=admin1234


Dan seterusnya... sampai dapet yang cocok.

Biasanya ini dibantu dengan **wordlist** — semacam file yang isinya daftar password yang sering dipakai orang. Ada juga wordlist buatan sendiri, bisa dari kombinasi nama, tanggal lahir, angka, huruf besar kecil, dan lain-lain.

---

## Tools yang Saya Gunakan

Saya pakai tool bernama **Hydra**. Ini tool command-line yang powerful banget buat brute force ke berbagai protokol (HTTP, SSH, FTP, dll).

Saya jalankan Hydra dari sistem WSL (Windows Subsystem for Linux), biar bisa pakai environment Linux langsung dari Windows.

Contoh perintah dasar Hydra yang saya pakai waktu nyoba:

hydra -L user.txt -P pass.txt 127.0.0.1 http-post-form "/login.php:username=^USER^&password=^PASS^:Login Gagal"


### Penjelasan singkat:

- `-L` = file yang berisi daftar username  
- `-P` = file wordlist untuk password  
- `http-post-form` = login form-nya pakai method POST  
- `Login Gagal` = teks error yang muncul kalau login-nya gagal  

Saya simulasikan login form palsu di localhost buat ngetes. Hydra akan nembak kombinasi satu per satu, dan kalau berhasil, hasilnya langsung keluar di terminal.

---

## Gimana Saya Bisa Tahu Form Login-nya?

Ini kunci penting: saya analisa dulu login form pakai **Developer Tools di browser**, buka tab "Network", isi form, lalu klik login. Dari situ saya bisa tahu URL endpoint, parameter yang dikirim, dan respon error-nya.

Itulah yang saya jadikan bahan buat nyusun command Hydra tadi. Kalau login form-nya kasih respon yang konsisten saat gagal (misalnya selalu muncul tulisan *Login Gagal*), maka bruteforce jadi mungkin dilakukan.

---

## Bruteforce Itu Ngeri Kalau...

Teknik ini kelihatan simpel, tapi bisa jadi bahaya banget kalau:

- Website gak punya **rate-limit** (nggak membatasi percobaan login)
- Gak ada **CAPTCHA**
- Gak ada deteksi IP mencurigakan
- Gak aktifin 2FA

Dan yang paling sering bikin celaka: **orang masih pakai password gampang** kayak `123456`, `admin`, `password`, `qwerty`, atau nama sendiri.

---

## Jadi, Apa Yang Harus Dilakuin?

Kalau kamu awam dan baru tahu teknik ini, ada beberapa hal penting:

- Jangan pakai username/password default
- Hindari password yang gampang ditebak
- Selalu aktifkan 2FA
- Waspadai login form yang aneh di website mencurigakan

---

## Penutup

Bruteforce itu bukan teknik baru. Tapi tetap jadi favorit para attacker karena banyak sistem masih punya celah dasar yang bisa dimanfaatin.

Tujuan saya sharing ini bukan ngajarin hal ilegal, tapi biar kamu tahu **seberapa rentan keamanan bisa dijebol kalau kita gak aware**. Dan kalau kamu belajar cybersecurity, teknik bruteforce ini adalah salah satu yang wajib banget kamu pahami — minimal tahu cara kerjanya.

Semoga jadi insight baru ya.
Setelah kamu paste, simpan dengan:

CTRL + O → Enter

CTRL + X untuk keluar

Lanjut commit dan push:
git add ./posts/bruteforce-classic.md
git commit -m "reupload artikel bruteforce"
git push origin main

git add ./posts/bruteforce-classic.md
git commit -m "reupload artikel bruteforce"
git push origin main

