"use client"

import { ArrowRight, BriefcaseBusiness, Heart } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/boty/language-context"
import { orbitron, spaceGrotesk } from "@/lib/tech-fonts"

export function ServicesGrid() {
  const { language } = useLanguage()
  const isEnglish = language === "en"
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
    <section id="layanan" className="relative overflow-hidden bg-[#07111f] py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 relative">
          <span className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${spaceGrotesk.className}`}>
            {isEnglish ? "Our Services" : "Layanan Kami"}
          </span>

          <h2 className={`text-4xl md:text-6xl text-white ${orbitron.className}`}>
            {isEnglish ? "Digital Solutions Engineered for Impact" : "Solusi Digital yang Dirancang Lebih Presisi"}
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto text-cyan-100/62 text-lg ${spaceGrotesk.className}`}>
            {isEnglish
              ? "Built to help brands look more credible online while keeping every touchpoint clean, intentional, and easy to use."
              : "Dirancang untuk membantu brand terlihat lebih kredibel secara digital, dengan tampilan yang bersih, terarah, dan mudah digunakan."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="service-card group relative overflow-hidden rounded-[28px] p-[1px] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="service-card-rotator" />
                <div className="service-card-inner relative flex h-full flex-col justify-between overflow-hidden rounded-[27px] border border-cyan-200/10 bg-[#07111f] p-8 shadow-[0_18px_48px_rgba(2,8,23,0.22)]">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/16 bg-cyan-300/10 text-cyan-300 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>

                    <h3 className={`text-2xl text-white mb-3 ${orbitron.className}`}>
                      {service.title}
                    </h3>

                    <p className={`text-base leading-7 text-cyan-100/58 mb-8 ${spaceGrotesk.className}`}>
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href={service.link}
                    className={`relative z-10 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-300 hover:text-slate-950 ${spaceGrotesk.className}`}
                  >
                    {language === "en" ? "View Details" : "Lihat Detail"}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      <style jsx>{`
        .service-card {
          background: rgba(103, 232, 249, 0.08);
          box-shadow: 0 24px 60px rgba(8, 145, 178, 0.08);
        }

        .service-card-rotator {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 92px;
          height: 160%;
          transform: translate(-50%, -50%);
          background-image: linear-gradient(180deg, rgba(34, 211, 238, 0.95), rgba(244, 114, 182, 0.85));
          animation: services-rotator 5.2s linear infinite;
          opacity: 0.78;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .service-card-rotator {
          opacity: 1;
        }

        .service-card-inner::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(34, 211, 238, 0.08), transparent 30%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 35%);
          pointer-events: none;
        }

        .service-card-inner::after {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: 26px;
          background: #07111f;
          z-index: 0;
        }

        @keyframes services-rotator {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}
