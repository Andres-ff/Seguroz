import { motion } from 'motion/react';
import { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { TestimonialsForm } from './TestimonialsForm';

export function Testimonials() {
  const { content } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const testimonials = (content.testimonials || [])
    .filter((testimonial: any) => testimonial.active)
    .slice(0, 3);

  const fallback = [
    {
      name: 'María González',
      role: 'Propietaria de vivienda',
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5,
      avatar: 'MG',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Conductor profesional',
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5,
      avatar: 'CR',
    },
    {
      name: 'Ana Martínez',
      role: 'Directora de empresa',
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5,
      avatar: 'AM',
    },
  ];

  const shownTestimonials = testimonials.length > 0 ? testimonials : fallback;

  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Testimonios
          </span>
          <h2 className="text-4xl lg:text-5xl mt-3 mb-4 text-slate-900">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Experiencias reales de quienes confían en nuestros servicios
          </p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition">
                Quiero dejar mi testimonio
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Comparte tu experiencia</DialogTitle>
                <DialogDescription>Cuéntanos tu opinión con nombre, cargo, descripción y estrellas.</DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <TestimonialsForm onSuccess={() => setIsOpen(false)} />
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {shownTestimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={testimonial.id ?? index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 h-full relative">
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30"
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Quote className="w-6 h-6 text-white" />
                </motion.div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-blue-500 text-blue-500" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg shadow-blue-500/20">
                    {testimonial.avatar || testimonial.name?.split(' ').map((word: string) => word[0]).join('').slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}