"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { orbitron, spaceGrotesk } from "@/lib/tech-fonts"
import { useLanguage } from "@/components/boty/language-context"
import Image from "next/image"
import { projects } from "@/lib/projects"

export function StorySection() {
  const { language } = useLanguage()

  return (
    <section id="story" className="relative overflow-hidden bg-[#020617] py-24 sm:py-32">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-6xl text-white mb-6 tracking-tight ${orbitron.className}`}>
            Story Projek WarPas
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto text-slate-400 text-lg md:text-xl ${spaceGrotesk.className}`}>
            Kami tidak hanya membuat website, kami membangun sistem yang membantu bisnis berkembang.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/story/${project.slug}`}
              className="group cursor-pointer relative overflow-hidden rounded-[32px] border border-white/5 bg-[#0f172a]/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)]"
            >
              {/* Thumbnail Container - Adjusted for 1885x901 ratio */}
              <div className="relative aspect-[1885/901] w-full overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                
                {/* Tech Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h3 className={`text-2xl text-white mb-3 ${orbitron.className}`}>
                  {project.name}
                </h3>
                <p className={`text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 ${spaceGrotesk.className}`}>
                  "{project.hook}"
                </p>
                
                <div className="flex items-center text-blue-400 text-xs font-semibold uppercase tracking-widest group-hover:gap-2 transition-all">
                  Read Full Story
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>

              {/* Accent Glow */}
              <div className={`absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${project.accent} opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-20`} />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="rounded-[15px] bg-[#020617] px-10 py-10 md:px-20">
              <h3 className={`text-2xl md:text-3xl text-white mb-6 ${orbitron.className}`}>
                Bangun sistem seperti ini untuk bisnis Anda
              </h3>
              <a
                href="https://wa.me/6283836098858"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)] ${spaceGrotesk.className}`}
              >
                Mulai Sekarang
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
