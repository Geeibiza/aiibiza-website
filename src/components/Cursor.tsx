import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let animFrame: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }

      // Ring lags with lerp
      ringX += (mouseX - ringX) * 0.10
      ringY += (mouseY - ringY) * 0.10

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }

      animFrame = requestAnimationFrame(animate)
    }

    const onEnter = () => ringRef.current?.classList.add('hovering')
    const onLeave = () => ringRef.current?.classList.remove('hovering')

    document.addEventListener('mousemove', onMove)

    const attachHoverListeners = () => {
      document.querySelectorAll('a, button, .service-card').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attachHoverListeners()

    animFrame = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animFrame)
    }
  }, [])

  return (
    <>
      {/* Dot — sharp, instant */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          marginLeft: '-4px',
          marginTop: '-4px',
          background: 'var(--lime)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
        }}
      />

      {/* Ring — slow lag */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          marginLeft: '-18px',
          marginTop: '-18px',
          border: '1px solid rgba(0,255,136,0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
          transition: 'width 0.3s ease, height 0.3s ease, margin 0.3s ease, border-color 0.3s ease, background 0.3s ease',
        }}
      />
    </>
  )
}
