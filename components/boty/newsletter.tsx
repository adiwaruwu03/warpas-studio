"use client"

import React, { useState } from "react"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"
import { playfair, spaceGrotesk } from "@/lib/tech-fonts"

export function Newsletter() {
  const { language } = useLanguage()
  const matrixChars = (
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
    "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ"
  ).split("")
  const matrixItems = Array.from({ length: 1400 }, (_, index) => matrixChars[index % matrixChars.length])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    detail: ""
  })
  const [isHuman, setIsHuman] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const sendToWhatsApp = () => {
    const isEnglish = language === "en"

    if (!isHuman) {
      alert(isEnglish ? "Please check the box first." : "Centang dulu ya.")
      return
    }

    if (!formData.name.trim()) {
      alert(isEnglish ? "Please enter your name first." : "Isi nama dulu ya.")
      return
    }

    const message =
      `*${isEnglish ? "HELLO" : "HALO"}*%0A%0A` +
      `📌 ${isEnglish ? "Name" : "Nama"}: ${encodeURIComponent(formData.name)}%0A` +
      `📧 Email: ${encodeURIComponent(formData.email || "-")}%0A` +
      `📅 ${isEnglish ? "Date" : "Tanggal"}: ${encodeURIComponent(formData.date || "-")}%0A` +
      `📝 ${isEnglish ? "Message" : "Pesan"}:%0A${encodeURIComponent(formData.detail || "-")}`

    const waUrl = `https://wa.me/6283836098858?text=${message}`
    window.open(waUrl, "_blank")
  }

  return (
    <section className="relative overflow-hidden py-20 bg-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25">
        <div className="jp-matrix" aria-hidden="true">
          {matrixItems.map((char, index) => (
            <span key={`${char}-${index}`}>{char}</span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(13,13,15,0.28),transparent_30%),linear-gradient(to_bottom,rgba(13,13,15,0.66),rgba(13,13,15,0.72))]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* items-start agar konten kiri sejajar dengan bagian atas card */}

          {/* LEFT SIDE */}
          <div className="relative z-10 pt-4">
            {/* pt-4 untuk menyamakan posisi dengan header card yang punya py-4 */}
            <h2 className={`text-4xl md:text-6xl text-foreground mb-6 leading-tight ${playfair.className}`}>
              {language === "en" ? "Let's Connect." : "Mari Terhubung."}
            </h2>

            <p className={`text-foreground/80 mb-6 text-lg ${spaceGrotesk.className}`}>
              {language === "en"
                ? "I am open to job opportunities, collaborations, freelance work, or discussions about web development. Feel free to reach out if you'd like to talk or work together."
                : "Saya terbuka untuk peluang kerja, kolaborasi, freelance, maupun diskusi mengenai pengembangan website. Jangan ragu untuk menghubungi saya jika ingin berdiskusi atau bekerja sama."}
            </p>

            <p className={`text-sm text-muted-foreground ${spaceGrotesk.className}`}>
              {language === "en"
                ? "Fast response • I am not a robot"
                : "Respon cepat • Saya bukan robot"}
            </p>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="w-full flex justify-center">
            <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-primary/15 bg-card shadow-xl">

              {/* HEADER */}
              <div className="bg-primary px-5 py-4">
                <h3 className={`text-lg font-bold text-primary-foreground ${playfair.className}`}>
                  {language === "en" ? "Send Message" : "Kirim Pesan"}
                </h3>
              </div>

              {/* FORM */}
              <div className="p-5 space-y-4">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={language === "en" ? "Name" : "Nama"}
                  className={`w-full rounded-lg border border-primary/14 bg-card px-4 py-2.5 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/40 ${spaceGrotesk.className}`}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full rounded-lg border border-primary/14 bg-card px-4 py-2.5 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/40 ${spaceGrotesk.className}`}
                />

                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder={language === "en" ? "Event date" : "Tanggal acara"}
                  className={`w-full rounded-lg border border-primary/14 bg-card px-4 py-2.5 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/40 ${spaceGrotesk.className}`}
                />

                <textarea
                  name="detail"
                  value={formData.detail}
                  onChange={handleChange}
                  rows={3}
                  placeholder={language === "en" ? "Message details..." : "Detail pesan..."}
                  className={`w-full resize-none rounded-lg border border-primary/14 bg-card px-4 py-2.5 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/40 ${spaceGrotesk.className}`}
                />

                <label className={`flex items-center gap-2 text-sm text-foreground/80 ${spaceGrotesk.className}`}>
                  <input
                    type="checkbox"
                    checked={isHuman}
                    onChange={(e) => setIsHuman(e.target.checked)}
                    className="rounded border-primary/20"
                  />
                  {language === "en" ? "I am not a robot" : "Saya bukan robot"}
                </label>

                <button
                  onClick={sendToWhatsApp}
                  className={`w-full bg-primary text-primary-foreground py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition font-medium ${spaceGrotesk.className}`}
                >
                  {language === "en" ? "Send to WhatsApp" : "Kirim ke WhatsApp"}
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className={`text-xs text-center text-muted-foreground ${spaceGrotesk.className}`}>
                  {language === "en" ? "I will try to reply as soon as possible." : "Saya akan berusaha membalas pesan secepat mungkin."}
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .jp-matrix {
          width: 100%;
          min-width: 1600px;
          min-height: 140%;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(34px, 1fr));
          grid-auto-rows: 34px;
          align-content: start;
          justify-content: center;
          padding: 18px;
          font-size: 24px;
          color: rgba(201,169,110, 0.22);
          font-family: "Courier New", Courier, monospace;
          transform: scale(1.08) translateY(-8%);
        }

        .jp-matrix > span {
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          user-select: none;
          text-shadow: 0 0 6px rgba(201,169,110, 0.22);
          transition: color 0.5s ease, text-shadow 0.5s ease;
        }

        .jp-matrix > span:nth-child(11n) {
          animation: smooth-pulse 3.1s ease-in-out infinite 0.3s;
        }

        .jp-matrix > span:nth-child(17n + 5) {
          animation: smooth-pulse 4.2s ease-in-out infinite 0.9s;
        }

        .jp-matrix > span:nth-child(23n + 2) {
          animation: smooth-pulse 5s ease-in-out infinite 0.4s;
        }

        .jp-matrix > span:nth-child(29n + 13) {
          animation: smooth-pulse 3.8s ease-in-out infinite 1.2s;
        }

        .jp-matrix > span:nth-child(31n + 1) {
          color: rgba(201, 169, 110, 0.5);
          animation: smooth-pulse 4.8s ease-in-out infinite 0.7s;
        }

        @keyframes smooth-pulse {
          0%,
          100% {
            color: rgba(201,169,110, 0.2);
            text-shadow: 0 0 6px rgba(201,169,110, 0.16);
          }
          35% {
            color: rgba(201, 169, 110, 0.92);
            text-shadow:
              0 0 10px rgba(201, 169, 110, 0.85),
              0 0 18px rgba(201, 169, 110, 0.5);
          }
          62% {
            color: rgba(235, 231, 223, 0.8);
            text-shadow:
              0 0 10px rgba(235, 231, 223, 0.5),
              0 0 22px rgba(201,169,110, 0.4);
          }
        }

        @media (max-width: 768px) {
          .jp-matrix {
            min-width: 1200px;
            grid-template-columns: repeat(auto-fill, minmax(26px, 1fr));
            grid-auto-rows: 26px;
            font-size: 18px;
            padding: 12px;
          }
        }
      `}</style>
    </section>
  )
}
