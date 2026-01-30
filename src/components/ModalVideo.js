import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const ModalVideo = ({ isOpen, onClose, videoUrl, title }) => {
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4">
      <div className="relative bg-dragon-black-800 rounded-2xl border-2 border-dragon-blue-500 shadow-2xl max-w-4xl w-full">
        
        {/* Header con botón de cerrar */}
        <div className="flex justify-between items-center p-4 border-b border-dragon-blue-500/30">
          <h3 className="dragon-font text-xl text-white font-bold">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-2">
            <FaTimes size={24} />
          </button>
        </div>

        {/* Video Nativo con Controles */}
        <div className="p-4 bg-black rounded-b-lg">
           <video
              src={videoUrl}
              controls        // Permite al usuario pausar, volumen, pantalla completa
              autoPlay        // Arranca solo
              className="w-full max-h-[70vh] rounded-lg"
           />
        </div>

      </div>
      {/* Clic fuera cierra */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
};

export default ModalVideo;