import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { teamPage } from '../data/mock';
import { ArrowRight, Users } from 'lucide-react';
import { SafeImage } from '../components/common';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../components/animations';

const TeamPage = () => {
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
                Our Team
              </span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[#22C55E]">{teamPage.hero.title.split(' ')[0]}</span> {teamPage.hero.title.split(' ').slice(1).join(' ')}
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

      {/* Join Us CTA - Enhanced */}
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
                Careers
              </motion.span>
              <motion.h2 
                className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join Our Team
              </motion.h2>
              <motion.p 
                className="text-white/80 mb-10 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Be part of a team that's shaping the future of industrial engineering in India.
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
                  View Opportunities
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
                <Users className="w-24 h-24 text-white/20 mx-auto" />
              </motion.div>
              <div className="text-white/90">
                <div className="text-5xl lg:text-6xl font-bold mb-2">4300+</div>
                <div className="text-lg font-medium">Team Members</div>
              </div>
            </motion.div>
          </FadeInRight>
        </div>
      </section>
    </motion.div>
  );
};

export default TeamPage;
