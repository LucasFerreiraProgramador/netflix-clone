/**
 * Componente MovieModal
 * Exibe detalhes completos de um filme em um modal
 */

import React from 'react';
import { Movie } from '@/types';
import { X, Play, Plus, Check } from 'lucide-react';
import { useMovieList } from '@/contexts/MovieListContext';

interface MovieModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MovieModal: React.FC<MovieModalProps> = ({ movie, isOpen, onClose }) => {
  const { isInList, addToList, removeFromList } = useMovieList();

  if (!isOpen || !movie) return null;

  const inList = isInList(movie.id);

  const handleAddToList = () => {
    if (inList) {
      removeFromList(movie.id);
    } else {
      addToList(movie);
    }
  };

  const handlePlay = () => {
    alert('Reprodutor de vídeo em desenvolvimento!');
  };

  const buttonClass = inList
    ? 'bg-white text-black hover:bg-gray-200'
    : 'bg-gray-700 text-white hover:bg-gray-600';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagem de fundo */}
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src={movie.backdrop}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />

          {/* Botão fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          {/* Título */}
          <h1 className="text-3xl font-bold text-white mb-2">{movie.title}</h1>

          {/* Metadados */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded font-bold">
              {movie.rating.toFixed(1)}
            </span>
            <span>{movie.year}</span>
            <span>{movie.duration} minutos</span>
            <span className="capitalize">
              {movie.type === 'movie' ? 'Filme' : 'Série'}
            </span>
          </div>

          {/* Gêneros */}
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genre.map((g) => (
              <span
                key={g}
                className="bg-gray-700 text-gray-200 px-3 py-1 rounded text-sm"
              >
                {g}
              </span>
            ))}
          </div>

          {/* Descrição */}
          <p className="text-gray-300 mb-6 leading-relaxed">{movie.description}</p>

          {/* Elenco */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-white mb-2">Elenco</h2>
            <p className="text-gray-300">{movie.cast.join(', ')}</p>
          </div>

          {/* Botões de ação */}
          <div className="flex gap-4">
            <button
              onClick={handlePlay}
              className="flex-1 bg-white text-black font-bold py-3 px-6 rounded hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              Reproduzir
            </button>

            <button
              onClick={handleAddToList}
              className={`px-6 py-3 rounded font-bold transition-colors flex items-center gap-2 ${buttonClass}`}
            >
              {inList ? (
                <>
                  <Check className="w-5 h-5" />
                  Removido
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  Minha Lista
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
