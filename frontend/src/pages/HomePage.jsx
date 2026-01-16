import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroContent, statsSection, ctaSection, clientsPage } from '../data/mock';
import { SafeImage } from '../components/common';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../components/animations';

const HomePage = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[85vh] pt-24 overflow-hidden">
        {/* Background with parallax effect */}
        <motion.div 
          className="absolute inset-0 bg-[#0f172a]" 
          style={{ top: '0px' }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {heroContent.backgroundImage && (
            <motion.div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 to-transparent" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-28 pb-32">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">27+ Years of Excellence</span>
            </motion.div>
            
            <motion.h1 
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[#22C55E]">Engineering</span> Excellence Since 2004
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {heroContent.subtitle}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap items-center gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={heroContent.primaryCta.href}>
                <motion.span
                  className="group inline-flex items-center gap-3 bg-[#22C55E] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#16A34A] transition-all duration-300 shadow-lg hover:shadow-glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {heroContent.primaryCta.text}
                  <span className="relative w-5 h-5 overflow-hidden">
                    <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-6" />
                    <ArrowRight className="w-5 h-5 absolute transition-all duration-300 -translate-x-6 group-hover:translate-x-0" />
                  </span>
                </motion.span>
              </Link>
              <Link
                to={heroContent.secondaryCta.href}
                className="group inline-flex items-center gap-2 text-white/90 hover:text-white px-4 py-4 text-base font-medium transition-all duration-300"
              >
                {heroContent.secondaryCta.text}
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="section-label">{statsSection.subtitle}</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0f172a] tracking-tight">
              {statsSection.title}
            </h2>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
            {statsSection.stats.map((stat, index) => (
              <StaggerItem key={index} className="text-center group">
                <motion.div 
                  className="text-4xl lg:text-5xl font-display font-bold text-[#22C55E] mb-3 tracking-tight whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm lg:text-base font-semibold text-[#0f172a] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs lg:text-sm text-gray-500">
                  {stat.description}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Us Two-Column Section */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left Column - Green Background */}
          <FadeInLeft className="bg-gradient-to-br from-[#22C55E] to-[#15803d] py-20 lg:py-32 px-8 lg:px-16 flex items-center relative overflow-hidden">
            <div className="relative z-10 max-w-lg mx-auto lg:mx-0 w-full">
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-sm font-semibold text-white/90 uppercase tracking-[0.2em] mb-3 block">
                  About us
                </span>
                <div className="w-16 h-1 bg-white/30 rounded-full"></div>
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {['Reliability.', 'Innovation.', 'Experience.'].map((word, idx) => (
                  <motion.h3 
                    key={idx}
                    className="font-display text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-none tracking-tight"
                    whileHover={{ x: 12 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {word}
                  </motion.h3>
                ))}
              </motion.div>
            </div>
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-0 right-0 w-72 lg:w-96 h-full bg-[#3B82F6]/15"
              style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <div className="absolute bottom-12 right-12 opacity-20">
              <div className="flex gap-3">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
            </div>
          </FadeInLeft>

          {/* Right Column - Navy Background */}
          <FadeInRight className="bg-[#0f172a] py-20 lg:py-32 px-8 lg:px-16 flex items-center relative">
            <div className="max-w-lg mx-auto lg:mx-0 lg:ml-auto w-full">
              <motion.h2 
                className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight mb-8 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Delivering unmatched quality and innovation in every project.
              </motion.h2>
              <motion.p 
                className="text-gray-400 mb-10 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                With over two decades of experience in the industry, our team combines innovative techniques, cutting-edge technology, and a commitment to quality craftsmanship.
              </motion.p>
              <Link to="/about">
                <motion.span
                  className="group inline-flex items-center gap-3 bg-white text-[#0f172a] px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Learn More About BISI
                  <span className="relative w-5 h-5 overflow-hidden">
                    <ArrowRight className="w-5 h-5 text-[#22C55E] absolute transition-all duration-300 group-hover:translate-x-6" />
                    <ArrowRight className="w-5 h-5 text-[#22C55E] absolute transition-all duration-300 -translate-x-6 group-hover:translate-x-0" />
                  </span>
                </motion.span>
              </Link>
            </div>
            {/* Accent line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-40 bg-gradient-to-b from-[#22C55E] to-[#3B82F6] opacity-40 rounded-full"></div>
          </FadeInRight>
        </div>
      </section>

      {/* Trusted By Section with Marquee */}
      <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-14">
              <span className="section-label">Our Partners</span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-[#0f172a] mb-4 tracking-tight">
                Trusted By
              </h2>
              <Link
                to="/clients"
                className="inline-flex items-center gap-2 text-base text-gray-600 hover:text-[#22C55E] transition-all duration-300 group font-medium"
              >
                See more of our clientele
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeInUp>

          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
            
            {(() => {
              const allClients = clientsPage.clientCategories.flatMap(category => category.clients);
              return (
                <div className="marquee-container flex items-center gap-16 px-8">
                  {allClients.map((client, index) => (
                    <motion.div
                      key={`first-${index}-${client.name}`}
                      className="flex-shrink-0 w-44 h-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                      whileHover={{ scale: 1.08 }}
                    >
                      <SafeImage
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain"
                        placeholderLabel={client.name}
                      />
                    </motion.div>
                  ))}
                  
                  {allClients.map((client, index) => (
                    <motion.div
                      key={`second-${index}-${client.name}`}
                      className="flex-shrink-0 w-44 h-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                      whileHover={{ scale: 1.08 }}
                    >
                      <SafeImage
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain"
                        placeholderLabel={client.name}
                      />
                    </motion.div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                {ctaSection.title}
              </motion.h2>
              <motion.p 
                className="text-white/80 mb-10 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {ctaSection.description}
              </motion.p>
              <Link to={ctaSection.cta.href}>
                <motion.span
                  className="group inline-flex items-center gap-3 bg-white text-[#0f172a] px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {ctaSection.cta.text}
                  <span className="relative w-5 h-5 overflow-hidden">
                    <ArrowRight className="w-5 h-5 text-[#22C55E] absolute transition-all duration-300 group-hover:translate-x-6" />
                    <ArrowRight className="w-5 h-5 text-[#22C55E] absolute transition-all duration-300 -translate-x-6 group-hover:translate-x-0" />
                  </span>
                </motion.span>
              </Link>
            </div>
          </FadeInLeft>

          <FadeInRight className="relative min-h-[450px] lg:min-h-[550px]">
            <SafeImage
              src={ctaSection.image}
              alt="Industrial construction"
              className="absolute inset-0 w-full h-full"
              placeholderLabel="CTA Background Image"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50" />
            
            {/* Blue diagonal strap */}
            <motion.div 
              className="absolute top-0 right-0 w-56 lg:w-72 h-full bg-[#3B82F6]/90"
              style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0 100%)' }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <motion.div 
              className="absolute bottom-12 right-12 text-right z-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-sm text-white/90 block mb-2 tracking-wider font-medium uppercase">
                {ctaSection.yearsLabel}
              </span>
              <motion.span 
                className="font-display text-6xl lg:text-7xl xl:text-8xl font-bold text-white/90 leading-none block tracking-tight"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 100 }}
              >
                {ctaSection.yearsValue}
              </motion.span>
            </motion.div>
          </FadeInRight>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
