import { Clock, Rocket, Star } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'
import AnimatedCounter from './ui/AnimatedCounter'

const datos = [
  {
    icon: Clock,
    value: '24/7',
    isText: true,
    label: 'Horas de atención',
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.25)',
  },
  {
    icon: Rocket,
    value: 3,
    suffix: ' sem',
    isText: false,
    label: 'Tiempo de implementación',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.25)',
  },
  {
    icon: Star,
    value: 100,
    suffix: '%',
    isText: false,
    label: 'Dedicación a tu negocio',
    color: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16,185,129,0.25)',
  },
]

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-24 bg-[#07070f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40" />

      {/* Glow orb */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text column */}
          <div>
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-5">
                Quiénes Somos
              </span>
              <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-8 leading-tight">
                Somos{' '}
                <span className="gradient-text">Syntek AI</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1}>
              <div className="flex flex-col gap-5 text-gray-400 text-base leading-relaxed">
                <p>
                  Somos una empresa hondureña especializada en automatización inteligente para negocios.
                  Creemos que cada negocio, sin importar su tamaño, merece tener{' '}
                  <span className="text-white font-medium">tecnología de punta trabajando para él las 24 horas del día</span>.
                </p>
                <p>
                  Estamos basados en Honduras y trabajamos con negocios latinoamericanos que quieren
                  crecer sin contratar más personal.
                </p>
                <p>
                  Nova no es un producto genérico —{' '}
                  <span className="text-white font-medium">cada cliente recibe su propio sistema</span>{' '}
                  configurado con la información real de su negocio, para que responda exactamente como él lo haría.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2} className="mt-8">
              <a
                href="#formulario"
                className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform"
              >
                Conoce más sobre Syntek
              </a>
            </AnimatedSection>
          </div>

          {/* Stats column */}
          <AnimatedSection direction="right" className="flex flex-col gap-5">
            {datos.map((dato) => {
              const Icon = dato.icon
              return (
                <div
                  key={dato.label}
                  className="group relative rounded-2xl bg-[#0d0d1a] border border-white/5 p-6 flex items-center gap-5 hover:border-blue-500/25 transition-all duration-300 overflow-hidden"
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at 20% 50%, ${dato.glow}, transparent 70%)` }}
                  />

                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${dato.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>

                  <div className="relative">
                    <div className="font-heading font-bold text-3xl text-white leading-none mb-1">
                      {dato.isText ? (
                        <span>{dato.value}</span>
                      ) : (
                        <AnimatedCounter to={dato.value as number} suffix={dato.suffix} />
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{dato.label}</p>
                  </div>
                </div>
              )
            })}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
