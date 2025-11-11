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
      </div>
    </section>
  );
};

export default FeaturedGames;