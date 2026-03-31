import { motion } from 'motion/react';
import { Home, Car, Heart, Briefcase } from 'lucide-react';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

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

const allies = [
  { name: 'A Colpatria', logo: '/SegurosLogos/AColpatria.jpeg' },
  { name: 'Chubb', logo: '/SegurosLogos/Chubb.jpeg' },
  { name: 'Colmena', logo: '/SegurosLogos/Colmena.png' },
  { name: 'HDI', logo: '/SegurosLogos/HDI.jpeg' },
  { name: 'S Bolivar', logo: '/SegurosLogos/SBolivar.jpeg' },
  { name: 'S Mundial', logo: '/SegurosLogos/SMundial.jpeg' },
  { name: 'Sura', logo: '/SegurosLogos/Sura.jpeg' },
  { name: 'Zurich', logo: '/SegurosLogos/Zurich.jpeg' },
];

export function InsuranceTypes() {
  return (
    <>
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl mt-3 mb-4 text-slate-900">
              Nuestros Aliados
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Empresas que confían en nosotros
            </p>
          </motion.div>

          <Carousel className="w-full max-w-5xl mx-auto" plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}>
            <CarouselContent className="-ml-1">
              {allies.map((ally, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/5">
                  <div className="p-1">
                    <img src={ally.logo} alt={ally.name} className="w-full h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" style={{ mixBlendMode: 'multiply' }} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </>
  );
}