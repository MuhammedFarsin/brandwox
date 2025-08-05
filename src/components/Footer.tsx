import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Website Design",
    "Local SEO",
    "Social Media Marketing",
    "Logo & Branding",
    "Photography",
    "WhatsApp Marketing"
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61578771980114&mibextid=ZbWKwL", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/brandwox_?igsh=MTR2bzRsc3E1ZXh4YQ==", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent mb-4">
              Brandwox
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Transforming local businesses with smart digital solutions. 
              Your success is our mission.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-3 text-primary-light" />
                +91 9207509746
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-3 text-primary-light" />
                mfbrandwox@gmail.com
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-3 text-primary-light" />
                Palakkad District, Kerala 679513, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-white/70 hover:text-primary-light transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="text-white/70 hover:text-primary-light transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-white/70 mb-4">
              Get digital marketing tips and business insights delivered to your inbox.
            </p>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-xl bg-white/10 border border-white/20 focus:outline-none focus:border-primary-light text-white placeholder-white/50"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-r-xl hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © 2024 Brandwox Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/50 hover:text-primary-light text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-primary-light text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-primary-light text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;