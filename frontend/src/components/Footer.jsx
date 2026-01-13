import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { footerContent } from '../data/mock';

const Footer = () => {
  const socialIcons = {
    LinkedIn: Linkedin,
    Twitter: Twitter,
    Facebook: Facebook,
    Instagram: Instagram
  };

  return (
    <footer className="bg-[#1a2744] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src="/images/bisi-logo.png" 
                alt="BISI Engineering Logo" 
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight leading-tight">BISI</span>
                <span className="text-xs text-gray-400 tracking-wider">ENGINEERING</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm text-sm leading-relaxed">
              {footerContent.tagline}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href={`mailto:${footerContent.email}`} className="flex items-center gap-3 text-gray-400 hover:text-[#22C55E] transition-colors text-sm">
                <Mail className="w-5 h-5" />
                <span>{footerContent.email}</span>
              </a>
              <a href={`tel:${footerContent.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-[#22C55E] transition-colors text-sm">
                <Phone className="w-5 h-5" />
                <span>{footerContent.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{footerContent.address}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerContent.links.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-[#22C55E] transition-colors text-sm"
                    >
                      {item.name}
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              {footerContent.copyright}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {footerContent.social.map((social, index) => {
                const Icon = socialIcons[social.name];
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#22C55E] hover:text-white transition-all"
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
