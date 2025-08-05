import { useState, useEffect } from 'react';
import { Users, Award, Target, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const About = () => {
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

    const elements = document.querySelectorAll('.about-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "150+", label: "Happy Clients", icon: Users },
    { number: "300+", label: "Projects Completed", icon: Award },
    { number: "5", label: "Years Experience", icon: Target },
    { number: "98%", label: "Client Satisfaction", icon: Heart }
  ];

  const values = [
    {
      title: "Client-First Approach",
      description: "Your success is our priority. We listen, understand, and deliver solutions that truly work for your business.",
      icon: Heart
    },
    {
      title: "Local Expertise",
      description: "We understand the local market and know what works for businesses in our community.",
      icon: Target
    },
    {
      title: "Transparent Process",
      description: "No hidden costs, no surprises. We believe in honest communication throughout our partnership.",
      icon: CheckCircle
    },
    {
      title: "Ongoing Support",
      description: "We don't disappear after project completion. We're here to support your growth journey.",
      icon: Users
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "10+ years in digital marketing with a passion for helping local businesses thrive online.",
      image: "/placeholder-avatar-1.jpg"
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      description: "Full-stack developer specializing in modern web technologies and user experience.",
      image: "/placeholder-avatar-2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      description: "Award-winning designer with expertise in branding and visual storytelling.",
      image: "/placeholder-avatar-3.jpg"
    },
    {
      name: "David Kim",
      role: "Marketing Strategist",
      description: "Data-driven marketer focused on ROI and measurable business growth.",
      image: "/placeholder-avatar-4.jpg"
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
              About Brandwox Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're passionate about helping local businesses succeed in the digital world. Our mission is to make professional digital services accessible and effective for every business.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const isVisible = visibleItems.includes(index);
              return (
                <div 
                  key={stat.label}
                  className={`about-item text-center bg-white rounded-xl p-6 shadow-card hover:shadow-float transition-all duration-500 transform hover-scale ${
                    isVisible ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  data-index={index}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Founded in 2019, Brandwox Solutions started with a simple mission: to help local businesses compete in an increasingly digital world. We saw too many great businesses struggling to establish their online presence and reach new customers.
                </p>
                <p>
                  What began as a small team of digital enthusiasts has grown into a full-service agency that has helped over 150 businesses transform their digital presence. We're proud to be part of our clients' success stories.
                </p>
                <p>
                  Today, we continue to innovate and adapt to the ever-changing digital landscape, always keeping our clients' success at the center of everything we do.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Proven track record with 150+ successful projects",
                    "Local expertise and market understanding",
                    "Transparent pricing with no hidden costs",
                    "Ongoing support and partnership approach",
                    "Modern, conversion-focused designs",
                    "Data-driven strategies that deliver results"
                  ].map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isVisible = visibleItems.includes(index + 10);
              return (
                <div
                  key={value.title}
                  className={`about-item bg-white rounded-xl p-8 shadow-card hover:shadow-float transition-all duration-500 transform hover-scale ${
                    isVisible ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  data-index={index + 10}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate experts behind your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => {
              const isVisible = visibleItems.includes(index + 20);
              return (
                <div
                  key={member.name}
                  className={`about-item text-center group hover-scale transition-all duration-500 transform ${
                    isVisible ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  data-index={index + 20}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative mb-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold shadow-card">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's work together to take your business to the next level. Get in touch for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover-scale flex items-center justify-center gap-2 group"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover-scale">
                View Our Work
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

export default About;