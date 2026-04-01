import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Hero = () => {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#05050f]">
      {/* Particles */}
      {engineReady && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            fullScreen: { enable: false },
            particles: {
              color: { value: "#00D4FF" },
              links: {
                color: "#00D4FF",
                distance: 150,
                enable: true,
                opacity: 0.15,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.7,
                outModes: { default: "bounce" },
              },
              number: { value: 70, density: { enable: true, area: 900 } },
              opacity: { value: { min: 0.1, max: 0.4 } },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2.5 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className="w-[700px] h-[500px] rounded-full blur-[140px] opacity-20"
          style={{ background: "radial-gradient(ellipse, #00D4FF, transparent)" }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              border: "1px solid rgba(0,212,255,0.35)",
              color: "#00D4FF",
              background: "rgba(0,212,255,0.08)",
            }}
          >
            Automatización e IA para Honduras 🇭🇳
          </motion.span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            Ten tu asistente con IA trabajando{" "}
            <span className="gradient-text">24/7, atendiendo clientes y cerrando ventas</span>
            , por solo{" "}
            <span className="text-white">L 96 al día</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Nunca más pierdas un cliente por no responder a tiempo.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#formulario"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold btn-electric btn-glow"
            >
              Quiero mi Auditoría Gratuita
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
