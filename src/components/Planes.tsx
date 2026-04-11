import { useState } from "react";
import { Check, Crown, Zap, Star, Rocket, ArrowRight, Send, X } from "lucide-react";

const plans = [
  {
    key: "starter", name: "Starter", tagline: "Para empezar", icon: Zap,
    subtitle: "Pon a trabajar tu WhatsApp mientras tu descansas",
    target: "Negocios que quieren dejar de perder clientes por no responder a tiempo",
    price: 49, annualPrice: 39, popular: false,
    features: [
      "2 asistentes que responden por ti 24/7",
      "3 personas de tu equipo conectadas",
      "Atiende hasta 1,000 clientes al mes",
      "WhatsApp conectado",
      "Lista de contactos con historial",
      "Encuestas de satisfaccion automaticas",
      "Resumen diario de tu negocio",
    ],
  },
  {
    key: "pro", name: "Pro", tagline: "Para crecer", icon: Star,
    subtitle: "Convierte conversaciones en ventas reales",
    target: "Equipos que quieren vender mas y no perder oportunidades",
    price: 99, annualPrice: 79, popular: true,
    features: [
      "5 asistentes IA para distintas areas",
      "10 personas de tu equipo conectadas",
      "Atiende hasta 5,000 clientes al mes",
      "WhatsApp + Facebook Messenger",
      "Tablero de ventas visual (Kanban)",
      "Catalogo de productos con imagenes",
      "Envia campanas a tus contactos",
      "Exporta contactos a Excel",
      "Entrena a tu IA con tus documentos",
    ],
  },
  {
    key: "business", name: "Business", tagline: "Para escalar", icon: Rocket,
    subtitle: "Tu equipo crece, tus clientes tambien",
    target: "Empresas que necesitan automatizar a otro nivel sin limites",
    price: 199, annualPrice: 159, popular: false,
    features: [
      "10 asistentes IA especializados",
      "Conecta a todo tu equipo sin limite",
      "Atiende hasta 20,000 clientes al mes",
      "WhatsApp + Facebook + Instagram",
      "Campanas masivas escritas por IA",
      "Ranking de rendimiento por agente",
      "Descarga reportes en PDF y Excel",
      "Conecta con otras apps via API",
    ],
  },
  {
    key: "enterprise", name: "Enterprise", tagline: "Para liderar", icon: Crown,
    subtitle: "Tu negocio es unico, tu solucion tambien",
    target: "Empresas grandes que necesitan una solucion a su medida",
    price: 0, annualPrice: 0, popular: false,
    features: [
      "Asistentes IA sin limite",
      "Equipo y clientes sin limite",
      "Asistente interno con IA",
      "Reportes PDF con tu marca",
      "Soporte dedicado 24/7",
      "Te ayudamos a configurar todo",
      "Tu propio manager de cuenta",
      "Contrato a tu medida",
    ],
  },
];

export default function Planes() {
  const [annual, setAnnual] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="precios" className="py-24 px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Planes para cada etapa de tu negocio</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">Empieza gratis 14 dias. Sin tarjeta. Cancela cuando quieras.</p>

          {/* Annual toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-medium ${annual ? "text-slate-400" : "text-slate-900"}`}>Mensual</span>
            <button onClick={() => setAnnual(!annual)} className="relative w-12 h-6 rounded-full transition-colors" style={{ backgroundColor: annual ? "#2563EB" : "#D1D5DB" }}>
              <div className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform" style={{ left: annual ? 26 : 2 }} />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-slate-900" : "text-slate-400"}`}>Anual</span>
            {annual && <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-100 text-green-700">Ahorra 20%</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => {
            const isEnterprise = plan.key === "enterprise";
            const Icon = plan.icon;
            const price = annual ? plan.annualPrice : plan.price;

            return (
              <div key={plan.key}
                className={`relative rounded-2xl p-6 flex flex-col transition-all ${
                  plan.popular ? "border-2 border-blue-600 shadow-xl shadow-blue-600/10 scale-[1.02]" :
                  isEnterprise ? "border border-slate-700 bg-slate-900 text-white" : "border border-slate-200 bg-white"
                }`}
                style={!isEnterprise && !plan.popular ? { backgroundColor: "white" } : undefined}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Mas popular
                  </span>
                )}

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={18} className={isEnterprise ? "text-amber-400" : "text-blue-600"} />
                    <h3 className={`text-lg font-bold ${isEnterprise ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                  </div>
                  <p className={`text-xs font-medium ${isEnterprise ? "text-amber-400" : "text-blue-600"}`}>{plan.tagline}</p>
                  <p className={`text-sm mt-2 ${isEnterprise ? "text-slate-400" : "text-slate-500"}`}>{plan.subtitle}</p>
                </div>

                <div className="mb-5">
                  {isEnterprise ? (
                    <p className="text-lg font-semibold text-white">Precio personalizado</p>
                  ) : (
                    <>
                      <span className={`text-4xl font-extrabold ${isEnterprise ? "text-white" : "text-slate-900"}`}>${price}</span>
                      <span className={`text-sm ml-1 ${isEnterprise ? "text-slate-400" : "text-slate-500"}`}>/mes</span>
                      {annual && <span className="block text-xs text-slate-400 line-through mt-1">${plan.price}/mes</span>}
                    </>
                  )}
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check size={16} className={`mt-0.5 flex-shrink-0 ${isEnterprise ? "text-amber-400" : "text-blue-600"}`} />
                      <span className={`text-sm ${isEnterprise ? "text-slate-300" : "text-slate-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                {isEnterprise ? (
                  <button onClick={() => setShowForm(true)}
                    className="block text-center py-3 rounded-xl text-sm font-semibold transition-all bg-amber-500 hover:bg-amber-600 text-white">
                    Contactar ventas
                  </button>
                ) : (
                  <a href="https://syntek-platform.vercel.app/register"
                    className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                      plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md" : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}>
                    Empezar gratis 14 dias <ArrowRight size={14} />
                  </a>
                )}

                <p className={`text-[10px] text-center mt-3 ${isEnterprise ? "text-slate-500" : "text-slate-400"}`}>
                  {isEnterprise ? "Contrato personalizado · SLA incluido" : "14 dias gratis · Sin tarjeta · Cancela cuando quieras"}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enterprise Contact Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Contactar ventas</h3>
              <button onClick={() => setShowForm(false)} className="p-1 rounded-lg hover:bg-slate-100"><X size={18} className="text-slate-400" /></button>
            </div>
            <p className="text-sm text-slate-500 mb-4">Cuentanos sobre tu empresa y te contactaremos</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              window.open(`mailto:info@syntekhn.com?subject=Enterprise%20-%20${encodeURIComponent(fd.get("empresa") as string)}&body=${encodeURIComponent(
                `Nombre: ${fd.get("nombre")}\nEmail: ${fd.get("email")}\nEmpresa: ${fd.get("empresa")}\nAgentes aprox: ${fd.get("agentes")}\n\n${fd.get("mensaje")}`
              )}`, "_blank");
              setShowForm(false);
            }} className="space-y-3">
              <input name="nombre" type="text" placeholder="Tu nombre" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none" />
              <input name="email" type="email" placeholder="Email" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none" />
              <input name="empresa" type="text" placeholder="Nombre de tu empresa" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none" />
              <input name="agentes" type="text" placeholder="Numero de agentes aproximado" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none" />
              <textarea name="mensaje" placeholder="Mensaje (opcional)" rows={3} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none resize-none" />
              <button type="submit" className="w-full py-3 rounded-xl text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center gap-2">
                <Send size={14} /> Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
