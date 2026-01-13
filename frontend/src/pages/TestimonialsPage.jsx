import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { testimonialsPage } from '../data/mock';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { SafeImage } from '../components/common';
import { FadeInUp, StaggerContainer, StaggerItem } from '../components/animations';

const TestimonialsPage = () => {
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
                Client Stories
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white leading-[1.15] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {testimonialsPage.hero.title}
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {testimonialsPage.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.1} onLoad={true} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsPage.testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="bg-white border border-gray-100 rounded-lg p-8 h-full"
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Quote className="w-10 h-10 text-[#22C55E]/20 mb-4" />
                  </motion.div>
                  
                  {/* Rating with animation */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <Star className="w-5 h-5 text-[#22C55E] fill-current" />
                      </motion.span>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-14 h-14 rounded-full overflow-hidden bg-gray-100"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SafeImage
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full"
                        aspectRatio="aspect-square"
                        placeholderLabel=""
                      />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-[#1E3A5F]">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp onLoad={true} className="text-center mb-10 lg:mb-12">
            <span className="inline-block text-sm text-[#22C55E] uppercase tracking-wider font-medium mb-3">
              By the Numbers
            </span>
            <h2 className="text-3xl lg:text-4xl font-light text-[#1a2744] mb-3">
              Client Satisfaction by the Numbers
            </h2>
          </FadeInUp>
          <StaggerContainer staggerDelay={0.15} onLoad={true} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '99%', label: 'Client Satisfaction' },
              { value: '98%', label: 'On-Time Delivery' },
              { value: '95%', label: 'Within Budget' },
              { value: '89%', label: 'Return Clients' }
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <div className="text-4xl lg:text-5xl font-light text-[#22C55E] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
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
            Ready to experience the difference?
          </motion.h2>
          <motion.p 
            className="text-white/90 text-base lg:text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join our growing list of satisfied clients and let us bring your vision to life.
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
              Start Your Project
              <ArrowRight className="w-5 h-5 text-[#22C55E] group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </FadeInUp>
      </section>
    </motion.div>
  );
};

export default TestimonialsPage;
