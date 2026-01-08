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

  // Esenyurt Üçevler Ofis Koordinatları (Embed için)
  const mapAddress = "Üçevler Mah. Bahçe Yolu Cad. No: 46/B Esenyurt, İstanbul";
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCmhT5dy-VJobY9CK_-QE6F0mkFlN7a_G8&q=${encodeURIComponent(mapAddress)}&zoom=16`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
            
            {/* SOL BİLGİ ALANI */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-12">
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">
                  {t.contact.address}
                </h3>
                <p className="text-md md:text-xl font-bold uppercase">
                  Üçevler Mah. Bahçe Yolu Cad.<br />
                  No: 46/B Esenyurt / İSTANBUL
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
                    info@ozcelikinsaat.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* SAĞ – ÜCRETSİZ VE SORUNSUZ HARİTA (IFRAME) */}
            <motion.div
              variants={itemVariants}
              className="w-full min-h-[400px] overflow-hidden border bg-zinc-100 rounded-lg shadow-sm"
            >
              <iframe
                title="Özçelik Yapı Konum"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src={embedUrl}
                allowFullScreen
              />
            </motion.div>
          </div>

          {/* FORM ALANI */}
          <motion.div variants={itemVariants} className="bg-zinc-50 p-8 md:p-16 border">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.form.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-zinc-300 py-4 focus:border-black outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-zinc-300 py-4 focus:border-black outline-none transition-colors"
                />
              </div>
              <textarea
                name="message"
                placeholder={t.contact.form.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-zinc-300 py-4 focus:border-black outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors disabled:opacity-50"
              >
                {loading ? "..." : ("MESAJI GÖNDER")}
              </button>
              
              {submitted && (
                <p className="text-green-600 font-bold text-center animate-pulse">
                  {t.contact.form.submitted}
                </p>
              )}
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}