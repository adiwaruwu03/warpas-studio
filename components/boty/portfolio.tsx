"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"

export function Portfolio() {
  const { language } = useLanguage()
  const isEnglish = language === "en"

  const stats = [
    { value: "2024", label: isEnglish ? "Founded" : "Tahun Berdiri" },
    { value: "10+", label: isEnglish ? "Completed Projects" : "Proyek Selesai" },
    { value: "5+", label: isEnglish ? "Happy Clients" : "Klien Puas" },
    { value: "100%", label: isEnglish ? "Commitment to Satisfaction" : "Komitmen Kepuasan" },
  ]

  const images = [
    {
      src: "/images/igss.jpeg",
      link: "https://www.instagram.com/adi_waruwwu/?hl=id",
      label: "Instagram",
    },
    {
      src: "/images/linkind.jpeg",
      link: "https://www.linkedin.com/in/adi-putra-waruwu-554391288/",
      label: "LinkedIn",
    },
    {
      src: "/images/github.jpeg",
      link: "https://github.com/adiwaruwu03",
      label: "GitHub",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              {isEnglish ? "About Me" : "Tentang Saya"}
            </p>

            <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl text-balance">
              {isEnglish
                ? "Crafting Digital Identities That Feel Refined and Memorable"
                : "Menciptakan Identitas Digital yang Berkelas dan Berkesan"}
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base text-justify">
              <p>
                {isEnglish
                  ? "I am Adi Putra Waruwu, a university student and frontend developer focused on building professional and refined digital identities. I believe every individual and brand has strong potential to stand out in the digital world, but not everyone has the right direction, strategy, and approach to bring it to life."
                  : "Perkenalkan, saya Adi Putra Waruwu, seorang mahasiswa sekaligus frontend developer yang berfokus pada pembangunan identitas digital yang profesional dan berkelas. Saya percaya bahwa setiap individu dan brand memiliki potensi besar untuk tampil secara maksimal di dunia digital, namun tidak semua memiliki arah, strategi, dan pendekatan yang tepat untuk mewujudkannya."}
              </p>

              <p>
                {isEnglish
                  ? "Through a structured approach and strong attention to detail, I help create digital experiences that are not only visually appealing, but also able to build trust, strengthen identity, and leave a lasting impression on every audience that sees them."
                  : "Melalui pendekatan yang terstruktur dan perhatian terhadap detail, saya membantu menciptakan tampilan digital yang tidak hanya menarik secara visual, tetapi juga mampu membangun kepercayaan, memperkuat identitas, dan memberikan kesan yang berkelanjutan bagi setiap audiens yang melihatnya."}
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE SLIDER - Portrait ratio 750:1220 = 75:122 */}
          <div className="relative w-full max-w-[280px] mx-auto md:max-w-[320px] lg:max-w-[360px]">
            {/* Container dengan rasio portrait 75:122 (750:1220) */}
            <div className="relative aspect-[75/122] w-full overflow-visible">
              {images.map((img, index) => {
                const offset =
                  (index - currentIndex + images.length) % images.length
                let transform = ""
                let zIndex = 0

                if (offset === 0) {
                  transform = "translateX(0) scale(1) rotateY(0deg)"
                  zIndex = 30
                } else if (offset === 1) {
                  transform = isMobile
                    ? "translateX(25%) scale(0.85) rotateY(-10deg)"
                    : "translateX(40px) scale(0.9) rotateY(-15deg)"
                  zIndex = 20
                } else {
                  transform = isMobile
                    ? "translateX(-25%) scale(0.85) rotateY(10deg)"
                    : "translateX(-40px) scale(0.9) rotateY(15deg)"
                  zIndex = 10
                }

                return (
                  <div
                    key={img.src}
                    className="absolute inset-0 transition-all duration-700 ease-out"
                    style={{
                      transform,
                      zIndex,
                      opacity: offset > 1 ? 0.4 : 1,
                    }}
                  >
                    <a
                      href={img.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full group"
                    >
                      <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
                        {/* Dark gradient overlay for dramatic effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 rounded-2xl pointer-events-none" />
                        
                        <Image
                          src={img.src}
                          alt={img.label}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 70vw, 360px"
                          priority={offset === 0}
                        />

                        {/* Hover overlay with dark effect */}
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center z-20 rounded-2xl">
                          <span className="text-white text-base font-semibold">
                            {img.label}
                          </span>
                          <span className="text-white text-xs opacity-80 mt-1">
                            {isEnglish ? "View Profile" : "Lihat Profil"}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-40 rounded-full bg-black/70 p-2 text-white hover:bg-black/90 transition backdrop-blur-sm shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-40 rounded-full bg-black/70 p-2 text-white hover:bg-black/90 transition backdrop-blur-sm shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-primary w-6 shadow-lg shadow-primary/50"
                      : "bg-white/60 w-2 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-20 md:mt-24">
          <div className="grid grid-cols-2 gap-6 text-center sm:gap-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value} className="group">
                <div className="font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl transition-all group-hover:scale-105 inline-block">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-medium tracking-wide text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
