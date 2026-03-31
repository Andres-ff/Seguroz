import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

// const benefits = [
//   'Análisis avanzado y cotización personalizada en minutos',
//   'Activación inmediata sin complicaciones ni trámites',
//   'Asesor digital disponible las 24 horas del día',
//   'Comparación inteligente entre todos nuestros planes',
// ];

export function CTA() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [insuranceType, setInsuranceType] = useState('Tipo de seguro');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg(null);

    try {
      const response = await fetch('http://localhost:3001/api/cotizacion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, phone, insuranceType }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.message ?? `Error ${response.status}`);
      }

      setStatus('sent');
      setFullName('');
      setEmail('');
      setPhone('');
      setInsuranceType('Tipo de seguro');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'No pudimos enviar la solicitud. Inténtalo de nuevo.'
      );
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-900 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage:
            'linear-gradient(45deg, #3b82f6 25%, transparent 25%, transparent 75%, #3b82f6 75%, #3b82f6), linear-gradient(45deg, #3b82f6 25%, transparent 25%, transparent 75%, #3b82f6 75%, #3b82f6)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px',
        }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl mb-6 text-white">
            ¿Listo para proteger tu futuro?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
             Escribemos y te contactamos para entregarte una solución ajustada a tus necesidades
          </p>
        </motion.div>

        {/* <motion.div
          className="grid md:grid-cols-2 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <CheckCircle2 className="w-6 h-6 text-blue-300 flex-shrink-0" />
              <span className="text-lg">{benefit}</span>
            </motion.div>
          ))}
        </motion.div> */}

        <motion.div
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
                <Input
                  type="text"
                  placeholder="Nombre completo"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="bg-white/95 border-white/30 py-6 text-lg text-slate-900 placeholder:text-slate-500"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/95 border-white/30 py-6 text-lg text-slate-900 placeholder:text-slate-500"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>
                <Input
                  type="tel"
                  placeholder="Teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white/95 border-white/30 py-6 text-lg text-slate-900 placeholder:text-slate-500"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}>
                <select
                  className="w-full bg-white/95 border border-white/30 rounded-md px-4 py-3 text-lg text-slate-900"
                  value={insuranceType}
                  onChange={(e) => setInsuranceType(e.target.value)}
                >
                  <option>Tipo de seguro</option>
                  <option>Hogar Digital</option>
                  <option>Auto Avanzado</option>
                  <option>Salud Integral</option>
                  <option>Empresarial</option>
                </select>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.9 }}>
              <Button
                size="lg"
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white py-7 text-lg group border-0 shadow-lg shadow-blue-500/30"
              >
                {status === 'sending' ? 'Enviando...' : 'Obtener cotización gratuita'}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {status === 'sent' && (
              <p className="text-center text-emerald-200 text-sm">
                ¡Listo! Tu solicitud fue enviada. Te contactaremos pronto.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-rose-200 text-sm">
                {errorMsg ?? 'No pudimos enviar la solicitud. Inténtalo de nuevo.'}
              </p>
            )}

            <p className="text-center text-blue-200 text-sm">
              Información protegida con seguridad avanzada • Sin compromiso
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}