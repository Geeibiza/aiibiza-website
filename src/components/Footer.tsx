type LegalPage = 'privacy' | 'disclaimer'

export default function Footer({ onOpenLegal }: { onOpenLegal: (page: LegalPage) => void }) {
  const year = new Date().getFullYear()

  return (
    <footer
      className="pt-16"
      style={{
        borderTop: '1px solid var(--ghost-line)',
        background: 'var(--terminal-dark)',
      }}
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="font-mono text-sm tracking-widest uppercase mb-4" style={{ letterSpacing: '0.2em', color: 'var(--white)' }}>
              AI<span style={{ color: 'var(--lime)' }}> IBIZA</span>
            </div>
            <p className="font-mono" style={{ color: 'var(--muted)', lineHeight: '1.8', fontSize: '11px' }}>
              AI consulting and automation infrastructure.<br />
              Private data centre. Worldwide clients.
            </p>
            <div className="terminal-block mt-6" style={{ padding: '10px 14px', fontSize: '10px' }}>
              <div>status: <span style={{ color: 'var(--lime)' }}>OPERATIONAL</span></div>
              <div>systems: <span style={{ color: 'var(--phosphor)' }}>ALL RUNNING</span></div>
              <div>data_centre: <span style={{ color: 'var(--white)' }}>Thailand / private</span></div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="label mb-6" style={{ color: 'var(--muted)', fontSize: '10px' }}>Navigation</div>
            <div className="space-y-3">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Masterclasses', href: '#masterclasses' },
                { label: 'OpenClaw Systems', href: '#openclaw' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-mono text-xs transition-colors duration-200"
                  style={{ color: 'var(--grey)', fontSize: '12px' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--lime)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--grey)')}
                >
                  &gt; {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Location + CTA */}
          <div>
            <div className="label mb-6" style={{ color: 'var(--muted)', fontSize: '10px' }}>Location</div>
            <div className="font-mono space-y-1.5" style={{ fontSize: '12px', color: 'var(--grey)', lineHeight: '1.9' }}>
              <div style={{ color: 'var(--white)' }}>Private Data Centre</div>
              <div>Thailand</div>
              <div style={{ color: 'var(--muted)' }}>Clients worldwide — law firms, operators, enterprises</div>
            </div>

            {/* Social links — Pikachu */}
            <div className="mt-8 mb-6">
              <div className="label mb-4" style={{ color: 'var(--muted)', fontSize: '10px' }}>Follow</div>
              <div className="flex items-center gap-4">
                {/* Instagram */}
                <a href="https://instagram.com/pikachu0x0x" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--lime)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  title="Instagram @pikachu0x0x"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                {/* TikTok */}
                <a href="https://tiktok.com/@pikachu0x0x" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--lime)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  title="TikTok @pikachu0x0x"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://youtube.com/@pikachu0x0x" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--lime)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  title="YouTube @pikachu0x0x"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              <div className="font-mono mt-2" style={{ fontSize: '10px', color: 'var(--muted)' }}>@pikachu0x0x</div>
            </div>

            <a href="#contact" className="btn-primary" style={{ fontSize: '10px', padding: '10px 20px' }}>
              &gt; Book a Call
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--ghost-line)' }} />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

          {/* Copyright */}
          <div className="font-mono" style={{ fontSize: '10px', color: 'var(--muted)', lineHeight: '1.8' }}>
            <p>© {year} AI Ibiza. All rights reserved.</p>
            <p style={{ marginTop: '2px' }}>
              AI Ibiza — Private Data Centre, Thailand. Worldwide clients.
              All services subject to our{' '}
              <button
                onClick={() => onOpenLegal('disclaimer')}
                className="font-mono underline"
                style={{ color: 'var(--grey)', background: 'none', border: 'none', fontSize: '10px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--lime)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--grey)')}
              >
                Disclaimer
              </button>
              {' '}and{' '}
              <button
                onClick={() => onOpenLegal('privacy')}
                className="font-mono underline"
                style={{ color: 'var(--grey)', background: 'none', border: 'none', fontSize: '10px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--lime)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--grey)')}
              >
                Privacy Policy
              </button>
              .
            </p>
          </div>

          {/* Legal links + domain */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="font-mono"
              style={{ fontSize: '10px', color: 'var(--muted)', background: 'none', border: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--lime)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              Disclaimer
            </button>
            <span style={{ color: 'var(--ghost-line)' }}>|</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="font-mono"
              style={{ fontSize: '10px', color: 'var(--muted)', background: 'none', border: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--lime)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              Privacy & Cookies
            </button>
            <span style={{ color: 'var(--ghost-line)' }}>|</span>
            <p className="font-mono" style={{ fontSize: '10px', color: 'var(--muted)' }}>
              <span style={{ color: 'var(--phosphor)' }}>&gt;</span> aiibiza.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
