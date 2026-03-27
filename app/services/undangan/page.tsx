"use client";

import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  ExternalLink,
  Gift,
  Heart,
  MapPin,
  MessageCircleHeart,
  MonitorSmartphone,
  Music4,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/boty/footer";

type CatalogCategory = "heritage" | "premium" | "moody";

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Tampilan Rapi & Terpercaya",
    description: "Undangan dirancang supaya tetap elegan, nyaman dibaca, dan terasa premium saat dibuka tamu.",
  },
  {
    icon: MonitorSmartphone,
    title: "Nyaman di Mobile",
    description: "Optimal untuk dibuka dari WhatsApp dan berbagai ukuran layar tanpa bikin tamu bingung.",
  },
  {
    icon: Clock3,
    title: "Proses Cepat",
    description: "Alur pengerjaan jelas, revisi lebih terarah, dan update progress lebih mudah dipantau.",
  },
  {
    icon: MessageCircleHeart,
    title: "Fleksibel Sesuai Acara",
    description: "Bisa disesuaikan untuk akad, resepsi, intimate wedding, ulang tahun, atau acara spesial lainnya.",
  },
];

const catalogTabs: { id: CatalogCategory; label: string }[] = [
  { id: "heritage", label: "Heritage" },
  { id: "premium", label: "Premium" },
  { id: "moody", label: "Moody" },
];

const catalogItems: Record<
  CatalogCategory,
  {
    name: string;
    style: string;
    price: string;
    image: string;
    previewUrl: string;
    note: string;
  }[]
> = {
  heritage: [
    {
      name: "Savira",
      style: "Klasik Hangat",
      price: "Rp 299.000",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
      previewUrl: "#",
      note: "Tema dengan nuansa klasik yang hangat, detail ornamental lembut, dan cocok untuk pasangan yang ingin kesan anggun sejak halaman pertama.",
    },
    {
      name: "Aruna",
      style: "Tradisional Mewah",
      price: "Rp 299.000",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80",
      previewUrl: "#",
      note: "Punya karakter visual lebih megah dengan komposisi layout yang terasa formal, cocok untuk konsep akad dan resepsi yang lebih sakral.",
    },
    {
      name: "Ameera",
      style: "Elegan Ringan",
      price: "Rp 249.000",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
      previewUrl: "#",
      note: "Desain heritage yang lebih ringan dan bersih, pas untuk pasangan yang ingin tampilan manis tanpa terasa terlalu ramai.",
    },
  ],
  premium: [
    {
      name: "Flara",
      style: "Floral Soft",
      price: "Rp 199.000",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
      previewUrl: "#",
      note: "Tema floral premium dengan nuansa lembut dan romantis, cocok untuk acara yang ingin terasa manis dan modern.",
    },
    {
      name: "Ivanna",
      style: "Timeless Clean",
      price: "Rp 199.000",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80",
      previewUrl: "#",
      note: "Look clean, refined, dan lebih dewasa untuk pasangan yang suka gaya simple, rapi, dan tetap berkelas.",
    },
    {
      name: "Kila",
      style: "Minimal Formal",
      price: "Rp 199.000",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
      previewUrl: "#",
      note: "Pilihan yang lebih minimal dan formal, bagus untuk pasangan yang ingin undangan terlihat modern tanpa banyak ornamen.",
    },
  ],
  moody: [
    {
      name: "Papercut",
      style: "Bold Artistic",
      price: "Rp 129.000",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
      previewUrl: "#",
      note: "Karakter visual lebih bold dan artistik untuk pasangan yang ingin undangannya tampil beda dan lebih ekspresif.",
    },
    {
      name: "Wave",
      style: "Dark Modern",
      price: "Rp 129.000",
      image: "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=900&q=80",
      previewUrl: "#",
      note: "Komposisi sederhana dengan nuansa gelap yang modern, cocok untuk konsep intimate atau visual yang lebih edgy.",
    },
    {
      name: "Sweetpink",
      style: "Romantic Moody",
      price: "Rp 129.000",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
      previewUrl: "#",
      note: "Tone romantis dengan sentuhan moody yang lembut, pas untuk pasangan yang ingin kesan manis tapi tetap unik.",
    },
  ],
};

const packageFeatures = {
  heritage: [
    "Unlimited nama tamu",
    "Profil mempelai dan info acara",
    "Galeri foto dan video",
    "RSVP dan ucapan",
    "Google Maps dan countdown",
    "Revisi minor 2x",
  ],
  premium: [
    "Semua fitur inti undangan website",
    "Desain lebih clean dan modern",
    "Gift / amplop digital",
    "Background music",
    "Live streaming section",
    "Revisi minor 2x",
  ],
  moody: [
    "Template simple dan cepat tayang",
    "Informasi acara lengkap",
    "Galeri dan countdown",
    "RSVP dan ucapan",
    "Bisa custom nama tamu",
    "Revisi minor 1x",
  ],
};

const addOns = [
  { title: "Express 1 Hari", price: "Rp 50.000", desc: "Untuk kebutuhan yang mepet dan ingin prioritas pengerjaan." },
  { title: "Custom Font", price: "Rp 25.000", desc: "Kalau ingin nuansa visual lebih selaras dengan tema acara." },
  { title: "Tambah Foto Galeri", price: "Mulai Rp 15.000", desc: "Tambahan slot foto untuk cerita momen yang lebih lengkap." },
  { title: "Lifetime Aktif", price: "Rp 200.000", desc: "Perpanjangan masa aktif selama layanan kami masih berjalan." },
  { title: "Custom Warna", price: "Rp 50.000", desc: "Penyesuaian tone visual agar makin dekat dengan dekorasi acara." },
  { title: "Split Invitation", price: "Rp 50.000", desc: "Untuk kebutuhan dua versi undangan dengan tema yang sama." },
];

const testimonials = [
  "Pelayanannya cepat dan hasil undangannya rapi banget. Tamu jadi gampang akses semua info acara.",
  "Revisinya enak, komunikasinya jelas, dan tampilannya terasa lebih premium dari ekspektasi kami.",
  "Undangannya ringan dibuka di HP dan tetap elegan. Sangat membantu untuk sebar via WhatsApp.",
];

const faqs = [
  {
    q: "Bagaimana cara order undangan di Warpas Studio?",
    a: "Kamu bisa konsultasi dulu via WhatsApp, pilih tema yang cocok, lalu kami arahkan alur pengumpulan data dan pengerjaannya.",
  },
  {
    q: "Berapa lama proses pengerjaannya?",
    a: "Umumnya 2-4 hari kerja setelah data utama, foto, dan detail acara sudah lengkap.",
  },
  {
    q: "Apakah bisa revisi?",
    a: "Bisa. Jumlah revisi mengikuti paket yang dipilih, dan kami bantu arahkan supaya revisinya tetap efektif.",
  },
  {
    q: "Apakah bisa custom warna, font, atau beberapa bagian isi?",
    a: "Bisa. Untuk beberapa penyesuaian tertentu kami siapkan juga opsi add-ons supaya hasilnya tetap rapi.",
  },
  {
    q: "Apakah undangan bisa dibuka nyaman di HP?",
    a: "Bisa. Halaman kami memang disusun dengan prioritas mobile karena mayoritas tamu membuka dari WhatsApp.",
  },
];

export default function UndanganPage() {
  const [activeCategory, setActiveCategory] = useState<CatalogCategory>("heritage");
  const activeItems = useMemo(() => catalogItems[activeCategory], [activeCategory]);
  const activeFeatures = useMemo(() => packageFeatures[activeCategory], [activeCategory]);

  return (
    <>
      <Head>
        <title>Jasa Undangan Digital Pernikahan | Warpas Studio</title>
        <meta
          name="description"
          content="Jasa undangan digital dari Warpas Studio dengan desain elegan, mudah dibagikan, mobile friendly, dan siap disesuaikan untuk acara spesial Anda."
        />
      </Head>

      <div className="bg-background">
        <section id="home" className="relative h-[90vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/images/hero3.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-background via-background/25 to-transparent" />
          </div>

          <div className="fixed top-5 left-4 z-50">
            <Link
              href="/#layanan"
              className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/90 px-3 py-2 text-sm font-medium text-foreground shadow-lg shadow-black/10 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              aria-label="Kembali ke layanan utama"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:-translate-x-0.5">
                <ArrowLeft className="h-3.5 w-3.5" />
              </span>
              <span className="hidden sm:inline">Ke layanan</span>
            </Link>
          </div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <span className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white/90 backdrop-blur-sm">
              Warpas Studio
            </span>
            <h1 className="text-4xl font-serif font-bold leading-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
              Jasa Undangan Digital
              <span className="block text-secondary drop-shadow-lg">Elegan dan Berkesan</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-white/90 md:text-2xl">
              Solusi undangan digital yang praktis, cantik, dan nyaman dibagikan untuk momen pernikahan maupun acara spesial lainnya.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-7 py-3 font-semibold text-secondary-foreground transition hover:bg-secondary/90"
              >
                Lihat Katalog
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/6283836098858"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-background/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-background hover:text-foreground"
              >
                Konsultasi Sekarang
              </a>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Tentang Warpas Studio
              </span>
              <h2 className="mb-6 font-serif text-4xl text-foreground md:text-6xl">
                Undangan digital yang tampil rapi, mudah dibagikan, dan terasa spesial.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                Warpas Studio membantu Anda menyiapkan undangan digital dengan pendekatan desain yang lebih hangat, profesional, dan nyaman dibuka oleh tamu. Fokus kami bukan hanya tampilan, tetapi juga pengalaman saat undangan dibaca dan dibagikan.
              </p>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card p-8 shadow-sm">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-background p-5">
                  <Gift className="mb-3 h-5 w-5 text-primary" />
                  <h3 className="mb-2 font-semibold text-foreground">Mudah Disebar</h3>
                  <p className="text-sm leading-6 text-muted-foreground">Siap dikirim lewat WhatsApp tanpa ribet dan tetap terlihat profesional.</p>
                </div>
                <div className="rounded-2xl bg-background p-5">
                  <Heart className="mb-3 h-5 w-5 text-primary" />
                  <h3 className="mb-2 font-semibold text-foreground">Tampilan Berkesan</h3>
                  <p className="text-sm leading-6 text-muted-foreground">Desain dibuat agar momen spesial terasa lebih personal dan memorable.</p>
                </div>
                <div className="rounded-2xl bg-background p-5">
                  <MapPin className="mb-3 h-5 w-5 text-primary" />
                  <h3 className="mb-2 font-semibold text-foreground">Info Acara Jelas</h3>
                  <p className="text-sm leading-6 text-muted-foreground">Lokasi, waktu, RSVP, dan detail penting tersusun lebih rapi.</p>
                </div>
                <div className="rounded-2xl bg-background p-5">
                  <Music4 className="mb-3 h-5 w-5 text-primary" />
                  <h3 className="mb-2 font-semibold text-foreground">Nuansa Lebih Hidup</h3>
                  <p className="text-sm leading-6 text-muted-foreground">Bisa dilengkapi musik, galeri, dan elemen visual yang memperkuat suasana.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-24">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-4xl text-foreground">Kenapa Memilih Warpas Studio</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Kami susun pengalaman undangan digital agar bukan sekadar cantik, tapi juga fungsional dan enak dipakai.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whyUs.map((item) => (
                <article key={item.title} className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
                  <item.icon className="mb-4 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="catalog" className="mt-24">
            <div className="mb-10 text-center">
              <h2 className="mb-4 font-serif text-4xl text-foreground">Pilih Gaya Undangan Favorit Anda</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Arah desain kami bagi ke beberapa karakter visual agar lebih mudah menyesuaikan tema acara.
              </p>
            </div>

            <div className="mb-10 flex justify-center">
              <div className="inline-flex flex-wrap justify-center gap-2 rounded-full border border-border bg-card p-2">
                {catalogTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                      activeCategory === tab.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-background hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {activeItems.map((item) => (
                  <article
                    key={item.name}
                    className="overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-72 overflow-hidden">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-transparent to-transparent" />
                      <div className="absolute bottom-0 p-5 text-primary-foreground">
                        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-primary-foreground/75">{item.style}</p>
                        <h3 className="font-serif text-3xl">{item.name}</h3>
                      </div>
                    </div>
                    <div className="space-y-4 p-5">
                      <p className="text-sm leading-6 text-muted-foreground">{item.note}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-primary">{item.price}</span>
                        <a
                          href={item.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition hover:bg-primary/90"
                        >
                          Preview
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="rounded-[2rem] border border-border/70 bg-card p-7 shadow-sm">
                <div className="mb-5 flex items-center gap-2 text-primary">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em]">Info Fitur</span>
                </div>
                <h3 className="mb-4 font-serif text-3xl text-foreground">
                  Paket {catalogTabs.find((tab) => tab.id === activeCategory)?.label}
                </h3>
                <div className="space-y-3">
                  {activeFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 rounded-xl bg-background px-4 py-3 text-sm text-muted-foreground">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/6283836098858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  Konsultasi Paket Ini
                  <ArrowRight className="h-4 w-4" />
                </a>
              </aside>
            </div>
          </section>

          <section className="mt-24">
            <div className="mb-10 text-center">
              <h2 className="mb-4 font-serif text-4xl text-foreground">Add-Ons yang Bisa Ditambahkan</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Untuk kebutuhan yang lebih spesifik, kami siapkan beberapa penyesuaian tambahan agar undangan makin pas dengan acara Anda.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {addOns.map((item) => (
                <article key={item.title} className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <span className="text-sm font-semibold text-primary">{item.price}</span>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{item.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-24 rounded-[2rem] border border-border/70 bg-card p-8 shadow-sm">
            <div className="mb-10 text-center">
              <h2 className="mb-4 font-serif text-4xl text-foreground">Apa Kata Klien Kami</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Feedback yang paling sering kami terima adalah: tampilannya cantik, prosesnya jelas, dan undangannya enak dibuka di HP.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <article key={index} className="rounded-2xl bg-background p-6">
                  <p className="mb-4 text-sm uppercase tracking-[0.18em] text-primary">Testimoni 0{index + 1}</p>
                  <p className="text-sm leading-7 text-muted-foreground">"{item}"</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-24">
            <div className="mb-10 text-center">
              <h2 className="mb-4 font-serif text-4xl text-foreground">Pertanyaan yang Sering Ditanyakan</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Kami rangkum beberapa hal yang paling sering ditanyakan sebelum order undangan digital.
              </p>
            </div>
            <div className="mx-auto max-w-4xl space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-foreground">
                    <span>{item.q}</span>
                    <ChevronDown className="h-5 w-5 text-primary transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
