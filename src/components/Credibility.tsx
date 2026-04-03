export default function Credibility() {
  return (
    <section className="py-24 reveal" id="credibility">
      <div className="max-w-7xl mx-auto px-8">

        {/* Divider */}
        <div className="w-full h-px mb-24" style={{ background: 'var(--ghost-line)' }} />

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="label mb-8">// Est. before the web was public</div>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(42px, 5vw, 72px)', color: 'var(--white)' }}
            >
              Most people discovered the internet.
              <br />
              <span style={{ color: 'var(--sand)' }}>We helped build it.</span>
            </h2>
          </div>

          {/* Right */}
          <div style={{ paddingTop: '8px' }}>
            <p className="font-mono text-sm leading-relaxed mb-6" style={{ color: 'var(--grey)', fontSize: '13px', lineHeight: '1.9' }}>
              Before social media. Before Web3. Before AI was a boardroom word. There was a network — and there were the people who ran it.
            </p>
            <p className="font-mono text-sm leading-relaxed mb-10" style={{ color: 'var(--grey)', fontSize: '13px', lineHeight: '1.9' }}>
              The founder of AI Ibiza was one of them. Operating Thunderdome, one of the largest BBS networks of its era, running on a Commodore 64 that{' '}
              <span style={{ color: 'var(--white)' }}>still functions today.</span>{' '}
              Mining Bitcoin in 2009 — not as a trade, as a conviction. Navigating DeFi when it was still dangerous and new.
            </p>

            {/* Terminal block */}
            <div className="terminal-block">
              <div>network: <span style={{ color: 'var(--white)' }}>THUNDERDOME / BBS</span></div>
              <div>hardware: <span style={{ color: 'var(--white)' }}>Commodore 64</span></div>
              <div>status: <span style={{ color: 'var(--lime)' }}>[STILL OPERATIONAL]</span></div>
              <div>btc_mined: <span style={{ color: 'var(--white)' }}>since block #0 era / 2009</span></div>
              <div>web3: <span style={{ color: 'var(--white)' }}>active since 2020</span></div>
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
