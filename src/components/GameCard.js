import React, { useState, useRef } from 'react';
import { FaGithub, FaImage, FaPlay } from 'react-icons/fa';
import ModalVideo from './ModalVideo';

const GameCard = ({ game }) => {
  const [imageError, setImageError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null); // Referencia para controlar el video

  const handleMouseEnter = () => {
    setShowVideo(true);
    // Intentamos reproducir explícitamente al entrar
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevent handled"));
    }
  };

  const handleMouseLeave = () => {
    setShowVideo(false);
    // Pausamos y rebobinamos al salir
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <div className="bg-dragon-black-700 rounded-2xl overflow-hidden border-2 border-dragon-blue-500/30 hover:border-dragon-blue-400 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl">
        
        {/* Media Container */}
        <div 
          className="relative h-48 bg-dragon-black-800 overflow-hidden cursor-pointer group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsModalOpen(true)}
        >
          {/* 1. IMAGEN DE FONDO (Siempre visible por defecto) */}
          <div className="absolute inset-0 w-full h-full">
             {!imageError ? (
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-dragon-blue-900 flex items-center justify-center">
                  <FaImage className="text-4xl text-dragon-blue-400" />
                </div>
              )}
          </div>

          {/* 2. VIDEO NATIVO (Mucho más rápido que YouTube) */}
          {game.video && (
             <video
                ref={videoRef}
                src={game.video}
                muted={true}        // OBLIGATORIO para autoplay
                loop={true}
                playsInline={true}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${showVideo ? 'opacity-100' : 'opacity-0'}`}
             />
          )}

          {/* 3. OVERLAY Y BOTÓN */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
             <div className="w-16 h-16 flex items-center justify-center bg-dragon-blue-600 rounded-full shadow-2xl transform hover:scale-110 transition-transform">
                <FaPlay className="text-white text-2xl ml-1" />
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 dragon-font">{game.title}</h3>
          <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">{game.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {game.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-dragon-blue-900 text-dragon-blue-300 rounded-full text-sm">{tech}</span>
            ))}
          </div>

          <div className="flex justify-center">
            <a href={game.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-dragon-blue-600 hover:bg-dragon-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg">
              <FaGithub className="text-xl" />
              <span>Ver Repositorio</span>
            </a>
          </div>
        </div>
      </div>

      <ModalVideo
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={game.video}
        title={game.title}
      />
    </>
  );
};

export default GameCard;