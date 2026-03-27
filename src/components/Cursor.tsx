import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ring.current) {
        ring.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      requestAnimationFrame(animate)
    }

    const onEnter = () => {
      ring.current?.classList.add('scale-[2.5]', 'opacity-50')
    }
    const onLeave = () => {
      ring.current?.classList.remove('scale-[2.5]', 'opacity-50')
    }

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    animate()

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-fluor rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-0"
      />
      <div
        ref={ring}
        className="fixed top-0 left-0 w-8 h-8 border border-fluor rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
      />
    </>
  )
}
