import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ProjectCard from './ProjectCard'

export default function Projects({ projects }) {
  const navigate = useNavigate()

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <div className="text-accent text-xs uppercase tracking-[0.2em] mb-3 font-medium">
              // Projets
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl leading-tight tracking-tight">
              Ce que j'ai
              <br />
              <span className="gradient-text">construit</span>
            </h2>
          </div>
          <button
            onClick={() => navigate('/add-project')}
            className="hidden self-start sm:self-auto text-xs text-muted border border-white/10 hover:border-accent/40 hover:text-accent px-4 py-2 rounded-full transition-all duration-300"
            data-hover
          >
            + Ajouter un projet
          </button>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
