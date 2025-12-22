import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const apartmentImages = [
  '/images/ornek_daire/1.jpeg',
  '/images/ornek_daire/2.jpeg',
  '/images/ornek_daire/3.jpeg',
  '/images/ornek_daire/4.jpeg',
  '/images/ornek_daire/5.jpeg',
  '/images/ornek_daire/6.jpeg',
  '/images/ornek_daire/7.jpeg',
  '/images/ornek_daire/8.jpeg',
  '/images/ornek_daire/9.jpeg',
  '/images/ornek_daire/10.jpeg',
  '/images/ornek_daire/11.jpeg',
  '/images/ornek_daire/12.jpeg',
  '/images/ornek_daire/13.jpeg',
  '/images/ornek_daire/14.jpeg',
  '/images/ornek_daire/15.jpeg',
  '/images/ornek_daire/16.jpeg',
];

export function ApartmentGallerySection() {
  const { language } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % apartmentImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? apartmentImages.length - 1 : selectedImageIndex - 1
      );
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <div className="h-1 w-16 bg-accent rounded-full mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'tr' ? 'Örnek Daireler' : 'Sample Apartments'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Projelerimizde yer alan modern dairelerin iç mekan tasarımını ve kalitesini gösteren örnek görseller.'
                : 'Sample visuals showcasing the interior design and quality of modern apartments in our projects.'}
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {apartmentImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => setSelectedImageIndex(index)}
                className="group cursor-pointer rounded-lg overflow-hidden bg-muted aspect-square"
              >
                <img
                  src={image}
                  alt={`Sample apartment ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh]"
            >
              {/* Image */}
              <img
                src={apartmentImages[selectedImageIndex]}
                alt={`Sample apartment ${selectedImageIndex + 1}`}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              {apartmentImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg text-sm font-medium">
                {selectedImageIndex + 1} / {apartmentImages.length}
              </div>

              {/* Thumbnail Navigation */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-xs px-4">
                {apartmentImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      index === selectedImageIndex
                        ? 'border-accent scale-110'
                        : 'border-white/30 hover:border-white/60'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
