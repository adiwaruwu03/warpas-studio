"use client"

import { ArrowRight, BriefcaseBusiness, Heart } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/boty/language-context"

export function ServicesGrid() {
  const { language } = useLanguage()
  const services = [
    {
      icon: BriefcaseBusiness,
      title: language === "en" ? "Business Website Service" : "Jasa Web UMKM",
      description:
        language === "en"
          ? "Clean, professional, and mobile-friendly business websites that help build customer trust."
          : "Website bisnis yang rapi, profesional, dan mobile friendly untuk membangun kepercayaan calon pelanggan.",
      link: "/services/company-profile"
    },
    {
      icon: Heart,
      title: language === "en" ? "Digital Wedding Invitation" : "Undangan Wedding Digital",
      description:
        language === "en"
          ? "Elegant digital invitations for wedding moments that are easy to share, comfortable to open, and memorable."
          : "Undangan digital elegan untuk momen pernikahan yang mudah dibagikan, nyaman dibuka, dan tampil berkesan.",
      link: "/services/undangan"
    }
  ]

  return (
    <section id="layanan" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            {language === "en" ? "Our Services" : "Layanan Kami"}
          </span>

          <h2 className="font-serif text-4xl md:text-6xl text-foreground">
            {language === "en" ? "Digital Solutions" : "Solusi Digital"}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            {language === "en"
              ? "Focused on the services your business and special moments need most."
              : "Fokus pada layanan yang paling dibutuhkan bisnis dan momen spesial Anda."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-[28px] border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-base leading-7 text-muted-foreground mb-8">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service.link}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-5 py-3 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  {language === "en" ? "View Details" : "Lihat Detail"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
