import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const GameCard = ({ game }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-dragon-black-700 rounded-2xl overflow-hidden border-2 border-dragon-blue-500/30 hover:border-dragon-blue-400 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl hover:shadow-dragon-blue-500/20">
      {/* Media Container */}
      <div 
        className="relative h-48 bg-dragon-black-800 overflow-hidden cursor-pointer"
        onMouseEnter={() => setShowVideo(true)}
        onMouseLeave={() => setShowVideo(false)}
      >
        {game.video && showVideo ? (
          <>
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-dragon-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <video
              src={game.video}
              autoPlay
              muted
              loop
              playsInline
              className={`w-full h-full object-cover ${isVideoLoaded ? 'block' : 'hidden'}`}
              onLoadedData={() => setIsVideoLoaded(true)}
            />
          </>
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${game.image})` }}
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <FaExternalLinkAlt className="text-dragon-blue-400 text-2xl mx-auto mb-2" />
            <span className="text-white font-semibold">Ver Detalles</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 dragon-font">{game.title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{game.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {game.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-dragon-blue-900 text-dragon-blue-300 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <a
            href={game.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-dragon-blue-600 hover:bg-dragon-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-semibold"
          >
            <FaGithub />
            <span>Código</span>
          </a>
          
          {game.demoUrl && (
            <a
              href={game.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border-2 border-dragon-blue-500 text-dragon-blue-400 hover:bg-dragon-blue-500 hover:text-white px-4 py-2 rounded-lg transition-colors duration-300 font-semibold"
            >
              <FaExternalLinkAlt />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;