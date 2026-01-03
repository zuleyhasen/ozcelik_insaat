import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const ctaRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Butonlar ve Kaydır yazısı animasyonu
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  // Mobil cihazlarda video oynatmayı başlat
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Video oynatma başarısız');
      }
    };

    playVideo();

    const handleUserInteraction = () => {
      playVideo();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video - Tam görünürlük için filtre kaldırıldı */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedMetadata={(e) => {
            const video = e.currentTarget;
            video.play().catch(() => {
              console.log('Video oynatma başarısız');
            });
          }}
        >
          <source src="/images/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better readability if needed, but keeping it minimal as requested */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content - Sol Alt ve Sağ Alt Yerleşim */}
      <div className="relative z-10 w-full h-full container mx-auto px-10 md:px-12 flex flex-col justify-end pb-20 md:pb-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          
          {/* Sol Alt: Yazı ve Butonlar */}
          <div className="flex flex-col items-start gap-6 max-w-xl">
            <div ref={ctaRef} className="flex gap-4 flex-nowrap items-center">
              <a
                href="#projects"
                className="px-10 py-5 bg-[#ff6b00] hover:bg-[#e66000] text-black font-bold uppercase tracking-wider text-md rounded-full transition-all duration-300 shadow-lg active:scale-95"
              >
                {t.hero.cta1}
              </a>
              <a
                href="#contact"
                className="px-10 py-5 border-2 border-white/80 text-black font-bold uppercase tracking-wider text-md rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm active:scale-95"
              >
                {t.hero.cta2}
              </a>
            </div>
          </div>

          {/* Sağ Alt: Ekstra Yazı */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-right hidden md:block"
          >
            <p className="text-black text-xl font-bold uppercase tracking-[0.3em] opacity-80">
              Modern Mimari & Güvenli Yapılar
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
