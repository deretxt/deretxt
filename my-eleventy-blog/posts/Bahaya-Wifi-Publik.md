---
layout: layout.njk
title: "Jangan Asal Konek Wifi Publik  Bahaya, Bro!"
date: 2025-04-13
tags: post
---

## Jangan Asal Konek Wifi Publik  Bahaya, Bro!



### Bahaya Wifi Publik Itu Nyata, Bro (Serius!)

Pernah nggak sih kamu lagi nongkrong di kafe, terus tiba-tiba ada WiFi gratis nongol di notifikasi HP? Judulnya manis banget, kayak "Free\_CoffeeShop\_WiFi" atau kadang lebih niat, "INTERNET GRATIS 100%". Tanpa pikir panjang, kamu langsung klik *connect*, buka Instagram, scrolling TikTok, atau malah login ke akun internet banking? Nah, itu titik awal kamu membuka pintu buat maling digital masuk ke hidupmu.

Kenapa saya bilang gitu? Karena konek ke WiFi publik itu ibarat kamu ngomongin rahasia keluarga di warung, pas jam rame. Semua orang bisa denger. Sama halnya dengan data yang kamu kirim waktu konek ke WiFi publik—kalau nggak diamankan, bisa aja ada orang iseng yang ngupingin alias *sniffing* data kamu di situ.

Bahaya paling ringan? Chat kamu kebaca. Bahaya sedang? Username dan password akun medsos ketangkep. Bahaya fatal? Akun internet banking kamu dibobol, terus saldo tinggal lima ribu, itu pun hasil refund Shopee.

Dan jangan kira kamu aman cuma karena buka e-commerce doang. Banyak situs masih nyimpen cookie atau token login di format yang bisa diendus. Ya, kayak aromanya mi instan jam 12 malem: menggoda buat disikat.

### Keresahan Pribadi Saya: Kenapa Demo Ini Saya Buat

Jujur ya, keresahan ini muncul karena saya sering banget liat orang konek WiFi asal-asalan. Entah di kafe, taman kota, sampe ke tempat publik yang bahkan nggak ada petugas IT-nya. Mereka nyari sinyal kayak nyari jodoh, asal connect yang penting dapet. Padahal, yang mereka nggak sadar, bisa jadi WiFi itu dipasang sama orang iseng, atau malah dibajak dari dalam jaringan yang resmi.

Makanya, dari keresahan itu, saya iseng bikin demo kecil buat ngebuktiin ke temen-temen semua: kalau konek ke WiFi publik itu nggak selalu aman. Bahkan, data login bisa keliatan jelas kayak ngintip isi keranjang belanja orang di Indomaret.

### Demo Sniffing HTTP: Bikin Sendiri, Teknikal Tapi Gampang

Oke, ini bagian favorit saya. Demi menyuarakan keresahan saya soal keamanan, saya bikin demo sederhana pakai **Kali Linux**. Tools utama saya:

- **Flask** buat bikin server dan halaman login palsu
- **Wireshark** buat nangkep paket data dari jaringan
- **HTML sederhana** buat form login biar keliatan kayak form real

Struktur folder saya simpen di:

```
/home/Project/http-sniff-demo/
├── login.html
└── server.py
```

Isi dari `login.html` adalah form sederhana:

<pre class="terminal"><code>
<form action="http://<IP-SAYA>:5000/login" method="POST">
  <input type="text" name="username">
  <input type="password" name="password">
  <input type="submit" value="Login">
</form>
</pre>

Sedangkan `server.py` pakai Flask buat nerima form tersebut:

<pre class="terminal"><code>
@app.route('/login', methods=['POST'])
def login():
  username = request.form.get('username')
  password = request.form.get('password')
  print(f"Login: {username}:{password}")
</pre>

Saya jalankan server-nya dari terminal:

<pre class="terminal"><code>
cd /home/Project/http-sniff-demo
python3 server.py
</pre>

Lalu saya buka `login.html` dari HP saya, submit form, dan buka **Wireshark** 

Boom. Muncul paket POST ke `/login`, dan di dalamnya:

<pre class="terminal"><code>
username=Deryprativi&password=1234KOCAK
</pre>

Udah kayak nyomot password orang dari atas meja kan, gampang banget.

Tangkapan layar dari Wireshark dan tampilan HP saya juga udah saya simpan buat bukti. Jadi ini bukan cuma teori doang, tapi pure praktik real.

### 4. Tips Biar Aman Konek ke WiFi Publik

Sekarang, biar nggak jadi korban, saya mau kasih beberapa tips simpel tapi agak teknis dikit:

#### a. Gunakan VPN

VPN itu kayak jalur rahasia. Meski kamu lewat jalan umum (WiFi publik), data kamu tetap dilindungi karena dikirim lewat "terowongan" terenkripsi. Jadi meski ada yang ngintip, isinya tetap terenkripsi.

Contoh layanan VPN yang bisa kamu pakai:

- ProtonVPN
- Mullvad
- Windscribe

Ingat, hindari VPN gratis yang aneh-aneh, karena bisa aja justru mereka jual data kamu.

#### b. Hindari Login ke Akun Penting di WiFi Publik

Kalau kamu cuma browsing berita, oke lah. Tapi jangan coba-coba login ke akun email, internet banking, atau akun kerjaan saat konek WiFi umum. Simpan aktivitas sensitif untuk nanti pas udah di rumah atau pakai jaringan seluler.

#### c. Selalu Periksa HTTPS

Sebelum masukin data apa pun, cek dulu apakah URL-nya mulai dari `https://`, bukan `http://`. HTTPS berarti data kamu dienkripsi sebelum dikirim. Walaupun nggak 100% aman, ini langkah dasar yang kudu dijaga.

#### d. Matikan Auto-Connect WiFi

Kadang HP suka auto konek ke jaringan publik yang pernah dipakai. Matikan fitur ini biar kamu nggak nyasar nyambung ke WiFi yang udah disusupi atau malah palsu.

#### e. Update Sistem & Aplikasi

Kadang celah keamanan datang dari software yang belum diupdate. Update itu bukan cuma buat fitur baru, tapi juga nutup lubang keamanan.

### 5. Penutup: Buat yang Masih Ngeyel, Coba Pikir Lagi

Kalau kamu masih mikir, "Ah nggak bakal lah, saya cuma buka YouTube doang kok," yaudah, silakan. Tapi jangan kaget kalau suatu hari akun kamu kebobol dan muncul story jualan iPhone 13 harga 1 juta. Padahal kamu sendiri yang ngasih username dan password lewat WiFi publik.

Buat yang masih ngeyel, saya cuma bisa bilang: "Keamanan digital itu kayak sabuk pengaman. Nggak keren dipakai, tapi nyelametin nyawa kalau terjadi kecelakaan."

Jadi yuk, mulai sekarang jangan konek WiFi publik cuma karena gratis. Karena bisa jadi, yang gratis itu justru bikin kamu bayar mahal—dengan akun jebol, data ilang, bahkan identitas kamu disalahgunakan.

Stay safe, stay aware. Jangan cuma pinter nyari sinyal, tapi juga pinter jaga data.


