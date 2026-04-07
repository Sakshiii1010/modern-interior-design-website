import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              D'LIFE <span className="text-purple-400">INTERIORS</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating lifestyles, not just homes. Mumbai's most trusted interior design company with 18+ years of excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Packages', 'Process', 'Gallery', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-4"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Modular Kitchen</li>
              <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Living Room Design</li>
              <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Bedroom Interiors</li>
              <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Dining Room</li>
              <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Custom Furniture</li>
              <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">3D Visualization</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-sm">Mahakali Caves Rd, Andheri East, Mumbai 400093</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone size={20} className="text-purple-400 flex-shrink-0" />
                <a href="tel:+919072245555" className="hover:text-purple-400 transition-colors">+91 90722 45555</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-purple-400 flex-shrink-0" />
                <a href="mailto:info@dlifeinteriors.com" className="hover:text-purple-400 transition-colors">info@dlifeinteriors.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} D'LIFE Interiors. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
