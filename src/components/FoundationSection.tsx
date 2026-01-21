import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function FoundationSection() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const images = [
    { src: '/images/construction_photos/ozcelik-insaat-saglam-temel-1.webp', alt: 'Özçelik İnşaat Sağlam Temel Çalışması 1' },
    { src: '/images/construction_photos/ozcelik-insaat-saglam-temel-2.webp', alt: 'Özçelik İnşaat Sağlam Temel Çalışması 2' },
    { src: '/images/construction_photos/ozcelik-insaat-saglam-temel-3.webp', alt: 'Özçelik İnşaat Sağlam Temel Çalışması 3' },
    { src: '/images/construction_photos/ozcelik-insaat-saglam-temel-4.webp', alt: 'Özçelik İnşaat Sağlam Temel Çalışması 4' },
  ];

  return (
    <section id="saglam-temeller" className="py-20 md:py-32 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col gap-16"
        >
          {/* Başlık Bölümü */}
          <div className="max-w-none">
            <motion.div variants={itemVariants} className="mb-6">
              <div className="h-1.5 w-20 bg-primary rounded-full mb-6" />
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-foreground">
                {t.foundation.title}
              </h2>
              <p className="text-xl md:text-2xl font-bold text-primary uppercase tracking-widest">
                {t.foundation.subtitle}
              </p>
            </motion.div>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-foreground/70">
              {t.foundation.description}
            </motion.p>
          </div>

          {/* Fotoğraf Izgarası */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-fr md:h-[400px]">
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative overflow-hidden rounded-2xl shadow-xl group
        ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
        ${index === 3 ? 'md:col-span-2' : ''}
      `}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
