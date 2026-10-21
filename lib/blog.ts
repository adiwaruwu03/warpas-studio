export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  cover?: string
  tags: string[]
  content: string
}

// Search terms every blog page targets, on top of its own tags
export const SEO_KEYWORDS = [
  "web developer Medan",
  "jasa pembuatan website Medan",
  "jasa pembuatan aplikasi Medan",
  "developer aplikasi Medan",
  "jasa pembuatan website",
  "jasa web developer",
  "pembuatan aplikasi web",
  "web developer Sumatera Utara",
  "jasa pembuatan website Sumatera Utara",
  "web developer Nias",
  "jasa pembuatan website Nias",
  "web developer Sumatra",
  "web developer Indonesia",
  "jasa pembuatan website Indonesia",
  "Adi Putra Waruwu",
  "Adi Waruwu",
]

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
}

// Urutan: terbaru di atas
export const posts: BlogPost[] = [
  {
    slug: "cerita-membuka-jasa-pembuatan-website",
    title: "Dari Proyek Kampus ke Jasa Website: Kenapa Saya Membantu UMKM Go Digital",
    date: "2026-10-21",
    excerpt: "Butuh website company profile, landing page, toko online, atau aplikasi web kustom di Medan? Ini layanan yang saya tawarkan dan cara saya mengerjakannya.",
    cover: "/blog/jasa-pembuatan-website-medan.jpg",
    tags: ["Jasa Website", "Web Developer Medan", "Next.js", "Laravel", "UMKM"],
    content: `Setelah mengerjakan beberapa project nyata, mulai dari website salon, toko jas, sampai sistem manajemen event, saya semakin yakin satu hal: setiap bisnis, sekecil apa pun, layak punya wajah digital yang profesional.

Karena itu sekarang saya membuka jasa pembuatan website untuk bisnis dan UMKM, khususnya di Medan.

Layanan yang saya tawarkan:
• Website profesional (company profile)
• Landing page yang menarik untuk promosi produk atau event
• Toko online (e-commerce)
• Aplikasi web kustom, misalnya untuk apotek, klinik, UMKM, dan kebutuhan bisnis lainnya

Teknologi yang saya gunakan:
• Next.js dan React untuk tampilan yang cepat dan modern
• Tailwind CSS untuk desain yang rapi dan responsif
• Laravel dan PHP untuk sistem backend
• Supabase untuk database dan autentikasi
• JavaScript dan TypeScript

Setiap website yang saya kerjakan saya pegang dengan empat prinsip: cepat, responsif, aman, dan SEO friendly. Pengalaman membawa website Imelda Salon dari tidak muncul sama sekali di Google sampai mulai naik di hasil pencarian mengajarkan saya bahwa website yang bagus belum cukup. Website juga harus bisa ditemukan oleh orang yang sedang mencarinya.

Punya ide atau kebutuhan website untuk bisnismu? Konsultasi gratis. Hubungi saya lewat form kontak di halaman utama atau langsung via WhatsApp.`,
  },
  {
    slug: "sistem-informasi-apotek-kasir-pos-ai",
    title: "Membangun Sistem Informasi Apotek: Kasir POS, Inventori Real-Time, dan Scan Faktur dengan AI",
    date: "2026-10-18",
    excerpt: "Dari permintaan sederhana \"aplikasi scan barcode obat\" menjadi sistem informasi apotek lengkap: kasir POS, inventori real-time, peringatan kedaluwarsa, dan input faktur otomatis dengan AI.",
    cover: "/blog/sistem-apotek-dashboard.png",
    tags: ["Sistem Informasi Apotek", "Aplikasi Kasir POS", "Next.js", "Artificial Intelligence", "Software Engineering"],
    content: `Berawal dari satu permintaan sederhana teman saya yang baru buka toko apotek: "Buatkan aplikasi yang bisa scan barcode obat dong."

Bagi orang awam, ini mungkin kedengarannya gampang banget. "Oh, cuma scan barcode." Tapi dalam pandangan saya, saya tahu persis permintaan ini bakal merembet ke mana-mana. 😂

Dan benar saja, sistem ini saya rancang menjadi dua bagian utama: Manajemen dan Kasir (POS). Tapi agar aman dan fleksibel, sistem kasirnya saya integrasikan langsung di dalam ekosistem manajemen dengan batasan hak akses yang ketat.

![Dashboard sistem informasi apotek LF Apotek: pendapatan, estimasi laba bersih, volume transaksi, dan peringatan stok](/blog/sistem-apotek-dashboard.png)

Semakin saya berdiskusi dan menyelami alur bisnis apotek ini, sistemnya pun terus berkembang.

📦 Manajemen Inventori Real-Time
Tidak ada lagi cerita stok bocor atau selisih barang. Setiap pergerakan obat, pemantauan stok menipis, hingga peringatan masa kedaluwarsa (expired), semuanya terpusat dan bisa dipantau langsung oleh owner.

💻 Point of Sale (Kasir) Khusus Transaksi Toko
Karena ini apotek fisik, transaksi offline di meja kasir harus berjalan sat-set agar antrean pasien tidak menumpuk. Tapi ada satu rule bisnis yang mutlak: tidak semua karyawan boleh membuka halaman admin. Harga modal, laba bersih, dan master data adalah rahasia owner.

Solusinya? Saya merancang halaman kasir terpisah yang terisolasi. Kasir hanya punya akses untuk scan barang, pilih metode pembayaran (QRIS/Tunai), dan cetak struk. Mereka bisa melayani pelanggan dengan cepat, tanpa bisa mengintip dapur manajemen sama sekali.

![Halaman kasir POS apotek dengan pencarian produk, kategori obat, keranjang, dan pilihan pembayaran tunai atau QRIS](/blog/sistem-apotek-kasir-pos.png)

🤖 Otomatisasi Input Faktur dengan AI (Artificial Intelligence)
Dan yang paling seru ada di bagian integrasi AI untuk membaca foto kertas faktur supplier! Kasir tidak perlu lagi capek mengetik ulang puluhan item obat secara manual saat barang datang, karena AI akan mengekstrak teks dari foto dan mengisi form inventori secara otomatis.

![Fitur scan faktur otomatis dengan AI: foto faktur supplier dibaca dan form pembelian terisi otomatis](/blog/sistem-apotek-scan-faktur-ai.png)

Proyek ini kembali mengingatkan saya tentang empati, memahami masalah di lapangan, dan menghadirkan teknologi yang tepat guna. Kebahagiaan saya adalah ketika berhasil memahami proses usaha, menerjemahkan keinginan owner, dan mewujudkannya menjadi solusi nyata yang mempermudah pekerjaan orang lain.

Jika ingin melihat hasil proyek ini, saya sudah merekam dan mengunggah demonya di YouTube pribadi saya: https://youtu.be/QhQfdjM28T0

Berawal dari fitur scan barcode, berakhir menjadi asisten digital untuk operasional apotek. 🚀`,
  },
  {
    slug: "plot-twist-proyek-kerja-praktik",
    title: "Plot Twist dari Proyek Kerja Praktik Saya: Aplikasinya Selesai, Tapi...",
    date: "2026-06-30",
    excerpt: "Cerita membangun aplikasi mobile booking ruangan coworking space dengan Flutter untuk Kerja Praktik: dari kalender sederhana jadi sistem dengan logika bisnis nyata.",
    tags: ["Aplikasi Mobile", "Flutter", "Aplikasi Booking Ruangan", "Kerja Praktik", "Software Developer"],
    content: `Dalam mata kuliah Kerja Praktik, ada tiga pilihan yang dapat diambil sebagai salah satu syarat sebelum menyusun skripsi:
✅ Magang di luar Kota Medan (kerja sambil kuliah jadi gk bisa)
✅ Membuat aplikasi (menarik)
✅ Menulis jurnal (gk tertarik)

Akhirnya saya memilih pilihan kedua, membuat aplikasi mobile. Ide ini bukan muncul karena tugas kuliah, melainkan dari keresahan saya sendiri sebagai karyawan di sebuah coworking space. Di tempat saya bekerja, informasi mengenai event atau penggunaan ruangan sering kali baru diketahui H-1. Kadang admin juga lupa menginformasikannya ke grup WhatsApp. Memang sudah ada kalender perusahaan, tetapi menurut saya masih kurang praktis karena harus membuka beberapa tempat hanya untuk melihat jadwal.

Dari situlah saya memberanikan diri mengajukan sebuah ide. Saya mengajak seorang teman untuk mengerjakan proyek ini bersama, lalu mengajukannya ke Program Studi sebagai topik Kerja Praktik. Syukurnya, ide tersebut disetujui.

Awalnya saya mengira aplikasi ini akan sederhana. "Yang penting ada informasi penyewaan ruangan dan kalender." Ternyata... saya salah. 😂

Setiap kali bimbingan, dosen selalu meminta penambahan fitur:
• Login terpisah untuk admin dan karyawan.
• Manajemen data ruangan.
• Sistem booking yang fleksibel.
• Kalender yang menampilkan harga dan jadwal.
• Booking beberapa ruangan sekaligus dalam tanggal dan jam yang berbeda.
• Perhitungan total biaya secara otomatis.
• Harga khusus untuk member sesuai jenis ruangan.
• Upload foto KTP dan data lengkap penyewa.
• Pembuatan struk booking yang bisa diunduh.
• Notifikasi pembaruan booking secara real-time.

Di titik itu saya sadar... ini bukan lagi sekadar tugas kuliah. Saya sedang membangun sebuah sistem dengan logika bisnis yang nyata.

Saya mulai dari merancang database, membangun aplikasi menggunakan Flutter, menghubungkannya dengan backend, lalu memastikan setiap proses booking berjalan sesuai kebutuhan.

Namun semua rasa lelah itu akhirnya terbayar. Aplikasi ini berhasil saya selesaikan. Lalu datanglah plot twist yang tidak pernah saya bayangkan sebelumnya: "Sebagian besar perangkat yang digunakan di kantor ternyata adalah iPhone 🥹", sedangkan aplikasi yang saya bangun saat ini baru tersedia untuk Android. Saat itu saya hanya bisa tersenyum sambil berkata dalam hati, "Ya Tuhan, kenapa baru keingat." Jujur... sedikit sakit di dada, karena saya baru menyadarinya.

Apakah saya menyesal? Tidak. Proyek ini mengajarkan saya sesuatu yang mungkin tidak saya dapatkan dari teori di kelas. Menjadi software developer bukan hanya tentang menulis kode, tetapi juga tentang memahami kebutuhan pengguna, proses bisnis, dan kebiasaan mereka dalam menggunakan teknologi.

Ini adalah pengalaman pertama saya membangun aplikasi yang lahir dari masalah nyata, diselesaikan dengan logika bisnis nyata, dan dipukul dengan kenyataan 😂🤭`,
  },
  {
    slug: "dari-domain-gratis-ke-seo-imelda-salon",
    title: "Dari Domain Gratis ke SEO: Cerita Website Imelda Salon di Medan",
    date: "2026-02-16",
    excerpt: "Pengalaman membangun website salon di Medan, upgrade ke domain sendiri, lalu belajar SEO dari nol: riset keyword, Google Search Console, dan Google Business Profile.",
    cover: "/tampilan-web/imelda-salon.png",
    tags: ["SEO", "Digital Marketing", "Web Development", "Local SEO", "Personal Growth"],
    content: `Sebagai mahasiswa semester 6, aku lagi senang-senangnya dapat kesempatan mengembangkan website salon.

Di awal proses, targetku masih sangat sederhana: "Yang penting websitenya online dan link-nya bisa dibuka."

Saat itu aku bahkan masih menggunakan domain gratisan imelda-salon.vercel.app. Dan jujur saja, aku sudah merasa cukup puas. Website bisa diakses, bisa dikirim ke customer, dan terlihat "sudah jadi".

Namun seiring berjalan waktu, sudut pandangku mulai berubah. Aku mulai berpikir, jika bisnis ini ingin terlihat lebih profesional, tentu tidak cukup hanya mengandalkan domain gratis.

Akhirnya aku memberanikan diri untuk upgrade ke domain berbayar 160rb/tahun menjadi imeldasalon.com. Keputusan kecil, tapi menjadi titik balik besar dalam cara pandangku terhadap website ini.

Sejak saat itu, aku tidak lagi melihatnya sebagai sekadar project, melainkan sebagai aset digital bisnis yang harus bertumbuh.

Kesadaran berikutnya pun muncul: kalau orang tidak memiliki link websitenya, bagaimana mereka bisa menemukan bisnis ini?

Dari situlah aku mulai masuk ke dunia SEO. Belajar dari nol tentang:
• Riset keyword
• Indexing Google
• Meta tag & on-page SEO
• Google Search Console
• Google Business Profile
• Optimasi konten berbasis lokasi

Di proses belajar itu, aku sangat bersyukur dengan rekan dan senior yang mau berbagi ilmu. Ada yang memberi arahan praktis, ada yang membuka wawasan strategis, bahkan ada yang membagikan akses materi & teori dasar SEO untuk kupelajari lebih dalam. Dari situ aku sadar, growth di digital marketing bukan hanya soal tools, tapi juga soal ekosistem belajar.

Secara praktik, hasilnya mulai terlihat. Dulu saat keyword terkait lokasi dicari, website yang kukerjakan sama sekali tidak muncul di Google. Sekarang, setelah menerapkan optimasi dasar, website tersebut sudah mulai terindeks dan naik ke halaman 3 pencarian. Memang belum sampai target halaman 1.

Namun progres ini menjadi validasi bahwa proses yang dijalani sudah berada di jalur yang benar.

Mindset-ku pun ikut berubah. Bukan lagi sekadar: "Website bisa dibuka." Tapi menjadi: "Bagaimana website ini ditemukan oleh orang yang memang sedang mencarinya?"

Perjalanannya masih panjang. Masih banyak yang harus kupelajari, praktikkan, dan optimalkan. Tapi satu hal yang pasti: setiap proses kecil, insight baru, dan ilmu yang dibagikan orang lain sangat berarti dalam perjalanan ini.

Learning never stops 🚀`,
  },
  {
    slug: "membangun-sistem-event-clapham",
    title: "Membangun Sistem Manajemen Event Clapham dengan Next.js",
    date: "2025-11-01",
    excerpt: "Dari spreadsheet yang berserakan ke satu dashboard terpusat: cerita membangun aplikasi web manajemen event dengan Next.js dan PostgreSQL.",
    cover: "/tampilan-web/clapham-event.png",
    tags: ["Web Development", "Dashboard", "Next.js", "PostgreSQL"],
    content: `Mengelola event besar itu tidak pernah sederhana. Pendaftaran peserta, jadwal, dan sumber daya sering tercatat di dokumen dan spreadsheet yang terpisah-pisah. Akibatnya tim kewalahan di lapangan.

Dari situ aku membangun Clapham Event System. Tujuannya bukan sekadar website informasi, tapi alat kerja operasional: satu dashboard yang menghubungkan semua data, supaya tim bisa mengambil keputusan dari data real-time, bukan asumsi.

Beberapa hal yang kubangun:
• Manajemen pendaftaran peserta
• Timeline event yang dinamis
• Dashboard analitik real-time
• Export laporan otomatis

Tantangan terbesarnya adalah menjaga sistem tetap cepat walau datanya banyak, sekaligus membuat antarmukanya mudah dipakai oleh tim yang sedang sibuk di lapangan.

Project ini mengajarkanku satu hal: teknologi yang baik adalah teknologi yang mempermudah hidup manusia. Melihat sistem ini berjalan lancar di tengah hiruk-pikuk event adalah kepuasan tersendiri.`,
  },
  {
    slug: "blessing-store-jas-second-terasa-premium",
    title: "Blessing Store: Website Toko Jas yang Terasa Seperti Butik",
    date: "2025-06-01",
    excerpt: "Membangun website toko online jas dan blazer di Medan: bagaimana desain UI/UX dan cara bercerita mengubah persepsi pelanggan terhadap produk second-hand.",
    cover: "/tampilan-web/blesing-store.png",
    tags: ["Branding", "UI/UX", "Next.js", "E-commerce"],
    content: `Di Medan, kebutuhan pakaian formal seperti jas sangat tinggi, tapi harga jas baru sering jadi penghalang. Di sisi lain, masih ada stigma bahwa jas second itu kusam dan tidak layak pakai.

Blessing Store punya produk jas berkualitas, tapi butuh wadah yang bisa membuktikannya. Di sinilah aku masuk dengan konsep "Digital Butik": website yang bukan sekadar katalog, tapi platform branding yang menonjolkan detail jahitan dan kualitas kain.

Aku menghabiskan banyak waktu untuk menentukan tone warna dan tipografi yang tepat. Desainnya minimalis tapi elegan, dengan navigasi yang lancar, supaya pengunjung fokus pada kualitas produk.

Di balik layar, aku juga membangun admin panel untuk mengelola stok jas dengan atribut berbeda-beda seperti ukuran, bahan, dan kondisi.

Pelajaran terbesarku dari project ini: di dunia digital, cara kita menyajikan cerita produk adalah segalanya.`,
  },
]
