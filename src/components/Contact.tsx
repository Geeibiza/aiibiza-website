export default function Contact() {
  return (
    <section id="contact" className="py-32 reveal" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Bangkok background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/bangkok.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        filter: 'brightness(0.35) saturate(2.2) hue-rotate(10deg)',
        zIndex: 0,
      }} />

      {/* Dark gradient overlay — keeps top/bottom clean */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, var(--void) 0%, rgba(10,10,15,0.55) 30%, rgba(10,10,15,0.55) 70%, var(--void) 100%)',
        zIndex: 1,
      }} />

      <div className="max-w-7xl mx-auto px-8" style={{ position: 'relative', zIndex: 2 }}>

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
                <span style={{ color: 'var(--muted)' }}>data_centre: </span>
                <span style={{ color: 'var(--white)' }}>Thailand / private</span>
                <span style={{ color: 'var(--muted)' }}> — clients: </span>
                <span style={{ color: 'var(--lime)' }}>worldwide</span>
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

              <div className="flex flex-col items-center gap-3">
                <p className="font-mono text-center" style={{ fontSize: '10px', color: 'var(--muted)' }}>
                  Or reach us directly
                </p>
                <a
                  href="https://wa.me/66802237720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 transition-all duration-200"
                  style={{
                    border: '1px solid rgba(37,211,102,0.25)',
                    background: 'rgba(37,211,102,0.06)',
                    color: '#25D366',
                    borderRadius: '2px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(37,211,102,0.12)'
                    e.currentTarget.style.borderColor = 'rgba(37,211,102,0.5)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(37,211,102,0.06)'
                    e.currentTarget.style.borderColor = 'rgba(37,211,102,0.25)'
                  }}
                >
                  {/* WhatsApp logo */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="font-mono" style={{ fontSize: '12px', letterSpacing: '0.05em' }}>
                    +66 80 223 7720
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

