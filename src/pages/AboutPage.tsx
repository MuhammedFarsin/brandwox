import { useInView } from "react-intersection-observer";
import {
  Target,
  Eye,
  Heart,
  Handshake,
  Award,
  Users,
  Globe,
  Sparkles,
} from "lucide-react";
import CountUp from "react-countup";

const AboutPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Transparency",
      description:
        "We keep everything simple and honest — from pricing to performance. No fancy jargon, just real results.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Performance",
      description:
        "Every campaign and design is focused on one goal — helping our clients get more leads and sales.",
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Collaboration",
      description:
        "We work closely with every client like a partner, not an agency. Your goals become our goals.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Innovation",
      description:
        "We stay updated with new marketing tools and trends so your business never falls behind online.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 transition-all duration-1000 ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            About Brandwox
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
            Helping small businesses and car dealers grow online with smart marketing and modern design.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section
        ref={storyRef}
        className={`py-16 sm:py-20 bg-white transition-all duration-1000 ${
          storyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Brandwox started with one goal — to help local businesses compete online like big brands do.
              What began as a small digital marketing idea has grown into a full-service agency
              helping car dealers, startups, and small businesses attract more customers
              through smart design, marketing, and automation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">
                  {storyInView && <CountUp end={20} duration={2} />}+
                </div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">
                  {storyInView && <CountUp end={40} duration={2} />}+
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
                <Globe className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">
                  {storyInView && <CountUp end={2} duration={2} />}+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl transform rotate-6"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                  <Target className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Mission</h3>
                    <p className="text-sm text-gray-600">
                      To help small businesses and car dealers grow through affordable,
                      data-driven digital marketing and web solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                  <Eye className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Vision</h3>
                    <p className="text-sm text-gray-600">
                      To make digital growth accessible for every business — no matter the size or location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className={`py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${
          valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            These values guide how we work, create, and build long-term success with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2`}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built with Passion
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Brandwox is built by a small, passionate team from Kerala — creating digital success stories
            for clients across India and the UK.
          </p>

          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 sm:p-12">
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Crafted with Love from Kerala, India
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every project we build is done with heart — blending creativity, strategy, and smart tech
              to help businesses grow online. We treat your brand like our own and measure success by your results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
