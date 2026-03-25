"use client"

import { Globe, ShoppingCart, Heart } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Company Profile",
    description: "Website profesional untuk memperkenalkan bisnis Anda dengan desain modern dan responsif",
    link: "https://web.warpasdigital.com"
  },
  {
    icon: ShoppingCart,
    title: "Landing Page",
    description: "Halaman penjualan yang dioptimalkan untuk konversi tinggi",
    link: "https://landing.warpasdigital.com"
  },
  {
    icon: Heart,
    title: "Undangan Digital",
    description: "Undangan elegan untuk pernikahan dan acara spesial Anda",
    link: "https://wedding.warpasdigital.com"
  }
]

export function ServicesGrid() {
  return (
    <section id="layanan" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            Layanan Kami
          </span>

          <h2 className="font-serif text-4xl md:text-6xl text-foreground">
            Solusi Digital
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-6">
                    {service.description}
                  </p>
                </div>

                {/* BUTTON */}
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Lihat Detail
                </a>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}