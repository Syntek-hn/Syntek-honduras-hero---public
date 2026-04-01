import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP = "https://wa.me/50498092116";

const Footer = () => (
  <footer className="border-t border-white/5 bg-[#05050f] py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="font-heading font-bold text-xl tracking-tight text-white">
            <span style={{ color: "#00D4FF" }}>Syn</span>tek
          </span>
        </a>

        {/* Nav */}
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
            className="inline-flex items-center gap-2 font-medium transition-colors"
            style={{ color: '#00D4FF' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#66e5ff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#00D4FF')}
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
        © 2026 Syntek Honduras. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
