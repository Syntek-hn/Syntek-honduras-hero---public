import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const problems = [
  "Respondés mensajes a las 11pm desde tu cama",
  "Perdés clientes porque no contestás a tiempo",
  "Pagás salarios por tareas que una IA hace en segundos",
  "No tenés tiempo para pensar en crecer",
];

const solutions = [
  { metric: "0 seg", label: "Tiempo de respuesta" },
  { metric: "100%", label: "Mensajes atendidos" },
  { metric: "-70%", label: "Costos operativos" },
  { metric: "∞", label: "Escalabilidad" },
];

const ProblemSolution = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            El problema que <span className="text-gradient">resolvemos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Si te identificás con alguno de estos, necesitás automatizar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8 card-shadow"
          >
            <h3 className="font-heading text-xl font-semibold mb-6 text-destructive flex items-center gap-2">
              <X size={20} /> Sin automatización
            </h3>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex gap-3 text-muted-foreground">
                  <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-destructive" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card border border-primary/20 rounded-2xl p-8 card-shadow glow"
          >
            <h3 className="font-heading text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <Check size={20} /> Con Syntek
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {solutions.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold font-heading text-gradient mb-1">{s.metric}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
