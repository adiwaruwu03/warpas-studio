"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/boty/language-context"
import { orbitron, spaceGrotesk } from "@/lib/tech-fonts"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // Cek apakah di homepage
  const isHomePage = pathname === "/"
  const isTechHome = true // Always use tech theme now

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
    { name: language === "en" ? "Home" : "Home", href: isHomePage ? "#home" : "/" },
    { name: language === "en" ? "Story" : "Story", href: isHomePage ? "#story" : "/#story" },
    { name: language === "en" ? "Portfolio" : "Portfolio", href: isHomePage ? "#portfolio" : "/#portfolio" },
    { name: language === "en" ? "Contact" : "Kontak", href: isHomePage ? "#kontak" : "/#kontak" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${
      scrolled || !isHomePage ? "pt-2" : "pt-4"
    }`}>
      <nav className={`relative max-w-screen-2xl mx-auto px-6 lg:px-8 backdrop-blur-md rounded-xl border shadow-lg transition-all duration-300 ${
        isTechHome
          ? scrolled
            ? "border-cyan-300/15 bg-[#08111d]/92 shadow-[0_14px_40px_rgba(2,12,27,0.45)]"
            : "border-cyan-300/20 bg-[#08111d]/55 shadow-[0_20px_60px_rgba(2,12,27,0.35)]"
          : scrolled || !isHomePage
            ? "border-white/30 bg-background/95 shadow-md"
            : "border-white/30 bg-white/40"
      }`}>
        {isTechHome && (
          <>
            <div className="pointer-events-none absolute -inset-[1px] rounded-xl opacity-95">
              <div className="absolute inset-0 rounded-xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(0,0,0,0)_0deg,rgba(34,211,238,0.2)_46deg,rgba(59,130,246,0.28)_88deg,rgba(0,0,0,0)_135deg,rgba(0,0,0,0)_225deg,rgba(217,70,239,0.22)_280deg,rgba(34,211,238,0.16)_320deg,rgba(0,0,0,0)_360deg)] blur-[3px]" />
              <div className="absolute inset-[1px] rounded-[11px] bg-[#08111d]/86" />
            </div>
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/65 to-transparent" />
            <div className="pointer-events-none absolute inset-y-3 left-0 w-px bg-gradient-to-b from-transparent via-cyan-300/45 to-transparent" />
            <div className="pointer-events-none absolute inset-y-3 right-0 w-px bg-gradient-to-b from-transparent via-fuchsia-400/35 to-transparent" />
          </>
        )}

        <div className="relative z-10 flex items-center justify-between h-[68px]">

          {/* MOBILE LOGO - Left Corner */}
          <Link 
            href="/" 
            className="lg:hidden relative h-10 w-10 overflow-hidden rounded-full border border-cyan-300/20 shadow-sm"
          >
            <Image
              src="/logo-warpas.png"
              alt="Warpas Studio Logo"
              fill
              className="object-cover"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm uppercase tracking-[0.24em] transition ${
                  isTechHome
                    ? `${spaceGrotesk.className} text-cyan-100/70 hover:text-cyan-200`
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* LOGO - Hidden on mobile, shown on desktop */}
          <Link 
            href="/" 
            className="absolute left-1/2 -translate-x-1/2 hidden lg:block"
            onClick={closeMenu}
          >
            <h1 className={`${isTechHome ? `${orbitron.className} text-cyan-100 tracking-[0.26em] uppercase text-lg md:text-xl` : "font-serif text-2xl md:text-3xl tracking-wider text-foreground"}`}>
              Warpas Studio
            </h1>
          </Link>

          {/* LANGUAGE TOGGLE - Shown on both mobile and desktop */}
          <div className="flex items-center">
            <div className={`inline-flex rounded-full p-1 shadow-sm ${isTechHome ? "border border-cyan-300/20 bg-[#0b1628]/90" : "border border-border bg-background/80"}`}>
              <button
                type="button"
                onClick={() => setLanguage("id")}
                className={`rounded-full px-3 py-1.5 text-[10px] sm:text-xs font-semibold transition ${
                  language === "id"
                    ? isTechHome
                      ? `${spaceGrotesk.className} bg-cyan-300 text-slate-950`
                      : "bg-primary text-primary-foreground"
                    : isTechHome
                      ? `${spaceGrotesk.className} text-cyan-100/70 hover:text-cyan-200`
                      : "text-foreground/70 hover:text-foreground"
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
                    ? isTechHome
                      ? `${spaceGrotesk.className} bg-cyan-300 text-slate-950`
                      : "bg-primary text-primary-foreground"
                    : isTechHome
                      ? `${spaceGrotesk.className} text-cyan-100/70 hover:text-cyan-200`
                      : "text-foreground/70 hover:text-foreground"
                }`}
                aria-pressed={language === "en"}
              >
                EN
              </button>
            </div>
          </div>

        </div>

        {/* MOBILE MENU - HIDDEN because of BottomNav */}

      </nav>
    </header>
  )
}
