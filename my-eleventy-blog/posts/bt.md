---
layout: layout.njk
title: "Bruteforce: Cara Jadul, Maksa Banget, Tapi Masih Ampuh!"
date: 2025-04-12
tags: post
---

## Bruteforce: Cara Jadul, Maksa Banget, Tapi Masih Ampuh!

> Kadang saya mikir, kenapa ya teknik jadul kayak bruteforce masih aja dipakai? Jawabannya simpel: karena kadang... masih works.

Saya udah kenal teknik bruteforce ini sejak lama. Dan baru-baru ini, saya kepikiran buat nyimulasikan ulang — sekadar nostalgia, dan siapa tahu bisa jadi bahan edukasi buat kalian yang awam soal dunia IT, tapi pengen ngerti kenapa password kalian bisa gampang dibobol.

### Apa Itu Bruteforce? (Versi yang Gampang Dicerna)

Bruteforce itu teknik nebak password secara brutal — bener-bener nebak satu per satu sampai dapet. Kayak kamu ngintip koper orang dan coba dari 0000 sampai 9999. Kalau kebetulan password-nya 1234, ya dapet deh. Teknik ini nggak pintar, cuma sabar dan ulet. Dan kadang, itu aja udah cukup buat ngejebol sistem yang kurang aman.

### Siapa Aja Korbannya?

Siapapun bisa jadi korban teknik ini. Mulai dari:

- Orang yang pake password "admin", "123456", atau "password123".
- Sistem yang nggak punya mekanisme pengamanan tambahan kayak 2FA.
- Website yang nggak ngeblokir setelah 10 kali login gagal.
- Platform sosial media yang user-nya malas ganti password.
- Bahkan instansi gede yang sistemnya udah tua tapi nggak diperbarui.

Jadi kalau kamu pikir, "Ah, akun IG-ku aman kok!" — ya, bisa jadi cuma karena belum dicoba aja.

### Tools Buat Bruteforce — Saya Pilih Hydra, Kenapa?

Saya pakai **Hydra** buat simulasi ini. Kenapa Hydra?

1. Udah populer di kalangan pentester.
2. Bisa jalan di banyak protokol: HTTP, FTP, SSH, sampai telnet.
3. CLI-nya enak dan fleksibel.
4. Dokumentasinya jelas.

Tools lain sebenernya banyak, kayak:

- **Medusa** — cepet juga, mirip Hydra.
- **Ncrack** — jago di network protocol.
- **Patator** — lebih modular dan custom.

Tapi ya balik lagi, saya nyaman pakai Hydra.

### Setup Hydra di WSL — Karena Saya Pakainya Windows

Saya jalankan ini di **WSL** (Windows Subsystem for Linux), karena:

- Saya pakai Windows, tapi butuh feel Linux.
- Install tools kayak Hydra di WSL lebih gampang.
- Bisa langsung testing localhost dari situ.

Kalau kamu pake Windows dan belum punya WSL:

<<<<<<< HEAD
<pre class="terminal"><code>
wsl --install
sudo apt update && sudo apt install hydra
</pre>
=======
```bash
wsl --install
sudo apt update && sudo apt install hydra
```
>>>>>>> 7750ac05c1902a1d22fbf308a6a2afb857674b9b

Udah, itu doang. Gak ribet.

### Simulasi Bruteforce di Localhost, Bukan Web Orang

Penting banget ya: **saya gak nyerang website orang**. Saya bikin simulasi login form di localhost — artinya di PC sendiri. Tujuannya biar bisa eksplorasi, tanpa bikin dosa digital.

Berikut contoh command line-nya:

<<<<<<< HEAD
<pre class="terminal"><code>hydra -L user.txt -P pass.txt 127.0.0.1 http-post-form "/login.php:username=^USER^&password=^PASS^:Login Gagal"</code></pre>


=======
```bash
hydra -L user.txt -P pass.txt 127.0.0.1 http-post-form "/login.php:username=^USER^&password=^PASS^:Login Gagal"
```
>>>>>>> 7750ac05c1902a1d22fbf308a6a2afb857674b9b

Penjelasan singkat:

- `-L` itu file list username.
- `-P` itu file list password.
- `http-post-form` buat simulasi form login via POST.
- Yang terakhir itu respon gagal yang jadi patokan.

Kalau berhasil, Hydra bakal ngasih tahu: "Login found!" — dan rasanya... satisfying.

### Tips Buat Kamu yang Gak Mau Jadi Korban

Ini 10 hal yang bisa kamu lakukan supaya akun kamu gak gampang dijebol:

1. Jangan pake password "123456".
2. Jangan pake nama kamu + tanggal lahir.
3. Aktifkan 2FA di mana pun bisa.
4. Jangan pake username default kayak "admin".
5. Jangan reuse password di banyak akun.
6. Ganti password secara berkala.
7. Pake password manager.
8. Jangan simpen password di notes HP.
9. Gunakan CAPTCHA dan rate limiting di website sendiri.
10. Monitor aktivitas login mencurigakan.

### Fakta Nyata: Bruteforce Gak Cuma Teori

Beberapa kasus nyata:

- **2013**: Adobe kena bruteforce, jutaan akun bocor.
- **2021**: Colonial Pipeline disusupi — awalnya dari login yang bocor.
- **Beberapa akun Twitter seleb** juga sempet dijebol karena password yang terlalu simpel.

Bruteforce mungkin jadul, tapi kalau sistem dan user-nya masih polos, ya tetep bisa.

### Di Darkweb, Bruteforce Nggak Jalan Sendiri

Di darkweb, teknik ini sering dikombinasikan dengan:

- **Credential stuffing** (pakai password bocoran).
- **Social engineering** (biar dapet clue buat nebak password).
- **Dictionary attack** (versi pintar bruteforce).

Contohnya gini: dapet email dari leak, masukin ke tool, digabungin sama list password dari breach sebelumnya. Bruteforce tinggal finishing aja.

### Bruteforce dan OSINT: Duo Serem

Kalau kamu udah belajar OSINT (Open Source Intelligence), kamu bisa:

- Nemuin nama pacar target.
- Nemuin tanggal lahir.
- Nemuin email lama.

Dan dari sana... bisa buat wordlist yang sangat personal. Bruteforce-nya jadi makin akurat dan serem.

### Penutup: Yang Jadul Belum Tentu Gak Bahaya

Bruteforce itu kayak mantan toxic: udah lama, tapi kadang masih balik-balik dan nyakitin. Jangan remehin cuma karena tekniknya "cuma nebak-nebak". Justru karena itu, siapapun bisa nyobain, termasuk script kiddie.

Kalau kamu ngerasa akunmu aman, coba pikir ulang. Udah ganti password? Udah pake 2FA? Udah nggak pake nama kucing sebagai PIN?

Terus...

> "Security itu bukan soal alatnya, tapi soal kebiasaan manusianya."

Jleb? Ya emang harus.

### Ayo Pilih, Bahas Apa Lagi?

Saya udah bahas bruteforce. Tapi banyak teknik lain yang gak kalah serem:

- **Phishing**
- **Keylogger**
- **Password spraying**
- **Credential stuffing**
- **Man-in-the-middle attack**

Komentar di bawah, mau saya bahas yang mana? Atau mau dikasih wordlist buat simulasi? 😏

Sampai sini dulu, stay safe, jangan pake password nama mantan. Peace.

