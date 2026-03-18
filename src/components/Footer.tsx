import syntekLogo from "@/assets/syntek-logo.png";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={syntekLogo} alt="Syntek" className="h-8 w-auto" />
        </div>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
          <a href="#proceso" className="hover:text-foreground transition-colors">Proceso</a>
          <a href="#industrias" className="hover:text-foreground transition-colors">Industrias</a>
          <a href="#precios" className="hover:text-foreground transition-colors">Precios</a>
        </nav>
        <p className="text-sm text-muted-foreground">
          © 2026 Syntek Honduras. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
