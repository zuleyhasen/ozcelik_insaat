'use client';

import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [vh, setVh] = useState<number | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ======================
     DEVICE CHECK
  ====================== */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* ======================
     REAL VIEWPORT HEIGHT
  ====================== */
  useEffect(() => {
    const updateVh = () => {
      setVh(window.innerHeight);
    };

    updateVh();
    window.addEventListener('resize', updateVh);
    window.addEventListener('orientationchange', updateVh);

    return () => {
      window.removeEventListener('resize', updateVh);
      window.removeEventListener('orientationchange', updateVh);
    };
  }, []);

  /* ======================
     DESKTOP ONLY
     VIDEO → CANVAS
  ====================== */
  useEffect(() => {
    if (isMobile) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;

    const render = () => {
      if (video.paused || video.ended) return;

      if (
        canvas.width !== video.videoWidth ||
        canvas.height !== video.videoHeight
      ) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      }

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      rafId = requestAnimationFrame(render);
    };

    const onPlay = () => {
      setVideoReady(true);
      render();
    };

    video.muted = true;
    video.addEventListener('play', onPlay);
    video.play().catch(() => {});

    return () => {
      video.removeEventListener('play', onPlay);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  return (
    <section
      id="home"
      style={{ height: vh ? `${vh}px` : '100vh' }}
      className="relative w-full overflow-hidden bg-black"
    >
      {/* ======================
          BACKGROUND
      ====================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* MOBILE – GIF */}
        {isMobile && (
          <img
            src="/images/heroSection-Mobile.gif"
            alt="Özçelik İnşaat İstanbul Kentsel Dönüşüm ve Güvenilir Yapılar"
            className="
              absolute inset-0
              w-full h-full
              object-cover
              -translate-y-[38px]
              scale-[1.05]
            "
          />
        )}

        {/* DESKTOP – HIDDEN VIDEO */}
        {!isMobile && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="auto"
            className="hidden"
            src="/images/heroSection.mp4"
            title="Özçelik İnşaat Kurumsal Tanıtım Videosu"
          />
        )}

        {/* DESKTOP – CANVAS */}
        {!isMobile && (
          <canvas
            ref={canvasRef}
            className={`
              absolute inset-0
              w-full h-full
              object-cover
              transition-opacity duration-700
              ${videoReady ? 'opacity-100' : 'opacity-0'}
            `}
          />
        )}

        {/* GRADIENT OVERLAY */}
        <div
          className="
            absolute inset-0 z-[1]
            bg-gradient-to-t
            from-black/80
            via-black/40
            to-black/10
          "
        />
      </div>

      {/* ======================
          CONTENT
      ====================== */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div>
          <h1 className="text-white text-[8vw] md:text-6xl font-black leading-tight tracking-tight uppercase drop-shadow-2xl">
            ÖZÇELİK İNŞAAT
          </h1>

          <p className="text-gray-200 text-base md:text-xl max-w-2xl mx-auto mt-6 mb-10">
            İstanbul'da Güvenli, Modern ve Estetik Kentsel Dönüşüm Projeleri
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="
                px-8 py-3 bg-[#ff6b00] hover:bg-[#e66000]
                text-white font-bold uppercase tracking-wider text-xs
                rounded-full transition-all duration-300
                shadow-lg hover:shadow-orange-500/30 active:scale-95
              "
            >
              Projelerimiz
            </a>

            <a
              href="#contact"
              className="
                px-8 py-3 border-2 border-white/80
                text-white font-bold uppercase tracking-wider text-xs
                rounded-full hover:bg-white hover:text-black
                transition-all duration-300 active:scale-95
              "
            >
              İletişim
            </a>
          </div>
        </div>
      </div>

      {/* ======================
          SCROLL INDICATOR
      ====================== */}
      <a
        href="#about"
        className="
          absolute bottom-10 left-1/2 -translate-x-1/2 z-20
          flex flex-col items-center
          opacity-80 hover:opacity-100 transition-opacity
        "
      >
        <span className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45 animate-bounce" />
      </a>
    </section>
  );
}
