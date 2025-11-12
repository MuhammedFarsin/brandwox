import { useInView } from 'react-intersection-observer';
import { TrendingUp, Sparkles, CheckCircle, ArrowRight, Megaphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
  {
    icon: <Globe className="h-12 w-12" />,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80",
    title: "Website Design & Development",
    description:
      "We build fast, modern, and conversion-focused websites that give your brand a strong online presence. From landing pages to full-scale business sites, we deliver clean designs and flawless performance.",
    features: [
      "Responsive Website Design",
      "Custom Development (MERN / WordPress)",
      "E-commerce Integration",
      "Speed Optimization",
      "SEO-friendly Structure",
      "Ongoing Maintenance"
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: <TrendingUp className="h-12 w-12" />,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80",
    title: "Social Media Marketing",
    description:
      "Boost your brand’s visibility with creative and data-driven social media campaigns. We handle everything from strategy to execution — building engagement, followers, and conversions.",
    features: [
      "Social Media Strategy",
      "Post Design & Scheduling",
      "Engagement Growth",
      "Ad Campaign Management",
      "Analytics & Insights",
      "Community Management"
    ],
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50"
  },
  {
    icon: <Megaphone className="h-12 w-12" />,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80",
    title: "Performance Ads & Lead Generation",
    description:
      "Get measurable results through targeted ad campaigns across Meta, Google, and other platforms. We create high-converting ads that drive traffic, leads, and sales for your business.",
    features: [
      "Meta & Google Ads",
      "Audience Targeting",
      "A/B Testing & Optimization",
      "Conversion Tracking",
      "Lead Funnel Creation",
      "Detailed Ad Reporting"
    ],
    gradient: "from-green-500 to-teal-500",
    bgGradient: "from-green-50 to-teal-50"
  }
];


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
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Professional Digital Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Professional digital solutions designed to elevate your brand and drive unprecedented success
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        className={`py-16 sm:py-20 bg-white transition-all duration-1000 ${
          servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 delay-${index * 200}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} text-white rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        to="/contact"
                        className={`group inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 space-x-2`}
                      >
                        <span>Get Started</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-300`}></div>
                    <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 group-hover:shadow-3xl transition-all duration-300">
                      <div className={`aspect-video bg-gradient-to-br ${service.bgGradient} rounded-2xl overflow-hidden`}>
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure every project delivers exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We start by understanding your brand, goals, and challenges through comprehensive research and analysis.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Our experts develop a customized strategy tailored to your specific needs and market requirements.',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We execute the strategy with precision, using cutting-edge technology and creative excellence.',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We continuously monitor, analyze, and optimize to ensure maximum performance and ROI.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80'
              }
            ].map((process, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className="relative overflow-hidden rounded-xl mb-6 aspect-video">
                    <img 
                      src={process.image} 
                      alt={process.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full text-lg font-bold">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our professional digital services can elevate your brand to new heights of success.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 space-x-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;