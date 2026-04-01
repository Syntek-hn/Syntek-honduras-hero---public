import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Settings, FlaskConical, Zap } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Diagnóstico",
    desc: "Analizamos tu negocio y encontramos dónde Nova genera más impacto.",
  },
  {
    icon: Settings,
    num: "02",
    title: "Configuración",
    desc: "Entrenamos a Nova con la información real de tu negocio.",
  },
  {
    icon: FlaskConical,
    num: "03",
    title: "Pruebas",
    desc: "Probamos con vos antes de lanzar para asegurar que todo funcione perfecto.",
  },
  {
    icon: Zap,
    num: "04",
    title: "En vivo 24/7",
    desc: "Tu negocio atendiendo clientes mientras dormís.",
  },
];

const Process = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proceso" ref={ref} className="py-24 bg-[#05050f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" />
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.3)', color: '#00D4FF' }}>
            Proceso
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-white">
            De la idea a producción{" "}
            <span className="gradient-text">en 48 horas</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px"
            style={{ background: 'linear-gradient(90deg, #00D4FF22, #00D4FF44, #00D4FF22)' }} />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div
                className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-5 relative z-10"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #0099cc)' }}
              >
                <s.icon size={22} className="text-black" />
              </div>
              <div className="text-xs font-semibold mb-2" style={{ color: '#00D4FF' }}>{s.num}</div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-white">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
