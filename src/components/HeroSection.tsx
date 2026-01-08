import { useEffect, useRef } from 'react';
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

  // Detect mobile devices
  const isMobile =
    typeof navigator !== 'undefined' &&
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.8
        }
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
     VIDEO BEHAVIOR
     ====================== */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobile: native loop (most stable)
    if (isMobile) {
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.play().catch(() => { });
      return;
    }

    // Desktop: pause 3s on last frame then restart
    const handleEnded = () => {
      video.pause();
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 500);
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [isMobile]);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true" // iOS için kritik
          controls={false}
          disablePictureInPicture
          preload="auto"
          className="w-full h-full object-cover pointer-events-none"
          // iOS'ta çıkan oynatma işaretini CSS seviyesinde engellemek için
          style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
        >
          {/* Mobil Video (9:16) - Ekran 768px'den küçükse bu aktif olur */}
          <source
            src="/images/heroSection-Mobile.mp4"
            type="video/mp4"
            media="(max-width: 767px)"
          />
          {/* Masaüstü Video (16:9) */}
          <source
            src="/images/heroSection.mp4"
            type="video/mp4"
            media="(min-width: 768px)"
          />
        </video>


        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      {/* ======================
          CONTENT
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
          <ChevronDown size={24} className="text-primary" />
        </motion.div>
      </motion.div>
    </section >
  );
}
