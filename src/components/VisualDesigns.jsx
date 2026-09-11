import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { createPortal } from 'react-dom'

const designs = [
  {
    id: 1,
    title: 'Clip vidéo IA - Abdou Guitte Seck',
    category: 'Vidéo & IA',
    image: '/visuel/don_de_soi.png', // Placeholder for AI video cover
    link: 'https://www.youtube.com/watch?v=GTcR5ZhiNSg', // Link to don de soi
  },
  {
    id: 2,
    title: 'Affiche Bouteille',
    category: 'Design & Affiche',
    image: '/visuel/affiche_bouteille.png', 
    link: '#',
  },
  {
    id: 3,
    title: 'Tuto Villa Petit Baobab',
    category: 'vidéo',
    image: '/visuel/petit_baobab.png', // Placeholder
    link: 'https://www.youtube.com/watch?v=d1jO82tUdwY',
  },
  {
    id: 4,
    title: 'Affiche pour J2C',
    category: 'Design & Affiche',
    image: '/visuel/j2c.png', // Placeholder
    link: '#',
  },
]

const categories = ['Tous', 'Vidéo & IA', 'Design & Affiche', 'Collab', 'Vidéo']

export default function VisualDesigns() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredDesigns = activeCategory === 'Tous'
    ? designs
    : designs.filter(d => d.category === activeCategory)

  return (
    <section id="designs" className="section-padding relative z-10 bg-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="text-accent text-xs uppercase tracking-[0.2em] mb-3 font-medium">
            // Créativité
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight tracking-tight">
            Design <span className="gradient-text">Visuel</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Une collection de mes réalisations visuelles, allant du montage vidéo assisté par l'IA
            aux affiches et collaborations créatives.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${activeCategory === cat
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'glass text-muted hover:text-text hover:bg-white/[0.04]'
                }`}
              data-hover
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(design.image)}
              data-hover
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t bg-neutral-900/50 from-bg/90 via-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-accent2 text-xs font-medium mb-1">{design.category}</div>
                <h3 className="text-white font-bold text-lg leading-tight">{design.title}</h3>
                {design.link !== '#' && (
                  <a href={design.link} target='_blank' rel='noreferrer' className="inline-block mt-3 text-sm text-orange-500 hover:text-accent2 transition-colors">
                    Voir le projet →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 bg-black/15 backdrop-blur-sm cursor-zoom-out"
            >
              <button 
                className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all cursor-pointer z-50"
                onClick={() => setSelectedImage(null)}
              >
                <span className="text-sm font-medium">Fermer</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                alt="Design en grand"
                className="w-auto max-w-[90vw] md:max-w-3xl lg:max-w-4xl max-h-[85vh] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}
