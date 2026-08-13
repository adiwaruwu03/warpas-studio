"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useLanguage } from "@/components/boty/language-context"
import { spaceGrotesk } from "@/lib/tech-fonts"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()

  const closeMenu = () => setIsMenuOpen(false)

  // Cek apakah di homepage
  const isHomePage = pathname === "/"

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigasi items - jika di halaman detail, link ke homepage dengan hash
  const navItems = [
    { name: language === "en" ? "Home" : "Beranda", href: isHomePage ? "#home" : "/" },
    { name: language === "en" ? "About" : "Tentang", href: isHomePage ? "#story" : "/#story" },
    { name: language === "en" ? "Projects" : "Proyek", href: isHomePage ? "#portfolio" : "/#portfolio" },
    { name: language === "en" ? "Contact" : "Kontak", href: isHomePage ? "#kontak" : "/#kontak" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "py-2 bg-black/10 backdrop-blur-sm" : "py-4 bg-transparent"
    }`}
    style={{ animation: 'fade-down 1s cubic-bezier(0.16, 1, 0.3, 1) forwards', opacity: 0 }}>
      <style jsx>{`
        @keyframes fade-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <nav className="relative w-full px-6 lg:px-12 flex items-center justify-between h-[68px]">
        


        {/* DESKTOP NAV - Left Aligned */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base lg:text-lg uppercase tracking-[0.24em] transition ${spaceGrotesk.className} text-white/80 hover:text-white`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* LANGUAGE TOGGLE - Right Aligned */}
        <div className="flex items-center ml-auto">
          <div className="inline-flex rounded-full p-1 bg-white/10 backdrop-blur-md border border-white/10">
            <button
              type="button"
              onClick={() => setLanguage("id")}
              className={`rounded-full px-3 py-1.5 text-[10px] sm:text-xs font-semibold transition ${
                language === "id"
                  ? `${spaceGrotesk.className} bg-white text-black`
                  : `${spaceGrotesk.className} text-white/70 hover:text-white`
              }`}
              aria-pressed={language === "id"}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1.5 text-[10px] sm:text-xs font-semibold transition ${
                language === "en"
                  ? `${spaceGrotesk.className} bg-white text-black`
                  : `${spaceGrotesk.className} text-white/70 hover:text-white`
              }`}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
        </div>

      </nav>
    </header>
  )
}
