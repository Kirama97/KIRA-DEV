import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const defaultForm = {
  title: '',
  shortDesc: '',
  fullDesc: '',
  tags: '',
  tech: '',
  emoji: '🚀',
  gradientStyle: 'linear-gradient(135deg, #0d0d20, #1a0535)',
  github: '',
  demo: '',
  year: new Date().getFullYear().toString(),
  role: '',
  duration: '',
}

export default function AddProject({ addProject }) {
  const [form, setForm] = useState(defaultForm)
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600))

    addProject({
      ...form,
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      tech: form.tech.split(',').map((t) => t.trim()).filter(Boolean),
      features: [],
    })

    setSaved(true)
    setLoading(false)
    setTimeout(() => {
      navigate('/')
      window.scrollTo(0, 0)
    }, 1800)
  }

  return (
    <div className="min-h-screen pt-24 pb-20 relative z-10">
      <div className="container-custom max-w-2xl">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted hover:text-accent text-sm mb-10 transition-colors group"
          data-hover
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Retour
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs text-muted mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent3" />
              Route secrète — non visible dans la navigation
            </div>
            <h1 className="font-display font-black text-4xl tracking-tight mb-2">
              Ajouter un projet
            </h1>
            <p className="text-muted text-sm leading-relaxed">
              Le projet sera ajouté avec{' '}
              <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded text-xs">
                visible: false
              </code>{' '}
              — il n'apparaîtra pas dans le portfolio public.
            </p>
          </div>

          {saved && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 rounded-2xl bg-green-500/10 border border-green-500/25 text-green-400 text-sm"
            >
              ✓ Projet ajouté avec succès ! Redirection en cours…
            </motion.div>
          )}

          <form onSubmit={submit} className="flex flex-col gap-5">
            {/* Row 1 */}
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Titre *" name="title" required value={form.title} onChange={handle} placeholder="Mon Super Projet" />
              <Field label="Emoji" name="emoji" value={form.emoji} onChange={handle} placeholder="🚀" />
            </div>

            <Field label="Description courte *" name="shortDesc" required value={form.shortDesc} onChange={handle} placeholder="Une ligne percutante…" />
            <Field label="Description complète" name="fullDesc" value={form.fullDesc} onChange={handle} placeholder="Décrivez le projet en détail…" textarea />

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Tags (séparés par virgule)" name="tags" value={form.tags} onChange={handle} placeholder="React, Node.js, MongoDB" />
              <Field label="Stack (séparés par virgule)" name="tech" value={form.tech} onChange={handle} placeholder="React 18, TypeScript, …" />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Lien GitHub" name="github" value={form.github} onChange={handle} placeholder="https://github.com/…" type="url" />
              <Field label="Lien Démo" name="demo" value={form.demo} onChange={handle} placeholder="https://…" type="url" />
            </div>

            <div className="grid grid-cols-3 gap-5">
              <Field label="Année" name="year" value={form.year} onChange={handle} placeholder="2024" />
              <Field label="Rôle" name="role" value={form.role} onChange={handle} placeholder="Fullstack Dev" />
              <Field label="Durée" name="duration" value={form.duration} onChange={handle} placeholder="3 mois" />
            </div>

            <Field
              label="Gradient CSS (fond de la card)"
              name="gradientStyle"
              value={form.gradientStyle}
              onChange={handle}
              placeholder="linear-gradient(135deg, #0d0d20, #1a0535)"
            />

            {/* Preview */}
            {form.emoji && (
              <div className="flex items-center gap-4 glass p-4 rounded-2xl">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl shrink-0"
                  style={{ background: form.gradientStyle }}
                >
                  {form.emoji}
                </div>
                <div>
                  <div className="font-display font-bold text-sm">
                    {form.title || 'Titre du projet'}
                  </div>
                  <div className="text-muted text-xs mt-0.5">
                    {form.shortDesc || 'Description courte…'}
                  </div>
                </div>
              </div>
            )}

            <motion.button
              type="submit"
              disabled={loading || saved}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="self-start flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all disabled:opacity-60"
              style={{ boxShadow: '0 0 30px rgba(108,99,255,0.3)' }}
              data-hover
            >
              {loading ? 'Ajout en cours…' : saved ? '✓ Ajouté !' : 'Ajouter le projet ✓'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

// Reusable field component
function Field({ label, name, value, onChange, placeholder, required, type = 'text', textarea }) {
  const cls =
    'form-input bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-muted/40 focus:border-accent transition-all w-full'

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] uppercase tracking-widest text-muted font-medium">
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className={cls + ' resize-none form-textarea'}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cls}
        />
      )}
    </div>
  )
}
