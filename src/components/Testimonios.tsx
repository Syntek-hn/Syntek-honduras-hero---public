import { Quote } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

const testimonios = [
  {
    empresa: 'INCCO & Asociados',
    iniciales: 'IA',
    sector: 'Constructora',
    color: 'from-blue-600 to-indigo-700',
    texto:
      'Antes perdíamos clientes interesados en nuestros proyectos porque no podíamos responder consultas fuera de horario. Con Nova atendemos a cada prospecto al instante, incluso los fines de semana.',
    stars: 5,
  },
  {
    empresa: 'Vrain Media',
    iniciales: 'VM',
    sector: 'Agencia Digital',
    color: 'from-cyan-500 to-blue-600',
    texto:
      'Nuestros clientes esperaban respuesta inmediata y no siempre podíamos dársela. Nova cambió eso completamente. Ahora cada cliente siente que está siendo atendido en todo momento.',
    stars: 5,
  },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-24 bg-[#0a0a16] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-30" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            Lo que dicen{' '}
            <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Empresas en Honduras ya están cerrando más ventas con Nova.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonios.map((t, i) => (
            <AnimatedSection key={t.empresa} delay={i * 0.15}>
              <div className="relative h-full rounded-3xl bg-[#0d0d1a] border border-white/5 p-8 hover:border-blue-500/25 hover:shadow-[0_8px_40px_rgba(59,130,246,0.08)] transition-all duration-300 flex flex-col">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Quote size={18} className="text-white" />
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 text-base leading-relaxed flex-1 italic">
                  "{t.texto}"
                </p>

                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/5">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs font-bold">{t.iniciales}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.empresa}</p>
                    <p className="text-xs text-gray-500">{t.sector}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                      Cliente Nova
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
