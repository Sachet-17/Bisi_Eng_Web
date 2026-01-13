import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesPage } from '../data/mock';
import { Building2, Home, Factory, Landmark, Paintbrush, Wrench, ArrowRight, Check } from 'lucide-react';
import { SafeImage } from '../components/common';
import { FadeInUp, FadeInLeft, FadeInRight } from '../components/animations';

const iconMap = { Building2, Home, Factory, Landmark, Paintbrush, Wrench };

const ServicesPage = () => {
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
                Our Services
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white leading-[1.15] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {servicesPage.hero.title}
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {servicesPage.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-20">
            {servicesPage.services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;
              const FadeComponent = isEven ? FadeInLeft : FadeInRight;
              const FadeComponentAlt = isEven ? FadeInRight : FadeInLeft;
              
              return (
                <div 
                  key={index} 
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <FadeComponent onLoad={index === 0} className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <motion.div 
                      className="relative overflow-hidden rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <SafeImage
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80"
                          placeholderLabel={service.title}
                        />
                      </motion.div>
                    </motion.div>
                  </FadeComponent>
                  
                  <FadeComponentAlt onLoad={index === 0} className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <motion.div 
                      className="w-14 h-14 bg-[#22C55E]/10 rounded-lg flex items-center justify-center mb-6"
                      whileHover={{ backgroundColor: '#22C55E', rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-7 h-7 text-[#22C55E]" />
                    </motion.div>
                    <h2 className="text-2xl lg:text-3xl font-light text-[#1a2744] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1, duration: 0.4 }}
                        >
                          <motion.span
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="w-5 h-5 text-[#22C55E]" />
                          </motion.span>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 text-[#22C55E] font-medium hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </FadeComponentAlt>
                </div>
              );
            })}
          </div>
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
            Need a custom solution?
          </motion.h2>
          <motion.p 
            className="text-white/90 text-base lg:text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our team is ready to discuss your specific requirements and develop a tailored approach for your project.
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
              Request a Consultation
              <ArrowRight className="w-5 h-5 text-[#22C55E] group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </FadeInUp>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
