import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tiempo toma configurar todo?",
    a: "Menos de 10 minutos. Conectas tu WhatsApp, le dices a tu IA de qué trata tu negocio, y listo. No necesitas saber de programación ni contratar a nadie.",
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "Para nada. Si sabes usar WhatsApp, puedes usar Syntek. Todo se configura con clics, sin código, sin instalaciones complicadas.",
  },
  {
    q: "¿Mis datos y los de mis clientes están seguros?",
    a: "Sí. Usamos encriptación de grado bancario, servidores seguros y cumplimos con estándares internacionales de privacidad. Tus datos son solo tuyos.",
  },
  {
    q: "¿Puedo probar gratis antes de pagar?",
    a: "Sí, tienes 14 días gratis con todas las funciones del plan Pro. Sin tarjeta de crédito. Si no te convence, no pagas nada.",
  },
  {
    q: "¿Qué pasa si mi IA no sabe responder algo?",
    a: "Tu IA transfiere la conversación a una persona de tu equipo automáticamente. El cliente nunca se queda sin respuesta.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí, sin penalidades ni letras pequeñas. Puedes cancelar, pausar o cambiar de plan cuando quieras desde tu panel.",
  },
  {
    q: "¿Puedo usar mi número de WhatsApp actual?",
    a: "Sí, conectas tu número de WhatsApp Business existente. No necesitas un número nuevo ni cambiar nada con tus clientes.",
  },
  {
    q: "¿En qué idiomas funciona la IA?",
    a: "Tu IA entiende y responde en español, inglés y portugués. Detecta automáticamente el idioma del cliente y responde en el mismo.",
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
