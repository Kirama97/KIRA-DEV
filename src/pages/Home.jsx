import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import VisualDesigns from '../components/VisualDesigns'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import SEO from '../components/SEO'

export default function Home({ projects }) {
  return (
    <>
      <SEO 
        title="Kira | Portfolio Développeur" 
        description="Diene Thiam — Frontend, Fullstack & Mobile Developer. Découvrez mes projets, compétences et mon parcours professionnel."
      />
      <Hero />
      <About />
      <Projects projects={projects} />
      <VisualDesigns />
      <Experience />
      <Contact />
    </>
  )
}
