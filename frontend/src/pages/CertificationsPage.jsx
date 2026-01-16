import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { certificationsPage } from '../data/mock';
import { Award, Calendar, Building, ArrowRight, CheckCircle, Shield, FileCheck, X, ZoomIn, FileText } from 'lucide-react';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../components/animations';
import { SafeImage } from '../components/common';

// Helper function to convert certification title to file name
const getCertificateFileName = (title) => {
  // Convert title to lowercase, replace spaces and special chars with hyphens
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Helper function to get certificate PDF path
const getCertificatePdfPath = (cert) => {
  // Always generate path from title to ensure correct naming
  // This ensures the filename matches the actual file name
  const fileName = getCertificateFileName(cert.title);
  return `/images/certifications/${fileName}.pdf`;
};

const CertificationsPage = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Debug: Log the PDF path
    const pdfPath = getCertificatePdfPath(cert);
    console.log('Opening PDF:', pdfPath);
    console.log('Certificate title:', cert.title);
  };

  const closeModal = useCallback(() => {
    setSelectedCert(null);
    document.body.style.overflow = 'unset';
  }, []);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedCert) return;
      
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert, closeModal]);
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
                Our Credentials
              </span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[#22C55E]">Licenses &</span> Certifications
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
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp onLoad={true} className="text-center mb-16">
            <span className="section-label">Our Credentials</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0f172a] mb-4 tracking-tight">
              Industry-Recognized Certifications
            </h2>
            <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
              Our certifications reflect our commitment to quality, safety, and excellence in every project we undertake.
            </p>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.1} onLoad={true} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsPage.certifications.map((cert, index) => {
              const pdfPath = getCertificatePdfPath(cert);
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => openModal(cert)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openModal(cert);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center">
                      {/* PDF Thumbnail - Show PDF icon with document preview style */}
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                        <motion.div
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4"
                        >
                          <FileText className="w-20 h-20 text-[#22C55E] group-hover:text-[#16A34A] transition-colors" />
                        </motion.div>
                        <div className="text-center">
                          <p className="text-sm font-semibold text-gray-700 mb-1">{cert.title}</p>
                          <p className="text-xs text-gray-500">PDF Document</p>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 z-10">
                        <motion.span 
                          className="bg-[#22C55E] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg"
                          whileHover={{ scale: 1.1 }}
                        >
                          {cert.category}
                        </motion.span>
                      </div>
                      {/* Zoom overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                            <ZoomIn className="w-6 h-6 text-[#22C55E]" />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#0f172a] mb-3 group-hover:text-[#22C55E] transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1.5">
                          <Building className="w-4 h-4 text-[#22C55E]" />
                          <span className="line-clamp-1">{cert.issuer}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-[#22C55E]" />
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft onLoad={true}>
              <span className="section-label">Quality Assurance</span>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0f172a] mb-6 tracking-tight">
                Why Our Certifications Matter
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our certifications are more than just credentials—they represent our unwavering commitment to excellence, safety, and environmental responsibility.
              </p>
              <StaggerContainer staggerDelay={0.1} onLoad={true} className="space-y-5">
                {[
                  { text: 'Verified quality management systems', icon: FileCheck },
                  { text: 'Rigorous safety protocols and training', icon: Shield },
                  { text: 'Environmental compliance and sustainability', icon: CheckCircle },
                  { text: 'Continuous improvement and innovation', icon: Award },
                  { text: 'Industry-leading best practices', icon: CheckCircle }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <StaggerItem key={index}>
                      <motion.div 
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-white transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.span
                          className="flex-shrink-0 w-10 h-10 bg-[#22C55E]/10 rounded-lg flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-5 h-5 text-[#22C55E]" />
                        </motion.span>
                        <span className="text-gray-700 font-medium">{item.text}</span>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </FadeInLeft>
            <FadeInRight onLoad={true} className="relative">
              <motion.div 
                className="rounded-2xl shadow-2xl bg-gradient-to-br from-[#22C55E]/10 to-[#3B82F6]/10 aspect-video flex items-center justify-center overflow-hidden border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Award className="w-32 h-32 text-[#22C55E]/40 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-gray-600 font-medium">Certified Excellence</p>
                </div>
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white p-8 rounded-xl shadow-2xl hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="text-4xl font-bold mb-1">100%</div>
                <div className="text-sm font-medium opacity-90">Compliance Rate</div>
              </motion.div>
            </FadeInRight>
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
                Work with a certified partner
              </motion.h2>
              <motion.p 
                className="text-white/80 mb-10 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Trust your project to a team with proven expertise and recognized credentials.
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
                  Get Started Today
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
                <Shield className="w-24 h-24 text-white/20 mx-auto" />
              </motion.div>
              <div className="text-white/90">
                <div className="text-5xl lg:text-6xl font-bold mb-2">ISO</div>
                <div className="text-lg font-medium">Certified Excellence</div>
              </div>
            </motion.div>
          </FadeInRight>
        </div>
      </section>

      {/* Certificate Modal/Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCert.title} certificate`}
          >
            <motion.button
              onClick={(e) => { e.stopPropagation(); closeModal(); }}
              aria-label="Close certificate view"
              className="absolute top-6 right-6 text-white hover:text-[#22C55E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 rounded-md p-2 z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-8 h-8" aria-hidden="true" />
            </motion.button>

            <motion.div 
              className="max-w-6xl max-h-[90vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Certificate PDF Viewer */}
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden mb-4 max-w-full w-full">
                <div className="w-full relative" style={{ height: '75vh', minHeight: '500px' }}>
                  {/* Primary: Use embed tag for better PDF support */}
                  <embed
                    src={`${getCertificatePdfPath(selectedCert)}#toolbar=1&navpanes=1&scrollbar=1`}
                    type="application/pdf"
                    className="w-full h-full"
                    style={{ minHeight: '500px' }}
                  />
                  
                  {/* Fallback: Iframe for browsers that don't support embed */}
                  <iframe
                    src={`${getCertificatePdfPath(selectedCert)}#toolbar=1&navpanes=1&scrollbar=1`}
                    title={selectedCert.title}
                    className="w-full h-full border-0"
                    style={{ minHeight: '500px', display: 'none' }}
                    onLoad={() => {
                      console.log('PDF loaded:', getCertificatePdfPath(selectedCert));
                    }}
                  />
                  
                  {/* Always show download button */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <a
                      href={getCertificatePdfPath(selectedCert)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#22C55E] text-white px-4 py-2 rounded-lg hover:bg-[#16A34A] transition-colors text-sm font-medium shadow-lg flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FileText className="w-4 h-4" />
                      Open in New Tab
                    </a>
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <motion.div 
                className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block text-xs bg-[#22C55E] text-white px-3 py-1 rounded-full mb-3 font-semibold">
                  {selectedCert.category}
                </span>
                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
                  {selectedCert.title}
                </h3>
                <div className="flex flex-wrap gap-4 justify-center text-sm text-white/80 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-[#22C55E]" />
                    {selectedCert.issuer}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#22C55E]" />
                    {selectedCert.year}
                  </span>
                </div>
                <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                  {selectedCert.description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CertificationsPage;
