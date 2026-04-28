"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Layers, Layout, MessageSquare, Globe } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"

export function BottomNav() {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const isHomePage = pathname === "/"

  const navItems = [
    { 
      name: language === "en" ? "Home" : "Beranda", 
      href: isHomePage ? "#home" : "/", 
      icon: Home 
    },
    { 
      name: language === "en" ? "Story" : "Story", 
      href: isHomePage ? "#story" : "/#story", 
      icon: Layers 
    },
    { 
      name: language === "en" ? "Portfolio" : "Portfolio", 
      href: isHomePage ? "#portfolio" : "/#portfolio", 
      icon: Layout 
    },
    { 
      name: language === "en" ? "Contact" : "Kontak", 
      href: isHomePage ? "#kontak" : "/#kontak", 
      icon: MessageSquare 
    },
  ]

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[92%] -translate-x-1/2 lg:hidden">
      <nav className="flex items-center justify-around rounded-2xl border border-white/20 bg-background/80 px-2 py-3 shadow-2xl backdrop-blur-xl">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (isHomePage && item.href.startsWith("#"))
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center gap-1 transition-all ${
                isActive ? "text-primary scale-110" : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium uppercase tracking-wider">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
