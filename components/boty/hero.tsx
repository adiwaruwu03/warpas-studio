"use client"

import Image from "next/image"
import { useLanguage } from "@/components/boty/language-context"
import { orbitron, spaceGrotesk } from "@/lib/tech-fonts"

export function Hero() {
  const { language } = useLanguage()
  const isEnglish = language === "en"
  
  return (
    <section className="relative w-full h-[100dvh] flex flex-col overflow-hidden bg-[#050a15] pt-[80px]">
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
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#050a15] to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto px-4 flex flex-col items-center justify-end pb-8 lg:pb-12">
        
        {/* Photo Container (Takes remaining space) */}
        <div className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px] flex-1 min-h-0"
             style={{
               animation: 'float 6s ease-in-out infinite, fade-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
               filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.08))',
               opacity: 0
             }}>
          {/* Mask container to fade out the bottom of the photo */}
          <div className="relative w-full h-full" 
               style={{ 
                 maskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)'
               }}>
            <Image
              src="/fotohero.png"
              alt="Adi Putra"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>


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
