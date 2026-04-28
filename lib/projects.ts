export type Project = {
  slug: string
  name: string
  hook: string
  problem: string
  solution: string
  features: string[]
  tech: string[]
  adminSystem: {
    description: string
    benefits: string[]
    image: string
  }
  story: string
  impact: string[]
  thumbnail: string
  accent: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    slug: "blessing-store",
    name: "Blessing Store System",
    liveUrl: "https://blessing-store-seven.vercel.app/",
    hook: "Sistem penjualan jas & blazer premium yang membantu bisnis tampil lebih profesional",
    problem: "Di kota sebesar Medan, kebutuhan akan pakaian formal seperti jas sangatlah tinggi, namun harga jas baru seringkali menjadi penghalang bagi banyak orang.\n\nDi sisi lain, terdapat stigma bahwa jas second-hand itu kusam atau tidak layak pakai. Masalah utamanya adalah penyajian visual yang buruk dan kurangnya kepercayaan pelanggan terhadap kualitas barang yang sudah pernah dipakai.\n\nBlessing Store memiliki produk jas premium, namun butuh wadah yang bisa membuktikan bahwa produk mereka setara dengan jas baru di butik mewah.",
    solution: "Saya membangun ekosistem digital Blessing Store dengan filosofi 'Digital Butik'. Website ini tidak hanya menjadi katalog, tapi juga menjadi platform branding yang menonjolkan setiap detail jahitan dan kualitas kain.\n\nDengan desain yang minimalis namun elegan, saya menciptakan pengalaman belanja yang membuat pelanggan lupa bahwa mereka sedang melihat produk second. Fokus utamanya adalah membangun kredibilitas melalui visual yang bercerita dan navigasi yang sangat lancar.",
    features: ["Katalog Produk Kurasi Tinggi", "Detail Visual Zoom-in", "Integrasi Stok Real-time", "Navigasi Editorial Style"],
    tech: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Vercel Analytics"],
    adminSystem: {
      description: "Sistem administrasi dibangun secara kustom untuk memberikan kendali penuh kepada pemilik toko dalam mengelola ribuan stok jas dengan atribut yang berbeda-beda (ukuran, bahan, kondisi).",
      benefits: ["Manajemen Inventaris Cerdas", "Statistik Penjualan Harian", "Keamanan Data Private", "Optimasi Gambar Otomatis"],
      image: "/dasboard/blessing-admin.png"
    },
    story: "Tantangan terbesar dalam projek ini adalah mengubah persepsi orang. Kami menghabiskan banyak waktu untuk menentukan tone warna dan tipografi yang tepat. \n\nHasilnya luar biasa: website ini berhasil membuat Blessing Store bukan sekadar toko jas biasa, melainkan destinasi fashion formal yang berkelas di mata pelanggannya. Ini membuktikan bahwa di dunia digital, cara Anda menyajikan cerita produk adalah segalanya.",
    impact: ["Transformasi Total Brand Image", "Peningkatan Conversion Rate", "Efisiensi Inventaris hingga 80%"],
    thumbnail: "/tampilan-web/blesing-store.png",
    accent: "from-blue-600 to-cyan-500"
  },
  {
    slug: "imelda-salon",
    name: "Imelda Salon System",
    liveUrl: "https://www.imeldasalon.com/",
    hook: "Sistem branding digital untuk meningkatkan kepercayaan pelanggan salon",
    problem: "Imelda Salon memiliki reputasi yang sangat baik secara offline, namun di dunia digital, mereka hampir tidak memiliki jejak yang profesional. Di era sekarang, calon pelanggan seringkali 'mengecek' kualitas salon lewat website sebelum memutuskan untuk berkunjung.\n\nKurangnya portofolio digital yang terorganisir membuat mereka kesulitan menarik segmen pasar yang lebih luas dan profesional.",
    solution: "Saya merancang identitas digital yang memancarkan aura kemewahan dan keahlian profesional. Website ini dibangun sebagai 'Buku Portofolio Digital' yang dinamis, di mana setiap karya gaya rambut dan testimoni pelanggan disajikan dengan layout yang sangat estetik.\n\nFokus saya adalah menciptakan pengalaman visual yang membuat calon pelanggan merasa 'tenang' dan yakin bahwa mereka berada di tangan ahli yang tepat.",
    features: ["Galeri Transformasi Pelanggan", "Booking Layanan Terintegrasi", "Sistem Testimoni Dinamis", "Animasi Transisi Premium"],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    adminSystem: {
      description: "Admin panel khusus dirancang agar tim salon bisa mengunggah hasil karya terbaru mereka setiap hari tanpa perlu keahlian koding. Sistem ini menjaga website tetap segar dan selalu update.",
      benefits: ["Update Portofolio Instan", "Manajemen Daftar Harga", "Backup Data Otomatis", "Sistem Keamanan Berlapis"],
      image: "/dasboard/imelda-dasboard.png"
    },
    story: "Membangun website ini terasa seperti membangun sebuah butik fashion. Setiap detail, mulai dari jarak antar foto hingga kecepatan loading, sangat diperhatikan. \n\nMomentum terbaik adalah ketika pemilik salon melihat website ini untuk pertama kali dan merasa bahwa identitas salon mereka akhirnya terwakili dengan sempurna di internet.",
    impact: ["Kredibilitas Brand Meningkat Tajam", "Pertumbuhan Pelanggan Baru 40%", "Kemudahan Manajemen Konten"],
    thumbnail: "/tampilan-web/imelda-salon.png",
    accent: "from-indigo-600 to-purple-500"
  },
  {
    slug: "clapham-event",
    name: "Clapham Event System",
    liveUrl: "https://event.imeldasalon.com/",
    hook: "Sistem manajemen event untuk operasional yang lebih terstruktur dan efisien",
    problem: "Pengelolaan event besar seringkali menjadi mimpi buruk karena operasional yang masih mengandalkan dokumen fisik atau spreadsheet yang terfragmentasi. Kesulitan dalam memantau pendaftaran, jadwal, dan ketersediaan sumber daya membuat tim seringkali kewalahan di lapangan.",
    solution: "Saya menghadirkan 'Command Center' digital untuk pengelolaan event. Ini bukan sekadar website informasi, melainkan alat kerja operasional yang kuat.\n\nSistem ini menghubungkan semua titik data ke dalam satu dashboard yang intuitif, memungkinkan tim untuk mengambil keputusan berdasarkan data real-time, bukan sekadar asumsi.",
    features: ["Manajemen Pendaftaran Canggih", "Timeline Event Dinamis", "Dashboard Analitik Real-time", "Sistem Notifikasi Otomatis"],
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
    adminSystem: {
      description: "Sistem admin Clapham dirancang untuk menangani beban data yang tinggi dengan tetap menjaga performa yang cepat. Ini adalah otak dari setiap keputusan operasional.",
      benefits: ["Kontrol Operasional Terpusat", "Monitoring Peserta Real-time", "Export Laporan Otomatis", "Sistem Backup Terjamin"],
      image: "/dasboard/clapham-dasboard.png"
    },
    story: "Projek ini mengajarkan saya bahwa teknologi yang baik adalah teknologi yang mempermudah hidup manusia. Kami mendesain antarmuka yang sangat fungsional namun tetap modern. \n\nMelihat sistem ini berjalan lancar di tengah hiruk-pikuk sebuah event besar adalah kepuasan tersendiri bagi seorang developer.",
    impact: ["Efisiensi Operasional Meningkat 60%", "Reduksi Human-error Signifikan", "Transparansi Data Terjamin"],
    thumbnail: "/tampilan-web/clapham-event.png",
    accent: "from-purple-600 to-pink-500"
  }
]
