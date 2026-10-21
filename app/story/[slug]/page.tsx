import React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Lock,
  Zap,
  ShieldCheck,
  TrendingUp,
  Cpu,
  MessageSquare,
  ExternalLink
} from "lucide-react"
import { Metadata } from "next"
import { playfair, spaceGrotesk } from "@/lib/tech-fonts"
import { projects } from "@/lib/projects"
import { Footer } from "@/components/boty/footer"
import { Header } from "@/components/boty/header"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found | Adi Putra Waruwu',
    }
  }

  const title = `${project.name} | Portfolio Adi Putra Waruwu - Web Developer`
  // We take a clean snippet from the problem description
  const description = (project.problem || "").substring(0, 150).replace(/\n/g, ' ') + '...'

  return {
    title,
    description,
    keywords: [project.name, 'Web Developer', 'Frontend Developer', ...project.tech],
    openGraph: {
      title,
      description,
      url: `https://adi-putra-waruwu.vercel.app/story/${project.slug}`,
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.thumbnail],
    },
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `https://adi-putra-waruwu.vercel.app/story/${project.slug}#creativework`,
        "name": project.name,
        "description": project.story || project.problem,
        "creator": {
          "@id": "https://adi-putra-waruwu.vercel.app/#person"
        },
        "image": `https://adi-putra-waruwu.vercel.app${project.thumbnail}`,
        "url": `https://adi-putra-waruwu.vercel.app/story/${project.slug}`,
        "keywords": project.tech.join(", ")
      },
      {
        "@type": "WebPage",
        "@id": `https://adi-putra-waruwu.vercel.app/story/${project.slug}#webpage`,
        "url": `https://adi-putra-waruwu.vercel.app/story/${project.slug}`,
        "name": `${project.name} | Portfolio Adi Putra Waruwu`,
        "isPartOf": {
          "@id": "https://adi-putra-waruwu.vercel.app/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://adi-putra-waruwu.vercel.app/story/${project.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://adi-putra-waruwu.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://adi-putra-waruwu.vercel.app/#story"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.name,
            "item": `https://adi-putra-waruwu.vercel.app/story/${project.slug}`
          }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-background pt-[100px] md:pt-[120px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="relative">
        {/* HERO SECTION */}
        <section className="relative max-w-screen-2xl mx-auto px-6 lg:px-8 pb-12">
          <div className="mb-12">
            <Link
              href="/#story"
              className={`inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all ${spaceGrotesk.className}`}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali ke Story</span>
            </Link>

            <div className="space-y-4">

              <h1 className={`text-4xl md:text-7xl lg:text-8xl text-foreground tracking-tight ${playfair.className}`}>
                {project.name}
              </h1>
            </div>
          </div>

          {/* Premium Browser Frame Hero */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-primary/40 via-primary/15 to-primary/20 blur opacity-75" />
            <div className="relative rounded-[24px] border border-white/10 bg-card overflow-hidden shadow-2xl">
              {/* Browser Header */}
              <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <div className="mx-auto bg-white/5 rounded-md px-3 py-1 text-[10px] text-muted-foreground font-mono tracking-wider">
                  warpas.studio/{project.slug}
                </div>
              </div>
              {/* Browser Content */}
              <div className="relative aspect-[1885/901] w-full bg-secondary">
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* CTA: View Live Website */}
          {project.liveUrl && (
            <div className="mt-10 flex justify-center">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 rounded-2xl bg-primary/10 border border-primary/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary/90 hover:text-foreground hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(201,169,110,0.15)] ${spaceGrotesk.className}`}
              >
                Lihat Website Asli
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}
        </section>

        {/* CONTENT SECTION */}
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid gap-20 lg:grid-cols-[1fr_0.4fr]">

            <div className="space-y-24">
              {/* MASALAH & SOLUSI */}
              <div className="grid gap-12 sm:grid-cols-2">
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Zap size={24} />
                    </div>
                    <h2 className={`text-2xl text-foreground uppercase tracking-widest ${playfair.className}`}>Masalah</h2>
                  </div>
                  <div className={`text-muted-foreground leading-relaxed text-lg whitespace-pre-line ${spaceGrotesk.className}`}>
                    {project.problem}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <ShieldCheck size={24} />
                    </div>
                    <h2 className={`text-2xl text-foreground uppercase tracking-widest ${playfair.className}`}>Solusi</h2>
                  </div>
                  <div className={`text-muted-foreground leading-relaxed text-lg ${spaceGrotesk.className}`}>
                    {project.solution}
                  </div>
                </section>
              </div>

              {/* CERITA (STORYTELLING) */}
              <section className="relative">
                <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/15 to-transparent hidden md:block" />
                <h2 className={`text-sm text-primary uppercase tracking-[0.3em] mb-6 flex items-center gap-3 ${playfair.className}`}>
                  <MessageSquare size={16} />
                  Cerita Projek
                </h2>
                <div className={`text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight font-light italic text-balance ${spaceGrotesk.className}`}>
                  "{project.story}"
                </div>
              </section>

              {/* SISTEM ADMIN */}
              <section className="relative">
                <div className="flex items-center gap-3 mb-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Lock size={20} />
                  </div>
                  <h2 className={`text-xl text-foreground uppercase tracking-widest ${playfair.className}`}>Sistem Admin (Private)</h2>
                </div>

                <div className="space-y-10">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <p className={`text-muted-foreground leading-relaxed text-lg ${spaceGrotesk.className}`}>
                      {project.adminSystem.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {project.adminSystem.benefits.map(b => (
                        <div key={b} className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 border border-primary/10 text-foreground/80 text-xs ${spaceGrotesk.className}`}>
                          <Check className="h-3 w-3 text-primary" />
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Large Dashboard Preview */}
                  <div className="relative group p-[2px] rounded-[32px] bg-gradient-to-br from-primary/40 via-primary/15 to-transparent">
                    <div className="relative rounded-[30px] border border-white/5 bg-card overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                      {/* Dashboard Title Bar */}
                      <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Lock size={14} className="text-primary" />
                          <span className={`text-[10px] uppercase tracking-widest text-muted-foreground ${playfair.className}`}>Administrator Control Panel</span>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[8px] font-bold tracking-widest uppercase">
                          Secure System
                        </div>
                      </div>

                      {/* Dashboard Image */}
                      <div className="relative aspect-[1885/901] w-full bg-black/40">
                        <Image
                          src={project.adminSystem.image}
                          alt="Dashboard Preview"
                          fill
                          className="object-contain"
                        />
                        <div className="absolute inset-0 bg-black/5" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* SIDEBAR: TECH, FEATURES, IMPACT */}
            <div className="space-y-12 lg:pt-20">
              <section className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className={`text-xs text-muted-foreground uppercase tracking-widest mb-8 ${playfair.className}`}>Fitur Utama</h3>
                <div className="space-y-6">
                  {project.features.map(f => (
                    <div key={f} className="flex items-start gap-4">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className={`text-foreground/80 text-sm leading-relaxed ${spaceGrotesk.className}`}>{f}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h3 className={`text-xs text-muted-foreground uppercase tracking-widest mb-6 ${playfair.className}`}>Teknologi</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className={`px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-[10px] text-foreground uppercase tracking-widest ${spaceGrotesk.className}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              <section className="p-8 rounded-3xl bg-primary/10 border border-primary/20">
                <h3 className={`text-xs text-primary uppercase tracking-widest mb-6 ${playfair.className}`}>Dampak</h3>
                <div className="space-y-4">
                  {project.impact.map(i => (
                    <div key={i} className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className={`text-foreground/80 text-sm font-medium ${spaceGrotesk.className}`}>{i}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

          </div>
        </div>

        {/* CTA SECTION */}
        <section className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-32 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-card p-12 rounded-[40px] border border-primary/20 relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h2 className={`text-3xl md:text-5xl text-foreground ${playfair.className}`}>
                Kalau kamu punya bisnis <br /> dan ingin dibantu seperti ini...
              </h2>
              <p className={`text-muted-foreground text-lg ${spaceGrotesk.className}`}>
                Mari kita bangun sistem yang benar-benar memberikan dampak nyata.
              </p>
            </div>

            <a
              href="https://wa.me/6283836098858"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative z-10 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(201,169,110,0.4)] ${spaceGrotesk.className}`}
            >
              Yuk ngobrol
              <ArrowRight className="h-5 w-5" />
            </a>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-primary/10 blur-[120px] pointer-events-none" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
