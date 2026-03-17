import Cursor        from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import FloatingCode   from './components/FloatingCode'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import About          from './components/About'
import Projects       from './components/Projects'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import Divider        from './components/Divider'
import Lenis          from 'lenis'
import { useEffect }  from 'react'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 })

    // Store rafId so we can cancel it on cleanup.
    // Without this the RAF loop kept running after unmount causing jank.
    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <FloatingCode />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
