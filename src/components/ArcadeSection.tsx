import { useEffect, useRef } from 'react'

const arcadeItems = [
  { label: 'Commodore 64', tag: 'Age 15', desc: 'First machine. First obsession. Learned to code before coding was cool.' },
  { label: 'THUNDERDOME BBS', tag: '10 Lines · Sysop', desc: 'Ran a bulletin board system with 10 lines. The underground internet before the internet.' },
  { label: 'Blue Boxing', tag: 'Pre-Internet', desc: 'On the network before it went public. Some stories stay underground.' },
  { label: 'Arcade Collector', tag: 'Restorer', desc: 'Full arcades in the house. Hunting, restoring, and playing the classics — the way they were meant to be played.' },
  { label: 'COD · Apex · Warzone', tag: 'Active', desc: 'Still dropping bombs. 62 kills on Nuketown. 15-kill streaks on Apex. Active streamer.' },
]

export default function ArcadeSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="arcade" ref={ref} className="relative bg-black">

      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff41 2px, #00ff41 4px)' }}
      />

      {/* Sticky pixel label */}
      <div className="sticky top-16 z-20 px-6 md:px-10 py-4 pointer-events-none">
        <p className="font-pixel text-[12vw] md:text-[8vw] leading-none select-none" style={{ color: 'rgba(0,255,65,0.12)' }}>
          GVD<span style={{ color: 'rgba(0,255,65,0.25)' }}>×</span>ARCADE
        </p>
      </div>

      {/* Fullscreen gameplay video background */}
      <div className="relative w-full h-screen overflow-hidden -mt-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
          style={{ filter: 'grayscale(20%) contrast(1.1) brightness(0.5)' }}
        >
          <source src="/videos/arcade-bg.mp4" type="video/mp4" />
        </video>
        {/* Green tint overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,20,0,0.5), rgba(0,0,0,0.8))' }} />
        {/* Scanlines over video */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff41 2px, #00ff41 4px)' }}
        />
        {/* Hero text over video */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-16 z-10">
          <div className="reveal">
            <p className="font-pixel text-[10px] mb-6" style={{ color: '#00ff41' }}>&gt;&gt; INSERT COIN TO CONTINUE_</p>
            <h2 className="font-pixel leading-relaxed text-white mb-4" style={{ fontSize: 'clamp(1.2rem, 4vw, 3.5rem)' }}>
              PRESS <span style={{ color: '#00ff41', textShadow: '0 0 20px rgba(0,255,65,0.8), 0 0 40px rgba(0,255,65,0.7)' }}>START</span>
            </h2>
            <p className="font-pixel text-[10px] mb-3" style={{ color: 'rgba(0,255,65,0.8)' }}>&gt; CHARACTER PROFILE</p>
            <p className="font-body text-white/70 text-lg max-w-lg leading-relaxed mb-2">
              Gaming since age 15. First machine was a Commodore 64. Ran a 10-line BBS called{' '}
              <span className="font-pixel text-[11px]" style={{ color: '#00ff41' }}>THUNDERDOME</span>
              {' '}— the underground internet before the internet existed.
            </p>
            <p className="font-body text-white/50 max-w-lg">
              Full arcade machines in the house, restored by hand. Active on COD, Apex and Warzone. Still dropping bombs.
            </p>
          </div>
        </div>

        {/* Predator badge */}
        <div className="absolute z-20" style={{ top: '75px', left: '75px' }}>
          <img
            src="/images/predator-badge.png"
            alt="Apex Predator"
            className="w-40 md:w-56 opacity-90"
            style={{ filter: 'drop-shadow(0 0 12px rgba(0,255,65,0.5))' }}
          />
        </div>

        {/* RTFKT sneaker video — PiP top right */}
        <div className="absolute top-40 right-6 md:right-10 z-20 w-[200px] md:w-[280px]" style={{ filter: 'drop-shadow(0 0 20px rgba(0,255,65,0.3))' }}>
          <div className="relative overflow-hidden" style={{ border: '1px solid rgba(0,255,65,0.5)', boxShadow: '0 0 30px rgba(0,255,65,0.15)' }}>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/AnwyAlXn6gI?controls=0&rel=0&modestbranding=1&loop=1&playlist=AnwyAlXn6gI&mute=1&autoplay=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full border-0"
                title="RTFKT Sneakers"
                style={{ pointerEvents: 'none' }}
              />
            </div>
            <div className="px-2 py-1" style={{ background: 'rgba(0,0,0,0.9)', borderTop: '1px solid rgba(0,255,65,0.3)' }}>
              <p className="font-pixel text-[7px]" style={{ color: '#00ff41' }}>&gt; RTFKT × NIKE</p>
            </div>
          </div>
          <p className="font-script text-5xl mt-3 text-center" style={{
            color: '#00ff41',
            textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 40px rgba(0,255,65,0.5)',
          }}>
            Sneaker Head
          </p>
          <p className="font-body text-white/50 text-xs mt-2 text-center leading-relaxed">
            RTFKT × Nike. OG holder.<br />Digital kicks. Real culture.
          </p>
        </div>

      </div>

      <div className="px-6 md:px-10 pt-8 pb-32 relative z-10">

        {/* Items list */}
        <div style={{ borderTop: '1px solid rgba(0,255,65,0.25)' }}>
          {arcadeItems.map((item, i) => (
            <div
              key={item.label}
              className="reveal group py-8 flex items-start justify-between gap-8 px-4 -mx-4 transition-colors duration-300"
              style={{ borderBottom: '1px solid rgba(0,255,65,0.2)', transitionDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-start gap-8">
                <span className="font-pixel text-[9px] mt-1 w-6 shrink-0" style={{ color: 'rgba(0,255,65,0.6)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-pixel text-xs md:text-sm text-white leading-relaxed group-hover:text-[#00ff41] transition-colors duration-300">
                    {item.label}
                  </h3>
                  <p className="font-body text-white/40 text-sm mt-2">{item.desc}</p>
                </div>
              </div>
              <span className="font-pixel text-[9px] mt-1 shrink-0 text-right" style={{ color: 'rgba(0,255,65,0.65)' }}>
                {item.tag}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="reveal mt-16 flex items-center gap-6 flex-wrap">
          <a
            href="https://portal.abs.xyz/stream/GeeIbiza"
            target="_blank"
            rel="noopener noreferrer"
            className="font-pixel text-[10px] px-6 py-4 transition-all duration-300 hover:bg-[#00ff41] hover:text-black"
            style={{ border: '1px solid #00ff41', color: '#00ff41' }}
          >
            <img src="/images/abs-icon.svg" alt="Abstract" className="w-4 h-4 inline-block mr-2" style={{ filter: 'brightness(0)' }} />
            LIVE STREAM
          </a>
          <a
            href="https://www.youtube.com/channel/UCi51fX80necmYq8PVAfDTeQ"
            target="_blank"
            rel="noopener noreferrer"
            className="font-pixel text-[10px] transition-colors"
            style={{ color: 'rgba(0,255,65,0.7)' }}
          >
            YOUTUBE CLIPS ↗
          </a>
        </div>
      </div>
    </section>
  )
}
