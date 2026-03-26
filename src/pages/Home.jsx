import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Home({ projects }) {
  return (
    <>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Experience />
      <Contact />
    </>
  )
}
