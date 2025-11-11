import React from 'react';
import { FaGithub, FaLinkedin, FaGamepad } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-dragon-black-900 border-b-2 border-dragon-blue-500 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaGamepad className="text-dragon-blue-400 text-2xl animate-pulse" />
            <h1 className="dragon-font text-2xl font-bold text-dragon-blue-400">
              rafael99GD
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-white hover:text-dragon-blue-400 transition-colors duration-300 font-semibold">
              Sobre Mí
            </a>
            <a href="#games" className="text-white hover:text-dragon-blue-400 transition-colors duration-300 font-semibold">
              Juegos
            </a>
            <a href="#contact" className="text-white hover:text-dragon-blue-400 transition-colors duration-300 font-semibold">
              Contacto
            </a>
          </nav>

          <div className="flex space-x-4">
            <a 
              href="https://github.com/rafael99GD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-dragon-blue-400 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rafael99gd/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-dragon-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;