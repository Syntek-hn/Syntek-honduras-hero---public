import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Wrench, Heart, Home, UtensilsCrossed, Scissors, Car, Truck, GraduationCap } from "lucide-react";

const industries = [
  { icon: Building2, name: "Constructoras" },
  { icon: Wrench, name: "Ferreterías" },
  { icon: Heart, name: "Clínicas" },
  { icon: Home, name: "Inmobiliarias" },
  { icon: UtensilsCrossed, name: "Restaurantes" },
  { icon: Scissors, name: "Salones" },
  { icon: Car, name: "Talleres" },
  { icon: Truck, name: "Distribuidoras" },
  { icon: GraduationCap, name: "Institutos" },
];

const Industries = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industrias" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Industrias que <span className="text-gradient">automatizamos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Soluciones adaptadas para los negocios más comunes en Honduras.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 card-shadow"
            >
              <ind.icon size={28} className="mx-auto mb-3 text-primary" />
              <span className="text-sm font-medium text-foreground">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
