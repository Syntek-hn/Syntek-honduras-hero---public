import { useT } from "@/i18n/provider";
import { Link2, Bot, Headphones } from "lucide-react";

const steps = [
  { key: "step1", icon: Link2, color: "bg-blue-600" },
  { key: "step2", icon: Bot, color: "bg-violet-600" },
  { key: "step3", icon: Headphones, color: "bg-emerald-600" },
];

export default function Process() {
  const t = useT();

  return (
    <section id="proceso" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t("process.title")}</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">{t("process.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ key, icon: Icon, color }, i) => (
            <div key={key} className="text-center">
              <div className="relative mx-auto mb-6">
                <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                  <Icon size={28} className="text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full border-2 border-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{t(`process.${key}.title`)}</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">{t(`process.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
