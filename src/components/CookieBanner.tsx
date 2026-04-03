import { useState, useEffect } from 'react'

export default function CookieBanner({ onOpenLegal }: { onOpenLegal: (page: 'privacy' | 'disclaimer') => void }) {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('aiibiza-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1800)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = (all: boolean) => {
    const prefs = {
      necessary: true,
      analytics: all ? true : analytics,
      marketing: all ? true : marketing,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('aiibiza-cookie-consent', JSON.stringify(prefs))
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('aiibiza-cookie-consent', JSON.stringify({
      necessary: true, analytics: false, marketing: false,
      timestamp: new Date().toISOString(),
    }))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'var(--terminal-dark)',
        borderTop: '1px solid var(--ghost-line)',
        boxShadow: '0 -20px 60px rgba(0,0,0,0.6)',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Top accent line */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--phosphor), var(--lime), transparent)' }} />

      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">

          {/* Text */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="label" style={{ color: 'var(--lime)' }}>// Cookie Policy</span>
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--phosphor)', boxShadow: '0 0 6px var(--phosphor)' }}
              />
            </div>

            <p className="font-mono" style={{ fontSize: '12px', color: 'var(--grey)', lineHeight: '1.8', maxWidth: '680px' }}>
              We use cookies to ensure this site functions correctly and to understand how it is used.{' '}
              <span style={{ color: 'var(--white)' }}>Necessary cookies</span> are always active.
              Optional cookies (analytics, marketing) help us improve. You are in control.{' '}
              <button
                onClick={() => onOpenLegal('privacy')}
                className="font-mono underline"
                style={{ color: 'var(--lime)', fontSize: '12px', background: 'none', border: 'none' }}
              >
                Privacy Policy →
              </button>
            </p>

            {/* Expanded preferences */}
            {expanded && (
              <div className="mt-5 grid sm:grid-cols-3 gap-3">
                {[
                  { label: 'Necessary', desc: 'Required for the site to function. Cannot be disabled.', checked: true, locked: true, key: 'necessary' },
                  { label: 'Analytics', desc: 'Help us understand how visitors interact with the site.', checked: analytics, locked: false, key: 'analytics' },
                  { label: 'Marketing', desc: 'Used to track and measure the effectiveness of campaigns.', checked: marketing, locked: false, key: 'marketing' },
                ].map(cat => (
                  <div
                    key={cat.key}
                    className="p-4"
                    style={{ background: 'var(--obsidian)', border: '1px solid var(--ghost-line)' }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs" style={{ color: 'var(--white)', letterSpacing: '0.08em' }}>
                        {cat.label}
                      </span>
                      <button
                        disabled={cat.locked}
                        onClick={() => {
                          if (cat.key === 'analytics') setAnalytics(!analytics)
                          if (cat.key === 'marketing') setMarketing(!marketing)
                        }}
                        style={{
                          width: '36px', height: '20px',
                          borderRadius: '10px',
                          background: cat.checked ? 'var(--lime)' : 'var(--ghost-line)',
                          border: 'none',
                          position: 'relative',
                          transition: 'background 0.2s',
                          opacity: cat.locked ? 0.5 : 1,
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          top: '3px',
                          left: cat.checked ? '19px' : '3px',
                          width: '14px', height: '14px',
                          borderRadius: '50%',
                          background: cat.locked ? 'var(--grey)' : (cat.checked ? 'var(--void)' : 'var(--grey)'),
                          transition: 'left 0.2s',
                          display: 'block',
                        }} />
                      </button>
                    </div>
                    <p className="font-mono" style={{ fontSize: '10px', color: 'var(--muted)', lineHeight: '1.6' }}>
                      {cat.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[180px]">
            <button onClick={() => accept(true)} className="btn-primary" style={{ fontSize: '10px', padding: '12px 24px', textAlign: 'center' }}>
              &gt; Accept All
            </button>
            <button
              onClick={() => expanded ? accept(false) : decline()}
              className="btn-ghost"
              style={{ fontSize: '10px', padding: '12px 24px', textAlign: 'center' }}
            >
              {expanded ? '> Save Preferences' : '> Reject Optional'}
            </button>
            <button
              onClick={() => setExpanded(!expanded)}
              className="font-mono text-center"
              style={{
                fontSize: '10px', color: 'var(--muted)', background: 'none', border: 'none',
                letterSpacing: '0.08em', textTransform: 'uppercase', paddingTop: '4px',
              }}
            >
              {expanded ? '↑ Less options' : '↓ Manage preferences'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
