"use client"

import { useLanguage } from "@/components/boty/language-context"
import { orbitron, spaceGrotesk } from "@/lib/tech-fonts"

export function Hero() {
  const { language } = useLanguage()
  const isEnglish = language === "en"
  const copy = {
    top: isEnglish ? "Build Precise" : "Bangun Presensi",
    middle: isEnglish ? "Digital Presence" : "Digital Presisi",
    bottom: isEnglish ? "for Modern Brands" : "untuk Brand Modern",
    description:
      isEnglish
        ? "We design structured websites and digital products with a sharper visual system, stronger credibility, and a more modern brand presence."
        : "Kami merancang website dan produk digital dengan sistem visual yang lebih tajam, kredibel, dan terasa modern untuk kebutuhan brand Anda.",
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0b1220]">

      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/hero3.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#07101f]/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.28),_transparent_32%),radial-gradient(circle_at_left_center,_rgba(34,211,238,0.16),_transparent_30%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

        {/* Gradient Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#09111d] via-[#09111d]/55 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className={`hero-title-float hero-title-robotic mb-6 text-3xl leading-[1.12] text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.8rem] ${orbitron.className}`}>
            <span
              className="hero-line hero-line-1 block font-medium"
            >
              {copy.top}
            </span>
            <span
              className="hero-line hero-line-2 block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent"
            >
              {copy.middle}
            </span>
            <span
              className="hero-line hero-line-3 block text-white/78"
            >
              {copy.bottom}
            </span>
          </h1>

          <p
            className={`mx-auto max-w-2xl animate-blur-in text-base leading-8 text-white/82 opacity-0 md:text-lg ${spaceGrotesk.className}`}
            style={{
              animationDelay: "0.9s",
              animationFillMode: "forwards",
            }}
          >
            {copy.description}
          </p>
        </div>
      </div>

      <style jsx>{`
        .hero-title-float {
          animation: hero-drift 6s ease-in-out infinite;
          will-change: transform;
        }

        .hero-title-robotic {
          text-shadow:
            0 0 10px rgba(34, 211, 238, 0.16),
            0 0 24px rgba(59, 130, 246, 0.14);
        }

        .hero-line {
          position: relative;
          will-change: transform, text-shadow, filter;
        }

        .hero-line-1 {
          animation: line-shift-1 4.8s ease-in-out infinite;
        }

        .hero-line-2 {
          animation: line-shift-2 4.2s ease-in-out infinite;
        }

        .hero-line-3 {
          animation: line-shift-3 5s ease-in-out infinite;
        }

        @keyframes hero-drift {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          25% {
            transform: translate3d(0, -4px, 0);
          }
          50% {
            transform: translate3d(0, 2px, 0);
          }
          75% {
            transform: translate3d(0, -3px, 0);
          }
        }

        @keyframes line-shift-1 {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            text-shadow: 0 0 10px rgba(34, 211, 238, 0.14);
          }
          48% {
            transform: translate3d(0.5px, -1px, 0);
          }
          50% {
            transform: translate3d(-1.5px, 0, 0);
            text-shadow:
              1px 0 rgba(34, 211, 238, 0.5),
              -1px 0 rgba(255, 255, 255, 0.35),
              0 0 18px rgba(34, 211, 238, 0.22);
          }
          52% {
            transform: translate3d(1px, 1px, 0);
          }
        }

        @keyframes line-shift-2 {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            filter: brightness(1);
          }
          38% {
            transform: translate3d(0, -1px, 0);
          }
          40% {
            transform: translate3d(2px, 0, 0);
            filter: brightness(1.18);
          }
          42% {
            transform: translate3d(-1px, 1px, 0);
          }
        }

        @keyframes line-shift-3 {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.08);
          }
          58% {
            transform: translate3d(-0.5px, 1px, 0);
          }
          60% {
            transform: translate3d(1.5px, 0, 0);
            text-shadow:
              1px 0 rgba(34, 211, 238, 0.38),
              -1px 0 rgba(255, 255, 255, 0.22),
              0 0 16px rgba(34, 211, 238, 0.16);
          }
          62% {
            transform: translate3d(0, -1px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-title-float {
            animation: none;
          }

          .hero-line-1,
          .hero-line-2,
          .hero-line-3 {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
