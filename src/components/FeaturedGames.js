import React from 'react';
import GameCard from './GameCard';
import { featuredGames } from '../data/gamesData';

const FeaturedGames = () => {
  return (
    <section id="games" className="py-20 bg-dragon-black-900">
      <div className="container mx-auto px-4">
        <h2 className="dragon-font text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Juegos <span className="text-dragon-blue-400">Destacados</span>
        </h2>
        
        <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Una colección de mis proyectos más significativos en desarrollo de juegos. 
          Cada proyecto representa un desafío único y una oportunidad de aprendizaje.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* Sección para agregar nuevos juegos fácilmente */}
        <div className="mt-16 text-center">
          <div className="bg-dragon-black-800 rounded-2xl p-8 border-2 border-dashed border-dragon-blue-500/30">
            <h3 className="text-2xl font-bold text-dragon-blue-400 mb-4">
              ¿Más proyectos en camino?
            </h3>
            <p className="text-gray-400 mb-6">
              Para agregar nuevos juegos, simplemente edita el archivo <code className="bg-dragon-black-700 px-2 py-1 rounded">gamesData.js</code>
            </p>
            <div className="bg-dragon-black-700 rounded-lg p-4 text-left max-w-2xl mx-auto">
              <code className="text-sm text-gray-300">
                {`{
  id: 4,
  title: "Nuevo Juego",
  description: "Descripción del juego...",
  image: "/images/nuevo-juego.jpg",
  video: "/videos/nuevo-juego.mp4",
  githubUrl: "https://github.com/tu-usuario/nuevo-juego",
  technologies: ["Unity", "C#", "etc."],
  featured: true
}`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;