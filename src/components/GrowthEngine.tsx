const platformStats = [
  {
    platform: 'TikTok',
    stat: '5×',
    sub: 'higher engagement than Instagram',
    detail: '70% of TikTok users have purchased something they discovered on the platform. It\'s not entertainment. It\'s the highest-converting discovery tool that exists.',
    color: '#AEFF00',
  },
  {
    platform: 'Instagram',
    stat: '76%',
    sub: 'more likely to buy from brands they follow',
    detail: 'Best ROI for full-funnel brand campaigns. Discovery to purchase in a single scroll. The platform hasn\'t peaked — it\'s been rebuilt for conversion.',
    color: '#AEFF00',
  },
  {
    platform: 'YouTube',
    stat: '2nd',
    sub: 'largest search engine on the planet',
    detail: 'Long-form authority. A single video can drive qualified traffic for years. The compounding asset that LinkedIn cannot be.',
    color: '#AEFF00',
  },
]

const timeStats = [
  { stat: '43%', label: 'of small business owners', detail: 'spend 6+ hours per week on social media manually' },
  { stat: '56%', label: 'cite time management', detail: 'as their biggest social media problem' },
  { stat: '5×', label: 'more engagement per post', detail: 'for consistent posters vs inconsistent ones (Buffer study)' },
]

const whatChanges = [
  { label: 'Hours spent per week', before: '6–10 hrs manual', after: 'Near zero. Supervised.' },
  { label: 'Posting consistency', before: 'When life allows', after: 'Daily. Automated.' },
  { label: 'Platform presence', before: 'One, maybe two', after: 'Instagram + TikTok + YouTube' },
  { label: 'Content quality', before: 'Rushed. Inconsistent.', after: 'On-brand. Every time.' },
  { label: 'Compounding effect', before: 'Restarting every month', after: 'Building continuously' },
]

export default function GrowthEngine() {
  return (
    <section
      id="growth"
      className="py-32 reveal"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Bangkok neon — engine running while you sleep */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/bangkok3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        filter: 'brightness(0.1) saturate(1.2) hue-rotate(20deg)',
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
          <div className="label mb-8">// Growth Engine</div>
          <h2
            className="font-display mb-10"
            style={{ fontSize: 'clamp(38px, 5.5vw, 80px)', color: 'var(--white)', lineHeight: 1.0, maxWidth: '860px' }}
          >
            The engine runs
            <br />
            <span style={{ color: 'var(--lime)' }}>while you're with</span>
            <br />
            a client. Or asleep.
          </h2>
          <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9', maxWidth: '540px' }}>
            Fully automated SEO and social media — Instagram, TikTok, YouTube.
            <br />
            <span style={{ color: 'var(--white)' }}>Consistent. On-brand. Compounding while you focus elsewhere.</span>
          </p>
        </div>

        {/* Time stats */}
        <div className="grid md:grid-cols-3 gap-px mb-24" style={{ background: 'var(--ghost-line)' }}>
          {timeStats.map(t => (
            <div key={t.stat} className="p-10" style={{ background: 'var(--obsidian)' }}>
              <div
                className="font-mono mb-2"
                style={{ fontSize: 'clamp(42px, 4vw, 64px)', color: '#f87171', lineHeight: 1, fontWeight: 700 }}
              >
                {t.stat}
              </div>
              <div className="font-mono mb-4" style={{ fontSize: '12px', color: 'var(--white)' }}>{t.label}</div>
              <p className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8' }}>{t.detail}</p>
            </div>
          ))}
        </div>

        {/* The two types of client — side by side */}
        <div className="grid md:grid-cols-2 gap-px mb-24" style={{ background: 'var(--ghost-line)' }}>
          <div className="p-10" style={{ background: 'var(--obsidian)' }}>
            <div className="label mb-4" style={{ color: 'rgba(248,113,113,0.7)' }}>// Type A — Drowning</div>
            <p className="font-mono mb-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9' }}>
              Posting manually. Burning time. Anxious every week they skip. Watching competitors with{' '}
              <span style={{ color: 'var(--white)' }}>worse products get more attention</span> because they show up consistently.
            </p>
            <p className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8' }}>
              They know consistency matters. Life and client work eat the calendar. The engine doesn't run without them — and they're always somewhere else.
            </p>
          </div>
          <div className="p-10" style={{ background: 'var(--obsidian)' }}>
            <div className="label mb-4" style={{ color: 'rgba(248,113,113,0.7)' }}>// Type B — Paralysed</div>
            <p className="font-mono mb-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9' }}>
              They know they need to be visible. They've started and stopped three times.{' '}
              <span style={{ color: 'var(--white)' }}>The blank content calendar feels like a threat.</span>
            </p>
            <p className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8' }}>
              Hoping referrals hold up. Watching the platforms get harder to crack manually. Waiting for a moment of inspiration that never quite arrives.
            </p>
          </div>
        </div>

        {/* Platform breakdown */}
        <div className="mb-24">
          <div className="label mb-10">// The Three Platforms</div>
          <div className="grid md:grid-cols-3 gap-5">
            {platformStats.map(p => (
              <div
                key={p.platform}
                style={{
                  background: 'linear-gradient(145deg, var(--obsidian) 0%, var(--terminal-dark) 100%)',
                  border: '1px solid var(--ghost-line)',
                  borderRadius: '16px',
                  padding: '36px 32px',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
                }}
              >
                <div className="font-mono mb-2" style={{ fontSize: '10px', color: 'var(--lime)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{p.platform}</div>
                <div className="font-mono mb-1" style={{ fontSize: 'clamp(36px, 3.5vw, 52px)', color: 'var(--white)', fontWeight: 700, lineHeight: 1 }}>{p.stat}</div>
                <div className="font-mono mb-5" style={{ fontSize: '11px', color: 'var(--grey)', lineHeight: '1.5' }}>{p.sub}</div>
                <div style={{ height: '1px', background: 'var(--ghost-line)', marginBottom: '16px' }} />
                <p className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: '1.8' }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Authenticity — the objection addressed */}
        <div
          className="mb-24 p-10"
          style={{
            background: 'rgba(174,255,0,0.03)',
            border: '1px solid rgba(174,255,0,0.1)',
            borderRadius: '0',
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="label mb-4">// The Question Everyone Asks</div>
              <h3 className="font-display mb-6" style={{ fontSize: 'clamp(24px, 3vw, 40px)', color: 'var(--white)', lineHeight: 1.1 }}>
                "Will it sound
                <br />
                <span style={{ color: 'var(--lime)' }}>like a robot?"</span>
              </h3>
              <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9' }}>
                No. Automation handles distribution infrastructure — the scheduling, the formatting, the platform mechanics. 80–90% of the mechanical work.
              </p>
            </div>
            <div>
              <p className="font-mono mb-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9' }}>
                The voice, the positioning, the creative direction — that's still yours. What the engine does is take your actual ideas and make sure they reach the world instead of dying in your notes.
              </p>
              <p className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.9' }}>
                The objection to flip:{' '}
                <span style={{ color: 'var(--white)', fontStyle: 'italic' }}>Automated doesn't mean robotic. It means your ideas actually get out there.</span>
              </p>
            </div>
          </div>
        </div>

        {/* What changes */}
        <div className="mb-24">
          <div className="label mb-10">// What Changes</div>
          <div style={{ background: 'var(--terminal-dark)', border: '1px solid var(--ghost-line)' }}>
            <div className="p-5" style={{ borderBottom: '1px solid var(--ghost-line)' }}>
              <div className="grid grid-cols-3 gap-6">
                <div />
                <div className="font-mono text-center" style={{ fontSize: '10px', color: 'rgba(248,113,113,0.7)' }}>Without</div>
                <div className="font-mono text-center" style={{ fontSize: '10px', color: 'var(--lime)' }}>With Engine</div>
              </div>
            </div>
            {whatChanges.map((row, i) => (
              <div
                key={row.label}
                className="grid grid-cols-3 gap-6 px-6 py-4"
                style={{ borderBottom: i < whatChanges.length - 1 ? '1px solid var(--ghost-line)' : 'none' }}
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
              'Entrepreneurs who know they need visibility but can\'t babysit it daily',
              'Coaches and consultants spending 6+ hours a week posting manually',
              'Service businesses where trust is built through consistent presence',
              'Anyone who\'s started and stopped social media three times already',
              'Operators who want compounding audience growth without a team',
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
              'Anyone who wants to go viral overnight with one video',
              'Businesses with no clear voice, offer, or positioning',
              'Those who need to approve every piece of content through 5 people',
              'Anyone who thinks social media is beneath them',
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
            Build the engine.
          </h3>
          <p className="font-mono mb-10" style={{ fontSize: '12px', color: 'var(--grey)', lineHeight: '1.9' }}>
            20-minute call. I'll show you what's actually possible for your specific brand.
            <br />
            <span style={{ color: 'var(--white)' }}>Then you decide if you want the engine or not.</span>
            <br />
            <span style={{ color: 'var(--muted)' }}>Available remotely worldwide.</span>
          </p>
          <a href="#contact" className="btn-primary" style={{ fontSize: '12px', padding: '16px 40px' }}>
            &gt; Start the Engine
          </a>
        </div>

      </div>
    </section>
  )
}
