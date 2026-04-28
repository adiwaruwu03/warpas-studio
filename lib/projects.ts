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
    problem: "Di Medan, banyak orang sebenarnya butuh jas atau outfit formal yang rapi, tapi sering terkendala harga.\n\nDi sisi lain, konsep jas second premium masih sering dipandang sebelah mata, padahal kalau dikurasi dengan baik, kualitasnya bisa sangat layak bahkan terlihat seperti baru.\n\nMasalah utamanya bukan di produknya, tapi di cara penyajian dan kepercayaan.",
    solution: "Saya membangun website Blessing Store dengan pendekatan branding digital. Fokusnya bukan hanya jualan, tapi bagaimana membuat produk terlihat lebih rapi, lebih elegan, dan lebih dipercaya.",
    features: ["Katalog produk jas & blazer", "Tampilan clean & editorial", "Navigasi sederhana"],
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    adminSystem: {
      description: "Dashboard digunakan untuk update produk, mengatur katalog, dan menjaga data tetap rapi. Akses dibuat private untuk keamanan.",
      benefits: ["Update produk real-time", "Manajemen katalog efisien", "Data terstruktur"],
      image: "/dasboard/blessing-admin.png"
    },
    story: "Bagian paling menarik dari projek ini adalah bagaimana sesuatu yang dianggap “second” bisa terlihat premium hanya dari cara ditampilkan. Dari layout sampai warna, semuanya dibuat supaya orang langsung merasa: “ini beda dari yang lain”.",
    impact: ["Brand terlihat lebih profesional", "Produk terasa lebih premium", "Kepercayaan meningkat"],
    thumbnail: "/tampilan-web/blesing-store.png",
    accent: "from-blue-500 to-cyan-400"
  },
  {
    slug: "imelda-salon",
    name: "Imelda Salon System",
    liveUrl: "https://www.imeldasalon.com/",
    hook: "Sistem branding digital untuk meningkatkan kepercayaan pelanggan salon",
    problem: "Salon di daerah sering kali punya kualitas bagus, tapi belum punya tampilan digital yang bisa mencerminkan kualitas tersebut. Akibatnya, kepercayaan pelanggan baru jadi lebih sulit dibangun.",
    solution: "Saya membangun website untuk Imelda Salon dengan fokus pada branding dan kepercayaan. Website ini dibuat untuk menunjukkan bahwa salon ini serius, profesional, dan layak dipercaya.",
    features: ["Informasi fitur lengkap", "Tampilan elegan & feminin", "Testimoni pelanggan"],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    adminSystem: {
      description: "Dashboard digunakan untuk update konten, mengatur sistem, dan menjaga informasi tetap relevan.",
      benefits: ["Update fitur mandiri", "Manajemen konten dinamis", "Info kontak terpusat"],
      image: "/dasboard/imelda-dasboard.png"
    },
    story: "Yang menarik dari projek ini adalah bagaimana sebuah salon di daerah bisa naik level hanya dengan digital presence yang tepat. Bukan cuma soal desain, tapi soal rasa percaya yang dibangun.",
    impact: ["Brand lebih dipercaya", "Tampilan lebih profesional", "Lebih mudah menarik pelanggan baru"],
    thumbnail: "/tampilan-web/imelda-salon.png",
    accent: "from-indigo-500 to-purple-400"
  },
  {
    slug: "clapham-event",
    name: "Clapham Event System",
    liveUrl: "https://event.imeldasalon.com/",
    hook: "Sistem manajemen event untuk operasional yang lebih terstruktur dan efisien",
    problem: "Pengelolaan event masih dilakukan secara manual dan tidak efisien. Data tersebar dan proses koordinasi menjadi lebih sulit.",
    solution: "Saya membangun sistem untuk membantu pengelolaan event menjadi lebih terstruktur. Fokusnya adalah efisiensi dan kemudahan pengelolaan.",
    features: ["Dashboard event", "Pengelolaan data", "Monitoring sistem"],
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    adminSystem: {
      description: "Dashboard menjadi pusat kontrol untuk semua operasional event. Akses dibatasi untuk keamanan sistem.",
      benefits: ["Kontrol operasional penuh", "Monitoring real-time", "Sistem data aman"],
      image: "/dasboard/clapham-dasboard.png"
    },
    story: "Dari yang awalnya manual, sistem ini pelan-pelan berkembang jadi sesuatu yang benar-benar membantu. Dan di situ terasa kalau ini bukan cuma website, tapi solusi.",
    impact: ["Proses lebih efisien", "Data lebih rapi", "Operasional lebih mudah"],
    thumbnail: "/tampilan-web/clapham-event.png",
    accent: "from-purple-500 to-pink-500"
  }
]
