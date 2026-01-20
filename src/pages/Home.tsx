import { Header } from '@/components/Header';
import {HeroSection} from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ApartmentGallerySection } from '@/components/ApartmentGallerySection';
import { SafetyBand } from '@/components/SafetyBand';
import { ServicesSection } from '@/components/ServicesSection';
import { BrandsBand } from '@/components/BrandsBand';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
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
