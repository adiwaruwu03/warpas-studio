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
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <div className="max-w-4xl text-left">
          <h1 className={`hero-title-robotic mb-6 leading-[1.06] text-white sm:leading-[1.1] ${orbitron.className}`}>
            <span
              className="hero-line hero-line-1 block text-[1.9rem] font-medium sm:text-4xl md:text-5xl lg:text-[3.7rem] xl:text-[4.3rem]"
            >
              {copy.top}
            </span>
            <span
              className="hero-line hero-line-2 block text-[2.7rem] bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.2rem]"
            >
              {copy.middle}
            </span>
            <span
              className="hero-line hero-line-3 block text-[1.55rem] text-white/78 sm:text-3xl md:text-4xl lg:text-[3.1rem] xl:text-[3.6rem]"
            >
              {copy.bottom}
            </span>
          </h1>

          <p
            className={`max-w-2xl animate-blur-in text-base leading-8 text-white/82 opacity-0 md:text-lg ${spaceGrotesk.className}`}
            style={{
              animationDelay: "0.9s",
              animationFillMode: "forwards",
            }}
          >
            {copy.description}
          </p>

          <div
            className={`mt-8 animate-blur-in opacity-0 ${spaceGrotesk.className}`}
            style={{
              animationDelay: "1.1s",
              animationFillMode: "forwards",
            }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-100/78">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.85)]" />
              {isEnglish ? "Precise Design System" : "Sistem Desain Presisi"}
            </div>
          </div>
          </div>

          <div
            className="self-start animate-blur-in opacity-0"
            style={{
              animationDelay: "0.7s",
              animationFillMode: "forwards",
            }}
          >
            <div className="hero-orb-shell mx-auto flex w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/[0.008] bg-[linear-gradient(180deg,rgba(8,17,29,0.035),rgba(10,24,42,0.01))] px-8 py-10 shadow-[0_1px_2px_rgba(2,8,23,0.012)] backdrop-blur-[20px]">
              <div className="hero-loader-frame">
                <svg className="hero-ring-text" viewBox="0 0 320 320" aria-hidden="true">
                  <defs>
                    <path
                      id="hero-ring-path"
                      d="M 160,160 m -118,0 a 118,118 0 1,1 236,0 a 118,118 0 1,1 -236,0"
                    />
                  </defs>
                  <text>
                    <textPath href="#hero-ring-path" startOffset="0%" textLength="740">
                      TEKNOLOGI DIGITAL WARPAS STUDIO • TEKNOLOGI DIGITAL WARPAS STUDIO • TEKNOLOGI DIGITAL WARPAS STUDIO •
                    </textPath>
                  </text>
                </svg>
                <div className="hero-loader">
                  <svg width={100} height={100} viewBox="0 0 100 100" aria-hidden="true">
                    <defs>
                      <mask id="hero-clipping">
                        <polygon points="0,0 100,0 100,100 0,100" fill="black" />
                        <polygon points="25,25 75,25 50,75" fill="white" />
                        <polygon points="50,25 75,75 25,75" fill="white" />
                        <polygon points="35,35 65,35 50,65" fill="white" />
                        <polygon points="35,35 65,35 50,65" fill="white" />
                        <polygon points="35,35 65,35 50,65" fill="white" />
                        <polygon points="35,35 65,35 50,65" fill="white" />
                      </mask>
                    </defs>
                  </svg>
                  <div className="hero-loader-box" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-title-robotic {
          text-shadow:
            0 0 8px rgba(34, 211, 238, 0.1),
            0 0 18px rgba(59, 130, 246, 0.08);
        }

        .hero-orb-shell {
          position: relative;
          min-height: 360px;
          isolation: isolate;
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.003) inset,
            0 1px 4px rgba(8, 15, 30, 0.012);
        }

        .hero-orb-shell::before {
          content: "";
          position: absolute;
          inset: 14px;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.003);
          background:
            radial-gradient(circle at top, rgba(255, 255, 255, 0.005), transparent 34%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.002), transparent 65%);
          pointer-events: none;
        }

        .hero-loader-frame {
          position: relative;
          display: grid;
          place-items: center;
          width: min(100%, 360px);
          aspect-ratio: 1;
          border-radius: 50%;
          contain: layout paint;
          background:
            radial-gradient(circle at center, rgba(56, 189, 248, 0.16), transparent 45%),
            radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.05), transparent 20%);
        }

        .hero-ring-text {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          pointer-events: none;
          transform-origin: 50% 50%;
          opacity: 0.9;
        }

        .hero-ring-text text {
          fill: rgba(207, 250, 254, 0.72);
          font-size: 12px;
          letter-spacing: 0.42em;
          text-transform: uppercase;
        }

        .hero-loader-frame::before {
          content: "";
          position: absolute;
          inset: 12%;
          border-radius: 50%;
          border: 1px solid rgba(103, 232, 249, 0.12);
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.03) inset,
            0 0 30px rgba(34, 211, 238, 0.06);
        }

        .hero-loader {
          --color-one: #fb923c;
          --color-two: #dc2626;
          --color-three: rgba(251, 146, 60, 0.42);
          --color-four: rgba(220, 38, 38, 0.38);
          --color-five: rgba(249, 115, 22, 0.2);
          --time-animation: 2.8s;
          --size: 2.25;
          position: relative;
          border-radius: 50%;
          transform: translateZ(0) scale(var(--size));
          transform-origin: 50% 50%;
          will-change: transform;
          backface-visibility: hidden;
          box-shadow:
            0 0 18px 0 var(--color-three),
            0 12px 28px 0 var(--color-four);
        }

        .hero-loader::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border-top: solid 1px var(--color-one);
          border-bottom: solid 1px var(--color-two);
          background: linear-gradient(180deg, var(--color-five), var(--color-four));
          box-shadow:
            inset 0 10px 10px 0 var(--color-three),
            inset 0 -10px 10px 0 var(--color-four);
        }

        .hero-loader-box {
          width: 100px;
          height: 100px;
          background: linear-gradient(180deg, var(--color-one) 30%, var(--color-two) 70%);
          mask: url(#hero-clipping);
          -webkit-mask: url(#hero-clipping);
        }

        .hero-loader svg {
          position: absolute;
          overflow: visible;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .hero-loader svg #hero-clipping {
          filter: contrast(12);
        }

        .hero-loader svg #hero-clipping polygon {
          filter: blur(7px);
        }

        .hero-loader svg #hero-clipping polygon:nth-child(1) {
          transform-origin: 75% 25%;
          transform: rotate(90deg);
        }

        .hero-loader svg #hero-clipping polygon:nth-child(2) {
          transform-origin: 50% 50%;
          animation: rotation var(--time-animation) linear infinite reverse;
        }

        .hero-loader svg #hero-clipping polygon:nth-child(3) {
          transform-origin: 50% 60%;
          animation: rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -3);
        }

        .hero-loader svg #hero-clipping polygon:nth-child(4) {
          transform-origin: 40% 40%;
          animation: rotation var(--time-animation) linear infinite reverse;
        }

        .hero-loader svg #hero-clipping polygon:nth-child(5) {
          transform-origin: 40% 40%;
          animation: rotation var(--time-animation) linear infinite reverse;
          animation-delay: calc(var(--time-animation) / -2);
        }

        .hero-loader svg #hero-clipping polygon:nth-child(6) {
          transform-origin: 60% 40%;
          animation: rotation var(--time-animation) linear infinite;
        }

        .hero-loader svg #hero-clipping polygon:nth-child(7) {
          transform-origin: 60% 40%;
          animation: rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -1.5);
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
            text-shadow: 0 0 6px rgba(34, 211, 238, 0.08);
          }
          48% {
            transform: translate3d(0.5px, -1px, 0);
          }
          50% {
            transform: translate3d(-1.5px, 0, 0);
            text-shadow:
              1px 0 rgba(34, 211, 238, 0.5),
              -1px 0 rgba(255, 255, 255, 0.35),
              0 0 10px rgba(34, 211, 238, 0.14);
          }
          52% {
            transform: translate3d(1px, 1px, 0);
          }
        }

        @keyframes line-shift-2 {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            filter: none;
          }
          38% {
            transform: translate3d(0, -1px, 0);
          }
          40% {
            transform: translate3d(2px, 0, 0);
          }
          42% {
            transform: translate3d(-1px, 1px, 0);
          }
        }

        @keyframes line-shift-3 {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            text-shadow: 0 0 6px rgba(255, 255, 255, 0.05);
          }
          58% {
            transform: translate3d(-0.5px, 1px, 0);
          }
          60% {
            transform: translate3d(1.5px, 0, 0);
            text-shadow:
              1px 0 rgba(34, 211, 238, 0.38),
              -1px 0 rgba(255, 255, 255, 0.22),
              0 0 10px rgba(34, 211, 238, 0.1);
          }
          62% {
            transform: translate3d(0, -1px, 0);
          }
        }

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 1023px) {
          .hero-orb-shell {
            min-height: 280px;
          }

          .hero-line-1,
          .hero-line-2,
          .hero-line-3 {
            animation: none;
          }

          .hero-loader {
            --size: 1.7;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-line-1,
          .hero-line-2,
          .hero-line-3,
          .hero-loader,
          .hero-loader svg #hero-clipping polygon:nth-child(2),
          .hero-loader svg #hero-clipping polygon:nth-child(3),
          .hero-loader svg #hero-clipping polygon:nth-child(4),
          .hero-loader svg #hero-clipping polygon:nth-child(5),
          .hero-loader svg #hero-clipping polygon:nth-child(6),
          .hero-loader svg #hero-clipping polygon:nth-child(7) {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
