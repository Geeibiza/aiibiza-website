type ClusterType = 'mini' | 'studio'

function MacMiniUnit({ index, active }: { index: number; active: boolean }) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        opacity: active ? 1 : 0.4,
        transition: `opacity 0.3s ease ${index * 0.1}s`,
      }}
    >
      {/* Mac Mini body */}
      <div
        style={{
          width: '100%',
          height: '28px',
          background: 'linear-gradient(180deg, #3a3a3c 0%, #2c2c2e 40%, #1c1c1e 100%)',
          borderRadius: '6px',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: active
            ? '0 0 20px rgba(174,255,0,0.12), 0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)'
            : '0 4px 12px rgba(0,0,0,0.5)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 10px',
        }}
      >
        {/* Power LED */}
        <div
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: active ? 'var(--phosphor)' : 'var(--muted)',
            boxShadow: active ? '0 0 6px var(--phosphor)' : 'none',
            animation: active ? 'pulse-glow 2s ease-in-out infinite' : 'none',
          }}
        />
        {/* Node label */}
        <span style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '8px',
          color: active ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.15)',
          letterSpacing: '0.1em',
        }}>
          NODE {String(index + 1).padStart(2, '0')}
        </span>
        {/* Ports suggestion */}
        <div style={{ display: 'flex', gap: '3px' }}>
          {[0,1,2].map(p => (
            <div key={p} style={{
              width: '4px', height: '8px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '1px',
            }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function MacCluster({ type = 'mini' }: { type?: ClusterType }) {
  const label = type === 'mini' ? 'Mac Mini M4' : 'Mac Studio M4 Ultra'
  const color = type === 'mini' ? 'var(--lime)' : 'var(--phosphor)'

  return (
    <div
      style={{
        background: 'var(--terminal-dark)',
        border: '1px solid var(--ghost-line)',
        padding: '28px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow behind cluster */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200px', height: '100px',
        background: `radial-gradient(ellipse, ${type === 'mini' ? 'rgba(174,255,0,0.08)' : 'rgba(0,255,136,0.08)'} 0%, transparent 70%)`,
        pointerEvents: 'none',
        filter: 'blur(20px)',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: color,
            marginBottom: '4px',
          }}>
            OpenClaw {type === 'mini' ? 'Mini' : 'Studio'} Cluster
          </div>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: 'var(--grey)',
          }}>
            4 × {label}
          </div>
        </div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '9px',
          color: 'var(--lime)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <div style={{
            width: '5px', height: '5px', borderRadius: '50%',
            background: 'var(--lime)',
            boxShadow: '0 0 6px var(--lime)',
            animation: 'pulse-glow 2s ease-in-out infinite',
          }} />
          ONLINE
        </div>
      </div>

      {/* 4 Mac Minis stacked */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
        {[0, 1, 2, 3].map(i => (
          <MacMiniUnit key={i} index={i} active={true} />
        ))}
      </div>

      {/* Connection line */}
      <div style={{
        height: '1px',
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        marginBottom: '16px',
        opacity: 0.4,
      }} />

      {/* Connected devices */}
      <div style={{ display: 'flex', gap: '10px' }}>
        {/* iPad */}
        <div style={{
          flex: 1,
          padding: '10px',
          background: 'var(--obsidian)',
          border: '1px solid var(--ghost-line)',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}>
          {/* iPad shape */}
          <div style={{
            width: '28px', height: '36px',
            background: 'linear-gradient(180deg, #3a3a3c, #1c1c1e)',
            borderRadius: '4px',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <div style={{
              width: '18px', height: '24px',
              background: 'rgba(174,255,0,0.08)',
              borderRadius: '2px',
              border: '1px solid rgba(174,255,0,0.15)',
            }} />
            {/* Home indicator */}
            <div style={{
              position: 'absolute',
              bottom: '2px',
              width: '10px', height: '1px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '1px',
            }} />
          </div>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '8px',
            color: 'var(--muted)',
            textAlign: 'center',
            letterSpacing: '0.08em',
          }}>
            iPad<br/>Dashboard
          </span>
        </div>

        {/* iPhone */}
        <div style={{
          flex: 1,
          padding: '10px',
          background: 'var(--obsidian)',
          border: '1px solid var(--ghost-line)',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}>
          {/* iPhone shape */}
          <div style={{
            width: '20px', height: '36px',
            background: 'linear-gradient(180deg, #3a3a3c, #1c1c1e)',
            borderRadius: '5px',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            {/* Dynamic island */}
            <div style={{
              position: 'absolute',
              top: '3px',
              width: '8px', height: '3px',
              background: '#000',
              borderRadius: '3px',
            }} />
            <div style={{
              width: '12px', height: '20px',
              background: 'rgba(0,255,136,0.08)',
              borderRadius: '2px',
              border: '1px solid rgba(0,255,136,0.15)',
              marginTop: '4px',
            }} />
          </div>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '8px',
            color: 'var(--muted)',
            textAlign: 'center',
            letterSpacing: '0.08em',
          }}>
            iPhone<br/>Remote
          </span>
        </div>

        {/* Telegram */}
        <div style={{
          flex: 1,
          padding: '10px',
          background: 'var(--obsidian)',
          border: '1px solid var(--ghost-line)',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}>
          <div style={{
            width: '28px', height: '28px',
            borderRadius: '50%',
            background: 'rgba(0,136,204,0.15)',
            border: '1px solid rgba(0,136,204,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
          }}>
            ✈
          </div>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '8px',
            color: 'var(--muted)',
            textAlign: 'center',
            letterSpacing: '0.08em',
          }}>
            Telegram<br/>API
          </span>
        </div>
      </div>
    </div>
  )
}
