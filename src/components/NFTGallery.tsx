import { useEffect, useRef, useState } from 'react'

const nfts = [
  { src: '/images/nft-clonex.jpg', title: 'CloneX', collection: 'RTFKT x Takashi Murakami' },
  { src: '/images/nft-1percent.png', title: '1% Limited Edition', collection: 'Retardio Collection · Abstract Chain' },
  { src: '/images/nft-3.png', title: 'BitApe #7081', collection: 'Bitcoin Ordinals Collection' },
]

export default function NFTGallery() {
  const [active, setActive] = useState(0)
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
    <div ref={ref} className="py-24 px-6 md:px-10 bg-black">
      <p className="reveal font-body text-white/40 text-xs tracking-[0.4em] uppercase mb-4">NFT Gallery</p>
      <h3 className="reveal font-display text-5xl md:text-7xl text-white mb-16">THE COLLECTION</h3>

      <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {nfts.map((nft, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className="cursor-pointer group"
          >
            <div
              className="overflow-hidden transition-all duration-500"
              style={{
                border: i === active ? '1px solid rgba(200,255,0,0.6)' : '1px solid rgba(255,255,255,0.08)',
                boxShadow: i === active ? '0 0 24px rgba(200,255,0,0.15)' : 'none',
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={nft.src}
                  alt={nft.title}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                    i === active ? 'opacity-100' : 'opacity-40 group-hover:opacity-60'
                  }`}
                  draggable={false}
                />
              </div>
            </div>
            <div className="mt-3">
              <p className={`font-display text-sm transition-colors duration-300 ${i === active ? 'text-fluor' : 'text-white/40'}`}>
                {nft.title}
              </p>
              <p className="font-body text-white/30 text-xs mt-0.5">{nft.collection}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="reveal flex gap-2 mt-10">
        {nfts.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-px transition-all duration-300 ${i === active ? 'w-12 bg-fluor' : 'w-4 bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  )
}
