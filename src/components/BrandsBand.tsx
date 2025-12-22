import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const partnerLogos = [
  '/images/partners/abb.png',
  '/images/partners/anl.png',
  '/images/partners/bosh.png',
  '/images/partners/hilti.png',
  '/images/partners/legrand.png',
  '/images/partners/nippon.png',
  '/images/partners/philips.png',
];

export function BrandsBand() {
  const { language } = useLanguage();

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-16 md:py-20 bg-primary/5 border-y border-border">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            {language === 'tr' ? 'Çalıştığımız Markalar' : 'Our Partners'}
          </h3>
          <p className="text-muted-foreground">
            {language === 'tr'
              ? 'Kaliteli malzeme ve ekipman sağlayıcılarımız'
              : 'Quality material and equipment suppliers'}
          </p>
        </motion.div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 md:gap-16"
            animate={{ x: [0, -100 * partnerLogos.length + '%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center bg-background rounded-lg border border-border/50 hover:border-accent transition-colors duration-300 group"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="max-w-[80%] max-h-[80%] object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
