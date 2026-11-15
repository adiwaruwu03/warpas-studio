// Services shown on the home page (#layanan) and on /jasa-pembuatan-website-medan.
// Only state facts we can back up: no prices, durations or results we have not delivered.
export type Service = {
  title: string
  titleEn: string
  desc: string
  descEn: string
  points: string[]
  pointsEn: string[]
  // A real project of this kind (slug in lib/projects.ts)
  example?: string
}

export const services: Service[] = [
  {
    title: "Website Company Profile",
    titleEn: "Company Profile Website",
    desc: "Website profesional untuk perusahaan, toko, salon, klinik, atau UMKM di Medan dan sekitarnya. Tampil meyakinkan, cepat, dan mudah ditemukan di Google.",
    descEn: "A professional website for companies, shops, salons, clinics or small businesses. Credible, fast, and easy to find on Google.",
    points: ["Desain sesuai identitas brand", "Responsif di HP dan desktop", "SEO dasar dan Google Search Console"],
    pointsEn: ["Design that fits your brand", "Responsive on phone and desktop", "Basic SEO and Google Search Console"],
    example: "imelda-salon",
  },
  {
    title: "Landing Page",
    titleEn: "Landing Page",
    desc: "Satu halaman fokus untuk promosi produk, event, atau kampanye iklan, dirancang agar pengunjung langsung menghubungi Anda.",
    descEn: "One focused page for a product, event or ad campaign, built so visitors contact you right away.",
    points: ["Satu tujuan: pengunjung langsung chat", "Ringan dan cepat dimuat", "Siap dipakai untuk iklan"],
    pointsEn: ["One goal: visitors start a chat", "Light and fast to load", "Ready for ad campaigns"],
  },
  {
    title: "Toko Online (E-Commerce)",
    titleEn: "Online Store (E-Commerce)",
    desc: "Katalog dan toko online dengan tampilan rapi, agar produk Anda terlihat profesional dan dipercaya pembeli.",
    descEn: "A clean catalog and online store, so your products look professional and buyers trust them.",
    points: ["Katalog produk yang rapi", "Foto dan detail produk yang jelas", "Panel admin untuk kelola stok"],
    pointsEn: ["A tidy product catalog", "Clear product photos and details", "Admin panel to manage stock"],
    example: "blessing-store",
  },
  {
    title: "Aplikasi Web Kustom",
    titleEn: "Custom Web Application",
    desc: "Sistem sesuai alur bisnis Anda: aplikasi kasir (POS), sistem informasi apotek dan klinik, manajemen stok, booking ruangan, dan dashboard admin.",
    descEn: "A system shaped around your business: point of sale, pharmacy or clinic information systems, stock management, room booking and admin dashboards.",
    points: ["Kasir POS dengan hak akses", "Inventori dan laporan real-time", "Integrasi AI, misalnya scan faktur"],
    pointsEn: ["Point of sale with access roles", "Real-time inventory and reports", "AI features, e.g. invoice scanning"],
    example: "lf-apotek",
  },
]
