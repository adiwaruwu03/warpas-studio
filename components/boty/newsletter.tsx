"use client"

import React, { useState } from "react"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"
import { orbitron, spaceGrotesk } from "@/lib/tech-fonts"

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
      `*${isEnglish ? "EVENT CONSULTATION" : "KONSULTASI ACARA"}*%0A%0A` +
      `📌 ${isEnglish ? "Name" : "Nama"}: ${encodeURIComponent(formData.name)}%0A` +
      `📧 Email: ${encodeURIComponent(formData.email || "-")}%0A` +
      `📅 ${isEnglish ? "Date" : "Tanggal"}: ${encodeURIComponent(formData.date || "-")}%0A` +
      `📝 ${isEnglish ? "Details" : "Detail"}:%0A${encodeURIComponent(formData.detail || "-")}`

    const waUrl = `https://wa.me/6283836098858?text=${message}`
    window.open(waUrl, "_blank")
  }

  return (
    <section className="relative overflow-hidden py-20 bg-[#06111f]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-36">
        <div className="jp-matrix" aria-hidden="true">
          {matrixItems.map((char, index) => (
            <span key={`${char}-${index}`}>{char}</span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(6,17,31,0.28),transparent_30%),linear-gradient(to_bottom,rgba(6,17,31,0.66),rgba(6,17,31,0.72))]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* items-start agar konten kiri sejajar dengan bagian atas card */}

          {/* LEFT SIDE */}
          <div className="relative z-10 pt-4">
            {/* pt-4 untuk menyamakan posisi dengan header card yang punya py-4 */}
            <h2 className={`text-4xl md:text-6xl text-white mb-6 leading-tight ${orbitron.className}`}>
              {language === "en" ? "Bring Your Digital Product Ideas to Life" : "Wujudkan Produk Digital Impian Anda"}
            </h2>

            <p className={`text-cyan-100/72 mb-6 text-lg ${spaceGrotesk.className}`}>
              {language === "en"
                ? "Discuss your needs with our professional team. We help from concept to execution with the best possible results."
                : "Konsultasikan kebutuhan Anda bersama tim profesional kami. Kami bantu dari konsep hingga eksekusi dengan hasil terbaik."}
            </p>

            <p className={`text-sm text-cyan-100/52 ${spaceGrotesk.className}`}>
              {language === "en"
                ? "Fast response • Free initial consultation • Complete presentation • I am not a robot"
                : "Respon cepat • Gratis konsultasi awal • Tampilan komplet • Saya bukan robot"}
            </p>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="w-full flex justify-center">
            <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-cyan-300/15 bg-[#0b1628] shadow-xl">

              {/* HEADER */}
              <div className="bg-cyan-300 px-5 py-4">
                <h3 className={`text-lg font-bold text-slate-950 ${orbitron.className}`}>
                  {language === "en" ? "Free Consultation" : "Konsultasi Gratis"}
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
                  className={`w-full rounded-lg border border-cyan-300/14 bg-[#08111d] px-4 py-2.5 text-cyan-50 outline-none placeholder:text-cyan-100/28 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300 ${spaceGrotesk.className}`}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full rounded-lg border border-cyan-300/14 bg-[#08111d] px-4 py-2.5 text-cyan-50 outline-none placeholder:text-cyan-100/28 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300 ${spaceGrotesk.className}`}
                />

                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder={language === "en" ? "Event date" : "Tanggal acara"}
                  className={`w-full rounded-lg border border-cyan-300/14 bg-[#08111d] px-4 py-2.5 text-cyan-50 outline-none placeholder:text-cyan-100/28 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300 ${spaceGrotesk.className}`}
                />

                <textarea
                  name="detail"
                  value={formData.detail}
                  onChange={handleChange}
                  rows={3}
                  placeholder={language === "en" ? "Project details..." : "Detail kebutuhan..."}
                  className={`w-full resize-none rounded-lg border border-cyan-300/14 bg-[#08111d] px-4 py-2.5 text-cyan-50 outline-none placeholder:text-cyan-100/28 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300 ${spaceGrotesk.className}`}
                />

                <label className={`flex items-center gap-2 text-sm text-cyan-100/72 ${spaceGrotesk.className}`}>
                  <input
                    type="checkbox"
                    checked={isHuman}
                    onChange={(e) => setIsHuman(e.target.checked)}
                    className="rounded border-cyan-300/20"
                  />
                  {language === "en" ? "I am not a robot" : "Saya bukan robot"}
                </label>

                <button
                  onClick={sendToWhatsApp}
                  className={`w-full bg-cyan-300 text-slate-950 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-200 transition font-medium ${spaceGrotesk.className}`}
                >
                  {language === "en" ? "Send to WhatsApp" : "Kirim ke WhatsApp"}
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className={`text-xs text-center text-cyan-100/42 ${spaceGrotesk.className}`}>
                  {language === "en" ? "Your data will be sent directly to our team's WhatsApp" : "Data dikirim langsung ke WhatsApp tim kami"}
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
          color: rgba(34, 211, 238, 0.22);
          font-family: "Courier New", Courier, monospace;
          transform: scale(1.08) translateY(-8%);
        }

        .jp-matrix > span {
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          user-select: none;
          text-shadow: 0 0 6px rgba(34, 211, 238, 0.22);
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
          color: rgba(125, 211, 252, 0.5);
          animation: smooth-pulse 4.8s ease-in-out infinite 0.7s;
        }

        @keyframes smooth-pulse {
          0%,
          100% {
            color: rgba(34, 211, 238, 0.2);
            text-shadow: 0 0 6px rgba(34, 211, 238, 0.16);
          }
          35% {
            color: rgba(125, 211, 252, 0.92);
            text-shadow:
              0 0 10px rgba(125, 211, 252, 0.85),
              0 0 18px rgba(125, 211, 252, 0.5);
          }
          62% {
            color: rgba(255, 255, 255, 0.95);
            text-shadow:
              0 0 12px rgba(255, 255, 255, 0.9),
              0 0 22px rgba(34, 211, 238, 0.4);
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
