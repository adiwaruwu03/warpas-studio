import { Header } from "@/components/boty/header"
import { Hero } from "@/components/boty/hero"
import { TrustBadges } from "@/components/boty/trust-badges"
import { StorySection } from "@/components/boty/story-section"
import { Portfolio } from "@/components/boty/portfolio"
import { FeatureSection } from "@/components/boty/feature-section"
import { Testimonials } from "@/components/boty/testimonials"
import { Newsletter } from "@/components/boty/newsletter"
import { Footer } from "@/components/boty/footer"
import { ServicesSection } from "@/components/boty/services-section"
import { posts } from "@/lib/blog"

export default function HomePage() {
  return (
    <main>

      <Header />

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      <TrustBadges />

      {/* Order must match the nav, left to right: Tentang, Proyek, Layanan, Kontak */}

      {/* TENTANG (about, journey, principles) */}
      <section id="portfolio">
        <Portfolio />
        <FeatureSection journey={posts.map(({ slug, title, date }) => ({ slug, title, date }))} />
        <Testimonials />
      </section>

      {/* PROYEK */}
      <section id="story">
        <StorySection />
      </section>

      {/* LAYANAN */}
      <section id="layanan">
        <ServicesSection />
      </section>

      {/* KONTAK (NEWSLETTER / FORM) */}
      <section id="kontak">
        <Newsletter />
      </section>

      <Footer />

    </main>
  )
}