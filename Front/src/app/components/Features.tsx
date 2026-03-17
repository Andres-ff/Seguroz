import { motion } from 'motion/react';
import { Shield, Clock, Users, Award, HeadphonesIcon, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Protección Inteligente',
    description: 'Sistema de seguridad avanzado que se adapta a tus necesidades específicas en tiempo real.',
    color: 'blue',
  },
  {
    icon: Clock,
    title: 'Respuesta Inmediata',
    description: 'Procesamiento automático de solicitudes con resolución rápida y eficiente las 24 horas.',
    color: 'blue',
  },
  {
    icon: Users,
    title: 'Planes Personalizados',
    description: 'Análisis avanzado para crear coberturas únicas adaptadas a tu perfil y necesidades.',
    color: 'sky',
  },
  {
    icon: Award,
    title: 'Certificación Global',
    description: 'Reconocidos internacionalmente por nuestra excelencia y estándares de calidad.',
    color: 'blue',
  },
  {
    icon: HeadphonesIcon,
    title: 'Asistente Digital',
    description: 'Soporte inteligente disponible en cualquier momento para resolver tus consultas.',
    color: 'blue',
  },
  {
    icon: Lock,
    title: 'Seguridad Avanzada',
    description: 'Encriptación de última generación que protege tus datos con máxima seguridad.',
    color: 'sky',
  },
];

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="tecnologia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Innovación y tecnología
          </span>
          <h2 className="text-4xl lg:text-5xl mt-3 mb-4 text-slate-900">
            Características que marcan la diferencia
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tecnología de vanguardia al servicio de tu seguridad y tranquilidad
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 h-full">
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${feature.color}-500/20`}
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}