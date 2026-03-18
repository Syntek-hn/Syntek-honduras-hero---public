import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Settings, Rocket, Zap } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Diagnóstico", desc: "Analizamos tus procesos y encontramos dónde la automatización genera mayor impacto." },
  { icon: Settings, num: "02", title: "Configuración", desc: "Diseñamos y construimos tus agentes de IA personalizados para tu negocio." },
  { icon: Rocket, num: "03", title: "Implementación", desc: "Conectamos todo a tus herramientas actuales: WhatsApp, CRM, calendario, etc." },
  { icon: Zap, num: "04", title: "En vivo 24/7", desc: "Tu sistema queda funcionando solo. Nosotros monitoreamos y optimizamos." },
];

const Process = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proceso" ref={ref} className="py-24 border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Cómo <span className="text-gradient">funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            De la idea a producción en 48 horas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-border" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-5 relative z-10">
                <s.icon size={22} className="text-primary-foreground" />
              </div>
              <div className="text-xs text-primary font-semibold mb-2">{s.num}</div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
