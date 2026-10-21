"use client"

import { useEffect, useRef, useState } from "react"
import { Smartphone, Code, Zap, LayoutTemplate } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"
import { playfair, spaceGrotesk } from "@/lib/tech-fonts"

export function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const isEnglish = language === "en"
  const badges = [
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: language === "en" ? "Websites remain comfortable to use on desktop and mobile." : "Website tetap nyaman digunakan di desktop maupun smartphone."
    },
    {
      icon: Code,
      title: "Clean Code",
      description: language === "en" ? "Neat, consistent, and maintainable code." : "Kode yang rapi, konsisten, dan mudah dikembangkan."
    },
    {
      icon: Zap,
      title: "Performance",
      description: language === "en" ? "Prioritizing performance for fast and efficient websites." : "Mengutamakan performa agar website terasa cepat dan efisien."
    },
    {
      icon: LayoutTemplate,
      title: "Modern UI",
      description: language === "en" ? "Simple, clean, and user-friendly interface." : "Antarmuka yang sederhana, bersih, dan nyaman digunakan."
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-background py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.16),transparent_32%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className={`text-xs font-semibold uppercase tracking-[0.34em] text-primary/80 ${spaceGrotesk.className}`}>
            {isEnglish ? "Core Signals" : "Sinyal Utama"}
          </p>
        </div>
        <div 
          ref={sectionRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className={`flex flex-col h-full justify-start items-center rounded-2xl border border-primary/12 bg-card/88 p-4 sm:p-6 text-center backdrop-blur-sm transition-all duration-700 ease-out lg:p-8 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <badge.icon className="text-primary mb-3 sm:mb-4 mx-auto size-10 sm:size-12" strokeWidth={1} />
              <h3 className={`text-foreground mb-2 text-lg sm:text-xl leading-tight ${playfair.className}`}>{badge.title}</h3>
              <p className={`text-xs sm:text-sm text-muted-foreground ${spaceGrotesk.className}`}>{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
