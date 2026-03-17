import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
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

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en http://localhost:${PORT}`));