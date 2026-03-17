/**
 * Página Series
 * Exibe séries disponíveis
 */

import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import MovieModal from '@/components/MovieModal';
import { Movie } from '@/types';
import { moviesData, getMoviesByType } from '@/data/movies';

export const Series: React.FC = () => {
  const [, navigate] = useLocation();
  const { isAuthenticated } = useAuth();
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

  const allSeries = getMoviesByType('series');
  const seriesByGenre = moviesData.filter((m) => m.genre.includes('Drama'));

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Conteúdo */}
      <div className="pt-32 pb-12 px-4 md:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Séries</h1>

        <Carousel
          title="Todas as Séries"
          movies={allSeries.length > 0 ? allSeries : moviesData}
          onMovieClick={handleMovieClick}
        />

        <Carousel
          title="Séries de Drama"
          movies={seriesByGenre}
          onMovieClick={handleMovieClick}
        />
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

export default Series;
