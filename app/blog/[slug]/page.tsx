import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { playfair, spaceGrotesk } from "@/lib/tech-fonts"
import { posts, formatDate, SEO_KEYWORDS } from "@/lib/blog"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { PostCard, PostListItem } from "@/components/boty/blog-cards"

const SITE = "https://adi-putra-waruwu.vercel.app"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return { title: "Post Not Found | Adi Putra Waruwu" }

  return {
    title: `${post.title} | Adi Putra Waruwu`,
    description: post.excerpt,
    keywords: [...post.tags, ...SEO_KEYWORDS],
    authors: [{ name: "Adi Putra Waruwu", url: SITE }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Adi Putra Waruwu"],
      tags: post.tags,
      url: `${SITE}/blog/${post.slug}`,
      images: post.cover ? [post.cover] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [post.cover] : undefined,
    },
  }
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

// Turns bare URLs in a paragraph into links
function linkify(text: string) {
  return text.split(/(https?:\/\/\S+)/g).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 break-all">
        {part}
      </a>
    ) : (
      part
    ),
  )
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const others = posts.filter((p) => p.slug !== post.slug)
  const url = `${SITE}/blog/${post.slug}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "id-ID",
        url,
        mainEntityOfPage: url,
        image: post.cover ? `${SITE}${post.cover}` : undefined,
        keywords: [...post.tags, ...SEO_KEYWORDS].join(", "),
        author: { "@id": `${SITE}/#person` },
        publisher: { "@id": `${SITE}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  }
  // Skip the hero when the cover also appears inside the article (no same shot twice)
  const showHero = post.cover && !post.content.includes(post.cover)

  return (
    <div className="min-h-screen bg-background pt-[100px] md:pt-[120px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className={`max-w-7xl mx-auto px-6 lg:px-8 pb-24 ${spaceGrotesk.className}`}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Blog</span>
        </Link>

        <time dateTime={post.date} className="block text-xs uppercase tracking-widest text-primary">{formatDate(post.date)}</time>
        <h1 className={`mt-3 text-3xl md:text-5xl text-foreground leading-tight ${playfair.className}`}>{post.title}</h1>
        <p className="mt-4 text-muted-foreground">Oleh Adi Putra Waruwu, Web Developer Medan</p>

        {showHero ? (
          <div className="relative aspect-[16/9] my-10 rounded-3xl overflow-hidden border border-primary/12 bg-secondary">
            <Image src={post.cover!} alt={post.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" priority />
          </div>
        ) : (
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        )}

        <article className="space-y-6 text-lg leading-8 text-foreground/80">
          {post.content.split("\n\n").map((paragraph, i) => {
            const img = paragraph.match(/^!\[(.*)\]\((.*)\)$/)
            if (img) {
              return (
                <figure key={i} className="my-10">
                  <Image
                    src={img[2]}
                    alt={img[1]}
                    width={1920}
                    height={880}
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="w-full h-auto rounded-2xl border border-primary/12"
                    priority={i < 4}
                  />
                  <figcaption className="mt-3 text-sm text-muted-foreground">{img[1]}</figcaption>
                </figure>
              )
            }
            return <p key={i} className="whitespace-pre-line">{linkify(paragraph)}</p>
          })}
        </article>

        <div className="mt-12 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-primary/20 px-3 py-1 text-xs text-primary">#{tag.replace(/\s/g, "")}</span>
          ))}
        </div>

        <aside className="mt-16 rounded-3xl border border-primary/20 bg-card p-8">
          <h2 className={`text-2xl text-foreground ${playfair.className}`}>Butuh website atau aplikasi untuk bisnismu?</h2>
          <p className="mt-3 text-foreground/80 leading-7">
            Saya Adi Putra Waruwu, web developer di Medan, Sumatera Utara, dan melayani klien di Medan, Nias, seluruh Sumatera, hingga seluruh Indonesia secara online. Saya melayani jasa pembuatan website company profile,
            landing page, toko online, sampai aplikasi web kustom seperti sistem kasir (POS), sistem informasi apotek,
            dan aplikasi booking, dengan Next.js, React, dan Laravel. Konsultasi gratis.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/6283836098858"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
            >
              Konsultasi via WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/jasa-pembuatan-website-medan" className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm text-primary hover:bg-primary/10 transition">
              Lihat layanan pembuatan website
            </Link>
          </div>
        </aside>
        </div>

        <aside className="hidden lg:block lg:sticky lg:top-28 lg:self-start">
          <h2 className={`text-xl text-foreground mb-5 ${playfair.className}`}>Artikel Lainnya</h2>
          <div className="space-y-4">
            {others.map((p) => (
              <PostListItem key={p.slug} post={p} />
            ))}
          </div>
        </aside>
        </div>

        {others.length > 0 && (
          <section className="mt-24">
            <h2 className={`text-3xl text-foreground mb-8 ${playfair.className}`}>Baca Juga</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {others.slice(0, 3).map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
