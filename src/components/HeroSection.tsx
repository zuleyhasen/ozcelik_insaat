import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        {
          y: 250,
          opacity: 0
        },
        {
          y: 6,
          opacity: 1,
          duration: 1.4,
          delay: 0.5
        }
      );
      // Alt Başlık
      gsap.fromTo(subtitleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.8 }
      );

      // Butonlar ve Kaydır yazısı
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 1.2 }
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
        // Mobil cihazlarda otomatik oynatma için gerekli
        await video.play();
      } catch (error) {
        console.log('Video oynatma başarısız, fallback görsel kullanılacak');
      }
    };

    // Sayfa yüklendiğinde video oynatmayı dene
    playVideo();

    // Kullanıcı etkileşimi sonrası da oynatmayı dene
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
    <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-zinc-100">
      {/* Background Video with Mobile Support */}
      <div className="absolute inset-0 z-0 hero-video-container">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          poster="/images/hero-construction.webp"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ filter: 'brightness(0.7)' }}
          onLoadedMetadata={(e) => {
            // Video yüklendikten sonra oynatmayı dene
            const video = e.currentTarget;
            video.play().catch(() => {
              console.log('Video oynatma başarısız');
            });
          }}
        >
          <source src="/images/hero-mobile.mp4" type="video/mp4" />
          <source src="/images/hero-background.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        {/* Fallback background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-construction.webp)',
            filter: 'brightness(0.7)',
            zIndex: -1
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-10 text-center">
        <div className="overflow-hidden mb-2">
          <h1
            ref={titleRef}
            className="flex flex-col items-center text-[8vw] md:text-[5rem] font-black text-white leading-[1.1] tracking-tighter uppercase drop-shadow-2xl pt-12 pb-8 -mt-12"
          >
            {t.hero.headline}

            <span className="text-[3vw] md:text-2xl font-light tracking-[0.2em] text-gray-100 mt-2 pt-3 pb-3 -mt-3">
              {t.hero.headline2}
            </span>
          </h1>
        </div>

        {/* Alt Başlık Alanı */}
        <div className="overflow-hidden mb-10">
          <p
            ref={subtitleRef}
            className="text-md md:text-xl text-gray-100 max-w-2xl mx-auto font-medium tracking-wide pt-6 pb-3 -mt-6"
          >
            {t.hero.subheading}
          </p>
        </div>

        <div ref={ctaRef} className="flex gap-4 justify-center flex-wrap mt-8">
          {/* Ana Buton: Turuncu ve Kıvrımlı */}
          <a
            href="#projects"
            className="px-10 py-4 bg-[#ff6b00] hover:bg-[#e66000] text-white font-bold uppercase tracking-wider text-sm rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/20 active:scale-95"
          >
            {t.hero.cta1}
          </a>

          {/* İkincil Buton: Şeffaf, Beyaz Kenarlıklı ve Kıvrımlı */}
          <a
            href="#contact"
            className="px-10 py-4 border-2 border-white/80 text-white font-bold uppercase tracking-wider text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm active:scale-95"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={24} className="text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
