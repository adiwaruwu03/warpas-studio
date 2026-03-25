import { Header } from "@/components/boty/header"
import { Hero } from "@/components/boty/hero"
import { TrustBadges } from "@/components/boty/trust-badges"
import { ServicesGrid } from "@/components/boty/services-grid"
import { Portfolio } from "@/components/boty/portfolio"
import { FeatureSection } from "@/components/boty/feature-section"
import { Testimonials } from "@/components/boty/testimonials"
import { Newsletter } from "@/components/boty/newsletter"
import { Footer } from "@/components/boty/footer"

export default function HomePage() {
  return (
    <main>

      <Header />

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      <TrustBadges />

      {/* LAYANAN */}
      <section id="layanan">
        <ServicesGrid />
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <Portfolio />
      </section>

      <FeatureSection />
      <Testimonials />

      {/* KONTAK (NEWSLETTER / FORM) */}
      <section id="kontak">
        <Newsletter />
      </section>

      <Footer />

    </main>
  )
}