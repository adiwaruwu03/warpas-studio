"use client"

import React, { useState } from "react"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/boty/language-context"

export function Newsletter() {
  const { language } = useLanguage()
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* items-start agar konten kiri sejajar dengan bagian atas card */}

          {/* LEFT SIDE */}
          <div className="pt-4">
            {/* pt-4 untuk menyamakan posisi dengan header card yang punya py-4 */}
            <h2 className="font-serif text-4xl md:text-6xl text-gray-900 mb-6 leading-tight">
              {language === "en" ? "Bring Your Digital Product Ideas to Life" : "Wujudkan Produk Digital Impian Anda"}
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              {language === "en"
                ? "Discuss your needs with our professional team. We help from concept to execution with the best possible results."
                : "Konsultasikan kebutuhan Anda bersama tim profesional kami. Kami bantu dari konsep hingga eksekusi dengan hasil terbaik."}
            </p>

            <p className="text-sm text-gray-600">
              {language === "en"
                ? "Fast response • Free initial consultation • Complete presentation • I am not a robot"
                : "Respon cepat • Gratis konsultasi awal • Tampilan komplet • Saya bukan robot"}
            </p>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">

              {/* HEADER */}
              <div className="bg-primary px-5 py-4">
                <h3 className="text-lg font-bold text-white">
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
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-900 placeholder:text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-900 placeholder:text-gray-400"
                />

                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder={language === "en" ? "Event date" : "Tanggal acara"}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-900 placeholder:text-gray-400"
                />

                <textarea
                  name="detail"
                  value={formData.detail}
                  onChange={handleChange}
                  rows={3}
                  placeholder={language === "en" ? "Project details..." : "Detail kebutuhan..."}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none text-gray-900 placeholder:text-gray-400"
                />

                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={isHuman}
                    onChange={(e) => setIsHuman(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  {language === "en" ? "I am not a robot" : "Saya bukan robot"}
                </label>

                <button
                  onClick={sendToWhatsApp}
                  className="w-full bg-[#25D366] text-white py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-[#128C7E] transition font-medium"
                >
                  {language === "en" ? "Send to WhatsApp" : "Kirim ke WhatsApp"}
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-xs text-center text-gray-500">
                  {language === "en" ? "Your data will be sent directly to our team's WhatsApp" : "Data dikirim langsung ke WhatsApp tim kami"}
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
