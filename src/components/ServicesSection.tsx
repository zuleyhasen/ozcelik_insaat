import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { BuildingIcon, SafetyIcon, QualityIcon } from './ConstructionIcons';

export function ServicesSection() {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const services = [
    {
      titleTr: 'Konut İnşaatı',
      titleEn: 'Residential Construction',
      descTr: 'Modern ve konforlu konut projelerimiz, en yüksek kalite standartlarına uygun olarak inşa edilmektedir.',
      descEn: 'Our modern and comfortable residential projects are built to the highest quality standards.',
      icon: BuildingIcon,
    },
    {
      titleTr: 'Ticari Projeler',
      titleEn: 'Commercial Projects',
      descTr: 'İş merkezleri ve ticari binaları, işlevsellik ve estetik dengesi ile tasarlayıp inşa ediyoruz.',
      descEn: 'We design and build commercial centers and office buildings with functionality and aesthetic balance.',
      icon: SafetyIcon,
    },
    {
      titleTr: 'Restorasyon Çalışmaları',
      titleEn: 'Restoration Works',
      descTr: 'Eski binaların restorasyonunda deneyim ve uzmanlık ile kaliteli hizmet sunuyoruz.',
      descEn: 'We provide quality restoration services for older buildings with experience and expertise.',
      icon: QualityIcon,
    },
  ];

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
          <motion.div variants={itemVariants} className="mb-16">
            <div className="h-1 w-16 bg-accent rounded-full mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'tr'
                ? 'Özçelik İnşaat olarak sunduğumuz profesyonel inşaat hizmetleri'
                : 'Professional construction services we provide as Özçelik Construction'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              variants={imageVariants}
              className="rounded-lg overflow-hidden shadow-2xl"
            >
              <img
                src="/images/construction-workers.jpg"
                alt="Construction Workers"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Side - Services */}
            <motion.div variants={containerVariants} className="space-y-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-accent"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 text-accent">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-2">
                          {language === 'tr' ? service.titleTr : service.titleEn}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed">
                          {language === 'tr' ? service.descTr : service.descEn}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
