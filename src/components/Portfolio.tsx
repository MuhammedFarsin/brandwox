import { ExternalLink, ArrowRight } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: "APEX MOTORS",
      category: "Automotive Website",
      description: "Premium luxury car dealer website with advanced inventory management and seamless user experience. Modern design showcasing luxury vehicles with interactive features.",
      image: "/lovable-uploads/5dc80b9f-8174-468f-a2cb-867928cf6168.png",
      results: [
        "500+ Premium Vehicles Listed",
        "25K+ Happy Customers",
        "Premium Collection 2024",
        "Advanced Search & Filters"
      ],
      technologies: ["React", "Modern UI/UX", "Responsive Design", "Interactive Elements"],
      liveLink: "https://calm-sundae-c3a255.netlify.app/"
    },
    {
      title: "Bella Vista Bistro",
      category: "Restaurant Website",
      description: "Complete website redesign with online ordering system, resulting in 300% increase in online orders.",
      image: portfolio1,
      results: [
        "300% increase in online orders",
        "50% faster page load times",
        "Mobile-first responsive design"
      ],
      technologies: ["WordPress", "WooCommerce", "Custom Design"]
    },
    {
      title: "Peak Performance Gym",
      category: "Fitness Website & Marketing",
      description: "Full digital transformation including website, social media management, and local SEO optimization.",
      image: portfolio2,
      results: [
        "200% increase in memberships",
        "Top 3 local search rankings",
        "5x social media engagement"
      ],
      technologies: ["React", "SEO", "Social Media", "Google Ads"]
    },
    {
      title: "Elegant Threads",
      category: "E-commerce & Branding",
      description: "Brand identity design, product photography, and e-commerce website for fashion boutique.",
      image: portfolio3,
      results: [
        "150% increase in sales",
        "Professional brand identity",
        "High-quality product catalog"
      ],
      technologies: ["Shopify", "Brand Design", "Photography", "Marketing"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped local companies 
            transform their digital presence and grow their revenue.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-2xl shadow-card group-hover:shadow-float transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-medium text-primary mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Key Results:</h4>
                    <div className="space-y-2">
                      {project.results.map((result) => (
                        <div key={result} className="flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                          <span className="text-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="group flex items-center justify-center gap-2 text-primary font-semibold hover:text-secondary transition-colors duration-300">
                      View Case Study
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        Live Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can achieve similar results for your business.
            </p>
            <div className="flex items-center justify-center">
              <button className="btn-hero flex items-center justify-center">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;