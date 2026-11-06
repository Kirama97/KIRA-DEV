import { useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineArrowUpRight, HiOutlineEnvelope, HiOutlineMapPin } from 'react-icons/hi2'

const socials = [
  { icon: FaPhoneAlt, name: 'Téléphone principal', handle: '+221 78 581 57 82', url: 'tel:+221785815782' },
  { icon: FaWhatsapp, name: 'WhatsApp Direct', handle: '+221 78 581 57 82 / 76 344 82 06', url: 'https://wa.me/221785815782' },
  { icon: FaLinkedin, name: 'LinkedIn', handle: 'in/diene-thiam', url: 'https://www.linkedin.com/in/di%C3%A9ne-thiam-971096247/' },
  { icon: FaGithub, name: 'GitHub', handle: '@Kirama97', url: 'https://github.com/Kirama97' },
  { icon: FaInstagram, name: 'Instagram', handle: '@fou2tech', url: 'https://instagram.com/fou2tech' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setSent(true)
    setLoading(false)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="section-label">05 — Contact & Collaboration</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text tracking-tight mb-4">
            Discutons de votre prochain projet.
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Disponible pour des missions de développement full-stack, de direction technique (CTO), 
            de formation ou de réalisation visuelle et audiovisuelle.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 xl:gap-14">
          {/* Left Column — Direct Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-surface p-6 space-y-5">
              <div>
                <div className="font-mono text-xs text-muted uppercase tracking-wider mb-1.5">
                  Courriel professionnel
                </div>
                <a
                  href="mailto:Officialthiam97@gmail.com"
                  className="inline-flex items-center gap-2 font-display font-bold text-base sm:text-lg text-text hover:underline underline-offset-4"
                >
                  <HiOutlineEnvelope className="w-5 h-5 text-muted" />
                  Officialthiam97@gmail.com
                </a>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="font-mono text-xs text-muted uppercase tracking-wider mb-1.5">
                  Localisation
                </div>
                <div className="flex items-center gap-2 text-text text-sm font-medium">
                  <HiOutlineMapPin className="w-4 h-4 text-muted" />
                  <span>Dakar & Thiès, Sénégal</span>
                </div>
                <div className="text-muted text-xs mt-1">
                  Disponible sur site et en télétravail (Remote)
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
                Canaux directs & Réseaux
              </div>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 card-surface-interactive p-3.5 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-surface2 border border-border flex items-center justify-center text-text text-sm shrink-0">
                    <s.icon />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-text">
                      {s.name}
                    </div>
                    <div className="font-mono text-xs text-muted truncate">
                      {s.handle}
                    </div>
                  </div>
                  <HiOutlineArrowUpRight className="w-4 h-4 text-muted group-hover:text-text transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column — Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="card-surface p-6 sm:p-8">
              <h3 className="font-display font-bold text-lg text-text mb-6 pb-4 border-b border-border">
                Envoyer un message direct
              </h3>

              {sent && (
                <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-sm font-medium">
                  ✓ Votre message a bien été transmis. Je vous répondrai sous 24 heures.
                </div>
              )}

              <form onSubmit={submit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-muted">
                      Nom complet *
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handle}
                      placeholder="Ex: Amadou Diop"
                      className="form-input bg-surface2 border border-border rounded-lg px-4 py-3 text-text text-sm placeholder-muted/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-muted">
                      Adresse e-mail *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handle}
                      placeholder="nom@entreprise.com"
                      className="form-input bg-surface2 border border-border rounded-lg px-4 py-3 text-text text-sm placeholder-muted/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-muted">
                    Objet de la demande
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handle}
                    placeholder="Développement web, Direction technique, Design visuel, Formation…"
                    className="form-input bg-surface2 border border-border rounded-lg px-4 py-3 text-text text-sm placeholder-muted/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-muted">
                    Détails du projet *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handle}
                    placeholder="Décrivez votre besoin, vos objectifs et vos délais…"
                    className="form-textarea bg-surface2 border border-border rounded-lg px-4 py-3 text-text text-sm placeholder-muted/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary disabled:opacity-60"
                >
                  {loading ? 'Envoi en cours…' : 'Envoyer le message →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
