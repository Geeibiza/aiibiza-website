import { useEffect } from 'react'
import Lenis from 'lenis'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Intro from './components/Intro'
import DJSection from './components/DJSection'
import KitchenSection from './components/KitchenSection'
import Web3Section from './components/Web3Section'
import ArcadeSection from './components/ArcadeSection'
import Footer from './components/Footer'

export default function App() {
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

  return (
    <div className="bg-black min-h-screen">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <ArcadeSection />
        <DJSection />
        <Web3Section />
        <KitchenSection />
      </main>
      <Footer />
    </div>
  )
}
