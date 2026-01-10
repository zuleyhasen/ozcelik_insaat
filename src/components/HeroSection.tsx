'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [isMobile]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* MOBILE IMAGE FALLBACK */}
        {isMobile && !videoReady && (
          <img
            src="/images/mobile.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* VIDEO */}
        <video
          key={isMobile ? 'mobile-video' : 'desktop-video'}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source
            src={
              isMobile
                ? '/images/heroSection-Mobile.mp4'
                : '/images/heroSection.mp4'
            }
            type="video/mp4"
          />
        </video>

        {/* OVERLAY (opsiyonel) */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div>
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            ÖZÇELİK İNŞAAT
          </h1>
          <p className="text-white text-lg md:text-xl max-w-xl mx-auto">
            Güvenli, modern ve estetik yapılar
          </p>
        </div>
      </div>
    </section>
  );
}
