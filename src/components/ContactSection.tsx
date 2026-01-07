import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from './ConstructionIcons';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapView } from "@/components/Map";


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
          {/* Üst Başlık */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-foreground">
              {t.contact.title}
            </h2>
            <p className="text-md text-muted-foreground uppercase tracking-widest font-medium">
              {t.contact.subtitle}
            </p>
          </motion.div>

          {/* Üst Blok: Adres Bilgileri ve Harita Yan Yana */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-stretch">

            {/* SOL: İletişim Detayları */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-12">
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">{t.contact.address}</h3>
                <p className="text-md md:text-xl font-bold leading-tight text-foreground uppercase tracking-tight">
                  Üçevler Mah. Bahçe Yolu Cad.<br />
                  No: 46/B Esenyurt / İSTANBUL
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">{t.contact.phone}</h3>
                  <div className="flex flex-col gap-2">
                    {t.contact.phones.map((phone: string) => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="text-xl font-bold hover:text-primary transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">{t.contact.email}</h3>
                  <a href="mailto:info@ozcelikinsaat.com" className="text-xl font-bold hover:text-primary transition-colors">
                    info@ozcelikinsaat.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* SAĞ: Harita (Tam Konum Pinli) */}
            <motion.div
              variants={itemVariants}
              className="w-full h-[400px] lg:h-auto min-h-[400px] rounded-sm overflow-hidden border border-border"
            >
              <MapView
                center={{ lat: 41.0014813, lng: 28.6791668 }}
                zoom={16}
              />
            </motion.div>

          </div>

          {/* Alt Blok: Minimal İletişim Formu */}
          <motion.div
            variants={itemVariants}
            className="bg-zinc-50 p-8 md:p-16 border border-zinc-200"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-3 gap-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{t.contact.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-zinc-200 focus:border-primary outline-none py-3 px-0 transition-all text-lg font-bold"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-zinc-200 focus:border-primary outline-none py-3 px-0 transition-all text-lg font-bold"
                    placeholder={t.contact.form.phonePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{t.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-zinc-200 focus:border-primary outline-none py-3 px-0 transition-all text-lg font-bold"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{t.contact.form.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="w-full bg-transparent border-b-2 border-zinc-200 focus:border-primary outline-none py-3 px-0 transition-all text-lg font-bold resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="px-14 py-5 bg-foreground text-background font-black uppercase tracking-[0.3em] hover:bg-primary transition-all duration-500 disabled:opacity-50 flex items-center gap-4"
                >
                  {loading ? (
                    <span className="animate-pulse">...</span>
                  ) : submitted ? (
                    <>
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      {t.contact.form.submitted}
                    </>
                  ) : (
                    t.contact.form.submit
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}