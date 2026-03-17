import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

type QAItem = {
  id: number;
  question: string;
  keywords: string[];
  answer: string;
};

const KNOWLEDGE_BASE: QAItem[] = [
  {
    id: 1,
    question: '¿Qué es Tu Tranquilidad y qué ofrece?',
    keywords: ['qué es Tu Tranquilidad', 'que es Tu Tranquilidad', 'qué ofrece', 'que ofrece', 'seguros inteligentes'],
    answer:
      'Tu Tranquilidad es una plataforma de **seguros inteligentes** que usa tecnología avanzada para ofrecer protección rápida, gestión automatizada y tranquilidad para tu vida diaria.',
  },
  {
    id: 2,
    question: '¿Cómo es la experiencia de contratación?',
    keywords: ['contratación', 'cotizar', 'cotización', 'proceso', 'rápido'],
    answer:
      'La contratación es **rápida y sencilla**: puedes cotizar al instante, comparar planes y gestionar todo en línea sin papeleo innecesario.',
  },
  {
    id: 3,
    question: '¿Qué nivel de satisfacción tienen los clientes?',
    keywords: ['satisfacción', 'clientes activos', 'opiniones', 'valoración'],
    answer:
      'La página destaca más de **500K clientes activos** y un **98% de satisfacción**, lo que refleja la confianza de las personas en nuestros seguros.',
  },
  {
    id: 4,
    question: '¿Tienen soporte 24/7?',
    keywords: ['soporte', '24/7', 'ayuda', 'atención', 'disponible'],
    answer:
      'Sí, se indica que contamos con **soporte disponible 24/7**, para que puedas recibir ayuda en cualquier momento del día.',
  },
  {
    id: 5,
    question: '¿Qué tipo de protección ofrecen?',
    keywords: ['protección', 'cobertura', 'seguro', 'seguridad', 'protegida'],
    answer:
      'Ofrecemos **protección activa y 100% segura**, con coberturas diseñadas para familias y personas que buscan tranquilidad respaldada por tecnología.',
  },
];

type Message = {
  from: 'user' | 'bot';
  text: string;
};

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: 'bot',
      text: 'Hola, soy el asistente TutranquIA. Elige una de las preguntas para ver la respuesta según la información de esta página.',
    },
  ]);

  const handleSelectQuestion = (item: QAItem) => {
    const userMessage: Message = { from: 'user', text: item.question };
    const botMessage: Message = { from: 'bot', text: item.answer };

    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div>
              <div className="text-sm font-semibold">Asistente TutranquIA</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 max-h-80 overflow-y-auto px-4 py-3 space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl max-w-[85%] ${
                    msg.from === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-slate-100 text-slate-800 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            <div className="mt-3">
              <div className="text-xs font-semibold text-slate-500 mb-2">
                Preguntas frecuentes
              </div>
              <div className="flex flex-wrap gap-2">
                {KNOWLEDGE_BASE.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectQuestion(item)}
                    className="text-xs px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-300 text-slate-700 transition-colors"
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full shadow-xl shadow-blue-500/30 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-900 transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium hidden sm:inline">
            Pregunta sobre esta página
          </span>
        </button>
      )}
    </div>
  );
}


