const services = [
  {
    num: '01',
    title: 'Masterclasses',
    tagline: 'Learn from the one who was there first.',
    desc: 'Online and private in-person AI & automation training. Small cohorts. Real systems. Ibiza intensives.',
    tags: ['AI Training', 'Automation', 'Agents', 'Ibiza Sessions'],
    href: '#masterclasses',
  },
  {
    num: '02',
    title: 'OpenClaw Systems',
    tagline: 'Your own intelligence. Privately owned.',
    desc: 'Bespoke private AI infrastructure. Delivered, installed, and yours — running in your home or office. No cloud. No subscriptions.',
    tags: ['Data Sovereignty', 'Private AI', 'Automation', 'Self-Custodial'],
    href: '#openclaw',
  },
  {
    num: '03',
    title: 'Web Architecture',
    tagline: 'Built to perform. Built to last.',
    desc: 'Complete web design, development and managed hosting — or surgical optimization of what you already have.',
    tags: ['Full Build', 'Optimization', 'Hosting', 'SEO Foundation'],
    href: '#web',
  },
  {
    num: '04',
    title: 'Growth Engine',
    tagline: 'Your brand, running while you sleep.',
    desc: 'Fully automated SEO and social media — Instagram, TikTok, YouTube. Compounding while you focus elsewhere.',
    tags: ['SEO', 'Instagram', 'TikTok', 'YouTube'],
    href: '#growth',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 reveal">
      <div className="max-w-7xl mx-auto px-8">

        <div className="w-full h-px mb-24" style={{ background: 'var(--ghost-line)' }} />

        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="label mb-5">// What we build</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 68px)', color: 'var(--white)' }}>
              Four ways to put AI to work.
              <br />
              <span style={{ color: 'var(--sand)' }}>One firm that knows how.</span>
            </h2>
          </div>
          <p className="font-mono text-xs" style={{ color: 'var(--muted)', maxWidth: '260px', lineHeight: '1.8', fontSize: '12px' }}>
            All pricing on request.<br />
            We scope each engagement individually.
          </p>
        </div>

        {/* Services grid — floating rounded cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <a
              key={s.num}
              href={s.href}
              className="service-card p-10 block group"
            >
              {/* Top row: number badge + arrow */}
              <div className="flex items-start justify-between mb-8">
                <span
                  className="font-mono"
                  style={{
                    fontSize: '10px',
                    color: 'var(--lime)',
                    background: 'rgba(174,255,0,0.07)',
                    border: '1px solid rgba(174,255,0,0.14)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    letterSpacing: '0.12em',
                  }}
                >
                  {s.num}
                </span>
                <span
                  className="font-mono"
                  style={{
                    color: 'var(--muted)',
                    fontSize: '18px',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                  }}
                >
                  ↗
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-display mb-3"
                style={{ fontSize: 'clamp(32px, 3vw, 46px)', color: 'var(--white)', lineHeight: 1.05 }}
              >
                {s.title}
              </h3>

              {/* Tagline */}
              <p
                className="font-mono mb-5"
                style={{ fontSize: '11px', color: 'var(--lime)', letterSpacing: '0.04em', fontStyle: 'italic', opacity: 0.8 }}
              >
                "{s.tagline}"
              </p>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--ghost-line)', marginBottom: '20px' }} />

              {/* Description */}
              <p
                className="font-mono mb-8"
                style={{ fontSize: '12px', color: 'var(--grey)', lineHeight: '1.85' }}
              >
                {s.desc}
              </p>

              {/* Tags — rounded pills */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--ghost-line)',
                      borderRadius: '999px',
                      color: 'var(--muted)',
                      fontSize: '10px',
                      padding: '5px 14px',
                      letterSpacing: '0.07em',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
