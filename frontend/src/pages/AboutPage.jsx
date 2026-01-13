import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { aboutPage } from '../data/mock';
import { Building2, Home, Factory, Landmark, Paintbrush, Wrench, CheckCircle, Users, ArrowRight, Award, Target, Heart, Shield } from 'lucide-react';
import { SafeImage } from '../components/common';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../components/animations';

const iconMap = { Building2, Home, Factory, Landmark, Paintbrush, Wrench };
const valueIcons = { Award, Target, Heart, Shield, CheckCircle, Users };

const AboutPage = () => {
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
          <div className="max-w-4xl">
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
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white leading-[1.15] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {aboutPage.hero.title}
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg lg:text-xl max-w-2xl leading-relaxed"
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
      <section className="py-6 lg:py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '150+', label: 'Happy Clients' },
              { value: '500+', label: 'Projects' },
              { value: '1000+', label: 'Team Members' }
            ].map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <div className="text-3xl lg:text-4xl font-light text-[#22C55E] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* MD Message - Redesigned */}
      <section id="md-message" className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
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
                  <div className="text-3xl font-bold">25+</div>
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
                <span className="inline-block text-sm text-[#22C55E] uppercase tracking-wider font-medium mb-3">
                  Leadership Message
                </span>
                <h2 className="text-3xl lg:text-4xl font-light text-[#1a2744] mb-4 leading-tight">
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

      {/* Capabilities - Enhanced Grid */}
      <section id="capabilities" className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-10 lg:mb-12">
            <span className="inline-block text-sm text-[#22C55E] uppercase tracking-wider font-medium mb-3">
              What We Do
            </span>
            <h2 className="text-3xl lg:text-4xl font-light text-[#1a2744] mb-3">
              {aboutPage.capabilities.title}
            </h2>
            <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
              {aboutPage.capabilities.subtitle}
            </p>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {aboutPage.capabilities.items.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#22C55E]/30 transition-all duration-300 h-full"
                    whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon */}
                    <motion.div 
                      className="relative mb-4"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-[#22C55E]/10 to-[#22C55E]/5 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#22C55E] group-hover:to-[#16A34A] transition-all duration-300">
                        <Icon className="w-7 h-7 text-[#22C55E] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </motion.div>
                    
                    <h3 className="text-xl font-light text-[#1a2744] mb-2 group-hover:text-[#22C55E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
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
      </section>

      {/* Company Values - Split Layout */}
      <section id="policy" className="py-12 lg:py-16 bg-gradient-to-br from-[#1a2744] to-[#1E3A5F] overflow-hidden relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-10 lg:mb-12">
            <span className="inline-block text-sm text-[#22C55E] uppercase tracking-wider font-medium mb-3">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-3">
              {aboutPage.policy.title}
            </h2>
            <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto">
              {aboutPage.policy.subtitle}
            </p>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {aboutPage.policy.policies.map((policy, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all duration-300 h-full"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-9 h-9 bg-[#22C55E]/20 rounded-lg flex items-center justify-center group-hover:bg-[#22C55E] transition-colors duration-300"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#22C55E] group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-light text-white mb-2">{policy.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{policy.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Organizational Structure - Modern Cards */}
      <section id="structure" className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-10 lg:mb-12">
            <span className="inline-block text-sm text-[#22C55E] uppercase tracking-wider font-medium mb-3">
              Our Organization
            </span>
            <h2 className="text-3xl lg:text-4xl font-light text-[#1a2744] mb-3">
              {aboutPage.structure.title}
            </h2>
            <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
              {aboutPage.structure.subtitle}
            </p>
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
            Ready to work with us?
          </motion.h2>
          <motion.p 
            className="text-white/90 text-base lg:text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's discuss how we can bring your project to life.
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
              Get in Touch
              <ArrowRight className="w-5 h-5 text-[#22C55E] group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </FadeInUp>
      </section>
    </motion.div>
  );
};

export default AboutPage;
