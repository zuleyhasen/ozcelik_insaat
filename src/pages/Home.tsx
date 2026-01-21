import { Header } from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { FoundationSection } from '@/components/FoundationSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ApartmentGallerySection } from '@/components/ApartmentGallerySection';
import { SafetyBand } from '@/components/SafetyBand';
import { ServicesSection } from '@/components/ServicesSection';
import { BrandsBand } from '@/components/BrandsBand';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "Özçelik İnşaat",
    "image": "https://ozcelikinsaat.com/images/logo.webp",
    "@id": "https://ozcelikinsaat.com",
    "url": "https://ozcelikinsaat.com",
    "telephone": "+905352563877",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "İstanbul",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0082,
      "longitude": 28.9784
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": []
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>Özçelik İnşaat | İstanbul Güvenilir İnşaat ve Kentsel Dönüşüm Firması</title>
        <meta name="description" content="Özçelik İnşaat, İstanbul'da kentsel dönüşüm, modern konut projeleri ve güvenilir yapı malzemeleri ile sağlam temeller inşa eder. Güvenli ve estetik yaşam alanları için bize ulaşın." />
        <link rel="canonical" href="https://ozcelikinsaat.com" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FoundationSection />
        <ProjectsSection />
        <SafetyBand />
        <ApartmentGallerySection />
        <ServicesSection />
        <BrandsBand />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
