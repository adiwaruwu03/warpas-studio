"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
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
    { name: language === "en" ? "Home" : "Home", href: isHomePage ? "#home" : "/" },
    { name: language === "en" ? "Services" : "Layanan", href: isHomePage ? "#layanan" : "/#layanan" },
    { name: language === "en" ? "Portfolio" : "Portfolio", href: isHomePage ? "#portfolio" : "/#portfolio" },
    { name: language === "en" ? "Contact" : "Kontak", href: isHomePage ? "#kontak" : "/#kontak" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${
      scrolled || !isHomePage ? "pt-2" : "pt-4"
    }`}>
      <nav className={`max-w-7xl mx-auto px-6 lg:px-8 backdrop-blur-md rounded-xl border border-white/30 shadow-lg transition-all duration-300 ${
        scrolled || !isHomePage 
          ? "bg-background/95 shadow-md" 
          : "bg-white/40"
      }`}>

        <div className="flex items-center justify-between h-[68px]">

          {/* MOBILE BUTTON */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground transition"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-foreground/70 hover:text-foreground transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* LOGO - Link ke Homepage */}
          <Link 
            href="/" 
            className="absolute left-1/2 -translate-x-1/2"
            onClick={closeMenu}
          >
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider text-foreground">
              Warpas Studio
            </h1>
          </Link>

          <div className="hidden lg:flex items-center">
            <div className="inline-flex rounded-full border border-border bg-background/80 p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setLanguage("id")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  language === "id"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }`}
                aria-pressed={language === "id"}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }`}
                aria-pressed={language === "en"}
              >
                EN
              </button>
            </div>
          </div>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-72 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="text-sm text-foreground/70 hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                {language === "en" ? "Language" : "Bahasa"}
              </p>
              <div className="inline-flex rounded-full border border-border bg-background/80 p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setLanguage("id")}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    language === "id"
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  Indonesia
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    language === "en"
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </header>
  )
}
