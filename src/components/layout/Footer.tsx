import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zeex-800 text-white pt-16 pb-8">
      <div className="container-default">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-zeex-600 font-bold">Z</span>
              </div>
              <span className="font-poppins font-bold text-2xl">ZeexAI</span>
            </div>
            <p className="text-zeex-100 mt-4 max-w-xs">
              AI-powered surveillance and security solutions for a safer tomorrow.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" className="hover:text-zeex-300 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-zeex-300 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/zeex-ai" className="hover:text-zeex-300 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/zeex_ai/" className="hover:text-zeex-300 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-zeex-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-zeex-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-zeex-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/solutions" className="text-zeex-100 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/blog" className="text-zeex-100 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-zeex-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services - Updated with SEO-friendly options */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/retail-wholesale-high-risk" className="text-zeex-100 hover:text-white transition-colors">Retail & High-Risk Shop Security</Link></li>
              <li><Link to="/services/banks-atms-financial" className="text-zeex-100 hover:text-white transition-colors">Bank & ATM Security Solutions</Link></li>
              <li><Link to="/services/industry-smart-factories" className="text-zeex-100 hover:text-white transition-colors">Industrial Safety Monitoring</Link></li>
              <li><Link to="/services/smart-cities-infrastructure" className="text-zeex-100 hover:text-white transition-colors">Smart City Surveillance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Phone size={20} className="flex-shrink-0 text-zeex-300" />
                <span className="text-zeex-100">+91 8709221636</span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="flex-shrink-0 text-zeex-300" />
                <span className="text-zeex-100">admin@zeexai.com</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={20} className="flex-shrink-0 text-zeex-300" />
                <span className="text-zeex-100">Nirmaan, CFI, IIT Madras</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zeex-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zeex-100 text-sm">© {new Date().getFullYear()} ZeexAI. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-zeex-100 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-zeex-100 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;