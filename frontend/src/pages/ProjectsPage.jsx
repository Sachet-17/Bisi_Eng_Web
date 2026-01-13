import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsPage } from '../data/mock';
import { MapPin, Calendar, DollarSign, ArrowRight } from 'lucide-react';
import { SafeImage } from '../components/common';
import { FadeInUp } from '../components/animations';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProjects = activeCategory === 'All'
    ? projectsPage.projects
    : projectsPage.projects.filter(p => p.category === activeCategory);

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
                Our Portfolio
              </span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {projectsPage.hero.title}
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {projectsPage.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 bg-white border-b border-gray-100 sticky top-[72px] z-40 backdrop-blur-lg bg-white/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {projectsPage.categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all relative ${
                  activeCategory === category
                    ? 'text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 bg-[#22C55E] rounded-full shadow-lg"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-soft group"
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 25px 50px rgba(0,0,0,0.12)'
                  }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    >
                      <SafeImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full"
                        placeholderLabel={project.title}
                      />
                    </motion.div>
                    <div className="absolute top-5 left-5">
                      <span className="bg-[#22C55E] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-semibold text-[#0f172a] mb-3 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-5 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-5">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4" />
                        {project.value}
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="group/link inline-flex items-center gap-2 text-[#22C55E] text-sm font-semibold hover:gap-3 transition-all"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
            Start Your Project
          </motion.span>
          <motion.h2 
            className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Have a project in mind?
          </motion.h2>
          <motion.p 
            className="text-white/90 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's discuss how we can bring your vision to reality.
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
              Start Your Project
              <ArrowRight className="w-5 h-5 text-[#22C55E] group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </FadeInUp>
      </section>
    </motion.div>
  );
};

export default ProjectsPage;
