# Adi Putra Waruwu portfolio: design guide

Personal portfolio of Adi Putra Waruwu (frontend developer, Medan). Next.js 16 + Tailwind 4. Copy is bilingual ID/EN via `useLanguage()` in `components/boty/language-context.tsx` (`isEnglish ? "EN" : "ID"`). Blog posts (`lib/blog.ts`) are Indonesian only for now.

## Brand

- Feel: calm, exclusive, dark luxury. Quiet backgrounds, one accent. Easy on the eyes: the owner said the old cyan/green/blue look was tiring ("sakit mata").
- Keep the motion that gives the site its character: hero (owner likes it, do not redesign), the 3D photo slider + falling-character matrix in "Tentang Saya" (`portfolio.tsx`), the pulsing character grid behind the contact form (`newsletter.tsx`), the scrolling columns in `testimonials.tsx`, blur-in headings. Keep these effects subtle (low opacity), never neon.

## Colors

Tokens live in `app/globals.css` (`:root`, dark only). Use token classes. Do not hardcode hex, and do not use Tailwind palette colors (cyan, blue, purple, slate...) in components.

| Role | Value | Class |
|---|---|---|
| Page background | `#0d0d0f` warm black | `bg-background` |
| Card / raised surface | `#151518` | `bg-card` |
| Subtle fill | `#1d1d21` | `bg-secondary` |
| Text | `#ebe7df` ivory | `text-foreground` (body paragraphs `text-foreground/80`) |
| Muted text | `#9d978d` | `text-muted-foreground` |
| Accent (champagne gold) | `#c9a96e` | `text-primary`, `bg-primary` (dark text on it: `text-primary-foreground`) |
| Border | `#2a2926` | `border-border`, or `border-primary/10..20` for accented cards |

Rules:
- Gold is an accent: links, small labels, active states, one CTA per section, thin divider lines. Not for long body text.
- Never white text on a gold button; use `text-primary-foreground`.
- Glows use `rgba(201,169,110, <=0.25)`.
- Every section uses `bg-background` so the page reads as one surface. No grid-line overlay backgrounds (removed as visual noise).
- Exception: the bento card in `feature-section.tsx` sits on a light video, so its text stays `text-black`.

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
- Projects: `lib/projects.ts`, detail pages at `/story/[slug]`. Blog: `lib/blog.ts`, pages at `/blog`, `/blog/[slug]`. Both are in `app/sitemap.ts`.

## Ideas borrowed from the CLAPHAM.CO guide (another project of the owner; principles only)

Use the principles. Do not copy that brand's colors, fonts or content.
- All colors come from tokens in `globals.css`. No hardcoded colors.
- Avoid the "AI-generated" look: no icon boxes on every card, no eyebrow labels above every heading, no glass pills over the hero.
- Check contrast. Small text must stay readable. A faint accent color is for fills, not for text.
- Images: keep their native aspect ratio, `sizes` must match the rendered width, the LCP image gets `priority`.
- Each page has exactly one `h1`. Per-page metadata and JSON-LD stay in Indonesian.
- After layout changes, check the page at 375, 1366 and 1920 widths.
