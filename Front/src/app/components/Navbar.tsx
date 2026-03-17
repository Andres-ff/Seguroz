import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );
  
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(226, 232, 240, 0)', 'rgba(226, 232, 240, 1)']
  );

  const menuItems = [
    { label: 'Seguros', href: '#seguros' },
    { label: 'Tecnología', href: '#tecnologia' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
      style={{
        backgroundColor,
        borderBottom: `1px solid`,
        borderColor,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#inicio"
            className="flex items-center gap-2 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {/* <Shield className="w-6 h-6 text-white" />
                    <span className="absolute text-white font-black text-[10px] leading-none mt-0.5">T</span> */}
                    <img src="/LOGO_METAL2.png" />
            </motion.div>
            <span className="text-2xl text-slate-900">Tu Tranquilidad</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.div
            className="hidden md:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="tel:+573166239919" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+57 3166239919</span>
            </a>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-blue-500/20">
              Cotizar ahora
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden py-6 border-t border-slate-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 transition-colors py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white mt-4 border-0">
                Cotizar ahora
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}