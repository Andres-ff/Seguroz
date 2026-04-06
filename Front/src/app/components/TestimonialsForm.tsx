import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

type TestimonialsFormProps = {
  onSuccess?: () => void;
};

export function TestimonialsForm({ onSuccess }: TestimonialsFormProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg(null);

    try {
      const response = await fetch('http://localhost:3001/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          role,
          content: description,
          rating,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.message ?? `Error ${response.status}`);
      }

      setStatus('sent');
      setName('');
      setRole('');
      setDescription('');
      setRating(5);
      if (onSuccess) {
        setTimeout(() => onSuccess(), 300);
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'No pudimos enviar el testimonio. Inténtalo de nuevo.');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-slate-100 border-slate-300 py-5 text-lg text-slate-900 placeholder:text-slate-500"
        />
        <Input
          type="text"
          placeholder="Cargo / Rol"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="bg-slate-100 border-slate-300 py-5 text-lg text-slate-900 placeholder:text-slate-500"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-slate-600">Calificación</label>
        <select
          className="w-full bg-slate-100 border border-slate-300 rounded-xl px-4 py-4 text-lg text-slate-900"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[5, 4, 3, 2, 1].map((value) => (
            <option key={value} value={value}>{value} estrellas</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-slate-600">Descripción</label>
        <textarea
          className="w-full bg-slate-100 border border-slate-300 rounded-3xl px-4 py-4 text-lg text-slate-900 placeholder:text-slate-500 min-h-[160px] resize-none"
          placeholder="Escribe tu experiencia aquí..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <Button
        size="lg"
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg shadow-lg shadow-blue-500/20"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar Testimonio'}
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>

      {status === 'sent' && (
        <p className="text-center text-emerald-600 text-sm">¡Gracias! Tu testimonio fue enviado y quedará pendiente de selección.</p>
      )}
      {status === 'error' && (
        <p className="text-center text-rose-600 text-sm">{errorMsg ?? 'No fue posible enviar el testimonio.'}</p>
      )}
    </form>
  );
}
