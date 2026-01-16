import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { teamPage } from '../data/mock';
import { ArrowRight } from 'lucide-react';
import { SafeImage } from '../components/common';
import { FadeInUp, StaggerContainer, StaggerItem } from '../components/animations';

const TeamPage = () => {
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
                Our Team
              </span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {teamPage.hero.title}
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {teamPage.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Managing Director */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp onLoad={true} className="text-center mb-16">
            <span className="section-label">Leadership</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0f172a] mb-4 tracking-tight">
              Managing Director
            </h2>
          </FadeInUp>

          <div className="max-w-md">
            <motion.div 
              className="group bg-white rounded-2xl overflow-hidden shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }}
            >
              <div className="relative h-96 overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                >
                  <SafeImage
                    src={teamPage.managingDirector.image}
                    alt={teamPage.managingDirector.name}
                    className="w-full h-full"
                    aspectRatio="aspect-[4/5]"
                    placeholderLabel={teamPage.managingDirector.name}
                  />
                </motion.div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold text-[#0f172a] tracking-tight mb-2">
                  {teamPage.managingDirector.name}
                </h3>
                <p className="text-[#22C55E] text-base font-semibold mb-4">
                  {teamPage.managingDirector.position}
                </p>
                <p className="text-gray-500 text-base leading-relaxed">
                  {teamPage.managingDirector.bio}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership & Management */}
      <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp onLoad={true} className="text-center mb-16">
            <span className="section-label">Management</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0f172a] mb-4 tracking-tight">
              Admin and Management Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Experienced professionals dedicated to delivering excellence in every project.
            </p>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.1} onLoad={true} className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamPage.leadership.map((member, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="group bg-white rounded-2xl overflow-hidden shadow-soft"
                  whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    >
                      <SafeImage
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full"
                        aspectRatio="aspect-[4/5]"
                        placeholderLabel={member.name}
                      />
                    </motion.div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-semibold text-[#0f172a] tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-[#22C55E] text-sm font-semibold mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Site Executives */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp onLoad={true} className="text-center mb-16">
            <span className="section-label">Operations</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0f172a] mb-4 tracking-tight">
              Site Executives
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Our dedicated site executives ensuring smooth operations across all project locations.
            </p>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.1} onLoad={true} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {teamPage.siteExecutives.map((member, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="group bg-white rounded-2xl overflow-hidden shadow-soft"
                  whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    >
                      <SafeImage
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full"
                        aspectRatio="aspect-[4/5]"
                        placeholderLabel={member.name}
                      />
                    </motion.div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-semibold text-[#0f172a] tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-[#22C55E] text-sm font-semibold mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Assistant Site Executives */}
      <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp onLoad={true} className="text-center mb-16">
            <span className="section-label">Operations</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0f172a] mb-4 tracking-tight">
              Assistant Site Executives
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Supporting our site operations with dedication and expertise.
            </p>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.1} onLoad={true} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {teamPage.assistantSiteExecutives.map((member, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="group bg-white rounded-2xl overflow-hidden shadow-soft"
                  whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    >
                      <SafeImage
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full"
                        aspectRatio="aspect-[4/5]"
                        placeholderLabel={member.name}
                      />
                    </motion.div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-semibold text-[#0f172a] tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-[#22C55E] text-sm font-semibold mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Office Staff */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp onLoad={true} className="text-center mb-16">
            <span className="section-label">Support</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0f172a] mb-4 tracking-tight">
              Office Staff
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Our administrative team providing essential support for smooth operations.
            </p>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.1} onLoad={true} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {teamPage.officeStaff.map((member, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="group bg-white rounded-2xl overflow-hidden shadow-soft"
                  whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    >
                      <SafeImage
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full"
                        aspectRatio="aspect-[4/5]"
                        placeholderLabel={member.name}
                      />
                    </motion.div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-semibold text-[#0f172a] tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-[#22C55E] text-sm font-semibold mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Join Us CTA */}
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
            Careers
          </motion.span>
          <motion.h2 
            className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join Our Team
          </motion.h2>
          <motion.p 
            className="text-white/90 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Be part of a team that's shaping the future of industrial engineering in India.
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
              View Opportunities
              <ArrowRight className="w-5 h-5 text-[#22C55E] group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </FadeInUp>
      </section>
    </motion.div>
  );
};

export default TeamPage;
