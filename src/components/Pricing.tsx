import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$999",
      period: "one-time",
      description: "Perfect for small businesses getting started online",
      popular: false,
      features: [
        "Professional Website (5 pages)",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month Free Support",
        "Google My Business Setup",
        "Basic Social Media Setup"
      ],
      cta: "Get Started"
    },
    {
      name: "Standard",
      price: "$1,999",
      period: "one-time",
      description: "Comprehensive solution for growing businesses",
      popular: true,
      features: [
        "Professional Website (10 pages)",
        "E-commerce Integration",
        "Advanced SEO Optimization",
        "Social Media Marketing (3 months)",
        "Professional Photography Session",
        "Logo & Brand Design",
        "3 Months Free Support",
        "WhatsApp Business Integration",
        "Google Ads Setup ($300 credit)"
      ],
      cta: "Most Popular"
    },
    {
      name: "Premium",
      price: "$3,999",
      period: "one-time",
      description: "Complete digital transformation package",
      popular: false,
      features: [
        "Custom Website Development",
        "Full E-commerce Solution",
        "Complete Brand Identity",
        "6 Months Social Media Management",
        "Professional Video & Photography",
        "Advanced SEO & Local Marketing",
        "Email Marketing Automation",
        "6 Months Free Support",
        "Priority Support & Updates",
        "Custom App Development"
      ],
      cta: "Go Premium"
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect package for your business. No hidden fees, 
            no surprises - just honest pricing for exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 shadow-card hover:shadow-float transition-all duration-500 animate-fade-in-up ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                  plan.popular
                    ? 'btn-hero'
                    : 'btn-outline-hero'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Zap className="h-6 w-6 text-primary mr-2" />
              Add-On Services
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Additional Website Pages</span>
                <span className="font-semibold">$199/page</span>
              </div>
              <div className="flex justify-between">
                <span>Product Photography</span>
                <span className="font-semibold">$299/session</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly SEO Maintenance</span>
                <span className="font-semibold">$399/month</span>
              </div>
              <div className="flex justify-between">
                <span>Social Media Management</span>
                <span className="font-semibold">$599/month</span>
              </div>
              <div className="flex justify-between">
                <span>Google Ads Management</span>
                <span className="font-semibold">$799/month</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Packages?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                <span>No ongoing monthly fees for websites</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                <span>Free support included with every package</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                <span>Custom solutions tailored to your needs</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                <span>Results-driven approach with proven ROI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Need something custom? We're happy to create a personalized package for your unique needs.
          </p>
          <button className="btn-outline-hero flex items-center justify-center mx-auto">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;