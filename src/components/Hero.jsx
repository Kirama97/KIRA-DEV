import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import profil from '../assets/profil.png'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const specialties = [
  'Frontend Developer',
  'Fullstack Engineer',
  'Mobile Developer',
  'Motion Designer',
  'Visual Creator',
]

function RotatingSpecialty() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => {
      setIndex((i) => (i + 1) % specialties.length)
    }, 2800)
    return () => clearInterval(iv)
  }, [])

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="gradient-text"
    >
      {specialties[index]}
    </motion.span>
  )
}

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

export default function Hero() {
  const navigate = useNavigate()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent2 animate-blink" />
              <span className="text-accent2 text-xs font-medium tracking-widest uppercase">
                Près a travaillé — Disponible
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="font-display font-black text-5xl md:text-6xl xl:text-7xl leading-[0.95] tracking-[-0.03em] mb-4"
            >
              Diene
              <br />
              <span className="gradient-text">Thiam</span>
            </motion.h1>

            {/* Rotating specialty */}
            <motion.div
              variants={item}
              className="font-display font-bold text-2xl md:text-3xl text-white/40 mb-6 h-10 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <RotatingSpecialty />
              </AnimatePresence>
             
            </motion.div>

            {/* Sub */}
            <motion.p
              variants={item}
              className="text-muted font-body text-lg leading-relaxed max-w-md mb-10"
            >
              Je transforme des idées complexes en interfaces élégantes, rapides
              et mémorables. Du code au pixel, du montage à l'écran — j'assure.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="group relative px-7 py-3.5 bg-accent rounded-full font-medium text-sm text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(108,99,255,0.5)] hover:-translate-y-0.5"
                data-hover
              >
                <span className="relative z-10">Voir mes projets →</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3.5 border border-white/10 rounded-full font-medium text-sm text-white/80 hover:border-accent/50 hover:text-white hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
                data-hover
              >
                Me contacter
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="flex gap-8 mt-12 pt-10 border-t border-white/[0.06]">
              {[
                { n: '3+', l: "ans d'expérience" },
                { n: '20+', l: 'projets livrés' },
                { n: '100%', l: 'clients satisfaits' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display font-black text-2xl gradient-text">{s.n}</div>
                  <div className="text-muted text-xs uppercase tracking-wider mt-0.5">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-96 h-96 animate-float">
              {/* Rings */}
              <div
                className="absolute inset-0 rounded-full border border-accent/10 animate-spin-slow"
                style={{ width: '100%', height: '100%' }}
              />
              <div
                className="absolute rounded-full border border-accent2/08 animate-spin-slower"
                style={{ inset: '-40px'  }}
              />
              <div
                className="absolute rounded-full border border-accent3/05"
                style={{ inset: '-80px', animationDuration: '25s' }}
              />
              {/* Core orb */}
              <div
                className="absolute inset-8 rounded-full bg-cover"
                style={{
                  // background:
                  //   'radial-gradient(circle at 35% 35%, #00D4FF, #6C63FF, #3d3880)',
                    backgroundImage: `url(${profil})`,
                  boxShadow:
                    '0 0 80px rgba(108,99,255,0.4), 0 0 40px rgba(0,212,255,0.2), inset 0 0 40px rgba(255,255,255,0.1)',
                }}
              />
              {/* Floating cards */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-8 glass px-4 py-3 rounded-2xl"
              >
                <div className="font-display font-bold text-accent2 text-xl">3+</div>
                <div className="text-muted text-xs">ans d'exp.</div>
              </motion.div>
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-6 glass px-4 py-3 rounded-2xl"
              >
                <div className="text-xs text-muted mb-1">Stack</div>
                <div className="flex gap-1.5 text-base">⚛️ 📱 🎬</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent animate-float" />
        <span className="text-[10px] uppercase tracking-[0.2em]">scroll</span>
      </motion.div>
    </section>
  )
}
