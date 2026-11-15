"use client"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"
import { playfair, spaceGrotesk } from "@/lib/tech-fonts"
import { services } from "@/lib/services"
import { projects } from "@/lib/projects"

export function ServicesSection() {
  const { language } = useLanguage()
  const en = language === "en"

  return (
    <section className={`relative bg-background py-24 sm:py-32 ${spaceGrotesk.className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className={`text-4xl md:text-6xl text-foreground leading-tight ${playfair.className}`}>
            {en ? "Website & App Development in Medan" : "Jasa Pembuatan Website & Aplikasi di Medan"}
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            {en
              ? "From a company profile to a custom point-of-sale system: I build websites and web apps that are fast, responsive, secure and SEO friendly, for businesses in Medan, Nias, North Sumatra and all of Indonesia."
              : "Dari company profile sampai sistem kasir kustom: saya membangun website dan aplikasi web yang cepat, responsif, aman, dan SEO friendly untuk bisnis di Medan, Nias, Sumatera Utara, hingga seluruh Indonesia."}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((s, i) => {
            const example = projects.find((p) => p.slug === s.example)
            return (
              <article
                key={s.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-primary/15 bg-card p-7 transition duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_20px_50px_rgb(var(--primary-rgb)/0.12)]"
              >
                <span aria-hidden="true" className={`absolute -right-2 -top-6 text-8xl text-primary/10 transition group-hover:text-primary/20 ${playfair.className}`}>
                  0{i + 1}
                </span>
                <h3 className={`relative text-2xl text-foreground ${playfair.className}`}>{en ? s.titleEn : s.title}</h3>
                <p className="relative mt-3 text-sm leading-6 text-muted-foreground">{en ? s.descEn : s.desc}</p>
                <ul className="relative mt-5 space-y-2">
                  {(en ? s.pointsEn : s.points).map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {example && (
                  <Link href={`/story/${example.slug}`} className="relative mt-auto pt-6 text-sm text-primary hover:underline underline-offset-4">
                    {en ? "Example: " : "Contoh: "}{example.name} →
                  </Link>
                )}
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/jasa-pembuatan-website-medan"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            {en ? "See service details" : "Lihat detail layanan"} <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/6283836098858"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3.5 text-sm text-primary transition hover:bg-primary/10"
          >
            {en ? "Free consultation" : "Konsultasi gratis"}
          </a>
        </div>
      </div>
    </section>
  )
}
