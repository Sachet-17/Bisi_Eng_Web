import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryPage } from '../data/mock';
import { X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import { SafeImage } from '../components/common';
import { FadeInUp, StaggerContainer, StaggerItem } from '../components/animations';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Scroll to top when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeCategory === 'All'
    ? galleryPage.images
    : galleryPage.images.filter(img => img.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(filteredImages[index]);
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[newIndex]);
      return newIndex;
    });
  }, [filteredImages]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[newIndex]);
      return newIndex;
    });
  }, [filteredImages]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, nextImage, prevImage, closeLightbox]);

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
                Our Gallery
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white leading-[1.15] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {galleryPage.hero.title}
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {galleryPage.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Tabs with animation */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {galleryPage.categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors relative ${
                  activeCategory === category
                    ? 'text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeGalleryFilter"
                    className="absolute inset-0 bg-[#22C55E] rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid with AnimatePresence */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div 
                  key={`${image.src}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group bg-gray-100 focus-within:ring-2 focus-within:ring-[#22C55E] focus-within:ring-offset-2"
                  onClick={() => openLightbox(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(index);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${image.caption}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <SafeImage
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full"
                      aspectRatio="aspect-square"
                      placeholderLabel={image.caption}
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div 
                      className="p-4 text-white"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-xs bg-[#22C55E] px-2 py-1 rounded-full">
                        {image.category}
                      </span>
                      <p className="mt-2 text-sm font-medium">{image.caption}</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state if no images */}
          {filteredImages.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <ImageOff className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No images in this category yet</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox with animation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <motion.button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              aria-label="Close lightbox"
              className="absolute top-6 right-6 text-white hover:text-[#22C55E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 rounded-md p-2"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-8 h-8" aria-hidden="true" />
            </motion.button>
            
            <motion.button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous image"
              className="absolute left-6 text-white hover:text-[#22C55E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 rounded-md p-2"
              whileHover={{ scale: 1.2, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-10 h-10" aria-hidden="true" />
            </motion.button>
            
            <motion.button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next image"
              className="absolute right-6 text-white hover:text-[#22C55E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 rounded-md p-2"
              whileHover={{ scale: 1.2, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-10 h-10" aria-hidden="true" />
            </motion.button>

            <motion.div 
              className="max-w-5xl max-h-[80vh] px-16" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              key={currentIndex}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="max-w-full max-h-[70vh] object-contain mx-auto"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <motion.div 
                className="text-center mt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-xs bg-[#22C55E] text-white px-3 py-1 rounded-full">
                  {selectedImage.category}
                </span>
                <p className="text-white mt-2">{selectedImage.caption}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GalleryPage;
