import React from 'react';
import { FaCode, FaGamepad, FaHeart, FaRocket } from 'react-icons/fa';

const About = () => {
  const skills = [
    { icon: <FaCode />, name: 'Desarrollo Web', level: 90 },
    { icon: <FaGamepad />, name: 'Game Development', level: 85 },
    { icon: <FaRocket />, name: 'Unity 3D', level: 80 },
    { icon: <FaHeart />, name: 'JavaScript/TypeScript', level: 88 },
  ];

  return (
    <section id="about" className="py-20 bg-dragon-black-800">
      <div className="container mx-auto px-4">
        <h2 className="dragon-font text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Sobre <span className="text-dragon-blue-400">Mí</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-dragon-black-700 rounded-2xl p-8 border-2 border-dragon-blue-500/30 shadow-2xl">
              <h3 className="text-2xl font-bold text-dragon-blue-400 mb-4">Mi Pasión</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Soy un apasionado desarrollador de juegos con experiencia en crear experiencias 
                interactivas únicas. Mi enfoque combina creatividad artística con sólidos 
                fundamentos técnicos para dar vida a ideas innovadoras.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Cuando no estoy programando, me encanta explorar nuevas tecnologías, 
                participar en game jams y contribuir a la comunidad de desarrollo de juegos.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-dragon-blue-400 mb-6">Habilidades</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-dragon-black-700 rounded-lg p-4 border border-dragon-blue-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2 text-white">
                      <span className="text-dragon-blue-400">{skill.icon}</span>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-dragon-blue-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dragon-black-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-dragon-blue-500 to-dragon-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;