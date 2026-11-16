# Adi Putra Waruwu portfolio: design guide

Personal portfolio of Adi Putra Waruwu (frontend developer, Medan). Next.js 16 + Tailwind 4. Copy is bilingual ID/EN via `useLanguage()` in `components/boty/language-context.tsx` (`isEnglish ? "EN" : "ID"`). Blog posts (`lib/blog.ts`) are Indonesian only for now.

## Brand

- Feel: calm, exclusive, dark luxury. Quiet backgrounds, one accent. Easy on the eyes: the owner said the old cyan/green/blue look was tiring ("sakit mata").
- Keep the motion that gives the site its character: hero (owner likes it, do not redesign), the 3D photo slider + falling-character matrix in "Tentang Saya" (`portfolio.tsx`), the pulsing character grid behind the contact form (`newsletter.tsx`), the scrolling columns in `testimonials.tsx`, blur-in headings. Keep these effects subtle (low opacity), never neon.

## Colors

Two themes via `next-themes` (class on `<html>`): light is the default (`:root, .light`, must stay above `.dark` in the file), dark is `.dark`. Full palette, rules and reasons are in `WARNA.md`. Read it before any color work.

- Dark: black `#0E0E10`, warm white `#ECE6DA`, vibrant orange `#FF5B1A`. Light: Krim `#EFE4D2`, Espresso `#2B1B13`, Pandan `#1E7434` (darkened from `#2F9B45` so small text passes AA).
- Components use token classes only (`bg-background`, `text-primary`...). No hex, no Tailwind palette colors, no `bg-white/..` tints (use `bg-foreground/..`).
- Glows/effects: `rgb(var(--primary-rgb) / <=0.25)`. Every token change goes into BOTH theme blocks.
- Text over photos/video: class `on-media`. The hero is always dark. Navs: transparent with light text over the hero (`on-media`), otherwise a bar in `bg-background` with theme text. The active item gets a sliding SOLID pill in the exact brand color (`bg-brand`: #2F9B45 light, #FF5B1A dark) with white text (`components/boty/use-active-nav.ts`).
- Every section uses `bg-background`. No grid-line overlays.

## Typography

- `playfair` (Playfair Display serif) for headings, `spaceGrotesk` for body, `orbitron` ONLY for the hero "PORTOFOLIO" wordmark (all from `lib/tech-fonts.ts`). Long paragraphs `leading-7`/`leading-8`.

## Motion

- `prefers-reduced-motion` disables all animation globally (`globals.css`).
- New animations: CSS or the existing IntersectionObserver pattern. Do not add an animation library.

## Content rules

- Never invent stats, testimonials or client claims. Blog posts come from the owner's own writing (LinkedIn). Mark anything reconstructed and ask the owner to check it.
- Hero photos: the `heroPhotos` array in `components/boty/hero.tsx`. They are transparent PNGs in `public/images/profile/`.
- Blog content syntax (`lib/blog.ts`): paragraphs split by a blank line, a paragraph of only `![alt](/path)` renders an image, bare URLs become links. Images go in `public/blog/`.
- SEO: the root layout sets `canonical: './'`, so every page gets its own canonical. Never hardcode the home URL there, or every page would point to home. Local keywords ("web developer Medan", "jasa pembuatan website/aplikasi Medan") live in `SEO_KEYWORDS` (`lib/blog.ts`) and in the layout metadata. The `ProfessionalService` JSON-LD in `app/layout.tsx` must match the Google Business Profile (name, phone, hours).
- Home page order must match the nav left to right: hero (#home) → Tentang (#portfolio: about, journey, principles) → Proyek (#story) → Layanan (#layanan) → Kontak (#kontak). Blog is a separate page. Section ids are listed in `SECTIONS` in `components/boty/use-active-nav.ts`, in the same order.
- Services: `lib/services.ts` is the single source for the home "Layanan" section and `/jasa-pembuatan-website-medan`. Bilingual fields; no prices or invented results.
- "Perjalanan Saya" timeline (`feature-section.tsx`) is built from the blog posts (passed in from `app/page.tsx`), so a new post updates it automatically.
- Projects: `lib/projects.ts`, detail pages at `/story/[slug]`. Blog: `lib/blog.ts`, pages at `/blog`, `/blog/[slug]`. Both are in `app/sitemap.ts`.

## Ideas borrowed from the CLAPHAM.CO guide (another project of the owner; principles only)

Use the principles. Do not copy that brand's colors, fonts or content.
- All colors come from tokens in `globals.css`. No hardcoded colors.
- Avoid the "AI-generated" look: no icon boxes on every card, no eyebrow labels above every heading, no glass pills over the hero.
- Check contrast. Small text must stay readable. A faint accent color is for fills, not for text.
- Images: keep their native aspect ratio, `sizes` must match the rendered width, the LCP image gets `priority`.
- Each page has exactly one `h1`. Per-page metadata and JSON-LD stay in Indonesian.
- After layout changes, check the page at 375, 1366 and 1920 widths.

## Performance

- Dependencies are kept minimal (next, react, lucide-react, next-themes, @vercel/analytics). The shadcn/ui template folder was removed; build UI with plain Tailwind and tokens, do not add a component library for one widget.
- `next.config.mjs` is empty on purpose: image optimization is ON (do not set `images.unoptimized`), and TypeScript errors fail the build.
- Background videos below the hero use `components/boty/lazy-video.tsx` (no download until near the viewport, paused off-screen). Never autoplay heavy videos eagerly.
- Avoid `backdrop-blur` and CSS `filter` on large or repeated elements (cards, matrix columns): they make theme switching and scrolling slow. Keep blur for the navs only.
- Fonts are self-hosted variable woff2 files in `app/fonts/`, loaded with `next/font/local` in `lib/tech-fonts.ts`. Do not switch back to `next/font/google`: in Next 16.0.x Turbopack it randomly breaks builds ("next/font/google queries have exactly one entry"), on Vercel too.
- npm is the package manager (`package-lock.json`); there is no pnpm lockfile.

