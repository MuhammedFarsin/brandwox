import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight, Search, BookOpen } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const BlogPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  // Featured posts array for carousel
  const featuredPosts = [
    {
      title: "The Psychology of Luxury in Digital Branding",
      excerpt:
        "Discover how elite brands craft digital experiences that command premium pricing and loyalty through strategic design psychology.",
      date: "2024-03-15",
      readTime: "8 min",
      category: "Brand Strategy",
      slug: "psychology-of-luxury-digital-branding",
      image: "/blog/blog 1.jpg",
    },
    {
      title: "Crafting Digital Opulence: Web Design Principles",
      excerpt:
        "Key techniques to translate physical luxury into digital experiences that resonate with affluent audiences.",
      date: "2024-03-10",
      readTime: "6 min",
      category: "Web Design",
      slug: "digital-opulence-web-design",
      image: "/blog/blog 2.jpg",
    },
    {
      title: "From Boutique to Browser: The Digital Transition",
      excerpt:
        "Case studies of successful luxury brands that mastered the online transition without losing exclusivity.",
      date: "2024-03-05",
      readTime: "10 min",
      category: "Digital Transformation",
      slug: "boutique-to-browser",
      image: "/blog/blog 3.jpg",
    },
  ];

  // Auto-rotate featured posts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedIndex((prevIndex) =>
        prevIndex === featuredPosts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [featuredPosts.length]);

  const recentPosts = [
    {
      title: "Typography in Luxury Branding: Commanding Respect",
      excerpt:
        "How font selection impacts perceived value and brand authority in the luxury space.",
      date: "2024-02-28",
      readTime: "5 min",
      category: "Brand Identity",
      slug: "luxury-typography",
    },
    {
      title: "The Art of Minimalism in High-End Web Design",
      excerpt:
        "Less is more: How strategic minimalism creates premium digital experiences.",
      date: "2024-02-20",
      readTime: "7 min",
      category: "Web Design",
      slug: "minimalism-web-design",
    },
    {
      title: "Color Theory for Luxury Brands",
      excerpt:
        "Selecting the perfect palette to convey exclusivity and sophistication.",
      date: "2024-02-15",
      readTime: "6 min",
      category: "Brand Strategy",
      slug: "luxury-color-theory",
    },
    {
      title: "E-commerce Strategies for High-End Products",
      excerpt: "Converting affluent shoppers in the digital marketplace.",
      date: "2024-02-10",
      readTime: "8 min",
      category: "Digital Marketing",
      slug: "luxury-ecommerce",
    },
  ];

  const categories = [
    { name: "Brand Strategy", count: 12 },
    { name: "Web Design", count: 8 },
    { name: "Digital Marketing", count: 5 },
    { name: "Case Studies", count: 7 },
  ];

  return (
    <div
      ref={ref}
      className={`pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header - Made more compact on mobile */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Helmet>
            <title>BrandWox Insights | Digital Marketing & Branding Blog</title>
            <meta
              name="description"
              content="Explore expert insights on branding, web design, and digital growth strategies from BrandWox Solution."
            />
          </Helmet>

          <p className="text-base sm:text-lg text-gray-600">
            Expert perspectives on luxury branding, digital innovation, and
            creating exceptional online experiences.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Featured Post Carousel */}
            <div className="mb-12 sm:mb-16 relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-100 h-64 sm:h-80 md:h-96">
                {featuredPosts.map((post, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentFeaturedIndex
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full mb-2 sm:mb-3">
                        {post.category}
                      </span>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
                        <Link
                          to={`/insights/${post.slug}`}
                          className="hover:underline"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-white/90 mb-3 text-sm sm:text-base">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-white/80">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          {post.readTime} read
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {featuredPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeaturedIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                      index === currentFeaturedIndex
                        ? "bg-blue-600 w-4 sm:w-6"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Recent Posts - Improved mobile layout */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-blue-600" />
                Latest Insights
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {recentPosts.map((post, index) => (
                  <div key={index} className="group">
                    <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                      <div className="p-4 sm:p-6">
                        <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-2 sm:mb-3">
                          {post.category}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                          <Link
                            to={`/insights/${post.slug}`}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-500">
                            <span>
                              {new Date(post.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                            <span>•</span>
                            <span>{post.readTime} read</span>
                          </div>
                          <Link
                            to={`/insights/${post.slug}`}
                            className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm sm:text-base transition-colors"
                          >
                            Read{" "}
                            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination - Improved mobile layout */}
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <button className="px-3 py-1 sm:px-4 sm:py-2 text-gray-600 hover:text-blue-600 font-medium flex items-center text-sm sm:text-base">
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 mr-1 rotate-180" />
                Previous
              </button>
              <div className="flex space-x-1 sm:space-x-2">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base ${
                      num === 1
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <button className="px-3 py-1 sm:px-4 sm:py-2 text-gray-600 hover:text-blue-600 font-medium flex items-center text-sm sm:text-base">
                Next <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1" />
              </button>
            </div>
          </div>

          {/* Sidebar - Improved mobile layout */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600" />
                Search Insights
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type keywords..."
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                />
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 absolute right-2 sm:right-3 top-2.5 sm:top-3.5" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                Categories
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/insights/category/${category.name
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base"
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 sm:px-2 sm:py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border border-blue-100">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                Subscribe to Insights
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                Get our latest articles and case studies delivered to your
                inbox.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-3 py-2 sm:px-4 sm:py-3 rounded-l-lg border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                />
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-r-lg text-xs sm:text-sm font-medium hover:shadow-md transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
