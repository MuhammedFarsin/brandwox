import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const PricingPage = () => {
  // Intersection Observer for fade-in animations
  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Pricing />
        <Contact />
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default PricingPage;