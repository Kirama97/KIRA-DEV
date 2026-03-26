import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function ProjectCard({ project, index }) {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => navigate(`/project/${project.slug}`)}
      className="project-card group glass rounded-3xl overflow-hidden cursor-none"
      data-hover
    >
      {/* Thumbnail */}
      <div className="relative h-52 overflow-hidden">
        <div
          className="w-full h-full flex items-center justify-center text-6xl transition-transform duration-700 group-hover:scale-110"
          style={{ background: project.gradientStyle }}
        >
          {project.emoji}
          
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-bg/85 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-4 py-2 bg-accent rounded-full text-xs font-medium text-white hover:bg-accent/90 transition-colors"
            data-hover
          >
            Demo ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-4 py-2 border border-white/20 rounded-full text-xs font-medium text-white hover:border-white/50 transition-colors"
            data-hover
          >
            Code
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display font-bold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-2">{project.shortDesc}</p>

        <div className="mt-4 flex items-center gap-1.5 text-accent text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Voir le détail <span>→</span>
        </div>
      </div>
    </motion.div>
  )
}
