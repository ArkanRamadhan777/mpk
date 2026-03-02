import { useRef, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Program from './components/Program'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  const containerRef = useRef(null)
  const [activeSection, setActiveSection] = useState('hero')

  const heroRef = useRef(null)
  const profileRef = useRef(null)
  const programRef = useRef(null)
  const galleryRef = useRef(null)
  const contactRef = useRef(null)

  const sectionRefs = {
    hero: heroRef,
    profile: profileRef,
    program: programRef,
    gallery: galleryRef,
    contact: contactRef,
  }

  const scrollToSection = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observers = []
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (!ref.current) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(key)
        },
        { root: container, threshold: 0.5 }
      )
      observer.observe(ref.current)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <div className="bg-black text-white h-screen overflow-hidden">
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll scrollbar-hide"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        <div ref={heroRef} style={{ scrollSnapAlign: 'start' }}>
          <Hero scrollToSection={scrollToSection} />
        </div>
        <div ref={profileRef} style={{ scrollSnapAlign: 'start' }}>
          <Profile />
        </div>
        <div ref={programRef} style={{ scrollSnapAlign: 'start' }}>
          <Program />
        </div>
        <div ref={galleryRef} style={{ scrollSnapAlign: 'start' }}>
          <Gallery />
        </div>
        <div ref={contactRef} style={{ scrollSnapAlign: 'start' }}>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App