import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  MessageSquare,
  Brain,
  CalendarCheck,
  BellRing,
  HeartHandshake,
  UserCheck,
} from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

const cards = [
  {
    icon: MessageSquare,
    title: 'Responde al instante',
    desc: 'Atiende mensajes de WhatsApp a cualquier hora, aunque estés dormido o de día libre.',
    color: 'from-blue-500 to-blue-700',
    glow: 'rgba(59,130,246,0.2)',
  },
  {
    icon: Brain,
    title: 'Conoce tu negocio',
    desc: 'Nova aprende tus servicios, precios y horarios y los explica exactamente como lo harías vos.',
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.2)',
  },
  {
    icon: CalendarCheck,
    title: 'Agenda citas solo',
    desc: 'Reserva citas directamente en tu calendario sin que tengas que hacer nada.',
    color: 'from-violet-500 to-purple-700',
    glow: 'rgba(139,92,246,0.2)',
  },
  {
    icon: BellRing,
    title: 'Te avisa cuando hay una venta',
    desc: 'Cuando un cliente está listo para comprar, Nova te notifica de inmediato en tu celular.',
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.2)',
  },
  {
    icon: HeartHandshake,
    title: 'Maneja quejas con calma',
    desc: 'Si un cliente llega molesto, Nova lo atiende con paciencia y te informa para que lo resuelvas.',
    color: 'from-orange-500 to-rose-600',
    glow: 'rgba(249,115,22,0.2)',
  },
  {
    icon: UserCheck,
    title: 'Atención humana siempre disponible',
    desc: 'Cuando el cliente quiere hablar con una persona, Nova te avisa al instante y tú tomas la conversación.',
    color: 'from-sky-500 to-indigo-600',
    glow: 'rgba(14,165,233,0.2)',
  },
]

export default function Servicios() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  }

  const item = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section id="servicios" className="py-24 bg-[#0a0a16] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-50" />

      {/* Glow orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-6">
            Conoce a Nova,{' '}
            <span className="gradient-text">tu asistente con IA</span>
          </h2>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection delay={0.1} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-400 text-lg leading-relaxed">
            Nova es el asistente con inteligencia artificial conversacional de Syntek AI. No es un bot de
            respuestas fijas — entiende lo que tu cliente escribe y responde de forma natural, como una
            persona real, las{' '}
            <span className="text-white font-semibold">24 horas del día, los 7 días de la semana</span>.
          </p>
          <div className="section-divider mx-auto mt-8" />
        </AnimatedSection>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={item}
                className="group relative rounded-2xl bg-[#0d0d1a] border border-white/5 p-7 flex flex-col gap-4 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
                style={{
                  ['--glow' as string]: card.glow,
                }}
              >
                {/* Hover glow background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${card.glow}, transparent 70%)` }}
                />

                <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>

                <div className="relative">
                  <h3 className="font-heading font-bold text-white text-base mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
