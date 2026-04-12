import { useT } from "@/i18n/provider";
import { Link2, Bot, Headphones, MessageCircle, Wifi, WifiOff } from "lucide-react";

function MockupIntegrations() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm mt-4 text-left hover:shadow-md transition-shadow">
      <p className="text-[10px] font-semibold text-slate-400 mb-2">Integraciones</p>
      {[
        { name: "WhatsApp", active: true, color: "#25D366" },
        { name: "Facebook", active: true, color: "#1877F2" },
        { name: "Instagram", active: false, color: "#E4405F" },
      ].map((ch, i) => (
        <div key={i} className="flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded flex items-center justify-center" style={{ backgroundColor: ch.color + "15" }}>
              <MessageCircle size={10} style={{ color: ch.color }} />
            </div>
            <span className="text-[11px] text-slate-700">{ch.name}</span>
          </div>
          {ch.active ? (
            <div className="flex items-center gap-1"><Wifi size={10} className="text-green-500" /><span className="text-[9px] text-green-600 font-medium">Activo</span></div>
          ) : (
            <div className="flex items-center gap-1"><WifiOff size={10} className="text-slate-300" /><span className="text-[9px] text-slate-400">Pendiente</span></div>
          )}
        </div>
      ))}
    </div>
  );
}

function MockupNova() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm mt-4 text-left hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center"><Bot size={12} className="text-blue-600" /></div>
        <div>
          <p className="text-[11px] font-semibold text-slate-700">Nova</p>
          <p className="text-[9px] text-green-500">Activa</p>
        </div>
      </div>
      <div className="bg-slate-50 rounded-lg p-2 space-y-1.5">
        <div className="bg-slate-200 rounded-lg rounded-bl-sm px-2 py-1 max-w-[75%]">
          <p className="text-[9px] text-slate-600">Que horarios tienen?</p>
        </div>
        <div className="bg-blue-600 rounded-lg rounded-br-sm px-2 py-1 max-w-[80%] ml-auto">
          <p className="text-[9px] text-white">Lunes a viernes de 8am a 5pm. Los sabados de 9am a 1pm</p>
        </div>
      </div>
    </div>
  );
}

function MockupChats() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm mt-4 text-left hover:shadow-md transition-shadow">
      <p className="text-[10px] font-semibold text-slate-400 mb-2">Conversaciones activas</p>
      {[
        { name: "Maria G.", msg: "Perfecto, los espero!", time: "2m", dot: "bg-green-500" },
        { name: "Carlos R.", msg: "Cuanto cuesta el servicio?", time: "5m", dot: "bg-blue-500" },
        { name: "Ana P.", msg: "Gracias por la info!", time: "12m", dot: "bg-slate-300" },
      ].map((c, i) => (
        <div key={i} className="flex items-center gap-2 py-1.5 border-b border-slate-50 last:border-0">
          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[9px] font-bold text-slate-500 relative flex-shrink-0">
            {c.name.slice(0, 2)}
            <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full ${c.dot} border-2 border-white`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between">
              <p className="text-[10px] font-semibold text-slate-700">{c.name}</p>
              <p className="text-[8px] text-slate-400">{c.time}</p>
            </div>
            <p className="text-[9px] text-slate-400 truncate">{c.msg}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const steps = [
  { key: "step1", icon: Link2, color: "bg-blue-600", Mockup: MockupIntegrations },
  { key: "step2", icon: Bot, color: "bg-violet-600", Mockup: MockupNova },
  { key: "step3", icon: Headphones, color: "bg-emerald-600", Mockup: MockupChats },
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
          {steps.map(({ key, icon: Icon, color, Mockup }, i) => (
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
              <Mockup />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
