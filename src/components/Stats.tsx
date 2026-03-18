import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "24/7", label: "Disponibilidad", desc: "Tus agentes nunca descansan" },
  { value: "78%", label: "Margen operativo", desc: "Reducción de costos reales" },
  { value: "$600", label: "Ahorro vs empleado", desc: "Por posición automatizada/mes" },
  { value: "48h", label: "Implementación", desc: "De cero a producción" },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold font-heading text-gradient mb-2">{s.value}</div>
              <div className="text-foreground font-medium mb-1">{s.label}</div>
              <div className="text-sm text-muted-foreground">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
