"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Palette, Smartphone, MessageSquare } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"
import { orbitron, spaceGrotesk } from "@/lib/tech-fonts"

export function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const isEnglish = language === "en"
  const badges = [
    {
      icon: Zap,
      title: language === "en" ? "Fast Delivery" : "Pengerjaan Cepat",
      description: language === "en" ? "Delivered on schedule" : "Selesai tepat waktu sesuai jadwal"
    },
    {
      icon: Palette,
      title: language === "en" ? "Premium Design" : "Desain Premium",
      description: language === "en" ? "Modern and professional aesthetics" : "Estetika modern dan profesional"
    },
    {
      icon: Smartphone,
      title: language === "en" ? "Mobile Friendly" : "Mobile Friendly",
      description: language === "en" ? "Responsive on every device" : "Responsif di semua perangkat"
    },
    {
      icon: MessageSquare,
      title: language === "en" ? "Friendly Support" : "Support Ramah",
      description: language === "en" ? "Our team is ready to help" : "Tim siap membantu Anda"
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
    <section className="relative overflow-hidden bg-[#07111f] py-20">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_32%)]" />
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
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
            className={`rounded-2xl border border-cyan-300/12 bg-[#0b1628]/88 p-6 text-center backdrop-blur-sm transition-all duration-700 ease-out lg:p-8 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <badge.icon className="text-cyan-300 mb-4 mx-auto size-12" strokeWidth={1} />
              <h3 className={`text-white mb-2 text-xl ${orbitron.className}`}>{badge.title}</h3>
              <p className={`text-sm text-cyan-100/60 ${spaceGrotesk.className}`}>{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
