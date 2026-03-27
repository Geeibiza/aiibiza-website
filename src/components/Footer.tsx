export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black border-t border-white/10">

      {/* Big CTA */}
      <div className="px-6 md:px-10 pt-24 pb-16 border-b border-white/10">
        <p className="font-body text-white/40 text-sm tracking-widest uppercase mb-4">
          Let's build something.
        </p>
        <a
          href="mailto:gee@fastingibiza.com"
          className="font-display text-[10vw] leading-none text-white hover:text-fluor transition-colors duration-500 block"
        >
          LET'S TALK
          <span className="text-fluor">.</span>
        </a>
      </div>

      {/* Footer nav */}
      <div className="px-6 md:px-10 py-12 grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-2xl text-white mb-6">GEE VAN D</p>
          <p className="font-body text-white/40 text-sm leading-relaxed">
            Web3. Music. Kitchen. Ibiza.<br />
            25 years on the island.<br />
            No filter.
          </p>
        </div>

        <div>
          <p className="font-body text-white/30 text-xs tracking-widest uppercase mb-4">Ventures</p>
          <ul className="space-y-3">
            {[
              { label: '06 AM Ibiza Underground Radio', href: 'https://06amibiza.com' },
              { label: '2 Chefs Ibiza', href: 'https://2chefsibiza.com' },
              { label: 'Fasting Ibiza', href: 'https://fastingibiza.com' },
              { label: 'Gee Spot Recordings', href: '#' },
            ].map(l => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer"
                  className="font-body text-white/50 text-sm hover:text-fluor transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-white/30 text-xs tracking-widest uppercase mb-4">Socials</p>
          <ul className="space-y-3">
            {[
              { label: '@GeeSpot17 on X', href: 'https://x.com/GeeSpot17' },
              { label: 'Resident Advisor', href: 'https://ra.co/dj/geevand' },
              { label: 'Linktree', href: 'https://linktr.ee/GeeVanD' },
              { label: 'YouTube — 06 AM', href: 'https://youtube.com/@06amibiza' },
            ].map(l => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer"
                  className="font-body text-white/50 text-sm hover:text-fluor transition-colors">
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 md:px-10 py-6 border-t border-white/5 flex justify-between items-center">
        <p className="font-body text-white/20 text-xs">©2026 Gee Van D. Ibiza.</p>
        <p className="font-body text-white/20 text-xs">$BTC · #AbstractChain · #NFT</p>
      </div>

      {/* Back to top — mirrors hero scroll indicator */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-6 right-10 flex flex-col items-center gap-2 group"
        aria-label="Back to top"
      >
        <div className="w-px h-12 bg-gradient-to-t from-fluor to-transparent" />
        <span className="text-white/30 group-hover:text-fluor transition-colors text-xs tracking-widest uppercase -rotate-90 origin-center">Top</span>
      </button>
    </footer>
  )
}
