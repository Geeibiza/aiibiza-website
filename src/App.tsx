import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Credibility from './components/Credibility'
import Services from './components/Services'
import OpenClaw from './components/OpenClaw'
import Philosophy from './components/Philosophy'
import About from './components/About'
import LawFirms from './components/LawFirms'
import Gestorias from './components/Gestorias'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import LegalModal from './components/LegalModal'
import ChatWidget from './components/ChatWidget'
import SectionNav from './components/SectionNav'

type LegalPage = 'privacy' | 'disclaimer' | null

export default function App() {
  const [legalPage, setLegalPage] = useState<LegalPage>(null)

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 60)
          }
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ background: 'var(--void)', minHeight: '100vh' }}>
      <div className="noise-overlay" />
      <div className="top-bar" />

      <Cursor />
      <Nav />
      <SectionNav />

      <main>
        <Hero />
        <Credibility />
        <Services />
        <OpenClaw />
        <LawFirms />
        <Gestorias />
        <Philosophy />
        <About />
        <Contact />
      </main>

      <Footer onOpenLegal={setLegalPage} />
      <CookieBanner onOpenLegal={setLegalPage} />
      <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />
      <ChatWidget />
    </div>
  )
}
