import { useEffect, useRef, useState } from 'react'


export default function DJSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="music" ref={sectionRef} className="relative bg-black">

      {/* Sticky label */}
      <div className="sticky top-16 z-20 px-6 md:px-10 py-4 pointer-events-none">
        <p className="font-display text-[16vw] md:text-[11vw] leading-none text-white/10 select-none">
          GVD<span className="text-fluor/20">×</span>MUSIC
        </p>
      </div>

      {/* Full-bleed YouTube background */}
      <div className="relative w-full h-screen overflow-hidden -mt-24">
        <div className="absolute inset-0 scale-[1.3]">
          <iframe
            src="https://www.youtube.com/embed/XEdtlm8sOsk?autoplay=1&mute=1&loop=1&playlist=XEdtlm8sOsk&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full border-0"
            style={{ pointerEvents: 'none' }}
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />

        {/* 06 AM Radio — small looping screen top right */}
        <div className="absolute top-8 right-6 md:right-10 z-20 w-[180px] md:w-[240px]">
          <div className="relative overflow-hidden" style={{
            border: '1px solid rgba(200,255,0,0.4)',
            boxShadow: '0 0 20px rgba(200,255,0,0.1)',
          }}>
            <div className="aspect-video">
              <iframe
                src="https://player.vimeo.com/video/117012642?autoplay=1&loop=1&muted=1&background=1&controls=0"
                allow="autoplay; fullscreen"
                className="w-full h-full border-0"
                title="06 AM Ibiza Underground Radio"
              />
            </div>
          </div>
          <p className="font-body text-[10px] tracking-widest uppercase mt-2" style={{ color: 'rgba(200,255,0,0.5)' }}>
            06 AM · Ibiza Underground
          </p>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-16 z-10">
          <div className="reveal">
            <p className="font-body text-white/50 text-xs tracking-[0.4em] uppercase mb-4">
              DJ · Producer · Record Labels
            </p>
            <h2 className="font-display text-[10vw] leading-none text-white mb-6">
              THE UNDERGROUND
            </h2>
            <p className="font-body text-white/70 max-w-lg text-lg leading-relaxed mb-8">
              First turntable at age 6. Acid house in Holland in the 80s.
              Ibiza residencies. Three record labels.
              <span className="text-fluor"> 06 AM Ibiza Underground Radio.</span>
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://06amibiza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm tracking-widest uppercase border border-fluor text-fluor px-6 py-3 hover:bg-fluor hover:text-black transition-all duration-300"
              >
                06 AM Radio
              </a>
              <a
                href="https://www.beatport.com/artist/gee-van-d/220124"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors"
              >
                Beatport ↗
              </a>
            </div>
          </div>
        </div>

        {/* Sound toggle */}
        <button
          onClick={() => setMuted(!muted)}
          className="absolute top-8 right-10 z-20 font-body text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors flex items-center gap-2"
        >
          <span>Sound:</span>
          <span className={muted ? 'text-white/30' : 'text-fluor'}>{muted ? 'Off' : 'On'}</span>
        </button>
      </div>

      {/* Record labels */}
      <div className="px-6 md:px-10 py-24 grid md:grid-cols-3 gap-px bg-white/5">
        {[
          { name: 'Gee Spot Recordings', desc: 'The flagship — underground electronic music for the world' },
          { name: 'Black Spot Recordings', desc: 'Dark, raw, unfiltered sound for the dedicated' },
          { name: 'White Spot Recordings', desc: 'A platform for young producers to find their voice' },
        ].map(label => (
          <div key={label.name} className="reveal bg-black px-8 py-12 hover:bg-white/5 transition-colors duration-300">
            <div className="w-8 h-px bg-fluor mb-6" />
            <h3 className="font-display text-2xl text-white mb-3">{label.name}</h3>
            <p className="font-body text-white/40 text-sm leading-relaxed">{label.desc}</p>
          </div>
        ))}
      </div>

      {/* Podcast section */}
      <div className="px-6 md:px-10 pb-32">
        <div className="reveal mb-12 grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="font-body text-white/40 text-xs tracking-[0.4em] uppercase mb-4">Listen now</p>
            <h3 className="font-display text-5xl md:text-7xl text-white leading-none">GEE VAN D PRESENTS<br/>THE IBIZA DEEP INTO<br/>DA UNDERGROUND</h3>
          </div>
          <div>
            <p className="font-body text-white/40 text-sm tracking-widest uppercase mb-6">Mix · Nov. 2012</p>
            <p className="font-body text-white/50 text-base leading-relaxed">
              Deep, dark & dirty. Three hours of lively, rhythmic hypnotic dance grooves — the kind that made DC10's outside terrace one big family at dawn. Groovy techno, tech-house and deep underground sounds drawn straight from the vinyl roots of Ibiza. This is the real underground.
            </p>
          </div>
        </div>

        {/* Mixcloud embed — actually plays */}
        <div className="reveal w-full overflow-hidden border border-white/10">
          <iframe
            title="Gee Van D Mix"
            width="100%"
            height="120"
            src="https://www.mixcloud.com/widget/iframe/?feed=%2Fdjthegee%2Fgee-van-d-presents-the-ibiza-deep-into-da-underground-mix-nov-2012%2F&hide_cover=1&mini=1&autoplay=0&dark=1"
            frameBorder="0"
          />
        </div>

        <div className="reveal mt-6 flex items-center gap-6">
          <a
            href="https://www.mixcloud.com/djthegee/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-white/40 hover:text-fluor transition-colors"
          >
            More on Mixcloud ↗
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/id489919252"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-white/40 hover:text-fluor transition-colors"
          >
            Apple Podcasts ↗
          </a>
        </div>
      </div>
    </section>
  )
}
