import Link from "next/link"
import Image from "next/image"
import { playfair, spaceGrotesk } from "@/lib/tech-fonts"
import { type BlogPost, formatDate } from "@/lib/blog"

function Pill({ children }: { children: string }) {
  return <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] text-primary">{children}</span>
}

export function PostCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-primary/12 bg-card transition hover:-translate-y-1 hover:border-primary/40 ${spaceGrotesk.className}`}
    >
      <div className="relative aspect-[16/10] bg-secondary">
        {post.cover ? (
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover transition duration-700 group-hover:scale-105"
            priority={priority}
          />
        ) : (
          <span className={`absolute inset-0 flex items-center justify-center p-6 text-center text-xl text-primary ${playfair.className}`}>
            {post.tags[0]}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div><Pill>{post.tags[0]}</Pill></div>
        <h3 className={`mt-4 text-lg leading-snug text-foreground group-hover:text-primary transition ${playfair.className}`}>
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">{post.excerpt}</p>
        <p className="mt-auto pt-5 text-xs text-muted-foreground">
          Adi Putra Waruwu · <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      </div>
    </Link>
  )
}

// Compact sidebar card: category pill + title
export function PostListItem({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block rounded-2xl border border-primary/12 bg-card p-5 transition hover:border-primary/40 ${spaceGrotesk.className}`}
    >
      <Pill>{post.tags[0]}</Pill>
      <p className="mt-3 text-sm leading-snug text-foreground group-hover:text-primary transition">{post.title}</p>
    </Link>
  )
}
