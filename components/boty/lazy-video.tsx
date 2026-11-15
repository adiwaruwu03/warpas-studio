"use client"

import { useEffect, useRef } from "react"

// Background video that downloads nothing until it scrolls near the viewport,
// and pauses while off-screen so it does not burn CPU or battery.
export function LazyVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) video.src = src
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: "200px" },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [src])

  return <video ref={ref} muted loop playsInline preload="none" className={className} />
}
