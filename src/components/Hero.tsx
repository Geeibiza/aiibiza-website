import { useEffect, useRef } from 'react'

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Parallax on scroll
    const onScroll = () => {
      if (nameRef.current) {
        const y = window.scrollY * 0.3
        nameRef.current.style.transform = `translateY(${y}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-end">

      {/* Full viewport hero image */}
      <div className="absolute inset-0">
        <img
          src="/images/gee-hero.jpg"
          alt="Gee Van D"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'grayscale(100%) contrast(1.1)' }}
        />
        {/* Gradient overlay — bottom dark fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Name — huge, bottom left */}
      <div className="relative z-10 px-6 md:px-10 pb-12">
        <h1
          ref={nameRef}
          className="font-display text-[18vw] leading-none tracking-tight text-white will-change-transform"
        >
          GEE VAN D
          <span className="text-fluor">.</span>
        </h1>
        <p className="font-body text-white/60 text-sm md:text-base tracking-[0.3em] uppercase mt-2">
          Web3 · Music · Kitchen · Ibiza
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-10 z-10 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs tracking-widest uppercase rotate-90 origin-center">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-fluor to-transparent" />
      </div>
    </section>
  )
}
