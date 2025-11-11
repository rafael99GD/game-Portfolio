import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaImage, FaPlay } from 'react-icons/fa';
import ModalVideo from './ModalVideo';

const GameCard = ({ game }) => {
  const [imageError, setImageError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageError = () => {
    console.log(`Error loading image: ${game.image}`);
    setImageError(true);
  };

  const handleVideoError = () => {
    console.log(`Error loading video: ${game.video}`);
    setVideoError(true);
  };

  const handleVideoLoad = () => {
    console.log(`Video loaded successfully: ${game.video}`);
    setIsVideoLoaded(true);
  };

  const shouldShowVideo = game.video && showVideo && isVideoLoaded && !videoError;

  const openModal = (e) => {
    e.stopPropagation();
    if (game.video && !videoError) {
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
          className="relative h-48 bg-dragon-black-800 overflow-hidden cursor-pointer"
          onMouseEnter={() => game.video && !videoError && setShowVideo(true)}
          onMouseLeave={() => setShowVideo(false)}
        >
          {/* Video preview en hover */}
          {shouldShowVideo ? (
            <div className="relative w-full h-full">
              <video
                src={game.video}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                onError={handleVideoError}
                onLoadedData={handleVideoLoad}
              />
            </div>
          ) : (
            /* Imagen normal */
            <>
              {!imageError ? (
                <div className="relative w-full h-full">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                  {/* Solo el indicador pequeño en la esquina cuando NO hay hover */}
                  {game.video && !videoError && !showVideo && (
                    <div className="absolute top-3 right-3 bg-dragon-blue-600 rounded-full p-2 shadow-lg">
                      <FaPlay className="text-white text-xs" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-full bg-dragon-blue-900 flex flex-col items-center justify-center">
                  <FaImage className="text-dragon-blue-400 text-4xl mb-2" />
                  <span className="text-dragon-blue-300 text-sm">Imagen no encontrada</span>
                </div>
              )}
            </>
          )}

          {/* Video oculto para preload */}
          {game.video && !videoError && (
            <video
              src={game.video}
              muted
              playsInline
              preload="metadata"
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              className="hidden"
            />
          )}
          
          {/* Overlay SOLO cuando hay hover - Aquí va el único botón circular */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            onClick={openModal}
          >
            <div className="text-center">
              {game.video && !videoError ? (
                <>
                  {/* Único botón circular grande */}
                  <div className="bg-dragon-blue-600 hover:bg-dragon-blue-500 rounded-full p-5 mb-3 mx-auto transition-all duration-300 transform hover:scale-110 border-2 border-white/30 shadow-2xl">
                    <FaPlay className="text-white text-2xl ml-1" />
                  </div>
                  <span className="text-white font-semibold text-lg">Ver Video</span>
                </>
              ) : (
                <>
                  <FaExternalLinkAlt className="text-dragon-blue-400 text-2xl mx-auto mb-2" />
                  <span className="text-white font-semibold">Ver Detalles</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 dragon-font">{game.title}</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">{game.description}</p>
          
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

          {/* Solo un botón para el repositorio */}
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