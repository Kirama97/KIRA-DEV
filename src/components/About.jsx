import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineVideoCamera } from 'react-icons/hi2'
import { skills } from '../data/skills'

const categories = ['Tous', 'Frontend', 'Backend', 'Mobile', 'Créatif', 'Design', 'DevOps']

function SkillCard({ skill, index }) {
  const Icon = skill.icon
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
      <div className="flex justify-center mb-1.5">
        <div 
          className="text-xl transition-transform duration-300 group-hover:scale-110"
          style={{ color: skill.color || 'var(--accent)' }}
        >
          <Icon />
        </div>
      </div>
      <div className="text-xs font-medium transition-colors duration-300 text-muted group-hover:text-accent">
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
    <section id="about" className="relative z-10 section-padding">
      <div className="container-custom">
        <div className="grid items-center gap-16 lg:grid-cols-2 xl:gap-24">
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
              <div className="absolute border rounded-full w-80 h-80 border-accent/10 animate-spin-slow" />
              <div className="absolute w-64 h-64 border rounded-full border-accent2/08 animate-spin-slower" />

              {/* Avatar */}
              <div
                className="relative w-56 h-56 rounded-[2.5rem] flex items-center justify-center z-10 border border-text/10"
                style={{
                  background: 'linear-gradient(135deg, var(--color-surface2), var(--color-surface))',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.2), 0 0 60px rgba(108,99,255,0.1)',
                }}
              >
                <span className="font-black font-display text-7xl text-accent">DT</span>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute z-20 px-4 py-3 -top-4 -right-4 glass rounded-2xl"
              >
                <div className="text-xl font-black font-display text-accent2">3+</div>
                <div className="text-muted text-[10px] uppercase tracking-wider">ans d'exp.</div>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass px-3 py-2.5 rounded-xl z-20"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl text-accent2">
                    <HiOutlineVideoCamera />
                  </span>
                  <div>
                    <div className="text-xs font-medium">Motion & Dev</div>
                    <div className="text-[10px] text-muted">Créatif complet</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [-4, 4, -4] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute z-20 px-3 py-2 top-1/2 -right-10 glass rounded-xl"
              >
                <div className="text-xs font-medium text-accent">100%</div>
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
              Ingénieur Logiciel,
              <br />
              <span className="gradient-text">créatif dans l'âme</span>
            </h2>
            <p className="mb-4 leading-relaxed text-muted">
              Bonjour ! Je suis <strong className="text-text">Diene Thiam</strong>, Ingénieur Logiciel & Technicien Supérieur en Informatique
              basé à Thiés, Sénégal. Avec une solide expertise en développement web full-stack, administration système/réseau
              et intégration d'IA, je conçois des solutions innovantes.
            </p>
            <p className="mb-8 leading-relaxed text-muted">
              Ma singularité : je maîtrise autant le code que l'image. Du développement
              web et architecture technique au montage vidéo assisté par l'IA — je suis capable de diriger
              des projets complexes (CTO) et de former les futurs talents de la tech.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
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
