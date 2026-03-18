import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, MessageSquare } from "lucide-react";

const employeeCosts = [
  { label: "Salario", value: "$600/mes" },
  { label: "IHSS + RAP", value: "$100/mes" },
  { label: "Decimocuarto", value: "$600 (junio)" },
{ label: "Aguinaldo", value: "$600 (diciembre)" },
{ label: "Vacaciones pagas", value: "$200 al año" },
  
];

const syntekBenefits = [
  "Disponible 365 días sin descanso",
  "Desde $149/mes = $1,788 al año",
  "Ahorras mas de $9,000 al año",
];

const plans = [
  {
    name: "Starter",
    price: "$149",
    period: "/mes",
    desc: "Ideal para negocios que inician con automatización.",
    setup: "Instalación única: $400",
    features: [
      "1 asistente IA por WhatsApp o Telegram",
      "Hasta 1,000 mensajes al mes",
      "Atiende a tus clientes 24/7 sin que estés pendiente",
      "Guarda el nombre y teléfono de cada cliente automáticamente",
      "Listo y funcionando en 48 horas",
      "Soporte por correo incluido",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "$249",
    period: "/mes",
    desc: "Para negocios que necesitan más poder y alcance.",
    setup: "Instalación única: $600",
    features: [
      "2 asistentes IA por WhatsApp y Telegram",
      "Hasta 3,000 mensajes al mes",
      "Detecta clientes serios y te avisa automáticamente",
      "Agenda citas y envía recordatorios solos",
      "Resumen diario de noticias y precios de tu sector",
      "Soporte directo por WhatsApp",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$399",
    period: "/mes",
    desc: "Automatización completa para empresas en crecimiento.",
    setup: "Instalación única: $800",
    features: [
      "3 asistentes IA configurados",
      "Hasta 10,000 mensajes al mes",
      "Todo lo del plan Business",
      "Agente de contenido y guiones incluido",
      "Reportes mensuales de actividad",
      "Atención dedicada 24/7",
      "Reunión mensual de seguimiento incluida",
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
            ¿Por qué <span className="text-gradient">Syntek</span> y no un empleado?
          </h2>
        </motion.div>

        {/* Comparison section */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-card border border-destructive/30 rounded-2xl p-8 card-shadow"
          >
            <h3 className="font-heading text-lg font-semibold mb-5 text-foreground">
              Un empleado tradicional cuesta al año:
            </h3>
            <ul className="space-y-3 mb-6">
              {employeeCosts.map((item) => (
                <li key={item.label} className="flex items-center justify-between text-sm text-secondary-foreground">
                  <span className="flex items-center gap-2">
                    <X size={14} className="text-destructive shrink-0" />
                    {item.label}
                  </span>
                  <span className="font-medium text-foreground">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-border pt-4">
              <p className="text-lg font-bold text-destructive font-heading">
                Total real: más de $9,600 al año
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-card border border-primary/30 rounded-2xl p-8 card-shadow"
          >
            <h3 className="font-heading text-lg font-semibold mb-5 text-foreground">
              Syntek trabaja 24/7:
            </h3>
            <ul className="space-y-3 mb-6">
              {syntekBenefits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <Check size={14} className="text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="inline-block bg-primary/10 border border-primary/20 text-primary font-heading font-bold text-lg md:text-xl px-6 py-3 rounded-xl">
            Ahorras más de $9,600 al año.
          </p>
        </motion.div>

        {/* Pricing header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Planes y <span className="text-gradient">precios</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Inversión clara, sin sorpresas. Cancela cuando quieras.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
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
              <div className="mb-2">
                <span className="text-4xl font-bold font-heading text-gradient">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">{plan.setup}</p>
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

        {/* Note below plans */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center mt-10 max-w-2xl mx-auto"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <MessageSquare size={16} className="text-primary shrink-0" />
            ¿Necesitas llamadas IA automáticas? Cotización personalizada según tu volumen.{" "}
            <a
              href="https://wa.me/50499999999?text=Hola%2C%20quiero%20cotizar%20llamadas%20IA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Escríbenos por WhatsApp.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
