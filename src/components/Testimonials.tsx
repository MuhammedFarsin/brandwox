import { Star, Quote } from 'lucide-react';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      company: "Bella Vista Bistro",
      image: testimonial1,
      rating: 5,
      testimonial: "Brandwox Solutions transformed our online presence completely! Our website looks amazing and we've seen a 300% increase in online orders. Their team is professional, creative, and really understands local business needs."
    },
    {
      name: "Michael Chen",
      role: "Fitness Studio Owner",
      company: "Peak Performance Gym",
      image: testimonial2,
      rating: 5,
      testimonial: "Working with Brandwox was the best decision for our gym. They created an incredible website, managed our social media, and our membership has doubled in just 6 months. Highly recommend their services!"
    },
    {
      name: "Emily Rodriguez",
      role: "Boutique Owner",
      company: "Elegant Threads",
      image: testimonial3,
      rating: 5,
      testimonial: "The branding and photography services exceeded our expectations. Our new logo and product photos have elevated our brand image significantly. Sales have increased by 150% since launching our new website."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real businesses say about 
            working with Brandwox Solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-testimonial animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-muted-foreground mb-6">
              Let's create amazing results for your business too.
            </p>
            <div className="flex items-center justify-center">
              <button className="btn-hero flex items-center justify-center">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;