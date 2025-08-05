import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Intersection Observer for fade-in animations
  useEffect(() => {
    if (!isLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      // Observe all elements with animation classes
      const animatedElements = document.querySelectorAll('.animate-fade-in-up');
      animatedElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;