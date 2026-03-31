import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Search } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

const tipos = [
  'Barbería / Salón de Belleza',
  'Clínica / Centro Médico',
  'Restaurante / Cafetería',
  'Hotel / Hostal',
  'Bienes Raíces',
  'Constructora',
  'Tienda / Comercio',
  'Agencia / Servicios',
  'Emprendimiento',
  'Otro',
]

export default function Formulario() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    negocio: '',
    whatsapp: '',
    tipo: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="formulario" className="py-24 bg-[#07070f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-0 cyber-grid pointer-events-none" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/30 mb-6">
            <Search size={24} className="text-blue-400" />
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            Auditoría Gratuita de{' '}
            <span className="gradient-text">Ventas Perdidas</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Descubre cuánto dinero está perdiendo tu negocio por no tener atención 24/7. Completamente gratis, sin compromiso.
          </p>
        </AnimatedSection>

        {!submitted ? (
          <AnimatedSection delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-8 bg-[#0d0d1a] border border-blue-500/15 shadow-2xl shadow-blue-900/10"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-300">
                    Nombre completo
                  </label>
                  <input
                    name="nombre"
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={form.nombre}
                    onChange={handleChange}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-300">
                    Nombre del negocio
                  </label>
                  <input
                    name="negocio"
                    type="text"
                    required
                    placeholder="Ej. Barbería El Corte"
                    value={form.negocio}
                    onChange={handleChange}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-300">
                    WhatsApp
                  </label>
                  <input
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="Ej. +504 9999-9999"
                    value={form.whatsapp}
                    onChange={handleChange}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-300">
                    Tipo de negocio
                  </label>
                  <select
                    name="tipo"
                    required
                    value={form.tipo}
                    onChange={handleChange}
                    className="rounded-xl border border-white/10 bg-[#0d0d1a] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="" disabled className="bg-[#0d0d1a]">Selecciona una opción</option>
                    {tipos.map((t) => (
                      <option key={t} value={t} className="bg-[#0d0d1a]">{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-glow mt-6 w-full inline-flex justify-center items-center gap-2 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70"
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
            className="rounded-3xl p-12 text-center bg-[#0d0d1a] border border-blue-500/15 shadow-2xl"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} className="text-green-400" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-3">
              ¡Solicitud recibida!
            </h3>
            <p className="text-gray-400 text-base mb-2">
              Gracias, <span className="font-semibold text-white">{form.nombre}</span>.
            </p>
            <p className="text-gray-500">
              Un especialista de Syntek te contactará en menos de 24 horas al WhatsApp{' '}
              <span className="font-semibold text-blue-400">{form.whatsapp}</span> para presentarte tu auditoría personalizada.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
