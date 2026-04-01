import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import syntekLogo from "@/assets/syntek-logo.png";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo Funciona", href: "#proceso" },
  { label: "Industrias", href: "#industrias" },
  { label: "Planes", href: "#planes" },
  { label: "Nosotros", href: "#quienes-somos" },
];

const WHATSAPP = "https://wa.me/50498092116";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#07071a]/85 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={syntekLogo} alt="Syntek" className="w-[140px] h-auto" />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
          >
            <MessageCircle size={16} />
            +504 9809-2116
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/5 bg-[#07071a] px-4 pb-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-gray-400 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-3 bg-green-500 text-white px-5 py-3 rounded-lg text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={16} />
            +504 9809-2116
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
