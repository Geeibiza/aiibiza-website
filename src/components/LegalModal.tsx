import { useEffect } from 'react'

type Page = 'privacy' | 'disclaimer' | null

const LEGAL_CONTENT = {
  disclaimer: {
    title: 'Disclaimer',
    sections: [
      {
        heading: 'General Information',
        body: `The information provided on this website (aiibiza.com) is for general informational and commercial purposes only. AI Ibiza is a trading name operated from Ibiza, Balearic Islands, Spain. All content on this site is provided in good faith and represents our services and capabilities as accurately as possible at the time of publication.`,
      },
      {
        heading: 'No Guarantee of Results',
        body: `AI consulting, automation systems, and digital services involve complex technical and strategic variables. While AI Ibiza brings extensive experience and operational infrastructure to every engagement, we make no guarantee of specific outcomes, financial results, or performance metrics. Results depend on client-side factors, market conditions, and implementation quality that are beyond our sole control.`,
      },
      {
        heading: 'AI Systems & Automation',
        body: `AI and automation systems deployed by AI Ibiza are configured specifically for each client. These systems involve emerging technologies that may behave unexpectedly under certain conditions. Clients are advised to maintain appropriate oversight of any automated system and to implement their own risk management practices. AI Ibiza is not liable for losses arising from autonomous system behaviour once a project has been formally handed over and accepted by the client.`,
      },
      {
        heading: 'Third-Party Services',
        body: `AI Ibiza may recommend or integrate third-party tools, platforms, APIs, and services as part of a client engagement. We are not responsible for the availability, performance, security, or pricing changes of third-party services. Any reference to a third-party tool on this site does not constitute an endorsement or guarantee of that service.`,
      },
      {
        heading: 'External Links',
        body: `This website may contain links to external websites. AI Ibiza has no control over the content or practices of external sites and accepts no responsibility for them. The inclusion of any link does not imply endorsement.`,
      },
      {
        heading: 'Intellectual Property',
        body: `All content on this website — including text, design, graphics, code, and the "OpenClaw" system architecture — is the intellectual property of AI Ibiza unless otherwise stated. Reproduction, distribution, or use of any content without prior written permission is prohibited. The term "OpenClaw" is a proprietary system name and may not be used to describe third-party products or services.`,
      },
      {
        heading: 'Limitation of Liability',
        body: `To the fullest extent permitted by applicable law, AI Ibiza shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from the use of this website or any service provided by AI Ibiza.`,
      },
      {
        heading: 'Governing Law',
        body: `These terms and any disputes arising from your use of this website are governed by the laws of Spain and the European Union. Any legal proceedings shall be subject to the jurisdiction of the courts of the Balearic Islands, Spain.`,
      },
      {
        heading: 'Changes to This Disclaimer',
        body: `AI Ibiza reserves the right to update or modify this disclaimer at any time without prior notice. Continued use of this website following any changes constitutes your acceptance of the updated disclaimer. Last reviewed: April 2026.`,
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy & Cookie Policy',
    sections: [
      {
        heading: 'Who We Are',
        body: `AI Ibiza ("we", "us", "our") operates the website aiibiza.com. We are based in Ibiza, Balearic Islands, Spain, and operate under European Union data protection law, including the General Data Protection Regulation (GDPR) and Spain's Organic Law on Data Protection (LOPDGDD). For data-related enquiries, contact us via the form on this website.`,
      },
      {
        heading: 'What Data We Collect',
        body: `We may collect the following personal data when you interact with this website:\n\n• Contact information you voluntarily submit (name, email address, message content) via our contact form\n• Technical data collected automatically: IP address, browser type and version, device type, pages visited, time and duration of visit\n• Cookie data as described in the Cookie Policy section below\n\nWe do not collect sensitive personal data (health, financial, or biometric information) through this website.`,
      },
      {
        heading: 'How We Use Your Data',
        body: `We use your data for the following purposes:\n\n• To respond to enquiries and service requests submitted through the contact form (legal basis: legitimate interest / contractual necessity)\n• To understand how our website is used and improve it (legal basis: legitimate interest, where consent is given for analytics cookies)\n• To comply with legal obligations\n\nWe do not sell, rent, or share your personal data with third parties for their own marketing purposes.`,
      },
      {
        heading: 'Data Retention',
        body: `Contact enquiry data is retained for a maximum of 24 months from the date of last contact, after which it is permanently deleted. Website analytics data is retained in aggregated, anonymised form. You may request deletion of your data at any time.`,
      },
      {
        heading: 'Cookie Policy',
        body: `We use cookies — small text files stored on your device — to ensure this website functions correctly and to understand how it is used.\n\nNecessary cookies: These are essential for the website to function. They include session management and cookie consent preferences. These cannot be disabled.\n\nAnalytics cookies: If you accept, we may use analytics tools to understand visitor behaviour in aggregate. No personally identifiable information is used for analytics.\n\nMarketing cookies: If you accept, these may be used to measure the effectiveness of marketing campaigns. We do not currently run paid advertising campaigns but this may change.\n\nYou may withdraw your cookie consent at any time by clearing your browser's local storage or cookies for this domain. Your preferences will reset and you will be asked again on your next visit.`,
      },
      {
        heading: 'Your Rights Under GDPR',
        body: `As a resident of the EU/EEA, you have the following rights regarding your personal data:\n\n• Right of access — you may request a copy of the data we hold about you\n• Right to rectification — you may request correction of inaccurate data\n• Right to erasure — you may request deletion of your data ("right to be forgotten")\n• Right to restriction — you may request that we limit processing of your data\n• Right to data portability — you may request your data in a structured, machine-readable format\n• Right to object — you may object to processing based on legitimate interests\n• Right to withdraw consent — where processing is based on consent, you may withdraw it at any time\n\nTo exercise any of these rights, contact us through the form on this website. We will respond within 30 days.`,
      },
      {
        heading: 'Data Security',
        body: `We implement appropriate technical and organisational measures to protect your personal data. This website uses HTTPS encryption for all data in transit. Contact form submissions are transmitted securely. We do not store payment information on this website.`,
      },
      {
        heading: 'Third-Party Processors',
        body: `We may use third-party service providers to operate this website (hosting, email). These providers act as data processors under GDPR and are bound by data processing agreements. We do not transfer your data outside the European Economic Area without appropriate safeguards.`,
      },
      {
        heading: 'Changes to This Policy',
        body: `We may update this Privacy Policy from time to time. Material changes will be indicated by the "Last reviewed" date below. Continued use of the site following an update constitutes acceptance of the revised policy.\n\nLast reviewed: April 2026.`,
      },
    ],
  },
}

export default function LegalModal({ page, onClose }: { page: Page; onClose: () => void }) {
  useEffect(() => {
    if (page) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [page])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!page) return null

  const content = LEGAL_CONTENT[page]

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(10,10,15,0.92)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: '40px 20px',
        overflowY: 'auto',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        style={{
          width: '100%', maxWidth: '780px',
          background: 'var(--terminal-dark)',
          border: '1px solid var(--ghost-line)',
          position: 'relative',
        }}
      >
        {/* Top accent */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--phosphor), var(--lime), transparent)' }} />

        {/* Header */}
        <div
          className="flex items-center justify-between px-8 py-6"
          style={{ borderBottom: '1px solid var(--ghost-line)' }}
        >
          <div>
            <div className="label mb-2" style={{ color: 'var(--lime)', fontSize: '10px' }}>
              // Legal
            </div>
            <h2 className="font-display" style={{ fontSize: '36px', color: 'var(--white)' }}>
              {content.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="font-mono"
            style={{
              color: 'var(--grey)', background: 'none', border: '1px solid var(--ghost-line)',
              width: '40px', height: '40px', fontSize: '16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.2s, color 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--lime)'; (e.currentTarget as HTMLElement).style.color = 'var(--lime)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--ghost-line)'; (e.currentTarget as HTMLElement).style.color = 'var(--grey)' }}
          >
            ✕
          </button>
        </div>

        {/* Terminal bar */}
        <div className="px-8 py-3" style={{ borderBottom: '1px solid var(--ghost-line)', background: 'var(--obsidian)' }}>
          <span className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>
            $ cat /legal/{page}.txt
          </span>
          <span className="cursor-blink ml-1" style={{ color: 'var(--phosphor)', fontSize: '11px' }}>█</span>
        </div>

        {/* Content */}
        <div className="px-8 py-8 space-y-8" style={{ maxHeight: '65vh', overflowY: 'auto' }}>
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h3
                className="font-mono mb-3"
                style={{ fontSize: '11px', color: 'var(--lime)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
              >
                &gt; {section.heading}
              </h3>
              <div
                className="font-mono"
                style={{ fontSize: '12px', color: 'var(--grey)', lineHeight: '1.9' }}
              >
                {section.body.split('\n').map((line, i) => (
                  <p key={i} style={{ marginBottom: line === '' ? '8px' : '0' }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--ghost-line)', background: 'var(--obsidian)' }}
        >
          <p className="font-mono" style={{ fontSize: '10px', color: 'var(--muted)' }}>
            © {new Date().getFullYear()} AI Ibiza. All rights reserved.
          </p>
          <button onClick={onClose} className="btn-primary" style={{ fontSize: '10px', padding: '10px 24px' }}>
            &gt; Close
          </button>
        </div>
      </div>
    </div>
  )
}
