"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Zap, Palette, Code, Users } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"
import { playfair, spaceGrotesk } from "@/lib/tech-fonts"

export function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const bentoRef = useRef<HTMLDivElement>(null)
  const videoSectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const isEnglish = language === "en"

  const features = [
    {
      icon: Zap,
      title: isEnglish ? "Performance" : "Performa",
      description: isEnglish
        ? "Optimizing speed and application performance"
        : "Mengoptimalkan kecepatan dan performa aplikasi"
    },
    {
      icon: Palette,
      title: isEnglish ? "UI Development" : "UI Development",
      description: isEnglish
        ? "Building modern and interactive interfaces"
        : "Membangun antarmuka yang modern dan interaktif"
    },
    {
      icon: Code,
      title: isEnglish ? "Clean Code" : "Kode Rapi",
      description: isEnglish
        ? "Writing readable and scalable code"
        : "Menulis kode yang rapi, mudah dibaca, dan scalable"
    },
    {
      icon: Users,
      title: "Problem Solving",
      description: isEnglish
        ? "Solving technical challenges efficiently"
        : "Menemukan solusi efisien untuk tantangan teknis"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (bentoRef.current) {
      observer.observe(bentoRef.current)
    }

    if (videoSectionRef.current) {
      videoObserver.observe(videoSectionRef.current)
    }

    if (headerRef.current) {
      headerObserver.observe(headerRef.current)
    }

    return () => {
      if (bentoRef.current) {
        observer.unobserve(bentoRef.current)
      }
      if (videoSectionRef.current) {
        videoObserver.unobserve(videoSectionRef.current)
      }
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current)
      }
    }
  }, [])

  return (
    <section className="relative overflow-hidden py-24 bg-background" id="tentang">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Bento Grid */}
        <div
          ref={bentoRef}
          className="grid md:grid-cols-4 mb-20 md:grid-rows-[300px_300px] gap-6"
        >
          {/* Left Large Block - Video with Overlay Card */}
          <div
            className={`relative rounded-3xl overflow-hidden h-[500px] md:h-auto md:col-span-2 md:row-span-2 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            style={{ transitionDelay: '0ms' }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://www.pexels.com/download/video/38938701/" type="video/mp4" />
            </video>
            {/* Overlay Card */}
            <div className="absolute bottom-8 left-8 right-8 rounded-xl border border-primary/14 bg-card/92 p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className={`text-xl text-foreground mb-2 font-medium ${playfair.className}`}>
                    {isEnglish ? "Fast" : "Pembelajar"} <span>{isEnglish ? "Learner" : "Cepat"}</span>
                  </h3>
                  <p className={`text-sm text-muted-foreground leading-relaxed ${spaceGrotesk.className}`}>
                    {isEnglish
                      ? "I am always enthusiastic about learning new technologies and applying them in real projects."
                      : "Saya selalu antusias mempelajari teknologi baru dan menerapkannya dalam proyek nyata."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Right - 100% Natural */}
          <div
            className={`rounded-3xl p-6 md:p-8 flex flex-col justify-center md:col-span-2 relative overflow-hidden transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1773764262796-606a14e49314?q=80&w=875&auto=format&fit=crop"
              alt={isEnglish ? "Premium design showcase" : "Tampilan desain premium"}
              fill
              className="object-cover"
            />


            <div className="relative z-10">
              <h3 className={`text-3xl md:text-4xl text-foreground mb-2 ${playfair.className}`}>
                {isEnglish ? "My Expertise" : "Keahlian Saya"}
              </h3>
              <h3 className={`text-2xl md:text-3xl text-foreground/70 mb-4 ${playfair.className}`}>
                {isEnglish ? "Frontend Dev" : "Frontend Dev"}
              </h3>

              <div className={`space-y-2 ${spaceGrotesk.className}`}>
                <div className="flex items-center gap-2 text-foreground/90 text-sm">
                  <Palette className="w-4 h-4 flex-shrink-0" />
                  <span>{isEnglish ? "Modern & Elegant" : "Modern & Elegan"}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/90 text-sm">
                  <Zap className="w-4 h-4 flex-shrink-0" />
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/90 text-sm">
                  <Code className="w-4 h-4 flex-shrink-0" />
                  <span>{isEnglish ? "Modern Technology" : "Teknologi Terkini"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right - Eco-Friendly Packaging */}
          <div
            className={`rounded-3xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden md:col-span-2 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
            >
              <source src="https://www.pexels.com/download/video/33315117/" type="video/mp4" />
            </video>
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10 flex flex-col justify-center h-full text-left items-start">
              <div className="inline-flex items-center justify-center w-10 h-10 mb-3">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className={`text-base mb-1 text-black ${spaceGrotesk.className}`}>
                {isEnglish ? "Collaboration" : "Kolaborasi"}
              </h3>
              <h3 className={`text-2xl md:text-3xl mb-2 text-black ${playfair.className}`}>
                {isEnglish ? "Team Player" : "Terbuka"}
              </h3>
            </div>
          </div>
        </div>

        <div
          ref={videoSectionRef}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center my-0 py-20"
        >
          {/* Video */}
          <div
            className={`relative aspect-[4/5] rounded-3xl overflow-hidden boty-shadow transition-all duration-700 ease-out ${isVideoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://www.pexels.com/download/video/34771077/" type="video/mp4" />
            </video>
          </div>

          {/* Content */}
          <div
            ref={headerRef}
            className={`transition-all duration-700 ease-out ${isVideoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '100ms' }}
          >

            <h2 className={`text-4xl leading-tight text-foreground mb-6 text-balance md:text-7xl ${playfair.className} ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
              {isEnglish ? "My Journey." : "Perjalanan Saya."}
            </h2>
            <p className={`text-lg text-muted-foreground leading-relaxed mb-10 max-w-md ${spaceGrotesk.className} ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.6s', animationFillMode: 'forwards' } : {}}>
              {isEnglish
                ? "I am a student and Frontend Developer passionate about building modern web interfaces. Every project is an opportunity for me to learn, grow, and deliver the best results."
                : "Saya adalah seorang mahasiswa dan Frontend Developer yang bersemangat dalam membangun antarmuka web modern. Setiap proyek adalah kesempatan bagi saya untuk belajar dan berkembang memberikan hasil terbaik."}
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-md border border-primary/12 bg-card/90 p-5 boty-transition hover:scale-[1.02]"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-3 group-hover:bg-primary/20 boty-transition bg-primary/10">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className={`font-medium text-foreground mb-1 ${playfair.className}`}>{feature.title}</h3>
                  <p className={`text-sm text-muted-foreground ${spaceGrotesk.className}`}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
