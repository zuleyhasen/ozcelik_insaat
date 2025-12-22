import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      className="flex items-center gap-2 bg-secondary rounded-lg p-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <button
        onClick={() => setLanguage('tr')}
        className={`px-3 py-1 rounded font-medium text-sm transition-all duration-200 ${
          language === 'tr'
            ? 'bg-accent text-accent-foreground shadow-sm'
            : 'text-foreground/70 hover:text-foreground'
        }`}
      >
        TR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded font-medium text-sm transition-all duration-200 ${
          language === 'en'
            ? 'bg-accent text-accent-foreground shadow-sm'
            : 'text-foreground/70 hover:text-foreground'
        }`}
      >
        EN
      </button>
    </motion.div>
  );
}
