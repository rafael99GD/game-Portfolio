import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-dragon-black-900 border-t-2 border-dragon-blue-500/30 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="dragon-font text-3xl font-bold text-white mb-6">
            Vamos a <span className="text-dragon-blue-400">Crear</span> Juntos
          </h2>
          
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            ¿Tienes una idea para un proyecto o quieres colaborar? 
            No dudes en contactarme. Siempre estoy interesado en nuevos desafíos.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/rafael99GD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-dragon-blue-600 hover:bg-dragon-blue-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/tu-perfil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-dragon-blue-600 hover:bg-dragon-blue-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:tu-email@ejemplo.com" 
              className="bg-dragon-blue-600 hover:bg-dragon-blue-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          <div className="border-t border-dragon-blue-500/30 pt-8 mt-8">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>Hecho con</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>por RafaelGD</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Inspirado en el mundo de Cómo entrenar a tu dragón
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;