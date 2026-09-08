import { motion } from 'framer-motion'
import { useState } from 'react'

const designs = [
  {
    id: 1,
    title: 'Clip vidéo IA - Abdou Guitte Seck',
    category: 'Vidéo & IA',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', // Placeholder for AI video cover
    link: '#', // Link to don de soi
  },
  {
    id: 2,
    title: 'Affiche Publicitaire',
    category: 'Design & Affiche',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop', // Placeholder
    link: '#',
  },
  {
    id: 3,
    title: 'Collab & Branding',
    category: 'Collab',
    image: 'https://images.unsplash.com/photo-1542744094-24638ea095b5?q=80&w=2670&auto=format&fit=crop', // Placeholder
    link: '#',
  },
  {
    id: 4,
    title: 'Montage Vidéo Promotionnel',
    category: 'Vidéo',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2662&auto=format&fit=crop', // Placeholder
    link: '#',
  },
]

const categories = ['Tous', 'Vidéo & IA', 'Design & Affiche', 'Collab', 'Vidéo']

export default function VisualDesigns() {
  const [activeCategory, setActiveCategory] = useState('Tous')

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
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === cat
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
              data-hover
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-accent2 text-xs font-medium mb-1">{design.category}</div>
                <h3 className="text-white font-bold text-lg leading-tight">{design.title}</h3>
                {design.link !== '#' && (
                  <a href={design.link} className="inline-block mt-3 text-sm text-accent hover:text-accent2 transition-colors">
                    Voir le projet →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
