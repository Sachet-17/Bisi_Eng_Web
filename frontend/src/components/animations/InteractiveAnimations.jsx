import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Tab content transition
export const TabContent = ({ children, activeKey, className = '' }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={activeKey}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

// Filter/Category button animation
export const FilterButton = ({ 
  children, 
  isActive, 
  onClick, 
  className = '' 
}) => (
  <motion.button
    onClick={onClick}
    className={className}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    animate={{
      backgroundColor: isActive ? '#22C55E' : '#f3f4f6',
      color: isActive ? '#ffffff' : '#4b5563'
    }}
    transition={{ duration: 0.2 }}
  >
    {children}
    {isActive && (
      <motion.div
        layoutId="activeFilter"
        className="absolute inset-0 bg-[#22C55E] rounded-full -z-10"
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    )}
  </motion.button>
);

// Grid item animation for filtered content
export const GridItem = ({ children, className = '' }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// Animated grid container
export const AnimatedGrid = ({ children, className = '' }) => (
  <motion.div
    layout
    className={className}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  >
    <AnimatePresence mode="popLayout">
      {children}
    </AnimatePresence>
  </motion.div>
);

// Dropdown/Accordion animation
export const ExpandableContent = ({ isOpen, children, className = '' }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`overflow-hidden ${className}`}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

// Modal/Dialog animation
export const ModalAnimation = ({ isOpen, children, onClose, className = '' }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 z-50"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed z-50 ${className}`}
        >
          {children}
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

// Card hover animation
export const AnimatedCard = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ 
      y: -8,
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
    }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// Image hover zoom
export const ImageZoom = ({ children, className = '' }) => (
  <motion.div
    className={`overflow-hidden ${className}`}
    whileHover="hover"
  >
    <motion.div
      variants={{
        hover: { scale: 1.1 }
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  </motion.div>
);
