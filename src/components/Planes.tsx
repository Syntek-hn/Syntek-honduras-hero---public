import { motion } from 'framer-motion'
import { Check, Star, Zap, Building2, Rocket } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

const planes = [
  {
    name: 'Nova Esencial',
    icon: Zap,
    instalacion: 'L 6,900',
    mensualidad: 'L 2,875',
    color: 'from-slate-500 to-slate-700',
    borderColor: 'border-slate-700 hover:border-slate-500',
    badgeColor: 'bg-slate-800 text-slate-300',
    primerMesGratis: true,
    features: [
      'Asistente IA 24/7 para WhatsApp',
      'Respuestas automáticas inteligentes',
      'Atención a consultas frecuentes',
      'Panel de seguimiento básico',
      'Soporte técnico incluido',
      'Primer mes de mensualidad gratis',
    ],
    ideal: 'Emprendedores y negocios pequeños',
  },
  {
    name: 'Nova Profesional',
    icon: Rocket,
    instalacion: 'L 13,800',
    mensualidad: 'L 5,175',
    color: 'from-blue-600 to-cyan-500',
    borderColor: 'border-blue-500/50 hover:border-blue-400',
    badgeColor: 'bg-blue-900/50 text-blue-300',
    highlighted: true,
    primerMesGratis: true,
    features: [
      'Todo lo del plan Esencial',
      'Integración multicanal (WhatsApp + web)',
      'Calificación automática de prospectos',
      'Agendamiento de citas con IA',
      'Reportes avanzados de conversiones',
      'Primer mes de mensualidad gratis',
    ],
    ideal: 'Negocios en crecimiento',
  },
  {
    name: 'Nova Empresarial',
    icon: Building2,
    instalacion: 'L 28,750',
    mensualidad: 'L 9,200',
    color: 'from-violet-600 to-purple-700',
    borderColor: 'border-violet-700/50 hover:border-violet-500',
    badgeColor: 'bg-violet-900/50 text-violet-300',
    primerMesGratis: false,
    features: [
      'Todo lo del plan Profesional',
      'Múltiples agentes IA personalizados',
      'Integración con CRM y sistemas internos',
      'Automatización de ventas completa',
      'Análisis predictivo de clientes',
      'Onboarding prioritario incluido',
    ],
    ideal: 'Empresas y corporaciones',
  },
]

export default function Planes() {
  return (
    <section id="planes" className="py-24 bg-[#0a0a16] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-50" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4">
            Planes y Precios
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            Elige el plan ideal{' '}
            <span className="gradient-text">para tu negocio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Todos los precios incluyen ISV. Contrato de 3 meses, luego cancelas cuando quieras con 30 días de aviso.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </AnimatedSection>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {planes.map((plan, i) => {
            const Icon = plan.icon
            return (
              <AnimatedSection key={plan.name} delay={i * 0.12}>
                <div
                  className={`relative h-full rounded-3xl border-2 ${plan.borderColor} bg-[#0d0d1a] p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                    plan.highlighted
                      ? 'shadow-[0_0_40px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/20'
                      : 'shadow-lg'
                  }`}
                >
                  {/* Most popular badge */}
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-lg shadow-blue-500/30">
                        <Star size={12} fill="currentColor" />
                        Más Popular
                      </span>
                    </div>
                  )}

                  {/* Icon & Name */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${plan.badgeColor}`}>
                        {plan.ideal}
                      </span>
                      <h3 className="font-heading font-bold text-lg text-white mt-0.5">
                        {plan.name}
                      </h3>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-b border-white/5">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-heading font-bold text-3xl text-white">
                        {plan.instalacion}
                      </span>
                      <span className="text-sm text-gray-500">instalación</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading font-semibold text-xl text-gray-300">
                        {plan.mensualidad}
                      </span>
                      <span className="text-sm text-gray-500">/mes</span>
                    </div>
                    {plan.primerMesGratis && (
                      <p className="text-xs text-green-400 font-semibold mt-2 flex items-center gap-1">
                        <Check size={12} />
                        Primer mes de mensualidad gratis
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-400">
                        <div className={`mt-0.5 w-4 h-4 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0`}>
                          <Check size={10} className="text-white" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#formulario"
                    className={`mt-8 inline-flex justify-center items-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      plan.highlighted
                        ? 'btn-glow bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:scale-105'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    Quiero este plan
                  </a>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Footer note */}
        <AnimatedSection delay={0.4} className="text-center mt-10">
          <p className="text-sm text-gray-500">
            ¿Tienes dudas? Obtén una{' '}
            <a href="#formulario" className="text-blue-400 font-semibold hover:underline">
              auditoría gratuita
            </a>{' '}
            y te recomendamos el plan ideal para tu negocio.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
