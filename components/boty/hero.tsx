"use client"

import Image from "next/image"
import { useLanguage } from "@/components/boty/language-context"
import { orbitron, spaceGrotesk } from "@/lib/tech-fonts"

// Ganti path ke versi foto berjas begitu filenya ada di /public/images/profile
const heroPhotos = [
  "/images/profile/22.png",
  "/images/profile/IMG_0937-jukebox-bg-removed (1).png",
  "/images/profile/33.png",
]

export function Hero() {
  const { language } = useLanguage()
  const isEnglish = language === "en"
  const ringText = isEnglish
    ? ["Need a website for your business? Contact me", "Need a system for your business? Contact me"]
    : ["Butuh web untuk bisnis Anda? Hubungi saya", "Butuh sistem untuk usaha Anda? Hubungi saya"]
  
  return (
    // on-media: the hero stays dark in both themes, including the bottom fade
    <section className="on-media relative w-full h-[100dvh] flex flex-col overflow-hidden bg-background pt-[80px]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
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
        
        {/* Overlay - Luxury Dark */}
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.85)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto px-4 flex flex-col items-center justify-end pb-8 lg:pb-12">
        
        {/* Photo Container (Takes remaining space) */}
        <div className="relative z-10 w-full max-w-[420px] sm:max-w-[620px] md:max-w-[860px] lg:max-w-[1100px] flex-1 min-h-0"
             style={{
               animation: 'float 6s ease-in-out infinite, fade-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
               filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.08))',
               opacity: 0
             }}>
          {/* Rotating text rings, laid out exactly like the photo columns but outside the mask (never clipped) and behind the photos */}
          <div className="pointer-events-none absolute inset-0 z-0 flex items-end justify-center">
            {heroPhotos.map((src, i) => (
              <div key={src} className={`relative h-full flex-1 ${i === 1 ? "" : "-mx-[6%] scale-90 origin-bottom"}`}>
                {i !== 1 && (
                  <svg
                    viewBox="0 0 200 200"
                    className={`absolute bottom-[10%] left-1/2 aspect-square w-[78%] -translate-x-1/2 overflow-visible scale-[1.26] animate-[spin_28s_linear_infinite] ${i === 2 ? "[animation-direction:reverse]" : ""}`}
                  >
                    <title>{ringText[i === 0 ? 0 : 1]}</title>
                    <path id={`hero-ring-${i}`} d="M100,100 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0" fill="none" />
                    <text className={`fill-brand text-[10.5px] font-semibold uppercase tracking-[0.18em] ${spaceGrotesk.className}`}>
                      <textPath href={`#hero-ring-${i}`} textLength="560" lengthAdjust="spacing">
                        {`${ringText[i === 0 ? 0 : 1]} • ${ringText[i === 0 ? 0 : 1]} • `}
                      </textPath>
                    </text>
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Mask container to fade out the bottom of the photo */}
          <div className="relative z-10 w-full h-full flex items-end justify-center"
               style={{
                 maskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)'
               }}>
            {heroPhotos.map((src, i) => (
              <div key={src} className={`relative h-full flex-1 ${i === 1 ? "z-10" : "-mx-[6%] scale-90 origin-bottom opacity-90"}`}>
                {/* Side photos: brand circle behind (Pandan light, orange dark). Middle photo: brand rim light instead */}
                {i !== 1 && (
                  <div aria-hidden="true" className="absolute bottom-[10%] left-1/2 aspect-square w-[78%] -translate-x-1/2 rounded-full bg-brand" />
                )}
                <Image
                  src={src}
                  alt="Adi Putra Waruwu"
                  fill
                  sizes="(max-width: 768px) 33vw, 380px"
                  className={`object-contain object-bottom ${
                    i === 1 ? "[filter:drop-shadow(0_0_1.5px_var(--brand))_drop-shadow(0_0_16px_rgb(var(--primary-rgb)/0.55))]" : ""
                  }`}
                  priority
                />
              </div>
            ))}
          </div>

        </div>

        {/* SEO Hidden Text */}
        <div className="sr-only">
          <h2>Adi Putra Waruwu - Web Developer & Frontend Developer Indonesia</h2>
          <p>
            Adi Putra Waruwu adalah Web Developer Indonesia yang membangun website modern, cepat, responsif, SEO Friendly, menggunakan Next.js, React, Laravel, TypeScript, dan teknologi web modern lainnya.
          </p>
        </div>

        {/* PORTFOLIO Text */}
        <div className="relative z-20 w-full flex justify-center items-center mt-[-40px] sm:mt-[-60px] md:mt-[-80px] lg:mt-[-100px]"
             style={{ animation: 'fade-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards', animationDelay: '0.4s', opacity: 0 }}>
          <h1 className={`text-[9.5vw] sm:text-[11vw] md:text-[13vw] lg:text-[12vw] font-black text-white tracking-normal uppercase select-none whitespace-nowrap leading-[0.75] ${orbitron.className}`}
              style={{
                textShadow: '0 0 50px rgba(255, 255, 255, 0.1)'
              }}>
            PORTOFOLIO
          </h1>
        </div>


      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-left {
          0% { opacity: 0; transform: translate(-40px, -50%); }
          100% { opacity: 1; transform: translate(0, -50%); }
        }
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translate(40px, -50%); }
          100% { opacity: 1; transform: translate(0, -50%); }
        }
      `}</style>
    </section>
  )
}
