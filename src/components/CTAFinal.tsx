import { useT } from "@/i18n/provider";
import { ArrowRight } from "lucide-react";

export default function CTAFinal() {
  const t = useT();

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center bg-blue-600 rounded-3xl px-8 py-16 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-700 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("ctaFinal.title")}</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">{t("ctaFinal.subtitle")}</p>
          <a href="#precios" className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-2xl text-base hover:bg-blue-50 transition-all shadow-lg">
            {t("ctaFinal.cta")}
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
