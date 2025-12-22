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

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="h-1 w-16 bg-accent rounded-full mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h2>
            <p className="text-lg text-muted-foreground">
              {t.about.subtitle}
            </p>
          </motion.div>

          {/* Main text */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              {t.about.description1}
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              {t.about.description2}
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {t.about.features.map((feature, index) => {
              const icons = [BuildingIcon, SafetyIcon, QualityIcon];
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-accent mb-4">
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
