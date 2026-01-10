import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.projects, href: '#projects', id: 'projects' },
    { label: t.nav.apartmentGallery, href: '#apartmentGallery', id: 'apartmentGallery' },
    { label: t.nav.services, href: '#services', id: 'services' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/15 backdrop-blur-md shadow-lg ">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between h-5">
          {/* Logo - Hedef projedeki gibi büyük ve net */}
          <motion.a 
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-black tracking-tighter"
          >
            ÖZÇELİK İNŞAAT
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-10"
            >
              {menuItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors duration-300"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>

            <div className="flex items-center gap-6 border-l border-black/20 pl-6">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-white/10 p-8"
            >
              <div className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-white/10">
                   <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}