import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-sm p-8 md:p-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Política de privacidad
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              El sitio web tytranquilidadenseguros.com es propiedad de Tu Tranquilidad en Seguros Ltda., que actúa como responsable del tratamiento de tus datos personales.
            </p>

            <p>
              Hemos adoptado esta Política de privacidad, que define cómo procesamos la información recopilada a través de nuestro sitio web, así como las razones por las que recopilamos ciertos datos personales. Debes leer esta Política antes de utilizar el sitio.
            </p>

            <p>
              Nos comprometemos a proteger tus datos personales, garantizando su confidencialidad y seguridad.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Información personal que recopilamos
            </h2>

            <p>
              Cuando visitas nuestro sitio web, recopilamos automáticamente cierta información sobre tu dispositivo, incluyendo el navegador web, dirección IP, zona horaria y algunas cookies instaladas. Además, recopilamos información sobre las páginas que visitas, servicios que consultas, sitios o términos de búsqueda que te remitieron y la forma en que interactúas con el sitio. A esta información la denominamos "Información del dispositivo".
            </p>

            <p>
              Adicionalmente, podemos recopilar datos personales que nos proporciones voluntariamente, como nombre, apellido, dirección, correo electrónico, número de teléfono u otros datos necesarios para la prestación de servicios de intermediación en seguros.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              ¿Por qué procesamos tus datos?
            </h2>

            <p>
              Procesamos únicamente los datos necesarios para el funcionamiento del sitio y la prestación de nuestros servicios. La información automática se utiliza para detectar posibles abusos y generar estadísticas de uso sin identificar usuarios individuales.
            </p>

            <p>
              Puedes navegar por el sitio sin revelar tu identidad. Sin embargo, algunas funcionalidades requieren datos personales. Si decides no proporcionarlos, es posible que no puedas acceder a ciertos servicios como formularios de contacto, solicitudes de cotización o comunicaciones.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Tus derechos
            </h2>

            <p>
              Dependiendo de la legislación aplicable, puedes ejercer los siguientes derechos:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Acceso a tus datos personales</li>
              <li>Rectificación de datos inexactos</li>
              <li>Supresión de datos</li>
              <li>Limitación del tratamiento</li>
              <li>Portabilidad de datos</li>
              <li>Oposición al tratamiento</li>
            </ul>

            <p>
              Para ejercer estos derechos, puedes comunicarte con nosotros a través de los datos de contacto indicados al final.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Transferencia de datos
            </h2>

            <p>
              Tu información puede ser transferida y almacenada en servidores ubicados fuera de tu país de residencia, incluyendo países que pueden no ofrecer el mismo nivel de protección de datos.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Enlaces a terceros
            </h2>

            <p>
              Nuestro sitio puede contener enlaces a páginas externas. No somos responsables de sus políticas de privacidad ni de sus prácticas. Se recomienda revisar dichas políticas antes de proporcionar información personal.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Seguridad de la información
            </h2>

            <p>
              Protegemos tu información mediante medidas administrativas, técnicas y físicas razonables para evitar accesos no autorizados, uso indebido o divulgación. No obstante, ninguna transmisión por internet es completamente segura.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Divulgación legal
            </h2>

            <p>
              Podremos divulgar información personal cuando sea requerido por la ley o cuando sea necesario para proteger nuestros derechos, garantizar la seguridad, prevenir fraudes o responder a requerimientos de autoridades.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Información de contacto
            </h2>

            <p>
              Si tienes preguntas sobre esta Política de privacidad o deseas ejercer tus derechos, puedes contactarnos a través de los canales oficiales de Tu Tranquilidad en Seguros Ltda.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}