interface Props {
  onLegal: (page: 'privacy' | 'terms') => void
}

export default function Footer({ onLegal }: Props) {
  return (
    <footer id="contact" className="relative bg-black border-t border-white/10">

      {/* Big CTA + Contact Form */}
      <div className="px-6 md:px-10 pt-24 pb-16 border-b border-white/10">
        <p className="font-body text-white/40 text-sm tracking-widest uppercase mb-4">
          Let's build something.
        </p>
        <a
          href="mailto:gee@fastingibiza.com"
          className="font-display text-[10vw] leading-none text-white hover:text-fluor transition-colors duration-500 block mb-16"
        >
          LET'S TALK
          <span className="text-fluor">.</span>
        </a>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xpwzgkqb"
          method="POST"
          className="grid md:grid-cols-2 gap-6 max-w-3xl"
        >
          <div className="flex flex-col gap-2">
            <label className="font-body text-white/30 text-xs tracking-widest uppercase">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="bg-transparent border border-white/10 px-4 py-3 font-body text-white text-sm placeholder:text-white/20 focus:border-fluor focus:outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-body text-white/30 text-xs tracking-widest uppercase">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="bg-transparent border border-white/10 px-4 py-3 font-body text-white text-sm placeholder:text-white/20 focus:border-fluor focus:outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="font-body text-white/30 text-xs tracking-widest uppercase">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="What's on your mind?"
              className="bg-transparent border border-white/10 px-4 py-3 font-body text-white text-sm placeholder:text-white/20 focus:border-fluor focus:outline-none transition-colors resize-none"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="font-body text-xs tracking-widest uppercase bg-fluor text-black px-8 py-4 hover:opacity-80 transition-opacity"
            >
              Send Message →
            </button>
          </div>
        </form>
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
              { label: '06 AM Ibiza Underground Radio', href: 'https://youtube.com/@06amibiza' },
              { label: '2 Chefs Ibiza', href: 'https://2chefsibiza.com' },
              { label: 'Fasting Ibiza', href: 'https://fastingibiza.com' },
              { label: 'Gee Spot Recordings', href: 'https://www.youtube.com/@GeeSpotRecordings' },
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
        <div className="flex items-center gap-4">
          <p className="font-body text-white/20 text-xs">©2026 Gee Van D. All rights reserved.</p>
          <button onClick={() => onLegal('privacy')} className="font-body text-white/20 text-xs hover:text-fluor transition-colors">Privacy</button>
          <button onClick={() => onLegal('terms')} className="font-body text-white/20 text-xs hover:text-fluor transition-colors">Terms</button>
        </div>
        <div className="flex items-center gap-5">
          {/* Instagram */}
          <a href="https://www.instagram.com/geeibiza_ibz/" target="_blank" rel="noopener noreferrer"
            className="text-white/30 hover:text-fluor transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          {/* X / Twitter */}
          <a href="https://x.com/GeeSpot17" target="_blank" rel="noopener noreferrer"
            className="text-white/30 hover:text-fluor transition-colors" aria-label="X">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <p className="font-body text-white/20 text-xs">$BTC · #AbstractChain · #NFT</p>
        </div>
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
