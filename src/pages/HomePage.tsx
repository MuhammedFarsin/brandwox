import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Users,
  Award,
  TrendingUp,
  ChevronRight,
  Star,
  Quote,
  Zap,
  Target,
  Shield,
  Car,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

interface Stat {
  icon: JSX.Element;
  number: number;
  suffix: string;
  label: string;
  color: string;
}

const HomePage = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features: Feature[] = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "Landing Pages for Car Dealers",
      description:
        "We build simple, high-converting landing pages that turn website visitors into real buyer inquiries.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Meta & Google Ads Strategy",
      description:
        "We run ads that bring qualified leads directly to your inbox — not random clicks or fake inquiries.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Follow-Up Systems",
      description:
        "We automate follow-ups so you never lose a potential buyer who showed interest in your cars.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Performance Tracking",
      description:
        "We help you understand exactly where your leads come from and how to scale your ad performance.",
    },
  ];

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Founder",
    company: "Cafe Bliss",
    image:
      "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=400",
    content:
      "Brandwox completely revamped our website and managed our social media. Within two months, our daily customer inquiries doubled. Their strategy actually works.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Marketing Manager",
    company: "GlowSkin Essentials",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    content:
      "We hired Brandwox for ad management, and our ROI jumped by 180%. They understood our target audience perfectly and delivered real conversions, not just clicks.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Sharma",
    role: "Owner",
    company: "TechNexa IT Solutions",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
    content:
      "The team at Brandwox built a fast, responsive website for our company and handled SEO brilliantly. We now rank on the first page for multiple key terms.",
    rating: 5,
  },
];


  const stats: Stat[] = [
    {
      icon: <Users className="h-6 w-6" />,
      number: 25,
      suffix: "+",
      label: "Dealers Helped",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Award className="h-6 w-6" />,
      number: 60,
      suffix: "+",
      label: "Landing Pages Built",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      number: 20,
      suffix: "+",
      label: "Monthly Leads per Dealer",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      number: 95,
      suffix: "%",
      label: "Client Retention",
      color: "from-orange-500 to-red-500",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 transition-all duration-1000 ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/0917-1_LMf7NUZs.mp4.webm" type="video/webm" />
              <source src="/0917-1_LMf7NUZs.mp4" type="video/mp4" />
            </video>

            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className={`transition-all duration-1000 delay-200 ${
                heroInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-6">
                <Award className="h-4 w-4 mr-2" />
                Your Partner for Digital Excellence
              </div>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 transition-all duration-1000 delay-400 ${
                heroInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              
              <span className="bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-600 bg-clip-text text-transparent">
               Helping UK Used Car Dealers Get 10–20 More Buyer Inquiries Monthly
              </span>
            </h1>

            <p
              className={`text-lg sm:text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-600 ${
                heroInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
               Brandwox builds high-converting landing pages and ad systems that bring real leads — not just views.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-800 ${
                heroInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2 overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10">Get a Free Audit</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>

              <Link
                to="/services"
                className="group px-8 py-4 border-2 border-gray-300 text-gray-100 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
              >
                <span>View Services</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className={`py-16 bg-white transition-all duration-1000 ${
          statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-500 transform hover:scale-110`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${stat.color} text-white rounded-xl mb-4 group-hover:rotate-12 transition-all duration-300`}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
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
                <div className="text-gray-600 font-medium text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="py-20 bg-gray-300">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Who We Help</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We help <strong>UK used car dealers</strong> generate more buyer inquiries using ads + landing pages.
            Whether you sell 5 cars or 50 per month, our system helps you attract serious buyers and grow steadily.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            *(Our systems also apply to other local businesses looking for steady leads.)*
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Help Dealers Win Online
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We don’t just make websites — we build complete lead-generation systems designed for car dealers.
            </p>
          </div>

          <div
            ref={featuresRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
              featuresInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2`}
              >
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital
              presence with innovative solutions.
            </p>
            <div className="mt-8">
              <Link
                to="/testimonials"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 space-x-2 transform hover:scale-105"
              >
                <span>View All Testimonials</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div
            ref={testimonialsRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
              testimonialsInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2`}
              >
                {/* Client Image */}
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-blue-200" />
                  <p className="text-gray-600 leading-relaxed italic pl-4">
                    "{testimonial.content}"
                  </p>
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
           <span>Get Your Free Dealer Audit</span>

          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Find out how many more buyer leads your dealership could be getting every month — with no guesswork.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 space-x-2 transform hover:scale-105"
          >
            <span> Request Free Audit</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
