const problems = [
  {
    stat: '58%',
    label: 'of executives',
    sub: 'have never taken a single AI course',
    desc: 'Despite predicting AI will be critical to their business within 3 years. They know the gap. They don\'t know how to close it.',
  },
  {
    stat: '10–15%',
    label: 'MOOC completion rate',
    sub: 'self-paced online courses',
    desc: 'LinkedIn Learning. Coursera. YouTube. Started dozens of times. Completed almost never. The format doesn\'t work for people who actually run things.',
  },
  {
    stat: '6%',
    label: 'have started upskilling',
    sub: 'despite 89% saying it\'s needed',
    desc: '89% of executives say their workforce urgently needs AI skills. Only 6% have taken any meaningful action. The gap is widening every quarter.',
  },
]

const wrongWithCourses = [
  {
    num: '01',
    title: 'No live interaction',
    desc: 'One confusing concept and you\'re stuck for days with no one to ask. Content moves on. You fall behind.',
  },
  {
    num: '02',
    title: 'Instructors who Googled it in 2023',
    desc: 'Most AI trainers pivoted from marketing or consulting when ChatGPT launched. You can\'t tell signal from noise when the teacher can\'t either.',
  },
  {
    num: '03',
    title: 'Theory with no Monday morning',
    desc: 'You finish the module. You still don\'t know what to do in your business. Generic frameworks don\'t map to your actual situation.',
  },
  {
    num: '04',
    title: 'No peer accountability',
    desc: 'No cohort. No pressure to show up. No one building in the room with you. Online courses are designed to start, not to finish.',
  },
]

const timeline = [
  { year: '1981', event: 'Commodore 64', detail: 'Age 15. Most people played games. One of them went somewhere else entirely.' },
  { year: '1980s', event: 'ARPANET access', detail: 'University dial-back numbers. CDC 6500/6600 mainframes. The network, before it had a name.' },
  { year: '1987', event: 'Thunderdome BBS', detail: '10 simultaneous lines. 10 US Robotics modems. Hackers, phreakers, warez. The original open source.' },
  { year: '2009', event: 'Bitcoin', detail: 'Whitepaper was 13 months old. Mined — not traded. Understood the architecture. Not the price.' },
  { year: 'Now', event: 'Private AI data centre', detail: 'Thailand. Running continuously. OpenClaw clusters. 70B models. Not a demo. An operation.' },
]

const included = [
  { label: 'Cohort size', val: 'Maximum 6 people' },
  { label: 'Format', val: 'In-person / Ibiza intensive' },
  { label: 'Duration', val: '2–3 days, immersive' },
  { label: 'Access', val: 'Direct with Gee' },
  { label: 'Follow-up', val: '30 days WhatsApp access' },
  { label: 'Online alternative', val: 'Private remote cohorts' },
]

export default function Masterclasses() {
  return (
    <section
      id="masterclasses"
      className="py-32 reveal"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Ibiza background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/ibiza-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        filter: 'brightness(0.1) saturate(0.6) sepia(0.2)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, var(--void) 0%, transparent 10%, transparent 85%, var(--void) 100%)',
        zIndex: 1,
      }} />

      <div className="max-w-7xl mx-auto px-8" style={{ position: 'relative', zIndex: 2 }}>

        <div className="w-full h-px mb-24" style={{ background: 'var(--ghost-line)' }} />

        {/* Header */}
        <div className="mb-24">
          <div className="label mb-8">// Masterclasses</div>
          <h2
            className="font-display mb-10"
            style={{ fontSize: 'clamp(38px, 5.5vw, 80px)', color: 'var(--white)', lineHeight: 1.0, maxWidth: '860px' }}
          >
            Not a course.
            <br />
            <span style={{ color: 'var(--lime)' }}>A compression of</span>
            <br />
            40 years into 3 days.
          </h2>
          <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9', maxWidth: '540px' }}>
            Small cohort. In-person. Ibiza.
            <br />
            <span style={{ color: 'var(--white)' }}>No YouTube theory. No generic frameworks. No one who pivoted to AI in 2023.</span>
          </p>
        </div>

        {/* 3 problem stats */}
        <div className="grid md:grid-cols-3 gap-px mb-px" style={{ background: 'var(--ghost-line)' }}>
          {problems.map(p => (
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

        {/* What's wrong callout */}
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
              <span style={{ color: 'var(--white)' }}>MOOC completion rate: 10–15%.</span> In-person cohort programs with accountability: 70%+.{' '}
              <span style={{ color: 'rgba(248,113,113,0.8)' }}>The format you've been using is statistically designed to fail.</span>
            </p>
          </div>
        </div>

        {/* What's wrong with existing courses */}
        <div className="mb-24">
          <div className="label mb-10">// Why Everything Else Failed</div>
          <div className="grid md:grid-cols-2 gap-px" style={{ background: 'var(--ghost-line)' }}>
            {wrongWithCourses.map(w => (
              <div key={w.num} className="p-8" style={{ background: 'var(--obsidian)' }}>
                <div className="label mb-3" style={{ fontSize: '9px', color: 'rgba(248,113,113,0.6)' }}>{w.num}</div>
                <div className="font-mono mb-3" style={{ fontSize: '14px', color: 'var(--white)', fontWeight: 600 }}>{w.title}</div>
                <p className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The credential — Gee's timeline */}
        <div className="grid md:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <div className="label mb-6">// The Credential</div>
            <h3
              className="font-display mb-8"
              style={{ fontSize: 'clamp(30px, 3.5vw, 52px)', color: 'var(--white)', lineHeight: 1.1 }}
            >
              Most AI trainers
              <br />
              discovered AI
              <br />
              <span style={{ color: 'var(--lime)' }}>in 2023.</span>
            </h3>
            <p className="font-mono mb-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9' }}>
              You can't tell signal from noise when the teacher learned it from the same Medium articles you did. The question isn't who has the certificate. It's who was actually there.
            </p>
            <p className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.9' }}>
              The founder of AI Ibiza has been operating at the leading edge of every major technology wave since the early 1980s — not as an observer, as a participant. That's not a LinkedIn bio.{' '}
              <span style={{ color: 'var(--white)' }}>That's a biography.</span>
            </p>
          </div>

          {/* Timeline */}
          <div style={{ background: 'var(--terminal-dark)', border: '1px solid var(--ghost-line)', padding: '0' }}>
            <div className="p-5" style={{ borderBottom: '1px solid var(--ghost-line)' }}>
              <div className="font-mono" style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Timeline / Gee Van Donselaar
              </div>
            </div>
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className="px-6 py-4 flex gap-6 items-start"
                style={{ borderBottom: i < timeline.length - 1 ? '1px solid var(--ghost-line)' : 'none' }}
              >
                <div
                  className="font-mono"
                  style={{ fontSize: '11px', color: 'var(--lime)', minWidth: '52px', fontWeight: 600, paddingTop: '1px' }}
                >
                  {t.year}
                </div>
                <div>
                  <div className="font-mono mb-1" style={{ fontSize: '12px', color: 'var(--white)', fontWeight: 600 }}>{t.event}</div>
                  <div className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: '1.7' }}>{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's included */}
        <div className="grid md:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <div className="label mb-6">// What You Get</div>
            <h3
              className="font-display mb-8"
              style={{ fontSize: 'clamp(28px, 3vw, 46px)', color: 'var(--white)', lineHeight: 1.1 }}
            >
              Walk out knowing
              <br />
              <span style={{ color: 'var(--lime)' }}>exactly what to do</span>
              <br />
              on Monday morning.
            </h3>
            <p className="font-mono mb-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9' }}>
              No theory. No framework slides. Gee shows you what he actually runs — the systems, the models, the decisions, the architecture. Then we map it to your business specifically.
            </p>
            <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9' }}>
              Small cohort means real questions get answered. The kind you wouldn't ask in a room of 50 people but need answered before you can move. We cover those.
            </p>
          </div>

          {/* Included block */}
          <div style={{ background: 'var(--terminal-dark)', border: '1px solid var(--ghost-line)' }}>
            <div className="p-5" style={{ borderBottom: '1px solid var(--ghost-line)' }}>
              <div className="font-mono" style={{ fontSize: '10px', color: 'var(--lime)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Format / What's Included
              </div>
            </div>
            {included.map((item, i) => (
              <div
                key={item.label}
                className="flex justify-between items-center px-6 py-4"
                style={{ borderBottom: i < included.length - 1 ? '1px solid var(--ghost-line)' : 'none' }}
              >
                <span className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>{item.label}</span>
                <span className="font-mono" style={{ fontSize: '11px', color: 'var(--white)', fontWeight: 600 }}>{item.val}</span>
              </div>
            ))}
            <div className="p-6 mt-1" style={{ borderTop: '1px solid var(--ghost-line)', background: 'rgba(174,255,0,0.03)' }}>
              <p className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: '1.8' }}>
                Pricing is handled privately. Market benchmarks:{' '}
                <span style={{ color: 'var(--white)' }}>LBS AI Masterclass £3,500 / MIT no-code $3,500 / Executive cohorts up to $50K.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Built for / Not for */}
        <div className="grid md:grid-cols-2 gap-px mb-24" style={{ background: 'var(--ghost-line)' }}>
          <div className="p-10" style={{ background: 'var(--obsidian)' }}>
            <div className="label mb-6">// This is for</div>
            {[
              'Executives who know AI matters but don\'t know where to start',
              'Business owners who want applied knowledge, not theory',
              'Entrepreneurs who need to lead their team on AI decisions',
              'Operators who want the real picture — hype vs. signal',
              'Anyone willing to be in a room with 5 other serious people',
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
              'Anyone looking for a certificate to show HR',
              'People who want beginner-level "what is ChatGPT" content',
              'Those not willing to show up fully for 2–3 days',
              'Anyone who wants a recording to watch later at 1.5×',
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
          <div className="label mb-4">// Closed Cohort</div>
          <h3 className="font-display mb-4" style={{ fontSize: 'clamp(28px, 3vw, 50px)', color: 'var(--white)' }}>
            Apply for the next cohort.
          </h3>
          <p className="font-mono mb-10" style={{ fontSize: '12px', color: 'var(--grey)', lineHeight: '1.9' }}>
            This isn't for everyone.{' '}
            <span style={{ color: 'var(--white)' }}>Maximum 6 people per intake.</span>
            <br />
            Ibiza in-person intensives. Private remote cohorts available.
            <br />
            <span style={{ color: 'var(--muted)' }}>Enquire to find out if the next cohort is open and if it's the right fit.</span>
          </p>
          <a href="#contact" className="btn-primary" style={{ fontSize: '12px', padding: '16px 40px' }}>
            &gt; Apply for the Next Cohort
          </a>
        </div>

      </div>
    </section>
  )
}
