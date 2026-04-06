import { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { useNavigate } from 'react-router';

type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  active: boolean;
};

export function Dashboard() {
  const { content, refreshContent } = useContent();
  const navigate = useNavigate();
  
  const [heroTitle, setHeroTitle] = useState(content.hero.title);
  const [heroSubtitle, setHeroSubtitle] = useState(content.hero.subtitle);
  const [featuresList, setFeaturesList] = useState(content.features);
  const [testimonialsList, setTestimonialsList] = useState<TestimonialItem[]>(content.testimonials || []);
  const [message, setMessage] = useState('');

  // Secure route
  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      navigate('/admin/login');
    }
  }, [navigate]);

  // Sync data when loaded
  useEffect(() => {
    setHeroTitle(content.hero.title);
    setHeroSubtitle(content.hero.subtitle);
    setFeaturesList(content.features);
    setTestimonialsList(content.testimonials || []);
  }, [content]);

  const saveHero = async () => {
    setMessage('Guardando Hero...');
    try {
      const res = await fetch('http://localhost:3001/api/content/hero', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
        },
        body: JSON.stringify({
          ...content.hero,
          title: heroTitle,
          subtitle: heroSubtitle
        })
      });
      if (res.ok) {
        setMessage('Hero guardado exitosamente!');
        refreshContent();
      } else {
        setMessage('Error al guardar');
      }
    } catch(e) {
      setMessage('Error de conexión');
    }
    setTimeout(() => setMessage(''), 3000);
  };

  const handleFeatureChange = (index: number, field: string, value: string) => {
    const newF = [...featuresList];
    newF[index] = { ...newF[index], [field]: value };
    setFeaturesList(newF);
  };

  const saveFeatures = async () => {
    setMessage('Guardando Características...');
    try {
      const res = await fetch('http://localhost:3001/api/content/features', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
        },
        body: JSON.stringify(featuresList)
      });
      if (res.ok) {
        setMessage('Características guardadas exitosamente!');
        refreshContent();
      } else {
        setMessage('Error al guardar');
      }
    } catch(e) {
      setMessage('Error de conexión');
    }
    setTimeout(() => setMessage(''), 3000);
  };

  const saveTestimonials = async () => {
    setMessage('Guardando testimonios...');
    try {
      const res = await fetch('http://localhost:3001/api/content/testimonials', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
        },
        body: JSON.stringify(testimonialsList)
      });
      if (res.ok) {
        setMessage('Testimonios guardados exitosamente!');
        refreshContent();
      } else {
        setMessage('Error al guardar testimonios');
      }
    } catch(e) {
      setMessage('Error de conexión');
    }
    setTimeout(() => setMessage(''), 3000);
  };

  const addTestimonial = () => {
    setTestimonialsList(prev => [
      ...prev,
      {
        id: Date.now(),
        name: '',
        role: '',
        content: '',
        rating: 5,
        active: false,
      }
    ]);
  };

  const handleTestimonialChange = (index: number, field: keyof TestimonialItem, value: TestimonialItem[keyof TestimonialItem]) => {
    const next = [...testimonialsList];
    next[index] = { ...next[index], [field]: value } as TestimonialItem;
    setTestimonialsList(next);
  };

  const removeTestimonial = (index: number) => {
    setTestimonialsList(prev => prev.filter((_, idx) => idx !== index));
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  return (
    <div className="bg-white shadow sm:rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Panel de Control / CRM</h2>
        <button onClick={handleLogout} className="text-red-600 hover:text-red-800 font-semibold">Cerrar Sesión</button>
      </div>

      {message && <div className="mb-6 p-4 bg-green-50 text-green-800 border border-green-200 rounded font-medium">{message}</div>}
      
      {/* Editor Hero */}
      <div className="mb-8 p-6 border rounded-xl bg-slate-50">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          Sección Principal (Inicio)
        </h3>
        <div className="mb-4">
          <label className="block text-slate-700 font-medium mb-2">Título Principal</label>
          <input 
            className="w-full border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
            value={heroTitle} 
            onChange={(e) => setHeroTitle(e.target.value)} 
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-700 font-medium mb-2">Subtítulo / Descripción</label>
          <textarea 
            className="w-full border border-slate-300 p-3 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
            value={heroSubtitle} 
            onChange={(e) => setHeroSubtitle(e.target.value)} 
          />
        </div>
        <button 
          onClick={saveHero} 
          className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 shadow-sm"
        >
          Guardar Cambios Inicio
        </button>
      </div>

      {/* Editor Features */}
      <div className="mb-8 p-6 border rounded-xl bg-slate-50">
        <h3 className="text-xl font-bold mb-4">Características / Servicios</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {featuresList.map((f, i) => (
            <div key={i} className="bg-white p-4 rounded-lg border shadow-sm">
              <label className="block text-sm text-slate-500 mb-1">Título {i + 1}</label>
              <input 
                className="w-full border border-slate-200 p-2 rounded mb-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none" 
                value={f.title} 
                onChange={(e) => handleFeatureChange(i, 'title', e.target.value)} 
              />
              <label className="block text-sm text-slate-500 mb-1">Descripción {i + 1}</label>
              <textarea 
                className="w-full border border-slate-200 p-2 rounded h-20 text-sm focus:ring-1 focus:ring-blue-500 outline-none" 
                value={f.description} 
                onChange={(e) => handleFeatureChange(i, 'description', e.target.value)} 
              />
            </div>
          ))}
        </div>
        <button 
          onClick={saveFeatures} 
          className="mt-6 bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 shadow-sm"
        >
          Guardar Todas las Características
        </button>
      </div>

      {/* Editor Testimonials */}
      <div className="mb-8 p-6 border rounded-xl bg-slate-50">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold">Testimonios</h3>
            <p className="text-sm text-slate-600">Selecciona hasta 3 testimonios para mostrar en la página.</p>
          </div>
          <button 
            onClick={addTestimonial}
            className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm"
          >
            Nuevo Testimonio
          </button>
        </div>

        <div className="space-y-4">
          {testimonialsList.map((testimonial, index) => (
            <div key={testimonial.id ?? index} className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="grid gap-4 md:grid-cols-[1.5fr_1fr] lg:grid-cols-[1.5fr_0.8fr]">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm text-slate-500 mb-1">Nombre</label>
                    <input
                      className="w-full border border-slate-200 p-2 rounded text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                      value={testimonial.name}
                      onChange={(e) => handleTestimonialChange(index, 'name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-500 mb-1">Cargo</label>
                    <input
                      className="w-full border border-slate-200 p-2 rounded text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                      value={testimonial.role}
                      onChange={(e) => handleTestimonialChange(index, 'role', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-500 mb-1">Calificación</label>
                    <select
                      className="w-full border border-slate-200 p-2 rounded text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                      value={testimonial.rating}
                      onChange={(e) => handleTestimonialChange(index, 'rating', Number(e.target.value))}
                    >
                      {[5, 4, 3, 2, 1].map((value) => (
                        <option key={value} value={value}>{value} estrellas</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-slate-500 mb-1">Descripción</label>
                    <textarea
                      className="w-full border border-slate-200 p-2 rounded h-28 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                      value={testimonial.content}
                      onChange={(e) => handleTestimonialChange(index, 'content', e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4">
                  <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                    <input
                      type="checkbox"
                      checked={testimonial.active}
                      onChange={(e) => handleTestimonialChange(index, 'active', e.target.checked)}
                      className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    Mostrar en página
                  </label>
                  <button
                    type="button"
                    onClick={() => removeTestimonial(index)}
                    className="text-rose-600 hover:text-rose-800 text-sm font-medium self-start"
                  >Eliminar</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={saveTestimonials}
          className="mt-6 bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 shadow-sm"
        >
          Guardar Testimonios
        </button>
      </div>
    </div>
  );
}
