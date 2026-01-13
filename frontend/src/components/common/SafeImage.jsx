import React, { useState, useRef, useEffect } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

/**
 * SafeImage - Image component with fallback to placeholder
 * Automatically shows placeholder if image fails to load
 * Includes lazy loading for performance
 */
const SafeImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholderLabel = 'Image Coming Soon',
  aspectRatio = 'aspect-video',
  loading = 'lazy'
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'lazy' && imgRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '50px' }
      );
      observer.observe(imgRef.current);
      return () => observer.disconnect();
    } else {
      setIsInView(true);
    }
  }, [loading]);

  if (hasError || !src) {
    return (
      <ImagePlaceholder 
        className={className} 
        label={placeholderLabel}
        aspectRatio={aspectRatio}
      />
    );
  }

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" aria-hidden="true" />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt || placeholderLabel}
          loading={loading}
          className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoading(false)}
          decoding="async"
        />
      )}
    </div>
  );
};

export default SafeImage;
