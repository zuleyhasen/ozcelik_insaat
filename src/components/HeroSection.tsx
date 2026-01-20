'use client';

import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      if (video.paused || video.ended) return;
      
      // Canvas boyutlarını video boyutlarına veya ekran boyutuna göre ayarla
      if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      }

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      animationFrameId = requestAnimationFrame(render);
    };

    const handlePlay = () => {
      setVideoReady(true);
      render();
    };

    video.addEventListener('play', handlePlay);
    
    // iOS için zorunlu oynatma
    const playVideo = () => {
      video.play().catch(err => {
        console.log("Autoplay prevented, retrying...", err);
        // Kullanıcı etkileşimi gerekebilir ama muted olduğu için genellikle çalışır
      });
    };

    playVideo();

    return () => {
      video.removeEventListener('play', handlePlay);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* MOBILE IMAGE FALLBACK */}
        {isMobile && !videoReady && (
          <img
            src="/images/mobile.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* HIDDEN VIDEO ELEMENT */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="hidden"
          src={isMobile ? '/images/heroSection-Mobile.mp4' : '/images/heroSection.mp4'}
        />

        {/* CANVAS FOR RENDERING VIDEO - NO CONTROLS POSSIBLE HERE */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4 pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            ÖZÇELİK İNŞAAT
          </h1>
          <p className="text-white text-lg md:text-xl max-w-xl mx-auto drop-shadow-md">
            Güvenli, modern ve estetik yapılar
          </p>
        </div>
      </div>
    </section>
  );
}
