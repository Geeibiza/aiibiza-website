const packages = [
  {
    name: 'OpenClaw Mini',
    hardware: '4 × Mac Mini',
    tagline: 'Full power. Compact form.',
    specs: ['4-node local AI cluster', 'Unified Obsidian knowledge graph', 'QMD local LLM stack', 'Telegram control interface', 'iPad command dashboard', 'iPhone remote access'],
    ideal: 'Small businesses, private clients, home offices',
  },
  {
    name: 'OpenClaw Studio',
    hardware: '4 × Mac Studio',
    tagline: 'Maximum inference. Zero compromise.',
    specs: ['4-node high-performance cluster', 'Extended AI model capacity', 'Multi-environment Cloud Claws', 'Full Kali Linux orchestration', 'iPad command dashboard', 'iPhone remote access'],
    ideal: 'Enterprise clients, research, heavy automation workloads',
  },
]

const systemLines = [
  { key: 'system', val: 'OpenClaw v2', color: 'var(--white)' },
  { key: 'status', val: '[OPERATIONAL]', color: 'var(--lime)' },
  { key: 'cluster', val: '4-node / mac-mini or mac-studio', color: 'var(--white)' },
  { key: 'data_sovereignty', val: 'absolute', color: 'var(--phosphor)' },
  { key: 'components', val: 'obsidian / qmd-llm / telegram / ipad / iphone', color: 'var(--white)' },
  { key: 'cloud_claws', val: 'kali-linux distributed / active', color: 'var(--phosphor)' },
  { key: 'cloud_dependency', val: 'NONE', color: 'var(--lime)' },
  { key: 'package', val: 'hardware + software + setup included', color: 'var(--white)' },
]

export default function OpenClaw() {
  return (
    <section
      id="openclaw"
      className="py-32 reveal"
      style={{ background: 'linear-gradient(180deg, var(--void) 0%, var(--terminal-dark) 50%, var(--void) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="w-full h-px mb-24" style={{ background: 'var(--ghost-line)' }} />

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-20 items-start mb-20">
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
              No cloud dependency. No data leaving your environment. No subscription to a platform that changes its pricing on a Tuesday morning.
            </p>
            <p className="font-mono mb-10" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9' }}>
              Your knowledge, mapped. Your processes, automated.{' '}
              <span style={{ color: 'var(--white)' }}>Your intelligence, owned.</span>
            </p>

            <a href="#contact" className="btn-primary">
              &gt; Discuss Your Infrastructure
            </a>
          </div>

          {/* Terminal window */}
          <div>
            <div style={{ background: 'var(--terminal-dark)', border: '1px solid var(--ghost-line)', borderRadius: '2px', overflow: 'hidden' }}>
              <div className="flex items-center gap-2 px-4 py-3" style={{ background: 'var(--obsidian)', borderBottom: '1px solid var(--ghost-line)' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
                <span className="font-mono ml-4" style={{ color: 'var(--muted)', fontSize: '10px' }}>openclaw — system status</span>
              </div>
              <div className="p-6 font-mono" style={{ fontSize: '12px', lineHeight: '2.2', color: 'var(--phosphor)' }}>
                <div style={{ color: 'var(--muted)', marginBottom: '8px' }}>$ openclaw --status --verbose</div>
                {systemLines.map(line => (
                  <div key={line.key}>
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
          </div>
        </div>

        {/* Package section */}
        <div>
          <div className="label mb-10" style={{ color: 'var(--muted)' }}>// Complete Hardware Packages — delivered, installed, yours</div>

          <div className="grid md:grid-cols-2 gap-px" style={{ background: 'var(--ghost-line)' }}>
            {packages.map(pkg => (
              <div
                key={pkg.name}
                className="service-card p-10"
              >
                {/* Package header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="label mb-2" style={{ color: 'var(--lime)' }}>{pkg.hardware}</div>
                    <h3 className="font-display" style={{ fontSize: '38px', color: 'var(--white)' }}>{pkg.name}</h3>
                  </div>
                  <span className="label" style={{ color: 'var(--muted)', fontSize: '9px' }}>ASK FOR PRICE →</span>
                </div>

                <p className="font-mono mb-8" style={{ fontSize: '11px', color: 'var(--lime)', fontStyle: 'italic' }}>
                  "{pkg.tagline}"
                </p>

                {/* Specs */}
                <div className="space-y-2 mb-8">
                  {pkg.specs.map(spec => (
                    <div key={spec} className="flex items-center gap-3">
                      <span style={{ color: 'var(--phosphor)', fontSize: '10px' }}>✓</span>
                      <span className="font-mono" style={{ fontSize: '12px', color: 'var(--grey)' }}>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* What's in the box */}
                <div className="terminal-block" style={{ padding: '12px 16px', fontSize: '10px', marginBottom: '16px' }}>
                  <div style={{ color: 'var(--muted)', marginBottom: '4px' }}>in_the_box:</div>
                  <div>&nbsp;&nbsp;hardware: <span style={{ color: 'var(--white)' }}>{pkg.hardware} cluster</span></div>
                  <div>&nbsp;&nbsp;tablet: <span style={{ color: 'var(--white)' }}>iPad (command dashboard)</span></div>
                  <div>&nbsp;&nbsp;mobile: <span style={{ color: 'var(--white)' }}>iPhone (remote access)</span></div>
                  <div>&nbsp;&nbsp;software: <span style={{ color: 'var(--lime)' }}>OpenClaw stack, fully configured</span></div>
                  <div>&nbsp;&nbsp;setup: <span style={{ color: 'var(--phosphor)' }}>installed and handed over</span></div>
                </div>

                <div className="font-mono" style={{ fontSize: '10px', color: 'var(--muted)' }}>
                  Ideal for: <span style={{ color: 'var(--grey)' }}>{pkg.ideal}</span>
                </div>
              </div>
            ))}
          </div>

          {/* What's always included */}
          <div
            className="mt-px p-10"
            style={{ background: 'var(--obsidian)', border: '1px solid var(--ghost-line)' }}
          >
            <div className="label mb-6" style={{ color: 'var(--muted)' }}>// Every OpenClaw package includes</div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '⬡', title: 'Obsidian Vault', desc: 'Your knowledge graph — mapped, linked, queryable' },
                { icon: '⬡', title: 'QMD Local LLM', desc: 'Local AI model. No cloud. No data leakage.' },
                { icon: '⬡', title: 'Telegram API', desc: 'Command your entire stack from a message' },
                { icon: '⬡', title: 'Cloud Claws', desc: 'Kali Linux distributed automation layer' },
              ].map(item => (
                <div key={item.title}>
                  <div className="font-mono mb-2" style={{ fontSize: '10px', color: 'var(--lime)' }}>{item.title}</div>
                  <p className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: '1.7' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: '1px solid var(--ghost-line)' }}>
              <p className="font-mono" style={{ fontSize: '12px', color: 'var(--grey)' }}>
                Every deployment includes full documentation, handover session, and 30-day support.
              </p>
              <a href="#contact" className="btn-primary" style={{ fontSize: '10px', padding: '12px 24px' }}>
                &gt; Enquire About OpenClaw
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
