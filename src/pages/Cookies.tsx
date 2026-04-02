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
        <div className="max-w-3xl mx-auto prose prose-slate prose-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{isEs ? "Política de Cookies" : "Cookie Policy"}</h1>
          <p className="text-sm text-slate-500 mb-8">{isEs ? "Última actualización: abril 2026" : "Last updated: April 2026"}</p>

          <h2>{isEs ? "1. Qué son las cookies" : "1. What are cookies"}</h2>
          <p>{isEs ? "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a recordar tus preferencias y mejorar tu experiencia de navegación." : "Cookies are small text files stored on your device when you visit our website. They help us remember your preferences and improve your browsing experience."}</p>

          <h2>{isEs ? "2. Cookies que utilizamos" : "2. Cookies we use"}</h2>

          <h3>{isEs ? "Cookies esenciales" : "Essential cookies"}</h3>
          <p>{isEs ? "Son necesarias para el funcionamiento básico del sitio. Incluyen:" : "Required for basic site functionality. Include:"}</p>
          <ul>
            <li><strong>{isEs ? "Sesión de autenticación:" : "Authentication session:"}</strong> {isEs ? "Mantiene tu sesión activa cuando inicias sesión en la plataforma." : "Keeps your session active when you log in to the platform."}</li>
            <li><strong>{isEs ? "Preferencia de idioma:" : "Language preference:"}</strong> {isEs ? "Recuerda tu selección de idioma (español o inglés)." : "Remembers your language selection (Spanish or English)."}</li>
            <li><strong>{isEs ? "Preferencia de tema:" : "Theme preference:"}</strong> {isEs ? "Recuerda tu preferencia de modo claro u oscuro en la plataforma." : "Remembers your light or dark mode preference on the platform."}</li>
          </ul>

          <h3>{isEs ? "Cookies de rendimiento" : "Performance cookies"}</h3>
          <p>{isEs ? "Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio:" : "Help us understand how visitors interact with our site:"}</p>
          <ul>
            <li><strong>{isEs ? "Analítica:" : "Analytics:"}</strong> {isEs ? "Recopilan información anónima sobre las páginas visitadas, tiempo de permanencia y navegación general." : "Collect anonymous information about pages visited, time spent and general navigation."}</li>
          </ul>

          <h3>{isEs ? "Cookies de funcionalidad" : "Functionality cookies"}</h3>
          <p>{isEs ? "Mejoran la experiencia del usuario:" : "Improve user experience:"}</p>
          <ul>
            <li><strong>{isEs ? "Preferencias de configuración:" : "Configuration preferences:"}</strong> {isEs ? "Almacenan configuraciones personalizadas como filtros y vistas seleccionadas." : "Store personalized settings like selected filters and views."}</li>
          </ul>

          <h2>{isEs ? "3. Cómo desactivar las cookies" : "3. How to disable cookies"}</h2>
          <p>{isEs ? "Puedes controlar y eliminar las cookies a través de la configuración de tu navegador:" : "You can control and delete cookies through your browser settings:"}</p>
          <ul>
            <li><strong>Chrome:</strong> {isEs ? "Configuración → Privacidad y seguridad → Cookies" : "Settings → Privacy and security → Cookies"}</li>
            <li><strong>Firefox:</strong> {isEs ? "Configuración → Privacidad y seguridad → Cookies y datos del sitio" : "Settings → Privacy & Security → Cookies and Site Data"}</li>
            <li><strong>Safari:</strong> {isEs ? "Preferencias → Privacidad → Gestionar datos del sitio web" : "Preferences → Privacy → Manage Website Data"}</li>
            <li><strong>Edge:</strong> {isEs ? "Configuración → Cookies y permisos del sitio" : "Settings → Cookies and site permissions"}</li>
          </ul>
          <p>{isEs ? "Ten en cuenta que desactivar las cookies esenciales puede afectar el funcionamiento de la plataforma." : "Please note that disabling essential cookies may affect platform functionality."}</p>

          <h2>{isEs ? "4. Contacto" : "4. Contact"}</h2>
          <p>{isEs ? "Si tienes preguntas sobre nuestra política de cookies:" : "If you have questions about our cookie policy:"}</p>
          <p><strong>Syntek AI</strong><br />Email: info@syntekhn.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
