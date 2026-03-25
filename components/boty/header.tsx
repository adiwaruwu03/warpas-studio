"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 backdrop-blur-md rounded-xl bg-white/40 border border-white/30 shadow-[0_10px_50px_rgba(0,0,0,0.1)]">

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
            <Link href="#home" className="text-sm text-foreground/70 hover:text-foreground transition">
              Home
            </Link>

            <Link href="#layanan" className="text-sm text-foreground/70 hover:text-foreground transition">
              Layanan
            </Link>

            <Link href="#portfolio" className="text-sm text-foreground/70 hover:text-foreground transition">
              Tentang
            </Link>

            <Link href="#kontak" className="text-sm text-foreground/70 hover:text-foreground transition">
              Kontak
            </Link>
          </div>

          {/* LOGO */}
          <Link href="#home" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider text-foreground">
              Warpas Studio
            </h1>
          </Link>

         
          
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-72 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border/50">

            <Link href="#home" onClick={closeMenu} className="text-sm text-foreground/70 hover:text-foreground">
              Home
            </Link>

            <Link href="#layanan" onClick={closeMenu} className="text-sm text-foreground/70 hover:text-foreground">
              Layanan
            </Link>

            <Link href="#portfolio" onClick={closeMenu} className="text-sm text-foreground/70 hover:text-foreground">
              Portfolio
            </Link>

            <Link href="#kontak" onClick={closeMenu} className="text-sm text-foreground/70 hover:text-foreground">
              Kontak
            </Link>

            <a
              href="https://wa.me/6283836098858"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/70 hover:text-foreground"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </nav>
    </header>
  )
}