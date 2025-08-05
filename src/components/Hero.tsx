import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Digital Solutions Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Grow Your{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Local Business
                </span>{' '}
                with Smart Digital Solutions
              </h1>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                From stunning websites to powerful marketing campaigns, we help local businesses 
                transform their digital presence and drive real results.
              </p>
            </div>

            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 items-center justify-center" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-hero group w-full sm:w-auto flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('#portfolio')}
                className="btn-outline-hero group w-full sm:w-auto flex items-center justify-center"
              >
                <Play className="mr-2 h-5 w-5" />
                See Our Work
              </button>
            </div>

            <div className="animate-fade-in-up mt-12 grid grid-cols-3 gap-8 text-center lg:text-left" style={{ animationDelay: '0.6s' }}>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">100+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5⭐</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="animate-scale-in relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                <div className="h-full bg-white/50 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 animate-bounce-soft" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Ready to Transform?
                    </h3>
                    <p className="text-muted-foreground">
                      Let's build something amazing together
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;