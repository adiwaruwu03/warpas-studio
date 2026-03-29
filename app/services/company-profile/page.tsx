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
  Cpu,
  ExternalLink,
  Gem,
  Sparkles,
  Store,
} from "lucide-react";
import { Footer } from "@/components/boty/footer";
import { useLanguage } from "@/components/boty/language-context";
import { orbitron, spaceGrotesk } from "@/lib/tech-fonts";

type ProductKey = "umkm" | "multi" | "professional";

export default function CompanyProfilePage() {
  const { language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<ProductKey>("umkm");
  const isEnglish = language === "en";

  const copy = {
    title: isEnglish
      ? "Company Profile Website Services for SMEs & Businesses | Warpas Studio"
      : "Jasa Website Company Profile untuk UMKM & Bisnis | Warpas Studio",
    description: isEnglish
      ? "Professional company profile website services for your business. Modern, responsive, and credibility-building websites by Warpas Studio."
      : "Jasa pembuatan website company profile profesional untuk bisnis Anda. Desain modern, responsif, dan meningkatkan kepercayaan pelanggan bersama Warpas Studio.",
    heroTitle: isEnglish
      ? "Modern Company Profile Website for Your Business"
      : "Website Company Profile Modern untuk Bisnis Anda",
    heroDescription: isEnglish
      ? "Build stronger trust with a modern, fast, and responsive business website crafted specifically for your brand."
      : "Tingkatkan kepercayaan bisnis Anda dengan website modern, cepat, dan responsif yang dirancang khusus.",
    backLabel: isEnglish ? "Back to services" : "Ke layanan",
    backAria: isEnglish ? "Back to services" : "Kembali ke layanan utama",
    featuresTitle: isEnglish ? "What You Get" : "Apa yang Anda Dapatkan",
    featuresDescription: isEnglish
      ? "Complete features to support your business digitally"
      : "Fitur lengkap untuk kesuksesan digital bisnis Anda",
    portfolioTitle: isEnglish ? "Websites We Have Built" : "Portfolio Web Yang Pernah Kami Kerjakan",
    portfolioDescription: isEnglish
      ? "Click each card to explore websites we have built for their brands and owners."
      : "Klik setiap card untuk melihat website yang pernah kami buat untuk owner dan brand mereka.",
    portfolioCta: isEnglish ? "View Website" : "Lihat Website",
    consultationBadge: isEnglish ? "Website Product Consultation" : "Konsultasi Produk Website",
    consultationTitle: isEnglish
      ? "Choose the package that fits your business best."
      : "Pilih paket yang paling pas untuk bisnis Anda.",
    consultationDescription: isEnglish
      ? "We help you choose the right option, from a simple landing page to a more complete and premium company profile website."
      : "Kami bantu arahkan pilihan mulai dari landing page sederhana sampai website company profile yang lebih lengkap dan premium.",
    consultationMeta: isEnglish
      ? "Fast response • Clear package recommendations • Ready to continue via WhatsApp"
      : "Respon cepat • Rekomendasi paket yang jelas • Bisa langsung lanjut ke WhatsApp",
    consultationCardTitle: isEnglish ? "Free Consultation" : "Konsultasi Gratis",
    packageDetail: isEnglish ? "Package Details" : "Detail Paket",
    startingFrom: isEnglish ? "Starting from" : "Mulai dari",
    whatsappButton: isEnglish ? "Consult via WhatsApp" : "Konsultasi via WhatsApp",
    whatsappNote: isEnglish
      ? "Package details will be sent directly to our WhatsApp team"
      : "Detail paket akan dikirim langsung ke WhatsApp tim kami",
  };

  const features = [
    {
      title: isEnglish ? "Modern and elegant design" : "Desain modern dan elegan",
      desc: isEnglish
        ? "The website is designed to look cleaner, more professional, and more appealing so your business feels more trustworthy to potential customers."
        : "Tampilan website dibuat lebih rapi, profesional, dan enak dilihat agar bisnis Anda terlihat lebih meyakinkan di mata calon pelanggan.",
    },
    {
      title: "Mobile responsive",
      desc: isEnglish
        ? "The layout adapts to phones, tablets, and laptops so visitors can comfortably read your website from any device."
        : "Website menyesuaikan ukuran layar HP, tablet, dan laptop, jadi pengunjung tetap nyaman membaca isi website dari perangkat apa pun.",
    },
    {
      title: isEnglish ? "WhatsApp integration" : "Integrasi WhatsApp",
      desc: isEnglish
        ? "We add WhatsApp buttons or flows so potential customers can contact you right away without looking around for your contact details."
        : "Kami tambahkan tombol atau alur menuju WhatsApp agar calon pelanggan bisa langsung menghubungi Anda tanpa bingung mencari kontak.",
    },
    {
      title: isEnglish ? "Fast loading" : "Loading cepat",
      desc: isEnglish
        ? "The page structure is optimized to load faster so visitors are less likely to leave while waiting."
        : "Struktur halaman dibuat lebih ringan supaya website terasa cepat dibuka, sehingga pengunjung tidak mudah keluar karena menunggu terlalu lama.",
    },
    {
      title: "Basic SEO",
      desc: isEnglish
        ? "Basic SEO helps Google understand your website better through improved page titles, descriptions, and cleaner content structure."
        : "SEO adalah optimasi dasar agar website lebih mudah dikenali Google, seperti penataan judul halaman, deskripsi, dan struktur konten yang lebih rapi.",
    },
    {
      title: isEnglish ? "Customized to your needs" : "Custom sesuai kebutuhan",
      desc: isEnglish
        ? "Content, page structure, and visual sections can be adjusted to fit your business so the website feels relevant instead of generic."
        : "Konten, struktur halaman, dan beberapa bagian visual bisa disesuaikan dengan jenis usaha Anda agar website terasa lebih relevan, bukan sekadar template umum.",
    },
  ];

  const featureIcons = [Sparkles, Cpu, ArrowRight, Check, BriefcaseBusiness, Building2];

  const portfolio = [
    {
      owner: "Nadia Putri",
      brand: "Aroma Flora",
      role: isEnglish ? "Local Brand Founder" : "Founder Brand Lokal",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      href: "https://example.com/aroma-flora",
    },
    {
      owner: "Rizky Mahendra",
      brand: "Bumi Konstruksi",
      role: isEnglish ? "Professional Service Owner" : "Owner Jasa Profesional",
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

  const productDetails: Record<
    ProductKey,
    { name: string; price: string; shortLabel: string; subtitle: string; features: string[] }
  > = {
    umkm: {
      name: isEnglish ? "SME Website (Single Page)" : "Website UMKM (Single Page)",
      price: "400.000",
      shortLabel: isEnglish ? "SME Website" : "Website UMKM",
      subtitle: isEnglish ? "Single Page" : "Single Page",
      features: [
        isEnglish ? "1 page (single page)" : "1 halaman (single page)",
        isEnglish ? "Modern & elegant design" : "Desain modern & elegan",
        "Mobile responsive",
        isEnglish ? "Integrated WhatsApp button" : "Tombol WhatsApp terintegrasi",
        "Basic SEO Ready",
        isEnglish ? "Up to 2 revisions" : "Revisi maksimal 2x",
        isEnglish ? "30-day support" : "Support 30 hari",
        isEnglish ? ".com domain (1 year)" : "Domain .com (1 tahun)",
        isEnglish ? "Free hosting for 1 year" : "Hosting gratis 1 tahun",
      ],
    },
    multi: {
      name: isEnglish ? "Multi Page Website" : "Website Multi Page",
      price: "700.000",
      shortLabel: isEnglish ? "Multi Page Website" : "Website Multi Page",
      subtitle: isEnglish ? "3-5 Pages" : "3-5 Halaman",
      features: [
        isEnglish ? "3-5 pages" : "3-5 halaman",
        isEnglish ? "Professional design" : "Desain profesional",
        isEnglish ? "Complete website structure" : "Struktur website lengkap",
        "Mobile responsive",
        "Basic SEO",
        isEnglish ? "Contact form" : "Form kontak",
        isEnglish ? "Google Maps integration" : "Integrasi Google Maps",
        isEnglish ? "Up to 2 revisions" : "Revisi maksimal 2x",
        isEnglish ? "30-day support" : "Support 30 hari",
        isEnglish ? ".com domain (1 year)" : "Domain .com (1 tahun)",
        isEnglish ? "Free hosting for 1 year" : "Hosting gratis 1 tahun",
      ],
    },
    professional: {
      name: isEnglish ? "Professional Website" : "Website Professional",
      price: "1.500.000",
      shortLabel: isEnglish ? "Professional Website" : "Website Professional",
      subtitle: isEnglish ? "Unlimited Pages" : "Unlimited Halaman",
      features: [
        isEnglish ? "Unlimited pages" : "Unlimited halaman",
        "Custom UI/UX premium",
        isEnglish ? "Additional features by request" : "Fitur tambahan sesuai request",
        isEnglish ? "Private consultation" : "Konsultasi khusus",
        isEnglish ? "3-month maintenance support" : "Maintenance support 3 bulan",
        "Advanced SEO",
        isEnglish ? "24/7 priority support" : "Priority support 24/7",
        isEnglish ? "Database integration" : "Integrasi database",
        isEnglish ? "Admin dashboard" : "Dashboard admin",
        isEnglish ? ".com domain (1 year)" : "Domain .com (1 tahun)",
        isEnglish ? "Premium hosting for 1 year" : "Hosting premium 1 tahun",
      ],
    },
  };

  const selectedData = productDetails[selectedProduct];

  const handleWhatsApp = () => {
    const message = isEnglish
      ? `Hello, I am interested in the *${selectedData.name}* package starting from Rp ${selectedData.price}\n\nPackage Details:\n${selectedData.features.map((feature) => `- ${feature}`).join("\n")}\n\nPlease share more information. Thank you.`
      : `Halo, saya tertarik dengan paket *${selectedData.name}* dengan harga Rp ${selectedData.price}\n\nDetail Paket:\n${selectedData.features.map((feature) => `- ${feature}`).join("\n")}\n\nMohon informasi lebih lanjut. Terima kasih.`;

    window.open(`https://wa.me/6283836098858?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <Head>
        <title>{copy.title}</title>
        <meta name="description" content={copy.description} />
        <link rel="canonical" href="https://warpas-studio.com/service/company-profile" />
      </Head>

      <div className="relative min-h-screen overflow-hidden bg-[#07101c]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.24),_transparent_30%),radial-gradient(circle_at_left_center,_rgba(34,211,238,0.16),_transparent_34%),linear-gradient(180deg,#07101c_0%,#091424_45%,#07101c_100%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
        </div>

        <section id="home" className="relative h-[78svh] min-h-[520px] w-full overflow-hidden sm:h-[90vh] sm:min-h-[620px]">
          <div className="absolute inset-0">
            <video autoPlay muted loop playsInline preload="none" className="absolute inset-0 h-full w-full object-cover">
              <source src="/animasi-uchiha.mp4" type="video/mp4" />
              <source src="/images/hero3.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#050c17]/78" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.24),_transparent_30%),radial-gradient(circle_at_left_bottom,_rgba(14,165,233,0.18),_transparent_30%)]" />
            <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#07101c] via-[#07101c]/55 to-transparent" />
          </div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            
            <h1 className={`max-w-5xl text-4xl leading-[1.04] text-white drop-shadow-lg md:text-6xl lg:text-7xl ${orbitron.className}`}>
              {copy.heroTitle}
            </h1>
            <p className={`mt-6 max-w-3xl text-lg leading-8 text-cyan-100/78 md:text-2xl ${spaceGrotesk.className}`}>
              {copy.heroDescription}
            </p>
          </div>
        </section>

        <div className="fixed top-5 left-4 z-50">
          <Link
            href="/#layanan"
            className={`group inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-[#08111d]/88 px-3 py-2 text-sm text-cyan-100 shadow-[0_16px_40px_rgba(2,12,27,0.45)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-[#0d1b30] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40 ${spaceGrotesk.className}`}
            aria-label={copy.backAria}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300 text-slate-950 transition-transform group-hover:-translate-x-0.5">
              <ArrowLeft className="h-3.5 w-3.5" />
            </span>
            <span className="hidden sm:inline">{copy.backLabel}</span>
          </Link>
        </div>

        <div className="mx-auto max-w-7xl space-y-24 px-6 py-20 lg:px-8">
          <section
            id="fitur"
            className="scroll-mt-24 rounded-[32px] border border-cyan-300/12 bg-[#091424]/88 px-6 py-16 shadow-[0_24px_80px_rgba(2,12,27,0.4)] backdrop-blur-sm"
          >
            <div className="mb-12 text-center">
              <span className={`mb-4 block text-sm uppercase tracking-[0.3em] text-cyan-300 ${spaceGrotesk.className}`}>{isEnglish ? "Core Modules" : "Modul Inti"}</span>
              <h2 className={`mb-4 text-4xl text-white md:text-5xl ${orbitron.className}`}>{copy.featuresTitle}</h2>
              <p className={`text-xl text-cyan-100/62 ${spaceGrotesk.className}`}>{copy.featuresDescription}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = featureIcons[index % featureIcons.length];

                return (
                <div
                  key={feature.title}
                  className="group rounded-[24px] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(11,22,40,0.95),rgba(8,17,29,0.92))] p-6 shadow-[0_18px_50px_rgba(2,12,27,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/26 hover:shadow-[0_24px_70px_rgba(8,145,178,0.14)]"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/16 bg-cyan-300/10 text-cyan-300 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className={`mb-2 text-xl text-white ${orbitron.className}`}>{feature.title}</h3>
                  <p className={`leading-7 text-cyan-100/58 ${spaceGrotesk.className}`}>{feature.desc}</p>
                </div>
              )})}
            </div>
          </section>

          <section id="portfolio" className="scroll-mt-24">
            <div className="mb-12 text-center">
              <span className={`mb-4 block text-sm uppercase tracking-[0.3em] text-cyan-300 ${spaceGrotesk.className}`}>{isEnglish ? "Launch Archive" : "Arsip Launch"}</span>
              <h2 className={`mb-4 text-4xl text-white md:text-5xl ${orbitron.className}`}>{copy.portfolioTitle}</h2>
              <p className={`text-xl text-cyan-100/62 ${spaceGrotesk.className}`}>{copy.portfolioDescription}</p>
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
                  <article className="overflow-hidden rounded-[28px] border border-cyan-300/12 bg-[#0b1628] shadow-[0_18px_50px_rgba(2,12,27,0.35)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/28 group-hover:shadow-[0_24px_70px_rgba(8,145,178,0.18)]">
                    <div className="relative h-[380px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.owner}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#07101c]/35 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_26%)]" />
                      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/16 bg-[#08111d]/88 text-cyan-100 shadow-md transition-transform duration-300 group-hover:scale-110">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-6 text-cyan-50">
                        <p className={`mb-2 text-xs uppercase tracking-[0.24em] text-cyan-100/62 ${spaceGrotesk.className}`}>{project.role}</p>
                        <h3 className={`text-3xl text-white ${orbitron.className}`}>{project.owner}</h3>
                        <p className={`mt-2 text-sm text-cyan-100/82 ${spaceGrotesk.className}`}>{project.brand}</p>
                        <div className={`mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/14 bg-[#08111d]/64 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-sm ${spaceGrotesk.className}`}>
                          {copy.portfolioCta}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </section>

          <section className="scroll-mt-24 py-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div className="relative p-1 pl-6 lg:pt-8 lg:pl-8">
                <div className="pointer-events-none absolute left-0 top-3 h-28 w-px bg-gradient-to-b from-cyan-300 via-cyan-300/40 to-transparent" />
                <div className="pointer-events-none absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.85)]" />
                <span className={`mb-4 inline-flex items-center rounded-full border border-cyan-300/18 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-100 ${spaceGrotesk.className}`}>
                  {copy.consultationBadge}
                </span>
                <h2 className={`mb-6 max-w-xl text-4xl leading-tight text-white md:text-5xl ${orbitron.className}`}>
                  Pilih paket yang paling pas untuk bisnis Anda.
                </h2>
                <p className={`mb-6 max-w-xl text-lg leading-8 text-cyan-100/74 ${spaceGrotesk.className}`}>
                  Kami bantu arahkan pilihan mulai dari landing page sederhana sampai website company profile yang lebih lengkap dan premium.
                </p>
                <p className={`max-w-lg text-sm text-cyan-100/58 ${spaceGrotesk.className}`}>
                  Respon cepat • Rekomendasi paket yang jelas • Bisa langsung lanjut ke WhatsApp
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-xl overflow-hidden rounded-[2rem] border border-cyan-300/14 bg-[#0a1324]/95 shadow-[0_24px_80px_rgba(2,12,27,0.42)] backdrop-blur-xl">
                  <div className="border-b border-cyan-300/12 bg-[#0d1b30] px-5 py-4">
                    <h3 className={`text-lg text-white ${orbitron.className}`}>{copy.consultationCardTitle}</h3>
                  </div>

                  <div className="space-y-5 p-5">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <button
                        onClick={() => setSelectedProduct("umkm")}
                        className={`rounded-2xl border px-4 py-4 text-left transition-all ${
                          selectedProduct === "umkm"
                            ? "border-cyan-300/20 bg-cyan-300 text-slate-950 shadow-md"
                            : "border-cyan-300/14 bg-[#08111d] text-cyan-100 hover:border-cyan-300/34 hover:bg-[#11203a]"
                        }`}
                      >
                        <Store className="mb-3 h-5 w-5" />
                        <div className={`${orbitron.className} font-semibold`}>{productDetails.umkm.shortLabel}</div>
                        <div className={`mt-1 text-sm ${spaceGrotesk.className} ${selectedProduct === "umkm" ? "text-slate-900/72" : "text-cyan-100/48"}`}>
                          {productDetails.umkm.subtitle}
                        </div>
                        <div className={`mt-3 text-sm font-semibold ${spaceGrotesk.className}`}>Rp 400.000</div>
                      </button>

                      <button
                        onClick={() => setSelectedProduct("multi")}
                        className={`rounded-2xl border px-4 py-4 text-left transition-all ${
                          selectedProduct === "multi"
                            ? "border-cyan-300/20 bg-cyan-300 text-slate-950 shadow-md"
                            : "border-cyan-300/14 bg-[#08111d] text-cyan-100 hover:border-cyan-300/34 hover:bg-[#11203a]"
                        }`}
                      >
                        <Building2 className="mb-3 h-5 w-5" />
                        <div className={`${orbitron.className} font-semibold`}>{productDetails.multi.shortLabel}</div>
                        <div className={`mt-1 text-sm ${spaceGrotesk.className} ${selectedProduct === "multi" ? "text-slate-900/72" : "text-cyan-100/48"}`}>
                          {productDetails.multi.subtitle}
                        </div>
                        <div className={`mt-3 text-sm font-semibold ${spaceGrotesk.className}`}>Rp 700.000</div>
                      </button>

                      <button
                        onClick={() => setSelectedProduct("professional")}
                        className={`rounded-2xl border px-4 py-4 text-left transition-all ${
                          selectedProduct === "professional"
                            ? "border-cyan-300/20 bg-cyan-300 text-slate-950 shadow-md"
                            : "border-cyan-300/14 bg-[#08111d] text-cyan-100 hover:border-cyan-300/34 hover:bg-[#11203a]"
                        }`}
                      >
                        <Gem className="mb-3 h-5 w-5" />
                        <div className={`${orbitron.className} font-semibold`}>{productDetails.professional.shortLabel}</div>
                        <div className={`mt-1 text-sm ${spaceGrotesk.className} ${selectedProduct === "professional" ? "text-slate-900/72" : "text-cyan-100/48"}`}>
                          {productDetails.professional.subtitle}
                        </div>
                        <div className={`mt-3 text-sm font-semibold ${spaceGrotesk.className}`}>Rp 1.500.000</div>
                      </button>
                    </div>

                    <div className="rounded-[1.5rem] border border-cyan-300/12 bg-[#08111d] p-5">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                          <div className={`mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-300/14 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-100 ${spaceGrotesk.className}`}>
                            <BriefcaseBusiness className="h-3.5 w-3.5" />
                            {copy.packageDetail}
                          </div>
                          <h3 className={`text-xl text-white ${orbitron.className}`}>{selectedData.name}</h3>
                        </div>
                        <div className="text-right">
                          <div className={`text-xs uppercase tracking-[0.18em] text-cyan-100/42 ${spaceGrotesk.className}`}>{copy.startingFrom}</div>
                          <div className={`text-2xl text-cyan-300 ${orbitron.className}`}>Rp {selectedData.price}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {selectedData.features.map((feature) => (
                          <div key={feature} className={`flex items-start gap-2 text-sm text-cyan-100/62 ${spaceGrotesk.className}`}>
                            <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300">
                              <Check className="h-3.5 w-3.5" />
                            </span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleWhatsApp}
                      className={`flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 py-3 text-base text-slate-950 transition hover:bg-cyan-200 ${spaceGrotesk.className}`}
                    >
                      {copy.whatsappButton}
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <p className={`text-center text-xs text-cyan-100/42 ${spaceGrotesk.className}`}>{copy.whatsappNote}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
