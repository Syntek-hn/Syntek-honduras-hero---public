import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Search } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

export default function Formulario() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ nombre: '', negocio: '', whatsapp: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/mzdkvbrn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="formulario" className="py-24 bg-[#07070f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
      <div className="absolute inset-0 cyber-grid pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-6"
        style={{ background: '#00D4FF' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-4"
        style={{ background: '#00D4FF' }} />

      <div className="max-w-2xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
            style={{ background: 'rgba(0,212,255,0.12)', border: '1px solid rgba(0,212,255,0.3)' }}>
            <Search size={24} style={{ color: '#00D4FF' }} />
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            Auditoría Gratuita de{' '}
            <span className="gradient-text">Ventas Perdidas</span>
          </h2>
          <p className="text-gray-400 text-lg">
            En 30 minutos te decimos cuánto dinero está dejando ir tu negocio. Sin costo. Sin compromiso.
          </p>
        </AnimatedSection>

        {!submitted ? (
          <AnimatedSection delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-8 bg-[#0d0d1a] border shadow-2xl"
              style={{ borderColor: 'rgba(0,212,255,0.15)' }}
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-300">Nombre</label>
                  <input
                    name="nombre"
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={form.nombre}
                    onChange={handleChange}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                    style={{ '--tw-ring-color': '#00D4FF' } as React.CSSProperties}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-300">Negocio</label>
                  <input
                    name="negocio"
                    type="text"
                    required
                    placeholder="Ej. Barbería El Corte"
                    value={form.negocio}
                    onChange={handleChange}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-300">WhatsApp</label>
                  <input
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="Ej. +504 9999-9999"
                    value={form.whatsapp}
                    onChange={handleChange}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-glow mt-6 w-full inline-flex justify-center items-center gap-2 py-4 rounded-xl text-black font-bold text-base shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #0099cc)' }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Quiero mi Auditoría Gratuita
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-600 mt-4">
                Sin compromiso · Te contactamos en menos de 24 horas · 100% gratis
              </p>
            </form>
          </AnimatedSection>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl p-12 text-center bg-[#0d0d1a] border shadow-2xl"
            style={{ borderColor: 'rgba(0,212,255,0.15)' }}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(0,212,255,0.12)', border: '1px solid rgba(0,212,255,0.3)' }}>
              <CheckCircle2 size={32} style={{ color: '#00D4FF' }} />
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-3">¡Solicitud recibida!</h3>
            <p className="text-gray-400 text-base mb-2">
              Gracias, <span className="font-semibold text-white">{form.nombre}</span>.
            </p>
            <p className="text-gray-500">
              Un especialista de Syntek te contactará en menos de 24 horas al WhatsApp{' '}
              <span className="font-semibold" style={{ color: '#00D4FF' }}>{form.whatsapp}</span>.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
