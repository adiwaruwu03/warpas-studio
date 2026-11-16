import localFont from "next/font/local"

// Self-hosted variable fonts (latin subset) in app/fonts/, so builds never fetch from Google Fonts.
// next/font/google in Next 16.0.x Turbopack randomly failed with
// "next/font/google queries have exactly one entry" (locally and on Vercel).

export const orbitron = localFont({
  src: "../app/fonts/orbitron.woff2",
  variable: "--font-orbitron",
  weight: "400 900",
  display: "swap",
})

export const spaceGrotesk = localFont({
  src: "../app/fonts/space-grotesk.woff2",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
})

// Serif headings for sections; orbitron stays only in the hero
export const playfair = localFont({
  src: "../app/fonts/playfair-display.woff2",
  variable: "--font-playfair",
  weight: "400 900",
  display: "swap",
})

export const dmSans = localFont({
  src: "../app/fonts/dm-sans.woff2",
  variable: "--font-dm-sans",
  weight: "100 1000",
  display: "swap",
})
