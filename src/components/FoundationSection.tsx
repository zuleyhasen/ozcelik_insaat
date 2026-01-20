import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function FoundationSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const images = [
    { src: '/images/construction_photos/ozcelik-insaat-saglam-temel-1.webp', alt: 'Özçelik İnşaat Sağlam Temel Çalışması 1', span: 'col-span-2 row-span-2' },
    { src: '/images/construction_photos/ozcelik-insaat-saglam-temel-2.webp', alt: 'Özçelik İnşaat Sağlam Temel Çalışması 2', span: 'col-span-1 row-span-1' },
    { src: '/images/construction_photos/ozcelik-insaat-saglam-temel-3.webp', alt: 'Özçelik İnşaat Sağlam Temel Çalışması 3', span: 'col-span-1 row-span-1' },
    { src: '/images/construction_photos/ozcelik-insaat-saglam-temel-4.webp', alt: 'Özçelik İnşaat Sağlam Temel Çalışması 4', span: 'col-span-2 row-span-1' },
  ];

  return (
    <section id="foundation" className="py-20 md:py-32 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col gap-16"
        >
          {/* Başlık Bölümü */}
          <div className="max-w-3xl">
            <motion.div variants={itemVariants} className="mb-6">
              <div className="h-1.5 w-20 bg-primary rounded-full mb-6" />
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-foreground">
                SAĞLAM TEMELLER
              </h2>
              <p className="text-xl md:text-2xl font-bold text-primary uppercase tracking-widest">
                GELECEĞİ GÜVENLE İNŞA EDİYORUZ
              </p>
            </motion.div>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-foreground/70">
              Her projemizde en büyük önceliğimiz, yapının ömrünü ve güvenliğini belirleyen temel aşamasıdır. 
              Modern mühendislik teknikleri ve yüksek kaliteli malzemelerle, depreme dayanıklı ve uzun ömürlü 
              yapıların ilk adımını titizlikle atıyoruz.
            </motion.p>
          </div>

          {/* Fotoğraf Izgarası */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[700px]">
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative overflow-hidden rounded-2xl shadow-xl group ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-bold uppercase tracking-widest text-sm">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
