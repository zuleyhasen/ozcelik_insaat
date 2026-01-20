import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function ContactSection() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /**
   * GOOGLE MAPS EMBED
   * API KEY .env dosyasından gelir
   * Koordinat sabit → pin asla şaşmaz
   */
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=41.0280673286604,28.681712849744464&zoom=16`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Basit XSS koruması: HTML etiketlerini temizle
    const sanitizedValue = value.replace(/<[^>]*>?/gm, '');
    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* ÜST BAŞLIK */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4">
              {t.contact.title}
            </h2>
            <p className="text-md text-muted-foreground uppercase tracking-widest font-medium">
              {t.contact.subtitle}
            </p>
          </motion.div>

          {/* ADRES + HARİTA */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-stretch">
            
            {/* SOL BİLGİ */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-12">
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">
                  {t.contact.address}
                </h3>
                <p className="text-md md:text-xl font-bold uppercase">
                  Üçevler, Bahçe Yolu Cd. No:46/B, 34100 Esenyurt / İstanbul
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">
                    {t.contact.phone}
                  </h3>
                  {t.contact.phones.map((phone: string) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-xl font-bold">
                      {phone}
                    </a>
                  ))}
                </div>

                <div>
                  <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">
                    {t.contact.email}
                  </h3>
                  <a href="mailto:info@ozcelikinsaat.com" className="text-xl font-bold">
                    ozcelikinsaat1@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* SAĞ – HARİTA (EMBED + OVERLAY) */}
            <motion.div
              variants={itemVariants}
              className="relative w-full min-h-[400px] overflow-hidden border bg-zinc-100 rounded-lg shadow-sm"
            >
              <iframe
                title="Özçelik Yapı Konum"
                src={embedUrl}
                className="w-full h-full"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              />

            </motion.div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
