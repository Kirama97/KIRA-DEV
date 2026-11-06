export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-border bg-surface py-10">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded bg-text text-bg font-mono font-semibold text-[11px] flex items-center justify-center">
              DT
            </span>
            <span className="font-display font-semibold text-text">
              Diène Thiam
            </span>
            <span>— Développeur Web, Technicien IT & CTO</span>
          </div>

          <div className="font-mono text-xs text-muted">
            © {year} Diène Thiam · Dakar, Sénégal
          </div>
        </div>
      </div>
    </footer>
  )
}
