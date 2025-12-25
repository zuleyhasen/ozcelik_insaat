import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

export function SafetyBand() {
  const { language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const content = {
    tr: {
      title: "GÜVENLİ VE PROFESYONEL EKİP",
      subtitle: "İş sağlığı ve güvenliği standartlarına tam uyumla, projelerimizi uzman kadromuzla hayata geçiriyoruz."
    },
    en: {
      title: "SAFE AND PROFESSIONAL TEAM",
      subtitle: "We bring our projects to life with our expert staff, in full compliance with occupational health and safety standards."
    }
  };

  const currentContent = language === 'tr' ? content.tr : content.en;

  return (
    <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/ozcelik_insaat.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-accent/20 rounded-full backdrop-blur-sm border border-accent/30">
              <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-accent" />
            </div>
          </div>
          <h2 className="text-2xl md:text-5xl font-black mb-4 tracking-tighter uppercase">
            {currentContent.title}
          </h2>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto font-medium px-4">
            {currentContent.subtitle}
          </p>
          <div className="mt-8 flex justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-1 w-8 bg-accent/50 rounded-full" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
