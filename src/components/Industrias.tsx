import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Scissors,
  Stethoscope,
  UtensilsCrossed,
  Hotel,
  Home,
  HardHat,
  Lightbulb,
} from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

const industrias = [
  {
    icon: Scissors,
    name: 'Barberías',
    desc: 'Agenda citas automáticamente y confirma sin llamadas perdidas',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Stethoscope,
    name: 'Clínicas',
    desc: 'Gestiona consultas, recordatorios y atención a pacientes 24/7',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: UtensilsCrossed,
    name: 'Restaurantes',
    desc: 'Toma pedidos, reservaciones y responde menús al instante',
    color: 'from-orange-500 to-amber-600',
  },
  {
    icon: Hotel,
    name: 'Hoteles',
    desc: 'Reservas, tarifas y preguntas frecuentes atendidas sin espera',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Home,
    name: 'Bienes Raíces',
    desc: 'Califica prospectos y agenda visitas mientras duermes',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: HardHat,
    name: 'Constructoras',
    desc: 'Atiende consultas de proyectos y cotizaciones automáticamente',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Lightbulb,
    name: 'Emprendedores',
    desc: 'Escala tu negocio con IA sin contratar personal adicional',
    color: 'from-cyan-500 to-blue-500',
  },
]

export default function Industrias() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  }

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section id="industrias" className="py-24 bg-[#0a0a16] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
            Industrias
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            Nova se adapta a{' '}
            <span className="gradient-text">cualquier negocio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Configuramos a Nova según tu industria, tono de marca y tipo de clientes.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </AnimatedSection>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {industrias.map((ind) => {
            const Icon = ind.icon
            return (
              <motion.div
                key={ind.name}
                variants={item}
                className="group rounded-2xl bg-[#0d0d1a] border border-white/5 p-6 flex flex-col items-center text-center gap-4 hover:border-blue-500/30 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-default"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ind.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{ind.desc}</p>
                </div>
              </motion.div>
            )
          })}

          <motion.div
            variants={item}
            className="rounded-2xl border-2 border-dashed border-blue-500/20 p-6 flex flex-col items-center text-center gap-3 hover:border-blue-500/50 transition-colors cursor-default"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-400">?</span>
            </div>
            <div>
              <h3 className="font-heading font-bold text-blue-400 text-base mb-1">
                Tu negocio
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Nova se adapta a cualquier industria
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
