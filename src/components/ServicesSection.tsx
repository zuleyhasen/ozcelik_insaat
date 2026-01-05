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
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const services = [
    {
      titleTr: 'Konut İnşaatı',
      titleEn: 'Residential Construction',
      descTr: 'Modern ve konforlu konut projelerimiz, en yüksek kalite standartlarına uygun olarak inşa edilmektedir. Yaşam alanlarınızı güven ve estetikle buluşturuyoruz.',
      descEn: 'Our modern and comfortable residential projects are built to the highest quality standards. We bring trust and aesthetics to your living spaces.',
      icon: BuildingIcon,
      image: '/images/services/residential.png'
    },
    {
      titleTr: 'Ticari Projeler',
      titleEn: 'Commercial Projects',
      descTr: 'İş merkezleri ve ticari binaları, işlevsellik ve estetik dengesi ile tasarlayıp inşa ediyoruz. Modern iş dünyasının ihtiyaçlarına profesyonel çözümler sunuyoruz.',
      descEn: 'We design and build commercial centers and office buildings with functionality and aesthetic balance. We offer professional solutions for the needs of the modern business world.',
      icon: SafetyIcon,
      image: '/images/services/commercial.png'
    },
    {
      titleTr: 'Kentsel Dönüşüm',
      titleEn: 'Urban Transformation',
      descTr: 'Kentsel dönüşüm projeleri kapsamında apartman inşaatları, modern mimari çizgileri ve kaliteli malzeme kullanımıyla estetik ve konforu bir arada sunmaktadır. Eski yapıları güvenli geleceğe taşıyoruz.',
      descEn: 'In our urban transformation projects, we build apartments with modern architectural lines and high-quality materials, combining aesthetics and comfort. We carry old structures to a safe future.',
      icon: QualityIcon,
      image: '/images/services/urban.png'
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              {language === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              {language === 'tr'
                ? 'Özçelik İnşaat olarak, her projede mükemmelliği hedefleyen profesyonel çözümler sunuyoruz.'
                : 'As Özçelik Construction, we offer professional solutions aiming for excellence in every project.'}
            </p>
          </motion.div>

          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-primary/10 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500" />
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                        <img
                          src={service.image}
                          alt={service.titleTr}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-xl text-primary mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                      {language === 'tr' ? service.titleTr : service.titleEn}
                    </h3>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-medium">
                      {language === 'tr' ? service.descTr : service.descEn}
                    </p>
                    <div className="pt-4">
                      <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary hover:gap-4 transition-all"
                      >
                        {language === 'tr' ? 'Detaylı Bilgi Al' : 'Get Detailed Info'}
                        <span className="text-xl">→</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
