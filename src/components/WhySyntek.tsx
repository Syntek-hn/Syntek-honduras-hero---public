import { useT } from "@/i18n/provider";

const stats = ["stat1", "stat2", "stat3", "stat4"];

export default function WhySyntek() {
  const t = useT();

  return (
    <section id="porque" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t("why.title")}</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">{t("why.subtitle")}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((key) => (
            <div key={key} className="text-center bg-white rounded-2xl p-8 border border-slate-100">
              <p className="text-4xl sm:text-5xl font-extrabold gradient-text mb-3">{t(`why.${key}.value`)}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{t(`why.${key}.label`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
