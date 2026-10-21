"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Instagram, Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"
import { playfair, spaceGrotesk } from "@/lib/tech-fonts"

export function Portfolio() {
  const { language } = useLanguage()
  const isEnglish = language === "en"
  const matrixRows = 5
  const matrixColumns = 24

  const stats = [
    { value: "2025", label: isEnglish ? "Founded" : "Tahun Mulai" },
    { value: "10+", label: isEnglish ? "Completed Projects" : "Proyek Selesai" },
    { value: "5+", label: isEnglish ? "Happy Clients" : "Klien Puas" },
    { value: "100%", label: isEnglish ? "Commitment to Satisfaction" : "Komitmen Kepuasan" },
  ]

  const images = [
    { src: "/images/profile/IMG_0937-jukebox-bg-removed (1).png", label: "Profile 1" },
    { src: "/images/profile/22.png", label: "Profile 5" },
    { src: "/images/profile/33.png", label: "Profile 6" },
  ]

  const socialLinks = [
    { icon: Instagram, link: "https://www.instagram.com/adi_waruwwu/?hl=id", label: "Instagram" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/adi-putra-waruwu-554391288/", label: "LinkedIn" },
    { icon: Github, link: "https://github.com/adiwaruwu03", label: "GitHub" },
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
    <section id="about" className="relative overflow-hidden bg-background min-h-screen flex items-center py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25">
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
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <p className={`text-sm font-semibold uppercase tracking-[0.4em] text-primary mb-4 ${spaceGrotesk.className}`}>
              {isEnglish ? "About Me" : "Tentang Saya"}
            </p>



            <div className={`mt-8 space-y-4 text-base leading-7 text-foreground/80 text-justify max-w-3xl ${spaceGrotesk.className}`}>
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

              <p>
                {isEnglish
                  ? "Outside of code, people simply call me Adi, both at work and on campus. I love playing futsal and meeting new people. For me, the field and the workplace teach the same thing: good results come from teamwork, communication, and the will to keep improving."
                  : "Di luar dunia koding, saya biasa dipanggil Adi, baik saat bekerja maupun saat kuliah. Saya hobi bermain futsal dan senang berteman dengan banyak orang. Bagi saya, lapangan dan dunia kerja mengajarkan hal yang sama: hasil terbaik lahir dari kerja sama tim, komunikasi yang baik, dan semangat untuk terus berkembang."}
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="relative w-full max-w-[420px] max-h-[500px] mx-auto mt-8 lg:mt-0">
            {/* Container */}
            <div className="relative aspect-[4/5] w-full overflow-visible flex items-end justify-center">
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
                    ? "translateX(25%) scale(0.8) rotateY(-15deg)"
                    : "translateX(40px) scale(0.85) rotateY(-20deg)"
                  zIndex = 20
                } else {
                  transform = isMobile
                    ? "translateX(-25%) scale(0.8) rotateY(15deg)"
                    : "translateX(-40px) scale(0.85) rotateY(20deg)"
                  zIndex = 10
                }

                return (
                  <div
                    key={img.src}
                    className={`absolute inset-0 transition-all duration-700 ease-out flex items-end justify-center ${offset !== 0 ? "blur-[2px]" : "blur-0"
                      }`}
                    style={{
                      transform,
                      zIndex,
                      opacity: offset === 0 ? 1 : 0.1,
                    }}
                  >
                    <div className="relative w-full h-full overflow-visible group">
                      {/* Glow effect floor for all images */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <Image
                        src={img.src}
                        alt={img.label}
                        fill
                        className="object-contain object-bottom transition-all duration-500 drop-shadow-[0_10px_30px_rgba(201,169,110,0.25)]"
                        sizes="(max-width: 768px) 70vw, 420px"
                        priority={offset === 0}
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-40 rounded-full border border-primary/20 bg-card/92 p-2 text-foreground hover:bg-secondary transition backdrop-blur-sm shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-40 rounded-full border border-primary/20 bg-card/92 p-2 text-foreground hover:bg-secondary transition backdrop-blur-sm shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                    ? "bg-primary w-6 shadow-lg shadow-primary/40"
                    : "bg-foreground/30 w-2 hover:bg-foreground/60"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Social Icons Row */}
            <div className="relative mt-12 flex items-center justify-center gap-4 lg:mt-0 lg:absolute lg:-bottom-12 lg:left-1/2 lg:-translate-x-1/2 z-40">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-primary/10 bg-card/80 text-muted-foreground backdrop-blur-md transition-all hover:border-primary/40 hover:text-primary hover:shadow-[0_0_20px_rgba(201,169,110,0.2)]"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="transition-transform group-hover:scale-110" />
                  <span className="absolute -top-10 scale-0 rounded bg-primary px-2 py-1 text-[10px] font-bold text-primary-foreground transition-all group-hover:scale-100">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-12 lg:mt-16 w-full mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.value} className="group">
                <div className={`text-3xl font-bold text-primary md:text-4xl transition-all group-hover:scale-105 inline-block ${playfair.className}`}>
                  {stat.value}
                </div>
                <div className={`mt-2 text-xs font-medium tracking-wide text-muted-foreground md:text-sm ${spaceGrotesk.className}`}>
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
            rgba(235, 231, 223, 0.9) 0%,
            rgba(201, 169, 110, 0.85) 18%,
            rgba(201, 169, 110, 0.5) 45%,
            rgba(201, 169, 110, 0.2) 75%,
            transparent 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          filter: drop-shadow(0 0 6px rgba(201,169,110, 0.15));
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
