import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { HiOutlineArrowUpRight, HiOutlineArrowsPointingOut, HiOutlineXMark, HiOutlinePlay } from 'react-icons/hi2'

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

export default function VisualDesigns() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredDesigns =
    activeCategory === 'Tous'
      ? designs
      : designs.filter((d) => d.category === activeCategory)

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
            et collaborations créatives réalisées pour des artistes et entreprises.
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
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors duration-150 ${isActive
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
          {filteredDesigns.map((item, index) => (
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
                <span>{item.category}</span>
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
                <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-bg/90 border border-border text-text text-xs font-mono">
                  <HiOutlineArrowsPointingOut className="w-3.5 h-3.5" />
                  Aperçu
                </div>
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
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="text-xs font-medium text-text hover:underline underline-offset-4 inline-flex items-center gap-1.5"
                  >
                    <HiOutlineArrowsPointingOut className="w-3.5 h-3.5" />
                    Agrandir le visuel
                  </button>

                  {item.link && item.link !== '#' && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-text text-bg text-xs font-medium hover:opacity-90 transition-opacity"
                    >
                      <HiOutlinePlay className="w-3.5 h-3.5" />
                      Regarder la vidéo
                      <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl rounded-xl bg-surface border border-border overflow-hidden shadow-2xl"
              >
                {/* Modal Header */}
                <div className="px-6 py-4 border-b border-border flex items-center justify-between gap-4">
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
                    className="p-2 rounded-lg border border-border bg-surface2 text-muted hover:text-text transition-colors"
                    aria-label="Fermer"
                  >
                    <HiOutlineXMark className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Image */}
                <div className="bg-surface2 flex items-center justify-center max-h-[70vh] overflow-auto p-4">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="max-h-[65vh] w-auto object-contain rounded-lg"
                  />
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm text-muted max-w-2xl">
                    {selectedItem.desc}
                  </p>
                  {selectedItem.link && selectedItem.link !== '#' && (
                    <a
                      href={selectedItem.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary shrink-0 text-xs py-2.5 px-4"
                    >
                      Voir la vidéo sur YouTube
                      <HiOutlineArrowUpRight className="w-4 h-4" />
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
