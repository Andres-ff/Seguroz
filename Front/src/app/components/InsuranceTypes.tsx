import { motion } from 'motion/react';
import { Home, Car, Heart, Briefcase } from 'lucide-react';
import { Button } from './ui/button';

const insuranceTypes = [
  {
    icon: Home,
    title: 'Seguro de Hogar Digital',
    description: 'Protección inteligente para tu hogar con monitoreo avanzado y prevención proactiva.',
    features: ['Monitoreo IoT', 'Alertas automáticas', 'Prevención inteligente', 'Asistencia 24/7'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1AdtlD8hcb-yqgrdcAmTAg7p-6LI-o2hCA&s',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Car,
    title: 'Seguro de Auto Avanzado',
    description: 'Cobertura especializada con telemetría y asistencia inteligente para tu vehículo.',
    features: ['Telemetría avanzada', 'Diagnóstico remoto', 'Asistencia vial', 'Cobertura total'],
    image: 'https://images.unsplash.com/photo-1759509326921-4ac86913cc99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnN1cmFuY2UlMjB2ZWhpY2xlfGVufDF8fHx8MTc3MzMzMTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Heart,
    title: 'Seguro de Salud Integral',
    description: 'Monitoreo continuo de salud con acceso a tecnología médica de última generación.',
    features: ['Telemedicina', 'Chequeos digitales', 'Red hospitalaria', 'Medicina preventiva'],
    image: 'https://images.unsplash.com/photo-1666886573199-88a2ed65470d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBtZWRpY2FsJTIwaW5zdXJhbmNlfGVufDF8fHx8MTc3MzMxOTIwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: Briefcase,
    title: 'Seguro Empresarial',
    description: 'Protección integral para negocios modernos con cobertura digital completa.',
    features: ['Ciberseguridad', 'Continuidad operativa', 'Protección de datos', 'Cobertura global'],
    image: 'https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NzMzMDk0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-600 to-blue-600',
  },
];

export function InsuranceTypes() {
  return (
    <section id="seguros" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Nuestros aliados
          </span>
          <h2 className="text-4xl lg:text-5xl mt-3 mb-4 text-slate-900">
            Seguros para el mundo moderno
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Soluciones innovadoras que evolucionan con las necesidades de hoy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {insuranceTypes.map((insurance, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-200 hover:border-blue-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={insurance.image}
                  alt={insurance.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${insurance.color} opacity-60`} />
                
                {/* Icon */}
                <motion.div
                  className="absolute top-6 left-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-blue-100"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <insurance.icon className="w-8 h-8 text-blue-600" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl mb-3 text-slate-900">
                  {insurance.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {insurance.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {insurance.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-slate-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white transition-all duration-300 border-0 shadow-lg shadow-blue-500/20">
                  Obtener cotización
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}