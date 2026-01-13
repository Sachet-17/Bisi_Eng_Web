import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { navigation } from '../data/mock';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle hash scroll after navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const navbarHeight = 80; // Fixed navbar height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - navbarHeight, behavior: 'smooth' });
        }
      }, 300);
    }
  }, [location]);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href.split('#')[0]);
  };

  const handleNavClick = (href, e) => {
    // Check if href contains a hash
    if (href.includes('#')) {
      e.preventDefault();
      const [path, hash] = href.split('#');
      
      // If we're already on the same page, just scroll
      if (location.pathname === path) {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - navbarHeight, behavior: 'smooth' });
        }
      } else {
        // Navigate to the page, then scroll
        navigate(href);
      }
    }
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/images/bisi-logo.png" 
              alt="BISI Engineering Logo" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 tracking-tight leading-tight">BISI</span>
              <span className="text-xs text-gray-600 tracking-wider">ENGINEERING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1" ref={dropdownRef}>
            {navigation.links.map((link, index) => (
              <div key={index} className="relative">
                {link.hasDropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') setActiveDropdown(null);
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === index ? null : index);
                      }
                    }}
                    aria-expanded={activeDropdown === index}
                    aria-haspopup="true"
                    aria-label={`${link.name} menu`}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 ${
                      isActive(link.href) ? 'text-[#22C55E]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 ${
                      isActive(link.href) ? 'text-[#22C55E]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === index && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                    role="menu"
                    aria-label={`${link.name} submenu`}
                  >
                    {link.dropdownItems?.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.href}
                        role="menuitem"
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-[#22C55E] hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:text-[#22C55E] transition-colors"
                        onClick={(e) => handleNavClick(item.href, e)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            handleNavClick(item.href, e);
                          }
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to={navigation.cta.href}
            className="hidden xl:flex items-center gap-2 bg-[#22C55E] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#16A34A] transition-all group"
          >
            {navigation.cta.name}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
            className="xl:hidden p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 rounded-md"
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="xl:hidden bg-white border-t max-h-[80vh] overflow-y-auto" role="menu">
          <div className="px-4 py-4 space-y-1">
            {navigation.links.map((link, index) => (
              <div key={index}>
                <Link
                  to={link.href.split('#')[0]}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    isActive(link.href) ? 'text-[#22C55E] bg-green-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdownItems && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdownItems.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.href}
                        className="block px-3 py-1.5 text-sm text-gray-500 hover:text-[#22C55E]"
                        onClick={(e) => {
                          handleNavClick(item.href, e);
                          setIsOpen(false);
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to={navigation.cta.href}
              className="inline-flex items-center gap-2 bg-[#22C55E] text-white px-5 py-2.5 rounded-full text-sm font-medium mt-4"
              onClick={() => setIsOpen(false)}
            >
              {navigation.cta.name}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
