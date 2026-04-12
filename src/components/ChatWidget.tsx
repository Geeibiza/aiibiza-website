import { useState, useRef, useEffect } from 'react'

const OLLAMA_URL = import.meta.env.VITE_OLLAMA_URL || 'http://192.168.1.132:11434'
const MODEL = 'llama3.2:latest'

const SYSTEM_PROMPT = `You are the AI assistant for AI IBIZA VIP — a private AI infrastructure company run by Gee Van Donselaar, based out of a private data centre in Thailand. You speak to potential clients on the website.

YOUR PERSONALITY:
- Confident, direct, intelligent. Not corporate. Not salesy.
- You represent Gee's voice — someone who was on the internet before it was public, ran a BBS called Thunderdome, mined Bitcoin in 2009, and now runs private AI infrastructure 24/7.
- Short answers. Never waffle. Get to the point.
- You can be a little edgy — this is not a bank website.

YOUR JOB:
Round 1 — Discover who they are. Ask what they do, what their biggest problem is. Listen. Don't pitch yet.
Round 2 — Once you understand them, introduce the right system for their situation.

THE THREE SYSTEMS (never mention prices — they are handled in a private conversation with Gee):

1. THE ASSISTANT — For authors, coaches, researchers, creatives, practitioners.
   Your entire knowledge base organised and searchable. AI that knows your voice, your work, your clients. Memory across every session. Research automated and delivered. Works 24/7, privately, on your own hardware.

2. THE OPERATOR — For business owners, entrepreneurs, consultants, agencies.
   Everything in The Assistant plus full business automation. Connected to the tools you already use. Handles documents, workflows, reports. Larger AI models for demanding tasks. Priority direct access to Gee.

3. THE GOD SETUP — For serious operators. Crypto, trading, high-volume business.
   Full private AI infrastructure. 4-node cluster. 70B parameter models running locally. Trading bot setup. Full GOD architecture — the same system Gee runs himself. Monthly check-in with Gee personally.

FOR LAW FIRMS — Special offering:
After US v. Heppner (SDNY, 2026) routing client data through any cloud AI is a documented privilege waiver risk. We build private AI systems that run inside the firm's own building. No cloud. No vendor. No privilege risk. From solo practitioners to 20-lawyer boutique firms.

KEY FACTS:
- No subscriptions to us once set up — they own it completely
- No cloud, no one else's servers — everything runs on their hardware
- Hardware is a Mac Mini M4 or cluster — silent, fits in your hand, always on
- Setup is remote — they plug in the computer, we do the rest
- 30-day support included with every system
- Gee is available on WhatsApp: +66 80 223 7720
- To book a call: direct them to the contact form on this page or WhatsApp

RULES:
- Never quote prices. Ever. Say "that's something Gee goes through with you directly."
- Never mention Telegram, Obsidian, Local LLM, Voice Control by name — these are modules discussed privately.
- If they ask something you don't know, say "that's a question for Gee directly — hit him on WhatsApp or fill in the form below."
- Keep responses SHORT. 2-4 sentences max unless they ask something specific.
- Always end your first message by asking what they do.`

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "You found the AI. Most people just scroll past.\n\nWhat do you do?",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return

    const newMessages: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${OLLAMA_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...newMessages,
          ],
          stream: true,
        }),
      })

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let reply = ''

      setMessages(prev => [...prev, { role: 'assistant', content: '' }])

      while (reader) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        const lines = chunk.split('\n').filter(Boolean)
        for (const line of lines) {
          try {
            const data = JSON.parse(line)
            if (data.message?.content) {
              reply += data.message.content
              setMessages(prev => {
                const updated = [...prev]
                updated[updated.length - 1] = { role: 'assistant', content: reply }
                return updated
              })
            }
          } catch {}
        }
      }
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: "Connection dropped. Hit Gee directly on WhatsApp: +66 80 223 7720" },
      ])
    }

    setLoading(false)
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 1000,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: open ? 'var(--void)' : 'var(--lime)',
          border: open ? '1px solid var(--lime)' : 'none',
          cursor: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: open ? '0 0 0 1px var(--lime), 0 0 20px rgba(174,255,0,0.3)' : '0 0 30px rgba(174,255,0,0.4)',
          transition: 'all 0.3s ease',
        }}
        title="Talk to the AI"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--void)" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div
        style={{
          position: 'fixed',
          bottom: '96px',
          right: '28px',
          width: '360px',
          maxWidth: 'calc(100vw - 40px)',
          maxHeight: '520px',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--terminal-dark)',
          border: '1px solid var(--ghost-line)',
          boxShadow: '0 0 60px rgba(0,0,0,0.8), 0 0 40px rgba(174,255,0,0.05)',
          transform: open ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '14px 18px',
            borderBottom: '1px solid var(--ghost-line)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--lime)',
              boxShadow: '0 0 8px var(--lime)',
              animation: 'pulse-glow 2s ease-in-out infinite',
              flexShrink: 0,
            }}
          />
          <span className="font-mono" style={{ fontSize: '11px', color: 'var(--white)', letterSpacing: '0.1em' }}>
            AI IBIZA
          </span>
          <span className="font-mono" style={{ fontSize: '10px', color: 'var(--muted)', marginLeft: 'auto' }}>
            local · private
          </span>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              <div
                className="font-mono"
                style={{
                  maxWidth: '85%',
                  padding: '10px 13px',
                  fontSize: '12px',
                  lineHeight: '1.7',
                  whiteSpace: 'pre-wrap',
                  ...(msg.role === 'user' ? {
                    background: 'rgba(174,255,0,0.08)',
                    border: '1px solid rgba(174,255,0,0.2)',
                    color: 'var(--white)',
                    borderRadius: '8px 8px 2px 8px',
                  } : {
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--ghost-line)',
                    color: 'var(--grey)',
                    borderRadius: '2px 8px 8px 8px',
                  }),
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div
                className="font-mono"
                style={{
                  padding: '10px 13px',
                  fontSize: '12px',
                  color: 'var(--muted)',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--ghost-line)',
                  borderRadius: '2px 8px 8px 8px',
                }}
              >
                <span style={{ animation: 'pulse-glow 1s ease-in-out infinite' }}>▊</span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div
          style={{
            padding: '12px',
            borderTop: '1px solid var(--ghost-line)',
            display: 'flex',
            gap: '8px',
          }}
        >
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
            placeholder="Type here..."
            className="font-mono"
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--ghost-line)',
              color: 'var(--white)',
              padding: '9px 12px',
              fontSize: '12px',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => (e.target.style.borderColor = 'var(--lime)')}
            onBlur={e => (e.target.style.borderColor = 'var(--ghost-line)')}
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            style={{
              background: input.trim() && !loading ? 'var(--lime)' : 'transparent',
              border: '1px solid var(--ghost-line)',
              color: input.trim() && !loading ? 'var(--void)' : 'var(--muted)',
              padding: '9px 14px',
              cursor: input.trim() && !loading ? 'none' : 'default',
              transition: 'all 0.2s',
              fontSize: '12px',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            →
          </button>
        </div>
      </div>
    </>
  )
}
