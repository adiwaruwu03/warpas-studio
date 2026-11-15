"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Layers, Layout, MessageSquare, Briefcase, BookOpen } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"
import { useActiveNav } from "@/components/boty/use-active-nav"

export function BottomNav() {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const isHomePage = pathname === "/"

  // Same order as the header nav and the home page sections
  const navItems = [
    { key: "home", name: language === "en" ? "Home" : "Beranda", href: isHomePage ? "#home" : "/", icon: Home },
    { key: "portfolio", name: language === "en" ? "About" : "Tentang", href: isHomePage ? "#portfolio" : "/#portfolio", icon: Layout },
    { key: "story", name: language === "en" ? "Projects" : "Proyek", href: isHomePage ? "#story" : "/#story", icon: Layers },
    { key: "layanan", name: language === "en" ? "Services" : "Layanan", href: isHomePage ? "#layanan" : "/#layanan", icon: Briefcase },
    { key: "kontak", name: language === "en" ? "Contact" : "Kontak", href: isHomePage ? "#kontak" : "/#kontak", icon: MessageSquare },
    { key: "blog", name: "Blog", href: "/blog", icon: BookOpen },
  ]

  const active = useActiveNav()

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[92%] -translate-x-1/2 lg:hidden">
      <nav className="flex items-center justify-around rounded-2xl border border-border bg-background/95 px-1.5 py-2 shadow-2xl backdrop-blur-xl">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.key
          
          return (
            <Link
              key={item.key}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`relative flex flex-col items-center gap-1 rounded-full px-2 py-2 transition-colors duration-300 ${
                isActive ? "text-white" : "text-foreground/65 hover:text-foreground"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-0 rounded-full bg-brand shadow-[0_4px_12px_rgb(var(--primary-rgb)/0.25)] transition-all duration-300 ${isActive ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
              />
              <Icon className="relative h-5 w-5" />
              <span className="relative text-[9px] font-medium uppercase tracking-wide">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
