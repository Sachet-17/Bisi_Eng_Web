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
      <section className="relative min-h-[70vh] pt-20 overflow-hidden">
        {/* Background with parallax effect */}
        <motion.div 
          className="absolute inset-0 bg-[#1a2744]" 
          style={{ top: '80px' }}
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2744]/90 via-[#1a2744]/70 to-[#1a2744]/40" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-20 pb-24">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white leading-[1.15] mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[#22C55E]">Engineering</span> Excellence Since 2004
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-base mb-8 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {heroContent.subtitle}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={heroContent.primaryCta.href}>
                <motion.span
                  className="group inline-flex items-center gap-3 bg-[#22C55E] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#16A34A] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {heroContent.primaryCta.text}
                  <span className="relative w-4 h-4 overflow-hidden">
                    <ArrowRight className="w-4 h-4 absolute transition-all duration-300 group-hover:translate-x-5" />
                    <ArrowRight className="w-4 h-4 absolute transition-all duration-300 -translate-x-5 group-hover:translate-x-0" />
                  </span>
                </motion.span>
              </Link>
              <Link
                to={heroContent.secondaryCta.href}
                className="group inline-flex items-center gap-2 text-white border-b border-white/70 pb-1 text-sm font-medium hover:border-[#22C55E] hover:text-[#22C55E] transition-colors"
              >
                {heroContent.secondaryCta.text}
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Moved to top for immediate impact */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-light text-[#1a2744] mb-2">
              {statsSection.title}
            </h2>
            <p className="text-gray-600 text-sm">{statsSection.subtitle}</p>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {statsSection.stats.map((stat, index) => (
              <StaggerItem key={index} className="text-center group">
                <motion.div 
                  className="text-3xl lg:text-4xl font-light text-[#22C55E] mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs lg:text-sm font-semibold text-[#1a2744] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.description}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Us Two-Column Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="grid lg:grid-cols-2">
          {/* Left Column - Green Background */}
          <FadeInLeft className="bg-gradient-to-br from-[#22C55E] to-[#16A34A] py-16 lg:py-24 px-8 lg:px-16 flex items-center relative overflow-hidden">
            <div className="relative z-10 max-w-md mx-auto lg:mx-0 w-full">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-sm lg:text-base font-medium text-white/90 uppercase tracking-wider mb-2 block">
                  About us
                </span>
                <div className="w-12 h-0.5 bg-white/50 mb-6"></div>
              </motion.div>
              <motion.div
                className="space-y-4 lg:space-y-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.h3 
                  className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Reliability.
                </motion.h3>
                <motion.h3 
                  className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Innovation.
                </motion.h3>
                <motion.h3 
                  className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Experience.
                </motion.h3>
              </motion.div>
            </div>
            {/* Subtle geometric pattern overlay */}
            <motion.div 
              className="absolute top-0 right-0 w-64 lg:w-80 h-full bg-[#3B82F6]/10"
              style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            {/* Decorative dots */}
            <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 opacity-20">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
            </div>
          </FadeInLeft>

          {/* Right Column - Navy Background */}
          <FadeInRight className="bg-[#1a2744] py-16 lg:py-24 px-8 lg:px-16 flex items-center relative">
            <div className="max-w-lg mx-auto lg:mx-0 lg:ml-auto w-full">
              <motion.h2 
                className="text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Delivering unmatched quality and innovation in every project, built on trust and lasting commitment.
              </motion.h2>
              <motion.p 
                className="text-gray-300 mb-8 leading-relaxed text-base lg:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                With over two decades of experience in the industry, our team combines innovative techniques, cutting-edge technology, and a commitment to quality craftsmanship.
              </motion.p>
              <Link to="/about">
                <motion.span
                  className="group inline-flex items-center gap-3 bg-white text-[#1a2744] px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Learn More About BISI
                  <span className="relative w-4 h-4 overflow-hidden">
                    <ArrowRight className="w-4 h-4 text-[#22C55E] absolute transition-all duration-300 group-hover:translate-x-5" />
                    <ArrowRight className="w-4 h-4 text-[#22C55E] absolute transition-all duration-300 -translate-x-5 group-hover:translate-x-0" />
                  </span>
                </motion.span>
              </Link>
            </div>
            {/* Subtle accent line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-[#22C55E] to-[#3B82F6] opacity-30"></div>
          </FadeInRight>
        </div>
      </section>

      {/* Trusted By Section with Marquee */}
      <section className="py-12 lg:py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp>
            <h2 className="text-2xl lg:text-3xl font-light text-[#1a2744] text-center mb-3">
              Trusted By
            </h2>
            <div className="text-center mb-10">
              <Link
                to="/clients"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#22C55E] transition-colors group"
              >
                See more of our clientele
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeInUp>

          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
            
            {/* Get all clients */}
            {(() => {
              const allClients = clientsPage.clientCategories.flatMap(category => category.clients);
              return (
                <motion.div
                  className="flex items-center gap-12 px-8"
                  animate={{
                    x: ['0%', '-50%'],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 50,
                      ease: "linear",
                    },
                  }}
                >
                  {/* First set of logos */}
                  {allClients.map((client, index) => (
                    <motion.div
                      key={`first-${index}-${client.name}`}
                      className="flex-shrink-0 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <SafeImage
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain"
                        placeholderLabel={client.name}
                      />
                    </motion.div>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {allClients.map((client, index) => (
                    <motion.div
                      key={`second-${index}-${client.name}`}
                      className="flex-shrink-0 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <SafeImage
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain"
                        placeholderLabel={client.name}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <FadeInLeft className="bg-[#22C55E] py-16 lg:py-20 px-8 lg:px-16 flex items-center">
            <div className="max-w-md mx-auto lg:mx-0 lg:ml-auto lg:mr-16">
              <motion.h2 
                className="text-2xl lg:text-3xl font-light text-white leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {ctaSection.title}
              </motion.h2>
              <motion.p 
                className="text-white/80 mb-6 leading-relaxed text-sm lg:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {ctaSection.description}
              </motion.p>
              <Link to={ctaSection.cta.href}>
                <motion.span
                  className="group inline-flex items-center gap-3 bg-white text-[#1a2744] px-7 py-3.5 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {ctaSection.cta.text}
                  <span className="relative w-4 h-4 overflow-hidden">
                    <ArrowRight className="w-4 h-4 text-[#22C55E] absolute transition-all duration-300 group-hover:translate-x-5" />
                    <ArrowRight className="w-4 h-4 text-[#22C55E] absolute transition-all duration-300 -translate-x-5 group-hover:translate-x-0" />
                  </span>
                </motion.span>
              </Link>
            </div>
          </FadeInLeft>

          <FadeInRight className="relative min-h-[350px] lg:min-h-[400px]">
            <SafeImage
              src={ctaSection.image}
              alt="Industrial construction"
              className="absolute inset-0 w-full h-full"
              placeholderLabel="CTA Background Image"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40" />
            
            {/* Blue diagonal strap overlay */}
            <motion.div 
              className="absolute top-0 right-0 w-48 lg:w-64 h-full bg-[#3B82F6]/90"
              style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)' }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <motion.div 
              className="absolute bottom-8 right-8 text-right z-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-xs lg:text-sm text-white/90 block mb-1 tracking-wide">
                {ctaSection.yearsLabel}
              </span>
              <motion.span 
                className="text-5xl lg:text-6xl xl:text-7xl font-extralight text-white/80 leading-none block"
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
