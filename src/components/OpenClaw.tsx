const tiers = [
  {
    num: '01',
    name: 'The Assistant',
    tagline: 'Your knowledge. Organized. Always available.',
    hardware: 'Mac Mini M4 16GB',
    devices: ['Latest iPhone'],
    bestFor: 'Authors, coaches, researchers, creatives, practitioners',
    features: [
      'Personal AI assistant — always available',
      'Your entire knowledge base, organized and searchable',
      'AI that knows your voice, your methods, your work',
      'Automated research, summarized and delivered',
      'Memory across every session',
      'Private client management — fully local',
    ],
    selling: 'Your life\'s work, organized and searchable. Your AI knows your book, your methods, your clients. It gets smarter every day.',
    cta: 'Get The Assistant →',
    featured: false,
  },
  {
    num: '02',
    name: 'The Operator',
    tagline: 'AI that runs your business while you run your business.',
    hardware: 'Mac Studio M4',
    devices: ['iPhone Pro Max (latest)', 'iPad Pro (latest)'],
    bestFor: 'Business owners, entrepreneurs, consultants, agencies',
    features: [
      'Everything in The Assistant',
      'Business automation workflows',
      'Custom processes built around how you work',
      'Connected to the tools you already use',
      'Larger AI models for more demanding tasks',
      'Document generation — contracts, proposals, reports',
      'Priority direct access to Gee',
    ],
    selling: 'Automates the repetitive work so you can focus on what only you can do.',
    cta: 'Get The Operator →',
    featured: false,
  },
  {
    num: '03',
    name: 'The GOD Setup',
    tagline: 'Full private AI infrastructure. The complete system.',
    hardware: '4× Mac Mini or Mac Studio',
    devices: ['Personal VIP Installation', 'On-site setup by Gee', 'Direct access to Gee'],
    bestFor: 'Serious operators — crypto, trading, high-volume business',
    features: [
      'Everything in Tier 1 & 2',
      '4-node cluster — brain, task, inference nodes',
      '70B parameter models running locally',
      'Full GOD architecture — Gee\'s personal system',
      'Trading bot setup (crypto / prediction markets)',
      'Custom agent with wake word + personality',
      'Monthly on-site or video check-in',
    ],
    selling: 'This is what Gee runs himself. Now you can run it too.',
    cta: 'Get The GOD Setup →',
    featured: true,
  },
]

export default function OpenClaw() {
  return (
    <section
      id="openclaw"
      className="reveal"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Background: Mac Mini server rack */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/mac-mini-rack.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.15) saturate(0.5)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, var(--void) 0%, transparent 12%, transparent 82%, var(--void) 100%)',
          zIndex: 1,
        }}
      />

      <div className="max-w-7xl mx-auto px-8 py-32" style={{ position: 'relative', zIndex: 2 }}>

        <div className="w-full h-px mb-24" style={{ background: 'var(--ghost-line)' }} />

        {/* OpenClaw full logo + header */}
        <div className="flex flex-col items-center text-center mb-20">
          <img
            src="/openclaw-logo-full.png"
            alt="OpenClaw"
            style={{
              width: '320px',
              maxWidth: '80vw',
              objectFit: 'contain',
              marginBottom: '32px',
            }}
          />
          <div className="label mb-6" style={{ color: 'var(--muted)' }}>// Private AI Infrastructure</div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(36px, 5vw, 68px)', color: 'var(--white)', lineHeight: 1.1, maxWidth: '820px' }}
          >
            Your Private AI.{' '}
            <span style={{ color: 'var(--lime)' }}>Built for you.</span>
            <br />
            Owned by you.
          </h2>
          <p className="font-mono mt-8" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9', maxWidth: '580px' }}>
            No cloud. No subscriptions. No one else's servers.
            <br />
            <span style={{ color: 'var(--white)' }}>Just your AI — running in your home, working for you 24/7.</span>
          </p>
        </div>

        {/* Problem strip */}
        <div
          className="font-mono text-center mb-20 px-8 py-6"
          style={{
            background: 'rgba(174,255,0,0.04)',
            border: '1px solid rgba(174,255,0,0.12)',
            fontSize: '12px',
            color: 'var(--muted)',
            lineHeight: '2',
          }}
        >
          ChatGPT knows your business. Claude knows your clients. Google knows your strategy.{' '}
          <span style={{ color: 'var(--lime)' }}>Every prompt you send is data you gave away.</span>
          {' '}There is another way.
        </div>

        {/* Tiers label */}
        <div className="label mb-10" style={{ color: 'var(--muted)' }}>// Choose Your System — Delivered. Installed. Yours.</div>

        {/* 3 Tier Cards */}
        <div className="grid md:grid-cols-3 gap-px" style={{ background: 'var(--ghost-line)' }}>
          {tiers.map(tier => (
            <div
              key={tier.name}
              className="service-card p-8"
              style={tier.featured ? {
                background: 'var(--obsidian)',
                boxShadow: '0 0 60px #AEFF0012, inset 0 0 0 1px #AEFF0030',
              } : {}}
            >
              {/* Num + badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="label" style={{ color: 'var(--muted)', fontSize: '9px' }}>{tier.num}</span>
                {tier.featured && (
                  <span className="label" style={{
                    color: 'var(--lime)', fontSize: '9px',
                    background: 'rgba(174,255,0,0.08)',
                    padding: '3px 8px',
                    border: '1px solid rgba(174,255,0,0.2)',
                  }}>GOD TIER</span>
                )}
              </div>

              {/* Name + hardware */}
              <h3 className="font-display mb-1" style={{ fontSize: '34px', color: 'var(--white)' }}>{tier.name}</h3>
              <div className="label mb-4" style={{ color: 'var(--lime)', fontSize: '10px' }}>{tier.hardware}</div>

              {/* Devices */}
              <div className="mb-5">
                {tier.devices.map(d => (
                  <div key={d} className="flex items-center gap-2 mb-1">
                    <span style={{ color: 'var(--phosphor)', fontSize: '9px' }}>+</span>
                    <span className="font-mono" style={{ fontSize: '11px', color: 'var(--grey)' }}>{d}</span>
                  </div>
                ))}
              </div>

              <div className="mb-5 pb-5" style={{ borderBottom: '1px solid var(--ghost-line)' }} />

              {/* Tagline */}
              <p className="font-mono mb-4" style={{ fontSize: '11px', color: 'var(--sand)', fontStyle: 'italic' }}>
                "{tier.tagline}"
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {tier.features.map(f => (
                  <div key={f} className="flex items-start gap-3">
                    <span style={{ color: 'var(--phosphor)', fontSize: '9px', marginTop: '3px', flexShrink: 0 }}>✓</span>
                    <span className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: '1.6' }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Best for */}
              <div className="font-mono mb-6" style={{ fontSize: '10px', color: 'var(--muted)', borderLeft: '2px solid var(--ghost-line)', paddingLeft: '10px' }}>
                Best for: <span style={{ color: 'var(--grey)' }}>{tier.bestFor}</span>
              </div>

              {/* CTA */}
              <a href="#contact" className={tier.featured ? 'btn-primary' : 'btn-ghost'} style={{ fontSize: '11px', display: 'inline-block' }}>
                &gt; {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* How it works + footer */}
        <div
          className="mt-px p-10"
          style={{ background: 'rgba(10,10,15,0.85)', border: '1px solid var(--ghost-line)' }}
        >
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {[
              { step: '01', title: 'We talk', desc: '30 minutes to understand your workflow. No technical knowledge required.' },
              { step: '02', title: 'We build', desc: 'Setup done remotely in 2–4 weeks. You plug in the computer, we do the rest.' },
              { step: '03', title: 'You own it', desc: 'Your system. Your hardware. Your AI. No subscriptions to us. Forever.' },
            ].map(s => (
              <div key={s.step}>
                <div className="label mb-2" style={{ color: 'var(--lime)', fontSize: '9px' }}>{s.step}</div>
                <div className="font-mono mb-2" style={{ fontSize: '13px', color: 'var(--white)' }}>{s.title}</div>
                <p className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: '1.7' }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid var(--ghost-line)' }}>
            <p className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>
              Every system is delivered, configured, and handed over. 30-day support included.
            </p>
            <a href="#contact" className="btn-primary" style={{ fontSize: '10px', padding: '12px 24px', whiteSpace: 'nowrap' }}>
              &gt; Book a 30-min Call
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
