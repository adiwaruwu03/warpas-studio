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
import { orbitron, spaceGrotesk } from "@/lib/tech-fonts"
import { projects } from "@/lib/projects"
import { Footer } from "@/components/boty/footer"
import { Header } from "@/components/boty/header"

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

  return (
    <div className="min-h-screen bg-[#020617] pt-[100px] md:pt-[120px]">
      <Header />
      
      <main className="relative">
        {/* HERO SECTION */}
        <section className="relative max-w-screen-2xl mx-auto px-6 lg:px-8 pb-12">
          <div className="mb-12">
            <Link 
              href="/#story"
              className={`inline-flex items-center gap-2 text-blue-400 mb-8 hover:gap-3 transition-all ${spaceGrotesk.className}`}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali ke Story</span>
            </Link>
            
            <div className="space-y-4">
              <span className={`px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-[10px] font-bold uppercase tracking-widest text-blue-400 inline-block ${spaceGrotesk.className}`}>
                System Story
              </span>
              <h1 className={`text-4xl md:text-7xl lg:text-8xl text-white tracking-tight ${orbitron.className}`}>
                {project.name}
              </h1>
            </div>
          </div>

          {/* Premium Browser Frame Hero */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur opacity-75" />
            <div className="relative rounded-[24px] border border-white/10 bg-[#0f172a] overflow-hidden shadow-2xl">
              {/* Browser Header */}
              <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <div className="mx-auto bg-white/5 rounded-md px-3 py-1 text-[10px] text-slate-500 font-mono tracking-wider">
                  warpas.studio/{project.slug}
                </div>
              </div>
              {/* Browser Content */}
              <div className="relative aspect-[1885/901] w-full bg-slate-900">
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
                className={`inline-flex items-center gap-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-blue-400 transition-all hover:bg-blue-500 hover:text-white hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.15)] ${spaceGrotesk.className}`}
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
                      <Zap size={24} />
                    </div>
                    <h2 className={`text-2xl text-white uppercase tracking-widest ${orbitron.className}`}>Masalah</h2>
                  </div>
                  <div className={`text-slate-400 leading-relaxed text-lg whitespace-pre-line ${spaceGrotesk.className}`}>
                    {project.problem}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                      <ShieldCheck size={24} />
                    </div>
                    <h2 className={`text-2xl text-white uppercase tracking-widest ${orbitron.className}`}>Solusi</h2>
                  </div>
                  <div className={`text-slate-400 leading-relaxed text-lg ${spaceGrotesk.className}`}>
                    {project.solution}
                  </div>
                </section>
              </div>

              {/* CERITA (STORYTELLING) */}
              <section className="relative">
                <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden md:block" />
                <h2 className={`text-sm text-blue-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-3 ${orbitron.className}`}>
                  <MessageSquare size={16} />
                  Cerita Projek
                </h2>
                <div className={`text-2xl md:text-3xl lg:text-4xl text-white leading-tight font-light italic text-balance ${spaceGrotesk.className}`}>
                  "{project.story}"
                </div>
              </section>

              {/* SISTEM ADMIN */}
              <section className="relative">
                <div className="flex items-center gap-3 mb-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    <Lock size={20} />
                  </div>
                  <h2 className={`text-xl text-white uppercase tracking-widest ${orbitron.className}`}>Sistem Admin (Private)</h2>
                </div>

                <div className="space-y-10">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <p className={`text-slate-400 leading-relaxed text-lg ${spaceGrotesk.className}`}>
                      {project.adminSystem.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {project.adminSystem.benefits.map(b => (
                        <div key={b} className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/5 border border-purple-500/10 text-slate-300 text-xs ${spaceGrotesk.className}`}>
                          <Check className="h-3 w-3 text-purple-400" />
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Large Dashboard Preview */}
                  <div className="relative group p-[2px] rounded-[32px] bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-transparent">
                    <div className="relative rounded-[30px] border border-white/5 bg-[#0f172a] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                      {/* Dashboard Title Bar */}
                      <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Lock size={14} className="text-purple-400" />
                          <span className={`text-[10px] uppercase tracking-widest text-slate-400 ${orbitron.className}`}>Administrator Control Panel</span>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[8px] font-bold tracking-widest uppercase">
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
                <h3 className={`text-xs text-slate-500 uppercase tracking-widest mb-8 ${orbitron.className}`}>Fitur Utama</h3>
                <div className="space-y-6">
                  {project.features.map(f => (
                    <div key={f} className="flex items-start gap-4">
                      <div className="h-6 w-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-blue-400" />
                      </div>
                      <span className={`text-slate-300 text-sm leading-relaxed ${spaceGrotesk.className}`}>{f}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h3 className={`text-xs text-slate-500 uppercase tracking-widest mb-6 ${orbitron.className}`}>Teknologi</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className={`px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-[10px] text-white uppercase tracking-widest ${spaceGrotesk.className}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              <section className="p-8 rounded-3xl bg-blue-500/10 border border-blue-500/20">
                <h3 className={`text-xs text-blue-400 uppercase tracking-widest mb-6 ${orbitron.className}`}>Dampak</h3>
                <div className="space-y-4">
                  {project.impact.map(i => (
                    <div key={i} className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className={`text-slate-200 text-sm font-medium ${spaceGrotesk.className}`}>{i}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

          </div>
        </div>

        {/* CTA SECTION */}
        <section className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-32 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-[#0f172a] p-12 rounded-[40px] border border-blue-500/20 relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h2 className={`text-3xl md:text-5xl text-white ${orbitron.className}`}>
                Kalau kamu punya bisnis <br /> dan ingin dibantu seperti ini...
              </h2>
              <p className={`text-slate-400 text-lg ${spaceGrotesk.className}`}>
                Mari kita bangun sistem yang benar-benar memberikan dampak nyata.
              </p>
            </div>
            
            <a
              href="https://wa.me/6283836098858"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative z-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.4)] ${spaceGrotesk.className}`}
            >
              Yuk ngobrol
              <ArrowRight className="h-5 w-5" />
            </a>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-blue-500/10 blur-[120px] pointer-events-none" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
