import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { certificationsPage } from '../data/mock';
import { Award, Calendar, Building, ArrowRight, CheckCircle } from 'lucide-react';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../components/animations';

const CertificationsPage = () => {
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
                Our Credentials
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white leading-[1.15] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {certificationsPage.hero.title}
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {certificationsPage.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp onLoad={true} className="text-center mb-10 lg:mb-12">
            <span className="inline-block text-sm text-[#22C55E] uppercase tracking-wider font-medium mb-3">
              Our Credentials
            </span>
            <h2 className="text-3xl lg:text-4xl font-light text-[#1a2744] mb-3">
              Industry-Recognized Certifications
            </h2>
            <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
              Our certifications reflect our commitment to quality, safety, and excellence in every project we undertake.
            </p>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.1} onLoad={true} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsPage.certifications.map((cert, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="bg-white border border-gray-100 rounded-lg overflow-hidden group"
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="w-20 h-20 text-[#22C55E]/30 group-hover:text-[#22C55E]/50 transition-colors" />
                    </motion.div>
                    <div className="absolute top-4 right-4">
                      <motion.span 
                        className="bg-[#22C55E] text-white text-xs px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.1 }}
                      >
                        {cert.category}
                      </motion.span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-light text-[#1a2744] mb-2">
                      {cert.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        {cert.issuer}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft onLoad={true}>
              <span className="inline-block text-sm text-[#22C55E] uppercase tracking-wider font-medium mb-3">
                Quality Assurance
              </span>
              <h2 className="text-3xl lg:text-4xl font-light text-[#1a2744] mb-4">
                Why Our Certifications Matter
              </h2>
              <p className="text-gray-600 mb-8">
                Our certifications are more than just credentials—they represent our unwavering commitment to excellence, safety, and environmental responsibility.
              </p>
              <StaggerContainer staggerDelay={0.1} onLoad={true} className="space-y-4">
                {[
                  'Verified quality management systems',
                  'Rigorous safety protocols and training',
                  'Environmental compliance and sustainability',
                  'Continuous improvement and innovation',
                  'Industry-leading best practices'
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                      </motion.span>
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeInLeft>
            <FadeInRight onLoad={true} className="relative">
              <motion.div 
                className="rounded-lg shadow-lg bg-gray-200 aspect-video flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Award className="w-24 h-24 text-gray-400" />
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-[#22C55E] text-white p-6 rounded-lg hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Compliance Rate</div>
              </motion.div>
            </FadeInRight>
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
            Work with a certified partner
          </motion.h2>
          <motion.p 
            className="text-white/90 text-base lg:text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Trust your project to a team with proven expertise and recognized credentials.
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
              Get Started Today
              <ArrowRight className="w-5 h-5 text-[#22C55E] group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </FadeInUp>
      </section>
    </motion.div>
  );
};

export default CertificationsPage;
