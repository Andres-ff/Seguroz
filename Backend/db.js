import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

// Initial default content structure
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
  ]
};

export async function getDbConnection() {
  return open({
    filename: path.join(process.cwd(), 'database.sqlite'),
    driver: sqlite3.Database
  });
}

export async function initDb() {
  const db = await getDbConnection();
  
  await db.exec(`
    CREATE TABLE IF NOT EXISTS content (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      section TEXT UNIQUE NOT NULL,
      data_json TEXT NOT NULL
    );
  `);

  for (const [section, data] of Object.entries(defaultContent)) {
    const existing = await db.get('SELECT section FROM content WHERE section = ?', [section]);
    if (!existing) {
      await db.run('INSERT INTO content (section, data_json) VALUES (?, ?)', [section, JSON.stringify(data)]);
    }
  }

  console.log('✅ Base de datos SQLite inicializada.');
  return db;
}
