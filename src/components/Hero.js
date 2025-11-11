import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-dragon-black-900 via-dragon-blue-900 to-dragon-black-800 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-dragon-blue-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dragon-blue-700 rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-dragon-blue-500 shadow-2xl animate-glow overflow-hidden">
            {/* Aquí va tu imagen - reemplaza con tu foto */}
            <div className="w-full h-full bg-dragon-blue-800 flex items-center justify-center">
              <span className="text-white text-sm">Tu Foto Aquí</span>
            </div>
          </div>
          
          <h1 className="dragon-font text-5xl md:text-7xl font-bold text-white mb-4">
            Rafael
            <span className="text-dragon-blue-400 animate-pulse">GD</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-dragon-blue-300 mb-6 font-light">
            Game Developer & Creative Coder
          </p>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Creando experiencias interactivas y juegos inmersivos con pasión y innovación. 
            Especializado en desarrollo de juegos 2D/3D y aplicaciones web interactivas.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <a 
            href="#games" 
            className="bg-dragon-blue-600 hover:bg-dragon-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-dragon-blue-500/25"
          >
            Ver Juegos
          </a>
          <a 
            href="#contact" 
            className="border-2 border-dragon-blue-500 text-dragon-blue-400 hover:bg-dragon-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dragon-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-dragon-blue-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;