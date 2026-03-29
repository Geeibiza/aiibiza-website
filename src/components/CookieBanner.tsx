import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setTimeout(() => setVisible(true), 1500)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 md:px-10 py-6 bg-black/95 border-t border-white/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <p className="font-body text-white/80 text-sm leading-relaxed">
            This site uses cookies to improve your experience and analyse traffic.
            By continuing you agree to our use of cookies. See our{' '}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-legal', { detail: 'privacy' }))}
              className="text-fluor hover:opacity-70 transition-opacity underline underline-offset-2"
            >
              Privacy Policy
            </button>
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={decline}
            className="font-body text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="font-body text-xs tracking-widest uppercase bg-fluor text-black px-6 py-3 hover:opacity-80 transition-opacity"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
