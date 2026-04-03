export default function Philosophy() {
  return (
    <section
      className="py-32 reveal"
      style={{
        background: 'linear-gradient(135deg, rgba(123,47,255,0.06) 0%, transparent 50%, rgba(174,255,0,0.04) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="w-full h-px mb-24" style={{ background: 'var(--ghost-line)' }} />

        <div className="max-w-4xl mx-auto text-center">
          <div className="label mb-10">// Philosophy</div>

          <h2
            className="font-display mb-12"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', color: 'var(--white)' }}
          >
            There are consultants who
            <br />
            read about AI.
            <br />
            <span style={{ color: 'var(--lime)' }}>And there are people who run it.</span>
          </h2>

          <p className="font-mono mb-8 mx-auto" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9', maxWidth: '600px' }}>
            The difference is not credential. It is not LinkedIn endorsements. The difference is infrastructure — a private data center, advanced compute clusters, systems that run continuously, not in demos.
          </p>

          <p className="font-mono mb-16 mx-auto" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9', maxWidth: '600px' }}>
            We work with a small number of clients. We do not scale through volume. We scale through outcomes.
          </p>

          <div
            className="inline-block py-6 px-8 font-display text-2xl"
            style={{
              borderTop: '1px solid var(--sand)',
              borderBottom: '1px solid var(--sand)',
              color: 'var(--sand)',
            }}
          >
            "If you need to ask whether you can afford to get this right — you cannot afford to get it wrong."
          </div>
        </div>
      </div>
    </section>
  )
}
