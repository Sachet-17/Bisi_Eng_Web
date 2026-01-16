import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesPage } from '../data/mock';
import { Building2, Home, Factory, Landmark, Paintbrush, Wrench, ArrowRight, Check } from 'lucide-react';
import { SafeImage } from '../components/common';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../components/animations';

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
                Our Services
              </span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[#22C55E]">{servicesPage.hero.title.split(' ')[0]}</span> {servicesPage.hero.title.split(' ').slice(1).join(' ')}
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
                    <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0f172a] mb-5 tracking-tight">
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
                Need a custom solution?
              </motion.h2>
              <motion.p 
                className="text-white/80 mb-10 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our team is ready to discuss your specific requirements and develop a tailored approach for your project.
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
                  Request a Consultation
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
                <Wrench className="w-24 h-24 text-white/20 mx-auto" />
              </motion.div>
              <div className="text-white/90">
                <div className="text-5xl lg:text-6xl font-bold mb-2">100%</div>
                <div className="text-lg font-medium">Quality Assured</div>
              </div>
            </motion.div>
          </FadeInRight>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
