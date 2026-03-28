"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Palette, Smartphone, MessageSquare } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"

export function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className={`bg-background p-6 lg:p-8 text-center rounded-xl border border-stone-200 transition-all duration-700 ease-out border-none ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <badge.icon className="text-primary mb-4 mx-auto size-12" strokeWidth={1} />
              <h3 className="font-serif text-foreground mb-2 text-2xl">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
