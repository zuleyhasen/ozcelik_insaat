import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const apartmentImages = [
  '/images/ornek_daire/1.jpeg', '/images/ornek_daire/2.jpeg', '/images/ornek_daire/3.jpeg',
  '/images/ornek_daire/4.jpeg', '/images/ornek_daire/5.jpeg', '/images/ornek_daire/6.jpeg',
  '/images/ornek_daire/7.jpeg', '/images/ornek_daire/8.jpeg', '/images/ornek_daire/9.jpeg',
  '/images/ornek_daire/10.jpeg', '/images/ornek_daire/11.jpeg', '/images/ornek_daire/12.jpeg',
  '/images/ornek_daire/13.jpeg', '/images/ornek_daire/14.jpeg', '/images/ornek_daire/15.jpeg',
  '/images/ornek_daire/16.jpeg',
];

export function ApartmentGallerySection() {
  const { language } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % apartmentImages.length);
    }
  }, [selectedImageIndex]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? apartmentImages.length - 1 : prev! - 1
      );
    }
  }, [selectedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedImageIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-foreground">
            {language === 'tr' ? 'Örnek Daire Galeri' : 'Sample Apartment Gallery'}
          </h2>
          <div className="h-1 w-12 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {apartmentImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 0.98 }}
              onClick={() => setSelectedImageIndex(index)}
              className="group cursor-pointer relative aspect-square overflow-hidden bg-muted rounded-sm border border-border/50"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
          >
            {/* Şeffaf Arka Plan: bg-black/40 ve yoğun blur */}
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-md" 
              onClick={() => setSelectedImageIndex(null)}
            />

            {/* Galeri Penceresi */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl z-[110] flex items-center justify-center"
            >
              {/* Kapat Butonu (Üst Sağda) */}
              <button
                className="absolute -top-12 right-0 md:-right-12 text-foreground/60 hover:text-foreground transition-colors p-2"
                onClick={() => setSelectedImageIndex(null)}
              >
                <X size={32} />
              </button>

              {/* Sol Ok */}
              <button
                onClick={handlePrev}
                className="absolute -left-4 md:-left-20 p-2 text-foreground/40 hover:text-accent transition-all hover:scale-125"
              >
                <ChevronLeft size={48} strokeWidth={1} />
              </button>

              {/* Ana Görsel Kutusu */}
              <div className="w-full aspect-video md:aspect-[16/10] bg-background/80 shadow-2xl rounded-sm overflow-hidden border border-border flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImageIndex}
                    src={apartmentImages[selectedImageIndex]}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </AnimatePresence>
              </div>

              {/* Sağ Ok */}
              <button
                onClick={handleNext}
                className="absolute -right-4 md:-right-20 p-2 text-foreground/40 hover:text-accent transition-all hover:scale-125"
              >
                <ChevronRight size={48} strokeWidth={1} />
              </button>

              {/* Alt Bilgi */}
              <div className="absolute -bottom-10 left-0 right-0 flex justify-between text-[10px] font-bold tracking-widest text-foreground/40 uppercase">
                <span>{selectedImageIndex + 1} / {apartmentImages.length}</span>
                <span className="hidden md:inline">ÖZÇELİK İNŞAAT - ÖRNEK DAİRE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}