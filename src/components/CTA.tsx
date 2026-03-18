import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Mail } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            ¿Listo para <span className="text-gradient">automatizar</span> tu negocio?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Hablemos en menos de 5 minutos. Sin compromiso, sin costo inicial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/50499999999?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Syntek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-opacity hover:opacity-90"
              style={{ background: "#25D366", color: "#fff" }}
            >
              <MessageCircle size={20} /> Escribir por WhatsApp
            </a>
            <a
              href="mailto:hola@syntek.hn"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-xl font-semibold text-base hover:bg-secondary transition-colors"
            >
              <Mail size={20} /> Enviar correo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
