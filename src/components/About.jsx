import { motion } from 'framer-motion'
import { skillGroups, education, certifications } from '../data/skills'

export default function About() {
  return (
    <section id="about" className="section-padding border-b border-border relative z-10">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="section-label">01 — Profil & Compétences</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text tracking-tight mb-6">
            Développeur Web, Technicien Informatique & Créateur Visuel.
          </h2>
          <div className="space-y-4 text-muted text-base leading-relaxed">
            <p>
              Basé à <strong className="text-text font-medium">Dakar (Sénégal)</strong>, je suis 
              Développeur Front-End / Full-Stack et Technicien en Informatique polyvalent, fort d’une 
              solide expertise en développement web, infographie et maintenance informatique. J’interviens 
              sur la gestion complète du cycle de vie des applications : conception, développement, 
              déploiement CI/CD, maintenance et support technique.
            </p>
            <p>
              J’assure également la <strong className="text-text font-medium">Direction Technique (CTO)</strong> chez 
              OnlineClass ainsi qu’au sein du <strong className="text-text font-medium">Studio Amed Njie</strong>, où 
              je pilote des workflows d’intelligence artificielle dédiés à la production audiovisuelle et 
              multimédia, tout en accompagnant des apprenants en programmation et algorithmique depuis 2022.
            </p>
          </div>
        </div>

        {/* 3-Column Technical & Creative Skills Matrix */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="card-surface p-6 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs text-muted mb-2">
                  Pôle 0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-lg text-text mb-1.5">
                  {group.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed mb-6 pb-4 border-b border-border">
                  {group.subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2.5">
                  {group.items.map((skill) => {
                    const Icon = skill.icon
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-surface2 border border-border text-text text-xs font-medium"
                      >
                        <Icon className="w-4 h-4 text-muted shrink-0" />
                        <span className="truncate">{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Education & Certifications Row */}
        <div className="grid lg:grid-cols-12 gap-8 pt-6">
          {/* Education (8 cols) */}
          <div className="lg:col-span-8 card-surface p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <h3 className="font-display font-bold text-lg text-text">
                Éducation & Formations
              </h3>
              <span className="font-mono text-xs text-muted">parcours académique</span>
            </div>

            <div className="divide-y divide-border">
              {education.map((edu) => (
                <div key={edu.degree} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h4 className="font-display font-semibold text-sm sm:text-base text-text">
                      {edu.degree}
                    </h4>
                    <div className="text-xs text-muted mt-0.5">{edu.institution}</div>
                    {edu.detail && (
                      <p className="text-xs text-muted/80 mt-1">{edu.detail}</p>
                    )}
                  </div>
                  <span className="font-mono text-xs text-muted shrink-0">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages (4 cols) */}
          <div className="lg:col-span-4 card-surface p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <h3 className="font-display font-bold text-lg text-text">
                  Certifications
                </h3>
                <span className="font-mono text-xs text-muted">attestations</span>
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.title} className="p-3.5 rounded-lg bg-surface2 border border-border">
                    <div className="font-mono text-[11px] text-muted mb-1">
                      {cert.issuer} · {cert.year}
                    </div>
                    <div className="font-display font-semibold text-sm text-text">
                      {cert.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
                Langues & Intérêts
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted">Français</span>
                  <span className="text-text font-medium">Courant</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Anglais</span>
                  <span className="text-text font-medium">Technique</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-muted">Centres d’intérêt</span>
                  <span className="text-text font-medium">IA générative, Veille Tech, Entrepreneuriat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
