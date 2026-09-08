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
      className="overflow-hidden rounded-lg project-card group glass cursor-none"
      data-hover
    >
      <div className="relative overflow-hidden h-52">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div
            className="flex items-center justify-center w-full h-full text-6xl transition-transform duration-700 group-hover:scale-110"
            style={{ background: project.gradientStyle }}
          >
            {project.emoji}
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300 opacity-0 bg-bg/85 group-hover:opacity-100">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-4 py-2 text-xs font-medium text-white transition-colors rounded-full bg-accent hover:bg-accent/90"
            data-hover
          >
            Visiter ↗
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
        <h3 className="mb-2 text-lg font-bold transition-colors duration-300 font-display group-hover:text-accent">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted line-clamp-2">{project.shortDesc}</p>

        <div className="mt-4 flex items-center gap-1.5 text-accent text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Voir le détail <span>→</span>
        </div>
      </div>
    </motion.div>
  )
}
