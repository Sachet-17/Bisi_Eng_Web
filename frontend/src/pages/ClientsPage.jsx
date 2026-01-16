import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { clientsPage } from '../data/mock';
import { Building2, ArrowRight } from 'lucide-react';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../components/animations';
import SafeImage from '../components/common/SafeImage';

const ClientsPage = () => {
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
                Our Partners
              </span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[#22C55E]">{clientsPage.hero.title.split(' ')[0]}</span> {clientsPage.hero.title.split(' ').slice(1).join(' ')}
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {clientsPage.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
        <FadeInUp onLoad={true} className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            {clientsPage.intro}
          </p>
        </FadeInUp>
      </section>

      {/* Client Categories */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {clientsPage.clientCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-[#22C55E]/10 rounded-lg flex items-center justify-center"
                    whileHover={{ backgroundColor: '#22C55E', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Building2 className="w-5 h-5 text-[#22C55E]" />
                  </motion.div>
                  <h2 className="text-2xl font-light text-[#1a2744]">
                    {category.category}
                  </h2>
                </motion.div>
                <StaggerContainer staggerDelay={0.08} onLoad={index === 0} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.clients.map((client, clientIndex) => (
                    <StaggerItem key={clientIndex}>
                      <motion.div 
                        className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center min-h-[200px] group cursor-pointer border border-gray-100 hover:border-[#22C55E]/20 transition-all duration-300 overflow-hidden"
                        whileHover={{ 
                          y: -5, 
                          boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                          backgroundColor: '#fff'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-full h-28 mb-4 flex items-center justify-center px-6 overflow-hidden relative"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <SafeImage
                              src={client.logo}
                              alt={client.name}
                              className="max-w-full max-h-full w-auto h-auto object-contain"
                              style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
                              placeholderLabel={client.name}
                              aspectRatio=""
                              loading="lazy"
                            />
                          </div>
                        </motion.div>
                        <h3 className="text-sm font-medium text-[#1E3A5F] group-hover:text-[#22C55E] transition-colors text-center leading-tight mt-2 px-2">
                          {client.name}
                        </h3>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#1a2744] to-[#1E3A5F] overflow-hidden relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp onLoad={true} className="text-center mb-10 lg:mb-12">
            <span className="inline-block text-sm text-[#22C55E] uppercase tracking-wider font-medium mb-3">
              Trust & Excellence
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 tracking-tight">
              Trusted by Industry Leaders
            </h2>
          </FadeInUp>
          <StaggerContainer staggerDelay={0.15} onLoad={true} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '150+', label: 'Happy Clients' },
              { value: '500+', label: 'Projects Delivered' },
              { value: '25+', label: 'Years of Trust' },
              { value: '99%', label: 'Client Retention' }
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <div className="text-4xl lg:text-5xl font-light text-[#22C55E] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
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
                Become Our Next Success Story
              </motion.h2>
              <motion.p 
                className="text-white/80 mb-10 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Join our growing list of satisfied clients. Let's build something great together.
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
                  Partner With Us
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
                <Building2 className="w-24 h-24 text-white/20 mx-auto" />
              </motion.div>
              <div className="text-white/90">
                <div className="text-5xl lg:text-6xl font-bold mb-2">150+</div>
                <div className="text-lg font-medium">Happy Clients</div>
              </div>
            </motion.div>
          </FadeInRight>
        </div>
      </section>
    </motion.div>
  );
};

export default ClientsPage;
