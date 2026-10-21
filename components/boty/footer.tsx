"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Instagram, Linkedin, Phone, Mail, Github } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"
import { playfair, spaceGrotesk } from "@/lib/tech-fonts"

export function Footer() {
  const { language } = useLanguage()
  const pathname = usePathname()
  const isTechHome = true
  const copy = {
    brandDescription:
      language === "en"
        ? "Web developer based in Medan, North Sumatra. Website and web application development for clients in Medan, Nias, across Sumatra, and all of Indonesia."
        : "Web developer di Medan, Sumatera Utara. Jasa pembuatan website dan aplikasi web untuk klien di Medan, Nias, seluruh Sumatera, hingga seluruh Indonesia.",
    socialMedia: language === "en" ? "Social Media" : "Sosial Media",
    contact: language === "en" ? "Contact" : "Kontak",
    privacy: language === "en" ? "Privacy Policy" : "Kebijakan Privasi",
    terms: language === "en" ? "Terms & Conditions" : "Ketentuan",
  }

  return (
    <footer className={`relative overflow-hidden pt-20 pb-10 ${isTechHome ? "bg-background" : "bg-primary"}`}>
      {/* Background Text - Ukuran diperkecil agar tidak kepanjangan */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none overflow-hidden">
        <div className="flex justify-center">
          <span
            className={`${isTechHome ? `${playfair.className} text-primary/5 uppercase tracking-[0.1em] sm:tracking-[0.12em]` : "font-serif text-foreground/5"} translate-y-[18%] text-[clamp(3.1rem,10vw,7.75rem)] font-bold leading-none whitespace-nowrap`}
          >
            Adi Putra
          </span>
        </div>
      </div>

      {isTechHome && (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* 3 COLUMN */}
        <div className="grid md:grid-cols-3 gap-10 mb-16 text-center">

          {/* BRAND */}
          <div className="flex flex-col items-center">
            <h2 className={`${isTechHome ? `${playfair.className} text-foreground uppercase tracking-[0.18em] text-xl sm:text-2xl` : "font-serif text-3xl text-foreground"} mb-4`}>
              Adi Putra Waruwu
            </h2>
            <p className={`${isTechHome ? `${spaceGrotesk.className} text-muted-foreground` : "text-foreground/70"} text-sm leading-relaxed max-w-xs`}>
              {copy.brandDescription}
            </p>
            <Link href="/jasa-pembuatan-website-medan" className={`${spaceGrotesk.className} mt-3 text-sm text-primary hover:underline underline-offset-4`}>
              {language === "en" ? "Website development services in Medan" : "Jasa pembuatan website Medan"}
            </Link>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="flex flex-col items-center">
            <h3 className={`${isTechHome ? `${playfair.className} text-primary uppercase tracking-[0.24em] text-xs` : "text-sm font-semibold text-foreground"} mb-4`}>
              {copy.socialMedia}
            </h3>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/adi_waruwwu/"
                target="_blank"
                rel="noopener noreferrer me"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition ${isTechHome ? "border border-primary/20 bg-primary/10 hover:bg-primary/20" : "bg-white/10 hover:bg-white/20"}`}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>

              <a
                href="https://www.tiktok.com/@halo_aku_adi"
                target="_blank"
                rel="noopener noreferrer me"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition ${isTechHome ? "border border-primary/20 bg-primary/10 hover:bg-primary/20" : "bg-white/10 hover:bg-white/20"}`}
                aria-label="TikTok"
              >
                <span className="text-sm font-bold text-foreground">TT</span>
              </a>

              <a
                href="https://www.linkedin.com/in/adi-putra-waruwu-554391288/"
                target="_blank"
                rel="noopener noreferrer me"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition ${isTechHome ? "border border-primary/20 bg-primary/10 hover:bg-primary/20" : "bg-white/10 hover:bg-white/20"}`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>

              <a
                href="https://github.com/adiwaruwu03"
                target="_blank"
                rel="noopener noreferrer me"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition ${isTechHome ? "border border-primary/20 bg-primary/10 hover:bg-primary/20" : "bg-white/10 hover:bg-white/20"}`}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col items-center">
            <h3 className={`${isTechHome ? `${playfair.className} text-primary uppercase tracking-[0.24em] text-xs` : "text-sm font-semibold text-foreground"} mb-4`}>
              {copy.contact}
            </h3>

            <div className="flex gap-4">
              <a
                href="https://wa.me/6283836098858"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition ${isTechHome ? "border border-primary/20 bg-primary/10 hover:bg-primary/20" : "bg-white/10 hover:bg-white/20"}`}
              >
                <Phone className="w-5 h-5 text-foreground" />
              </a>

              <a
                href="mailto:adiputrawaruwu030303@gmail.com"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition ${isTechHome ? "border border-primary/20 bg-primary/10 hover:bg-primary/20" : "bg-white/10 hover:bg-white/20"}`}
              >
                <Mail className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM CENTER TEXT */}
        <div className={`pt-10 text-center ${isTechHome ? "border-t border-primary/12" : "border-t border-white/10"}`}>
          <p className={`${isTechHome ? `${spaceGrotesk.className} text-muted-foreground` : "text-foreground/50"} text-sm`}>
            © {new Date().getFullYear()} Adi Putra Waruwu. Seluruh hak cipta dilindungi. •{" "}
            <Link href="/" className="hover:text-foreground/70 transition">
              {copy.privacy}
            </Link>{" "}
            •{" "}
            <Link href="/" className="hover:text-foreground/70 transition">
              {copy.terms}
            </Link>
          </p>
        </div>

      </div>
    </footer>
  )
}
