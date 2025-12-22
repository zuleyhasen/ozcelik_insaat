import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { BrandsBand } from '@/components/BrandsBand';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

/**
 * HOME PAGE - Özçelik İnşaat Website
 * 
 * Design Philosophy: Modern Minimalism with Construction Authenticity
 * - Clean, professional layout with asymmetric sections
 * - Generous whitespace and clear hierarchy
 * - Subtle animations that support content flow
 * - Construction-inspired custom icons and elements
 * - Warm amber accents (#d97706) representing materials and progress
 * - Deep slate primary color (#1a2332) for trust and professionalism
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BrandsBand />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
