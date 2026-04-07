import { motion } from 'motion/react';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Hogar Digital', href: '#' },
      { label: 'Auto Avanzado', href: '#' },
      { label: 'Salud Integral', href: '#' },
      { label: 'Empresarial', href: '#' },
    ],
    legal: [
      { label: 'Política de datos', href: '/politica-privacidad' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                {/* <Shield className="w-6 h-6 text-white" />
                  <span className="absolute text-white font-black text-[10px] leading-none mt-0.5">T</span> */}
                  <img src="/LOGO_METAL2.png" />
              </div>
              <span className="text-2xl text-white">Tu Tranquilidad</span>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tu socio de confianza en seguros inteligentes. Protegiendo lo que más importa con tecnología de vanguardia.
            </p>
            <div className="space-y-3">
              <a href="tel:+573166239919" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+57 3166239919</span>
              </a>
              <a href="mailto:info@tutranquilidad.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@tutranquilidad.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Barranquilla, Colombia</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Map */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-white mb-4">Nuestra ubicación</h3>
            <div className="overflow-hidden rounded-3xl border border-slate-800 shadow-xl shadow-slate-900/20">
              <iframe
                title="Ubicación de Tu Tranquilidad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.189579366753!2d-74.85591728437295!3d10.968541592074508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42ad5f2a3f209%3A0xf3b7d9fd93a6dfe0!2sBarranquilla%2C%20Atl%C3%A1ntico%2C%20Colombia!5e0!3m2!1ses!2sus!4v1700000000000"
                className="w-full h-72 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Andres Rodriguez y Johan Vega. Todos los derechos reservados.
          </p>
          
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}