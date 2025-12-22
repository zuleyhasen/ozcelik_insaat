import { motion, easeOut } from 'framer-motion';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero-construction.jpg)',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Subtle background text - company name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-8xl md:text-9xl font-bold text-white/5 select-none">
          Özçelik
        </h1>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-block">
            <div className="h-1 w-16 bg-accent rounded-full mx-auto mb-4" />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Güvenle İnşa Ediyoruz
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-100 font-light"
        >
          Yerel tecrübemiz ve profesyonel ekibimizle sağlam yapılar inşa ediyoruz.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300"
          >
            Projelerimizi Keşfedin
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
          >
            İletişime Geçin
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
