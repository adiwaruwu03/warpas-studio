"use client"

import { useState, useEffect, useLayoutEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useLanguage } from "@/components/boty/language-context"
import { spaceGrotesk } from "@/lib/tech-fonts"
import { useActiveNav } from "@/components/boty/use-active-nav"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const { resolvedTheme, setTheme } = useTheme()

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
    { key: "home", name: language === "en" ? "Home" : "Beranda", href: isHomePage ? "#home" : "/" },
    { key: "portfolio", name: language === "en" ? "About" : "Tentang", href: isHomePage ? "#portfolio" : "/#portfolio" },
    { key: "story", name: language === "en" ? "Projects" : "Proyek", href: isHomePage ? "#story" : "/#story" },
    { key: "layanan", name: language === "en" ? "Services" : "Layanan", href: isHomePage ? "#layanan" : "/#layanan" },
    { key: "kontak", name: language === "en" ? "Contact" : "Kontak", href: isHomePage ? "#kontak" : "/#kontak" },
    { key: "blog", name: "Blog", href: "/blog" },
  ]

  // Sliding pill around the active link, measured from the link elements
  const active = useActiveNav()
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [bar, setBar] = useState<{ left: number; top: number; width: number; height: number } | null>(null)
  const [barReady, setBarReady] = useState(false)

  useLayoutEffect(() => {
    const measure = () => {
      const el = active ? linkRefs.current[active] : null
      setBar(el ? { left: el.offsetLeft, top: el.offsetTop, width: el.offsetWidth, height: el.offsetHeight } : null)
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [active, language])

  // Enable the slide only after the first placement, so the bar does not fly in on load
  useEffect(() => {
    if (bar && !barReady) requestAnimationFrame(() => setBarReady(true))
  }, [bar, barReady])

  return (
    // Over the hero video: transparent with light text (on-media). Elsewhere: a bar in the page color
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHomePage && !scrolled ? "on-media py-4 bg-transparent" : "py-2 bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
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
        <div className="relative hidden lg:flex items-center gap-1 xl:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.key}
              ref={(el) => { linkRefs.current[item.key] = el }}
              href={item.href}
              aria-current={active === item.key ? "page" : undefined}
              className={`relative z-10 rounded-full px-4 xl:px-5 py-2 text-base lg:text-lg uppercase tracking-[0.24em] transition-colors ${spaceGrotesk.className} ${
                active === item.key ? "text-white" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          {bar && (
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute rounded-full bg-brand shadow-[0_6px_18px_rgb(var(--primary-rgb)/0.25)] ${
                barReady ? "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" : ""
              }`}
              style={{ left: bar.left, top: bar.top, width: bar.width, height: bar.height }}
            />
          )}
        </div>

        {/* LANGUAGE TOGGLE - Right Aligned */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-foreground/10 text-foreground backdrop-blur-md transition hover:text-primary"
            aria-label={language === "en" ? "Toggle light or dark mode" : "Ganti mode terang atau gelap"}
          >
            {/* Icon picked by CSS so server and client render the same markup */}
            <Sun className="hidden h-4 w-4 [.dark_&]:block" />
            <Moon className="hidden h-4 w-4 [.light_&]:block" />
          </button>
          <div className="inline-flex rounded-full p-1 bg-foreground/10 backdrop-blur-md border border-foreground/15">
            <button
              type="button"
              onClick={() => setLanguage("id")}
              className={`rounded-full px-3 py-1.5 text-[10px] sm:text-xs font-semibold transition ${
                language === "id"
                  ? `${spaceGrotesk.className} bg-foreground text-background`
                  : `${spaceGrotesk.className} text-foreground/70 hover:text-foreground`
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
                  ? `${spaceGrotesk.className} bg-foreground text-background`
                  : `${spaceGrotesk.className} text-foreground/70 hover:text-foreground`
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
