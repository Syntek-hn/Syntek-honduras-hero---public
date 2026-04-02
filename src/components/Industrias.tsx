import { useT } from "@/i18n/provider";
import { Stethoscope, UtensilsCrossed, Building, ShoppingCart, GraduationCap, Scale, Car, Scissors, Shield, Briefcase } from "lucide-react";

const industries = [
  { key: "clinica", icon: Stethoscope, color: "bg-red-50 text-red-600" },
  { key: "restaurante", icon: UtensilsCrossed, color: "bg-orange-50 text-orange-600" },
  { key: "inmobiliaria", icon: Building, color: "bg-blue-50 text-blue-600" },
  { key: "ecommerce", icon: ShoppingCart, color: "bg-violet-50 text-violet-600" },
  { key: "educacion", icon: GraduationCap, color: "bg-emerald-50 text-emerald-600" },
  { key: "legal", icon: Scale, color: "bg-slate-100 text-slate-700" },
  { key: "automotriz", icon: Car, color: "bg-sky-50 text-sky-600" },
  { key: "belleza", icon: Scissors, color: "bg-pink-50 text-pink-600" },
  { key: "seguros", icon: Shield, color: "bg-amber-50 text-amber-600" },
  { key: "servicios", icon: Briefcase, color: "bg-indigo-50 text-indigo-600" },
];

export default function Industrias() {
  const t = useT();

  return (
    <section id="industrias" className="py-24 px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t("industries.title")}</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">{t("industries.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map(({ key, icon: Icon, color }) => (
            <div key={key} className="group bg-white rounded-2xl p-5 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer">
              <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-3`}>
                <Icon size={20} />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{t(`industries.${key}.name`)}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{t(`industries.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
