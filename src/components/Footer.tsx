import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Linkedin, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/Acumatic_updated tranparent.fw (1).png" 
                alt="Acumatic Logo" 
                className="h-8 w-auto filter brightness-0 invert object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'block';
                }}
              />
              <span 
                className="text-xl font-bold hidden"
                style={{ display: 'none' }}
              >
                Acumatic
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of innovative access control solutions in the UAE. 
              Securing your world with cutting-edge technology and reliable products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://wa.me/971526311773" className="text-gray-400 hover:text-green-400 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Magnetic%20Locks" className="text-gray-300 hover:text-white transition-colors">
                  Magnetic Locks
                </Link>
              </li>
              <li>
                <Link to="/products?category=Electric%20Bolt%20Locks" className="text-gray-300 hover:text-white transition-colors">
                  Electric Bolt Locks
                </Link>
              </li>
              <li>
                <Link to="/products?category=Access%20Control%20Keypads" className="text-gray-300 hover:text-white transition-colors">
                  Access Keypads
                </Link>
              </li>
              <li>
                <Link to="/products?category=Remote%20Controls%20%26%20Receivers" className="text-gray-300 hover:text-white transition-colors">
                  Remote Controls
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#8A1538]" />
                <a href="tel:+971526311773" className="text-gray-300 hover:text-white transition-colors">
                  +971 52 631 1773
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#8A1538]" />
                <a href="mailto:sales@acumatic.me" className="text-gray-300 hover:text-white transition-colors">
                  sales@acumatic.me
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#8A1538]" />
                <span className="text-gray-300">Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Acumatic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;