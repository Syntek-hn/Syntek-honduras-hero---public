import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useT } from "@/i18n/provider";

export default function Cookies() {
  const t = useT();
  const isEs = t("nav.login") === "Iniciar sesión";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-1">{isEs ? "Política de Cookies" : "Cookie Policy"}</h1>
          <p className="text-sm text-slate-400 mb-2">Syntek AI</p>
          <p className="text-sm text-slate-500 mb-10">{isEs ? "Última actualización: 02 de febrero de 2026" : "Last updated: February 02, 2026"}</p>

          <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "¿Qué son las cookies?" : "What are cookies?"}</h2>
              <p>{isEs ? "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas syntekhn.com. Nos ayudan a mejorar tu experiencia de navegación." : "Cookies are small text files stored on your device when you visit syntekhn.com. They help us improve your browsing experience."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "Cookies que utilizamos" : "Cookies we use"}</h2>

              <div className="bg-slate-50 rounded-xl p-5 mb-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{isEs ? "Cookies esenciales" : "Essential cookies"}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>{isEs ? "Sesión de usuario" : "User session"}</strong> — {isEs ? "mantienen tu sesión iniciada en la plataforma" : "keep your session active on the platform"}</li>
                  <li><strong>{isEs ? "Preferencias de idioma" : "Language preferences"}</strong> — {isEs ? "recuerdan tu idioma seleccionado (ES/EN)" : "remember your selected language (ES/EN)"}</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 mb-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{isEs ? "Cookies de análisis" : "Analytics cookies"}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Google Analytics</strong> — {isEs ? "analizamos el tráfico y comportamiento en el sitio para mejorar la experiencia" : "we analyze site traffic and behavior to improve the experience"}</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{isEs ? "Cookies de marketing" : "Marketing cookies"}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Facebook Pixel</strong> — {isEs ? "medimos el rendimiento de nuestras campañas publicitarias y creamos audiencias relevantes" : "we measure the performance of our advertising campaigns and create relevant audiences"}</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "¿Cómo desactivar las cookies?" : "How to disable cookies?"}</h2>
              <p className="mb-3">{isEs ? "Puedes desactivar las cookies desde la configuración de tu navegador:" : "You can disable cookies from your browser settings:"}</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Chrome:</strong> {isEs ? "Configuración → Privacidad → Cookies" : "Settings → Privacy → Cookies"}</li>
                <li><strong>Firefox:</strong> {isEs ? "Opciones → Privacidad → Cookies" : "Options → Privacy → Cookies"}</li>
                <li><strong>Safari:</strong> {isEs ? "Preferencias → Privacidad → Cookies" : "Preferences → Privacy → Cookies"}</li>
              </ul>
              <p className="mt-3">{isEs ? "Ten en cuenta que desactivar ciertas cookies puede afectar el funcionamiento de la plataforma." : "Please note that disabling certain cookies may affect platform functionality."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "Contacto" : "Contact"}</h2>
              <p>{isEs ? "Para cualquier consulta sobre cookies:" : "For any cookie-related inquiries:"} <a href="mailto:info@syntekhn.com" className="text-blue-600 hover:underline">info@syntekhn.com</a></p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
