import { useState } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.projects, href: '#projects', id: 'projects' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "https://instagram.com/ozcelikinsaat", label: "Instagram" },
    { icon: <MessageCircle size={20} />, href: "https://wa.me/905000000000", label: "WhatsApp" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/15 backdrop-blur-md shadow-lg ">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <motion.a 
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img 
              src="/images/logo.png" 
              alt="ÖZÇELİK İNŞAAT" 
              className="h-12 md:h-16 w-auto object-contain brightness-0 invert"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-8"
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

            {/* Social Icons */}
            <div className="flex items-center gap-4 border-l border-black/20 pl-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
              <div className="ml-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
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
                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                   <LanguageSwitcher />
                   <div className="flex gap-4">
                     {socialLinks.map((link) => (
                       <a
                         key={link.label}
                         href={link.href}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="hover:text-primary transition-colors"
                       >
                         {link.icon}
                       </a>
                     ))}
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
