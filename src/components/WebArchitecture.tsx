const painStats = [
  {
    stat: '50ms',
    label: 'to form an opinion',
    sub: 'about your website',
    desc: 'Not a second. Not a glance. Fifty milliseconds. The decision is made before they read a single word you wrote.',
  },
  {
    stat: '75%',
    label: 'of people',
    sub: 'judge credibility by design alone',
    desc: 'Three quarters of your prospects make a trust decision before they read your copy. The look is the argument. Right now yours is losing it.',
  },
  {
    stat: '2.5×',
    label: 'more conversions',
    sub: '1-second load vs 5-second load',
    desc: 'Every extra second costs you clients. 40% of visitors leave if it takes more than 3 seconds. Your site is probably slower than that.',
  },
]

const beforeAfter = [
  { label: 'First impression', before: 'Template. Generic. Costs nothing.', after: 'Premium. Intentional. Charges what you charge.' },
  { label: 'Mobile load time', before: '6+ seconds (industry avg)', after: 'Sub-2 seconds, optimised' },
  { label: 'Hosting & uptime', before: 'Your problem at 2am', after: 'Managed. Monitored. Not yours.' },
  { label: 'Post-launch support', before: 'Hourly billing. Slow replies.', after: 'Direct line. Fast.' },
]

const included = [
  {
    num: '01',
    title: 'Full Build',
    desc: 'Design, development, and launch from zero. Custom architecture. Not a theme. Built around how you work and what your clients need to see.',
  },
  {
    num: '02',
    title: 'Surgical Optimisation',
    desc: 'You already have a site that works but doesn\'t perform. We go in, fix the speed, fix the design, fix the conversion architecture. No rebuild needed.',
  },
  {
    num: '03',
    title: 'Managed Hosting',
    desc: 'Server, caching, security, backups, uptime monitoring. It stays fast, it stays up, and when something breaks, you get a message — not a bill.',
  },
  {
    num: '04',
    title: 'SEO Foundation',
    desc: 'Built-in technical SEO from day one. Schema, speed, structure, meta — the infrastructure that makes search visibility possible. Not an afterthought.',
  },
]

export default function WebArchitecture() {
  return (
    <section
      id="web"
      className="py-32 reveal"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Mac rack — data centre infrastructure background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/mac-mini-rack.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 50%',
        filter: 'brightness(0.1) saturate(0.3)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, var(--void) 0%, transparent 12%, transparent 82%, var(--void) 100%)',
        zIndex: 1,
      }} />

      <div className="max-w-7xl mx-auto px-8" style={{ position: 'relative', zIndex: 2 }}>

        <div className="w-full h-px mb-24" style={{ background: 'var(--ghost-line)' }} />

        {/* Header */}
        <div className="mb-24">
          <div className="label mb-8">// Web Architecture</div>
          <h2
            className="font-display mb-10"
            style={{ fontSize: 'clamp(38px, 5.5vw, 80px)', color: 'var(--white)', lineHeight: 1.0, maxWidth: '860px' }}
          >
            You spent 10 years
            <br />
            building a reputation.
            <br />
            <span style={{ color: 'var(--lime)' }}>Your website built it</span>
            <br />
            on a template.
          </h2>
          <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9', maxWidth: '540px' }}>
            Custom web design, development, and managed hosting.
            <br />
            <span style={{ color: 'var(--white)' }}>Built to close. Not built to exist.</span>
          </p>
        </div>

        {/* 3 Stats */}
        <div className="grid md:grid-cols-3 gap-px mb-px" style={{ background: 'var(--ghost-line)' }}>
          {painStats.map(p => (
            <div key={p.stat} className="p-10" style={{ background: 'var(--obsidian)' }}>
              <div
                className="font-mono mb-1"
                style={{ fontSize: 'clamp(42px, 4vw, 64px)', color: '#f87171', lineHeight: 1, fontWeight: 700 }}
              >
                {p.stat}
              </div>
              <div className="font-mono mb-1" style={{ fontSize: '12px', color: 'var(--white)', letterSpacing: '0.04em' }}>{p.label}</div>
              <div className="font-mono mb-5" style={{ fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{p.sub}</div>
              <p className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Speed callout */}
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
              <span style={{ color: 'var(--white)' }}>Google/Deloitte study:</span> A 0.1 second improvement in load time increases ecommerce conversions by 8.4%.{' '}
              <span style={{ color: 'rgba(248,113,113,0.8)' }}>U.S. retail sites average 6.3 seconds on mobile. Most small business sites are slower than that.</span>
            </p>
          </div>
        </div>

        {/* What's included — 4 service types */}
        <div className="mb-24">
          <div className="label mb-10">// What We Build</div>
          <div className="grid md:grid-cols-2 gap-px" style={{ background: 'var(--ghost-line)' }}>
            {included.map(item => (
              <div key={item.num} className="p-10" style={{ background: 'var(--obsidian)' }}>
                <div className="label mb-3" style={{ fontSize: '9px' }}>{item.num}</div>
                <div className="font-mono mb-4" style={{ fontSize: '15px', color: 'var(--white)', fontWeight: 600 }}>{item.title}</div>
                <p className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before / After */}
        <div className="mb-24">
          <div className="label mb-10">// What Changes</div>
          <div style={{ background: 'var(--terminal-dark)', border: '1px solid var(--ghost-line)' }}>
            <div className="p-5" style={{ borderBottom: '1px solid var(--ghost-line)' }}>
              <div className="grid grid-cols-3 gap-6">
                <div />
                <div className="font-mono text-center" style={{ fontSize: '10px', color: 'rgba(248,113,113,0.7)' }}>Before</div>
                <div className="font-mono text-center" style={{ fontSize: '10px', color: 'var(--lime)' }}>After</div>
              </div>
            </div>
            {beforeAfter.map((row, i) => (
              <div
                key={row.label}
                className="grid grid-cols-3 gap-6 px-6 py-4"
                style={{ borderBottom: i < beforeAfter.length - 1 ? '1px solid var(--ghost-line)' : 'none' }}
              >
                <div className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>{row.label}</div>
                <div className="font-mono text-center" style={{ fontSize: '11px', color: 'rgba(248,113,113,0.65)', lineHeight: '1.5' }}>{row.before}</div>
                <div className="font-mono text-center" style={{ fontSize: '11px', color: 'var(--phosphor)', lineHeight: '1.5' }}>{row.after}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Who it's for */}
        <div className="grid md:grid-cols-2 gap-px mb-24" style={{ background: 'var(--ghost-line)' }}>
          <div className="p-10" style={{ background: 'var(--obsidian)' }}>
            <div className="label mb-6">// Built for</div>
            {[
              'Coaches and consultants who\'ve outgrown their current site',
              'Agencies and operators who need to look like what they charge',
              'Businesses where the website is the first impression of the brand',
              'Anyone running on a Squarespace, Wix, or dated WordPress install',
              'Entrepreneurs who want it done and want to never think about it again',
            ].map(item => (
              <div key={item} className="flex items-start gap-3 mb-3">
                <span style={{ color: 'var(--phosphor)', fontSize: '9px', marginTop: '3px' }}>→</span>
                <span className="font-mono" style={{ fontSize: '12px', color: 'var(--grey)', lineHeight: '1.7' }}>{item}</span>
              </div>
            ))}
          </div>
          <div className="p-10" style={{ background: 'var(--obsidian)' }}>
            <div className="label mb-6">// Not for</div>
            {[
              'Anyone who wants the cheapest option on the market',
              'Projects that need 12 rounds of committee approval',
              'Clients who want to use their nephew\'s photo library',
              'Anyone who doesn\'t know what their business actually does',
            ].map(item => (
              <div key={item} className="flex items-start gap-3 mb-3">
                <span style={{ color: 'rgba(248,113,113,0.5)', fontSize: '9px', marginTop: '3px' }}>✗</span>
                <span className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.7' }}>{item}</span>
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
          <h3 className="font-display mb-4" style={{ fontSize: 'clamp(28px, 3vw, 50px)', color: 'var(--white)' }}>
            Send me your URL.
          </h3>
          <p className="font-mono mb-10" style={{ fontSize: '12px', color: 'var(--grey)', lineHeight: '1.9' }}>
            I'll tell you exactly what's wrong with it and what it would take to fix.
            <br />
            <span style={{ color: 'var(--white)' }}>No pitch. No package. No bullshit.</span>
            <br />
            <span style={{ color: 'var(--muted)' }}>Available remotely worldwide.</span>
          </p>
          <a href="#contact" className="btn-primary" style={{ fontSize: '12px', padding: '16px 40px' }}>
            &gt; Let's Build Something
          </a>
        </div>

      </div>
    </section>
  )
}
