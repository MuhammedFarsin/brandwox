import { useState, useEffect } from 'react';
import { ArrowRight, Smartphone, Search, Camera, Palette, Globe, MessageCircle, TrendingUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.service-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Custom, responsive websites that convert visitors into customers",
      features: ["Mobile-First Design", "SEO Optimized", "Fast Loading", "Content Management", "E-commerce Integration"],
      pricing: "Starting from $999",
      timeline: "2-4 weeks"
    },
    {
      icon: Search,
      title: "Local SEO & Marketing",
      description: "Get found by local customers when they search for your services",
      features: ["Google My Business", "Local Citations", "Review Management", "Keyword Research", "Content Strategy"],
      pricing: "Starting from $299/month",
      timeline: "Ongoing"
    },
    {
      icon: Smartphone,
      title: "Social Media Marketing",
      description: "Build your brand presence across all social platforms",
      features: ["Content Creation", "Account Management", "Paid Advertising", "Community Building", "Analytics"],
      pricing: "Starting from $499/month",
      timeline: "Ongoing"
    },
    {
      icon: Palette,
      title: "Branding & Logo Design",
      description: "Create a memorable brand identity that stands out",
      features: ["Logo Design", "Brand Guidelines", "Business Cards", "Letterheads", "Brand Strategy"],
      pricing: "Starting from $599",
      timeline: "1-2 weeks"
    },
    {
      icon: Camera,
      title: "Professional Photography",
      description: "High-quality photos that showcase your business perfectly",
      features: ["Product Photography", "Team Photos", "Location Shots", "Event Coverage", "Photo Editing"],
      pricing: "Starting from $299/session",
      timeline: "1-3 days"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business Marketing",
      description: "Connect with customers through WhatsApp for better engagement",
      features: ["WhatsApp Business Setup", "Automated Messages", "Catalog Creation", "Customer Support", "Broadcast Lists"],
      pricing: "Starting from $199/month",
      timeline: "1 week setup"
    }
  ];

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Complete Digital Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Everything your local business needs to succeed online. From websites to social media, we've got you covered.
            </p>
            <div className="flex items-center justify-center">
              <button 
                onClick={scrollToContact}
                className="btn-hero hover-scale group flex items-center justify-center"
              >
                Get Your Free Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional digital services designed to grow your local business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isVisible = visibleItems.includes(index);
              return (
                <div
                  key={service.title}
                  className={`service-item bg-card rounded-xl p-8 shadow-card hover:shadow-float transition-all duration-500 transform ${
                    isVisible ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  data-index={index}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-soft">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-sm font-medium text-primary mb-1">Features:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-secondary mb-1">Investment:</p>
                          <p className="text-sm font-semibold text-foreground">{service.pricing}</p>
                          <p className="text-sm text-muted-foreground">Timeline: {service.timeline}</p>
                        </div>
                      </div>

                      <button className="btn-outline-hero w-full hover-scale group">
                        Learn More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              Simple, transparent, and effective approach to growing your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience" },
              { step: "02", title: "Strategy", description: "We create a customized digital strategy just for you" },
              { step: "03", title: "Execution", description: "Our team brings your vision to life with expert execution" },
              { step: "04", title: "Growth", description: "We monitor, optimize, and help your business grow" }
            ].map((item, index) => (
              <div 
                key={item.step}
                className="text-center animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-soft">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-white animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our digital solutions can help you reach more customers and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover-scale flex items-center justify-center gap-2"
              >
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover-scale flex items-center justify-center">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Services;