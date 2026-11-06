import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiOutlineArrowUpRight, HiOutlineArrowLeft } from 'react-icons/hi2'

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
        <div className="text-center card-surface p-10 max-w-md">
          <div className="font-mono text-xs text-muted mb-2">ERREUR 404</div>
          <h1 className="mb-3 text-2xl font-bold font-display text-text">Projet introuvable</h1>
          <p className="mb-6 text-sm text-muted">
            Ce projet n’existe pas ou a été déplacé.
          </p>
          <button onClick={() => navigate('/')} className="btn-primary">
            ← Retour à l’accueil
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-24">
      <div className="container-custom">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-muted hover:text-text transition-colors"
        >
          <HiOutlineArrowLeft className="w-4 h-4" />
          Retour aux réalisations
        </button>

        {/* Project Header */}
        <div className="pb-10 mb-10 border-b border-border flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface2 border border-border text-text">
                {project.category || 'Application Web'}
              </span>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-surface border border-border text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-text tracking-tight mb-4">
              {project.title}
            </h1>

            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Visiter le site en direct
                <HiOutlineArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Code source
              </a>
            )}
          </div>
        </div>

        {/* Main Image & Gallery */}
        <div className="mb-14">
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-surface2 border border-border mb-4">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                src={activeImage}
                alt={project.title}
                className="object-cover object-top w-full h-full"
              />
            </AnimatePresence>
          </div>

          {project.gallery && project.gallery.length > 1 && (
            <div className="flex gap-3 pb-2 overflow-x-auto">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative flex-shrink-0 w-28 h-18 rounded-lg overflow-hidden border transition-all ${
                    activeImage === img
                      ? 'border-text opacity-100 ring-1 ring-text'
                      : 'border-border opacity-50 hover:opacity-90'
                  }`}
                >
                  <img src={img} alt="" className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Main Description & Features (8 cols) */}
          <div className="space-y-10 lg:col-span-8">
            <div className="card-surface p-6 sm:p-8">
              <h2 className="mb-5 text-xl font-bold font-display text-text pb-3 border-b border-border">
                Présentation & Architecture du Projet
              </h2>
              <div className="space-y-4">
                {project.fullDesc.split('\n\n').map((para, i) => (
                  <p key={i} className="leading-relaxed text-muted text-sm sm:text-base">
                    {para.trim()}
                  </p>
                ))}
              </div>
            </div>

            {project.features && project.features.length > 0 && (
              <div className="card-surface p-6 sm:p-8">
                <h2 className="mb-5 text-xl font-bold font-display text-text pb-3 border-b border-border">
                  Fonctionnalités & Livrables Clés
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-lg bg-surface2 border border-border"
                    >
                      <span className="font-mono text-xs text-text mt-0.5 font-semibold">
                        0{i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-muted">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Technical Sidebar (4 cols) */}
          <div className="space-y-6 lg:col-span-4">
            <div className="p-6 card-surface space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted pb-3 border-b border-border">
                Fiche Technique
              </h4>
              {[
                { label: 'Année de livraison', value: project.year },
                { label: 'Rôle sur le projet', value: project.role },
                { label: 'Durée de réalisation', value: project.duration },
              ].map((m) => (
                <div key={m.label} className="flex justify-between items-baseline text-sm">
                  <span className="text-muted">{m.label}</span>
                  <span className="font-medium text-text text-right">{m.value}</span>
                </div>
              ))}
            </div>

            <div className="p-6 card-surface">
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-4 pb-3 border-b border-border">
                Technologies Utilisées
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 rounded-md bg-surface2 border border-border text-text"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
