import { motion } from 'framer-motion'
import { Check, Star, Zap, Building2, Rocket } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

const planes = [
  {
    name: 'Nova Esencial',
    icon: Zap,
    instalacion: 'L 6,900',
    mensualidad: 'L 2,875',
    porDia: 'L 96 al día',
    primerMes: 'El primer mes de mensualidad es completamente gratis',
    primerMesExtra: 'Probá con tus clientes reales sin pagar un lempira extra.',
    features: [
      'Responde WhatsApp 24/7',
      'Conoce tus servicios y precios',
      'Te avisa cuando hay una venta',
      'Atención humana disponible',
    ],
    nota: 'Contrato 3 meses, luego cancelas cuando quieras con 30 días de aviso.',
    highlighted: false,
    borderColor: 'border-white/10 hover:border-[#00D4FF]/30',
    iconColor: 'from-gray-500 to-gray-700',
  },
  {
    name: 'Nova Profesional',
    icon: Rocket,
    instalacion: 'L 13,800',
    mensualidad: 'L 5,175',
    porDia: 'L 173 al día',
    primerMes: 'El primer mes de mensualidad es completamente gratis',
    primerMesExtra: 'Probá con tus clientes reales sin pagar un lempira extra.',
    features: [
      'Todo lo del plan Esencial',
      'Agenda citas automáticamente',
      'Maneja quejas y te informa',
      'Resumen mensual de clientes',
    ],
    nota: 'Contrato 3 meses, luego cancelas cuando quieras con 30 días de aviso.',
    highlighted: true,
    borderColor: 'border-[#00D4FF]/40',
    iconColor: 'from-[#00D4FF] to-[#0099cc]',
  },
  {
    name: 'Nova Empresarial',
    icon: Building2,
    instalacion: 'L 28,750',
    mensualidad: 'L 9,200',
    porDia: 'L 307 al día',
    primerMes: 'Onboarding prioritario incluido',
    primerMesExtra: '',
    features: [
      'Todo lo del plan Profesional',
      'Conexión con otros sistemas',
      'Pensado para negocios con múltiples productos, varios empleados de atención y procesos más complejos',
      'El equipo de Syntek diseña el flujo de atención a la medida del negocio',
    ],
    nota: 'Contrato 3 meses, luego cancelas cuando quieras con 30 días de aviso.',
    highlighted: false,
    borderColor: 'border-violet-700/40 hover:border-violet-500/50',
    iconColor: 'from-violet-600 to-purple-700',
  },
]

export default function Planes() {
  return (
    <section id="planes" className="py-24 bg-[#07070f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none opacity-5"
        style={{ background: '#00D4FF' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.3)', color: '#00D4FF' }}>
            Planes y Precios
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            Elegí tu <span className="gradient-text">plan</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Todos los precios incluyen ISV.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {planes.map((plan, i) => {
            const Icon = plan.icon
            return (
              <AnimatedSection key={plan.name} delay={i * 0.12}>
                <div
                  className={`relative h-full rounded-3xl border-2 ${plan.borderColor} bg-[#0d0d1a] p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                    plan.highlighted
                      ? 'shadow-[0_0_40px_rgba(0,212,255,0.12)] ring-1 ring-[#00D4FF]/20'
                      : ''
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-black shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #00D4FF, #0099cc)' }}>
                        <Star size={12} fill="currentColor" />
                        MÁS POPULAR
                      </span>
                    </div>
                  )}

                  {/* Icon & Name */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${plan.iconColor} flex items-center justify-center shadow-lg`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white">{plan.name}</h3>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-b border-white/5">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-heading font-bold text-2xl text-white">{plan.instalacion}</span>
                      <span className="text-sm text-gray-500">con ISV instalación</span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-heading font-semibold text-xl text-gray-300">{plan.mensualidad}</span>
                      <span className="text-sm text-gray-500">/mes con ISV</span>
                    </div>
                    <p className="text-sm font-bold mt-1" style={{ color: '#00D4FF' }}>{plan.porDia}</p>
                    <p className="text-xs text-green-400 font-semibold mt-2 flex items-start gap-1">
                      <Check size={12} className="mt-0.5 flex-shrink-0" />
                      <span>
                        {plan.primerMes}
                        {plan.primerMesExtra && (
                          <span className="block text-gray-500 font-normal mt-0.5">{plan.primerMesExtra}</span>
                        )}
                      </span>
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-400">
                        <div className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: 'linear-gradient(135deg, #00D4FF, #0099cc)' }}>
                          <Check size={10} className="text-black" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-gray-600 mt-5">{plan.nota}</p>

                  {/* CTA */}
                  <a
                    href="#formulario"
                    className={`mt-6 inline-flex justify-center items-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      plan.highlighted
                        ? 'btn-glow text-black font-bold'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                    }`}
                    style={plan.highlighted ? { background: 'linear-gradient(135deg, #00D4FF, #0099cc)' } : {}}
                  >
                    Quiero este plan
                  </a>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-10">
          <p className="text-sm text-gray-500">
            ¿Tienes dudas? Obtén una{' '}
            <a href="#formulario" className="font-semibold hover:underline" style={{ color: '#00D4FF' }}>
              auditoría gratuita
            </a>{' '}
            y te recomendamos el plan ideal para tu negocio.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
