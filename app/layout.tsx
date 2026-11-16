import React from "react"
import type { Metadata, Viewport } from 'next'
import { playfair, dmSans } from '@/lib/tech-fonts'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from "@/components/boty/language-context"
import { BottomNav } from "@/components/boty/bottom-nav"
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://adi-putra-waruwu.vercel.app'),
  // SEO audit limits: title 50-60 chars, description 120-160 chars
  title: 'Web Developer Medan & Jasa Pembuatan Website | Adi Waruwu',
  description: 'Jasa pembuatan website & aplikasi di Medan, Sumatera Utara: company profile, toko online, kasir POS. Melayani Medan, Nias, dan seluruh Indonesia.',
  keywords: [
    'Adi Putra', 'Adi Putra Waruwu', 'Web Developer', 'Frontend Developer', 'Full Stack Developer', 
    'Software Developer', 'Web Developer Indonesia', 'Frontend Developer Indonesia', 'Next.js Developer', 
    'React Developer', 'Laravel Developer', 'TypeScript Developer', 'JavaScript Developer', 
    'AI Developer', 'SEO Developer', 'Freelance Web Developer',
    'Adi Waruwu', 'Web Developer Medan', 'Jasa Pembuatan Website Medan', 'Jasa Pembuatan Website',
    'Jasa Pembuatan Aplikasi Medan', 'Developer Aplikasi Medan', 'Jasa Web Developer', 'Pembuatan Aplikasi Web',
    'Aplikasi Kasir POS', 'Sistem Informasi Apotek', 'Website Company Profile', 'Toko Online',
    'Web Developer Sumatera Utara', 'Jasa Pembuatan Website Sumatera Utara', 'Web Developer Sumatra',
    'Web Developer Nias', 'Jasa Pembuatan Website Nias', 'Jasa Pembuatan Website Indonesia'
  ],
  authors: [{ name: 'Adi Putra Waruwu', url: 'https://adi-putra-waruwu.vercel.app' }],
  creator: 'Adi Putra Waruwu',
  // og:image + twitter:image come from app/opengraph-image.tsx (1200x630, generated at build)
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://adi-putra-waruwu.vercel.app',
    title: 'Web Developer Medan & Jasa Pembuatan Website | Adi Waruwu',
    description: 'Jasa pembuatan website & aplikasi di Medan, Sumatera Utara: company profile, toko online, kasir POS, sistem informasi. Melayani Medan, Nias & seluruh Indonesia.',
    siteName: 'Adi Putra Waruwu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Developer Medan & Jasa Pembuatan Website | Adi Waruwu',
    description: 'Jasa pembuatan website & aplikasi di Medan, Sumatera Utara: company profile, toko online, kasir POS, sistem informasi. Melayani Medan, Nias & seluruh Indonesia.',
  },
  alternates: {
    canonical: './',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#efe4d2',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://adi-putra-waruwu.vercel.app/#person",
      "name": "Adi Putra Waruwu",
      "alternateName": "Adi Putra",
      "jobTitle": "Web Developer",
      "workLocation": { "@type": "Place", "name": "Medan, Sumatera Utara, Indonesia" },
      "description": "Frontend Developer dan Full Stack Developer Indonesia yang berfokus pada pengembangan website modern menggunakan Next.js, React, Laravel, TypeScript, dan teknologi web terbaru.",
      "url": "https://adi-putra-waruwu.vercel.app",
      "sameAs": [
        "https://www.instagram.com/adi_putra_waruwu/",
        "https://www.linkedin.com/in/adi-putra-waruwu-554391288/",
        "https://www.tiktok.com/@waruwu_gido",
        "https://github.com/adiwaruwu03"
      ],
      "knowsAbout": [
        "Web Development", "Frontend Development", "Full Stack Development", "Next.js", 
        "React", "Laravel", "TypeScript", "JavaScript", "SEO", "Performance Optimization", 
        "Responsive Design", "UI UX"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://adi-putra-waruwu.vercel.app/#business",
      "name": "Adi Waruwu - Jasa Pembuatan Website & Web Developer Medan",
      "description": "Jasa pembuatan website company profile, landing page, toko online, dan aplikasi web kustom di Medan. Melayani Medan, Nias, Sumatera Utara, dan seluruh Indonesia.",
      "url": "https://adi-putra-waruwu.vercel.app",
      "image": "https://adi-putra-waruwu.vercel.app/blog/jasa-pembuatan-website-medan.jpg",
      "telephone": "+62-838-3609-8858",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Medan",
        "addressRegion": "Sumatera Utara",
        "addressCountry": "ID"
      },
      "areaServed": [
        { "@type": "City", "name": "Medan" },
        { "@type": "AdministrativeArea", "name": "Nias" },
        { "@type": "AdministrativeArea", "name": "Sumatera Utara" },
        { "@type": "Place", "name": "Sumatera" },
        { "@type": "Country", "name": "Indonesia" }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "founder": { "@id": "https://adi-putra-waruwu.vercel.app/#person" },
      "sameAs": ["https://share.google/aad78zjLzfPAKzKzf"],
      "knowsAbout": ["Jasa Pembuatan Website", "Pembuatan Aplikasi Web", "Aplikasi Kasir POS", "Sistem Informasi", "SEO", "Next.js", "Laravel"]
    },
    {
      "@type": "WebSite",
      "@id": "https://adi-putra-waruwu.vercel.app/#website",
      "url": "https://adi-putra-waruwu.vercel.app",
      "name": "Adi Putra Waruwu Portfolio",
      "description": "Adi Putra Waruwu adalah Web Developer Indonesia yang membangun website modern, cepat, responsif, SEO Friendly, menggunakan Next.js, React, Laravel, TypeScript, dan teknologi web modern.",
      "publisher": {
        "@id": "https://adi-putra-waruwu.vercel.app/#person"
      }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased pb-24 lg:pb-0`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <BottomNav />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
