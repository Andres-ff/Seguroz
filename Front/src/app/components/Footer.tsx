import { motion } from 'motion/react';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Sobre nosotros', href: '#' },
      { label: 'Innovación', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Prensa', href: '#' },
    ],
    services: [
      { label: 'Hogar Digital', href: '#' },
      { label: 'Auto Avanzado', href: '#' },
      { label: 'Salud Integral', href: '#' },
      { label: 'Empresarial', href: '#' },
    ],
    support: [
      { label: 'Centro de ayuda', href: '#' },
      { label: 'Chat en vivo', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Contacto', href: '#' },
    ],
    legal: [
      { label: 'Privacidad', href: '#' },
      { label: 'Términos', href: '#' },
      { label: 'Seguridad', href: '#' },
      { label: 'Compliance', href: '#' },
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

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white mb-4">Compañía</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white mb-4">Soporte</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

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
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
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