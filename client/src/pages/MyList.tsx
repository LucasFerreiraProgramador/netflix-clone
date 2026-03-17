/**
 * Página Minha Lista
 * Exibe filmes adicionados à lista de favoritos
 */

import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { useMovieList } from '@/contexts/MovieListContext';
import Header from '@/components/Header';
import MovieCard from '@/components/MovieCard';
import MovieModal from '@/components/MovieModal';
import { Movie } from '@/types';

export const MyList: React.FC = () => {
  const [, navigate] = useLocation();
  const { isAuthenticated } = useAuth();
  const { myList } = useMovieList();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Conteúdo */}
      <div className="pt-32 pb-12 px-4 md:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Minha Lista</h1>

        {myList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-gray-400 text-lg mb-4">
              Sua lista está vazia
            </p>
            <p className="text-gray-500 text-sm">
              Adicione filmes clicando no botão de adição nos cards
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {myList.map((movie) => (
              <div key={movie.id} onClick={() => handleMovieClick(movie)}>
                <MovieCard
                  movie={movie}
                  onMovieClick={handleMovieClick}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default MyList;
