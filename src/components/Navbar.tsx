import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Contacto", href: "#formulario" },
];

const WHATSAPP = "https://wa.me/50498092116";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05050f]/90 backdrop-blur-md border-b border-[#00D4FF]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="font-heading font-bold text-xl tracking-tight text-white">
            <span style={{ color: "#00D4FF" }}>Syn</span>tek
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold btn-electric"
        >
          <MessageCircle size={15} />
          +504 9809-2116
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#05050f]/95 border-b border-[#00D4FF]/10 px-4 pb-4 overflow-hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-gray-400 hover:text-white transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold btn-electric"
              onClick={() => setOpen(false)}
            >
              <MessageCircle size={15} />
              WhatsApp +504 9809-2116
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
