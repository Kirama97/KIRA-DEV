import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Cursor from './components/Cursor'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import AddProject from './pages/AddProject'

import { useCursor } from './hooks/useCursor'
import { useProjects } from './hooks/useProjects'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
}

export default function App() {
  const location = useLocation()
  const { visibleProjects, allProjects, addProject } = useProjects()

  useCursor()

  return (
    <div className="relative min-h-screen">
      <Cursor />
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
    </div>
  )
}
