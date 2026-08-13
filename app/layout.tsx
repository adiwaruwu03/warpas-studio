import React from "react"
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from "@/components/boty/language-context"
import { BottomNav } from "@/components/boty/bottom-nav"
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adi-putra-waruwu.vercel.app'),
  title: 'Adi Putra Waruwu | Web Developer, Frontend Developer & Full Stack Developer Indonesia',
  description: 'Adi Putra Waruwu adalah Web Developer Indonesia yang membangun website modern, cepat, responsif, SEO Friendly, menggunakan Next.js, React, Laravel, TypeScript, dan teknologi web modern.',
  keywords: [
    'Adi Putra', 'Adi Putra Waruwu', 'Web Developer', 'Frontend Developer', 'Full Stack Developer', 
    'Software Developer', 'Web Developer Indonesia', 'Frontend Developer Indonesia', 'Next.js Developer', 
    'React Developer', 'Laravel Developer', 'TypeScript Developer', 'JavaScript Developer', 
    'AI Developer', 'SEO Developer', 'Freelance Web Developer'
  ],
  authors: [{ name: 'Adi Putra Waruwu', url: 'https://adi-putra-waruwu.vercel.app' }],
  creator: 'Adi Putra Waruwu',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://adi-putra-waruwu.vercel.app',
    title: 'Adi Putra Waruwu | Web Developer Indonesia',
    description: 'Web Developer Indonesia yang membangun website modern, cepat, responsif, SEO Friendly.',
    siteName: 'Adi Putra Waruwu Portfolio',
    images: [
      {
        url: '/fotohero.png',
        width: 1200,
        height: 630,
        alt: 'Adi Putra Waruwu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adi Putra Waruwu | Web Developer Indonesia',
    description: 'Web Developer Indonesia yang membangun website modern, cepat, responsif, SEO Friendly.',
    images: ['/fotohero.png'],
  },
  alternates: {
    canonical: 'https://adi-putra-waruwu.vercel.app',
  },
  icons: {
    icon: [
      { url: '/logo.png', media: '(prefers-color-scheme: light)' },
      { url: '/logo.png', media: '(prefers-color-scheme: dark)' },
      { url: '/logo.png', type: 'image/svg+xml' },
    ],
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#07111f',
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
      "description": "Frontend Developer dan Full Stack Developer Indonesia yang berfokus pada pengembangan website modern menggunakan Next.js, React, Laravel, TypeScript, dan teknologi web terbaru.",
      "url": "https://adi-putra-waruwu.vercel.app",
      "sameAs": [
        "https://www.instagram.com/adi_waruwwu/",
        "https://www.linkedin.com/in/adi-putra-waruwu-554391288/",
        "https://www.tiktok.com/@halo_aku_adi?is_from_webapp=1&sender_device=pc",
        "https://github.com/adiwaruwu03"
      ],
      "knowsAbout": [
        "Web Development", "Frontend Development", "Full Stack Development", "Next.js", 
        "React", "Laravel", "TypeScript", "JavaScript", "SEO", "Performance Optimization", 
        "Responsive Design", "UI UX"
      ]
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
    <html lang="id">
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased pb-24 lg:pb-0`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          {children}
          <BottomNav />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
