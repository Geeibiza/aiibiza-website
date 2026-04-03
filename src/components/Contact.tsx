export default function Contact() {
  return (
    <section id="contact" className="py-32 reveal">
      <div className="max-w-7xl mx-auto px-8">

        <div className="w-full h-px mb-24" style={{ background: 'var(--ghost-line)' }} />

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <div className="label mb-8">// Start the conversation</div>
            <h2
              className="font-display mb-8"
              style={{ fontSize: 'clamp(40px, 5vw, 72px)', color: 'var(--white)' }}
            >
              Ready to stop watching
              <br />
              AI happen and start
              <br />
              <span style={{ color: 'var(--lime)' }}>running it?</span>
            </h2>

            <p className="font-mono mb-10" style={{ fontSize: '13px', color: 'var(--grey)', lineHeight: '1.9', maxWidth: '420px' }}>
              We take a small number of new clients per quarter. If you are considering working with AI Ibiza, the conversation starts here.
            </p>

            <div className="space-y-4">
              <div className="terminal-block" style={{ padding: '14px 20px', fontSize: '11px' }}>
                <span style={{ color: 'var(--muted)' }}>location: </span>
                <span style={{ color: 'var(--white)' }}>Ibiza, ES</span>
                <span style={{ color: 'var(--muted)' }}> — operating: </span>
                <span style={{ color: 'var(--lime)' }}>globally</span>
              </div>
              <div className="terminal-block" style={{ padding: '14px 20px', fontSize: '11px' }}>
                <span style={{ color: 'var(--muted)' }}>response_time: </span>
                <span style={{ color: 'var(--white)' }}>within 24 hours</span>
              </div>
              <div className="terminal-block" style={{ padding: '14px 20px', fontSize: '11px' }}>
                <span style={{ color: 'var(--muted)' }}>new_clients: </span>
                <span style={{ color: 'var(--phosphor)' }}>limited / per quarter</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <form
              className="space-y-6"
              onSubmit={(e) => { e.preventDefault() }}
            >
              {[
                { label: 'Your name', id: 'name', type: 'text', placeholder: 'Name' },
                { label: 'Email address', id: 'email', type: 'email', placeholder: 'you@example.com' },
              ].map(field => (
                <div key={field.id}>
                  <label
                    className="label block mb-2"
                    style={{ color: 'var(--muted)', fontSize: '10px' }}
                    htmlFor={field.id}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full font-mono text-sm px-4 py-4"
                    style={{
                      background: 'var(--obsidian)',
                      border: '1px solid var(--ghost-line)',
                      color: 'var(--white)',
                      outline: 'none',
                      fontSize: '13px',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--lime)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--ghost-line)')}
                  />
                </div>
              ))}

              <div>
                <label className="label block mb-2" style={{ color: 'var(--muted)', fontSize: '10px' }} htmlFor="service">
                  I am interested in
                </label>
                <select
                  id="service"
                  className="w-full font-mono text-sm px-4 py-4"
                  style={{
                    background: 'var(--obsidian)',
                    border: '1px solid var(--ghost-line)',
                    color: 'var(--grey)',
                    outline: 'none',
                    fontSize: '13px',
                    cursor: 'none',
                  }}
                >
                  <option value="">Select a service...</option>
                  <option>Masterclasses</option>
                  <option>OpenClaw Systems — Bespoke AI Infrastructure</option>
                  <option>Web Architecture</option>
                  <option>Automated Growth Engine</option>
                  <option>Multiple services / not sure yet</option>
                </select>
              </div>

              <div>
                <label className="label block mb-2" style={{ color: 'var(--muted)', fontSize: '10px' }} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project or question..."
                  className="w-full font-mono text-sm px-4 py-4 resize-none"
                  style={{
                    background: 'var(--obsidian)',
                    border: '1px solid var(--ghost-line)',
                    color: 'var(--white)',
                    outline: 'none',
                    fontSize: '13px',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--lime)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--ghost-line)')}
                />
              </div>

              <button type="submit" className="btn-primary w-full text-center" style={{ justifyContent: 'center' }}>
                &gt; Send Message
              </button>

              <p className="font-mono text-center" style={{ fontSize: '10px', color: 'var(--muted)' }}>
                Or reach us directly via Telegram
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
