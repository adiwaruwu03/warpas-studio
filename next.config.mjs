/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // External images used with next/image
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
}

export default nextConfig
