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
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-[#0f172a] via-[#1E3A5F] to-[#0f172a] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/60"></div>
          <motion.div 
            className="absolute top-20 right-20 w-80 h-80 bg-[#22C55E]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label !text-[#22C55E]">
                Our Services
              </span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 tracking-tight"
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
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {servicesPage.services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;
              const FadeComponent = isEven ? FadeInLeft : FadeInRight;
              const FadeComponentAlt = isEven ? FadeInRight : FadeInLeft;
              
              return (
                <div 
                  key={index} 
                  className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
                >
                  <FadeComponent onLoad={index === 0} className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <motion.div 
                      className="relative overflow-hidden rounded-2xl shadow-soft-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      >
                        <SafeImage
                          src={service.image}
                          alt={service.title}
                          className="w-full h-96"
                          placeholderLabel={service.title}
                        />
                      </motion.div>
                    </motion.div>
                  </FadeComponent>
                  
                  <FadeComponentAlt onLoad={index === 0} className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <motion.div 
                      className="w-16 h-16 bg-[#22C55E]/10 rounded-2xl flex items-center justify-center mb-8"
                      whileHover={{ backgroundColor: '#22C55E' }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 text-[#22C55E]" />
                    </motion.div>
                    <h2 className="font-display text-3xl lg:text-4xl font-semibold text-[#0f172a] mb-5 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-4 mb-10">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1, duration: 0.4 }}
                        >
                          <span className="w-6 h-6 bg-[#22C55E]/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-[#22C55E]" />
                          </span>
                          <span className="text-gray-700 text-base">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-3 text-[#22C55E] font-semibold text-base hover:gap-4 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </FadeComponentAlt>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#22C55E] via-[#16A34A] to-[#15803d] overflow-hidden relative">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        
        <FadeInUp className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            className="section-label !text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.span>
          <motion.h2 
            className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Need a custom solution?
          </motion.h2>
          <motion.p 
            className="text-white/90 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our team is ready to discuss your specific requirements and develop a tailored approach for your project.
          </motion.p>
          <Link to="/contact">
            <motion.span
              className="group inline-flex items-center gap-3 bg-white text-[#0f172a] px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
