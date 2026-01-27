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
      <section className="relative min-h-[35vh] flex items-center bg-[#0f172a] overflow-hidden">
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
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm text-[#22C55E] uppercase tracking-wider font-medium mb-3">
                What we can do for you
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

      {/* Services Overview Stats */}
      <section className="py-6 lg:py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { value: '6+', label: 'Core Services' },
              { value: '100+', label: 'Projects Delivered' },
              { value: '27+', label: 'Years Experience' },
              { value: 'ISO', label: 'Certified Quality' }
            ].map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <div className="font-display text-3xl lg:text-4xl font-bold text-[#22C55E] mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 lg:py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <FadeInUp className="text-center mb-6">
            <p className="text-gray-600 text-sm lg:text-base max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive engineering solutions tailored to your industrial needs. From initial planning to final commissioning, our expert team ensures seamless execution of every project phase.
            </p>
          </FadeInUp>
          <div className="space-y-10 lg:space-y-12">
            {servicesPage.services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;
              const FadeComponent = isEven ? FadeInLeft : FadeInRight;
              const FadeComponentAlt = isEven ? FadeInRight : FadeInLeft;
              
              return (
                <div 
                  key={index} 
                  className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center"
                >
                  <FadeComponent onLoad={index === 0} className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <motion.div 
                      className="relative overflow-hidden rounded-2xl shadow-soft-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      >
                        <SafeImage
                          src={service.image}
                          alt={service.title}
                          className="w-full h-72 lg:h-80"
                          placeholderLabel={service.title}
                        />
                      </motion.div>
                    </motion.div>
                  </FadeComponent>
                  
                  <FadeComponentAlt onLoad={index === 0} className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <motion.div 
                      className="w-12 h-12 bg-[#22C55E]/10 rounded-xl flex items-center justify-center mb-4"
                      whileHover={{ backgroundColor: '#22C55E' }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 text-[#22C55E]" />
                    </motion.div>
                    <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#0f172a] mb-3 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">
                      {service.description}
                    </p>
                    <p className="text-gray-500 mb-4 leading-relaxed text-xs lg:text-sm">
                      Our experienced team utilizes advanced methodologies and state-of-the-art equipment to deliver exceptional results that meet international quality standards.
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1, duration: 0.4 }}
                        >
                          <span className="w-5 h-5 bg-[#22C55E]/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-[#22C55E]" />
                          </span>
                          <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
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
          <FadeInLeft className="bg-gradient-to-br from-[#22C55E] to-[#15803d] py-12 lg:py-14 px-6 lg:px-12 flex items-center">
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
                className="text-white/80 mb-4 leading-relaxed text-sm lg:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our team is ready to discuss your specific requirements and develop a tailored approach for your project.
              </motion.p>
              <motion.ul 
                className="space-y-2 mb-8 text-white/90 text-sm lg:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Comprehensive project analysis and feasibility studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Customized solutions designed for your unique requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Expert consultation from our experienced engineering team</span>
                </li>
              </motion.ul>
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

          <FadeInRight className="relative min-h-[350px] lg:min-h-[400px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center">
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
