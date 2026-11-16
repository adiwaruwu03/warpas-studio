import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

// Social share card (WhatsApp, Facebook, LinkedIn, X). Next adds the og:image + twitter:image tags.
// Brand dark palette from WARNA.md: black #0E0E10, warm white #ECE6DA, orange #FF5B1A.
export const alt = "Adi Putra Waruwu, Web Developer Medan & Jasa Pembuatan Website"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/profile/22.png"))
  const src = `data:image/png;base64,${photo.toString("base64")}`

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0E0E10", color: "#ECE6DA", padding: "0 72px" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 680 }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#FF5B1A", fontWeight: 700 }}>ADI PUTRA WARUWU</div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, marginTop: 20 }}>Web Developer Medan</div>
          <div style={{ fontSize: 36, marginTop: 20, color: "#C9C2B6" }}>Jasa Pembuatan Website & Aplikasi</div>
          <div style={{ fontSize: 24, marginTop: 36, color: "#9D978D" }}>Medan · Nias · Sumatera Utara · Indonesia</div>
        </div>
        <div style={{ display: "flex", position: "relative", flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
          <div style={{ position: "absolute", bottom: 60, width: 400, height: 400, borderRadius: 9999, background: "#FF5B1A" }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} height={580} style={{ position: "relative", objectFit: "contain" }} alt="" />
        </div>
      </div>
    ),
    size,
  )
}
