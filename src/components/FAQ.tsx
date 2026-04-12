import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tiempo toma configurar todo?",
    a: "Menos de 10 minutos. Conectas tu WhatsApp, le enseñas a tu IA sobre tu negocio, y listo. Sin código, sin complicaciones.",
  },
  {
    q: "¿Puedo probar gratis?",
    a: "Sí, 14 días gratis con todas las funciones. Sin tarjeta de crédito. Si no te convence, no pagas nada.",
  },
  {
    q: "¿Qué pasa si mi IA no sabe responder algo?",
    a: "Transfiere la conversación a alguien de tu equipo automáticamente. Tu cliente nunca se queda sin respuesta.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí, sin penalidades. Cancela, pausa o cambia de plan cuando quieras.",
  },
  {
    q: "¿Puedo usar mi número de WhatsApp actual?",
    a: "Sí, conectas tu número existente. No necesitas uno nuevo.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-slate-500">Todo lo que necesitas saber antes de empezar</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden transition-all hover:border-slate-300">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className="text-slate-400 flex-shrink-0 transition-transform"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0)" }}
                />
              </button>
              <div
                className="overflow-hidden transition-all"
                style={{
                  maxHeight: open === i ? 200 : 0,
                  opacity: open === i ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.2s ease",
                }}
              >
                <p className="px-6 pb-4 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
