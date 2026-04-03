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
    desc: 'Atiende WhatsApp a cualquier hora aunque estés dormido.',
    color: 'from-[#00D4FF] to-[#0099cc]',
    glow: 'rgba(0,212,255,0.15)',
  },
  {
    icon: Brain,
    title: 'Conoce tu negocio',
    desc: 'Aprende tus servicios, precios y horarios y los explica exactamente como lo harías vos.',
    color: 'from-[#00D4FF] to-[#0066aa]',
    glow: 'rgba(0,212,255,0.12)',
  },
  {
    icon: CalendarCheck,
    title: 'Agenda citas solo',
    desc: 'Reserva directamente en tu calendario sin que tengas que hacer nada.',
    color: 'from-violet-500 to-purple-700',
    glow: 'rgba(139,92,246,0.15)',
  },
  {
    icon: BellRing,
    title: 'Te avisa cuando hay una venta',
    desc: 'Notifica al dueño de inmediato cuando un cliente está listo para comprar.',
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.15)',
  },
  {
    icon: HeartHandshake,
    title: 'Maneja quejas con calma',
    desc: 'Atiende y escala cuando hace falta, sin perder la paciencia.',
    color: 'from-orange-500 to-rose-600',
    glow: 'rgba(249,115,22,0.15)',
  },
  {
    icon: UserCheck,
    title: 'Atención humana disponible',
    desc: 'Cuando el cliente la pide, conecta con el dueño al instante.',
    color: 'from-[#00D4FF] to-indigo-600',
    glow: 'rgba(0,212,255,0.12)',
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
    <section id="servicios" className="py-24 bg-[#07070f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-5"
        style={{ background: '#00D4FF' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.3)', color: '#00D4FF' }}>
            Nuestros Servicios
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-6">
            Conocé a Nova,{' '}
            <span className="gradient-text">tu asistente con IA</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-400 text-lg leading-relaxed">
            Nova es el asistente con inteligencia artificial conversacional de Syntek AI.
            No es un bot de respuestas fijas — entiende lo que tu cliente escribe y responde de
            forma natural, como una persona real,{' '}
            <span className="text-white font-semibold">las 24 horas del día.</span>
          </p>
          <div className="section-divider mx-auto mt-8" />
        </AnimatedSection>

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
                className="group relative rounded-2xl bg-[#0d0d1a] border border-white/5 p-7 flex flex-col gap-4 hover:border-[#00D4FF]/25 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${card.glow}, transparent 70%)` }}
                />
                <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>
                <div className="relative">
                  <h3 className="font-heading font-bold text-white text-base mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
