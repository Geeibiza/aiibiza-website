export default function Credibility() {
  return (
    <section className="py-24 reveal" id="credibility">
      <div className="max-w-7xl mx-auto px-8">

        <div className="w-full h-px mb-24" style={{ background: 'var(--ghost-line)' }} />

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="label mb-8">// Est. before the internet was public</div>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(42px, 5vw, 72px)', color: 'var(--white)' }}
            >
              Most people discovered
              the internet.
              <br />
              <span style={{ color: 'var(--sand)' }}>We were already on it.</span>
            </h2>
          </div>

          {/* Right */}
          <div style={{ paddingTop: '8px' }}>
            <p className="font-mono mb-5" style={{ color: 'var(--grey)', fontSize: '13px', lineHeight: '1.9' }}>
              Before browsers. Before the web. Before any of this had a name the public would recognize. The founder of AI Ibiza was accessing university mainframes through dial-back numbers —{' '}
              <span style={{ color: 'var(--white)' }}>CDC 6500 and CDC 6600 systems</span>, the most powerful computers of their era, running on restricted ARPANET-adjacent networks.
            </p>
            <p className="font-mono mb-10" style={{ color: 'var(--grey)', fontSize: '13px', lineHeight: '1.9' }}>
              A Commodore 64 at age fifteen. A 10-line BBS called Thunderdome running from a dedicated server with bedroom terminals. Bitcoin mined in 2009. DeFi from day one. And now — a private AI data center, OpenClaw clusters, and systems that run without pause.{' '}
              <span style={{ color: 'var(--white)' }}>Four decades of arriving first.</span>
            </p>

            <div className="terminal-block">
              <div>first_computer: <span style={{ color: 'var(--white)' }}>Commodore 64 / age 15 / still running</span></div>
              <div>bbs: <span style={{ color: 'var(--white)' }}>Thunderdome / 10 lines / bedroom server</span></div>
              <div>pre_internet: <span style={{ color: 'var(--lime)' }}>CDC 6500 + 6600 via university dial-back</span></div>
              <div>btc: <span style={{ color: 'var(--white)' }}>mining since 2009</span></div>
              <div>web3: <span style={{ color: 'var(--white)' }}>DeFi since 2020</span></div>
              <div>infrastructure: <span style={{ color: 'var(--phosphor)' }}>OpenClaw / Cloud Claws / active</span></div>
            </div>

            <a href="#about" className="btn-ghost mt-8 inline-block" style={{ fontSize: '10px' }}>
              &gt; Read the full story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
