import { useState, useRef, useEffect } from "react";
import { useT, useLocale } from "@/i18n/provider";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

const industryKeys = ["clinica", "restaurante", "inmobiliaria", "ecommerce", "educacion", "legal", "automotriz", "belleza", "seguros", "servicios"];

export default function Navbar() {
  const t = useT();
  const { locale, setLocale } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-xl font-extrabold tracking-tight text-slate-900">Syntek <span className="text-blue-600">AI</span></span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <div className="relative" onMouseEnter={() => setIndustriesOpen(true)} onMouseLeave={() => setIndustriesOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              {t("nav.industries")} <ChevronDown size={14} />
            </button>
            {industriesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 grid grid-cols-2 gap-1 w-[480px]">
                  {industryKeys.map((key) => (
                    <a key={key} href="#industrias" onClick={() => setIndustriesOpen(false)} className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                      <span className="text-sm font-medium text-slate-900">{t(`industries.${key}.name`)}</span>
                      <span className="text-xs text-slate-500 mt-0.5 line-clamp-1">{t(`industries.${key}.desc`)}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="#proceso" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{t("nav.product")}</a>
          <a href="#precios" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{t("nav.pricing")}</a>
          <a href="#porque" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{t("nav.resources")}</a>
          <Link to="/sobre-nosotros" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{t("nav.about")}</Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <div className="relative" ref={langRef}>
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm text-slate-500 hover:text-slate-900 transition-colors">
              <Globe size={15} />
              <span className="text-xs font-medium">{locale === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}</span>
              <ChevronDown size={12} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-50">
                <button onClick={() => { setLocale("es"); setLangOpen(false); }}
                  className={`flex items-center gap-2.5 w-full px-3.5 py-2.5 text-sm transition-colors ${locale === "es" ? "text-blue-600 bg-blue-50" : "text-slate-700 hover:bg-slate-50"}`}>
                  <span className="text-base">🇪🇸</span> Español
                </button>
                <button onClick={() => { setLocale("en"); setLangOpen(false); }}
                  className={`flex items-center gap-2.5 w-full px-3.5 py-2.5 text-sm transition-colors ${locale === "en" ? "text-blue-600 bg-blue-50" : "text-slate-700 hover:bg-slate-50"}`}>
                  <span className="text-base">🇺🇸</span> English
                </button>
              </div>
            )}
          </div>
          {/* TODO: Habilitar cuando la app esté lista para usuarios reales */}
          {/* <a href="https://syntek-platform.vercel.app/login" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{t("nav.login")}</a>
          <a href="https://syntek-platform.vercel.app/register" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md">{t("nav.register")}</a> */}
          <a href="#precios" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md">{t("nav.cta")}</a>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3">
          <a href="#industrias" className="block text-sm font-medium text-slate-700 py-2">{t("nav.industries")}</a>
          <a href="#proceso" className="block text-sm font-medium text-slate-700 py-2">{t("nav.product")}</a>
          <a href="#precios" className="block text-sm font-medium text-slate-700 py-2">{t("nav.pricing")}</a>
          <Link to="/sobre-nosotros" className="block text-sm font-medium text-slate-700 py-2">{t("nav.about")}</Link>
          <button onClick={() => setLocale(locale === "es" ? "en" : "es")} className="text-xs font-medium text-slate-500">{locale === "es" ? "🇪🇸 Español" : "🇺🇸 English"}</button>
          {/* TODO: Habilitar login/register en mobile cuando esté lista */}
          <a href="#precios" className="block text-center bg-blue-600 text-white text-sm font-medium py-2.5 rounded-xl mt-2">{t("nav.cta")}</a>
        </div>
      )}
    </nav>
  );
}
