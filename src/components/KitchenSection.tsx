import { useEffect, useRef } from 'react'

export default function KitchenSection() {
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
    <section id="kitchen" ref={ref} className="relative bg-black">

      {/* Sticky label */}
      <div className="sticky top-16 z-20 px-6 md:px-10 py-4 pointer-events-none">
        <p className="font-display text-[12vw] md:text-[8vw] leading-none text-white/10 select-none">
          GVD<span className="text-fluor/20">×</span>KITCHEN
        </p>
      </div>

      {/* Video background section */}
      <div className="relative w-full h-screen overflow-hidden -mt-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
          style={{ filter: 'grayscale(30%) contrast(1.1)' }}
        >
          <source src="/videos/chef-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 z-10">
          <div className="max-w-xl">
            <p className="reveal font-body text-white/50 text-xs tracking-[0.4em] uppercase mb-4">
              Master Chef · Private Dining
            </p>
            <h2 className="reveal font-display text-[10vw] leading-none text-white mb-6">
              THE KITCHEN
            </h2>
            <p className="reveal font-body text-white/70 text-lg leading-relaxed mb-8">
              Decades catering to the rich & famous across the world's finest kitchens.
              Pioneering <span className="text-fluor font-script text-2xl">Gourmet Keto</span> —
              where profound healing and world-class cuisine coexist.
            </p>
          </div>
        </div>
      </div>

      {/* 2 Brands */}
      <div className="px-6 md:px-10 py-24">
        <div className="grid md:grid-cols-3 gap-8">

          {/* 2Chefs Ibiza */}
          <div className="reveal group border border-white/10 p-12 hover:border-fluor/50 transition-colors duration-500">
            <div className="h-44 mb-8 flex items-end">
              <img src="/logos/2ci.png" alt="2 Chefs Ibiza" className="max-h-full w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" style={{ mixBlendMode: 'screen' }} />
            </div>
            <h3 className="font-display text-3xl text-white mb-4">2 Chefs Ibiza</h3>
            <p className="font-body text-white/50 leading-relaxed mb-8">
              Private chef services. Wellness gastronomy. Organic, nutrient-dense cuisine designed to complement peak performance.
            </p>
            <a
              href="https://2chefsibiza.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-widest uppercase text-fluor hover:opacity-70 transition-opacity"
            >
              Visit 2chefsibiza.com ↗
            </a>
          </div>

          {/* Fasting Ibiza */}
          <div className="reveal group border border-white/10 p-12 hover:border-fluor/50 transition-colors duration-500" style={{ transitionDelay: '0.1s' }}>
            <div className="h-44 mb-8 flex items-end">
              <img src="/logos/fasting-ibiza.png" alt="Fasting Ibiza" className="max-h-full w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-display text-3xl text-white mb-4">Fasting Ibiza</h3>
            <p className="font-body text-white/50 leading-relaxed mb-8">
              7-day Mediterranean biohacking retreat. 72-hour water fasts. Reverse your biological age.
              Lost 30kg at 59. The body is the ultimate kitchen.
            </p>
            <a
              href="https://fastingibiza.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-widest uppercase text-fluor hover:opacity-70 transition-opacity"
            >
              Visit fastingibiza.com ↗
            </a>
          </div>

          {/* Ibiza Gourmet Club */}
          <div className="reveal group border border-white/10 p-12 hover:border-fluor/50 transition-colors duration-500" style={{ transitionDelay: '0.2s' }}>
            <div className="h-44 mb-8 flex items-end">
              <img src="/logos/igc.png" alt="Ibiza Gourmet Club" className="max-h-full w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" style={{ mixBlendMode: 'screen' }} />
            </div>
            <h3 className="font-display text-3xl text-white mb-4">Ibiza Gourmet Club</h3>
            <p className="font-body text-white/50 leading-relaxed mb-8">
              Ibiza Gourmet Keto. Where world-class cuisine meets ancestral healing.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
