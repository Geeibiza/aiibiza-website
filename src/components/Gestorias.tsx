const problems = [
  {
    stat: '60,000+',
    label: 'gestorías in Spain',
    desc: 'Running on software built in the 1990s. A3, Sage Despachos, ContaPlus. Zero meaningful AI. The market is completely wide open.',
  },
  {
    stat: '€20M',
    label: 'AEPD maximum fine',
    desc: 'The AEPD has published explicit guidance: using ChatGPT or Claude.ai with client financial data is a GDPR violation. The fines are real.',
  },
  {
    stat: '4×',
    label: 'per year the crunch hits',
    desc: 'Jan 20. Apr 20. Jul 20. Oct 20. Every quarter: staff working nights chasing invoices on WhatsApp, typing data manually into A3. Every single year.',
  },
]

const outcomes = [
  { label: 'Document processing', before: '600 hrs/year', after: '150 hrs/year' },
  { label: 'Alegaciones drafting', before: '4–8 hours each', after: '45 minutes' },
  { label: 'BOE monitoring', before: 'Manual / missed', after: 'Automated daily' },
  { label: 'Client emails', before: '2+ hrs/week', after: 'Minutes' },
]

export default function Gestorias() {
  return (
    <section
      id="gestorias"
      className="py-32 reveal"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.12) saturate(0.6)',
          zIndex: 0,
        }}
      >
        <source src="/gestor-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
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
          <div className="label mb-8" style={{ color: 'var(--muted)' }}>// For Gestorías</div>
          <h2
            className="font-display mb-10"
            style={{ fontSize: 'clamp(38px, 5vw, 72px)', color: 'var(--white)', lineHeight: 1.05, maxWidth: '780px' }}
          >
            El sistema que
            <br />
            <span style={{ color: 'var(--lime)' }}>Hacienda no</span>
            <br />
            puede tocar.
          </h2>
          <p className="font-mono" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9', maxWidth: '520px' }}>
            Private AI for gestorías. GDPR compliant. Runs inside your despacho.
            <br />
            <span style={{ color: 'var(--white)' }}>No cloud. No violation. No quarterly crunch.</span>
          </p>
        </div>

        {/* 3 Problems */}
        <div className="grid md:grid-cols-3 gap-px mb-px" style={{ background: 'var(--ghost-line)' }}>
          {problems.map(p => (
            <div key={p.stat} className="p-10" style={{ background: 'var(--obsidian)' }}>
              <div
                className="font-mono mb-1"
                style={{ fontSize: 'clamp(36px, 3.5vw, 58px)', color: 'var(--danger, #f87171)', lineHeight: 1, fontWeight: 700 }}
              >
                {p.stat}
              </div>
              <div className="font-mono mb-6" style={{ fontSize: '11px', color: 'var(--grey)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.label}</div>
              <p className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* AEPD callout */}
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
              <span style={{ color: 'var(--white)' }}>AEPD Guía sobre Inteligencia Artificial y Protección de Datos (2024):</span> Using cloud AI tools with client data — NIF, bank statements, nóminas, tax returns — without a compliant DPA and legal basis violates GDPR Article 28 and LOPD-GDD. As a sujeto obligado under Ley 10/2010, you cannot share client financial profiles with unvetted third parties.{' '}
              <span style={{ color: 'rgba(248,113,113,0.8)' }}>Every cloud AI vendor is a documented compliance risk.</span>
            </p>
          </div>
        </div>

        {/* 2-col: copy + comparison */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <div className="label mb-6" style={{ color: 'var(--muted)' }}>// The Only Compliant Architecture</div>
            <h3
              className="font-display mb-8"
              style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', color: 'var(--white)', lineHeight: 1.15 }}
            >
              AI que vive dentro
              <br />
              <span style={{ color: 'var(--lime)' }}>de tu despacho.</span>
              <br />
              No en su nube.
            </h3>
            <p className="font-mono mb-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9' }}>
              A private AI system built for your gestoría — running on hardware in your possession. Your client documents, your processes, your tax knowledge base. Answering only to you.
            </p>
            <p className="font-mono mb-4" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9' }}>
              It reads invoices, drafts alegaciones, monitors the BOE, writes client emails, and answers deductibility questions — all without a single byte leaving your building.
            </p>
            <p className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.9' }}>
              We don't consult on private infrastructure from a cloud laptop.{' '}
              <span style={{ color: 'var(--white)' }}>We operate our own private data centre in Thailand</span> — the same architecture, running continuously. We build for clients exactly what we run ourselves.
            </p>
          </div>

          {/* Comparison table */}
          <div style={{ background: 'var(--terminal-dark)', border: '1px solid var(--ghost-line)' }}>
            <div className="p-6" style={{ borderBottom: '1px solid var(--ghost-line)' }}>
              <div className="grid grid-cols-3 gap-4">
                <div />
                <div className="font-mono text-center" style={{ fontSize: '10px', color: 'var(--muted)' }}>Cloud AI</div>
                <div className="font-mono text-center" style={{ fontSize: '10px', color: 'var(--lime)' }}>Private AI</div>
              </div>
            </div>
            {[
              { label: 'Data leaves despacho', cloud: '✗', priv: '✓ Never' },
              { label: 'GDPR Art. 28 compliant', cloud: '✗', priv: '✓ Yes' },
              { label: 'LOPD-GDD compliant', cloud: '✗', priv: '✓ Yes' },
              { label: 'Secreto profesional intact', cloud: '✗', priv: '✓ Always' },
              { label: 'Works offline', cloud: '✗', priv: '✓ Always' },
              { label: 'Trains on your data', cloud: '✗ Possibly', priv: '✓ Never' },
              { label: 'AEPD violation risk', cloud: '✗ Real', priv: '✓ None' },
              { label: 'You own the system', cloud: '✗', priv: '✓ Completely' },
            ].map(row => (
              <div key={row.label} className="grid grid-cols-3 gap-4 px-6 py-3" style={{ borderBottom: '1px solid var(--ghost-line)' }}>
                <div className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>{row.label}</div>
                <div className="font-mono text-center" style={{ fontSize: '11px', color: 'rgba(248,113,113,0.7)' }}>{row.cloud}</div>
                <div className="font-mono text-center" style={{ fontSize: '11px', color: 'var(--phosphor)' }}>{row.priv}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What it does */}
        <div className="mb-24">
          <div className="label mb-10" style={{ color: 'var(--muted)' }}>// What Changes</div>
          <div className="grid md:grid-cols-4 gap-px" style={{ background: 'var(--ghost-line)' }}>
            {outcomes.map(o => (
              <div key={o.label} className="p-8" style={{ background: 'var(--obsidian)' }}>
                <div className="font-mono mb-6" style={{ fontSize: '10px', color: 'var(--lime)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{o.label}</div>
                <div className="font-mono mb-2" style={{ fontSize: '11px', color: 'rgba(248,113,113,0.6)', textDecoration: 'line-through' }}>{o.before}</div>
                <div className="font-mono" style={{ fontSize: '18px', color: 'var(--white)', fontWeight: 600 }}>{o.after}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What AI does — 5 use cases */}
        <div className="mb-24">
          <div className="label mb-10" style={{ color: 'var(--muted)' }}>// Five Things It Does For You</div>
          <div className="grid md:grid-cols-2 gap-px" style={{ background: 'var(--ghost-line)' }}>
            {[
              {
                num: '01',
                title: 'Document Avalanche',
                desc: 'Invoices arrive as WhatsApp photos, PDFs, scans. AI reads every one — extracts NIF, fecha, base imponible, IVA type — validates requisitos of RD 1619/2012, flags anomalies, pre-fills your A3 or Sage. 70–80% less manual entry.',
              },
              {
                num: '02',
                title: 'Alegaciones Drafting',
                desc: 'Hacienda sends a requerimiento. AI classifies the procedure, identifies the legal articles, suggests documentation, drafts a complete escrito de alegaciones with encabezamiento, antecedentes, fundamentos de derecho, solicitud. From 6 hours to 45 minutes.',
              },
              {
                num: '03',
                title: 'BOE Intelligence',
                desc: 'AI monitors the BOE daily. When a change in tipos, modelos, or deducciones affects your specific clients — it tells you immediately, explains the impact, and drafts the client communication. You stop missing regulatory changes.',
              },
              {
                num: '04',
                title: 'Nómina & Convenio Watch',
                desc: 'Tracks convenios colectivos for every client\'s employees. Alerts when antigüedad tranches are reached, when tabla salarial revisions are due, when a new BOE publication changes the terms. Answers: which of my clients are affected?',
              },
              {
                num: '05',
                title: 'Deductibility Engine',
                desc: 'Client asks: "Can I deduct my car? My phone? My home office?" AI answers with current DGT criteria and legal citation — instantly, correctly. Frees gestores from hours of reactive research and WhatsApp replies.',
              },
            ].map(uc => (
              <div key={uc.num} className="p-10" style={{ background: 'var(--obsidian)' }}>
                <div className="label mb-3" style={{ color: 'var(--muted)', fontSize: '9px' }}>{uc.num}</div>
                <div className="font-mono mb-4" style={{ fontSize: '14px', color: 'var(--white)', fontWeight: 600 }}>{uc.title}</div>
                <p className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8' }}>{uc.desc}</p>
              </div>
            ))}
            {/* ROI card */}
            <div className="p-10" style={{ background: 'rgba(174,255,0,0.04)', border: '1px solid rgba(174,255,0,0.1)' }}>
              <div className="label mb-3" style={{ color: 'var(--lime)', fontSize: '9px' }}>THE NUMBERS</div>
              <div className="font-mono mb-4" style={{ fontSize: '14px', color: 'var(--white)', fontWeight: 600 }}>ROI in Weeks</div>
              {[
                { label: 'Staff hours saved / year', val: '450 hrs' },
                { label: 'At €25/hr staff cost', val: '€11,250' },
                { label: 'New capacity freed', val: '30% more clients' },
                { label: 'System cost', val: 'Fraction of savings' },
              ].map(r => (
                <div key={r.label} className="flex justify-between mb-3" style={{ borderBottom: '1px solid var(--ghost-line)', paddingBottom: '8px' }}>
                  <span className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>{r.label}</span>
                  <span className="font-mono" style={{ fontSize: '11px', color: 'var(--lime)' }}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who it's for */}
        <div className="grid md:grid-cols-2 gap-px mb-24" style={{ background: 'var(--ghost-line)' }}>
          <div className="p-10" style={{ background: 'var(--obsidian)' }}>
            <div className="label mb-6" style={{ color: 'var(--muted)' }}>// Built for</div>
            {[
              'Solo gestores with 50–200 clients',
              'Despachos with 2–15 staff',
              'Gestorías handling autónomos + sociedades',
              'Firms with SII clients (real-time VAT)',
              'Any gestoría drowning in the quarterly crunch',
              'Gestores who want to grow without hiring',
            ].map(item => (
              <div key={item} className="flex items-center gap-3 mb-3">
                <span style={{ color: 'var(--phosphor)', fontSize: '9px' }}>→</span>
                <span className="font-mono" style={{ fontSize: '12px', color: 'var(--grey)' }}>{item}</span>
              </div>
            ))}
          </div>
          <div className="p-10" style={{ background: 'var(--obsidian)' }}>
            <div className="label mb-6" style={{ color: 'var(--muted)' }}>// Not for</div>
            {[
              'Gestorías looking for a cheap chatbot',
              'Anyone who wants to keep using ChatGPT with client data',
              'Large corporate tax departments with enterprise vendors',
              'Anyone not serious about GDPR compliance',
            ].map(item => (
              <div key={item} className="flex items-center gap-3 mb-3">
                <span style={{ color: 'rgba(248,113,113,0.5)', fontSize: '9px' }}>✗</span>
                <span className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)' }}>{item}</span>
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
          <h3 className="font-display mb-4" style={{ fontSize: 'clamp(28px, 3vw, 44px)', color: 'var(--white)' }}>
            Book a 30-minute call.
          </h3>
          <p className="font-mono mb-10" style={{ fontSize: '12px', color: 'var(--grey)', lineHeight: '1.9' }}>
            No technical knowledge required.
            <br />
            I'll show you exactly what the system does — using your type of work.
            <br />
            <span style={{ color: 'var(--white)' }}>Private clients only. Available remotely worldwide.</span>
          </p>
          <a href="#contact" className="btn-primary" style={{ fontSize: '12px', padding: '16px 40px' }}>
            &gt; Start the Conversation
          </a>
        </div>

      </div>
    </section>
  )
}
