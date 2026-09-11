import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ProjectDetail({ projects }) {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (project) setActiveImage(project.image)
  }, [slug, project])

  if (!project) {
    return (
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="mb-6 text-6xl">🔍</div>
          <h1 className="mb-4 text-3xl font-black font-display text-text">Projet introuvable</h1>
          <p className="mb-8 text-muted text-text/60">Ce projet n'existe pas ou a été supprimé.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 text-sm font-medium text-white rounded-full bg-accent"
            data-hover
          >
            ← Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-10 min-h-screen pt-24 pb-20">
      <div className="max-w-5xl container-custom">
        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-10 text-sm transition-colors text-muted hover:text-accent group"
          data-hover
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Retour aux projets
        </motion.button>

        {/* Hero / Main Image */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-72 md:h-[500px] rounded-sm flex items-center justify-center mb-6 overflow-hidden relative group shadow-2xl"
            style={{ background: project.gradientStyle }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={activeImage}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </AnimatePresence>
          </motion.div>

          {/* Thumbnails Gallery */}
          {project.gallery && project.gallery.length > 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 pb-2 overflow-x-auto scrollbar-hide"
            >
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-md overflow-hidden border-1 transition-all ${
                    activeImage === img ? 'border-accent scale-105 shadow-lg ' : 'border-transparent opacity-40 hover:opacity-100'
                  }`}
                  data-hover
                >
                  <img src={img} alt="" className="object-cover w-full h-full" />
                </button>
              ))}
            </motion.div>
          )}
        </div>

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
                className="px-3 py-1 text-xs font-medium border rounded-full bg-accent/10 border-accent/25 text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight font-display md:text-5xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 mb-6 text-sm text-muted">
            <span>
              Année : <span className="font-medium text-text">{project.year}</span>
            </span>
            <span>
              Rôle : <span className="font-medium text-text">{project.role}</span>
            </span>
            <span>
              Durée : <span className="font-medium text-text">{project.duration}</span>
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
              Visiter le site ↗
            </a>
             {/* {
               project.github ? ( <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-text/10 hover:border-accent/40 rounded-full text-sm font-medium text-text/80 hover:text-text transition-all hover:-translate-y-0.5"
              data-hover
            >
              Code source
            </a>) : ''
             } */}
          </div>
        </motion.div>

        {/* Content grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {/* Main description — 2 cols */}
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="mb-4 text-xl font-bold font-display text-text/90">
                À propos du projet
              </h2>
              <div className="space-y-4">
                {project.fullDesc.split('\n\n').map((para, i) => (
                  <p key={i} className="leading-relaxed text-muted">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold font-display text-text/90">
                Fonctionnalités clés
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.06 }}
                    className="flex items-start gap-3 p-3 glass rounded-xl"
                  >
                    <span className="text-accent mt-0.5 text-sm">✓</span>
                    <span className="text-sm leading-relaxed text-muted">{feat}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar — 1 col */}
          <div className="space-y-5">
            {/* Stack */}
            <div className="p-5 glass rounded-2xl">
              <h4 className="mb-4 text-xs font-medium tracking-widest uppercase text-muted">
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
            <div className="p-5 space-y-4 glass rounded-2xl">
              <h4 className="text-xs font-medium tracking-widest uppercase text-muted">
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
                  <div className="text-sm font-medium text-text">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="p-5 space-y-3 glass rounded-2xl">
              <h4 className="text-xs font-medium tracking-widest uppercase text-muted">Liens</h4>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-sm transition-colors text-muted hover:text-accent group"
                data-hover
              >
                <span>Visiter le site</span>
                <span className="transition-transform group-hover:translate-x-1"></span>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-sm transition-colors text-muted hover:text-accent group"
                data-hover
              >
                <span>GitHub</span>
                <span className="transition-transform group-hover:translate-x-1"></span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
