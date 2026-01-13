import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Fade in from bottom animation - animates on page load for hero sections
export const FadeInUp = ({ children, delay = 0, duration = 0.5, className = '', onLoad = false }) => {
  return (
    <motion.div
      initial={onLoad ? { opacity: 0, y: 30 } : { opacity: 0, y: 30 }}
      {...(onLoad ? { animate: { opacity: 1, y: 0 } } : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -100px 0px' } })}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Fade in from left animation
export const FadeInLeft = ({ children, delay = 0, duration = 0.5, className = '', onLoad = false }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    {...(onLoad ? { animate: { opacity: 1, x: 0 } } : { whileInView: { opacity: 1, x: 0 }, viewport: { once: true, margin: '0px 0px -100px 0px' } })}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// Fade in from right animation
export const FadeInRight = ({ children, delay = 0, duration = 0.5, className = '', onLoad = false }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    {...(onLoad ? { animate: { opacity: 1, x: 0 } } : { whileInView: { opacity: 1, x: 0 }, viewport: { once: true, margin: '0px 0px -100px 0px' } })}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// Scale in animation
export const ScaleIn = ({ children, delay = 0, duration = 0.5, className = '', onLoad = false }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    {...(onLoad ? { animate: { opacity: 1, scale: 1 } } : { whileInView: { opacity: 1, scale: 1 }, viewport: { once: true, margin: '0px 0px -100px 0px' } })}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger container for child animations
export const StaggerContainer = ({ children, staggerDelay = 0.1, className = '', onLoad = false }) => {
  return (
    <motion.div
      initial="hidden"
      {...(onLoad ? { animate: "visible" } : { whileInView: "visible", viewport: { once: true, margin: '0px 0px -50px 0px' } })}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger item (use inside StaggerContainer)
export const StaggerItem = ({ children, className = '' }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Counter animation for stats
export const AnimatedCounter = ({ value, duration = 2, className = '' }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {value}
      </motion.span>
    </motion.span>
  );
};

// Hover scale animation wrapper
export const HoverScale = ({ children, scale = 1.05, className = '' }) => (
  <motion.div
    whileHover={{ scale }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Hover lift animation (scale + shadow)
export const HoverLift = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className={className}
  >
    {children}
  </motion.div>
);

// Text reveal animation (character by character)
export const TextReveal = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');
  
  return (
    <motion.span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: delay + (wordIndex * 0.1) + (charIndex * 0.02)
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

// Parallax scroll effect
export const ParallaxScroll = ({ children, speed = 0.5, className = '' }) => (
  <motion.div
    initial={{ y: 0 }}
    whileInView={{ y: 0 }}
    viewport={{ once: false }}
    style={{ y: 0 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Slide in overlay animation
export const SlideInOverlay = ({ children, direction = 'left', className = '' }) => {
  const variants = {
    left: { initial: { x: '-100%' }, animate: { x: 0 } },
    right: { initial: { x: '100%' }, animate: { x: 0 } },
    top: { initial: { y: '-100%' }, animate: { y: 0 } },
    bottom: { initial: { y: '100%' }, animate: { y: 0 } }
  };
  
  return (
    <motion.div
      initial={variants[direction].initial}
      whileInView={variants[direction].animate}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
