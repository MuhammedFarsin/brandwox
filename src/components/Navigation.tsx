import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'Services', href: '/services', type: 'link' },
    { name: 'Portfolio', href: '/portfolio', type: 'link' },
    { name: 'About', href: '/about', type: 'link' },
    { name: 'Pricing', href: '/pricing', type: 'link' },
    { name: 'Contact', href: '/contact', type: 'link' }
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.type === 'scroll') {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.href);
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Brandwox
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium hover-scale"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex space-x-4">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-outline-hero hover-scale flex items-center"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors duration-300 hover-scale"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => navigate('/contact')}
                className="w-full btn-hero mt-4 hover-scale flex items-center justify-center"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;