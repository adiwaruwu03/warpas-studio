"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export type NavKey = "home" | "portfolio" | "story" | "kontak" | "layanan" | "blog"

// Home page sections in page order (ids from app/page.tsx), same order as the nav
const SECTIONS: NavKey[] = ["home", "portfolio", "story", "layanan", "kontak"]

// Which nav item is current: by route, or on "/" by the section in view
export function useActiveNav(): NavKey | null {
  const pathname = usePathname()
  const [section, setSection] = useState<NavKey>("home")

  useEffect(() => {
    if (pathname !== "/") return
    const update = () => {
      const line = window.innerHeight * 0.4
      let current: NavKey = "home"
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setSection(current)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [pathname])

  if (pathname === "/") return section
  if (pathname.startsWith("/blog")) return "blog"
  if (pathname.startsWith("/jasa-pembuatan-website")) return "layanan"
  if (pathname.startsWith("/story")) return "story"
  return null
}
