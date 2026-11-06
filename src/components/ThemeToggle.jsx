import { useTheme } from '../hooks/ThemeContext'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-border bg-surface hover:bg-surface2 text-muted hover:text-text transition-colors"
      aria-label={`Passer en mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
      title={`Passer en mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
    >
      {theme === 'dark' ? (
        <HiOutlineSun className="w-4 h-4" />
      ) : (
        <HiOutlineMoon className="w-4 h-4" />
      )}
    </button>
  )
}
