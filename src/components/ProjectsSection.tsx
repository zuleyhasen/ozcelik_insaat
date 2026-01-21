import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import { ChevronLeft, ChevronRight, X } from 'lucide-react'; 
import useEmblaCarousel from 'embla-carousel-react';

function ProjectCard({ project, onClick, t, getProjectTitle, getProjectLocation }: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    let interval: any;
    if (isHovered && emblaApi && project.gallery && project.gallery.length > 1) {
      interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered, emblaApi, project.gallery]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    emblaApi?.scrollPrev();
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    emblaApi?.scrollNext();
  };

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer rounded-lg overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative"
    >
      {/* Project Image Slider */}
      <div className="relative h-80 overflow-hidden bg-gray-50 flex-shrink-0">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {project.gallery.map((img: string, index: number) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 h-full relative">
                <img
                  src={img}
                  alt={`${getProjectTitle(project)} - Özçelik İnşaat Proje Görseli ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
        
        {/* Manual Navigation Arrows - Visible on Hover (Desktop) */}
        {project.gallery.length > 1 && (
          <div className="absolute inset-0 hidden md:flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <button
              onClick={handlePrev}
              className="p-1.5 bg-white/80 hover:bg-white rounded-full shadow-md text-black transition-all transform hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 bg-white/80 hover:bg-white rounded-full shadow-md text-black transition-all transform hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Progress Dots */}
        {project.gallery.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
            {project.gallery.map((_: any, idx: number) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-4 bg-accent' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {project.status === 'ongoing' && (
          <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {t.projects.ongoing}
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2 mt-2">{getProjectTitle(project)}</h3>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {getProjectLocation(project)}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const { language, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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

  const getProjectTitle = (project: (typeof projects)[0]) => {
    return language === 'tr' ? project.titleTr : project.titleEn;
  };

  const getProjectLocation = (project: (typeof projects)[0]) => {
    return language === 'tr' ? project.locationTr : project.locationEn;
  };

  return (
    <section id="projeler" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="h-1 w-16 bg-accent rounded-full mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.projects.title}</h2>
            <p className="text-lg text-muted-foreground">
              {t.projects.subtitle}
            </p>
          </motion.div>

          {/* Completed Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">{t.projects.completed}</h3>
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects
                .filter((p) => p.status === 'completed')
                .map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    t={t} 
                    getProjectTitle={getProjectTitle} 
                    getProjectLocation={getProjectLocation}
                    onClick={() => {
                      setSelectedProject(project);
                      setSelectedImageIndex(0);
                    }}
                  />
                ))}
            </motion.div>
          </motion.div>

          {/* Ongoing Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">{t.projects.ongoing}</h3>
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects
                .filter((p) => p.status === 'ongoing')
                .map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    t={t} 
                    getProjectTitle={getProjectTitle} 
                    getProjectLocation={getProjectLocation}
                    onClick={() => {
                      setSelectedProject(project);
                      setSelectedImageIndex(0);
                    }}
                  />
                ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-xl max-w-5xl w-full overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col md:flex-row h-full max-h-[90vh]">

                <div className="relative w-full md:w-3/5 lg:w-2/3 bg-zinc-100 flex flex-col border-r border-border">
                  
                  {/* Mobile Close Button - Only visible on mobile, positioned over image */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="md:hidden absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full z-50 backdrop-blur-sm"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Ana Görsel */}
                  <div className="relative flex-1 flex items-center justify-center overflow-hidden p-4 min-h-[300px] md:min-h-[500px]">
                    <motion.img
                      key={selectedImageIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      src={selectedProject.gallery[selectedImageIndex]}
                      alt={getProjectTitle(selectedProject)}
                      className="max-w-full max-h-full object-contain shadow-md rounded-sm"
                    />

                    {/* Kaydırma Butonları */}
                    {selectedProject.gallery.length > 1 && (
                      <>
                        <button
                          onClick={() => setSelectedImageIndex((prev) => (prev === 0 ? selectedProject.gallery.length - 1 : prev - 1))}
                          className="absolute left-4 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all text-black"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={() => setSelectedImageIndex((prev) => (prev === selectedProject.gallery.length - 1 ? 0 : prev + 1))}
                          className="absolute right-4 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all text-black"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Küçük Görseller (Thumbnails) */}
                  {selectedProject.gallery.length > 1 && (
                    <div className="p-4 bg-white border-t border-border overflow-x-auto">
                      <div className="flex gap-2 justify-center">
                        {selectedProject.gallery.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedImageIndex(idx)}
                            className={`relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                              selectedImageIndex === idx ? 'border-accent scale-105 shadow-sm' : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Detay Paneli */}
                <div className="w-full md:w-2/5 lg:w-1/3 p-8 overflow-y-auto bg-card">
                  <div className="hidden md:flex justify-end mb-6">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-secondary rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                        {selectedProject.status === 'completed' ? t.projects.completed : t.projects.ongoing}
                      </div>
                      <h2 className="text-3xl font-black uppercase tracking-tight mb-2">
                        {getProjectTitle(selectedProject)}
                      </h2>
                      <div className="flex items-center text-muted-foreground">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {getProjectLocation(selectedProject)}
                      </div>
                    </div>

                    <div className="h-px bg-border" />

                    <div className="space-y-4">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Proje Detayları</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        {language === 'tr' ? selectedProject.descriptionTr : selectedProject.descriptionEn}
                      </p>
                    </div>

                    <div className="pt-6">
                      <a
                        href="#contact"
                        onClick={() => setSelectedProject(null)}
                        className="block w-full py-4 bg-primary text-primary-foreground text-center font-bold uppercase tracking-widest rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        {t.nav.contactBtn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
