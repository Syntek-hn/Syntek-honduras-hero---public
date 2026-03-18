import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Calendar, FileText, Mail, Phone, UserCheck } from "lucide-react";

const services = [
  { icon: MessageSquare, title: "Chatbot WhatsApp", desc: "Responde clientes 24/7 por WhatsApp con IA conversacional. Califica, agenda y vende automáticamente." },
  { icon: Calendar, title: "Asistente de Agenda", desc: "Automatiza citas, recordatorios y seguimientos. Sincroniza con Google Calendar sin intervención humana." },
  { icon: FileText, title: "Agente de Contenido", desc: "Genera posts, captions y contenido para redes sociales adaptado a tu marca y audiencia." },
  { icon: Mail, title: "Boletín Diario", desc: "Resumen inteligente diario de noticias, métricas o actualizaciones relevantes para tu industria." },
  { icon: Phone, title: "Llamadas IA", desc: "Agente de voz que hace y recibe llamadas, califica leads y agenda reuniones en tu nombre." },
  { icon: UserCheck, title: "Calificación de Leads", desc: "Clasifica prospectos automáticamente por interés, presupuesto y urgencia. Prioriza los que más valen." },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-gradient">servicios</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Soluciones de automatización listas para implementar en tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/30 transition-all duration-300 hover:glow card-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
