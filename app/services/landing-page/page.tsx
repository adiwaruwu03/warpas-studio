import { ArrowRight, Cpu, Layers3 } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { orbitron, spaceGrotesk } from "@/lib/tech-fonts"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <Header />

      <div className="relative overflow-hidden pt-28 pb-20">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_30%),radial-gradient(circle_at_left_center,_rgba(59,130,246,0.14),_transparent_28%)]" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className={`mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-100 ${spaceGrotesk.className}`}>
              <Cpu className="h-4 w-4 text-cyan-300" />
              Conversion Landing System
            </div>
            <h1 className={`mb-5 text-4xl leading-tight text-white md:text-6xl ${orbitron.className}`}>
              Jasa Landing Page dengan Tampilan Lebih Tajam dan Fokus Konversi
            </h1>
            <p className={`max-w-2xl text-lg leading-8 text-cyan-100/72 ${spaceGrotesk.className}`}>
              Landing page dirancang untuk menangkap perhatian lebih cepat, mengarahkan pengunjung ke CTA yang jelas, dan membantu bisnis Anda tampil lebih siap secara digital.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-cyan-300/16 bg-[#0b1628]/90 p-8 shadow-[0_24px_80px_rgba(2,12,27,0.42)] backdrop-blur-xl">
              <h2 className={`mb-5 text-2xl text-white ${orbitron.className}`}>Cocok Untuk</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {["Produk digital", "Promosi bisnis", "Iklan Facebook / Instagram"].map((item) => (
                  <div key={item} className={`rounded-2xl border border-white/8 bg-white/5 p-4 text-sm text-cyan-100/75 ${spaceGrotesk.className}`}>
                    {item}
                  </div>
                ))}
              </div>

              <h2 className={`mt-10 mb-5 text-2xl text-white ${orbitron.className}`}>Fitur</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {["Desain fokus konversi", "CTA jelas", "Mobile friendly", "Loading cepat"].map((item) => (
                  <div key={item} className={`rounded-2xl border border-white/8 bg-white/5 p-4 text-sm text-cyan-100/75 ${spaceGrotesk.className}`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] border border-cyan-300/16 bg-[#0a1324]/95 p-8 shadow-[0_24px_80px_rgba(2,12,27,0.42)]">
              <div className="mb-5 flex items-center justify-between">
                <h2 className={`text-2xl text-white ${orbitron.className}`}>Info Paket</h2>
                <Layers3 className="h-5 w-5 text-cyan-300" />
              </div>
              <p className={`mb-3 text-sm uppercase tracking-[0.24em] text-cyan-100/46 ${spaceGrotesk.className}`}>Starting from</p>
              <p className={`mb-6 text-5xl text-cyan-300 ${orbitron.className}`}>400K</p>
              <p className={`mb-8 text-sm leading-7 text-cyan-100/68 ${spaceGrotesk.className}`}>
                Cocok untuk bisnis yang butuh halaman penjualan yang lebih ringkas, jelas, dan siap dipakai untuk promosi digital.
              </p>
              <a
                href="https://wa.me/628XXXXXXXXXX"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3 text-slate-950 transition hover:bg-cyan-200 ${spaceGrotesk.className}`}
              >
                Konsultasi via WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
