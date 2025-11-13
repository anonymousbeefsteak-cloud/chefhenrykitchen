
import React from 'react';

interface ImageModalProps {
    src: string | null;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, onClose }) => {
  if (!src) return null;
  
  return (
      <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
          onClick={onClose}
      >
          <img 
              src={src} 
              alt="Enlarged view" 
              className="max-w-[95vw] max-h-[95vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
          />
          <button 
              className="absolute top-5 right-5 text-white text-4xl"
              onClick={onClose}
              aria-label="Close image modal"
          >
              &times;
          </button>
          <p className="absolute bottom-5 text-gray-300 text-sm tracking-wider">Click anywhere to close</p>
      </div>
  );
};

export default ImageModal;
