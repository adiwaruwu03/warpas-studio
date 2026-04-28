"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/boty/language-context"
import { orbitron, spaceGrotesk } from "@/lib/tech-fonts"

type Testimonial = {
  id: number
  name: string
  location: string
  text: string
  product: string
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="mb-4 flex-shrink-0 rounded-3xl border border-cyan-300/12 bg-[#0b1628]/92 p-6"
    style={{
      boxShadow: "0 18px 40px rgba(2, 12, 27, 0.36)"
    }}
  >
    {/* Stars */}
    

    {/* Quote */}
    <p className={`text-cyan-100/76 leading-relaxed mb-4 text-pretty font-medium text-xl tracking-wide ${spaceGrotesk.className}`}>
      &ldquo;{testimonial.text}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-start justify-between gap-2">
      <div>
        <p className={`text-white text-sm font-bold ${orbitron.className}`}>{testimonial.name}</p>
        <p className={`text-xs text-cyan-100/48 ${spaceGrotesk.className}`}>{testimonial.location}</p>
      </div>
      <span className={`text-xs tracking-wide text-cyan-300 bg-cyan-300/10 px-2 py-1 rounded-full whitespace-nowrap ${spaceGrotesk.className}`}>
        {testimonial.product}
      </span>
    </div>
  </div>
)

export function Testimonials() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const isEnglish = language === "en"

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Bina & Andi",
      location: "Jakarta",
      text: isEnglish
        ? "The digital invitation was very elegant and left a great impression on all our guests. The process was also fast and responsive."
        : "Undangan digitalnya sangat elegan dan semua tamu sangat terkesan. Proses pembuatan juga sangat cepat dan responsif.",
      product: isEnglish ? "Digital Invitation" : "Undangan Digital"
    },
    {
      id: 2,
      name: "Imelda Salon",
      location: "Bandung",
      text: isEnglish
        ? "A professional website that truly boosted our sales. The Warpas team really understood our salon business needs."
        : "Website profesional yang benar-benar meningkatkan penjualan kami. Tim Warpas sangat memahami kebutuhan bisnis salon.",
      product: isEnglish ? "Company Website" : "Website Company"
    },
    {
      id: 3,
      name: "Event Manager Surabaya",
      location: "Surabaya",
      text: isEnglish
        ? "Our event landing page converted really well. The design was modern and the user experience was outstanding."
        : "Landing page untuk event kami convert dengan sangat baik. Design-nya modern dan user experience-nya luar biasa.",
      product: "Landing Page"
    },
    {
      id: 4,
      name: "UMKM Craft Jakarta",
      location: "Jakarta",
      text: isEnglish
        ? "Our online store website looks much more professional now. The admin panel is easy to use and the support team is very responsive."
        : "Website toko online kami jadi lebih profesional. Admin panel-nya mudah digunakan dan support team sangat responsif.",
      product: isEnglish ? "SME Website" : "Website UMKM"
    },
    {
      id: 5,
      name: "Wedding Consultant",
      location: "Medan",
      text: isEnglish
        ? "Our digital invitation started trending on social media. Thank you Warpas Studio for the amazing work."
        : "Undangan digital kami menjadi trending di social media. Terimakasih Warpas Studio atas karya luar biasanya.",
      product: isEnglish ? "Digital Invitation" : "Undangan Digital"
    },
    {
      id: 6,
      name: "PT Konsultan",
      location: "Yogyakarta",
      text: isEnglish
        ? "Our company profile website now impresses potential clients much more. One of the best investments for our business."
        : "Website company profile kami sekarang lebih memukau calon klien. Investasi terbaik untuk bisnis kami.",
      product: isEnglish ? "Company Website" : "Website Company"
    },
    {
      id: 7,
      name: "Entrepreneur Muda",
      location: "Bandung",
      text: isEnglish
        ? "From consultation to website launch, Warpas was highly professional. The result exceeded my expectations."
        : "Dari konsultasi hingga launching website, Warpas sangat profesional. Hasilnya melebihi ekspektasi saya.",
      product: "Landing Page"
    },
    {
      id: 8,
      name: "Online Shop Owner",
      location: "Bali",
      text: isEnglish
        ? "Our e-commerce website has already improved traffic and sales. Thank you for the team's dedication."
        : "Website e-commerce kami sudah meningkatkan traffic dan penjualan. Terima kasih atas dedikasi tim Warpas.",
      product: isEnglish ? "SME Website" : "Website UMKM"
    },
    {
      id: 9,
      name: "Event Organizer",
      location: "Surabaya",
      text: isEnglish
        ? "The digital invitation with the custom animation we requested was delivered perfectly. Highly recommend Warpas!"
        : "Undangan digital dengan custom animation yang kami minta berhasil dibuat sempurna. Rekomendasikan Warpas!",
      product: isEnglish ? "Digital Invitation" : "Undangan Digital"
    }
  ]
  
  const column1 = [testimonials[0], testimonials[3], testimonials[6]]
  const column2 = [testimonials[1], testimonials[4], testimonials[7]]
  const column3 = [testimonials[2], testimonials[5], testimonials[8]]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current)
      }
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#07111f] pb-24 pt-12 py-24">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${spaceGrotesk.className} ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
            {isEnglish ? "Client Testimonials" : "Testimoni Klien"}
          </span>
          <h2 className={`text-4xl leading-tight text-white text-balance md:text-7xl ${orbitron.className} ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
            {isEnglish ? "Client Satisfaction" : "Kepuasan Klien"}
          </h2>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#07111f] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07111f] to-transparent z-10 pointer-events-none" />
          
          {/* Mobile - Single Column */}
          <div className="md:hidden h-[600px]">
            <div className="relative overflow-hidden h-full">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <TestimonialCard key={`mobile-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop - Three Columns */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 h-[600px]">
            {/* Column 1 - Scrolling Down */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...column1, ...column1].map((testimonial, index) => (
                  <TestimonialCard key={`col1-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Column 2 - Scrolling Up */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-up hover:animate-scroll-up-slow">
                {[...column2, ...column2].map((testimonial, index) => (
                  <TestimonialCard key={`col2-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Column 3 - Scrolling Down */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...column3, ...column3].map((testimonial, index) => (
                  <TestimonialCard key={`col3-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }

        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }

        .animate-scroll-down-slow {
          animation: scroll-down 60s linear infinite;
        }

        .animate-scroll-up-slow {
          animation: scroll-up 60s linear infinite;
        }
      `}</style>
    </section>
  )
}
