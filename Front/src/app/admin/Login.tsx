import { useState } from 'react';
import { useNavigate } from 'react-router';

export function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:3001/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('admin_token', data.token);
        navigate('/admin/dashboard');
      } else {
        setError('Contraseña incorrecta');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-6 text-center">Acceso Admin</h2>
        {error && <div className="mb-4 p-3 bg-red-50 text-red-700 border border-red-200 rounded text-center text-sm font-medium">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
