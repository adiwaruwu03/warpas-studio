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
  title: 'Adi Putra Waruwu — Frontend Developer',
  description: 'Portofolio personal Adi Putra Waruwu, seorang Frontend Developer yang berfokus pada pengembangan website modern, responsif, dan berorientasi pada pengalaman pengguna.',
  generator: 'v0.app',
  keywords: ['frontend developer', 'web developer', 'react', 'nextjs', 'portfolio', 'Adi Putra Waruwu'],
  icons: {
    icon: [
      {
        url: '/adi.JPEG',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/adi.JPEG',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/adi.JPEG',
        type: 'image/svg+xml',
      },
    ],
    apple: '/adi.JPEG',
  },
}

export const viewport: Viewport = {
  themeColor: '#F7F4EF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased pb-24 lg:pb-0`}>
        <LanguageProvider>
          {children}
          <BottomNav />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
