import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.contact-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_name: 'MF Brand Wox Team'
      };

      await emailjs.send(
        'service_ug58smp', // Service ID
        'template_zudab6b', // Template ID
        templateParams,
        'vUfFNl31pO9DKjt2I' // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9207509746",
      subtext: "Mon-Fri, 9AM-6PM IST"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "mfbrandwox@gmail.com",
      subtext: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Palakkad District, Kerala 679513",
      subtext: "India"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9AM - 6PM",
      subtext: "Weekend: By appointment"
    }
  ];

  const services = [
    "Website Design & Development",
    "Local SEO & Marketing",
    "Social Media Marketing",
    "Branding & Logo Design",
    "Professional Photography",
    "WhatsApp Business Marketing",
    "Complete Digital Transformation",
    "Other (please specify)"
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Most websites are completed within 2-4 weeks, depending on complexity and content requirements."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer various support packages to keep your website updated, secure, and optimized."
    },
    {
      question: "Can you help with social media management?",
      answer: "Absolutely! We offer comprehensive social media management including content creation, posting, and engagement."
    },
    {
      question: "Do you work with businesses outside your local area?",
      answer: "While we specialize in local businesses, we work with clients nationwide who value our personalized approach."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's Work Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to transform your business? Get in touch for a free consultation and discover how we can help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const isVisible = visibleItems.includes(index);
              return (
                <div 
                  key={info.title}
                  className={`contact-item bg-white rounded-xl p-6 shadow-card hover:shadow-float transition-all duration-500 transform hover-scale text-center ${
                    isVisible ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  data-index={index}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-sm font-medium text-primary mb-1">{info.details}</p>
                  <p className="text-xs text-muted-foreground">{info.subtext}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-hero hover-scale disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Quick Actions & FAQs */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div className="animate-fade-in">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Prefer to Talk Directly?</h3>
                  <p className="mb-6 opacity-90">
                    Get immediate answers to your questions with a quick call or WhatsApp message.
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="tel:+919207509746"
                      className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover-scale"
                    >
                      <Phone className="h-6 w-6 mr-4" />
                      <div>
                        <p className="font-semibold">Call Now</p>
                        <p className="text-sm opacity-90">+91 9207509746</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://wa.me/919207509746"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover-scale"
                    >
                      <MessageCircle className="h-6 w-6 mr-4" />
                      <div>
                        <p className="font-semibold">WhatsApp</p>
                        <p className="text-sm opacity-90">Chat with us instantly</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isVisible = visibleItems.includes(index + 10);
                    return (
                      <div 
                        key={index}
                        className={`contact-item bg-white rounded-lg p-6 shadow-card hover:shadow-float transition-all duration-500 ${
                          isVisible ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                        data-index={index + 10}
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                        <p className="text-muted-foreground text-sm">{faq.answer}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of the business district
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-card text-center animate-fade-in">
            <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-muted-foreground">Palakkad District, Kerala 679513, India</p>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://maps.app.goo.gl/grgAmzqPj3pwdXvR9?g_st=awb"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-hero hover-scale group"
              >
                Get Directions
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="btn-hero hover-scale">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default ContactPage;