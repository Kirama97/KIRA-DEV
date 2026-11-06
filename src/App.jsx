import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Background from './components/Background'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import AddProject from './pages/AddProject'

import { useProjects } from './hooks/useProjects'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

export default function App() {
  const location = useLocation()
  const { visibleProjects, allProjects, addProject } = useProjects()

  return (
    <div className="relative min-h-screen bg-bg text-text">
      <Background />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/" element={<Home projects={visibleProjects} />} />
            <Route
              path="/project/:slug"
              element={<ProjectDetail projects={allProjects} />}
            />
            <Route
              path="/add-project"
              element={<AddProject addProject={addProject} />}
            />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
      <BackToTop />
    </div>
  )
}
