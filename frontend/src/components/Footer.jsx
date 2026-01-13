import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { footerContent } from '../data/mock';

const Footer = () => {
  const socialIcons = {
    LinkedIn: Linkedin,
    Twitter: Twitter,
    Facebook: Facebook,
    Instagram: Instagram
  };

  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#22C55E]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <img 
                src="/images/bisi-logo.png" 
                alt="BISI Engineering Logo" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight leading-tight font-display">BISI</span>
                <span className="text-[10px] text-gray-400 tracking-[0.2em] font-medium uppercase">Engineering</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm text-base leading-relaxed">
              {footerContent.tagline}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href={`mailto:${footerContent.email}`} 
                className="flex items-center gap-4 text-gray-400 hover:text-[#22C55E] transition-all duration-300 text-[15px] group"
              >
                <span className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#22C55E]/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </span>
                <span>{footerContent.email}</span>
              </a>
              <a 
                href={`tel:${footerContent.phone}`} 
                className="flex items-center gap-4 text-gray-400 hover:text-[#22C55E] transition-all duration-300 text-[15px] group"
              >
                <span className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#22C55E]/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </span>
                <span>{footerContent.phone}</span>
              </a>
              <div className="flex items-start gap-4 text-gray-400 text-[15px]">
                <span className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </span>
                <span className="leading-relaxed">{footerContent.address}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerContent.links.map((section, index) => (
            <div key={index} className="lg:col-span-2">
              <h4 className="font-display font-semibold text-lg mb-6 text-white">{section.title}</h4>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-[#22C55E] transition-all duration-300 text-[15px] inline-flex items-center gap-1 group"
                    >
                      {item.name}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm">
              {footerContent.copyright}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {footerContent.social.map((social, index) => {
                const Icon = socialIcons[social.name];
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#22C55E] hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
