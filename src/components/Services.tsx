import { 
  Globe, 
  Search, 
  Share2, 
  Palette, 
  Camera, 
  Award, 
  MessageCircle, 
  TrendingUp 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Design",
      description: "Beautiful, responsive websites that convert visitors into customers with modern design and seamless user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"]
    },
    {
      icon: Search,
      title: "Local SEO",
      description: "Dominate local search results and get found by customers in your area with proven SEO strategies.",
      features: ["Google My Business", "Local Keywords", "Citation Building", "Review Management"]
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engage your audience and build brand loyalty across all major social media platforms.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics"]
    },
    {
      icon: Palette,
      title: "Logo & Branding",
      description: "Create a memorable brand identity that stands out and resonates with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"]
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for products, events, and corporate needs.",
      features: ["Product Photos", "Event Coverage", "Headshots", "Commercial"]
    },
    {
      icon: Award,
      title: "Business Branding",
      description: "Complete branding solutions including business cards, letterheads, and marketing materials.",
      features: ["Business Cards", "Letterheads", "Brochures", "Packaging"]
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Marketing",
      description: "Reach customers directly with automated WhatsApp campaigns and customer support.",
      features: ["Bulk Messaging", "Automation", "Customer Support", "Analytics"]
    },
    {
      icon: TrendingUp,
      title: "Digital Strategy",
      description: "Comprehensive digital marketing strategies tailored to your business goals and budget.",
      features: ["Market Analysis", "Competitor Research", "Growth Planning", "ROI Tracking"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Digital Solutions for{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to execution, we provide everything your local business needs 
            to thrive in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-service group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <button className="w-full text-primary font-medium hover:text-secondary transition-colors duration-300 flex items-center justify-center">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center mt-16">
          <button className="btn-hero flex items-center justify-center">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;