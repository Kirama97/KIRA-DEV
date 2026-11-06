import ProjectCard from './ProjectCard'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section-padding border-b border-border relative z-10">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="section-label">02 — Ingénierie & Développement</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text tracking-tight">
              Projets Web & Plateformes Déployées
            </h2>
          </div>
          <p className="text-muted text-sm max-w-md leading-relaxed">
            Sélection d’applications full-stack, plateformes SaaS, e-commerce et systèmes de 
            réservation conçus et mis en production.
          </p>
        </div>

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
