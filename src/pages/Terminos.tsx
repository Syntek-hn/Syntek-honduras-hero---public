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
        <div className="max-w-3xl mx-auto prose prose-slate prose-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{isEs ? "Términos y Condiciones" : "Terms and Conditions"}</h1>
          <p className="text-sm text-slate-500 mb-8">{isEs ? "Última actualización: abril 2026" : "Last updated: April 2026"}</p>

          <h2>{isEs ? "1. Definiciones" : "1. Definitions"}</h2>
          <ul>
            <li><strong>Syntek AI:</strong> {isEs ? "Empresa con sede en Honduras que desarrolla y opera la plataforma de automatización con inteligencia artificial para atención al cliente." : "Company headquartered in Honduras that develops and operates the AI-powered customer service automation platform."}</li>
            <li><strong>{isEs ? "El Negocio" : "The Business"}:</strong> {isEs ? "Persona física o moral que contrata los servicios de Syntek AI para automatizar la atención al cliente de su empresa." : "Individual or entity that contracts Syntek AI services to automate their customer service."}</li>
            <li><strong>{isEs ? "Empleados del Negocio" : "Business Employees"}:</strong> {isEs ? "Personas autorizadas por El Negocio para operar la plataforma como agentes humanos o administradores." : "Persons authorized by The Business to operate the platform as human agents or administrators."}</li>
            <li><strong>{isEs ? "Clientes del Negocio" : "Business Customers"}:</strong> {isEs ? "Usuarios finales que interactúan con el asistente de IA o con los agentes humanos a través de los canales de mensajería." : "End users who interact with the AI assistant or human agents through messaging channels."}</li>
          </ul>

          <h2>{isEs ? "2. Objeto del servicio" : "2. Service purpose"}</h2>
          <p>{isEs ? "Syntek AI provee una plataforma SaaS (Software como Servicio) de automatización con inteligencia artificial para la atención al cliente a través de WhatsApp, Facebook Messenger, Instagram y otros canales de mensajería. La plataforma permite configurar asistentes de IA, gestionar conversaciones, asignar agentes humanos y analizar métricas de rendimiento." : "Syntek AI provides a SaaS (Software as a Service) platform for AI-powered customer service automation through WhatsApp, Facebook Messenger, Instagram and other messaging channels. The platform allows configuring AI assistants, managing conversations, assigning human agents and analyzing performance metrics."}</p>

          <h2>{isEs ? "3. Proceso de contratación" : "3. Contracting process"}</h2>
          <p>{isEs ? "El Negocio puede registrarse en la plataforma y acceder a un periodo de prueba gratuito de 14 días naturales sin necesidad de proporcionar información de pago. Al finalizar el periodo de prueba, El Negocio podrá seleccionar y activar el plan que mejor se adapte a sus necesidades. El servicio se activa inmediatamente tras la confirmación del pago." : "The Business may register on the platform and access a free 14-day trial period without providing payment information. At the end of the trial, The Business may select and activate the plan that best fits their needs. Service is activated immediately upon payment confirmation."}</p>

          <h2>{isEs ? "4. Facturación y pagos" : "4. Billing and payments"}</h2>
          <p>{isEs ? "El cobro es mensual y corresponde a un monto fijo según el plan contratado:" : "Billing is monthly at a fixed rate according to the selected plan:"}</p>
          <ul>
            <li>Starter: $49 USD/{isEs ? "mes" : "month"}</li>
            <li>Pro: $99 USD/{isEs ? "mes" : "month"}</li>
            <li>Business: $199 USD/{isEs ? "mes" : "month"}</li>
            <li>Enterprise: $399 USD/{isEs ? "mes" : "month"}</li>
          </ul>
          <p>{isEs ? "No se realiza cobro adicional por cantidad de conversaciones, mensajes enviados o recibidos. El monto del plan cubre el acceso completo a las funcionalidades incluidas en cada nivel." : "There are no additional charges per conversation, messages sent or received. The plan amount covers full access to the features included in each tier."}</p>

          <h2>{isEs ? "5. Canales de mensajería y APIs externas" : "5. Messaging channels and external APIs"}</h2>
          <p>{isEs ? "El Negocio es responsable de contratar y pagar directamente su propia API de WhatsApp Business (a través de proveedores como Meta, YCloud, Twilio u otros) así como cualquier otro canal de mensajería que desee integrar. Syntek AI no incluye ni cubre estos costos en su suscripción. Syntek AI facilita la integración técnica pero no asume responsabilidad por los costos, políticas o disponibilidad de los proveedores de canales de mensajería." : "The Business is responsible for contracting and paying directly for their own WhatsApp Business API (through providers such as Meta, YCloud, Twilio or others) as well as any other messaging channel they wish to integrate. Syntek AI does not include or cover these costs in its subscription. Syntek AI facilitates technical integration but assumes no responsibility for costs, policies or availability of messaging channel providers."}</p>

          <h2>{isEs ? "6. Mora y suspensión" : "6. Late payment and suspension"}</h2>
          <p>{isEs ? "Si El Negocio no realiza el pago correspondiente dentro de los 10 días hábiles posteriores a la fecha de vencimiento, Syntek AI se reserva el derecho de suspender el acceso a la plataforma hasta que se regularice la situación de pago. Los datos del negocio se conservarán durante 30 días adicionales después de la suspensión, tras lo cual podrán ser eliminados permanentemente." : "If The Business fails to make payment within 10 business days after the due date, Syntek AI reserves the right to suspend platform access until the payment situation is regularized. Business data will be retained for 30 additional days after suspension, after which it may be permanently deleted."}</p>

          <h2>{isEs ? "7. Ajuste de precios" : "7. Price adjustments"}</h2>
          <p>{isEs ? "Syntek AI podrá ajustar los precios de sus planes con un aviso previo de 30 días naturales enviado por correo electrónico a la dirección registrada por El Negocio. El Negocio tendrá la opción de aceptar los nuevos precios o cancelar su suscripción antes de que entren en vigor." : "Syntek AI may adjust plan prices with 30 calendar days prior notice sent by email to the address registered by The Business. The Business will have the option to accept the new prices or cancel their subscription before they take effect."}</p>

          <h2>{isEs ? "8. Vigencia y rescisión" : "8. Term and termination"}</h2>
          <p>{isEs ? "La relación contractual tiene vigencia indefinida desde el momento de la contratación. Cualquiera de las partes podrá rescindir el contrato mediante aviso por escrito enviado por correo electrónico con al menos 30 días naturales de anticipación. En caso de rescisión, El Negocio tendrá acceso a la plataforma hasta el final del periodo de facturación vigente." : "The contractual relationship has indefinite term from the moment of contracting. Either party may terminate the contract by written notice sent by email with at least 30 calendar days advance notice. In case of termination, The Business will have access to the platform until the end of the current billing period."}</p>

          <h2>{isEs ? "9. Propiedad intelectual" : "9. Intellectual property"}</h2>
          <p>{isEs ? "Todo el software, código fuente, diseño, algoritmos, modelos de inteligencia artificial, marcas, logotipos y materiales de Syntek AI son propiedad exclusiva de Syntek AI. El Negocio adquiere únicamente un derecho de uso limitado y no exclusivo de la plataforma durante la vigencia de su suscripción. Queda prohibida la reproducción, modificación, distribución o ingeniería inversa de cualquier componente de la plataforma." : "All software, source code, design, algorithms, artificial intelligence models, trademarks, logos and materials of Syntek AI are the exclusive property of Syntek AI. The Business acquires only a limited, non-exclusive right to use the platform during their subscription term. Reproduction, modification, distribution or reverse engineering of any platform component is prohibited."}</p>

          <h2>{isEs ? "10. Confidencialidad" : "10. Confidentiality"}</h2>
          <p>{isEs ? "Los datos de El Negocio, incluyendo información de sus clientes, conversaciones, configuraciones y métricas, son privados y confidenciales. Syntek AI se compromete a no compartir, vender ni divulgar esta información a terceros, salvo que sea requerido por ley o autoridad competente. Las medidas de seguridad implementadas protegen la integridad y privacidad de los datos almacenados." : "The Business data, including customer information, conversations, configurations and metrics, are private and confidential. Syntek AI commits to not sharing, selling or disclosing this information to third parties, unless required by law or competent authority. Implemented security measures protect the integrity and privacy of stored data."}</p>

          <h2>{isEs ? "11. Disponibilidad del servicio" : "11. Service availability"}</h2>
          <p>{isEs ? "Syntek AI se esfuerza por mantener la plataforma operativa y disponible en todo momento, pero no garantiza una disponibilidad del 100%. Pueden ocurrir interrupciones por mantenimiento programado, actualizaciones del sistema o circunstancias fuera del control de Syntek AI. Se notificará con anticipación cuando sea posible sobre mantenimientos programados." : "Syntek AI strives to keep the platform operational and available at all times but does not guarantee 100% availability. Interruptions may occur due to scheduled maintenance, system updates or circumstances beyond Syntek AI's control. Advance notice will be provided when possible for scheduled maintenance."}</p>

          <h2>{isEs ? "12. Independencia de las partes" : "12. Independence of parties"}</h2>
          <p>{isEs ? "La relación entre Syntek AI y El Negocio es estrictamente de prestador de servicios y cliente. No existe relación laboral, sociedad, asociación ni representación entre las partes. Cada parte opera de manera independiente y es responsable de sus propias obligaciones fiscales, legales y laborales." : "The relationship between Syntek AI and The Business is strictly that of service provider and client. There is no employment relationship, partnership, association or representation between the parties. Each party operates independently and is responsible for its own tax, legal and labor obligations."}</p>

          <h2>{isEs ? "13. Jurisdicción y ley aplicable" : "13. Jurisdiction and applicable law"}</h2>
          <p>{isEs ? "Estos términos se rigen por las leyes de la República de Honduras. Para clientes en Latinoamérica, cualquier controversia será sometida a la jurisdicción de los tribunales competentes de Honduras. Para clientes en Estados Unidos, estos términos también son aplicables y cualquier disputa se resolverá conforme a la legislación hondureña, salvo que la ley local del estado del cliente requiera lo contrario." : "These terms are governed by the laws of the Republic of Honduras. For clients in Latin America, any dispute will be submitted to the jurisdiction of the competent courts of Honduras. For clients in the United States, these terms are also applicable and any dispute will be resolved under Honduran law, unless the local law of the client's state requires otherwise."}</p>

          <h2>{isEs ? "14. Contacto" : "14. Contact"}</h2>
          <p>{isEs ? "Para cualquier consulta relacionada con estos términos:" : "For any inquiries related to these terms:"}</p>
          <p><strong>Syntek AI</strong><br />Email: info@syntekhn.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
