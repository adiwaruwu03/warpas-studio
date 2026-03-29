"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Instagram, Linkedin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"
import { orbitron, spaceGrotesk } from "@/lib/tech-fonts"

export function Footer() {
  const { language } = useLanguage()
  const pathname = usePathname()
  const isTechHome = pathname !== "/services/undangan"
  const copy = {
    brandDescription:
      language === "en"
        ? "Professional digital solutions for your business and events. We help create modern and elegant digital experiences."
        : "Solusi digital profesional untuk bisnis dan acara Anda. Kami membantu menciptakan pengalaman digital yang modern dan elegan.",
    socialMedia: language === "en" ? "Social Media" : "Sosial Media",
    contact: language === "en" ? "Contact" : "Kontak",
    privacy: language === "en" ? "Privacy Policy" : "Kebijakan Privasi",
    terms: language === "en" ? "Terms of Service" : "Syarat Layanan",
  }

  return (
    <footer className={`relative overflow-hidden pt-20 pb-10 ${isTechHome ? "bg-[#06111f]" : "bg-primary"}`}>
      {/* Background Text - Ukuran diperkecil agar tidak kepanjangan */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none overflow-hidden">
        <div className="flex justify-center">
          <span
            className={`${isTechHome ? `${orbitron.className} text-cyan-300/5 uppercase tracking-[0.1em] sm:tracking-[0.12em]` : "font-serif text-white/5"} translate-y-[18%] text-[clamp(3.1rem,10vw,7.75rem)] font-bold leading-none whitespace-nowrap`}
          >
            Warpas Studio
          </span>
        </div>
      </div>

      {isTechHome && (
        <>
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:38px_38px]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* 3 COLUMN */}
        <div className="grid md:grid-cols-3 gap-10 mb-16 text-center">

          {/* BRAND */}
          <div className="flex flex-col items-center">
            <h2 className={`${isTechHome ? `${orbitron.className} text-cyan-100 uppercase tracking-[0.18em] text-xl sm:text-2xl` : "font-serif text-3xl text-white"} mb-4`}>
              Warpas Studio
            </h2>
            <p className={`${isTechHome ? `${spaceGrotesk.className} text-cyan-100/68` : "text-white/70"} text-sm leading-relaxed max-w-xs`}>
              {copy.brandDescription}
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="flex flex-col items-center">
            <h3 className={`${isTechHome ? `${orbitron.className} text-cyan-200 uppercase tracking-[0.24em] text-xs` : "text-sm font-semibold text-white"} mb-4`}>
              {copy.socialMedia}
            </h3>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/adi_waruwwu/?hl=id"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition ${isTechHome ? "border border-cyan-300/20 bg-cyan-300/10 hover:bg-cyan-300/20" : "bg-white/10 hover:bg-white/20"}`}
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://www.tiktok.com/@gido_daa?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition ${isTechHome ? "border border-cyan-300/20 bg-cyan-300/10 hover:bg-cyan-300/20" : "bg-white/10 hover:bg-white/20"}`}
              >
                <span className="text-sm font-bold text-white">TT</span>
              </a>

              <a
                href="https://www.linkedin.com/in/adi-putra-waruwu-554391288/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition ${isTechHome ? "border border-cyan-300/20 bg-cyan-300/10 hover:bg-cyan-300/20" : "bg-white/10 hover:bg-white/20"}`}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col items-center">
            <h3 className={`${isTechHome ? `${orbitron.className} text-cyan-200 uppercase tracking-[0.24em] text-xs` : "text-sm font-semibold text-white"} mb-4`}>
              {copy.contact}
            </h3>

            <div className="flex gap-4">
              <a
                href="https://wa.me/6283836098858"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition ${isTechHome ? "border border-cyan-300/20 bg-cyan-300/10 hover:bg-cyan-300/20" : "bg-white/10 hover:bg-white/20"}`}
              >
                <Phone className="w-5 h-5 text-white" />
              </a>

              <a
                href="mailto:adiputrawaruwu030303@gmail.com"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition ${isTechHome ? "border border-cyan-300/20 bg-cyan-300/10 hover:bg-cyan-300/20" : "bg-white/10 hover:bg-white/20"}`}
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM CENTER TEXT */}
        <div className={`pt-10 text-center ${isTechHome ? "border-t border-cyan-300/12" : "border-t border-white/10"}`}>
          <p className={`${isTechHome ? `${spaceGrotesk.className} text-cyan-100/48` : "text-white/50"} text-sm`}>
            © {new Date().getFullYear()} Warpas Studio. All rights reserved. •{" "}
            <Link href="/" className="hover:text-white/70 transition">
              {copy.privacy}
            </Link>{" "}
            •{" "}
            <Link href="/" className="hover:text-white/70 transition">
              {copy.terms}
            </Link>
          </p>
        </div>

      </div>
    </footer>
  )
}
