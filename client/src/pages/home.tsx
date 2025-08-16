import { useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-custom text-custom overflow-x-hidden" data-testid="page-home">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
