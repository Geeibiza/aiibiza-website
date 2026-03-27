import { useEffect, useRef } from 'react'

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-black px-6 md:px-10 py-32">
      <div className="max-w-5xl mx-auto">
        <p className="reveal font-body text-white/40 text-xs tracking-[0.4em] uppercase mb-8">
          The Man
        </p>
        <h2 className="reveal font-display text-[8vw] md:text-[5vw] leading-none text-white mb-8">
          Born in Haarlem.<br />
          Built in <span className="text-fluor font-script normal-case text-[9vw] md:text-[6vw]">Ibiza.</span>
        </h2>
        <div className="reveal grid md:grid-cols-2 gap-12 mt-16">
          <p className="font-body text-white/60 text-lg leading-relaxed">
            First turntable at age 6. First computer at 15.
            On the network before it had a name.
            Underground raves in Holland in the 80s.
            Ibiza residencies. Three record labels.
            Bitcoin since 2009. NFTs before the hype.<br />
            <span className="text-fluor whitespace-nowrap">One life. No genre. No filter.</span>
          </p>
          <p className="font-body text-white/40 leading-relaxed">
            Master Chef to the rich & famous — who now teaches the power of not eating.
            Lost 30kg at 59 through fasting and keto.
            72-hour water fasts. Cold exposure. Red light. HRV tracking.
            <span className="text-white/60"> Biohacking the body the same way he hacks everything else — obsessively.</span>
            <br /><br />
            Builds virtual galleries in the metaverse.
            Restores arcade machines by hand.
            Plays Apex at 2AM.
            <br /><br />
            The contradiction <em>is</em> the point.
          </p>
        </div>
      </div>
    </section>
  )
}
