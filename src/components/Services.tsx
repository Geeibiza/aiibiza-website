const services = [
  {
    num: '01',
    title: 'Masterclasses',
    tagline: 'Learn from the one who was there first.',
    desc: 'Online and private in-person AI & automation training. Small cohorts. Real systems. Ibiza intensives.',
    tags: ['Local LLMs', 'Automation', 'Agents', 'Ibiza Sessions'],
    href: '#masterclasses',
  },
  {
    num: '02',
    title: 'OpenClaw Systems',
    tagline: 'Your own intelligence. Privately owned.',
    desc: 'Bespoke local AI infrastructure. Obsidian knowledge graphs, QMD private search, local LLMs, Telegram API, Mac Mini orchestration.',
    tags: ['Data Sovereignty', 'Local LLM', 'Automation', 'Private'],
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

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-px" style={{ background: 'var(--ghost-line)' }}>
          {services.map((s) => (
            <a
              key={s.num}
              href={s.href}
              className="service-card p-10 block group"
            >
              {/* Number + title row */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>{s.num}</span>
                <span
                  className="label transition-all duration-300"
                  style={{ color: 'var(--muted)', fontSize: '9px' }}
                >
                  ASK FOR PRICE →
                </span>
              </div>

              <h3
                className="font-display mb-3"
                style={{ fontSize: '40px', color: 'var(--white)', transition: 'color 0.3s' }}
              >
                {s.title}
              </h3>

              <p
                className="font-mono mb-1"
                style={{ fontSize: '11px', color: 'var(--lime)', letterSpacing: '0.05em', fontStyle: 'italic' }}
              >
                "{s.tagline}"
              </p>

              <p
                className="font-mono mt-5 mb-8"
                style={{ fontSize: '12px', color: 'var(--grey)', lineHeight: '1.8' }}
              >
                {s.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1"
                    style={{
                      border: '1px solid var(--ghost-line)',
                      color: 'var(--muted)',
                      fontSize: '10px',
                      letterSpacing: '0.08em',
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
