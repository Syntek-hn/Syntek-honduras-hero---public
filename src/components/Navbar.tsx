import { useState } from "react";
import { useT, useLocale } from "@/i18n/provider";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

const industryKeys = ["clinica", "restaurante", "inmobiliaria", "ecommerce", "educacion", "legal", "automotriz", "belleza", "seguros", "servicios"];

export default function Navbar() {
  const t = useT();
  const { locale, setLocale } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <span className="text-lg font-bold text-slate-900">Syntek <span className="text-blue-600">AI</span></span>
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
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button onClick={() => setLocale(locale === "es" ? "en" : "es")} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm text-slate-500 hover:text-slate-900 transition-colors">
            <Globe size={15} />
            <span className="text-xs font-medium">{locale === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}</span>
          </button>
          <a href="https://app.syntekhn.com/login" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{t("nav.login")}</a>
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
          <button onClick={() => setLocale(locale === "es" ? "en" : "es")} className="text-xs font-medium text-slate-500">{locale === "es" ? "🇪🇸 Español" : "🇺🇸 English"}</button>
          <a href="#precios" className="block text-center bg-blue-600 text-white text-sm font-medium py-2.5 rounded-xl mt-2">{t("nav.cta")}</a>
        </div>
      )}
    </nav>
  );
}
