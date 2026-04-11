import { useT } from "@/i18n/provider";
import { ArrowRight, Play } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const t = useT();

  return (
    <section className="relative bg-gradient-hero pt-32 pb-20 px-6 overflow-hidden">
      {/* Particles */}
      <ParticleBackground />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs font-medium text-blue-700">{t("hero.trusted")}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-6">
          {t("hero.headline").split("inteligencia artificial").length > 1 ? (
            <>
              {t("hero.headline").split("inteligencia artificial")[0]}
              <span className="gradient-text">inteligencia artificial</span>
              {t("hero.headline").split("inteligencia artificial")[1]}
            </>
          ) : t("hero.headline").split("artificial intelligence").length > 1 ? (
            <>
              {t("hero.headline").split("artificial intelligence")[0]}
              <span className="gradient-text">artificial intelligence</span>
              {t("hero.headline").split("artificial intelligence")[1]}
            </>
          ) : (
            t("hero.headline")
          )}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("hero.subheadline")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://syntek-platform.vercel.app/register" className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 flex items-center gap-2">
            {t("hero.cta")}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#proceso" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium text-base transition-colors">
            <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center">
              <Play size={14} fill="currentColor" />
            </div>
            {t("hero.ctaSecondary")}
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="flex -space-x-2">
            {["bg-blue-500", "bg-emerald-500", "bg-violet-500", "bg-amber-500"].map((bg, i) => (
              <div key={i} className={`w-8 h-8 rounded-full ${bg} border-2 border-white flex items-center justify-center text-[10px] font-bold text-white`}>
                {["MG", "CR", "AL", "RD"][i]}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-slate-500 ml-1">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
}
