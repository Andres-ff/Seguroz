import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { initDb, getDbConnection } from './db.js';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-123';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/cotizacion', async (req, res) => {
  const { fullName, email, phone, insuranceType } = req.body;

  if (!fullName || !email) {
    return res.status(400).json({ message: 'Nombre y correo son requeridos.' });
  }

  try {
    await transporter.sendMail({
      from: `"Tu Tranquilidad" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: 'Nueva solicitud de cotización',
      html: `
        <h2>Nueva solicitud de cotización</h2>
        <p><strong>Nombre:</strong> ${fullName}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || '-'}</p>
        <p><strong>Tipo de seguro:</strong> ${insuranceType || '-'}</p>
      `,
    });

    return res.status(200).json({ message: 'Cotización enviada correctamente.' });
  } catch (err) {
    console.error('Error enviando correo:', err);
    return res.status(500).json({ message: 'Error al enviar el correo.' });
  }
});

app.post('/api/testimonials', async (req, res) => {
  const { name, role, content, rating } = req.body;

  if (!name || !role || !content || !rating) {
    return res.status(400).json({ message: 'Nombre, cargo, descripción y estrellas son requeridos.' });
  }

  try {
    const db = await getDbConnection();
    const row = await db.get('SELECT data_json FROM content WHERE section = ?', ['testimonials']);
    const testimonials = row ? JSON.parse(row.data_json) : [];
    const newTestimonial = {
      id: Date.now(),
      name,
      role,
      content,
      rating: Number(rating),
      active: false,
      createdAt: new Date().toISOString(),
    };
    testimonials.push(newTestimonial);
    await db.run('REPLACE INTO content (section, data_json) VALUES (?, ?)', ['testimonials', JSON.stringify(testimonials)]);
    return res.status(201).json({ message: 'Testimonio enviado correctamente.', testimonial: newTestimonial });
  } catch (err) {
    console.error('Error guardando testimonio:', err);
    return res.status(500).json({ message: 'Error al guardar el testimonio.' });
  }
});

app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Contraseña incorrecta' });
  }
});

app.get('/api/content', async (req, res) => {
  try {
    const db = await getDbConnection();
    const rows = await db.all('SELECT section, data_json FROM content');
    const content = {};
    rows.forEach(row => {
      content[row.section] = JSON.parse(row.data_json);
    });
    res.json(content);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error cargando contenido' });
  }
});

// Middleware for admin verification
const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No Autorizado' });

  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: 'Token Inválido' });
  }
};

app.put('/api/content/:section', verifyAdmin, async (req, res) => {
  try {
    const { section } = req.params;
    const data = req.body;
    const db = await getDbConnection();

    const existing = await db.get('SELECT section FROM content WHERE section = ?', [section]);
    if (existing) {
      await db.run('UPDATE content SET data_json = ? WHERE section = ?', [JSON.stringify(data), section]);
    } else {
      await db.run('INSERT INTO content (section, data_json) VALUES (?, ?)', [section, JSON.stringify(data)]);
    }
    res.json({ message: 'Contenido actualizado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error actualizando contenido' });
  }
});

const PORT = process.env.PORT ?? 3001;

// Initialize DB then start server
initDb().then(() => {
  app.listen(PORT, () => console.log(`✅ Servidor corriendo en http://localhost:${PORT}`));
}).catch(err => {
  console.error('Error inicializando db', err);
});