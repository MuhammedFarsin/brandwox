import { Users, Award, Clock, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const stats = [
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Award, label: "Projects Completed", value: "100+" },
    { icon: Clock, label: "Years Experience", value: "5+" },
    { icon: Heart, label: "Client Satisfaction", value: "99%" }
  ];

  const values = [
    {
      title: "Client-First Approach",
      description: "Your success is our success. We work closely with you to understand your goals and deliver solutions that drive real results."
    },
    {
      title: "Local Expertise",
      description: "We understand the unique challenges of local businesses and create strategies that work in your specific market."
    },
    {
      title: "Transparent Process",
      description: "No hidden fees, no surprises. We believe in clear communication and honest pricing for all our services."
    },
    {
      title: "Ongoing Support",
      description: "Our relationship doesn't end at launch. We provide ongoing support and optimization to ensure your continued success."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Help Local Businesses{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Turn Digital
              </span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Brandwox Solutions, we believe every local business deserves a powerful 
                digital presence. Our team of creative professionals specializes in 
                transforming traditional businesses into digital success stories.
              </p>
              <p>
                We combine cutting-edge technology with human creativity to deliver 
                solutions that not only look amazing but also drive real business results. 
                From your first website visitor to your hundredth customer, we're here 
                to support your growth journey.
              </p>
              <p>
                Our approach is simple: understand your business, create tailored 
                solutions, and deliver measurable results that help you grow.
              </p>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={stat.label} 
                      className="text-center animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Core Values
              </span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and ensure we deliver 
              exceptional results for every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-muted/30 rounded-2xl p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join the growing number of local businesses who trust Brandwox Solutions 
              to power their digital transformation.
            </p>
            <div className="flex items-center justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Let's Talk About Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;