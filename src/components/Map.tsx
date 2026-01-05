import { useEffect, useRef } from "react";
import { usePersistFn } from "@/hooks/usePersistFn";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    google: any;
  }
}

const API_KEY = (import.meta as any).env.VITE_FRONTEND_FORGE_API_KEY;
const FORGE_URL = (import.meta as any).env.VITE_FRONTEND_FORGE_API_URL || "https://forge.butterfly-effect.dev";
const MAPS_PROXY_URL = `${FORGE_URL}/v1/maps/proxy`;

function loadMapScript() {
  return new Promise((resolve) => {
    if (window.google?.maps) { resolve(null); return; }
    const script = document.createElement("script");
    script.src = `${MAPS_PROXY_URL}/maps/api/js?key=${API_KEY}`;
    script.async = true;
    script.onload = () => resolve(null);
    document.head.appendChild(script);
  });
}


interface MapViewProps {
  className?: string;
  center: { lat: number; lng: number };
  zoom?: number;
}

export function MapView({ className, center = { lat: 41.027935, lng: 28.681473 }, zoom = 15 }: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  const init = usePersistFn(async () => {
    await loadMapScript();
    if (!mapContainer.current || !window.google?.maps) return;

    const position = { lat: Number(center.lat), lng: Number(center.lng) };

    // 1. Haritayı oluştur (Eğer daha önce oluşturulmadıysa)
    if (!mapRef.current) {
      mapRef.current = new window.google.maps.Map(mapContainer.current, {
        zoom,
        center: position,
      });

      // 2. PIN EKLEME GARANTİSİ: Harita tamamen yüklenip "boşta" kalınca pini ekle
      window.google.maps.event.addListenerOnce(mapRef.current, 'idle', () => {
        if (!markerRef.current) {
          markerRef.current = new window.google.maps.Marker({
            position: position,
            map: mapRef.current,
            title: "Ofis",
            animation: window.google.maps.Animation.DROP
          });
        }
      });
    } else {
      // Harita zaten varsa sadece pini ve merkezi güncelle
      mapRef.current.setCenter(position);
      if (markerRef.current) markerRef.current.setPosition(position);
    }
  });

  useEffect(() => {
    init();
  }, [init, center.lat, center.lng]);

  return (
    <div 
      ref={mapContainer} 
      className={cn("w-full h-[400px] rounded-xl overflow-hidden", className)} 
    />
  );
}