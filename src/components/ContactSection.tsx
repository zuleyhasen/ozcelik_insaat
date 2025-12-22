import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from './ConstructionIcons';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <div className="h-1 w-16 bg-accent rounded-full mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">İletişime Geçin</h2>
            <p className="text-lg text-muted-foreground">
              Projeleriniz hakkında bize yazın, en kısa sürede sizinle iletişime geçeceğiz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Adres</h3>
                <p className="text-foreground/70">
                  Merkez Mahallesi, Ticaret Caddesi No: 42<br />
                  Şehir, Ülke
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Telefon</h3>
                <a href="tel:+905551234567" className="text-accent hover:underline">
                  +90 555 123 45 67
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">E-posta</h3>
                <a href="mailto:info@ozcelik.com" className="text-accent hover:underline">
                  info@ozcelik.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Çalışma Saatleri</h3>
                <div className="space-y-2 text-foreground/70">
                  <p>Pazartesi - Cuma: 08:00 - 18:00</p>
                  <p>Cumartesi: 09:00 - 14:00</p>
                  <p>Pazar: Kapalı</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Adınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="E-posta adresiniz"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Telefon numaranız"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    placeholder="Mesajınız..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <CheckIcon className="w-5 h-5" />
                      Gönderildi!
                    </>
                  ) : (
                    'Gönder'
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
