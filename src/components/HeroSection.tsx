import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  /* ======================
     DEVICE CHECK
     ====================== */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ======================
     GSAP TEXT ANIMATIONS
     ====================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 250, opacity: 0 },
        { y: 6, opacity: 1, duration: 1.4, delay: 0.5 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 1.2 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  /* ======================
     VIDEO (DESKTOP ONLY)
     ====================== */
  useEffect(() => {
    if (!isMobile && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => { });
    }
  }, [isMobile]);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 w-full h-full">
        {isMobile ? (
          <img
            src="/images/heroSection-Mobile.gif"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/images/heroSection.mp4" type="video/mp4" />
          </video>
        )}

        {/* ÜSTTEN GENEL KARARTMA */}
        <div className="absolute inset-0 bg-black/20 z-[1]" />

        {/* ⬆️ AŞAĞIDAN YUKARI KARARTMA */}
        <div
          className="
      absolute inset-0 z-[2]
      bg-gradient-to-t
      from-black/80
      via-black/40
      to-transparent
      md:from-black/60
      md:via-black/30
    "
        />
      </div>


      {/* ======================
          CONTENT (ESKİ HALİ KORUNDU)
          ====================== */}
      <div className="relative z-10 container mx-auto px-10 text-center">
        <div className="overflow-hidden mb-2">
          <h1
            ref={titleRef}
            className="flex flex-col items-center text-[8vw] md:text-[5rem] font-black text-white leading-[1.1] tracking-tighter uppercase drop-shadow-2xl pt-12 pb-8 -mt-12"
          >
            {t.hero.headline}

            <span className="text-[3vw] md:text-2xl font-light tracking-[0.2em] text-gray-300 mt-2 pt-3 pb-3 -mt-3">
              {t.hero.headline2}
            </span>
          </h1>
        </div>

        <div className="overflow-hidden mb-10">
          <p
            ref={subtitleRef}
            className="text-md md:text-xl text-gray-200 max-w-2xl mx-auto font-medium tracking-wide pt-6 pb-3 -mt-6"
          >
            {t.hero.subheading}
          </p>
        </div>

        <div ref={ctaRef} className="flex gap-4 justify-center flex-wrap mt-8">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#ff6b00] hover:bg-[#e66000] text-white font-bold uppercase tracking-wider text-xs rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/20 active:scale-95"
          >
            {t.hero.cta1}
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white/80 text-white font-bold uppercase tracking-wider text-xs rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm active:scale-95"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* ======================
          SCROLL INDICATOR
          ====================== */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-white drop-shadow-md animate-bounce" />

        </motion.div>
      </motion.div>
    </section>
  );
}
