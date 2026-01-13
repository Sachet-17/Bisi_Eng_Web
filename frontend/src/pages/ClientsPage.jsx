import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { clientsPage } from '../data/mock';
import { Building2, ArrowRight } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '../components/animations';
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
      <section className="relative min-h-[45vh] flex items-center bg-gradient-to-br from-[#1a2744] via-[#1E3A5F] to-[#1a2744] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2744]/95 via-[#1a2744]/80 to-[#1a2744]/60"></div>
          {/* Decorative elements */}
          <motion.div 
            className="absolute top-20 right-20 w-72 h-72 bg-[#22C55E]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
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
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white leading-[1.15] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {clientsPage.hero.title}
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
                        className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[140px] group cursor-pointer"
                        whileHover={{ 
                          y: -5, 
                          boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                          backgroundColor: '#fff'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-full h-20 mb-3 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <SafeImage
                            src={client.logo}
                            alt={client.name}
                            className="max-w-full max-h-20 object-contain"
                            placeholderLabel={client.name}
                            aspectRatio=""
                            loading="lazy"
                          />
                        </motion.div>
                        <h3 className="text-sm font-medium text-[#1E3A5F] group-hover:text-[#22C55E] transition-colors text-center leading-tight">
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
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-3">
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
      <section className="py-12 lg:py-16 bg-gradient-to-r from-[#22C55E] via-[#16A34A] to-[#22C55E] overflow-hidden relative">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        
        <FadeInUp className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl lg:text-4xl font-light text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Become Our Next Success Story
          </motion.h2>
          <motion.p 
            className="text-white/90 text-base lg:text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join our growing list of satisfied clients. Let's build something great together.
          </motion.p>
          <Link to="/contact">
            <motion.span
              className="group inline-flex items-center gap-3 bg-white text-[#1a2744] px-8 py-4 rounded-full font-medium text-base shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05, backgroundColor: '#f9fafb' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Partner With Us
              <ArrowRight className="w-5 h-5 text-[#22C55E] group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </FadeInUp>
      </section>
    </motion.div>
  );
};

export default ClientsPage;
