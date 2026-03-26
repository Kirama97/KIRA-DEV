import { useState } from 'react'
import { projects as initialProjects } from '../data/projects'

export function useProjects() {
  const [projects, setProjects] = useState(initialProjects)

  const addProject = (newProject) => {
    const project = {
      ...newProject,
      id: Date.now(),
      visible: false, // Hidden by default — admin-added projects are not public
      slug: newProject.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    }
    setProjects((prev) => [...prev, project])
    return project
  }

  const visibleProjects = projects.filter((p) => p.visible)
  const allProjects = projects

  return { projects, visibleProjects, allProjects, addProject }
}
