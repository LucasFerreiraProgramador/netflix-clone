/**
 * Componente Hero
 * Exibe um banner principal com destaque de um filme
 */

import React from 'react';
import { Movie } from '@/types';
import { Play, Info } from 'lucide-react';

interface HeroProps {
  movie: Movie;
  onPlayClick: () => void;
  onInfoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ movie, onPlayClick, onInfoClick }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagem de fundo */}
      <img
        src={movie.backdrop}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Conteúdo */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16">
        <div className="max-w-2xl">
          {/* Logo/Título */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-lg">
            {movie.title}
          </h1>

          {/* Descrição */}
          <p className="text-lg md:text-xl text-gray-200 mb-6 line-clamp-3">
            {movie.description}
          </p>

          {/* Metadados */}
          <div className="flex items-center gap-4 mb-8 text-sm md:text-base text-gray-300">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded font-bold">
              {movie.rating.toFixed(1)}
            </span>
            <span>{movie.year}</span>
            <span>{movie.duration} minutos</span>
          </div>

          {/* Botões */}
          <div className="flex gap-4">
            <button
              onClick={onPlayClick}
              className="bg-white text-black font-bold py-3 px-8 rounded hover:bg-gray-200 transition-colors flex items-center gap-2 text-lg"
            >
              <Play className="w-6 h-6 fill-current" />
              Reproduzir
            </button>

            <button
              onClick={onInfoClick}
              className="bg-gray-700/80 text-white font-bold py-3 px-8 rounded hover:bg-gray-600 transition-colors flex items-center gap-2 text-lg"
            >
              <Info className="w-6 h-6" />
              Mais Informações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
