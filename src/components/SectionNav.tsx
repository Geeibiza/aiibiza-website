import { useEffect, useState } from 'react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'openclaw', label: 'OpenClaw' },
  { id: 'lawfirms', label: 'Law Firms' },
  { id: 'gestorias', label: 'Gestorías' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function SectionNav() {
  const [active, setActive] = useState('home')
  const [visible, setVisible] = useState(false)
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    const onScroll = () => {
      const y = window.scrollY
      setVisible(y > 400)
      setShowBackTop(y > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* Sidebar dot navigation — right side */}
      <div
        style={{
          position: 'fixed',
          right: '28px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 90,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: visible ? 'auto' : 'none',
        }}
        className="hidden lg:flex"
      >
        {sections.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            title={s.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              flexDirection: 'row-reverse',
            }}
            className="group"
          >
            {/* Label — appears on hover */}
            <span
              className="font-mono section-nav-label"
              style={{
                fontSize: '9px',
                color: active === s.id ? 'var(--lime)' : 'var(--muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                opacity: 0,
                transform: 'translateX(8px)',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}
            >
              {s.label}
            </span>
            {/* Dot */}
            <span
              style={{
                display: 'block',
                width: active === s.id ? '10px' : '5px',
                height: active === s.id ? '10px' : '5px',
                borderRadius: '50%',
                background: active === s.id ? 'var(--lime)' : 'var(--muted)',
                boxShadow: active === s.id ? '0 0 10px rgba(174,255,0,0.6)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                flexShrink: 0,
              }}
            />
          </a>
        ))}
      </div>

      {/* Back to top button — bottom left */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '28px',
          left: '28px',
          zIndex: 90,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'var(--terminal-dark)',
          border: '1px solid var(--ghost-line)',
          color: 'var(--lime)',
          cursor: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          opacity: showBackTop ? 1 : 0,
          transform: showBackTop ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
          pointerEvents: showBackTop ? 'auto' : 'none',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        }}
        title="Back to top"
      >
        ↑
      </button>

      <style>{`
        .group:hover .section-nav-label {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </>
  )
}
