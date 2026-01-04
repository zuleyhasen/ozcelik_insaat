import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      video.play().catch(() => {
        console.log("Otomatik oynatma engellendi, etkileşim bekleniyor.");
      });
    };

    attemptPlay();
    document.addEventListener('touchstart', attemptPlay, { once: true });
    return () => document.removeEventListener('touchstart', attemptPlay);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[100dvh] overflow-hidden bg-black"
    >
      {/* VIDEO WRAPPER */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          controls={false}
          disablePictureInPicture
          preload="auto"
          className="w-full h-full object-cover pointer-events-none"
          style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }} 
        >
          <source 
            src="/images/hero-backgroundMobile.mp4" 
            type="video/mp4" 
            media="(max-width: 767px)" 
          />
          <source 
            src="/images/hero-background.mp4" 
            type="video/mp4" 
            media="(min-width: 768px)" 
          />
        </video>

        {/* GRADIENT OVERLAY (Aşağı doğru kararma) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-[1]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full container mx-auto px-6 md:px-12 flex flex-col justify-end pb-24 md:pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="#projects"
              className="px-10 py-5 bg-[#ff6b00] text-black font-bold rounded-full text-center active:scale-95 transition-all hover:bg-[#e66000]"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#contact"
              className="px-10 py-5 border-2 border-white text-white font-bold rounded-full text-center active:scale-95 transition-all hover:bg-white/10"
            >
              {t.hero.cta2}
            </a>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block text-white font-bold tracking-[0.3em] uppercase text-sm"
          >
            Modern Mimari & Güvenli Yapılar
          </motion.p>
        </div>
      </div>

      {/* SCROLL ICON */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}