import { motion } from 'framer-motion'
import { experiences, services } from '../data/skills'

function TimelineItem({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="relative pl-7 pb-10 last:pb-0 border-l border-border"
    >
      {/* Solid square marker */}
      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-sm bg-text" />

      <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted mb-1.5">
        <span>{exp.period}</span>
        <span>·</span>
        <span className="text-text font-medium">{exp.company}</span>
      </div>

      <h3 className="font-display font-bold text-lg text-text mb-2">
        {exp.role}
      </h3>

      <p className="text-muted text-sm leading-relaxed mb-4">
        {exp.desc}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-surface2 border border-border text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function ServiceCard({ service, index }) {
  const Icon = service.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="card-surface p-5 flex flex-col justify-between"
    >
      <div>
        <div className="w-9 h-9 rounded-lg bg-surface2 border border-border flex items-center justify-center text-text mb-4">
          <Icon className="w-5 h-5" />
        </div>
        <h4 className="font-display font-bold text-base text-text mb-2">
          {service.title}
        </h4>
        <p className="text-muted text-xs sm:text-sm leading-relaxed">
          {service.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-b border-border relative z-10">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label">04 — Expérience & Expertises</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text tracking-tight">
            Parcours Professionnel & Domaines d’Intervention
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16">
          {/* Chronological Timeline (6 cols) */}
          <div className="lg:col-span-6">
            <div className="font-mono text-xs uppercase tracking-wider text-muted mb-8 pb-3 border-b border-border">
              Expériences professionnelles
            </div>
            <div className="ml-1">
              {experiences.map((exp, i) => (
                <TimelineItem key={i} exp={exp} index={i} />
              ))}
            </div>
          </div>

          {/* Services / Interventions (6 cols) */}
          <div className="lg:col-span-6">
            <div className="font-mono text-xs uppercase tracking-wider text-muted mb-8 pb-3 border-b border-border">
              Domaines d’intervention
            </div>
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
