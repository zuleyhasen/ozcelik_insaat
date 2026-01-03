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

    video.muted = true;
    video.playsInline = true;

    const play = () => {
      video.play().catch(() => {});
    };

    play();
    document.addEventListener('touchstart', play, { once: true });

    return () => {
      document.removeEventListener('touchstart', play);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[100svh] overflow-hidden bg-black"
    >
      {/* VIDEO WRAPPER */}
      <div className="absolute inset-0 w-full h-[100svh] overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          controls={false}
          preload="auto"
          poster="/images/hero-construction.webp"
          className="w-full h-full object-cover pointer-events-none"
        >
          <source src="/images/hero-background.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full container mx-auto px-8 md:px-12 flex flex-col justify-end pb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div ref={ctaRef} className="flex gap-4">
            <a
              href="#projects"
              className="px-10 py-5 bg-[#ff6b00] text-black font-bold rounded-full"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#contact"
              className="px-10 py-5 border-2 border-white text-black font-bold rounded-full"
            >
              {t.hero.cta2}
            </a>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block text-black font-bold tracking-[0.3em]"
          >
            Modern Mimari & Güvenli Yapılar
          </motion.p>
        </div>
      </div>

      {/* SCROLL */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
}
