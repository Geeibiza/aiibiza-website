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
            Before the internet was public,
            <br />
            there was a network.
            <br />
            <span style={{ color: 'var(--sand)' }}>We were already on it.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-16 items-start">

          {/* Photo */}
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
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.9) 0%, transparent 60%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="terminal-block" style={{ padding: '12px 16px', fontSize: '10px' }}>
                  <div>identity: <span style={{ color: 'var(--white)' }}>FOUNDER / AI IBIZA</span></div>
                  <div>first_computer: <span style={{ color: 'var(--lime)' }}>C64 / age 15 / still running</span></div>
                  <div>network_access: <span style={{ color: 'var(--phosphor)' }}>pre-public internet</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="md:col-span-8 space-y-12">

            {/* Chapter 1 */}
            <div>
              <h3 className="font-mono text-xs mb-4" style={{ color: 'var(--lime)', letterSpacing: '0.15em' }}>
                01 / THE FIRST MACHINE
              </h3>
              <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                At fifteen years old, a <span style={{ color: 'var(--white)' }}>Commodore 64</span> arrived. Most people who got one played games. This one became a window into something else entirely — into what networks could do, into what it meant to connect machines across distance and make them talk.
              </p>
              <p className="font-mono mt-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                That Commodore 64 <span style={{ color: 'var(--white)' }}>still works today.</span> That is not a detail. That is a philosophy.
              </p>
            </div>

            {/* Chapter 2 */}
            <div>
              <h3 className="font-mono text-xs mb-4" style={{ color: 'var(--lime)', letterSpacing: '0.15em' }}>
                02 / BEFORE THE INTERNET WAS PUBLIC
              </h3>
              <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                The public internet did not exist yet. But the network did. Universities and government research labs were running{' '}
                <span style={{ color: 'var(--white)' }}>CDC 6500 and CDC 6600 Mainframes</span> — among the most powerful computers ever built at the time, connected through early precursors to what would eventually become the internet. Access was restricted, specialized, and required knowing exactly where to dial.
              </p>
              <p className="font-mono mt-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                Through <span style={{ color: 'var(--white)' }}>university dial-back numbers</span>, the founder of AI Ibiza was on those systems — exploring ARPANET-era infrastructure years before the web existed, years before any of this had a name that the general public would recognize. Not as a spectator. As a participant.
              </p>
            </div>

            {/* Chapter 3 */}
            <div>
              <h3 className="font-mono text-xs mb-4" style={{ color: 'var(--lime)', letterSpacing: '0.15em' }}>
                03 / THUNDERDOME
              </h3>
              <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                When BBS networks emerged as the communication layer of the pre-web underground, the natural response was to build one. Not a small one.{' '}
                <span style={{ color: 'var(--white)' }}>Thunderdome ran 10 lines</span> — ten simultaneous connections at a time when most operations ran one or two. It operated from a dedicated server with terminals running in a bedroom — not a corporate office, not a university lab. A bedroom, by someone who understood exactly what they were building.
              </p>
              <p className="font-mono mt-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                Thunderdome was one of the largest BBS networks of its era. It was a community, an infrastructure project, and a proof of concept — all at once.
              </p>
            </div>

            {/* Terminal detail */}
            <div className="terminal-block">
              <div>system: <span style={{ color: 'var(--white)' }}>THUNDERDOME BBS</span></div>
              <div>lines: <span style={{ color: 'var(--lime)' }}>10 simultaneous connections</span></div>
              <div>hardware: <span style={{ color: 'var(--white)' }}>dedicated server / bedroom terminals</span></div>
              <div>era: <span style={{ color: 'var(--white)' }}>pre-public internet / ARPANET adjacent</span></div>
              <div>prior_access: <span style={{ color: 'var(--phosphor)' }}>CDC 6500/6600 via university dial-back</span></div>
              <div>first_computer: <span style={{ color: 'var(--white)' }}>Commodore 64 / age 15</span></div>
              <div>c64_status: <span style={{ color: 'var(--lime)' }}>[STILL OPERATIONAL]</span></div>
            </div>

            {/* Chapter 4 */}
            <div>
              <h3 className="font-mono text-xs mb-4" style={{ color: 'var(--lime)', letterSpacing: '0.15em' }}>
                04 / THE CHAIN
              </h3>
              <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                In <span style={{ color: 'var(--white)' }}>2009</span>, Bitcoin existed for one year. The whitepaper was thirteen months old. Most people who would eventually become advocates were, in 2009, doing something else entirely. The founder of AI Ibiza was mining Bitcoin — not as a trade, as a conviction. The same instinct that dialed into university mainframes in the pre-internet era recognized immediately what the blockchain architecture meant.
              </p>
              <p className="font-mono mt-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                That conviction compounded. Into Web3. Into DeFi from its earliest, most unformed days. Into the AI infrastructure that now runs continuously from a private data center — OpenClaw clusters, Cloud Claws, Kali Linux systems under centralized orchestration.
              </p>
              <p className="font-mono mt-4" style={{ fontSize: '13px', color: 'var(--white)', lineHeight: '1.95', fontStyle: 'italic' }}>
                The same person. The same instinct. Four decades of arriving first.
              </p>
            </div>

            {/* Chapter 5 */}
            <div>
              <h3 className="font-mono text-xs mb-4" style={{ color: 'var(--lime)', letterSpacing: '0.15em' }}>
                05 / THE INFRASTRUCTURE
              </h3>
              <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.95' }}>
                A private data center, purpose-built for AI workloads. OpenClaw clusters — private compute arrays built from{' '}
                <span style={{ color: 'var(--white)' }}>4 Mac Minis or 4 Mac Studios</span>, configured for continuous AI inference and automation. Cloud Claws — distributed Kali Linux orchestration running silently across environments.
              </p>
              <p className="font-mono mt-4" style={{ fontSize: '13px', color: 'var(--white)', lineHeight: '1.95', fontStyle: 'italic' }}>
                This is what it means when we say we run AI. Not prompt. Run.
              </p>
            </div>

            {/* Quote */}
            <div
              className="py-8 px-8"
              style={{ borderLeft: '2px solid var(--sand)', background: 'rgba(212,175,106,0.04)' }}
            >
              <p className="font-display" style={{ fontSize: '28px', color: 'var(--white)', lineHeight: '1.3' }}>
                "The Commodore 64 from age fifteen still works. The systems that matter keep running."
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
