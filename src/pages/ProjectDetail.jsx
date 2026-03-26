import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function ProjectDetail({ projects }) {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="font-display font-black text-3xl mb-4">Projet introuvable</h1>
          <p className="text-muted mb-8">Ce projet n'existe pas ou a été supprimé.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-accent rounded-full text-sm font-medium text-white"
            data-hover
          >
            ← Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20 relative z-10">
      <div className="container-custom max-w-5xl">
        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted hover:text-accent text-sm mb-10 transition-colors group"
          data-hover
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Retour aux projets
        </motion.button>

        {/* Hero thumb */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-72 md:h-96 rounded-3xl flex items-center justify-center text-8xl mb-10 border border-white/[0.07] overflow-hidden"
          style={{ background: project.gradientStyle }}
        >
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          >
            {project.emoji}
          </motion.span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl tracking-tight mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-muted mb-6">
            <span>
              Année : <span className="text-white font-medium">{project.year}</span>
            </span>
            <span>
              Rôle : <span className="text-white font-medium">{project.role}</span>
            </span>
            <span>
              Durée : <span className="text-white font-medium">{project.duration}</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 rounded-full text-sm font-medium text-white transition-all hover:-translate-y-0.5"
              style={{ boxShadow: '0 0 30px rgba(108,99,255,0.3)' }}
              data-hover
            >
              Voir la démo ↗
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-accent/40 rounded-full text-sm font-medium text-white/80 hover:text-white transition-all hover:-translate-y-0.5"
              data-hover
            >
              Code source
            </a>
          </div>
        </motion.div>

        {/* Content grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Main description — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-display font-bold text-xl mb-4 text-white/90">
                À propos du projet
              </h2>
              <div className="space-y-4">
                {project.fullDesc.split('\n\n').map((para, i) => (
                  <p key={i} className="text-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl mb-4 text-white/90">
                Fonctionnalités clés
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.06 }}
                    className="flex items-start gap-3 glass p-3 rounded-xl"
                  >
                    <span className="text-accent mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-muted leading-relaxed">{feat}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar — 1 col */}
          <div className="space-y-5">
            {/* Stack */}
            <div className="glass p-5 rounded-2xl">
              <h4 className="text-xs uppercase tracking-widest text-muted mb-4 font-medium">
                Stack technique
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/15 text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta */}
            <div className="glass p-5 rounded-2xl space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-muted font-medium">
                Informations
              </h4>
              {[
                { label: 'Année', value: project.year },
                { label: 'Rôle', value: project.role },
                { label: 'Durée', value: project.duration },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-[11px] text-muted uppercase tracking-wider mb-0.5">
                    {m.label}
                  </div>
                  <div className="text-sm font-medium text-white">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="glass p-5 rounded-2xl space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-muted font-medium">Liens</h4>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-sm text-muted hover:text-accent transition-colors group"
                data-hover
              >
                <span>Démo live</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-sm text-muted hover:text-accent transition-colors group"
                data-hover
              >
                <span>GitHub</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
