import { useEffect, useState } from 'react'

const links = [
  { label: 'Arcade', href: '#arcade' },
  { label: 'Music', href: '#music' },
  { label: 'Web3', href: '#web3' },
  { label: 'Kitchen', href: '#kitchen' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-500 h-16 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href="#" className="font-display text-xl tracking-widest text-white hover:text-fluor transition-colors duration-300">
        GVD
      </a>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map(l => (
          <a key={l.label} href={l.href} className="nav-link text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors">
            <span>{l.label}</span>
            <span>{l.label}</span>
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="#contact"
        className="font-script text-2xl text-fluor hover:opacity-70 transition-opacity"
      >
        Let's talk
      </a>
    </header>
  )
}
