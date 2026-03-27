"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ExternalLink,
  Gem,
  Store,
} from "lucide-react";
import { Footer } from "@/components/boty/footer";

// Data Features
const features = [
  {
    title: "Desain modern dan elegan",
    desc: "Tampilan website dibuat lebih rapi, profesional, dan enak dilihat agar bisnis Anda terlihat lebih meyakinkan di mata calon pelanggan.",
  },
  {
    title: "Mobile responsive",
    desc: "Website menyesuaikan ukuran layar HP, tablet, dan laptop, jadi pengunjung tetap nyaman membaca isi website dari perangkat apa pun.",
  },
  {
    title: "Integrasi WhatsApp",
    desc: "Kami tambahkan tombol atau alur menuju WhatsApp agar calon pelanggan bisa langsung menghubungi Anda tanpa bingung mencari kontak.",
  },
  {
    title: "Loading cepat",
    desc: "Struktur halaman dibuat lebih ringan supaya website terasa cepat dibuka, sehingga pengunjung tidak mudah keluar karena menunggu terlalu lama.",
  },
  {
    title: "Basic SEO",
    desc: "SEO adalah optimasi dasar agar website lebih mudah dikenali Google, seperti penataan judul halaman, deskripsi, dan struktur konten yang lebih rapi.",
  },
  {
    title: "Custom sesuai kebutuhan",
    desc: "Konten, struktur halaman, dan beberapa bagian visual bisa disesuaikan dengan jenis usaha Anda agar website terasa lebih relevan, bukan sekadar template umum.",
  },
];

const portfolio = [
  {
    owner: "Nadia Putri",
    brand: "Aroma Flora",
    role: "Founder Brand Lokal",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    href: "https://example.com/aroma-flora",
  },
  {
    owner: "Rizky Mahendra",
    brand: "Bumi Konstruksi",
    role: "Owner Jasa Profesional",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    href: "https://example.com/bumi-konstruksi",
  },
  {
    owner: "Maya Lestari",
    brand: "Nusa Consultant",
    role: "Managing Partner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    href: "https://example.com/nusa-consultant",
  },
];

export default function CompanyProfilePage() {
  const [selectedProduct, setSelectedProduct] = useState("umkm");
  
  // Detail produk berdasarkan pilihan
  const productDetails = {
    umkm: {
      name: "Website UMKM (Single Page)",
      price: "400.000",
      features: [
        "1 halaman (single page)",
        "Desain modern & elegan",
        "Mobile responsive",
        "Tombol WhatsApp terintegrasi",
        "Basic SEO Ready",
        "Revisi maksimal 2x",
        "Support 30 hari",
        "Domain .com (1 tahun)",
        "Hosting gratis 1 tahun"
      ]
    },
    multi: {
      name: "Website Multi Page",
      price: "700.000",
      features: [
        "3–5 halaman",
        "Desain profesional",
        "Struktur website lengkap",
        "Mobile responsive",
        "Basic SEO",
        "Form kontak",
        "Google Maps integration",
        "Revisi maksimal 2x",
        "Support 30 hari",
        "Domain .com (1 tahun)",
        "Hosting gratis 1 tahun"
      ]
    },
    professional: {
      name: "Website Professional",
      price: "1.500.000",
      features: [
        "Unlimited halaman",
        "Custom UI/UX premium",
        "Fitur tambahan sesuai request",
        "Konsultasi khusus",
        "Maintenance support 3 bulan",
        "Advanced SEO",
        "Priority support 24/7",
        "Integrasi database",
        "Dashboard admin",
        "Domain .com (1 tahun)",
        "Hosting premium 1 tahun"
      ]
    }
  };

  const selectedData = productDetails[selectedProduct as keyof typeof productDetails];

  const handleWhatsApp = () => {
    const message = `Halo, saya tertarik dengan paket *${selectedData.name}* dengan harga Rp ${selectedData.price}\n\nDetail Paket:\n${selectedData.features.map(f => `- ${f}`).join('\n')}\n\nMohon informasi lebih lanjut. Terima kasih.`;
    window.open(`https://wa.me/6283836098858?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Smooth scroll untuk link internal
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Jasa Website Company Profile Profesional | Warpas Studio</title>
        <meta
          name="description"
          content="Jasa pembuatan website company profile profesional untuk bisnis Anda. Desain modern, responsif, dan meningkatkan kepercayaan pelanggan bersama Warpas Studio."
        />
        <link rel="canonical" href="https://warpas-studio.com/service/company-profile" />
      </Head>

      {/* MAIN CONTENT */}
      <div className="relative min-h-screen bg-background">

        {/* HERO SECTION with Image */}
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

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white drop-shadow-lg leading-tight">
              Jasa Build Website UMKM
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-3xl">
              Tingkatkan kepercayaan bisnis Anda dengan website modern, cepat, dan responsif yang dirancang khusus.
            </p>
          </div>
        </section>

        {/* TOMBOL KEMBALI KE HALAMAN UTAMA */}
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

        {/* MAIN SECTIONS */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-24">

          {/* Features Section */}
          <section id="fitur" className="scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">Apa yang Anda Dapatkan</h2>
              <p className="text-xl text-muted-foreground">Fitur lengkap untuk kesuksesan digital bisnis Anda</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f) => (
                <div 
                  key={f.title} 
                  className="group rounded-xl border border-border/70 bg-card p-6 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{f.title}</h3>
                  <p className="text-muted-foreground leading-7">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="portfolio" className="scroll-mt-24">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold text-foreground">Portfolio Web Yang Pernah Kami Kerjakan</h2>
              <p className="text-xl text-muted-foreground">Klik setiap card untuk melihat website yang pernah kami buat untuk owner dan brand mereka.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {portfolio.map((project) => (
                <a
                  key={project.brand}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <article className="overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <div className="relative h-[380px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.owner}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/15 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition-transform duration-300 group-hover:scale-110">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
                          {project.role}
                        </p>
                        <h3 className="font-serif text-3xl">{project.owner}</h3>
                        <p className="mt-2 text-sm text-primary-foreground/85">
                          {project.brand}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground backdrop-blur-sm">
                          Lihat Website
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </section>

          {/* CARD KONSULTASI - SATU CARD DENGAN 3 PILIHAN */}
          <section className="scroll-mt-24 py-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div className="pt-4">
                <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                  Konsultasi Produk Website
                </span>
                <h2 className="font-serif text-4xl text-foreground md:text-6xl leading-tight mb-6">
                  Pilih paket yang paling pas untuk bisnis Anda.
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Kami bantu arahkan pilihan mulai dari landing page sederhana sampai website company profile yang lebih lengkap dan premium.
                </p>
                <p className="text-sm text-muted-foreground">
                  Respon cepat • Rekomendasi paket yang jelas • Bisa langsung lanjut ke WhatsApp
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-border/70 bg-background shadow-xl">
                  <div className="bg-primary px-5 py-4">
                    <h3 className="text-lg font-bold text-primary-foreground">Konsultasi Gratis</h3>
                  </div>

                  <div className="space-y-5 p-5">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <button
                        onClick={() => setSelectedProduct("umkm")}
                        className={`rounded-xl border px-4 py-4 text-left transition-all ${
                          selectedProduct === "umkm"
                            ? "border-primary bg-primary text-primary-foreground shadow-md"
                            : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted"
                        }`}
                      >
                        <Store className="mb-3 h-5 w-5" />
                        <div className="font-semibold">Website UMKM</div>
                        <div className={`mt-1 text-sm ${selectedProduct === "umkm" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                          Single Page
                        </div>
                        <div className="mt-3 text-sm font-semibold">Rp 400.000</div>
                      </button>

                      <button
                        onClick={() => setSelectedProduct("multi")}
                        className={`rounded-xl border px-4 py-4 text-left transition-all ${
                          selectedProduct === "multi"
                            ? "border-primary bg-primary text-primary-foreground shadow-md"
                            : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted"
                        }`}
                      >
                        <Building2 className="mb-3 h-5 w-5" />
                        <div className="font-semibold">Website Multi Page</div>
                        <div className={`mt-1 text-sm ${selectedProduct === "multi" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                          3-5 Halaman
                        </div>
                        <div className="mt-3 text-sm font-semibold">Rp 700.000</div>
                      </button>

                      <button
                        onClick={() => setSelectedProduct("professional")}
                        className={`rounded-xl border px-4 py-4 text-left transition-all ${
                          selectedProduct === "professional"
                            ? "border-primary bg-primary text-primary-foreground shadow-md"
                            : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted"
                        }`}
                      >
                        <Gem className="mb-3 h-5 w-5" />
                        <div className="font-semibold">Website Professional</div>
                        <div className={`mt-1 text-sm ${selectedProduct === "professional" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                          Unlimited Halaman
                        </div>
                        <div className="mt-3 text-sm font-semibold">Rp 1.500.000</div>
                      </button>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-5">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            <BriefcaseBusiness className="h-3.5 w-3.5" />
                            Detail Paket
                          </div>
                          <h3 className="text-xl font-bold text-foreground">{selectedData.name}</h3>
                        </div>
                        <div className="text-right">
                          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Mulai dari</div>
                          <div className="text-2xl font-bold text-primary">Rp {selectedData.price}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {selectedData.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Check className="h-3.5 w-3.5" />
                            </span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleWhatsApp}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-base font-medium text-primary-foreground transition hover:bg-primary/90"
                    >
                      Konsultasi via WhatsApp
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <p className="text-center text-xs text-muted-foreground">
                      Detail paket akan dikirim langsung ke WhatsApp tim kami
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
