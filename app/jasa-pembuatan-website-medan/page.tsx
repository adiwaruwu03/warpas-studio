import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { playfair, spaceGrotesk } from "@/lib/tech-fonts"
import { projects } from "@/lib/projects"
import { SEO_KEYWORDS } from "@/lib/blog"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"

const SITE = "https://adi-putra-waruwu.vercel.app"
const PATH = "/jasa-pembuatan-website-medan"
const WA = "https://wa.me/6283836098858"

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website & Aplikasi Medan, Nias, Sumatera Utara | Adi Waruwu",
  description:
    "Jasa pembuatan website dan aplikasi di Medan, Nias, dan Sumatera Utara: company profile, landing page, toko online, kasir POS, sistem informasi. Web developer Medan, konsultasi gratis.",
  keywords: SEO_KEYWORDS,
  alternates: { canonical: PATH },
  openGraph: {
    title: "Jasa Pembuatan Website & Aplikasi Medan | Adi Waruwu",
    description: "Web developer Medan untuk website company profile, toko online, dan aplikasi web kustom. Melayani Medan, Nias, Sumatera Utara, dan seluruh Indonesia.",
    url: `${SITE}${PATH}`,
    images: ["/blog/jasa-pembuatan-website-medan.jpg"],
  },
}

const services = [
  {
    title: "Website Company Profile",
    desc: "Website profesional untuk perusahaan, toko, salon, klinik, atau UMKM di Medan dan sekitarnya. Tampil meyakinkan, cepat, dan mudah ditemukan di Google.",
  },
  {
    title: "Landing Page",
    desc: "Satu halaman fokus untuk promosi produk, event, atau kampanye iklan, dirancang agar pengunjung langsung menghubungi Anda.",
  },
  {
    title: "Toko Online (E-Commerce)",
    desc: "Katalog dan toko online dengan tampilan rapi, seperti website Blessing Store, agar produk Anda terlihat profesional.",
  },
  {
    title: "Aplikasi Web Kustom",
    desc: "Sistem sesuai alur bisnis Anda: aplikasi kasir (POS), sistem informasi apotek dan klinik, manajemen stok, booking ruangan, dan dashboard admin.",
  },
]

const steps = [
  { title: "Konsultasi gratis", desc: "Ceritakan kebutuhan bisnis Anda lewat WhatsApp. Kita bahas tujuan, fitur, dan alur kerjanya." },
  { title: "Rancangan & penawaran", desc: "Saya susun rancangan halaman atau fitur beserta penawaran yang jelas sebelum mulai." },
  { title: "Pengembangan", desc: "Website atau aplikasi dibangun dengan Next.js, React, atau Laravel, dan Anda bisa memantau progresnya." },
  { title: "Online & SEO dasar", desc: "Website dipasang online, dioptimasi SEO dasar, dan dihubungkan ke Google Search Console." },
]

const areas = ["Medan", "Nias", "Sumatera Utara", "Seluruh Sumatera", "Seluruh Indonesia (online)"]

const faqs = [
  {
    q: "Apakah melayani klien di luar Medan, misalnya Nias?",
    a: "Bisa. Saya berbasis di Medan, Sumatera Utara, dan melayani klien di Nias, seluruh Sumatera, hingga seluruh Indonesia. Konsultasi dan koordinasi dilakukan online lewat WhatsApp.",
  },
  {
    q: "Apakah konsultasinya gratis?",
    a: "Ya, konsultasi awal gratis. Anda bisa menceritakan kebutuhan website atau aplikasi terlebih dahulu tanpa kewajiban apa pun.",
  },
  {
    q: "Jenis website dan aplikasi apa saja yang bisa dibuat?",
    a: "Website company profile, landing page, toko online, dan aplikasi web kustom seperti kasir POS, sistem informasi apotek atau klinik, manajemen inventori, dan sistem booking.",
  },
  {
    q: "Apakah website yang dibuat SEO friendly?",
    a: "Ya. Setiap website dibangun cepat, responsif, aman, dan dengan SEO dasar: struktur heading, meta tag, sitemap, dan data terstruktur agar mudah ditemukan di Google.",
  },
  {
    q: "Teknologi apa yang digunakan?",
    a: "Next.js, React, dan Tailwind CSS untuk tampilan; Laravel, PHP, dan Supabase untuk backend dan database; serta JavaScript dan TypeScript.",
  },
]

export default function JasaWebsitePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}${PATH}#service`,
        name: "Jasa Pembuatan Website & Aplikasi",
        serviceType: "Pembuatan website dan aplikasi web",
        provider: { "@id": `${SITE}/#business` },
        areaServed: areas.map((name) => ({ "@type": "Place", name })),
        url: `${SITE}${PATH}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Jasa Pembuatan Website Medan", item: `${SITE}${PATH}` },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background pt-[100px] md:pt-[120px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className={`max-w-6xl mx-auto px-6 lg:px-8 pb-24 ${spaceGrotesk.className}`}>
        <section className="max-w-3xl">
          <h1 className={`text-4xl md:text-6xl text-foreground leading-tight ${playfair.className}`}>
            Jasa Pembuatan Website & Aplikasi di Medan, Sumatera Utara
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Saya Adi Putra Waruwu, web developer di Medan. Saya membantu bisnis dan UMKM di Medan, Nias, seluruh
            Sumatera Utara, hingga seluruh Indonesia memiliki website dan aplikasi yang profesional, cepat, responsif,
            aman, dan SEO friendly.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
          >
            Konsultasi gratis via WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </section>

        <section className="mt-24">
          <h2 className={`text-3xl md:text-4xl text-foreground ${playfair.className}`}>Layanan pembuatan website dan aplikasi</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-3xl border border-primary/12 bg-card p-8 transition hover:-translate-y-1 hover:border-primary/30">
                <h3 className={`text-xl text-foreground ${playfair.className}`}>{s.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className={`text-3xl md:text-4xl text-foreground ${playfair.className}`}>Portofolio website dan aplikasi</h2>
          <p className="mt-4 max-w-3xl text-foreground/80 leading-7">
            Beberapa proyek nyata yang sudah saya kerjakan untuk bisnis di Medan:
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/story/${p.slug}`} className="group block rounded-2xl border border-primary/12 bg-card p-6 hover:border-primary/30 transition">
                  <span className="text-foreground group-hover:text-primary transition">{p.name}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{p.hook}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog/sistem-informasi-apotek-kasir-pos-ai" className="group block rounded-2xl border border-primary/12 bg-card p-6 hover:border-primary/30 transition">
                <span className="text-foreground group-hover:text-primary transition">Sistem Informasi Apotek</span>
                <span className="mt-1 block text-sm text-muted-foreground">Kasir POS, inventori real-time, dan scan faktur supplier dengan AI</span>
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-24">
          <h2 className={`text-3xl md:text-4xl text-foreground ${playfair.className}`}>Cara kerja</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t border-primary/30 pt-6">
                <span className={`text-3xl text-primary ${playfair.className}`}>0{i + 1}</span>
                <h3 className="mt-3 font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-24">
          <h2 className={`text-3xl md:text-4xl text-foreground ${playfair.className}`}>Area layanan</h2>
          <p className="mt-4 max-w-3xl text-foreground/80 leading-7">
            Berbasis di Medan, Sumatera Utara. Untuk klien di Nias dan kota lain di Sumatera maupun seluruh Indonesia,
            seluruh proses berjalan online, dari konsultasi sampai website online.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {areas.map((a) => (
              <span key={a} className="rounded-full border border-primary/25 px-4 py-2 text-sm text-primary">{a}</span>
            ))}
          </div>
        </section>

        <section className="mt-24 max-w-3xl">
          <h2 className={`text-3xl md:text-4xl text-foreground ${playfair.className}`}>Pertanyaan yang sering ditanyakan</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none text-foreground flex justify-between gap-4">
                  {f.q}
                  <span className="text-primary transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-7 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-3xl border border-primary/20 bg-card p-10 text-center">
          <h2 className={`text-3xl text-foreground ${playfair.className}`}>Siap punya website untuk bisnis Anda?</h2>
          <p className="mt-3 text-muted-foreground">Konsultasi gratis, cukup kirim pesan WhatsApp.</p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
          >
            Hubungi Adi via WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
