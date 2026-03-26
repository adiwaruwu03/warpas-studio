"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#e3e1e2]">

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
        <div className="absolute inset-0 bg-black/30" />

        {/* Gradient Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#e3e1e2] via-[#e3e1e2]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center">

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.2] mb-6 text-white">

            <span className="block animate-blur-in opacity-0 font-light"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards", textShadow: "3px 3px 6px rgba(0,0,0,0.6)" }}>
              Jasa Website
            </span>

            <span className="block animate-blur-in opacity-0 font-light text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-1"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
              &
            </span>

            <span className="block animate-blur-in opacity-0 font-bold"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards", textShadow: "4px 4px 8px rgba(0,0,0,0.7)" }}>
              Produk Digital
            </span>

          </h1>

          {/* Description */}
          <p
            className="text-base md:text-lg leading-relaxed text-white/95 max-w-2xl mx-auto animate-blur-in opacity-0"
            style={{
              animationDelay: "0.8s",
              animationFillMode: "forwards",
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            Kami menciptakan website profesional dan undangan digital yang memukau untuk bisnis dan acara Anda.
          </p>

        </div>
      </div>

    </section>
  )
}