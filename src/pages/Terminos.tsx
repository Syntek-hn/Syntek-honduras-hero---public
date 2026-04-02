import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useT } from "@/i18n/provider";

export default function Terminos() {
  const t = useT();
  const isEs = t("nav.login") === "Iniciar sesión";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-1">{isEs ? "Términos y Condiciones" : "Terms and Conditions"}</h1>
          <p className="text-sm text-slate-400 mb-2">Syntek AI</p>
          <p className="text-sm text-slate-500 mb-10">{isEs ? "Última actualización: 02 de febrero de 2026" : "Last updated: February 02, 2026"}</p>

          <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "1. Partes" : "1. Parties"}</h2>
              <p><strong>1.1 Syntek AI:</strong> {isEs ? "Empresa con sede en El Progreso, Yoro, Honduras, que provee una plataforma SaaS de automatización de atención al cliente con inteligencia artificial." : "Company headquartered in El Progreso, Yoro, Honduras, that provides a SaaS platform for AI-powered customer service automation."}</p>
              <p className="mt-2"><strong>{isEs ? "1.2 El Negocio:" : "1.2 The Business:"}</strong> {isEs ? "Empresa o persona que contrata Syntek AI para automatizar sus conversaciones con clientes." : "Company or individual that contracts Syntek AI to automate their customer conversations."}</p>
              <p className="mt-2"><strong>{isEs ? "1.3 Empleados del Negocio:" : "1.3 Business Employees:"}</strong> {isEs ? "Personas que interactúan con la plataforma en nombre del Negocio." : "Persons who interact with the platform on behalf of The Business."}</p>
              <p className="mt-2"><strong>{isEs ? "1.4 Clientes del Negocio:" : "1.4 Business Customers:"}</strong> {isEs ? "Personas que se comunican con el Negocio a través de la plataforma." : "Persons who communicate with The Business through the platform."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "2. Objeto" : "2. Purpose"}</h2>
              <p>{isEs ? "Syntek AI provee una plataforma SaaS que permite automatizar conversaciones con clientes vía WhatsApp y otros canales digitales, utilizando agentes de inteligencia artificial configurables, gestión de equipos humanos y herramientas de análisis." : "Syntek AI provides a SaaS platform that enables automating customer conversations via WhatsApp and other digital channels, using configurable AI agents, human team management and analytics tools."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "3. Proceso de Contratación" : "3. Contracting Process"}</h2>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>{isEs ? "El Negocio se registra en syntekhn.com" : "The Business registers at syntekhn.com"}</li>
                <li>{isEs ? "Accede a un período de prueba gratuito de 14 días sin necesidad de tarjeta de crédito" : "Accesses a free 14-day trial period with no credit card required"}</li>
                <li>{isEs ? "Al finalizar el trial elige un plan de suscripción" : "At the end of the trial, selects a subscription plan"}</li>
                <li>{isEs ? "La cuenta se activa automáticamente al confirmar el pago" : "The account is automatically activated upon payment confirmation"}</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "4. Facturación y Pagos" : "4. Billing and Payments"}</h2>
              <p className="mb-3"><strong>{isEs ? "4.1 Planes disponibles:" : "4.1 Available plans:"}</strong></p>
              <div className="bg-slate-50 rounded-xl p-4 mb-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>Starter</span><span className="font-semibold text-slate-900">$49/{isEs ? "mes" : "mo"}</span>
                  <span>Pro</span><span className="font-semibold text-slate-900">$99/{isEs ? "mes" : "mo"}</span>
                  <span>Business</span><span className="font-semibold text-slate-900">$199/{isEs ? "mes" : "mo"}</span>
                  <span>Enterprise</span><span className="font-semibold text-slate-900">$399/{isEs ? "mes" : "mo"}</span>
                </div>
              </div>
              <p><strong>4.2</strong> {isEs ? "La facturación es mensual y por adelantado." : "Billing is monthly and in advance."}</p>
              <p className="mt-2"><strong>4.3</strong> {isEs ? "Syntek AI NO cobra por conversación ni por mensaje. El precio es fijo según el plan contratado." : "Syntek AI does NOT charge per conversation or per message. The price is fixed according to the selected plan."}</p>
              <p className="mt-2"><strong>{isEs ? "4.4 API de mensajería:" : "4.4 Messaging API:"}</strong> {isEs ? "El Negocio es responsable de contratar y pagar directamente su propio acceso a la API de WhatsApp Business u otros canales de mensajería. Syntek AI no incluye ni cubre estos costos en su suscripción." : "The Business is responsible for contracting and paying directly for their own WhatsApp Business API access or other messaging channels. Syntek AI does not include or cover these costs in its subscription."}</p>
              <p className="mt-2"><strong>{isEs ? "4.5 Mora:" : "4.5 Late payment:"}</strong> {isEs ? "El incumplimiento de pago generará la suspensión del servicio tras 10 días hábiles sin regularización." : "Failure to pay will result in service suspension after 10 business days without regularization."}</p>
              <p className="mt-2"><strong>{isEs ? "4.6 Ajuste de precios:" : "4.6 Price adjustment:"}</strong> {isEs ? "Syntek AI podrá modificar sus precios con un aviso mínimo de 30 días por correo electrónico." : "Syntek AI may modify its prices with a minimum 30-day notice by email."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "5. Vigencia y Rescisión" : "5. Term and Termination"}</h2>
              <p><strong>5.1</strong> {isEs ? "El contrato tiene vigencia indefinida." : "The contract has indefinite term."}</p>
              <p className="mt-2"><strong>5.2</strong> {isEs ? "Cualquiera de las partes puede rescindir el contrato con 30 días de aviso por correo electrónico a" : "Either party may terminate the contract with 30 days notice by email to"} <a href="mailto:info@syntekhn.com" className="text-blue-600 hover:underline">info@syntekhn.com</a>.</p>
              <p className="mt-2"><strong>5.3</strong> {isEs ? "En caso de incumplimiento grave, Syntek AI puede suspender o cancelar el servicio de forma inmediata." : "In case of serious breach, Syntek AI may suspend or cancel the service immediately."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "6. Propiedad Intelectual" : "6. Intellectual Property"}</h2>
              <p>{isEs ? "Todo el software, diseño, código, metodologías y materiales de Syntek AI son propiedad exclusiva de Syntek AI. El Negocio no puede copiar, reproducir, modificar ni distribuir ningún elemento de la plataforma sin autorización expresa." : "All software, design, code, methodologies and materials of Syntek AI are the exclusive property of Syntek AI. The Business may not copy, reproduce, modify or distribute any element of the platform without express authorization."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "7. Confidencialidad" : "7. Confidentiality"}</h2>
              <p>{isEs ? "Toda información intercambiada entre las partes es confidencial. Los datos de los clientes del Negocio son privados y Syntek AI no los compartirá con terceros sin autorización expresa." : "All information exchanged between the parties is confidential. Business customer data is private and Syntek AI will not share it with third parties without express authorization."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "8. Disponibilidad" : "8. Availability"}</h2>
              <p>{isEs ? "Syntek AI no garantiza disponibilidad ininterrumpida del servicio. Pueden ocurrir interrupciones por mantenimiento, fallas técnicas u otros eventos fuera de nuestro control. No nos responsabilizamos por daños derivados de estas interrupciones." : "Syntek AI does not guarantee uninterrupted service availability. Interruptions may occur due to maintenance, technical failures or other events beyond our control. We are not responsible for damages arising from these interruptions."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "9. Responsabilidad del Negocio" : "9. Business Responsibility"}</h2>
              <p className="mb-2">{isEs ? "El Negocio es responsable de:" : "The Business is responsible for:"}</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>{isEs ? "Proveer información correcta para configurar los agentes IA" : "Providing correct information to configure AI agents"}</li>
                <li>{isEs ? "Realizar pruebas suficientes antes del lanzamiento" : "Performing sufficient testing before launch"}</li>
                <li>{isEs ? "Obtener el consentimiento de sus clientes para el tratamiento de datos" : "Obtaining customer consent for data processing"}</li>
                <li>{isEs ? "Cumplir con las leyes aplicables en su país de operación" : "Complying with applicable laws in their country of operation"}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "10. Independencia de las Partes" : "10. Independence of Parties"}</h2>
              <p>{isEs ? "Las partes son entidades independientes. Este contrato no crea relación laboral, societaria ni de representación entre ellas." : "The parties are independent entities. This contract does not create an employment, partnership or representation relationship between them."}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "11. Comunicaciones" : "11. Communications"}</h2>
              <p>{isEs ? "Todas las comunicaciones oficiales se realizarán por correo electrónico a" : "All official communications will be made by email to"} <a href="mailto:info@syntekhn.com" className="text-blue-600 hover:underline">info@syntekhn.com</a>.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">{isEs ? "12. Jurisdicción" : "12. Jurisdiction"}</h2>
              <p>{isEs ? "Cualquier controversia será resuelta bajo las leyes de Honduras. Para clientes en Estados Unidos se aplicarán adicionalmente las leyes federales correspondientes." : "Any dispute will be resolved under the laws of Honduras. For clients in the United States, corresponding federal laws will additionally apply."}</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
