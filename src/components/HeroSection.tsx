'use client';

import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

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

      // Canvas boyutunu ekran boyutuna eşitle
      const containerWidth = canvas.parentElement?.clientWidth || window.innerWidth;
      const containerHeight = canvas.parentElement?.clientHeight || window.innerHeight;
      
      if (canvas.width !== containerWidth || canvas.height !== containerHeight) {
        canvas.width = containerWidth;
        canvas.height = containerHeight;
      }

      // Video'nun aspect ratio'sunu koru ve ekranı kapla (object-cover gibi)
      const videoAspect = video.videoWidth / video.videoHeight;
      const canvasAspect = canvas.width / canvas.height;

      let sx = 0, sy = 0, sWidth = video.videoWidth, sHeight = video.videoHeight;

      if (videoAspect > canvasAspect) {
        // Video daha geniş - yanlardaki fazlalığı kes
        sWidth = video.videoHeight * canvasAspect;
        sx = (video.videoWidth - sWidth) / 2;
      } else {
        // Video daha dar - üst/alttaki fazlalığı kes
        sHeight = video.videoWidth / canvasAspect;
        sy = (video.videoHeight - sHeight) / 2;
      }

      ctx.drawImage(video, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height);
      rafId = requestAnimationFrame(render);
    };

    const onPlay = () => {
      setVideoReady(true);
      render();
    };

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    video.muted = true;
    video.addEventListener('play', onPlay);
    window.addEventListener('resize', handleResize);
    video.play().catch(() => { });

    return () => {
      video.removeEventListener('play', onPlay);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* ======================
          BACKGROUND
      ====================== */}
      <div className="absolute w-full h-screen inset-0 z-0 overflow-hidden pointer-events-none">
        {/* MOBILE – GIF ONLY */}
        {isMobile && (
          <img
            src="/images/heroSection-Mobile.gif"
            alt="Özçelik İnşaat İstanbul Kentsel Dönüşüm ve Güvenilir Yapılar"
            className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full scale-110"
            style={{
              objectPosition: 'center center'
            }}
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
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
              videoReady ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* GRADIENT OVERLAY – ALT → ÜST */}
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

          {/* CTA BUTTONS */}
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