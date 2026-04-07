import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Packages', href: '#packages' },
    { name: 'Process', href: '#process' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919072245555" className="flex items-center gap-2 hover:text-purple-200 transition-colors">
              <Phone size={16} />
              <span className="hidden md:inline">+91 90722 45555</span>
            </a>
            <a href="mailto:info@dlifeinteriors.com" className="flex items-center gap-2 hover:text-purple-200 transition-colors">
              <Mail size={16} />
              <span className="hidden md:inline">info@dlifeinteriors.com</span>
            </a>
          </div>
          <div className="text-xs md:text-sm">
            Mumbai | Bangalore | Chennai | Coimbatore
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg mt-0'
            : 'bg-transparent mt-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1
                className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-purple-800' : 'text-white'
                }`}
              >
                D'LIFE <span className="text-purple-600">INTERIORS</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-purple-600 relative group ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <Button
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Free Estimate
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-md shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
              Free Estimate
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

