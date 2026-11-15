# Panduan Warna

Website punya dua mode: **terang** (default, tampil pertama kali saat web dibuka) dan **gelap**. Pengunjung mengganti mode lewat tombol matahari/bulan di navbar, di samping toggle ID/EN. Pilihannya tersimpan di browser.

Semua warna diatur di satu tempat: `app/globals.css`. Komponen hanya memakai nama token (`bg-background`, `text-primary`, dan seterusnya), jangan menulis kode warna langsung.

## Mode gelap

| Nama | Kode | Dipakai untuk | Token |
|---|---|---|---|
| Hitam | `#0E0E10` | Latar halaman | `bg-background` |
| Putih hangat | `#ECE6DA` | Teks utama | `text-foreground` |
| Vibrant Orange | `#FF5B1A` | Aksen: tombol, link, label, kapsul nav aktif, glow | `text-primary`, `bg-primary`, `bg-brand` |
| Kartu | `#151518` | Kartu, panel | `bg-card` |
| Isian halus | `#1D1D21` | Latar tipis, placeholder gambar | `bg-secondary` |
| Teks redup | `#9D978D` | Keterangan, tanggal | `text-muted-foreground` |
| Garis | `#2A2926` | Border | `border-border` |

## Mode terang (default)

| Nama | Kode | Dipakai untuk | Token |
|---|---|---|---|
| Krim | `#EFE4D2` | Latar halaman | `bg-background` |
| Espresso Brown | `#2B1B13` | Teks utama | `text-foreground` |
| Hijau Pandan (gelap) | `#1E7434` | Aksen: tombol, link, label | `text-primary`, `bg-primary` |
| Hijau Pandan (asli) | `#2F9B45` | Kapsul nav aktif, glow, ring fokus, efek dekoratif | `bg-brand`, `--primary-rgb`, `--ring` |
| Kartu | `#F7F0E4` | Kartu, panel | `bg-card` |
| Isian halus | `#E6D8C2` | Latar tipis | `bg-secondary` |
| Teks redup | `#6E5A4B` | Keterangan, tanggal | `text-muted-foreground` |
| Garis | `#DCCBB2` | Border | `border-border` |

**Kenapa hijaunya digelapkan?** Pandan asli `#2F9B45` di atas Krim kontrasnya hanya sekitar 2,8:1, jadi teks kecil hijau sulit dibaca. Versi `#1E7434` kontrasnya 4,6:1 dan lolos standar WCAG AA. Pandan asli tetap dipakai untuk glow dan efek yang bukan teks.

## Aturan

1. **Aksen hanya untuk penekanan:** link, label kecil, status aktif, satu tombol utama per section, dan garis tipis. Jangan dipakai untuk paragraf panjang.
2. **Teks di atas tombol aksen** pakai `text-primary-foreground`. Di mode gelap hasilnya hitam di atas oranye, di mode terang krim di atas hijau.
3. **Glow dan efek** pakai variabel RGB supaya ikut berganti mode:
   - Tailwind: `shadow-[0_0_20px_rgb(var(--primary-rgb)/0.25)]`
   - CSS: `rgb(var(--primary-rgb) / 0.25)`
   - Batas maksimal opacity glow: **0.25**.
4. **Teks di atas foto atau video gelap** (hero, kartu bergambar) beri class `on-media`. Class ini memaksa teks tetap terang di kedua mode.
5. **Hero selalu gelap** karena latarnya video.
6. **Navbar:**
   - Di atas hero (halaman utama, sebelum scroll), navbar transparan dengan teks terang (`on-media`).
   - Setelah scroll dan di halaman lain, navbar jadi bar warna latar: krim di mode terang, hitam di mode gelap. Teksnya mengikuti tema.
   - Item aktif memakai kapsul **solid** warna brand asli (`bg-brand`): Pandan `#2F9B45` di mode terang, Oranye `#FF5B1A` di mode gelap, dengan teks putih. Kapsulnya bergeser saat pindah halaman atau section.
   - Navbar bawah di HP mengikuti aturan yang sama.
7. **Label di atas screenshot** (misalnya tag teknologi di kartu proyek) tetap `bg-black/50 text-white`, karena latarnya gambar, bukan tema.
8. **Tint halus** pakai `bg-foreground/5` dan `border-foreground/10`, jangan `bg-white/5`. Warna putih tidak terlihat di mode terang.
9. **Pengecualian:** kartu "Kolaborasi" di `feature-section.tsx` duduk di atas video terang, jadi teksnya tetap `text-black`.

## Menambah atau mengubah warna

1. Ubah nilainya di `app/globals.css`, di blok `:root, .light` untuk mode terang dan `.dark` untuk mode gelap. **Selalu ubah keduanya.** Blok terang harus tetap di atas blok gelap, karena urutan ini menentukan mana yang menang.
2. Kalau warnanya dipakai untuk efek (glow, matrix), perbarui juga `--primary-rgb`, `--foreground-rgb`, atau `--background-rgb` dalam format `R G B`.
3. Cek kontras teks minimal 4,5:1, misalnya di webaim.org/resources/contrastchecker.
4. Perbarui tabel di dokumen ini.
