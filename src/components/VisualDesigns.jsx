import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import {
  HiOutlineArrowUpRight,
  HiOutlineArrowsPointingOut,
  HiOutlineXMark,
  HiOutlinePlay,
} from 'react-icons/hi2'

const designs = [
  {
    id: 1,
    title: 'Clip Officiel « Don de soi » — Abdou Guité Seck',
    category: 'Vidéo & IA',
    client: 'Studio Amed Njie × AGS Plus',
    year: '2025',
    tools: ['IA Générative', 'Montage Vidéo', 'VFX & Post-production'],
    desc: 'Co-réalisation au sein du Studio Amed Njie : intégration des workflows IA, montage complet et effets visuels (VFX) pour le clip officiel de l’artiste Abdou Guité Seck.',
    image: '/visuel/don_de_soi.png',
    link: 'https://www.youtube.com/watch?v=GTcR5ZhiNSg',
    type: 'video',
  },
  {
    id: 2,
    title: 'Affiche Publicitaire — JOP Conception & Construction (J2C)',
    category: 'Design & Affiche',
    client: 'J2C Immobilier (Thiès)',
    year: '2025',
    tools: ['Design Graphique', 'Direction Artistique', 'Canva / Figma'],
    desc: 'Conception de l’affiche promotionnelle print et digitale mettant en valeur les services d’architecture 2D/3D, plans béton armé et suivi de chantier de J2C.',
    image: '/visuel/j2c.png',
    link: '#',
    type: 'poster',
  },
  {
    id: 3,
    title: 'Campagne Produit — Keulgui Farming (Jus de Mandarine)',
    category: 'Design & Affiche',
    client: 'Keulgui Farming',
    year: '2025',
    tools: ['Design Publicitaire', 'Composition Visuelle', 'Branding'],
    desc: 'Création visuelle promotionnelle pour le lancement du jus de mandarine 100% naturel de Keulgui Farming à Thiès.',
    image: '/visuel/affiche_bouteille.png',
    link: 'https://res.cloudinary.com/djop5kvgh/video/upload/v1793983262/affiche_keulgui_farming.mp4',
    type: 'video',
  },
  {
    id: 4,
    title: 'Capsule Vidéo & Tutoriel — Villa Petit Baobab',
    category: 'Collab & Média',
    client: 'Villa Petit Baobab (Warang)',
    year: '2025',
    tools: ['Filmora / CapCut', 'Motion Design', 'Montage Vidéo'],
    desc: 'Réalisation et montage du guide vidéo officiel accompagnant les clients dans le processus de demande de réservation en ligne.',
    image: '/visuel/petit_baobab.png',
    link: 'https://www.youtube.com/watch?v=d1jO82tUdwY',
    type: 'video',
  },
]

const categories = ['Tous', 'Vidéo & IA', 'Design & Affiche', 'Collab & Média']

// Helper to determine YouTube embed URL or direct video
function getYouTubeEmbedUrl(url) {
  if (!url) return null
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  if (match && match[2].length === 11) {
    return `https://www.youtube-nocookie.com/embed/${match[2]}?autoplay=1&rel=0&modestbranding=1`
  }
  return null
}

function isDirectVideo(url) {
  if (!url) return false
  return url.endsWith('.mp4') || url.includes('/video/upload/') || url.endsWith('.webm')
}

export default function VisualDesigns() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [selectedItem, setSelectedItem] = useState(null)

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedItem(null)
    }
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedItem])

  const filteredDesigns =
    activeCategory === 'Tous'
      ? designs
      : designs.filter((d) => d.category === activeCategory)

  const ytEmbed = selectedItem?.link ? getYouTubeEmbedUrl(selectedItem.link) : null
  const directVideo = selectedItem?.link && isDirectVideo(selectedItem.link)

  return (
    <section id="designs" className="section-padding border-b border-border relative z-10">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="section-label">03 — Direction Artistique & Production</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text tracking-tight">
              Espace Design Visuel, Vidéo & Collaborations
            </h2>
          </div>

          <p className="text-muted text-sm max-w-md leading-relaxed">
            Réalisations audiovisuelles assistées par IA, montage vidéo, affiches publicitaires
            et collaborations créatives. Cliquez sur un projet pour le visionner directement sur le site.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-border">
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors duration-150 ${
                  isActive
                    ? 'bg-text text-bg font-medium'
                    : 'bg-surface border border-border text-muted hover:text-text hover:border-text/30'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredDesigns.map((item, index) => {
            const isVideo = item.type === 'video'

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="card-surface-interactive overflow-hidden flex flex-col group"
              >
                {/* Top Meta Header */}
                <div className="px-5 py-3 border-b border-border bg-surface2/50 flex items-center justify-between text-xs font-mono text-muted">
                  <span className="flex items-center gap-1.5">
                    {isVideo && <span className="w-2 h-2 rounded-full bg-blue-500" />}
                    {item.category}
                  </span>
                  <span>{item.client} · {item.year}</span>
                </div>

                {/* Visual Container */}
                <div
                  onClick={() => setSelectedItem(item)}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-surface2 border-b border-border cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Play badge / Aperçu overlay */}
                  {isVideo ? (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                      {/* Central High-Contrast Play Button */}
                      <div className="w-14 h-14 rounded-full bg-neutral-950/90 border-2 border-white text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-neutral-950 transition-all">
                        <HiOutlinePlay className="w-6 h-6 ml-0.5 text-white fill-white/20" />
                      </div>
                      {/* Bottom-Right High-Contrast Badge */}
                      <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-950/90 border border-white/30 text-white text-xs font-mono font-medium shadow-lg backdrop-blur-sm">
                        <HiOutlinePlay className="w-3.5 h-3.5 text-white" />
                        Lire la vidéo
                      </div>
                    </div>
                  ) : (
                    <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-950/90 border border-white/30 text-white text-xs font-mono font-medium shadow-lg backdrop-blur-sm">
                      <HiOutlineArrowsPointingOut className="w-3.5 h-3.5 text-white" />
                      Aperçu affiche
                    </div>
                  )}
                </div>

                {/* Details Footer */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-surface2 border border-border text-muted"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display font-bold text-lg text-text mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between gap-4">
                    {isVideo ? (
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-text text-bg hover:opacity-90 border border-text text-xs font-medium transition-all shadow-sm"
                      >
                        <HiOutlinePlay className="w-4 h-4" />
                        Visionner la vidéo
                      </button>
                    ) : (
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-border hover:border-text bg-surface hover:bg-surface2 text-text text-xs font-medium transition-all"
                      >
                        <HiOutlineArrowsPointingOut className="w-3.5 h-3.5" />
                        Agrandir l’affiche
                      </button>
                    )}

                    {item.link && item.link.includes('youtube.com') && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-muted hover:text-text transition-colors inline-flex items-center gap-1 font-mono"
                      >
                        YouTube
                        <HiOutlineArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* Interactive Pop-Up / Modal (Vidéo & Affiche) */}
      {createPortal(
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl rounded-2xl bg-surface border border-border overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Modal Header */}
                <div className="px-5 sm:px-6 py-4 border-b border-border flex items-center justify-between gap-4 bg-surface2/40">
                  <div>
                    <div className="font-mono text-xs text-muted">
                      {selectedItem.category} · {selectedItem.client}
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-text">
                      {selectedItem.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-2 rounded-lg border border-border hover:border-text bg-surface text-text hover:bg-surface2 transition-colors"
                    aria-label="Fermer"
                  >
                    <HiOutlineXMark className="w-5 h-5 text-text" />
                  </button>
                </div>

                {/* Modal Body: Player Vidéo ou Affiche */}
                <div className="bg-black flex items-center justify-center overflow-hidden">
                  {selectedItem.type === 'video' && ytEmbed ? (
                    <div className="w-full aspect-video">
                      <iframe
                        src={ytEmbed}
                        title={selectedItem.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : selectedItem.type === 'video' && directVideo ? (
                    <div className="w-full aspect-video bg-black flex items-center justify-center">
                      <video
                        src={selectedItem.link}
                        controls
                        autoPlay
                        className="w-full h-full max-h-[70vh] object-contain"
                      />
                    </div>
                  ) : (
                    <div className="p-4 flex items-center justify-center max-h-[70vh] bg-surface2 w-full">
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        className="max-h-[65vh] w-auto object-contain rounded-lg"
                      />
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="px-5 sm:px-6 py-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-surface">
                  <p className="text-xs sm:text-sm text-muted max-w-2xl">
                    {selectedItem.desc}
                  </p>

                  {selectedItem.link && selectedItem.link.includes('youtube.com') && (
                    <a
                      href={selectedItem.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border bg-surface2 hover:bg-surface text-xs font-mono text-muted hover:text-text transition-colors shrink-0"
                    >
                      Ouvrir sur YouTube
                      <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}
