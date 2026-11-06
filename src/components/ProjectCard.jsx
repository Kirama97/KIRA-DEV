import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

export default function ProjectCard({ project, index }) {
  const navigate = useNavigate()
  const formattedIndex = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      onClick={() => navigate(`/project/${project.slug}`)}
      className="card-surface-interactive overflow-hidden flex flex-col cursor-pointer group"
    >
      {/* Top Meta Bar */}
      <div className="px-5 py-3 border-b border-border flex items-center justify-between text-xs font-mono text-muted bg-surface2/50">
        <span>{formattedIndex} — {project.category || 'Application Web'}</span>
        <span>{project.year}</span>
      </div>

      {/* Image Preview */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface2 border-b border-border">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-surface2 border border-border text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-display font-bold text-lg text-text mb-2 group-hover:underline underline-offset-4">
            {project.title}
          </h3>

          <p className="text-sm text-muted leading-relaxed line-clamp-2">
            {project.shortDesc}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-medium">
          <span className="text-text inline-flex items-center gap-1">
            Étude de cas →
          </span>

          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-border bg-surface2 hover:bg-text hover:text-bg text-text transition-colors"
            >
              Visiter le site
              <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
