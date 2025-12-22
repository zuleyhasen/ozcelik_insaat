export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Özçelik İnşaat</h3>
            <p className="text-sm opacity-80">
              Yerel ölçekte faaliyet gösteren, işini titizlikle yapan bir inşaat firması.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#projects" className="hover:opacity-100 transition-opacity">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Hakkımızda
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Konut İnşaatı
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Ticari Projeler
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Restorasyon
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>
                <a href="tel:+905551234567" className="hover:opacity-100 transition-opacity">
                  +90 555 123 45 67
                </a>
              </p>
              <p>
                <a href="mailto:info@ozcelik.com" className="hover:opacity-100 transition-opacity">
                  info@ozcelik.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
            <p>&copy; {currentYear} Özçelik İnşaat. Tüm hakları saklıdır.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100 transition-opacity">
                Gizlilik Politikası
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Kullanım Şartları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
