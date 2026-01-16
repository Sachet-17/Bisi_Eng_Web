import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { aboutPage } from '../data/mock';
import { Building2, Home, Factory, Landmark, Paintbrush, Wrench, CheckCircle, Users, ArrowRight, Award, Target, Heart, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { SafeImage } from '../components/common';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../components/animations';

const iconMap = { Building2, Home, Factory, Landmark, Paintbrush, Wrench };
const valueIcons = { Award, Target, Heart, Shield, CheckCircle, Users };

const AboutPage = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeSection, setActiveSection] = useState(0);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      const newScrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionIndex) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * sectionIndex;
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const currentSection = Math.round(scrollLeft / containerWidth);
      
      setActiveSection(currentSection);
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      handleScroll();
      // Check on resize
      const handleResize = () => handleScroll();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <motion.div 
      className="min-h-screen pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[60vh] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 to-transparent" />
          {/* Decorative elements */}
          <motion.div 
            className="absolute top-20 right-20 w-72 h-72 bg-[#22C55E]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm text-[#22C55E] uppercase tracking-wider font-medium mb-3">
                Our Story
              </span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[#22C55E]">{aboutPage.hero.title.split(' ')[0]}</span> {aboutPage.hero.title.split(' ').slice(1).join(' ')}
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {aboutPage.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Bar - Quick Overview */}
      <section className="py-10 lg:py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: '27+', label: 'Years Experience' },
              { value: '100+', label: "Happy client's" },
              { value: '100+', label: 'Projects' },
              { value: '4300+', label: 'Team Members' }
            ].map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <div className="font-display text-4xl lg:text-5xl font-bold text-[#22C55E] mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* MD Message - Redesigned */}
      <section id="md-message" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#22C55E]/5 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Section */}
            <FadeInLeft className="relative lg:order-1">
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-[#22C55E]/20 to-[#1a2744]/10 rounded-2xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <SafeImage
                    src={aboutPage.mdMessage.image}
                    alt={aboutPage.mdMessage.name}
                    className="w-full aspect-[4/5] object-cover"
                    placeholderLabel="MD Photo"
                  />
                </div>
                {/* Floating badge */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-[#22C55E] text-white p-6 rounded-xl shadow-xl hidden lg:block"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-3xl font-bold">27+</div>
                  <div className="text-xs font-medium">Years Leading</div>
                </motion.div>
              </div>
            </FadeInLeft>

            {/* Content Section */}
            <FadeInRight className="lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="section-label">Leadership Message</span>
                <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0f172a] mb-5 leading-tight tracking-tight">
                  {aboutPage.mdMessage.title}
                </h2>
              </motion.div>
              
              <div className="space-y-4 mb-6">
                {aboutPage.mdMessage.message.split('\n\n').map((paragraph, index) => (
                  <motion.p 
                    key={index} 
                    className="text-gray-700 leading-relaxed text-base lg:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              
              <motion.div 
                className="pt-4 border-t border-gray-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-xl font-light text-[#1a2744]">{aboutPage.mdMessage.name}</div>
                <div className="text-gray-500 text-sm font-medium">{aboutPage.mdMessage.position}</div>
              </motion.div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Capabilities & Values - Merged Scrollable Section */}
      <section id="capabilities" className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-[#1a2744] to-[#1E3A5F] overflow-hidden relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Scrollable Container */}
          <div className="relative">
            {/* Scrollable Content - Two Sections */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-6 md:gap-8 overflow-x-auto pb-4 scroll-smooth hide-scrollbar snap-x snap-mandatory"
            >
              {/* Section 1: Capabilities */}
              <div className="flex-shrink-0 w-full snap-center">
                <FadeInUp className="text-center mb-6 md:mb-6 lg:mb-8 px-2">
                  <span className="inline-block text-xs sm:text-sm text-[#22C55E] uppercase tracking-wider font-medium mb-2">
                    What We Do
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2">
                    {aboutPage.capabilities.title}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                    {aboutPage.capabilities.subtitle}
                  </p>
                </FadeInUp>

                <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-5">
                  {aboutPage.capabilities.items.map((item, index) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <StaggerItem key={index}>
                        <motion.div 
                          className="group relative bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:bg-white/15 transition-all duration-300 h-full"
                          whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Icon */}
                          <motion.div 
                            className="relative mb-3"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#22C55E]/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-[#22C55E] transition-all duration-300">
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#22C55E] group-hover:text-white transition-colors duration-300" />
                            </div>
                          </motion.div>
                          
                          <h3 className="text-base sm:text-lg font-light text-white mb-2 group-hover:text-[#22C55E] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            {item.description}
                          </p>
                          
                          {/* Hover accent */}
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22C55E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
                        </motion.div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </div>

              {/* Section 2: Values */}
              <div className="flex-shrink-0 w-full snap-center">
                <FadeInUp className="text-center mb-6 md:mb-6 lg:mb-8 px-2">
                  <span className="inline-block text-xs sm:text-sm text-[#22C55E] uppercase tracking-wider font-medium mb-2">
                    Our Values
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2">
                    {aboutPage.policy.title}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                    {aboutPage.policy.subtitle}
                  </p>
                </FadeInUp>

                <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-5">
                  {aboutPage.policy.policies.map((policy, index) => (
                    <StaggerItem key={index}>
                      <motion.div 
                        className="group relative bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:bg-white/15 transition-all duration-300 h-full"
                        whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Icon */}
                        <motion.div 
                          className="relative mb-3"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#22C55E]/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-[#22C55E] transition-all duration-300">
                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#22C55E] group-hover:text-white transition-colors duration-300" />
                          </div>
                        </motion.div>
                        
                        <h3 className="text-base sm:text-lg font-light text-white mb-2 group-hover:text-[#22C55E] transition-colors">
                          {policy.title}
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          {policy.description}
                        </p>
                        
                        {/* Hover accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22C55E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>

            {/* Bottom Navigation: Tabs and Arrows */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-6">
              {/* Left Arrow */}
              <motion.button
                onClick={() => scroll('left')}
                disabled={!showLeftArrow}
                className={`bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-all duration-300 shadow-lg flex-shrink-0 ${
                  !showLeftArrow ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={showLeftArrow ? { scale: 1.1 } : {}}
                whileTap={showLeftArrow ? { scale: 0.9 } : {}}
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>

              {/* Tabs */}
              <div className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-lg rounded-full px-1.5 sm:px-2 py-1 sm:py-1.5 border border-white/20">
                <button
                  onClick={() => scrollToSection(0)}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeSection === 0
                      ? 'bg-[#22C55E] text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="hidden sm:inline">Our </span>Capabilities
                </button>
                <button
                  onClick={() => scrollToSection(1)}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeSection === 1
                      ? 'bg-[#22C55E] text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="hidden sm:inline">Our </span>Values
                </button>
              </div>

              {/* Right Arrow */}
              <motion.button
                onClick={() => scroll('right')}
                disabled={!showRightArrow}
                className={`bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-all duration-300 shadow-lg flex-shrink-0 ${
                  !showRightArrow ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={showRightArrow ? { scale: 1.1 } : {}}
                whileTap={showRightArrow ? { scale: 0.9 } : {}}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure - Modern Cards */}
      <section id="structure" className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="section-label">Our Organization</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0f172a] mb-4 tracking-tight">
              {aboutPage.structure.title}
            </h2>
            <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto mb-6">
              {aboutPage.structure.subtitle}
            </p>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-base text-[#22C55E] hover:text-[#16A34A] transition-all duration-300 group font-medium"
            >
              Meet Our Team
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.08} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutPage.structure.departments.map((dept, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-5 hover:border-[#22C55E]/30 transition-all duration-300 h-full"
                  whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.08)' }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mb-3"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-11 h-11 bg-[#22C55E]/10 rounded-lg flex items-center justify-center group-hover:bg-[#22C55E] transition-colors duration-300">
                      <Users className="w-5 h-5 text-[#22C55E] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </motion.div>
                  <h3 className="font-light text-[#1a2744] mb-1.5 group-hover:text-[#22C55E] transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{dept.head}</p>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA - Enhanced */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <FadeInLeft className="bg-gradient-to-br from-[#22C55E] to-[#15803d] py-20 lg:py-28 px-8 lg:px-16 flex items-center">
            <div className="max-w-lg mx-auto lg:mx-0 lg:ml-auto lg:mr-20">
              <motion.span
                className="section-label !text-white/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Get Started
              </motion.span>
              <motion.h2 
                className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to work with us?
              </motion.h2>
              <motion.p 
                className="text-white/80 mb-10 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Let's discuss how we can bring your project to life.
              </motion.p>
              <Link to="/contact">
                <motion.span
                  className="group inline-flex items-center gap-3 bg-white text-[#0f172a] px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Get in Touch
                  <span className="relative w-5 h-5 overflow-hidden">
                    <ArrowRight className="w-5 h-5 text-[#22C55E] absolute transition-all duration-300 group-hover:translate-x-6" />
                    <ArrowRight className="w-5 h-5 text-[#22C55E] absolute transition-all duration-300 -translate-x-6 group-hover:translate-x-0" />
                  </span>
                </motion.span>
              </Link>
            </div>
          </FadeInLeft>

          <FadeInRight className="relative min-h-[450px] lg:min-h-[550px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center">
            <div className="absolute inset-0">
              <motion.div 
                className="absolute top-0 right-0 w-56 lg:w-72 h-full bg-[#3B82F6]/90"
                style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0 100%)' }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            
            <motion.div 
              className="relative z-10 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mb-6"
              >
                <Users className="w-24 h-24 text-white/20 mx-auto" />
              </motion.div>
              <div className="text-white/90">
                <div className="text-5xl lg:text-6xl font-bold mb-2">Zero</div>
                <div className="text-lg font-medium">Compromise</div>
              </div>
            </motion.div>
          </FadeInRight>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
