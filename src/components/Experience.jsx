import { motion } from 'framer-motion'
import { experiences, services } from '../data/skills'

function TimelineItem({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />
      {/* Dot */}
      <div
        className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-accent"
        style={{ boxShadow: '0 0 12px rgba(108,99,255,0.6)' }}
      />

      <div className="text-accent2 text-xs uppercase tracking-widest mb-2 font-medium">
        {exp.period}
      </div>
      <h3 className="font-display font-bold text-xl mb-1">{exp.role}</h3>
      <div className="text-accent text-sm mb-3 font-medium">{exp.company}</div>
      <p className="text-muted text-sm leading-relaxed mb-4">{exp.desc}</p>
      <div className="flex flex-wrap gap-2">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ y: -4, borderColor: 'rgba(108,99,255,0.4)' }}
      className="glass p-5 rounded-2xl hover:bg-accent/[0.04] transition-all duration-300 cursor-default"
      data-hover
    >
      <div className="text-3xl mb-3">{service.icon}</div>
      <h4 className="font-display font-bold text-base mb-2">{service.title}</h4>
      <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="text-accent text-xs uppercase tracking-[0.2em] mb-3 font-medium">
            // Expérience
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight tracking-tight">
            Mon <span className="gradient-text">parcours</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Timeline */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-8">
              Historique professionnel
            </h3>
            <div className="relative">
              {experiences.map((exp, i) => (
                <TimelineItem key={i} exp={exp} index={i} />
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-8">
              Ce que je propose
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <ServiceCard key={i} service={service} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
