import { useEffect, useState } from 'react'

export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 80)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  const navLinks = ['Services', 'Masterclasses', 'About', 'Contact']

  return (
    <>
      <nav
        className="fixed left-0 right-0 z-50 transition-transform duration-500"
        style={{
          top: '1px',
          transform: hidden ? 'translateY(-110%)' : 'translateY(0)',
          background: 'rgba(10,10,15,0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--ghost-line)',
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-mono text-sm tracking-widest uppercase" style={{ color: 'var(--white)', letterSpacing: '0.2em' }}>
            AI<span style={{ color: 'var(--lime)' }}> IBIZA</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link font-mono text-xs tracking-widest uppercase"
                style={{ color: 'var(--grey)' }}
              >
                <span>{link}</span>
                <span style={{ color: 'var(--lime)' }}>{link}</span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href="#contact" className="btn-primary hidden md:inline-block" style={{ fontSize: '10px', padding: '10px 24px' }}>
            &gt; Book a Call
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-6 h-px transition-all" style={{ background: menuOpen ? 'var(--lime)' : 'var(--white)', transform: menuOpen ? 'rotate(45deg) translate(2px, 2px)' : '' }} />
            <span className="block w-6 h-px transition-all" style={{ background: 'var(--white)', opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-px transition-all" style={{ background: menuOpen ? 'var(--lime)' : 'var(--white)', transform: menuOpen ? 'rotate(-45deg) translate(2px, -2px)' : '' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center px-10 transition-all duration-500 md:hidden"
        style={{
          background: 'var(--void)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-display text-6xl py-4"
            style={{
              color: 'var(--white)',
              borderBottom: '1px solid var(--ghost-line)',
              transform: menuOpen ? 'translateX(0)' : 'translateX(-30px)',
              opacity: menuOpen ? 1 : 0,
              transition: `all 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s`,
            }}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  )
}
