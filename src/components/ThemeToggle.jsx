import { useTheme } from '../hooks/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl glass hover:bg-accent/10 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-hover
      title={`Passer en mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
    >
      <AnimatePresence mode="wait">
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2 }}
          >
            <HiOutlineSun className="w-5 h-5 text-accent2" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2 }}
          >
            <HiOutlineMoon className="w-5 h-5 text-accent" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
