import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-8">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-muted text-xs"
        >
          <span className="font-display font-bold text-base gradient-text">DT.</span>
          <span>© {year} Diene Thiam — Tous droits réservés</span>
          <div className="flex items-center gap-2">
            <span>Conçu & dev avec</span>
            du coeur
            <span>· KIRA/DEV</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
