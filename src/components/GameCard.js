import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaImage, FaPlay } from 'react-icons/fa';
import ModalVideo from './ModalVideo';
import ReactPlayer from 'react-player';

const GameCard = ({ game }) => {
  const [imageError, setImageError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // ReactPlayer maneja sus propios errores, simplificamos esto
  const handleVideoReady = () => {
    setIsVideoLoaded(true);
  };

  const openModal = (e) => {
    e.stopPropagation();
    if (game.video) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-dragon-black-700 rounded-2xl overflow-hidden border-2 border-dragon-blue-500/30 hover:border-dragon-blue-400 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl hover:shadow-dragon-blue-500/20">
        
        {/* Media Container */}
        <div 
          className="relative h-48 bg-dragon-black-800 overflow-hidden cursor-pointer group"
          onMouseEnter={() => setShowVideo(true)}
          onMouseLeave={() => setShowVideo(false)}
        >
          {/* SOLUCIÓN: 
             Ponemos el ReactPlayer "detrás" o sustituyendo la imagen.
             YouTube no permite "preload" real como un MP4, así que el hover puede tardar un poco.
          */}
          
          {showVideo && game.video ? (
             <div className="absolute inset-0 w-full h-full bg-black">
                <ReactPlayer
                  url={game.video}
                  playing={true}      // Se reproduce al hacer hover
                  muted={true}        // Obligatorio para autoplay en navegadores
                  loop={true}
                  width="100%"
                  height="100%"
                  controls={false}
                  onReady={handleVideoReady}
                  config={{
                    youtube: {
                      playerVars: { showinfo: 0, controls: 0, modestbranding: 1 }
                    }
                  }}
                />
             </div>
          ) : (
            /* Imagen estática (Cover) */
            <div className="relative w-full h-full">
              {!imageError ? (
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full bg-dragon-blue-900 flex flex-col items-center justify-center">
                  <FaImage className="text-dragon-blue-400 text-4xl mb-2" />
                  <span className="text-dragon-blue-300 text-sm">Imagen no encontrada</span>
                </div>
              )}
              
              {/* Icono pequeño en la esquina */}
              {game.video && (
                <div className="absolute top-3 right-3 bg-dragon-blue-600 rounded-full p-2 shadow-lg z-10">
                  <FaPlay className="text-white text-xs" />
                </div>
              )}
            </div>
          )}

          {/* Overlay y Botón central (aparece en hover sobre el video o la imagen) */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20"
            onClick={openModal}
          >
            <div className="text-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
               <div className="bg-dragon-blue-600 hover:bg-dragon-blue-500 rounded-full p-5 mb-3 mx-auto border-2 border-white/30 shadow-2xl cursor-pointer">
                 <FaPlay className="text-white text-2xl ml-1" />
               </div>
               <span className="text-white font-semibold text-lg drop-shadow-md">Ver Video Completo</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 dragon-font">{game.title}</h3>
          <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">{game.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {game.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-dragon-blue-900 text-dragon-blue-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href={game.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-dragon-blue-600 hover:bg-dragon-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-dragon-blue-500/25"
            >
              <FaGithub className="text-xl" />
              <span>Ver Repositorio</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal de Video */}
      <ModalVideo
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl={game.video}
        title={game.title}
      />
    </>
  );
};

export default GameCard;