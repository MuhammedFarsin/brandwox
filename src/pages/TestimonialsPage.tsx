import { useInView } from 'react-intersection-observer';
import { Star, Quote, Users, Award, TrendingUp, Heart } from 'lucide-react';
import CountUp from 'react-countup';

const TestimonialsPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechFlow Solutions',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: 'Brandwox transformed our digital presence completely. Their strategic approach and innovative solutions helped us increase our online engagement by 300%. The team is professional, creative, and truly understands modern digital marketing.',
      project: 'Digital Marketing Campaign'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO',
      company: 'InnovateLab',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: 'The custom software solution developed by Brandwox exceeded all our expectations. It streamlined our operations and improved efficiency by 40%. Their attention to detail and technical expertise is outstanding.',
      project: 'Custom Software Development'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'E-commerce Manager',
      company: 'StyleHub',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: 'Working with Brandwox was a game-changer for our online store. Their e-commerce solutions and digital strategies helped us achieve a 250% increase in sales within just 6 months. Highly recommended!',
      project: 'E-commerce Platform'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Startup Founder',
      company: 'GreenTech Innovations',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: 'Brandwox helped us build our brand from the ground up. Their comprehensive digital consultation and branding services gave us the foundation we needed to succeed in a competitive market.',
      project: 'Brand Development'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Operations Director',
      company: 'HealthFirst Clinic',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: 'The mobile app developed by Brandwox revolutionized how we interact with our patients. The user-friendly design and robust functionality have improved patient satisfaction significantly.',
      project: 'Mobile App Development'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Marketing Head',
      company: 'FoodieDelight',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: 'Brandwox created an amazing website for our restaurant chain. The design is beautiful, the functionality is smooth, and it perfectly represents our brand. Customer inquiries increased by 180%.',
      project: 'Website Development'
    },
    {
      id: 7,
      name: 'Amanda Foster',
      role: 'Creative Director',
      company: 'ArtSpace Gallery',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: 'The digital marketing campaigns created by Brandwox are simply outstanding. They understand our artistic vision and translate it into compelling digital experiences that resonate with our audience.',
      project: 'Digital Marketing'
    },
    {
      id: 8,
      name: 'Robert Kim',
      role: 'Tech Lead',
      company: 'DataDrive Analytics',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: 'Brandwox delivered a complex data analytics platform that perfectly meets our needs. Their technical expertise and project management skills are top-notch. The solution is scalable and robust.',
      project: 'Analytics Platform'
    },
    {
      id: 9,
      name: 'Maria Gonzalez',
      role: 'Business Owner',
      company: 'EcoFriendly Products',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: 'The comprehensive digital strategy provided by Brandwox helped us reach new markets and grow our sustainable business. Their understanding of eco-friendly branding is exceptional.',
      project: 'Digital Strategy'
    }
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: 100,
      suffix: "+",
      label: 'Happy Clients',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: 200,
      suffix: "+",
      label: 'Projects Completed',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: 99,
      suffix: "%",
      label: 'Client Satisfaction',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: 5,
      suffix: "+",
      label: 'Years Experience',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`relative pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 transition-all duration-1000 ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 delay-200 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-6">
                <Quote className="h-4 w-4 mr-2" />
                Client Success Stories
              </div>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-400 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h1>

            <p className={`text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-600 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Discover how we've helped businesses transform their digital presence and achieve remarkable success
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className={`py-16 bg-white transition-all duration-1000 ${
          statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-500`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {statsInView ? (
                    <CountUp 
                      end={stat.number} 
                      duration={2.5} 
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section 
        ref={testimonialsRef}
        className={`py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${
          testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success Stories from Our Clients
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real clients who have experienced the transformative power of our digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2`}
              >
                <div className="p-8">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200" />
                    <p className="text-gray-600 leading-relaxed italic pl-6">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Project Type */}
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-6">
                    {testimonial.project}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                      <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's work together to create your own digital transformation success story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 space-x-2"
            >
              <span>Start Your Project</span>
              <TrendingUp className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="/services"
              className="group inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 space-x-2"
            >
              <span>View Our Services</span>
              <Award className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;