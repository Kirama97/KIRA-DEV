import { useState } from 'react'
import { motion } from 'framer-motion'

const socials = [
  { icon: '👨‍💻', name: 'GitHub', handle: '@kirama97', url: 'https://github.com' },
  { icon: '💼', name: 'LinkedIn', handle: 'Diene Thiam', url: 'https://linkedin.com' },
  { icon: '𝕏', name: 'Twitter / X', handle: '@dienethiam', url: 'https://twitter.com' },
  { icon: '🎨', name: 'Dribbble', handle: 'dienethiam', url: 'https://dribbble.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000)) 
    setSent(true)
    setLoading(false)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="text-accent text-xs uppercase tracking-[0.2em] mb-3 font-medium">
            // Contact
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight tracking-tight mb-4">
            Travaillons <span className="gradient-text">ensemble.</span>
          </h2>
          <p className="text-muted max-w-md mx-auto leading-relaxed">
            Disponible pour missions freelance, postes full-time ou collaborations sur des projets ambitieux.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">
          {/* Left info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <div className="text-xs text-muted uppercase tracking-widest mb-2">Email direct</div>
              <a
                href="mailto:officialthiam97@gmail.com"
                className="font-display font-bold text-lg text-accent hover:text-accent2 transition-colors"
                data-hover
              >
                officialthiam97@gmail.com
              </a>
            </div>

            <div>
              <div className="text-xs text-muted uppercase tracking-widest mb-3">Localisation</div>
              <div className="flex items-center gap-2 text-white">
                <span>🇸🇳</span>
                <span className="font-medium">Thiés, Sénégal</span>
              </div>
              <div className="text-muted text-sm mt-1">Remote · Disponible worldwide</div>
            </div>

            <div>
              <div className="text-xs text-muted uppercase tracking-widest mb-4">Réseaux sociaux</div>
              <div className="flex flex-col gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 glass p-3 rounded-xl text-muted hover:text-white hover:border-accent/30 hover:bg-accent/[0.04] transition-all duration-300 group"
                    data-hover
                  >
                    <span className="text-xl">{s.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                        {s.name}
                      </div>
                      <div className="text-xs text-muted truncate">{s.handle}</div>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent text-xs">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl bg-accent/10 border border-accent/25 text-accent text-sm"
              >
                ✓ Message envoyé avec succès ! Je vous réponds sous 24h.
              </motion.div>
            )}

            <form onSubmit={submit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-muted">Nom *</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handle}
                    placeholder="Jean Dupont"
                    className="form-input bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-muted/50 focus:border-accent transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-muted">Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handle}
                    placeholder="jean@example.com"
                    className="form-input bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-muted/50 focus:border-accent transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted">Sujet</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handle}
                  placeholder="Mission freelance, collaboration, recrutement…"
                  className="form-input bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-muted/50 focus:border-accent transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handle}
                  placeholder="Décrivez votre projet, vos besoins, votre timeline…"
                  className="form-textarea bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-muted/50 focus:border-accent transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="self-start flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 disabled:opacity-60"
                style={{ boxShadow: '0 0 40px rgba(108,99,255,0.3)' }}
                data-hover
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" />
                    </svg>
                    Envoi en cours…
                  </>
                ) : (
                  'Envoyer le message →'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
