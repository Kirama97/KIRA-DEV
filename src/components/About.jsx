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
            Une double compétence d’ingénieur logiciel et de directeur créatif.
          </h2>
          <div className="space-y-4 text-muted text-base leading-relaxed">
            <p>
              Basé entre <strong className="text-text font-medium">Dakar et Thiès (Sénégal)</strong>, je suis 
              Ingénieur Logiciel et Technicien Supérieur en Informatique. Mon parcours s’articule autour de 
              la gestion complète du cycle de vie des applications : de l’architecture technique et du 
              développement full-stack jusqu’au déploiement, la maintenance système/réseau et le support.
            </p>
            <p>
              Au-delà du code, j’occupe des fonctions de <strong className="text-text font-medium">Direction Technique (CTO)</strong> chez 
              OnlineClass et au sein du <strong className="text-text font-medium">Studio Amed Njie</strong>, où j’intègre des workflows 
              d’intelligence artificielle appliqués à la réalisation audiovisuelle et au design graphique. 
              J’interviens également comme <strong className="text-text font-medium">Coach Formateur</strong> à Bakeli School of Technology.
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
                  Domaine 0{idx + 1}
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
                Formation Académique
              </h3>
              <span className="font-mono text-xs text-muted">cursus universitaire</span>
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
                  <span className="text-text font-medium">Courant / Professionnel</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Anglais</span>
                  <span className="text-text font-medium">Technique</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-muted">Veille</span>
                  <span className="text-text font-medium">IA générative, Architecture Web</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
