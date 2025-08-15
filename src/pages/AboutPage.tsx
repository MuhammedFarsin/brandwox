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
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Innovation",
      description:
        "We believe in delivering cutting-edge experiences that set new standards of excellence in the digital world.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Professionalism",
      description:
        "Our commitment to professionalism ensures every interaction and delivery exceeds expectations.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Excellence",
      description:
        "We embrace cutting-edge technology and creative solutions to drive digital transformation.",
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Collaboration",
      description:
        "We work closely with our clients as partners, ensuring success through meaningful collaboration.",
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Brandwox
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Redefining Digital Excellence with Innovation and Creativity
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section
        ref={storyRef}
        className={`py-16 sm:py-20 bg-white transition-all duration-1000 ${
          storyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Brandwox was born from a vision to redefine digital excellence
                  and provide businesses with a platform to thrive in the
                  digital era. Our journey began with a passion for innovation,
                  creativity, and a commitment to exceeding client expectations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">
                    {storyInView && <CountUp end={100} duration={2} />}+
                  </div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">
                    {storyInView && <CountUp end={200} duration={2} />}+
                  </div>
                  <div className="text-sm text-gray-600">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
                  <Globe className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">
                    {storyInView && <CountUp end={5} duration={2} />}+
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
                      <h3 className="font-semibold text-gray-900">
                        Our Mission
                      </h3>
                      <p className="text-sm text-gray-600">
                        To empower businesses with innovative digital solutions
                        that drive growth and inspire creativity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                    <Eye className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Our Vision
                      </h3>
                      <p className="text-sm text-gray-600">
                        To be the ultimate destination for innovative digital
                        services that set new standards of excellence.
                      </p>
                    </div>
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
          valuesInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and define our commitment
              to excellence in every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 delay-${
                  index * 100
                }`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Built with Passion
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              At Brandwox, we're more than just a team – we're passionate
              creators, strategic thinkers, and dedicated partners committed to
              your success.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 sm:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Crafted with Love from Kerala, India
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Based in the beautiful state of Kerala, we bring the warmth of
                Indian hospitality and the precision of modern technology to
                create digital solutions that truly make a difference. Every
                project is a labor of love, designed to elevate your brand to
                new heights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
