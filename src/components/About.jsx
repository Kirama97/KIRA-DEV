import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/skills'

const categories = ['Tous', 'Frontend', 'Backend', 'Mobile', 'Créatif', 'Design', 'DevOps']

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="group glass p-3 rounded-2xl text-center cursor-default hover:border-accent/40 hover:bg-accent/[0.06] transition-colors duration-300"
      data-hover
    >
      <div className="text-2xl mb-1.5">{skill.icon}</div>
      <div className="text-xs text-muted group-hover:text-white transition-colors duration-300 font-medium">
        {skill.name}
      </div>
      <div className="text-[10px] text-muted/50 mt-0.5">{skill.category}</div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative flex items-center justify-center">
              {/* Decorative rings */}
              <div className="absolute w-80 h-80 rounded-full border border-accent/10 animate-spin-slow" />
              <div className="absolute w-64 h-64 rounded-full border border-accent2/08 animate-spin-slower" />

              {/* Avatar */}
              <div
                className="relative w-56 h-56 rounded-[2.5rem] flex items-center justify-center z-10 border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, #131320, #0d0d15)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(108,99,255,0.2)',
                }}
              >
                <span className="font-display font-black text-7xl text-accent">DT</span>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass px-4 py-3 rounded-2xl z-20"
              >
                <div className="font-display font-black text-xl text-accent2">3+</div>
                <div className="text-muted text-[10px] uppercase tracking-wider">ans d'exp.</div>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass px-3 py-2.5 rounded-xl z-20"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎬</span>
                  <div>
                    <div className="text-xs font-medium">Motion & Dev</div>
                    <div className="text-[10px] text-muted">Créatif complet</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [-4, 4, -4] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-10 glass px-3 py-2 rounded-xl z-20"
              >
                <div className="text-xs text-accent font-medium">100%</div>
                <div className="text-[10px] text-muted">Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2"
          >
            <div className="text-accent text-xs uppercase tracking-[0.2em] mb-4 font-medium">
              // À propos
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              Dev passionné,
              <br />
              <span className="gradient-text">créatif dans l'âme</span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Bonjour ! Je suis <strong className="text-white">Diene Thiam</strong>, développeur
              Frontend & Fullstack basé à Dakar. Depuis 3 ans, je conçois des expériences
              digitales qui allient performance technique et excellence esthétique.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Ma singularité : je maîtrise autant le code que l'image. Du développement
              web et mobile au montage vidéo et à la création visuelle — je peux porter
              un projet de A à Z, seul ou en équipe.
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {skills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
