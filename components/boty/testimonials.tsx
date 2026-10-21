"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/boty/language-context"
import { playfair, spaceGrotesk } from "@/lib/tech-fonts"

type Testimonial = {
  id: number
  name: string
  location: string
  text: string
  product: string
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="mb-4 flex-shrink-0 rounded-3xl border border-primary/12 bg-card/92 p-6"
    style={{
      boxShadow: "0 18px 40px rgba(2, 12, 27, 0.36)"
    }}
  >
    {/* Stars */}
    

    {/* Quote */}
    <p className={`text-foreground/80 leading-relaxed mb-4 text-pretty font-medium text-xl tracking-wide ${spaceGrotesk.className}`}>
      &ldquo;{testimonial.text}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-start justify-between gap-2">
      <div>
        <p className={`text-foreground text-sm font-bold ${playfair.className}`}>{testimonial.name}</p>
        <p className={`text-xs text-muted-foreground ${spaceGrotesk.className}`}>{testimonial.location}</p>
      </div>
      <span className={`text-xs tracking-wide text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap ${spaceGrotesk.className}`}>
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
      name: "React & Next.js",
      location: "Frontend Framework",
      text: isEnglish
        ? "Building interactive and scalable user interfaces with component-driven architecture."
        : "Membangun antarmuka yang interaktif dan scalable dengan arsitektur berbasis komponen.",
      product: "Core Stack"
    },
    {
      id: 2,
      name: "Tailwind CSS",
      location: "Styling",
      text: isEnglish
        ? "Creating beautiful, responsive designs rapidly with utility-first CSS."
        : "Menciptakan desain yang indah dan responsif secara cepat menggunakan utility-first CSS.",
      product: "Styling"
    },
    {
      id: 3,
      name: "TypeScript",
      location: "Language",
      text: isEnglish
        ? "Ensuring type safety and reducing runtime errors for more reliable codebases."
        : "Memastikan keamanan tipe data dan mengurangi error untuk kode yang lebih handal.",
      product: "Language"
    },
    {
      id: 4,
      name: "Clean Code",
      location: "Principle",
      text: isEnglish
        ? "Writing readable, maintainable code that other developers can easily understand and build upon."
        : "Menulis kode yang mudah dibaca dan dipelihara agar mudah dipahami oleh developer lain.",
      product: "Best Practice"
    },
    {
      id: 5,
      name: "Performance First",
      location: "Principle",
      text: isEnglish
        ? "Optimizing loading times and rendering performance for the best user experience."
        : "Mengoptimalkan waktu muat dan performa rendering demi pengalaman pengguna terbaik.",
      product: "Optimization"
    },
    {
      id: 6,
      name: "Git & GitHub",
      location: "Version Control",
      text: isEnglish
        ? "Managing code versions and collaborating efficiently across different environments."
        : "Mengelola versi kode dan berkolaborasi secara efisien di berbagai lingkungan pengembangan.",
      product: "Tools"
    },
    {
      id: 7,
      name: "Responsive Design",
      location: "Principle",
      text: isEnglish
        ? "Ensuring websites look and function perfectly across all device sizes and screen resolutions."
        : "Memastikan website tampil dan berfungsi sempurna di berbagai ukuran layar dan resolusi.",
      product: "UI/UX"
    },
    {
      id: 8,
      name: "Framer Motion",
      location: "Animation",
      text: isEnglish
        ? "Adding fluid animations and micro-interactions that bring web interfaces to life."
        : "Menambahkan animasi mulus dan mikro-interaksi yang membuat antarmuka web terasa hidup.",
      product: "Library"
    },
    {
      id: 9,
      name: "Continuous Learning",
      location: "Mindset",
      text: isEnglish
        ? "Always staying updated with the latest web technologies and best practices."
        : "Selalu mengikuti perkembangan teknologi web terbaru dan praktik-praktik terbaik di industri.",
      product: "Growth"
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
    <section className="relative overflow-hidden bg-background pb-24 pt-12 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${spaceGrotesk.className} ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
            {isEnglish ? "Tech Stack" : "Tech Stack"}
          </span>
          <h2 className={`text-4xl leading-tight text-foreground text-balance md:text-7xl ${playfair.className} ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
            {isEnglish ? "Development Principles" : "Prinsip Pengembangan"}
          </h2>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
          
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
