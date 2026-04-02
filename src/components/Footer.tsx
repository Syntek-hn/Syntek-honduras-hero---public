import { useT } from "@/i18n/provider";
import { Link } from "react-router-dom";

const legalLinks: Record<string, string> = {
  privacy: "/privacidad",
  terms: "/terminos",
  cookies: "/cookies",
};

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">S</span>
              </div>
              <span className="text-lg font-bold text-white">Syntek <span className="text-blue-400">AI</span></span>
            </Link>
            <p className="text-sm leading-relaxed">{t("footer.desc")}</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("footer.product")}</h4>
            <ul className="space-y-2.5">
              {Object.entries({ features: "/#proceso", pricing: "/#precios", industries: "/#industrias", integrations: "/#" }).map(([key, href]) => (
                <li key={key}><a href={href} className="text-sm hover:text-white transition-colors">{t(`footer.links.${key}`)}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2.5">
              {["about", "blog", "careers", "contact"].map((key) => (
                <li key={key}><a href="#" className="text-sm hover:text-white transition-colors">{t(`footer.companyLinks.${key}`)}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal — links to actual pages */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-2.5">
              {(["privacy", "terms", "cookies"] as const).map((key) => (
                <li key={key}>
                  <Link to={legalLinks[key]} className="text-sm hover:text-white transition-colors">
                    {t(`footer.legalLinks.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-xs text-slate-500">&copy; {year} Syntek AI. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
