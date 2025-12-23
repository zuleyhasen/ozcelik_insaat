import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const partnerLogos = [
  '/images/partners/kutahya.png',
  '/images/partners/camsan.png',
  '/images/partners/winsa.png',
  '/images/partners/firatpen.png',
];

export function BrandsBand() {
  const { language } = useLanguage();

  // Mobilde atlama olmaması için listeyi iyice uzatıyoruz (en az 8-10 kopya)
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Başlık */}
        <div className="mb-10 text-center">
          <h3 className="text-lg md:text-2xl font-bold uppercase tracking-[0.3em] text-foreground/80">
            {language === 'tr' ? 'Çözüm Ortaklarımız' : 'Our Partners'}
          </h3>
        </div>

        {/* Kısıtlanmış Alan */}
        <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden">

          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Akış Alanı */}
          <div className="flex">
            <motion.div
              className="flex gap-10 md:gap-32 items-center shrink-0"
              animate={{
                // X değeri logonun toplam genişliği kadar kaymalı
                x: ["0%", "-50%"]
              }}
              transition={{
                duration: 20, // Burayı düşürdükçe hızlanır (15 saniye şu an oldukça seri)
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="w-28 h-16 md:w-64 md:h-32 flex items-center justify-center shrink-0"
                >
                  <img
                    src={logo}
                    alt={`Partner ${index}`}
                    className="max-w-full max-h-full object-contain pointer-events-none transition-all"
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