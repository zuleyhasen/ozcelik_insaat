import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';

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

  const getProjectDescription = (project: (typeof projects)[0]) => {
    return language === 'tr' ? project.descriptionTr : project.descriptionEn;
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
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
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    onClick={() => {
                      setSelectedProject(project);
                      setSelectedImageIndex(0);
                    }}
                    className="group cursor-pointer rounded-lg overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                  >
                    {/* Project Image */}
                    <div className="relative h-80 overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={project.image}
                        alt={getProjectTitle(project)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold mb-2 mt-2">{getProjectTitle(project)}</h3>
                        <p className="text-foreground/70 mb-4">{getProjectDescription(project)}</p>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {getProjectLocation(project)}
                      </div>
                    </div>
                  </motion.div>
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
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    onClick={() => {
                      setSelectedProject(project);
                      setSelectedImageIndex(0);
                    }}
                    className="group cursor-pointer rounded-lg overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative flex flex-col h-full"
                  >
                    {/* Project Image */}
                    <div className="relative h-80 overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={project.image}
                        alt={getProjectTitle(project)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                      {/* Subtle ongoing indicator */}
                      <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {t.projects.ongoing}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold mb-2 mt-2">{getProjectTitle(project)}</h3>
                        <p className="text-foreground/70 mb-4">{getProjectDescription(project)}</p>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {getProjectLocation(project)}
                      </div>
                    </div>
                  </motion.div>
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
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-lg max-w-3xl w-full my-8"
            >
              {/* Close Button */}
              <div className="sticky top-0 flex justify-end p-4 bg-card border-b border-border z-10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="max-h-[calc(90vh-80px)] overflow-y-auto">
                {/* Gallery */}
                <div className="relative bg-muted h-96">
                  <img
                    src={selectedProject.gallery[selectedImageIndex]}
                    alt={getProjectTitle(selectedProject)}
                    className="w-full h-full object-cover"
                  />
                  {selectedProject.gallery.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {selectedProject.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === selectedImageIndex ? 'bg-white w-8' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                      {selectedProject.category}
                    </span>
                    <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                      {selectedProject.status === 'completed' ? t.projects.completed : t.projects.ongoing}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{getProjectTitle(selectedProject)}</h2>
                  <p className="text-foreground/70 mb-6 leading-relaxed">{getProjectDescription(selectedProject)}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">
                        {t.projects.location}
                      </h3>
                      <p className="text-lg">{getProjectLocation(selectedProject)}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">
                        {t.projects.category}
                      </h3>
                      <p className="text-lg">{selectedProject.category}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                  >
                    {t.projects.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
