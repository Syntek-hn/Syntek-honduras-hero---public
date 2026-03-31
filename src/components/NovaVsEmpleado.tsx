import { Check, X, TrendingDown, TrendingUp } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'
import AnimatedCounter from './ui/AnimatedCounter'

const comparacion = [
  { label: 'Horario de atención', nova: '24/7 · 365 días', empleado: 'Horario de oficina' },
  { label: 'Fines de semana', nova: 'Siempre disponible', empleado: 'No disponible' },
  { label: 'Feriados', nova: 'Nunca descansa', empleado: 'Días libres pagados' },
  { label: 'Tiempo de respuesta', nova: 'Menos de 1 segundo', empleado: '5 a 30 minutos' },
  { label: 'Vacaciones', nova: 'No aplica', empleado: '14 días/año pagados' },
  { label: 'Capacitación', nova: 'Incluida y automática', empleado: 'Tiempo y costo extra' },
  { label: 'Volumen simultáneo', nova: 'Ilimitado', empleado: '1 cliente a la vez' },
]

export default function NovaVsEmpleado() {
  return (
    <section id="comparacion" className="py-24 bg-[#07070f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium mb-4">
            Comparativa de costos
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            Nova vs.{' '}
            <span className="gradient-text">Empleado Tradicional</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un empleado de ventas en Honduras cuesta entre L 13,000 y L 17,000 al mes — y trabaja 8 horas al día.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </AnimatedSection>

        {/* Cost comparison counters */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <AnimatedSection
            direction="left"
            className="relative rounded-3xl bg-red-950/20 border-2 border-red-800/40 p-8 text-center overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <TrendingUp size={20} className="text-red-500" />
            </div>
            <p className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-2">
              Empleado Tradicional
            </p>
            <div className="font-heading font-bold text-5xl text-red-400 mb-1">
              L <AnimatedCounter to={15000} separator="," />
            </div>
            <p className="text-gray-500 text-sm">promedio al mes</p>
            <ul className="mt-6 text-left flex flex-col gap-2">
              {['Solo 8 horas al día', 'Vacaciones y feriados', 'IHSS, RAP y beneficios', 'Capacitación continua', 'Riesgo de rotación'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                  <X size={16} className="text-red-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection
            direction="right"
            className="relative rounded-3xl bg-blue-950/20 border-2 border-blue-500/30 p-8 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 pointer-events-none" />
            <div className="absolute top-4 right-4">
              <TrendingDown size={20} className="text-blue-400" />
            </div>
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
              Nova Esencial
            </p>
            <div className="font-heading font-bold text-5xl text-blue-400 mb-1">
              L <AnimatedCounter to={2875} separator="," />
            </div>
            <p className="text-gray-500 text-sm">al mes (más instalación)</p>
            <ul className="mt-6 text-left flex flex-col gap-2">
              {['24 horas · 7 días · 365 días', 'Sin vacaciones ni feriados', 'Sin prestaciones ni cargas sociales', 'Aprende y mejora solo', 'Atención ilimitada simultánea'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check size={16} className="text-blue-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>

        {/* Feature comparison table */}
        <AnimatedSection className="rounded-3xl border border-white/5 overflow-hidden">
          <div className="grid grid-cols-3 bg-white/3 border-b border-white/5">
            <div className="p-4 text-sm font-semibold text-gray-500">Característica</div>
            <div className="p-4 text-sm font-bold text-blue-400 text-center border-l border-white/5 bg-blue-500/5">
              Nova IA
            </div>
            <div className="p-4 text-sm font-semibold text-gray-500 text-center border-l border-white/5">
              Empleado
            </div>
          </div>

          {comparacion.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 border-b border-white/3 last:border-0 hover:bg-white/2 transition-colors ${
                i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.015]'
              }`}
            >
              <div className="p-4 text-sm text-gray-400 font-medium">{row.label}</div>
              <div className="p-4 text-sm text-blue-400 font-semibold text-center border-l border-white/5 bg-blue-500/5">
                {row.nova}
              </div>
              <div className="p-4 text-sm text-gray-500 text-center border-l border-white/5">
                {row.empleado}
              </div>
            </div>
          ))}
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Con Nova ahorras hasta{' '}
            <span className="font-bold text-blue-400">
              L <AnimatedCounter to={14125} separator="," /> al mes
            </span>{' '}
            en comparación con un empleado
          </p>
          <a
            href="#formulario"
            className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-xl hover:scale-105 transition-transform"
          >
            Quiero empezar ahora
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
