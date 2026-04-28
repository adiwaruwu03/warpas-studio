"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"
import { orbitron, spaceGrotesk } from "@/lib/tech-fonts"

export function Portfolio() {
  const { language } = useLanguage()
  const isEnglish = language === "en"
  const matrixRows = 5
  const matrixColumns = 24

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
    <section id="about" className="relative overflow-hidden bg-[#02060d] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-55">
        <div className="matrix-container">
          {Array.from({ length: matrixRows }).map((_, rowIndex) => (
            <div key={rowIndex} className="matrix-pattern" aria-hidden="true">
              {Array.from({ length: matrixColumns }).map((_, columnIndex) => (
                <div
                  key={`${rowIndex}-${columnIndex}`}
                  className="matrix-column"
                  style={
                    {
                      "--matrix-left": `${columnIndex * 32}px`,
                      "--matrix-delay": `${-((columnIndex % 8) * 0.45 + rowIndex * 0.35)}s`,
                      "--matrix-duration": `${3 + ((columnIndex + rowIndex) % 6) * 0.35}s`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-32">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <p className={`text-sm font-semibold uppercase tracking-[0.4em] text-primary mb-6 ${spaceGrotesk.className}`}>
              {isEnglish ? "About Me" : "Tentang Saya"}
            </p>

            <h2 className={`text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance ${orbitron.className}`}>
              {isEnglish
                ? "Crafting Digital Identities That Feel Refined and Memorable"
                : "Menciptakan Identitas Digital yang Berkelas dan Berkesan"}
            </h2>

            <div className={`mt-10 space-y-6 text-base leading-relaxed text-cyan-100/70 sm:text-lg text-justify max-w-3xl ${spaceGrotesk.className}`}>
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
          <div className="relative w-full max-w-[300px] mx-auto md:max-w-[350px] lg:max-w-[420px]">
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
                      <div className="relative w-full h-full overflow-hidden rounded-2xl border border-cyan-300/12 shadow-2xl shadow-black/40">
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
                          <span className={`text-white text-base font-semibold ${orbitron.className}`}>
                            {img.label}
                          </span>
                          <span className={`text-white text-xs opacity-80 mt-1 ${spaceGrotesk.className}`}>
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
              className="absolute left-2 top-1/2 -translate-y-1/2 z-40 rounded-full border border-cyan-300/20 bg-[#08111d]/92 p-2 text-cyan-100 hover:bg-[#11203a] transition backdrop-blur-sm shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-40 rounded-full border border-cyan-300/20 bg-[#08111d]/92 p-2 text-cyan-100 hover:bg-[#11203a] transition backdrop-blur-sm shadow-lg"
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
                      ? "bg-cyan-300 w-6 shadow-lg shadow-cyan-300/40"
                      : "bg-cyan-100/30 w-2 hover:bg-cyan-100/60"
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
                <div className={`text-2xl font-bold text-cyan-300 sm:text-3xl md:text-4xl lg:text-5xl transition-all group-hover:scale-105 inline-block ${orbitron.className}`}>
                  {stat.value}
                </div>
                <div className={`mt-2 text-xs font-medium tracking-wide text-cyan-100/55 sm:text-sm ${spaceGrotesk.className}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .matrix-container {
          display: flex;
          width: 100%;
          height: 100%;
        }

        .matrix-pattern {
          position: relative;
          width: 820px;
          height: 100%;
          flex-shrink: 0;
        }

        .matrix-column {
          position: absolute;
          top: -120%;
          left: var(--matrix-left);
          width: 24px;
          height: 140%;
          overflow: hidden;
          animation: matrix-fall var(--matrix-duration) linear infinite;
          animation-delay: var(--matrix-delay);
          opacity: 0.85;
        }

        .matrix-column::before {
          content: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          position: absolute;
          inset: 0;
          writing-mode: vertical-rl;
          text-orientation: upright;
          font-size: 14px;
          line-height: 1;
          letter-spacing: 2px;
          color: transparent;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(167, 243, 208, 0.9) 8%,
            rgba(34, 211, 238, 0.95) 18%,
            rgba(34, 197, 94, 0.78) 38%,
            rgba(22, 163, 74, 0.52) 62%,
            rgba(6, 95, 70, 0.22) 84%,
            transparent 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.24));
        }

        .matrix-column:nth-child(odd)::before {
          content: "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヴァィゥェォャュョッ123456789";
        }

        .matrix-column:nth-child(3n)::before {
          content: "アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヲン0987654321";
        }

        .matrix-column:nth-child(4n)::before {
          content: "SYSTEMDATAINTERFACEWARPASSTUDIO010101011010";
        }

        @keyframes matrix-fall {
          0% {
            transform: translateY(-10%);
            opacity: 0;
          }
          10% {
            opacity: 0.95;
          }
          100% {
            transform: translateY(180%);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .matrix-pattern {
            width: 520px;
          }

          .matrix-column {
            width: 18px;
          }

          .matrix-column::before {
            font-size: 11px;
            letter-spacing: 1px;
          }
        }
      `}</style>
    </section>
  )
}
