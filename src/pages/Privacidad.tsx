import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useT } from "@/i18n/provider";

export default function Privacidad() {
  const t = useT();
  const isEs = t("nav.login") === "Iniciar sesión";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-1">{isEs ? "Política de Privacidad" : "Privacy Policy"}</h1>
          <p className="text-sm text-slate-400 mb-2">Syntek AI</p>
          <p className="text-sm text-slate-500 mb-10">{isEs ? "Última actualización: 02 de febrero de 2026" : "Last updated: February 02, 2026"}</p>

          <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "1. Información General" : "1. General Information"}</h2>
              <p>{isEs ? "Syntek AI, con sede en El Progreso, Yoro, Honduras, es responsable del tratamiento de los datos personales recopilados a través de su sitio web syntekhn.com y su plataforma de gestión de conversaciones con inteligencia artificial." : "Syntek AI, headquartered in El Progreso, Yoro, Honduras, is responsible for processing personal data collected through its website syntekhn.com and its AI-powered conversation management platform."}</p>
              <p className="mt-2">{isEs ? "Para cualquier consulta relacionada con privacidad:" : "For any privacy-related inquiries:"} <a href="mailto:info@syntekhn.com" className="text-blue-600 hover:underline">info@syntekhn.com</a></p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "2. Datos que Recopilamos" : "2. Data We Collect"}</h2>
              <p className="mb-2">{isEs ? "Recopilamos los siguientes datos personales:" : "We collect the following personal data:"}</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>{isEs ? "Nombre y apellido" : "First and last name"}</li>
                <li>{isEs ? "Correo electrónico" : "Email address"}</li>
                <li>{isEs ? "Número de teléfono" : "Phone number"}</li>
                <li>{isEs ? "Nombre del negocio" : "Business name"}</li>
                <li>{isEs ? "País y ciudad" : "Country and city"}</li>
                <li>{isEs ? "Datos de conversaciones gestionadas a través de la plataforma" : "Conversation data managed through the platform"}</li>
                <li>{isEs ? "Información de uso de la plataforma y comportamiento en el sitio web" : "Platform usage information and website behavior"}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "3. Finalidad del Tratamiento" : "3. Purpose of Processing"}</h2>
              <p className="mb-2">{isEs ? "Utilizamos tus datos para:" : "We use your data to:"}</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>{isEs ? "Proveer y mejorar los servicios de Syntek AI" : "Provide and improve Syntek AI services"}</li>
                <li>{isEs ? "Gestionar tu cuenta y suscripción" : "Manage your account and subscription"}</li>
                <li>{isEs ? "Enviarte boletines, novedades y comunicaciones comerciales (con tu consentimiento)" : "Send you newsletters, updates and commercial communications (with your consent)"}</li>
                <li>{isEs ? "Soporte técnico y atención al cliente" : "Technical support and customer service"}</li>
                <li>{isEs ? "Análisis de uso de la plataforma para mejoras continuas" : "Platform usage analysis for continuous improvement"}</li>
                <li>{isEs ? "Cumplir con obligaciones legales aplicables" : "Comply with applicable legal obligations"}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "4. Boletines y Comunicaciones" : "4. Newsletters and Communications"}</h2>
              <p className="mb-2">{isEs ? "Con tu autorización expresa, Syntek AI podrá enviarte:" : "With your express authorization, Syntek AI may send you:"}</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>{isEs ? "Boletines informativos" : "Informational newsletters"}</li>
                <li>{isEs ? "Novedades sobre la plataforma" : "Platform updates"}</li>
                <li>{isEs ? "Ofertas y promociones" : "Offers and promotions"}</li>
                <li>{isEs ? "Comunicaciones sobre nuevas funcionalidades" : "Communications about new features"}</li>
              </ul>
              <p className="mt-3">{isEs ? "Puedes cancelar tu suscripción en cualquier momento haciendo clic en el enlace de cancelación en cualquier correo recibido o escribiendo a" : "You can unsubscribe at any time by clicking the unsubscribe link in any email or writing to"} <a href="mailto:info@syntekhn.com" className="text-blue-600 hover:underline">info@syntekhn.com</a>.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "5. Proveedores Terceros" : "5. Third-Party Providers"}</h2>
              <p>{isEs ? "Para operar la plataforma utilizamos proveedores de servicios de infraestructura cloud, procesamiento de inteligencia artificial, mensajería y análisis. Estos proveedores actúan bajo estrictos acuerdos de confidencialidad y solo procesan datos según nuestras instrucciones." : "To operate the platform we use cloud infrastructure, artificial intelligence processing, messaging and analytics service providers. These providers act under strict confidentiality agreements and only process data according to our instructions."}</p>
              <p className="mt-2">{isEs ? "También utilizamos:" : "We also use:"}</p>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li><strong>Google Analytics</strong> — {isEs ? "para analizar el tráfico y comportamiento en syntekhn.com" : "to analyze traffic and behavior on syntekhn.com"}</li>
                <li><strong>Facebook Pixel</strong> — {isEs ? "para medir el rendimiento de campañas publicitarias y crear audiencias" : "to measure ad campaign performance and create audiences"}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "6. Cookies" : "6. Cookies"}</h2>
              <p>{isEs ? "Syntek AI utiliza cookies propias y de terceros. Consulta nuestra" : "Syntek AI uses first-party and third-party cookies. See our"} <a href="/cookies" className="text-blue-600 hover:underline">{isEs ? "Política de Cookies" : "Cookie Policy"}</a> {isEs ? "para más detalles." : "for more details."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "7. Derechos del Usuario" : "7. User Rights"}</h2>
              <p className="mb-2">{isEs ? "Tienes derecho a:" : "You have the right to:"}</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>{isEs ? "Acceder a tus datos personales" : "Access your personal data"}</li>
                <li>{isEs ? "Rectificar datos incorrectos" : "Rectify incorrect data"}</li>
                <li>{isEs ? "Eliminar tus datos (derecho al olvido)" : "Delete your data (right to be forgotten)"}</li>
                <li>{isEs ? "Limitar el procesamiento de tus datos" : "Limit the processing of your data"}</li>
                <li>{isEs ? "Portar tus datos a otro servicio" : "Port your data to another service"}</li>
                <li>{isEs ? "Oponerte al tratamiento de tus datos" : "Object to the processing of your data"}</li>
              </ul>
              <p className="mt-3">{isEs ? "Para ejercer cualquiera de estos derechos escríbenos a" : "To exercise any of these rights write to"} <a href="mailto:info@syntekhn.com" className="text-blue-600 hover:underline">info@syntekhn.com</a>.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "8. Responsabilidad del Negocio Cliente" : "8. Client Business Responsibility"}</h2>
              <p>{isEs ? "El negocio que contrata Syntek AI es responsable de obtener el consentimiento expreso de sus propios clientes para el tratamiento y cesión de sus datos antes de interactuar con la plataforma." : "The business that contracts Syntek AI is responsible for obtaining express consent from their own customers for the processing and transfer of their data before interacting with the platform."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "9. Decisiones Automatizadas" : "9. Automated Decisions"}</h2>
              <p>{isEs ? "Syntek AI utiliza inteligencia artificial para calificar leads, segmentar contactos y derivar conversaciones a agentes humanos según reglas definidas por el negocio cliente." : "Syntek AI uses artificial intelligence to qualify leads, segment contacts and route conversations to human agents according to rules defined by the client business."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "10. Seguridad" : "10. Security"}</h2>
              <p>{isEs ? "Aplicamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado, pérdida o alteración." : "We apply technical and organizational measures to protect your data against unauthorized access, loss or alteration."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "11. Cumplimiento Legal" : "11. Legal Compliance"}</h2>
              <p>{isEs ? "Esta política cumple con las leyes de protección de datos de Honduras, y está inspirada en los principios del GDPR (Europa) y CCPA (California, Estados Unidos)." : "This policy complies with Honduras data protection laws, and is inspired by the principles of GDPR (Europe) and CCPA (California, United States)."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "12. Actualizaciones" : "12. Updates"}</h2>
              <p>{isEs ? "Nos reservamos el derecho de actualizar esta política. Te notificaremos por correo electrónico ante cambios significativos." : "We reserve the right to update this policy. We will notify you by email of significant changes."}</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
