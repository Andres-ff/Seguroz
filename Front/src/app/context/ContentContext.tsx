import React, { createContext, useContext, useEffect, useState } from 'react';

// Default fallback content to avoid empty page
const defaultContent = {
  hero: {
    title: 'Tu futuro y el de tu familia protegelo con nosotros',
    subtitle: 'Expertos en seguros de vida, gastos médicos y fianzas. Tu tranquilidad es nuestra prioridad.',
    primaryCTA: 'Cotiza Ahora',
    secondaryCTA: 'Conoce Más'
  },
  features: [
    { title: 'Atención 24/7', description: 'Estamos aquí cuando más nos necesitas, a cualquier hora del día o de la noche.' },
    { title: 'Cobertura Nacional', description: 'Nuestra red de proveedores médicos te protege en todo México.' },
    { title: 'Trámites Ágiles', description: 'Simplificamos los procesos para que obtengas tu seguro sin complicaciones.' },
    { title: 'Respaldo Confiable', description: 'Trabajamos con las aseguradoras más sólidas y prestigiosas del país.' }
  ],
  testimonials: []
};

type ContentContextType = {
  content: typeof defaultContent;
  refreshContent: () => void;
  isLoading: boolean;
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState(defaultContent);
  const [isLoading, setIsLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/content');
      if (response.ok) {
        const data = await response.json();
        // Merge with default in case some sections are missing
        setContent(prev => ({ ...prev, ...data }));
      }
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <ContentContext.Provider value={{ content, refreshContent: fetchContent, isLoading }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
