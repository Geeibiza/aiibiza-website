import { useEffect } from 'react'

interface Props {
  page: 'privacy' | 'terms' | null
  onClose: () => void
}

export default function LegalModal({ page, onClose }: Props) {
  useEffect(() => {
    if (page) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [page])

  if (!page) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-12 px-6">
      <div className="w-full max-w-3xl bg-black border border-white/10 p-10 md:p-16 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 font-body text-white/40 hover:text-white transition-colors text-xs tracking-widest uppercase"
        >
          Close ✕
        </button>

        {page === 'privacy' && (
          <>
            <p className="font-body text-white/40 text-xs tracking-[0.4em] uppercase mb-4">Legal</p>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-10">PRIVACY POLICY</h2>
            <div className="font-body text-white/60 text-sm leading-relaxed space-y-6">
              <p>Last updated: March 2026</p>
              <div>
                <h3 className="text-white font-display text-xl mb-2">1. Who We Are</h3>
                <p>This website is operated by Gee Van D, based in Ibiza, Spain. Contact: <a href="mailto:gee@fastingibiza.com" className="text-fluor">gee@fastingibiza.com</a></p>
              </div>
              <div>
                <h3 className="text-white font-display text-xl mb-2">2. Data We Collect</h3>
                <p>We collect minimal data. When you contact us via email, we receive your email address and message content. We use cookies solely to remember your cookie consent preference (stored locally in your browser — no data is sent to our servers).</p>
              </div>
              <div>
                <h3 className="text-white font-display text-xl mb-2">3. Third-Party Services</h3>
                <p>This site embeds content from YouTube, Vimeo, and Mixcloud. These services may set their own cookies and collect data according to their own privacy policies. We also use Google Fonts, which may log your IP address.</p>
              </div>
              <div>
                <h3 className="text-white font-display text-xl mb-2">4. Your Rights (GDPR)</h3>
                <p>If you are located in the EU/EEA, you have the right to access, correct, or delete any personal data we hold about you. To exercise these rights, contact us at <a href="mailto:gee@fastingibiza.com" className="text-fluor">gee@fastingibiza.com</a>.</p>
              </div>
              <div>
                <h3 className="text-white font-display text-xl mb-2">5. Cookies</h3>
                <p>We use one functional cookie to store your consent preference. We do not use tracking, advertising, or analytics cookies. You may withdraw consent at any time by clearing your browser's local storage.</p>
              </div>
              <div>
                <h3 className="text-white font-display text-xl mb-2">6. Changes</h3>
                <p>We may update this policy occasionally. The date at the top of this page reflects the latest revision.</p>
              </div>
            </div>
          </>
        )}

        {page === 'terms' && (
          <>
            <p className="font-body text-white/40 text-xs tracking-[0.4em] uppercase mb-4">Legal</p>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-10">TERMS OF USE</h2>
            <div className="font-body text-white/60 text-sm leading-relaxed space-y-6">
              <p>Last updated: March 2026</p>
              <div>
                <h3 className="text-white font-display text-xl mb-2">1. Acceptance</h3>
                <p>By accessing geevand.com you agree to these terms. If you do not agree, please leave the site.</p>
              </div>
              <div>
                <h3 className="text-white font-display text-xl mb-2">2. Intellectual Property</h3>
                <p>All content on this site — including text, images, music, logos, and design — is the property of Gee Van D. No content may be reproduced, distributed, or used without prior written permission.</p>
              </div>
              <div>
                <h3 className="text-white font-display text-xl mb-2">3. External Links</h3>
                <p>This site contains links to third-party websites (Beatport, Mixcloud, YouTube, etc.). We are not responsible for the content or practices of those sites.</p>
              </div>
              <div>
                <h3 className="text-white font-display text-xl mb-2">4. Disclaimer</h3>
                <p>The content on this site is provided for informational purposes only. Health, fasting, and biohacking content is based on personal experience and does not constitute medical advice. Always consult a qualified professional before making health decisions.</p>
              </div>
              <div>
                <h3 className="text-white font-display text-xl mb-2">5. Limitation of Liability</h3>
                <p>Gee Van D shall not be liable for any damages arising from the use of this website or reliance on its content.</p>
              </div>
              <div>
                <h3 className="text-white font-display text-xl mb-2">6. Governing Law</h3>
                <p>These terms are governed by the laws of Spain. Any disputes shall be subject to the exclusive jurisdiction of the courts of Ibiza, Spain.</p>
              </div>
              <div>
                <h3 className="text-white font-display text-xl mb-2">7. Contact</h3>
                <p><a href="mailto:gee@fastingibiza.com" className="text-fluor">gee@fastingibiza.com</a></p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
