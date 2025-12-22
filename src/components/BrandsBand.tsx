import { motion } from 'framer-motion';

const brands = [
  { id: 1, name: 'Çelik Yapı' },
  { id: 2, name: 'Beton Plus' },
  { id: 3, name: 'Malzeme Merkezi' },
  { id: 4, name: 'İnşaat Tedarik' },
  { id: 5, name: 'Kalite Kontrol' },
  { id: 6, name: 'Güvenlik Sistemleri' },
];

export function BrandsBand() {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-semibold uppercase tracking-widest mb-12 opacity-80">
          Çalıştığımız Malzeme ve Hizmet Sağlayıcıları
        </h3>
      </div>

      {/* Scrolling Band */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-12 px-4"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex items-center gap-3 whitespace-nowrap flex-shrink-0"
            >
              {/* Logo placeholder - geometric shape */}
              <div className="w-12 h-12 rounded border-2 border-primary-foreground/30 flex items-center justify-center">
                <div className="w-6 h-6 border border-primary-foreground/50 rounded-sm" />
              </div>
              <span className="text-sm font-medium opacity-90">{brand.name}</span>
              <div className="w-1 h-1 rounded-full bg-primary-foreground/30 mx-4" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
