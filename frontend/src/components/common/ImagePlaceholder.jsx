import React from 'react';
import { ImageOff } from 'lucide-react';

/**
 * ImagePlaceholder - Displays a styled placeholder when image is missing
 * Use this component for images that haven't been uploaded yet
 */
const ImagePlaceholder = ({ 
  className = '', 
  label = 'Image Coming Soon',
  aspectRatio = 'aspect-video' // aspect-square, aspect-video, aspect-[4/3]
}) => {
  return (
    <div className={`bg-gray-100 flex flex-col items-center justify-center ${aspectRatio} ${className}`}>
      <ImageOff className="w-12 h-12 text-gray-300 mb-2" />
      <span className="text-gray-400 text-sm">{label}</span>
    </div>
  );
};

export default ImagePlaceholder;
