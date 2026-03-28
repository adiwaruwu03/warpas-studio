"use client"

import Link from "next/link"
import { Instagram, Linkedin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"

export function Footer() {
  const { language } = useLanguage()
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
    <footer className="bg-primary pt-20 pb-10 relative overflow-hidden">

      {/* Background Text - Ukuran diperkecil agar tidak kepanjangan */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="flex justify-center items-end h-full">
          <span className="font-serif text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] font-bold text-white/5 whitespace-nowrap leading-none">
            Warpas Studio
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* 3 COLUMN */}
        <div className="grid md:grid-cols-3 gap-10 mb-16 text-center">

          {/* BRAND */}
          <div className="flex flex-col items-center">
            <h2 className="font-serif text-3xl text-white mb-4">
              Warpas Studio
            </h2>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              {copy.brandDescription}
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-white mb-4">
              {copy.socialMedia}
            </h3>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/adi_waruwwu/?hl=id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:scale-110 hover:bg-white/20 transition"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://www.tiktok.com/@gido_daa?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:scale-110 hover:bg-white/20 transition"
              >
                <span className="text-sm font-bold text-white">TT</span>
              </a>

              <a
                href="https://www.linkedin.com/in/adi-putra-waruwu-554391288/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:scale-110 hover:bg-white/20 transition"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-white mb-4">
              {copy.contact}
            </h3>

            <div className="flex gap-4">
              <a
                href="https://wa.me/6283836098858"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:scale-110 hover:bg-white/20 transition"
              >
                <Phone className="w-5 h-5 text-white" />
              </a>

              <a
                href="mailto:adiputrawaruwu030303@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:scale-110 hover:bg-white/20 transition"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM CENTER TEXT */}
        <div className="pt-10 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">
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
