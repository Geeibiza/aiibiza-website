export default function OpenClaw() {
  const lines = [
    { key: 'system', val: 'OpenClaw v2', color: 'var(--white)' },
    { key: 'status', val: '[OPERATIONAL]', color: 'var(--lime)' },
    { key: 'access', val: 'private client deployment', color: 'var(--white)' },
    { key: 'data_sovereignty', val: 'absolute', color: 'var(--phosphor)' },
    { key: 'components', val: 'obsidian / qmd-llm / telegram / mac-mini', color: 'var(--white)' },
    { key: 'cloud_claws', val: 'kali-linux distributed / active', color: 'var(--phosphor)' },
    { key: 'cloud_dependency', val: 'NONE', color: 'var(--lime)' },
  ]

  return (
    <section
      id="openclaw"
      className="py-32 reveal"
      style={{
        background: 'linear-gradient(180deg, var(--void) 0%, var(--terminal-dark) 50%, var(--void) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="w-full h-px mb-24" style={{ background: 'var(--ghost-line)' }} />

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left: copy */}
          <div>
            <div className="label mb-8">// Flagship Infrastructure</div>
            <h2
              className="font-display mb-8"
              style={{ fontSize: 'clamp(40px, 5vw, 68px)', color: 'var(--white)' }}
            >
              Private AI that
              <br />
              <span style={{ color: 'var(--lime)' }}>belongs to you.</span>
              <br />
              Not to a server
              <br />
              farm in Virginia.
            </h2>

            <p className="font-mono mb-6" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9' }}>
              No cloud dependency. No data leaving your environment. No subscription to a platform that can change its pricing on a Tuesday morning.
            </p>
            <p className="font-mono mb-10" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9' }}>
              Your knowledge, mapped. Your processes, automated.{' '}
              <span style={{ color: 'var(--white)' }}>Your intelligence, owned.</span>
            </p>

            <a href="#contact" className="btn-primary">
              &gt; Discuss Your Infrastructure
            </a>
          </div>

          {/* Right: terminal */}
          <div>
            {/* Terminal window chrome */}
            <div
              style={{
                background: 'var(--terminal-dark)',
                border: '1px solid var(--ghost-line)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              {/* Title bar */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: 'var(--obsidian)', borderBottom: '1px solid var(--ghost-line)' }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
                <span className="font-mono text-xs ml-4" style={{ color: 'var(--muted)', fontSize: '10px' }}>
                  openclaw — system status
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm" style={{ fontSize: '12px', lineHeight: '2.2', color: 'var(--phosphor)' }}>
                <div style={{ color: 'var(--muted)', marginBottom: '8px' }}>$ openclaw --status --verbose</div>
                {lines.map((line, i) => (
                  <div key={line.key} style={{ animationDelay: `${i * 0.1}s` }}>
                    <span style={{ color: 'var(--muted)' }}>{line.key}: </span>
                    <span style={{ color: line.color }}>{line.val}</span>
                  </div>
                ))}
                <div className="mt-4">
                  <span style={{ color: 'var(--lime)' }}>$</span>{' '}
                  <span className="cursor-blink" style={{ color: 'var(--lime)' }}>█</span>
                </div>
              </div>
            </div>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              {['Obsidian Vault', 'QMD Local LLM', 'Telegram API', 'Mac Mini', 'Cloud Claws', 'Kali Linux'].map(tag => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5"
                  style={{
                    border: '1px solid var(--ghost-line)',
                    color: 'var(--grey)',
                    fontSize: '10px',
                    letterSpacing: '0.06em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
