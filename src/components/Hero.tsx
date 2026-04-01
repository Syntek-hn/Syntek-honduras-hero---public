import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#07071a]">
    <ParticleBackground />

    {/* Glow central */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[700px] h-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
    </div>

    {/* Grid overlay */}
    <div
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 text-blue-400 text-sm font-medium bg-blue-500/10">
          Automatización e IA para Honduras 🇭🇳
        </span>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white max-w-4xl mx-auto">
          Tené tu asistente con IA trabajando{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            24/7, atendiendo clientes y cerrando ventas
          </span>
          , por solo{" "}
          <span className="text-white">L 96 al día</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium">
          Nunca más pierdas un cliente por no responder a tiempo.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
          >
            Quiero mi Auditoría Gratuita <ArrowRight size={18} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
