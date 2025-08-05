import { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
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

    const elements = document.querySelectorAll('.portfolio-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [activeFilter]);

  const projects = [
    {
      id: 1,
      title: "APEX MOTORS",
      category: "Automotive",
      type: "website",
      description: "Premium luxury car dealer website featuring modern design, advanced inventory management, and seamless user experience. Showcases premium vehicle collection with interactive elements.",
      image: "/lovable-uploads/5dc80b9f-8174-468f-a2cb-867928cf6168.png",
      technologies: ["React", "Modern UI/UX", "Responsive Design", "Interactive Elements", "Premium Collection"],
      results: ["500+ Premium Vehicles Listed", "25K+ Happy Customers", "Premium Collection 2024", "Advanced Search & Filter System"],
      duration: "2 months",
      year: "2024",
      liveLink: "https://calm-sundae-c3a255.netlify.app/"
    },
    {
      id: 2,
      title: "Bella Vista Bistro",
      category: "Restaurant",
      type: "website",
      description: "Complete digital transformation for a local Italian restaurant including website, social media, and online ordering system.",
      image: "/src/assets/portfolio-1.jpg",
      technologies: ["WordPress", "WooCommerce", "Social Media", "SEO"],
      results: ["300% increase in online orders", "150% growth in social media followers", "45% increase in table reservations"],
      duration: "3 months",
      year: "2024"
    },
    {
      id: 3,
      title: "Peak Performance Gym",
      category: "Fitness",
      type: "branding",
      description: "Brand identity redesign and digital marketing strategy for a local fitness center.",
      image: "/src/assets/portfolio-2.jpg",
      technologies: ["Brand Design", "Social Media", "Google Ads", "Photography"],
      results: ["200% increase in new memberships", "85% increase in class bookings", "Top 3 Google ranking for local fitness"],
      duration: "2 months",
      year: "2024"
    },
    {
      id: 4,
      title: "Elegant Threads",
      category: "Fashion",
      type: "ecommerce",
      description: "E-commerce website and digital marketing for a boutique clothing store.",
      image: "/src/assets/portfolio-3.jpg",
      technologies: ["Shopify", "Instagram Marketing", "Influencer Partnerships", "SEO"],
      results: ["400% increase in online sales", "250% growth in Instagram engagement", "60% increase in store visits"],
      duration: "4 months",
      year: "2023"
    },
    {
      id: 5,
      title: "Tech Solutions Pro",
      category: "Technology",
      type: "website",
      description: "Professional website and lead generation system for a local IT services company.",
      image: "/placeholder-portfolio-4.jpg",
      technologies: ["React", "Node.js", "CRM Integration", "LinkedIn Marketing"],
      results: ["180% increase in qualified leads", "90% improvement in conversion rate", "50% reduction in sales cycle"],
      duration: "3 months",
      year: "2024"
    },
    {
      id: 6,
      title: "Green Thumb Landscaping",
      category: "Landscaping",
      type: "branding",
      description: "Complete rebrand and digital presence for a landscaping business.",
      image: "/placeholder-portfolio-5.jpg",
      technologies: ["Brand Design", "Photography", "Google My Business", "Website"],
      results: ["220% increase in project inquiries", "300% growth in Google reviews", "Top ranking for local landscaping"],
      duration: "2 months",
      year: "2023"
    },
    {
      id: 7,
      title: "Coastal Dental Care",
      category: "Healthcare",
      type: "website",
      description: "Modern website and patient management system for a dental practice.",
      image: "/placeholder-portfolio-6.jpg",
      technologies: ["WordPress", "Online Booking", "SEO", "Google Ads"],
      results: ["160% increase in new patients", "80% improvement in online bookings", "95% patient satisfaction score"],
      duration: "3 months",
      year: "2024"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'website', label: 'Websites' },
    { key: 'branding', label: 'Branding' },
    { key: 'ecommerce', label: 'E-commerce' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

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
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover how we've helped local businesses transform their digital presence and achieve remarkable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-scale ${
                  activeFilter === filter.key
                    ? 'bg-primary text-white shadow-soft'
                    : 'bg-accent text-foreground hover:bg-primary/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => {
              const isVisible = visibleItems.includes(index);
              return (
                <div
                  key={project.id}
                  className={`portfolio-item group transition-all duration-500 transform ${
                    isVisible ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  data-index={index}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white rounded-2xl shadow-card hover:shadow-float transition-all duration-500 overflow-hidden">
                    {/* Project Image */}
                    <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                      {project.image.startsWith('/lovable-uploads/') || project.image.startsWith('/src/assets/') ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold">
                          {project.title}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        {project.liveLink ? (
                          <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                          >
                            <ExternalLink className="h-8 w-8" />
                          </a>
                        ) : (
                          <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 h-8 w-8" />
                        )}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                        <span className="text-muted-foreground text-sm">{project.year}</span>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Project Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          Duration: {project.duration}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" />
                          Category: {project.category}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <p className="text-sm font-medium text-foreground mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <p className="text-sm font-medium text-foreground mb-2 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2 text-secondary" />
                          Key Results:
                        </p>
                        <ul className="space-y-1">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-3">
                        <button className="btn-outline-hero flex-1 hover-scale group-hover:shadow-md">
                          View Case Study
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        {project.liveLink && (
                          <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-hero px-4 hover-scale flex items-center justify-center"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the growing list of businesses that have transformed their digital presence with our help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover-scale flex items-center justify-center gap-2 group"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover-scale flex items-center justify-center">
                Get Free Consultation
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

export default PortfolioPage;