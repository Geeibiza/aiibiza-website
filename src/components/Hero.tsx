import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const subtitleText = '> Automating the future. One system at a time.'
  const heroRef = useRef<HTMLDivElement>(null)

  // Typewriter effect
  useEffect(() => {
    const delay = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        setTyped(subtitleText.slice(0, i + 1))
        i++
        if (i >= subtitleText.length) {
          clearInterval(interval)
        }
      }, 45)
      return () => clearInterval(interval)
    }, 1200)
    return () => clearTimeout(delay)
  }, [])

  // Parallax on hero bg
  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const y = window.scrollY
        const bg = heroRef.current.querySelector('.hero-bg') as HTMLElement
        if (bg) bg.style.transform = `translateY(${y * 0.3}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Background image */}
      <div
        className="hero-bg absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/ibiza-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.12) saturate(0.3)',
          willChange: 'transform',
        }}
      />

      {/* Violet glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-10%',
          top: '20%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(123,47,255,0.15) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Right glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-5%',
          bottom: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(174,255,0,0.06) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-4xl">

          {/* Status line */}
          <div className="label mb-10 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
            <span style={{ color: 'var(--muted)' }}>// </span>
            <span style={{ color: 'var(--lime)' }}>SYSTEMS ONLINE</span>
            <span
              className="inline-block w-2 h-2 rounded-full ml-3"
              style={{ background: 'var(--lime)', boxShadow: '0 0 8px var(--lime)', animation: 'pulse-glow 2s ease-in-out infinite' }}
            />
          </div>

          {/* Main headline */}
          <h1
            className="font-display animate-fadeUp"
            style={{
              fontSize: 'clamp(64px, 9vw, 128px)',
              color: 'var(--white)',
              animationDelay: '0.3s',
            }}
          >
            The internet was built<br />
            <span style={{ color: 'var(--sand)' }}>by people like this.</span>
          </h1>

          {/* Typewriter subtitle */}
          <div
            className="mt-8 animate-fadeUp"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              color: 'var(--phosphor)',
              letterSpacing: '0.05em',
              height: '20px',
              animationDelay: '0.5s',
            }}
          >
            {typed}
            {typed.length < subtitleText.length && (
              <span className="cursor-blink" style={{ color: 'var(--lime)' }}>█</span>
            )}
          </div>

          {/* Supporting line */}
          <p
            className="mt-6 animate-fadeUp"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px',
              color: 'var(--grey)',
              letterSpacing: '0.05em',
              animationDelay: '0.7s',
            }}
          >
            AI consulting and automation infrastructure.
            <span style={{ color: 'var(--muted)' }}> Operating from Ibiza. Deployed everywhere.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-12 animate-fadeUp" style={{ animationDelay: '0.9s' }}>
            <a href="#services" className="btn-primary">See What We Build</a>
            <a href="#contact" className="btn-ghost">Book a Call</a>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-12 mt-20 animate-fadeUp"
            style={{ animationDelay: '1.1s' }}
          >
            {[
              { val: '1984', label: 'First network' },
              { val: '2009', label: 'Bitcoin mined' },
              { val: '24/7', label: 'Systems running' },
            ].map(stat => (
              <div key={stat.label}>
                <div
                  className="font-display"
                  style={{ fontSize: '36px', color: 'var(--lime)', lineHeight: 1 }}
                >
                  {stat.val}
                </div>
                <div className="label mt-1" style={{ color: 'var(--muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeUp"
        style={{ animationDelay: '1.5s' }}
      >
        <span className="label" style={{ color: 'var(--muted)', fontSize: '9px' }}>SCROLL</span>
        <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, var(--lime), transparent)' }} />
      </div>
    </section>
  )
}
