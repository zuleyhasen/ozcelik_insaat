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
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Başlık */}
        <div className="mb-12 text-center">
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] text-foreground/80">
            {language === 'tr' ? 'Çözüm Ortaklarımız' : 'Our Partners'}
          </h3>
        </div>

        {/* Kısıtlanmış Akış Alanı */}
        <div className="relative max-w-10xl mx-auto px-10"> 
          
          {/* Sol taraf: Beyazdan şeffafa */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none" />
          
          {/* Sağ taraf: Şeffaftan beyaza */}
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white via-white to-transparent z-20 pointer-events-none" />

          {/* Logo Taşıyıcı */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-16 md:gap-24 items-center"
              animate={{ 
                x: ["0%", "-33.33%"] 
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="w-24 md:w-32 h-16 md:h-20 flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="max-w-full max-h-full object-contain pointer-events-none"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}