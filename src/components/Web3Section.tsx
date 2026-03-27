import { useEffect, useRef } from 'react'
import NFTGallery from './NFTGallery'

const web3Items = [
  { label: 'Abstract Chain', tag: '@AbstractChain', desc: 'Active community member & builder on Abstract L2' },
  { label: 'NFT Curator', tag: 'OnCyber Gallery', desc: 'Threshold NFT Gallery by GVD — curating digital art since the early days' },
  { label: 'Bitcoin Ordinals', tag: 'NodeMonkes · BitApes', desc: 'Early adopter. Inscriptions launched Jan. 2023 — in from the start. Holder of NodeMonkes & BitApes.' },
  { label: 'Virtual Real Estate', tag: 'Metaverse', desc: 'Significant virtual land portfolio. Offering clients unique digital showcase opportunities.' },
  { label: 'CloneX', tag: 'RTFKT', desc: 'OG NFT holder. Part of the culture before it was mainstream.' },
  { label: '$BTC · #DeFi', tag: 'Since 2009', desc: 'Not a visitor. A resident of the crypto world.' },
]

export default function Web3Section() {
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
    <section id="web3" ref={ref} className="bg-black">

      {/* Sticky label */}
      <div className="sticky top-16 z-20 px-6 md:px-10 py-4 pointer-events-none">
        <p className="font-display text-[16vw] md:text-[11vw] leading-none text-white/10 select-none">
          GVD<span className="text-fluor/20">×</span>CHAIN
        </p>
      </div>

      {/* Abstract Chain Banner — fullscreen with text overlay */}
      <div className="relative w-full h-screen overflow-hidden -mt-24">
        <img
          src="/images/abstract-banner.jpg"
          alt="Abstract Chain"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-16 z-10">
          <p className="reveal font-body text-white/50 text-xs tracking-[0.4em] uppercase mb-4">
            Web3 · NFT · Crypto · AI
          </p>
          <h2 className="reveal font-display text-[10vw] leading-none text-white">
            THE CHAIN
          </h2>
          <p className="reveal font-display text-[8vw] leading-none">
            <span className="text-fluor font-script normal-case">since 2009.</span>
          </p>
        </div>
      </div>

      <div className="px-6 md:px-10 py-24">
        {/* Items list — Vasava services style */}
        <div className="border-t border-white/10">
          {web3Items.map((item, i) => (
            <div
              key={item.label}
              className="reveal group border-b border-white/10 py-8 flex items-start justify-between gap-8 hover:bg-white/[0.02] transition-colors duration-300 px-4 -mx-4"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-start gap-8">
                <span className="font-body text-white/20 text-sm mt-1 w-6">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-white group-hover:text-fluor transition-colors duration-300">
                    {item.label}
                  </h3>
                  <p className="font-body text-white/40 text-sm mt-2">{item.desc}</p>
                </div>
              </div>
              <span className="font-body text-white/30 text-xs tracking-widest uppercase mt-2 shrink-0">
                {item.tag}
              </span>
            </div>
          ))}
        </div>

        {/* PDF — What is an NFT */}
        <div className="reveal mt-16 border border-white/10 p-8 flex items-center justify-between hover:border-fluor/40 transition-colors duration-300 group">
          <div>
            <p className="font-body text-white/40 text-xs tracking-widest uppercase mb-2">Free Guide</p>
            <h4 className="font-display text-2xl text-white group-hover:text-fluor transition-colors">What is an NFT?</h4>
            <p className="font-body text-white/40 text-sm mt-1">A guide by Gee Van D — read or download</p>
          </div>
          <a
            href="/what-is-nft.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase border border-fluor text-fluor px-6 py-3 hover:bg-fluor hover:text-black transition-all duration-300 shrink-0"
          >
            Open PDF ↗
          </a>
        </div>

        {/* Twitter + Linktree CTA */}
        <div className="reveal mt-8 flex items-center gap-6">
          <a
            href="https://x.com/GeeSpot17"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm tracking-widest uppercase border border-fluor text-fluor px-6 py-3 hover:bg-fluor hover:text-black transition-all duration-300"
          >
            @GeeSpot17 on X
          </a>
          <a
            href="https://linktr.ee/GeeVanD"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm tracking-widest uppercase text-white/40 hover:text-white transition-colors"
          >
            linktr.ee/GeeVanD ↗
          </a>
        </div>
      </div>

      {/* NFT Gallery Carousel */}
      <NFTGallery />
    </section>
  )
}
