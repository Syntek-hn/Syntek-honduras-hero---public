import { Quote } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

const testimonios = [
  {
    empresa: 'INCCO & Asociados',
    sector: 'Constructora',
    autor: 'Jorge Membreño, Director General',
    iniciales: 'IA',
    texto:
      'Antes perdíamos clientes porque no podíamos responder fuera de horario. Con Nova atendemos al instante, incluso los fines de semana.',
    stars: 5,
  },
  {
    empresa: 'Vrain Media',
    sector: 'Agencia de Marketing',
    autor: 'Jorge Membreño, Fundador',
    iniciales: 'VM',
    texto:
      'Nuestros clientes esperaban respuesta inmediata. Nova cambió eso. Ahora cada cliente siente que está siendo atendido en todo momento.',
    stars: 5,
  },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-24 bg-[#07070f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" />
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-3xl pointer-events-none opacity-5"
        style={{ background: '#00D4FF' }} />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.3)', color: '#00D4FF' }}>
            Testimonios
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            Lo que dicen{' '}
            <span className="gradient-text">nuestros clientes</span>
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonios.map((t, i) => (
            <AnimatedSection key={t.empresa} delay={i * 0.15}>
              <div className="relative h-full rounded-3xl bg-[#0d0d1a] border border-white/5 p-8 hover:border-[#00D4FF]/20 transition-all duration-300 flex flex-col"
                style={{ '--hover-shadow': '0 8px 40px rgba(0,212,255,0.06)' } as React.CSSProperties}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #00D4FF, #0099cc)' }}>
                  <Quote size={18} className="text-black" />
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
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #00D4FF, #0066aa)' }}>
                    <span className="text-black text-xs font-bold">{t.iniciales}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.empresa}</p>
                    <p className="text-xs text-gray-500">{t.sector}</p>
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
