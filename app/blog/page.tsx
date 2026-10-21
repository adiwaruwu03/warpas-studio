import { Metadata } from "next"
import { playfair, spaceGrotesk } from "@/lib/tech-fonts"
import { posts, SEO_KEYWORDS } from "@/lib/blog"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { PostCard, PostListItem } from "@/components/boty/blog-cards"

export const metadata: Metadata = {
  title: "Blog Web Developer Medan | Adi Putra Waruwu",
  description: "Blog Adi Putra Waruwu, web developer Medan: cerita membangun website, aplikasi kasir POS, sistem informasi, SEO, dan pengalaman jasa pembuatan website dan aplikasi.",
  keywords: SEO_KEYWORDS,
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  const [featured, ...latest] = posts

  return (
    <div className="min-h-screen bg-background pt-[100px] md:pt-[120px]">
      <Header />

      <main className={`max-w-7xl mx-auto px-6 lg:px-8 pb-24 ${spaceGrotesk.className}`}>
        <h1 className={`text-4xl md:text-7xl text-foreground tracking-tight mb-4 ${playfair.className}`}>Blog</h1>
        <p className="text-muted-foreground mb-14 max-w-2xl leading-7">
          Catatan perjalanan saya sebagai web developer di Medan, Sumatera Utara: membangun website dan aplikasi untuk bisnis, pencapaian, hobi, dan pandangan tentang dunia digital.
        </p>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <h2 className={`text-2xl text-foreground mb-6 ${playfair.className}`}>Artikel Unggulan</h2>
            <PostCard post={featured} large />

            {latest.length > 0 && (
              <>
                <h2 className={`text-2xl text-foreground mt-16 mb-6 ${playfair.className}`}>Artikel Terbaru</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {latest.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <h2 className={`text-2xl text-foreground mb-6 ${playfair.className}`}>Semua Artikel</h2>
            <div className="space-y-4">
              {posts.map((post) => (
                <PostListItem key={post.slug} post={post} />
              ))}
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
