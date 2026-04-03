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
              Operating from Ibiza. Deployed everywhere.
            </p>
            <div className="terminal-block mt-6" style={{ padding: '10px 14px', fontSize: '10px' }}>
              <div>status: <span style={{ color: 'var(--lime)' }}>OPERATIONAL</span></div>
              <div>systems: <span style={{ color: 'var(--phosphor)' }}>ALL RUNNING</span></div>
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
              <div style={{ color: 'var(--white)' }}>Ibiza, Balearic Islands</div>
              <div>Spain / European Union</div>
              <div style={{ color: 'var(--muted)' }}>Operating globally</div>
            </div>
            <div className="mt-8">
              <a href="#contact" className="btn-primary" style={{ fontSize: '10px', padding: '10px 20px' }}>
                &gt; Book a Call
              </a>
            </div>
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
              AI Ibiza is operated from Ibiza, Balearic Islands, Spain.
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
