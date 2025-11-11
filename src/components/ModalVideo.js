import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const ModalVideo = ({ isOpen, onClose, videoUrl, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="relative bg-dragon-black-800 rounded-2xl border-2 border-dragon-blue-500 shadow-2xl max-w-4xl w-full">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-dragon-blue-500/30">
          <h3 className="dragon-font text-xl text-white font-bold">{title} - Demo</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-all duration-300 p-3 hover:bg-dragon-blue-500/20 rounded-full"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Video Container */}
        <div className="p-4">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <video
              src={videoUrl}
              controls
              autoPlay
              muted={false}
              className="w-full h-full object-contain"
            >
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-dragon-blue-500/30 text-center">
          <p className="text-gray-400 text-sm">
            Presiona ESC o haz clic en la X para cerrar
          </p>
        </div>
      </div>

      {/* Overlay para cerrar al hacer clic fuera */}
      <div 
        className="absolute inset-0 -z-10 cursor-pointer"
        onClick={onClose}
      />
    </div>
  );
};

export default ModalVideo;