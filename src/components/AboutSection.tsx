import { motion } from 'framer-motion';
import { BuildingIcon, SafetyIcon, QualityIcon } from './ConstructionIcons';

export function AboutSection() {
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

  const features = [
    {
      icon: BuildingIcon,
      title: 'Sağlam Yapılar',
      description: 'Kaliteli malzeme ve profesyonel işçilikle uzun ömürlü yapılar inşa ediyoruz.',
    },
    {
      icon: SafetyIcon,
      title: 'Güvenlik Önceliği',
      description: 'Her projede en yüksek güvenlik standartlarını uygulamak bizim sorumluluğumuz.',
    },
    {
      icon: QualityIcon,
      title: 'Zamanında Teslim',
      description: 'Planlama ve koordinasyon ile tüm projelerimizi zamanında tamamlıyoruz.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hakkımızda</h2>
            <p className="text-lg text-muted-foreground">
              Yerel ölçekte faaliyet gösteren, işini titizlikle yapan bir inşaat firması
            </p>
          </motion.div>

          {/* Main text */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              Özçelik İnşaat, yerel ölçekte faaliyet gösteren, işini titizlikle yapan bir inşaat firmasıdır.
              Projelerimizde kalite, güvenlik ve zamanında teslim prensiplerini ön planda tutarız. Küçük ama
              deneyimli ekibimizle, her projeye aynı ciddiyetle yaklaşırız.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              Amacımız büyük söylemler değil, sağlam ve uzun ömürlü yapılar ortaya koymaktır. Her bir projemiz,
              müşteri memnuniyeti ve mühendislik mükemmelliğinin bir kanıtıdır.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
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
