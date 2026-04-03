export default function About() {
  return (
    <section id="about" className="py-32 reveal">
      <div className="max-w-7xl mx-auto px-8">

        <div className="w-full h-px mb-24" style={{ background: 'var(--ghost-line)' }} />

        {/* Header */}
        <div className="mb-20">
          <div className="label mb-8">// Who we are</div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(48px, 7vw, 100px)', color: 'var(--white)', maxWidth: '900px' }}
          >
            Before the web was public,
            <br />
            there was a network.
            <br />
            <span style={{ color: 'var(--sand)' }}>And we were running it.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-16 items-start">

          {/* Photo column */}
          <div className="md:col-span-4">
            <div
              className="relative overflow-hidden"
              style={{
                border: '1px solid var(--ghost-line)',
                boxShadow: '0 0 60px rgba(123,47,255,0.1)',
              }}
            >
              <img
                src="/founder.jpg"
                alt="AI Ibiza Founder"
                className="w-full object-cover"
                style={{
                  filter: 'grayscale(100%) contrast(1.05)',
                  display: 'block',
                  maxHeight: '580px',
                  objectPosition: 'center top',
                }}
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(10,10,15,0.9) 0%, transparent 60%)',
                }}
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="terminal-block" style={{ padding: '12px 16px', fontSize: '10px' }}>
                  <div>identity: <span style={{ color: 'var(--white)' }}>FOUNDER / AI IBIZA</span></div>
                  <div>since: <span style={{ color: 'var(--lime)' }}>before the question was asked</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Story column */}
          <div className="md:col-span-8 space-y-10">

            {/* Chapter 1 */}
            <div>
              <h3 className="font-mono text-xs mb-4" style={{ color: 'var(--lime)', letterSpacing: '0.15em' }}>
                01 / THE BEGINNING
              </h3>
              <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                This story starts before the web. Before HTML. Before browsers. Before the internet became public infrastructure.
              </p>
              <p className="font-mono mt-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                Operating <span style={{ color: 'var(--white)' }}>Thunderdome</span> — one of the largest BBS networks of its era, built on a{' '}
                <span style={{ color: 'var(--white)' }}>Commodore 64 that remains functional to this day</span> — the conviction that networks change everything was established decades before it became obvious to everyone else.
              </p>
            </div>

            {/* Chapter 2 */}
            <div>
              <h3 className="font-mono text-xs mb-4" style={{ color: 'var(--lime)', letterSpacing: '0.15em' }}>
                02 / THE CHAIN
              </h3>
              <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                In <span style={{ color: 'var(--white)' }}>2009</span>, Bitcoin existed for one year. The whitepaper was thirteen months old. Most people who eventually became advocates were, in 2009, doing something else entirely.
              </p>
              <p className="font-mono mt-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                The founder of AI Ibiza was mining Bitcoin. Not as a hedge. As a conviction. That early involvement compounded into Web3, into DeFi — from the early days when the protocols were new and the learning curve had no guardrails.
              </p>
            </div>

            {/* Chapter 3 */}
            <div>
              <h3 className="font-mono text-xs mb-4" style={{ color: 'var(--lime)', letterSpacing: '0.15em' }}>
                03 / THE INFRASTRUCTURE
              </h3>
              <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                A <span style={{ color: 'var(--white)' }}>private data center</span>, purpose-built for AI workloads. OpenClaw clusters. Cloud Claws — a distributed network of Kali Linux systems under centralized orchestration.
              </p>
              <p className="font-mono mt-4" style={{ fontSize: '13px', color: 'var(--white)', lineHeight: '1.95', fontStyle: 'italic' }}>
                This is what it means when we say we run AI. Not prompt. Run.
              </p>
            </div>

            {/* Quote */}
            <div
              className="py-8 px-8"
              style={{
                borderLeft: '2px solid var(--sand)',
                background: 'rgba(212,175,106,0.04)',
              }}
            >
              <p
                className="font-display"
                style={{ fontSize: '28px', color: 'var(--white)', lineHeight: '1.3' }}
              >
                "The Commodore 64 that ran Thunderdome still works. The systems that matter keep running."
              </p>
            </div>

            {/* Philosophy note */}
            <div>
              <h3 className="font-mono text-xs mb-4" style={{ color: 'var(--lime)', letterSpacing: '0.15em' }}>
                04 / WHY IBIZA
              </h3>
              <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                AI Ibiza operates from Ibiza — an island that has always attracted people who do things differently. The people who built underground cultures, music that changed how the world dances, art that refused to wait for institutional approval — they were in Ibiza when others had not yet arrived.
              </p>
              <p className="font-mono mt-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                We work with a small number of clients. Deliberately.{' '}
                <span style={{ color: 'var(--white)' }}>There is no interest in volume. There is intense interest in outcomes.</span>
              </p>
            </div>

            <a href="#contact" className="btn-primary inline-block">
              &gt; If this resonates, start here
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
