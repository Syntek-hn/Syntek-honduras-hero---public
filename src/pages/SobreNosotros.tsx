import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useT } from "@/i18n/provider";
import { ArrowRight, Clock, Bot, Briefcase, Timer } from "lucide-react";

export default function SobreNosotros() {
  const t = useT();
  const isEs = t("nav.login") === "Iniciar sesión";

  const stats = [
    { icon: Timer, text: isEs ? "Respuestas en menos de 1 minuto" : "Responses in less than 1 minute" },
    { icon: Bot, text: isEs ? "Hasta 78% de clientes atendidos automáticamente" : "Up to 78% of clients served automatically" },
    { icon: Briefcase, text: isEs ? "Negocios en Honduras, México y Estados Unidos ya lo utilizan" : "Businesses in Honduras, Mexico and the United States already use it" },
    { icon: Clock, text: isEs ? "Atención 24/7 sin contratar más personal" : "24/7 service without hiring more staff" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
            {isEs
              ? <>Creamos asistentes inteligentes que atienden automáticamente tus mensajes en <span className="gradient-text">WhatsApp, Facebook e Instagram</span>, 24/7.</>
              : <>We create intelligent assistants that automatically handle your messages on <span className="gradient-text">WhatsApp, Facebook & Instagram</span>, 24/7.</>
            }
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {isEs
              ? "Mientras tú trabajas en tu negocio, tu asistente responde, agenda y organiza a tus clientes sin descanso."
              : "While you work on your business, your assistant responds, schedules and organizes your clients without rest."
            }
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-blue-600" />
              </div>
              <p className="text-sm font-medium text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug mb-4">
            {isEs ? "Esto no es tecnología." : "This is not technology."}
          </p>
          <p className="text-2xl sm:text-3xl font-bold gradient-text leading-snug">
            {isEs ? "Es crecimiento para tu negocio." : "It's growth for your business."}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <p className="text-base text-slate-600 leading-relaxed mb-6">
            {isEs
              ? "Somos una empresa hondureña que entiende lo que es construir un negocio desde cero — y lo que cuesta perder una oportunidad."
              : "We are a Honduran company that understands what it takes to build a business from scratch — and the cost of losing an opportunity."
            }
          </p>
          <p className="text-base text-slate-600 leading-relaxed mb-8">
            {isEs
              ? "Por eso creamos Syntek AI: para que nunca más pierdas un cliente por no responder."
              : "That's why we created Syntek AI: so you never lose a client again because you couldn't respond."
            }
          </p>

          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              {isEs ? "Nuestra misión" : "Our mission"}
            </p>
            <p className="text-lg text-slate-800 font-medium leading-relaxed mb-2">
              {isEs
                ? "Que cualquier negocio pueda atender como una gran empresa, sin importar su tamaño."
                : "That any business can serve like a big company, regardless of its size."
              }
            </p>
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              {isEs
                ? "Que nadie pierda clientes por no poder responder."
                : "That no one loses clients because they couldn't respond."
              }
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            {isEs ? "Empieza gratis por 14 días." : "Start free for 14 days."}
          </h2>
          <p className="text-slate-500 mb-8">
            {isEs ? "Sin tarjeta. Sin compromiso." : "No card. No commitment."}
          </p>
          <a
            href="/#precios"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all shadow-lg shadow-blue-600/20 hover:shadow-xl"
          >
            {isEs ? "Empieza ahora" : "Start now"}
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
