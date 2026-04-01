import { Check, X } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

const rows = [
  { label: 'Costo mensual',   nova: 'L 2,875',      empleado: 'L 13,000–17,000' },
  { label: 'Horario',         nova: '24 horas',     empleado: '8 horas' },
  { label: 'Fines de semana', nova: 'Siempre',      empleado: 'No trabaja' },
  { label: 'Varios clientes', nova: 'Sí',           empleado: 'Uno a la vez' },
  { label: 'Se enferma',      nova: 'Nunca',        empleado: 'A veces' },
  { label: 'Agenda citas',    nova: 'Sí',           empleado: 'No' },
  { label: 'Avisa ventas',    nova: 'Sí',           empleado: 'Depende' },
]

const novaPositive = ['L 2,875', '24 horas', 'Siempre', 'Sí', 'Nunca']
const empleadoNegative = ['L 13,000–17,000', '8 horas', 'No trabaja', 'Uno a la vez', 'A veces', 'No', 'Depende']

export default function NovaVsEmpleado() {
  return (
    <section id="comparacion" className="py-24 bg-[#05050f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" />
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-30" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.3)', color: '#00D4FF' }}>
            Comparativa
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            Nova vs{' '}
            <span className="gradient-text">contratar un empleado</span>
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="rounded-3xl border border-white/5 overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-3 border-b border-white/8" style={{ background: 'rgba(0,212,255,0.04)' }}>
            <div className="p-4 text-sm font-semibold text-gray-500" />
            <div className="p-4 text-sm font-bold text-center border-l border-white/5"
              style={{ color: '#00D4FF', background: 'rgba(0,212,255,0.06)' }}>
              Nova Esencial
            </div>
            <div className="p-4 text-sm font-semibold text-gray-500 text-center border-l border-white/5">
              Empleado
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 border-b border-white/3 last:border-0 hover:bg-white/[0.015] transition-colors ${
                i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.012]'
              }`}
            >
              <div className="p-4 text-sm text-gray-400 font-medium">{row.label}</div>

              {/* Nova cell */}
              <div className="p-4 text-sm font-semibold text-center border-l border-white/5 flex items-center justify-center gap-1.5"
                style={{ color: '#00D4FF', background: 'rgba(0,212,255,0.04)' }}>
                {novaPositive.includes(row.nova) && (
                  <Check size={14} className="flex-shrink-0" style={{ color: '#00D4FF' }} />
                )}
                {row.nova}
              </div>

              {/* Empleado cell */}
              <div className="p-4 text-sm text-center border-l border-white/5 flex items-center justify-center gap-1.5 text-gray-500">
                {empleadoNegative.includes(row.empleado) && (
                  <X size={14} className="text-red-500 flex-shrink-0" />
                )}
                {row.empleado}
              </div>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <a
            href="#formulario"
            className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-black font-bold shadow-xl hover:scale-105 transition-transform"
            style={{ background: 'linear-gradient(135deg, #00D4FF, #0099cc)' }}
          >
            Quiero empezar ahora
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
