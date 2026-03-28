import { motion } from 'motion/react';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { useContent } from '../context/ContentContext';

export function Hero() {
  const { content } = useContent();
  const heroData = content.hero;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Animated background circles */}
      <motion.div
  //...

        className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky-400/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full mb-6 shadow-sm"
          >
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">
              Soluciones innovadoras
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl mb-6 text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {heroData.title}
          </motion.h1>

          <motion.p
            className="text-xl text-slate-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {heroData.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-6 text-lg group border-0 shadow-lg shadow-blue-500/25">
              Cotizar ahora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-slate-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div>
              <div className="text-3xl text-blue-600 mb-1">+500K</div>
              <div className="text-sm text-slate-600">Clientes activos</div>
            </div>
            <div>
              <div className="text-3xl text-blue-600 mb-1">+3</div>
              <div className="text-sm text-slate-600"> Soluciones a tu disposición</div>
            </div>
            <div>
              <div className="text-3xl text-blue-600 mb-1">24/7</div>
              <div className="text-sm text-slate-600">Soporte disponible</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-blue-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1721042235332-45f89689cfba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWUlMjBpbnN1cmFuY2V8ZW58MXx8fHwxNzczMzAwODc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Familia feliz protegida"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-blue-600/20" />
          </motion.div>

          {/* Floating card */}
          <motion.div
            className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl shadow-blue-500/20 max-w-xs border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Shield className="w-6 h-6 text-white" />
                {/* <img src="/LOGO_METAL2.png" /> */}
              </div>
              <div>
                <div className="text-sm text-slate-600">Protección activa</div>
                <div className="text-lg text-slate-900">100% seguro</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}