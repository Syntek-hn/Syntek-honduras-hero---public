import { MessageCircle, Mail } from "lucide-react";
import syntekLogo from "@/assets/syntek-logo.png";

const WHATSAPP = "https://wa.me/50498092116";

const Footer = () => (
  <footer className="border-t border-white/5 bg-[#07071a] py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={syntekLogo} alt="Syntek AI" className="h-8 w-auto" />
        </a>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
          <a href="#proceso" className="hover:text-white transition-colors">Cómo Funciona</a>
          <a href="#industrias" className="hover:text-white transition-colors">Industrias</a>
          <a href="#planes" className="hover:text-white transition-colors">Planes</a>
          <a href="#quienes-somos" className="hover:text-white transition-colors">Nosotros</a>
        </nav>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
          >
            <MessageCircle size={16} />
            +504 9809-2116
          </a>
          <a
            href="mailto:info@syntekhn.com"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={16} />
            info@syntekhn.com
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-600">
        © 2026 Syntek AI. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
