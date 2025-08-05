import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    "Website Design",
    "Local SEO",
    "Social Media Marketing",
    "Logo & Branding",
    "Photography",
    "WhatsApp Marketing",
    "Complete Package",
    "Other"
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 9207509746",
      subInfo: "Mon-Fri 9AM-6PM IST"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "mfbrandwox@gmail.com",
      subInfo: "We reply within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Palakkad District, Kerala",
      subInfo: "India - 679513"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri: 9AM-6PM",
      subInfo: "Weekend: By appointment"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start Your{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Digital Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with us today for a free 
            consultation and custom quote tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-muted/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="+91 9207509746"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                    placeholder="Describe your project goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero group disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Have questions? We're here to help! Reach out to us through any of 
                  the methods below, and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-foreground">{item.info}</p>
                        <p className="text-sm text-muted-foreground">{item.subInfo}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Free Consultation</h4>
                <p className="opacity-90 mb-4">
                  Book a 30-minute strategy call to discuss your project and get 
                  expert recommendations - completely free!
                </p>
                <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 flex items-center justify-center">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;