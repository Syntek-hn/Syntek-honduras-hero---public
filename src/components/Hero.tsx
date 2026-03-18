import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Blue glow behind title */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[700px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />
    </div>

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium bg-primary/5">
          Automatización e IA para Honduras 🇭🇳
        </span>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
          Tu negocio
          <br />
          <span className="text-gradient">trabajando solo.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Automatización e Inteligencia Artificial para empresas en Honduras y Centroamérica.
          Reduce costos, elimina tareas repetitivas y escala sin contratar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity glow inline-flex items-center justify-center gap-2"
          >
            Ver demo <ArrowRight size={18} />
          </a>
          <a
            href="#servicios"
            className="border border-border text-foreground px-8 py-4 rounded-xl text-base font-semibold hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2"
          >
            Explorar servicios <ChevronDown size={18} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
