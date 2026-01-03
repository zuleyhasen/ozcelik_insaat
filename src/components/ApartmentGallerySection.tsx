import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const apartmentImages = [
  '/images/ornek_daire/1.webp', '/images/ornek_daire/2.webp', '/images/ornek_daire/3.webp',
  '/images/ornek_daire/4.webp', '/images/ornek_daire/5.webp', '/images/ornek_daire/6.webp',
  '/images/ornek_daire/7.webp', '/images/ornek_daire/8.webp', '/images/ornek_daire/9.webp',
  '/images/ornek_daire/10.webp', '/images/ornek_daire/11.webp', '/images/ornek_daire/12.webp',
  '/images/ornek_daire/13.webp', '/images/ornek_daire/14.webp', '/images/ornek_daire/15.webp',
  '/images/ornek_daire/16.webp',
];

export function ApartmentGallerySection() {
  const { language } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

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
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-foreground">
            {language === 'tr' ? 'Örnek Daire Galeri' : 'Sample Apartment Gallery'}
          </h2>
          <div className="h-1 w-12 bg-accent mx-auto" />
        </div>

        <div className="relative group">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {apartmentImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImageIndex(index)}
                className="flex-none w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1rem)] aspect-square cursor-pointer relative overflow-hidden bg-muted rounded-lg border border-border/50 snap-center"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
          >
            <ChevronRight size={24} />
          </button>
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
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-md" 
              onClick={() => setSelectedImageIndex(null)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl z-[110] flex items-center justify-center"
            >
              <button
                className="absolute -top-12 right-0 md:-right-12 text-white/60 hover:text-white transition-colors p-2"
                onClick={() => setSelectedImageIndex(null)}
              >
                <X size={32} />
              </button>

              <button
                onClick={handlePrev}
                className="absolute -left-4 md:-left-20 p-2 text-white/40 hover:text-accent transition-all hover:scale-125"
              >
                <ChevronLeft size={48} strokeWidth={1} />
              </button>

              <div className="w-full aspect-video md:aspect-[16/10] bg-black/20 shadow-2xl rounded-lg overflow-hidden border border-white/10 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImageIndex}
                    src={apartmentImages[selectedImageIndex]}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="max-w-full max-h-full object-contain"
                  />
                </AnimatePresence>
              </div>

              <button
                onClick={handleNext}
                className="absolute -right-4 md:-right-20 p-2 text-white/40 hover:text-accent transition-all hover:scale-125"
              >
                <ChevronRight size={48} strokeWidth={1} />
              </button>

              <div className="absolute -bottom-10 left-0 right-0 flex justify-between text-[10px] font-bold tracking-widest text-white/40 uppercase">
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
