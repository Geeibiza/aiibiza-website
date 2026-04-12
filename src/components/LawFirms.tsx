const problems = [
  {
    stat: '33%',
    source: 'Westlaw AI',
    label: 'hallucination rate',
    desc: 'Purpose-built legal AI. One in three responses contains an error. Lawyers are being sanctioned for filings they trusted.',
  },
  {
    stat: '€288K',
    source: 'Harvey AI',
    label: 'minimum annual cost',
    desc: 'Enterprise pricing with 20-seat minimums. Built for BigLaw. Inaccessible to 75% of all law firms by design.',
  },
  {
    stat: '2026',
    source: 'US v. Heppner, SDNY',
    label: 'privilege waiver ruling',
    desc: 'Federal court confirmed: using cloud AI with client data destroys attorney-client privilege. Every cloud AI vendor is now a liability.',
  },
]

const outcomes = [
  { label: 'Research', before: '4 hours', after: '30 minutes' },
  { label: 'Contract review', before: 'Full day', after: 'Under an hour' },
  { label: 'Client intake', before: 'Next business day', after: '24/7, immediate' },
  { label: 'Billable hours lost', before: 'Up to 60%', after: 'Captured automatically' },
]

export default function LawFirms() {
  return (
    <section
      id="lawfirms"
      className="py-32 reveal"
      style={{ background: 'var(--void)' }}
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="w-full h-px mb-24" style={{ background: 'var(--ghost-line)' }} />

        {/* Header */}
        <div className="mb-24">
          <div className="label mb-8">// For Law Firms</div>
          <h2
            className="font-display mb-10"
            style={{ fontSize: 'clamp(38px, 5vw, 72px)', color: 'var(--white)', lineHeight: 1.05, maxWidth: '780px' }}
          >
            Your client data
            <br />
            <span style={{ color: 'var(--lime)' }}>never leaves</span>
            <br />
            your building.
          </h2>
          <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9', maxWidth: '520px' }}>
            Private AI for law firms. Self-custodial. Compliant.
            <br />
            <span style={{ color: 'var(--white)' }}>No privilege risk. No hallucination liability. No vendor dependency.</span>
          </p>
        </div>

        {/* 3 Problems */}
        <div className="grid md:grid-cols-3 gap-px mb-px" style={{ background: 'var(--ghost-line)' }}>
          {problems.map(p => (
            <div key={p.stat} className="p-10" style={{ background: 'var(--obsidian)' }}>
              <div
                className="font-mono mb-1"
                style={{ fontSize: 'clamp(42px, 4vw, 64px)', color: 'var(--danger, #f87171)', lineHeight: 1, fontWeight: 700 }}
              >
                {p.stat}
              </div>
              <div className="label mb-1" style={{ color: 'var(--muted)', fontSize: '9px' }}>{p.source}</div>
              <div className="font-mono mb-6" style={{ fontSize: '11px', color: 'var(--grey)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.label}</div>
              <p className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Ruling callout */}
        <div
          className="mb-24 p-8"
          style={{
            background: 'rgba(248,113,113,0.04)',
            border: '1px solid rgba(248,113,113,0.15)',
            borderTop: 'none',
          }}
        >
          <div className="flex items-start gap-4">
            <span className="font-mono" style={{ color: 'rgba(248,113,113,0.7)', fontSize: '11px', flexShrink: 0, marginTop: '2px' }}>!</span>
            <p className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.9' }}>
              <span style={{ color: 'var(--white)' }}>US v. Heppner (SDNY, Feb 2026):</span> The court confirmed that routing client data through third-party cloud AI platforms constitutes a privilege waiver. The ruling explicitly left open that a private, self-hosted system yields a different result.{' '}
              <span style={{ color: 'rgba(248,113,113,0.8)' }}>Every cloud AI vendor is now a documented legal risk.</span>
            </p>
          </div>
        </div>

        {/* The answer — 2 col */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <div className="label mb-6">// The Only Clean Architecture</div>
            <h3
              className="font-display mb-8"
              style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', color: 'var(--white)', lineHeight: 1.15 }}
            >
              AI that lives inside
              <br />
              <span style={{ color: 'var(--lime)' }}>your firm.</span>
              <br />
              Not in their cloud.
            </h3>
            <p className="font-mono mb-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9' }}>
              A private AI system built for your firm — running on hardware in your possession. Your documents, your case library, your methods. Trained on your work. Answering only to you.
            </p>
            <p className="font-mono mb-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9' }}>
              No subscription to a vendor who can raise prices, change terms, or hand your client data to a regulator.{' '}
              <span style={{ color: 'var(--white)' }}>You own it completely.</span>
            </p>
            <p className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.9' }}>
              We don't consult on private infrastructure from a cloud laptop.{' '}
              <span style={{ color: 'var(--white)' }}>We operate our own private data centre in Thailand</span> — the same architecture, running continuously. We build for clients exactly what we run ourselves.
            </p>
          </div>

          {/* Comparison */}
          <div style={{ background: 'var(--terminal-dark)', border: '1px solid var(--ghost-line)' }}>
            <div className="p-6" style={{ borderBottom: '1px solid var(--ghost-line)' }}>
              <div className="grid grid-cols-3 gap-4">
                <div />
                <div className="font-mono text-center" style={{ fontSize: '10px', color: 'var(--muted)' }}>Cloud AI</div>
                <div className="font-mono text-center" style={{ fontSize: '10px', color: 'var(--lime)' }}>Private AI</div>
              </div>
            </div>
            {[
              { label: 'Data leaves your firm', cloud: '✗', private: '✓ Never' },
              { label: 'Privilege waiver risk', cloud: '✗', private: '✓ None' },
              { label: 'Works offline', cloud: '✗', private: '✓ Always' },
              { label: 'GDPR truly compliant', cloud: '✗', private: '✓ Yes' },
              { label: 'Hallucination liability', cloud: '✗', private: '✓ Controlled' },
              { label: 'Vendor can raise prices', cloud: '✗', private: '✓ Never' },
              { label: 'You own the system', cloud: '✗', private: '✓ Completely' },
            ].map(row => (
              <div key={row.label} className="grid grid-cols-3 gap-4 px-6 py-3" style={{ borderBottom: '1px solid var(--ghost-line)' }}>
                <div className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>{row.label}</div>
                <div className="font-mono text-center" style={{ fontSize: '11px', color: 'rgba(248,113,113,0.7)' }}>{row.cloud}</div>
                <div className="font-mono text-center" style={{ fontSize: '11px', color: 'var(--phosphor)' }}>{row.private}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What it does — outcomes only, no tech */}
        <div className="mb-24">
          <div className="label mb-10">// What Changes</div>
          <div className="grid md:grid-cols-4 gap-px" style={{ background: 'var(--ghost-line)' }}>
            {outcomes.map(o => (
              <div key={o.label} className="p-8" style={{ background: 'var(--obsidian)' }}>
                <div className="font-mono mb-6" style={{ fontSize: '10px', color: 'var(--lime)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{o.label}</div>
                <div className="font-mono mb-2" style={{ fontSize: '11px', color: 'rgba(248,113,113,0.6)', textDecoration: 'line-through' }}>{o.before}</div>
                <div className="font-mono" style={{ fontSize: '18px', color: 'var(--white)', fontWeight: 600 }}>{o.after}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Who it's for */}
        <div className="grid md:grid-cols-2 gap-px mb-24" style={{ background: 'var(--ghost-line)' }}>
          <div className="p-10" style={{ background: 'var(--obsidian)' }}>
            <div className="label mb-6">// Built for</div>
            {['Solo practitioners', '2–20 lawyer firms', 'Boutique specialist firms', 'Firms handling sensitive client matters', 'European firms with GDPR obligations'].map(item => (
              <div key={item} className="flex items-center gap-3 mb-3">
                <span style={{ color: 'var(--phosphor)', fontSize: '9px' }}>→</span>
                <span className="font-mono" style={{ fontSize: '12px', color: 'var(--grey)' }}>{item}</span>
              </div>
            ))}
          </div>
          <div className="p-10" style={{ background: 'var(--obsidian)' }}>
            <div className="label mb-6">// Not for</div>
            {['Firms that want a cheap chatbot', 'Firms that don\'t handle sensitive matters', 'Anyone looking for a trial account', 'Large firms with enterprise vendor contracts'].map(item => (
              <div key={item} className="flex items-center gap-3 mb-3">
                <span style={{ color: 'rgba(248,113,113,0.5)', fontSize: '9px' }}>✗</span>
                <span className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, var(--obsidian) 0%, var(--terminal-dark) 100%)',
            border: '1px solid var(--ghost-line)',
          }}
        >
          <h3 className="font-display mb-4" style={{ fontSize: 'clamp(28px, 3vw, 44px)', color: 'var(--white)' }}>
            Book a 45-minute call.
          </h3>
          <p className="font-mono mb-10" style={{ fontSize: '12px', color: 'var(--grey)', lineHeight: '1.9' }}>
            No technical knowledge required.
            <br />
            I'll show you exactly what the system does — using your type of work.
            <br />
            <span style={{ color: 'var(--white)' }}>Private clients only. Based in Ibiza. Available remotely worldwide.</span>
          </p>
          <a href="#contact" className="btn-primary" style={{ fontSize: '12px', padding: '16px 40px' }}>
            &gt; Start the Conversation
          </a>
        </div>

      </div>
    </section>
  )
}
