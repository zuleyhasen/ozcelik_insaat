import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: any;
  }
}

export interface MapViewProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  className?: string;
}

export function MapView({
  center,
  zoom = 16,
  className,
}: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markerRef = useRef<any>(null);

  useEffect(() => {
    if (!window.google || !mapRef.current) return;

    if (!mapInstance.current) {
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      });

      markerRef.current = new window.google.maps.Marker({
        position: center,
        map: mapInstance.current,
        title: "Ofis Konumu",
      });
    } else {
      mapInstance.current.setCenter(center);
      markerRef.current.setPosition(center);
    }
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={className ?? "w-full h-full"}
    />
  );
}
