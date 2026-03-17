/**
 * Componente MovieCard
 * Exibe um card de filme com opções de play e adicionar à lista
 */

import React, { useState } from 'react';
import { Movie } from '@/types';
import { Play, Plus, Check } from 'lucide-react';
import { useMovieList } from '@/contexts/MovieListContext';

interface MovieCardProps {
  movie: Movie;
  onMovieClick: (movie: Movie) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onMovieClick }) => {
  const { isInList, addToList, removeFromList } = useMovieList();
  const [isHovered, setIsHovered] = useState(false);
  const inList = isInList(movie.id);

  const handleAddToList = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inList) {
      removeFromList(movie.id);
    } else {
      addToList(movie);
    }
  };

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Mostrar mensagem de desenvolvimento
    alert('Reprodutor de vídeo em desenvolvimento!');
  };

  return (
    <div
      className="relative group cursor-pointer flex-shrink-0 w-48 h-72 rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onMovieClick(movie)}
    >
      {/* Imagem do filme */}
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />

      {/* Informações ao passar o mouse */}
      {isHovered && (
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent">
          {/* Título */}
          <h3 className="text-white font-bold text-sm mb-2 line-clamp-2">
            {movie.title}
          </h3>

          {/* Avaliação e ano */}
          <div className="flex items-center gap-2 text-xs text-gray-300 mb-3">
            <span className="bg-yellow-500 text-black px-2 py-0.5 rounded font-bold">
              {movie.rating.toFixed(1)}
            </span>
            <span>{movie.year}</span>
            <span>{movie.duration}m</span>
          </div>

          {/* Botões de ação */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePlay}
              className="flex-1 bg-white text-black font-bold py-2 px-3 rounded hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              <span className="text-sm">Play</span>
            </button>

                  <button
              onClick={handleAddToList}
              className={`p-2 rounded-full border-2 transition-colors ${inList ? 'bg-white border-white text-black' : 'border-gray-400 text-gray-400 hover:border-white hover:text-white'}`}
              title={inList ? 'Remover da lista' : 'Adicionar à lista'}
            >
              {inList ? (
                <Check className="w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Indicador de que está na lista (quando não está em hover) */}
      {!isHovered && inList && (
        <div className="absolute top-2 right-2 bg-white rounded-full p-1">
          <Check className="w-4 h-4 text-black" />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
