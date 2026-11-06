import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Projets Web', href: '#projects' },
  { label: 'Design & Médias', href: '#designs' },
  { label: 'Parcours', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md border-b border-border'
          : 'bg-bg/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="w-8 h-8 rounded-lg bg-text text-bg font-mono font-semibold text-xs flex items-center justify-center tracking-tighter">
              DT
            </span>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-text leading-none">
                Diène Thiam
              </span>
              <span className="font-mono text-[10px] text-muted mt-1 leading-none">
                Développeur Front-End & Full-Stack
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-muted hover:text-text text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
          

            {/* Mobile menu toggle */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg border border-border bg-surface gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span
                className={`block h-0.5 w-4 bg-text transition-transform duration-200 ${
                  menuOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-text transition-transform duration-200 ${
                  menuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg border-b border-border overflow-hidden"
          >
            <div className="container-custom py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-muted hover:text-text text-sm font-medium py-1.5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="mt-2 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-text text-bg text-xs font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Disponible — Me contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
