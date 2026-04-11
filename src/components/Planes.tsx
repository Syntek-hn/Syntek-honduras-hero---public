import { useT, useTa } from "@/i18n/provider";
import { Check } from "lucide-react";

const plans = [
  { key: "starter", popular: false },
  { key: "pro", popular: true },
  { key: "business", popular: false },
  { key: "enterprise", popular: false },
];

export default function Planes() {
  const t = useT();
  const ta = useTa();

  return (
    <section id="precios" className="py-24 px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t("pricing.title")}</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">{t("pricing.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map(({ key, popular }) => {
            const features = ta(`pricing.${key}.features`);
            const isEnterprise = key === "enterprise";
            return (
              <div key={key} className={`relative bg-white rounded-2xl p-6 border ${popular ? "border-blue-600 shadow-xl shadow-blue-600/10 scale-[1.02]" : "border-slate-200"} flex flex-col`}>
                {popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    {t("pricing.popular")}
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900">{t(`pricing.${key}.name`)}</h3>
                  <p className="text-sm text-slate-500 mt-1">{t(`pricing.${key}.desc`)}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">${t(`pricing.${key}.price`)}</span>
                  <span className="text-sm text-slate-500 ml-1">/{t("pricing.monthly")}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={isEnterprise ? "https://wa.me/50498092116" : "https://syntek-platform.vercel.app/register"}
                  className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all ${
                    popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}>
                  {isEnterprise ? t("pricing.ctaEnterprise") : t("pricing.cta")}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
