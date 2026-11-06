import { motion } from 'framer-motion'
import { HiOutlineArrowUpRight, HiOutlineMapPin, HiOutlineBriefcase, HiOutlineAcademicCap } from 'react-icons/hi2'
import profil from '../assets/profil.png'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-border z-10"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column — Editorial Presentation (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status & Location Pill */}
            <div className="inline-flex flex-wrap items-center gap-3 px-3.5 py-1.5 rounded-md border border-border bg-surface text-xs font-mono text-muted mb-7">
              <span className="inline-flex items-center gap-1.5 text-text font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Disponible
              </span>
              <span className="text-border">|</span>
              <span className="inline-flex items-center gap-1">
                <HiOutlineMapPin className="w-3.5 h-3.5" />
                Dakar & Thiès, Sénégal
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl tracking-tight text-text leading-[1.08] mb-5">
              Diène Thiam
            </h1>

            <h2 className="font-display font-semibold text-xl sm:text-2xl text-muted leading-snug mb-6 max-w-2xl">
              Ingénieur Logiciel, Développeur Full-Stack & Directeur Technique (CTO).
            </h2>

            {/* Bio Summary */}
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mb-9">
              Je conçois, développe et déploie des applications web complètes (React, Node.js, WordPress), 
              pilote des équipes techniques et forme des profils informatiques. En parallèle, je dirige 
              la production de contenus visuels et audiovisuels assistés par l’intelligence artificielle.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-12">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary"
              >
                Voir les réalisations web
                <HiOutlineArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('designs')}
                className="btn-secondary"
              >
                Espace Design & Vidéo
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-4 py-3 text-sm font-medium text-muted hover:text-text transition-colors"
              >
                Me contacter →
              </button>
            </div>

            {/* Key Facts Grid */}
            <div className="w-full grid grid-cols-3 border-t border-border pt-8 gap-6">
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-text tracking-tight">
                  7+
                </div>
                <div className="font-mono text-xs text-muted mt-1">
                  Plateformes web livrées
                </div>
              </div>
              <div className="border-l border-border pl-6">
                <div className="font-display font-bold text-2xl sm:text-3xl text-text tracking-tight">
                  CTO
                </div>
                <div className="font-mono text-xs text-muted mt-1">
                  Direction technique & IA
                </div>
              </div>
              <div className="border-l border-border pl-6">
                <div className="font-display font-bold text-2xl sm:text-3xl text-text tracking-tight">
                  6+ ans
                </div>
                <div className="font-mono text-xs text-muted mt-1">
                  IT, Réseaux & Développement
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Structured Engineer Profile Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="card-surface p-4 sm:p-5">
              {/* Portrait */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-surface2 border border-border mb-5">
                <img
                  src={profil}
                  alt="Diène Thiam — Ingénieur Logiciel"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Technical Dossier Metadata */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <div>
                    <div className="font-display font-bold text-base text-text">
                      Diène Thiam
                    </div>
                    <div className="font-mono text-xs text-muted">
                      Ingénieur Logiciel & Technicien Supérieur IT
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-surface2 border border-border font-mono text-[11px] text-text">
                    Dakar, SN
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-start gap-2.5">
                    <HiOutlineBriefcase className="w-4 h-4 text-muted shrink-0 mt-0.5" />
                    <div>
                      <span className="text-muted">Fonctions actuelles : </span>
                      <span className="text-text font-medium">
                        Coach Formateur (Bakeli) · Co-fondateur & CTO (Studio Amed Njie) · CTO (OnlineClass)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <HiOutlineAcademicCap className="w-4 h-4 text-muted shrink-0 mt-0.5" />
                    <div>
                      <span className="text-muted">Formation : </span>
                      <span className="text-text font-medium">
                        Master en Ingénierie Logicielle — UNCHK (2024–2026)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex flex-wrap gap-1.5">
                  {['React.js', 'Node.js', 'Tailwind CSS', 'WordPress', 'MongoDB', 'Design & IA'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-surface2 text-text font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
