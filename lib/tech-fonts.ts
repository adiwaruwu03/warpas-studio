import { Orbitron, Space_Grotesk } from "next/font/google"

export const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["500", "600", "700", "800"],
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
})
