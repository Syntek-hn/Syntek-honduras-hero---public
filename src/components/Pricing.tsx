import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$149",
    period: "/mes",
    desc: "Ideal para negocios que inician con automatización.",
    features: [
      "1 agente de IA (WhatsApp o Agenda)",
      "500 conversaciones/mes",
      "Configuración en 48h",
      "Soporte por correo",
      "1 integración",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "$249",
    period: "/mes",
    desc: "Para negocios que necesitan más poder y alcance.",
    features: [
      "3 agentes de IA",
      "2,000 conversaciones/mes",
      "Llamadas IA incluidas",
      "Soporte prioritario WhatsApp",
      "3 integraciones",
      "Dashboard de métricas",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$399",
    period: "/mes",
    desc: "Automatización completa para empresas en crecimiento.",
    features: [
      "Agentes ilimitados",
      "Conversaciones ilimitadas",
      "Llamadas IA + contenido IA",
      "Soporte dedicado 24/7",
      "Integraciones ilimitadas",
      "Consultoría mensual incluida",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="precios" ref={ref} className="py-24 border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Planes y <span className="text-gradient">precios</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Inversión clara, sin sorpresas. Cancela cuando quieras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative bg-card border rounded-2xl p-8 card-shadow ${
                plan.highlighted ? "border-primary/40 glow" : "border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Más popular
                </div>
              )}
              <h3 className="font-heading text-xl font-semibold mb-1 text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-5">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold font-heading text-gradient">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-secondary-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`block text-center py-3 rounded-xl font-medium text-sm transition-all ${
                  plan.highlighted
                    ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                Empezar ahora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
