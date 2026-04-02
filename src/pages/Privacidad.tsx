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
        <div className="max-w-3xl mx-auto prose prose-slate prose-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{isEs ? "Política de Privacidad" : "Privacy Policy"}</h1>
          <p className="text-sm text-slate-500 mb-8">{isEs ? "Última actualización: abril 2026" : "Last updated: April 2026"}</p>

          <p>{isEs ? "En Syntek AI nos tomamos en serio la privacidad de nuestros usuarios. Esta política describe cómo recopilamos, usamos y protegemos la información personal en nuestra plataforma." : "At Syntek AI we take our users' privacy seriously. This policy describes how we collect, use and protect personal information on our platform."}</p>

          <h2>{isEs ? "1. Datos que recopilamos" : "1. Data we collect"}</h2>
          <p>{isEs ? "Recopilamos los siguientes tipos de información:" : "We collect the following types of information:"}</p>
          <ul>
            <li><strong>{isEs ? "Datos del Negocio:" : "Business data:"}</strong> {isEs ? "Nombre de la empresa, correo electrónico, teléfono, dirección, configuración de la cuenta." : "Company name, email, phone, address, account configuration."}</li>
            <li><strong>{isEs ? "Datos de los empleados:" : "Employee data:"}</strong> {isEs ? "Nombre, correo electrónico, rol dentro de la plataforma." : "Name, email, role within the platform."}</li>
            <li><strong>{isEs ? "Datos de conversaciones:" : "Conversation data:"}</strong> {isEs ? "Mensajes intercambiados entre los clientes del negocio y los asistentes de IA o agentes humanos." : "Messages exchanged between business customers and AI assistants or human agents."}</li>
            <li><strong>{isEs ? "Datos de uso:" : "Usage data:"}</strong> {isEs ? "Métricas de rendimiento, estadísticas de conversaciones, horarios de actividad." : "Performance metrics, conversation statistics, activity schedules."}</li>
          </ul>

          <h2>{isEs ? "2. Finalidad del tratamiento" : "2. Purpose of processing"}</h2>
          <p>{isEs ? "Utilizamos la información recopilada para:" : "We use collected information to:"}</p>
          <ul>
            <li>{isEs ? "Proveer y mantener el servicio de la plataforma." : "Provide and maintain the platform service."}</li>
            <li>{isEs ? "Mejorar la calidad de las respuestas de los asistentes de IA." : "Improve the quality of AI assistant responses."}</li>
            <li>{isEs ? "Generar métricas y reportes de rendimiento para El Negocio." : "Generate performance metrics and reports for The Business."}</li>
            <li>{isEs ? "Enviar comunicaciones relacionadas con el servicio (actualizaciones, facturación, soporte)." : "Send service-related communications (updates, billing, support)."}</li>
            <li>{isEs ? "Cumplir con obligaciones legales aplicables." : "Comply with applicable legal obligations."}</li>
          </ul>

          <h2>{isEs ? "3. Proveedores terceros" : "3. Third-party providers"}</h2>
          <p>{isEs ? "Para operar nuestra plataforma utilizamos proveedores de infraestructura cloud, procesamiento de inteligencia artificial y servicios de mensajería. Estos proveedores procesan datos únicamente en la medida necesaria para prestar el servicio y están sujetos a sus propias políticas de privacidad y acuerdos de confidencialidad. Syntek AI selecciona proveedores que cumplen con estándares de seguridad reconocidos internacionalmente." : "To operate our platform we use cloud infrastructure providers, artificial intelligence processing and messaging services. These providers process data only to the extent necessary to provide the service and are subject to their own privacy policies and confidentiality agreements. Syntek AI selects providers that comply with internationally recognized security standards."}</p>

          <h2>{isEs ? "4. Responsabilidad del Negocio" : "4. Business responsibility"}</h2>
          <p>{isEs ? "El Negocio es responsable de obtener el consentimiento necesario de sus propios clientes para el tratamiento de datos personales a través de la plataforma. Syntek AI actúa como encargado del tratamiento de los datos de los clientes del negocio, mientras que El Negocio actúa como responsable del tratamiento." : "The Business is responsible for obtaining necessary consent from their own customers for personal data processing through the platform. Syntek AI acts as data processor for business customer data, while The Business acts as data controller."}</p>

          <h2>{isEs ? "5. Decisiones automatizadas" : "5. Automated decisions"}</h2>
          <p>{isEs ? "La plataforma utiliza inteligencia artificial para tomar decisiones automatizadas, incluyendo:" : "The platform uses artificial intelligence for automated decisions, including:"}</p>
          <ul>
            <li>{isEs ? "Calificación de leads según el comportamiento del cliente." : "Lead scoring based on customer behavior."}</li>
            <li>{isEs ? "Segmentación de contactos por tipo, actividad e interés." : "Contact segmentation by type, activity and interest."}</li>
            <li>{isEs ? "Derivación automática a agentes humanos cuando la IA detecta que es necesario." : "Automatic routing to human agents when the AI detects it is necessary."}</li>
            <li>{isEs ? "Clasificación de intenciones del cliente para dirigir la conversación al agente adecuado." : "Classification of customer intents to route the conversation to the appropriate agent."}</li>
          </ul>
          <p>{isEs ? "El Negocio puede configurar estas reglas y el cliente del negocio puede solicitar intervención humana en cualquier momento." : "The Business can configure these rules and the business customer can request human intervention at any time."}</p>

          <h2>{isEs ? "6. Derechos del usuario" : "6. User rights"}</h2>
          <p>{isEs ? "Los usuarios tienen los siguientes derechos sobre sus datos personales:" : "Users have the following rights over their personal data:"}</p>
          <ul>
            <li><strong>{isEs ? "Acceso:" : "Access:"}</strong> {isEs ? "Solicitar una copia de los datos personales que tenemos." : "Request a copy of the personal data we hold."}</li>
            <li><strong>{isEs ? "Rectificación:" : "Rectification:"}</strong> {isEs ? "Corregir datos inexactos o incompletos." : "Correct inaccurate or incomplete data."}</li>
            <li><strong>{isEs ? "Eliminación:" : "Deletion:"}</strong> {isEs ? "Solicitar la eliminación de datos personales." : "Request deletion of personal data."}</li>
            <li><strong>{isEs ? "Portabilidad:" : "Portability:"}</strong> {isEs ? "Recibir los datos en un formato estructurado y transferible." : "Receive data in a structured, transferable format."}</li>
          </ul>
          <p>{isEs ? "Estos derechos aplican conforme al GDPR para usuarios en Europa y al CCPA para residentes de California, Estados Unidos. Para ejercer estos derechos, contacta a info@syntekhn.com." : "These rights apply under GDPR for users in Europe and CCPA for California residents, United States. To exercise these rights, contact info@syntekhn.com."}</p>

          <h2>{isEs ? "7. Seguridad de los datos" : "7. Data security"}</h2>
          <p>{isEs ? "Implementamos medidas de seguridad técnicas y organizativas para proteger los datos contra acceso no autorizado, pérdida, alteración o divulgación. Esto incluye cifrado de datos en tránsito y en reposo, control de acceso basado en roles y monitoreo continuo de la infraestructura." : "We implement technical and organizational security measures to protect data against unauthorized access, loss, alteration or disclosure. This includes encryption of data in transit and at rest, role-based access control and continuous infrastructure monitoring."}</p>

          <h2>{isEs ? "8. Cumplimiento legal" : "8. Legal compliance"}</h2>
          <p>{isEs ? "Syntek AI cumple con las leyes de protección de datos de Honduras, las regulaciones aplicables en Estados Unidos (incluyendo CCPA para California) y las normativas internacionales relevantes. Nos comprometemos a adaptar nuestras prácticas conforme evolucionen las regulaciones." : "Syntek AI complies with Honduras data protection laws, applicable United States regulations (including CCPA for California) and relevant international regulations. We commit to adapting our practices as regulations evolve."}</p>

          <h2>{isEs ? "9. Contacto" : "9. Contact"}</h2>
          <p>{isEs ? "Para consultas sobre privacidad o para ejercer tus derechos:" : "For privacy inquiries or to exercise your rights:"}</p>
          <p><strong>Syntek AI</strong><br />Email: info@syntekhn.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
