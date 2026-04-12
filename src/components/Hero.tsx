import { useT } from "@/i18n/provider";
import { ArrowRight, Play, MessageCircle, Bot, BarChart3, Clock, Users, Zap } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

function DashboardMockup() {
  return (
    <div className="mt-16 max-w-4xl mx-auto" style={{ perspective: "1200px" }}>
      <div
        className="rounded-2xl overflow-hidden border border-slate-200/60 bg-white shadow-2xl shadow-blue-600/10"
        style={{
          transform: "rotateX(8deg) rotateY(0deg)",
          animation: "mockupFloat 6s ease-in-out infinite",
        }}
      >
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-lg bg-white border border-slate-200 text-[10px] text-slate-400">
              syntek-platform.vercel.app/dashboard
            </div>
          </div>
        </div>

        <div className="flex" style={{ height: 320 }}>
          {/* Mini sidebar */}
          <div className="w-14 bg-white border-r border-slate-100 flex flex-col items-center py-3 gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <Zap size={14} className="text-white" />
            </div>
            <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center"><MessageCircle size={13} className="text-blue-600" /></div>
            <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center"><Users size={13} className="text-blue-600" /></div>
            <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center"><Bot size={13} className="text-blue-600" /></div>
            <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center"><BarChart3 size={13} className="text-blue-600" /></div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 bg-slate-50/50">
            {/* Hero greeting */}
            <div className="rounded-xl px-5 py-3 mb-3 text-white" style={{ background: "linear-gradient(135deg, #1e40af, #2563eb, #3b82f6)" }}>
              <p className="text-[10px] text-blue-200">Viernes, 11 abril 2026</p>
              <p className="text-sm font-bold">Buenos dias, Jorge</p>
            </div>

            {/* Stat bar */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[
                { label: "Conversaciones", value: "847", color: "#2563EB" },
                { label: "IA resolvio", value: "92%", color: "#10B981" },
                { label: "Horas ahorradas", value: "126h", color: "#8B5CF6" },
                { label: "Transferidas", value: "12", color: "#F59E0B" },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-lg p-2 border border-slate-100">
                  <p className="text-[9px] text-slate-400">{s.label}</p>
                  <p className="text-lg font-bold" style={{ color: s.color }}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Chat preview */}
            <div className="bg-white rounded-xl border border-slate-100 p-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-semibold text-green-600">Nova en linea</span>
                </div>
                <span className="text-[9px] text-slate-400 ml-auto">3 chats activos</span>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0" />
                  <div className="bg-slate-100 rounded-xl rounded-bl-sm px-3 py-1.5 max-w-[70%]">
                    <p className="text-[10px] text-slate-600">Hola, quiero hacer una reservacion para manana</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="bg-blue-600 rounded-xl rounded-br-sm px-3 py-1.5 max-w-[70%]">
                    <p className="text-[10px] text-white">Claro! Tenemos disponibilidad a las 10am, 2pm y 5pm. Cual prefieres?</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                    <Bot size={12} className="text-blue-600" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0" />
                  <div className="bg-slate-100 rounded-xl rounded-bl-sm px-3 py-1.5">
                    <p className="text-[10px] text-slate-600">Las 2pm esta perfecto!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const t = useT();

  return (
    <section className="relative bg-gradient-hero pt-32 pb-8 px-6 overflow-hidden">
      <ParticleBackground />

      <div className="max-w-5xl mx-auto text-center relative z-10">
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
        <div className="flex items-center justify-center gap-3 mt-10">
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

        {/* Dashboard Mockup */}
        <DashboardMockup />
      </div>
    </section>
  );
}
