import { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'
import { posts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adi-putra-waruwu.vercel.app'

  // Halaman Statis
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    }
  ]

  // Halaman Dinamis (Projects)
  const dynamicRoutes = projects.map((project) => ({
    url: `${baseUrl}/story/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogRoutes = [
    { url: `${baseUrl}/jasa-pembuatan-website-medan`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  return [...staticRoutes, ...dynamicRoutes, ...blogRoutes]
}
