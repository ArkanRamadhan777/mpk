import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { key: 'hero', label: 'Beranda' },
  { key: 'profile', label: 'Profil' },
  { key: 'program', label: 'Program' },
  { key: 'gallery', label: 'Galeri' },
  { key: 'contact', label: 'Kontak' },
]

export default function Navbar({ scrollToSection, activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const container = document.querySelector('.scrollbar-hide')
    if (!container) return
    const handleScroll = () => {
      setScrolled(container.scrollTop > 40)
    }
    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (key) => {
    scrollToSection(key)
    setMobileOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Name */}
          <button
            onClick={() => handleNav('hero')}
            className="flex items-center gap-3"
          >
            <img
              src="/mpk.svg"
              alt="Logo MPK"
              className="w-12 h-12 object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <div className="flex flex-col items-start leading-none">
              <span
                className="font-quantico text-sm font-bold tracking-widest uppercase text-white"
                style={{ letterSpacing: '0.15em' }}
              >
                MPK SMAN 1 GRABAG
              </span>
              <span
                className="text-xs font-light tracking-wider"
                style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', letterSpacing: '0.12em' }}
              >
                Majelis Perwakilan Kelas
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNav(link.key)}
                className="relative text-xs font-medium tracking-widest uppercase transition-all duration-200"
                style={{
                  color: activeSection === link.key ? '#ffffff' : 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.15em',
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                  style={{
                    background: '#ffffff',
                    width: activeSection === link.key ? '100%' : '0%',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.7)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'rgba(10,10,10,0.98)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNav(link.key)}
                  className="text-left text-xs font-medium tracking-widest uppercase py-3 border-b"
                  style={{
                    color: activeSection === link.key ? '#ffffff' : 'rgba(255,255,255,0.5)',
                    borderColor: 'rgba(255,255,255,0.06)',
                    letterSpacing: '0.15em',
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
