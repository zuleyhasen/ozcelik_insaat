import { motion } from 'framer-motion';
import { BuildingIcon, SafetyIcon, QualityIcon } from './ConstructionIcons';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-8">
              <div className="h-1.5 w-20 bg-primary rounded-full mb-6" />
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-foreground">
                {t.about.title}
              </h2>
              <p className="text-xl md:text-2xl font-bold text-primary uppercase tracking-widest mb-8">
                {t.about.subtitle}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 mb-12">
              <p className="text-lg leading-relaxed text-foreground/80 font-medium">
                {t.about.description1}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {t.about.features.map((feature: any, index: number) => {
                const icons = [BuildingIcon, SafetyIcon, QualityIcon];
                const Icon = icons[index];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex flex-col items-center text-center p-4 rounded-xl bg-zinc-50 border border-zinc-100"
                  >
                    <div className="text-primary mb-3">
                      <Icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-wider">{feature.title}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Visuals */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              variants={imageVariants}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img
                src="/images/about/about.webp"
                alt="Modern Architecture"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 z-20 hidden md:block w-72 h-72 rounded-2xl overflow-hidden border-8 border-white shadow-2xl"
            >
              <img
                src="/images/about/team.webp"
                alt="Construction Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
