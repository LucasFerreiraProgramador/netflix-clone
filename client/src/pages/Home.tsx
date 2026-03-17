/**
 * Página Home
 * Exibe o hero section e carrosséis de filmes por categoria
 */

import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carousel from '@/components/Carousel';
import MovieModal from '@/components/MovieModal';
import Footer from '@/components/Footer';
import { Movie } from '@/types';
import {
  moviesData,
  getMoviesByGenre,
  getTopRatedMovies,
} from '@/data/movies';

export const Home: React.FC = () => {
  const [, navigate] = useLocation();
  const { user, isAuthenticated } = useAuth();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Redirecionar para login se não autenticado
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

  const handlePlayClick = () => {
    alert('Reprodutor de vídeo em desenvolvimento!');
  };

  const handleInfoClick = () => {
    setSelectedMovie(moviesData[0]);
    setIsModalOpen(true);
  };

  // Dados para os carrosséis
  const actionMovies = getMoviesByGenre('Ação');
  const dramaMovies = getMoviesByGenre('Drama');
  const topRated = getTopRatedMovies(8);
  // Todos os filmes para a seção "Filmes em Destaque"
  const allMovies = moviesData;
  
  // Embaralhar filmes para "Continuar Assistindo" para que fique diferente de outras seções
  const shuffledMovies = React.useMemo(() => {
    const shuffled = [...moviesData];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 6);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <Hero
        movie={moviesData[0]}
        onPlayClick={handlePlayClick}
        onInfoClick={handleInfoClick}
      />

      {/* Carrosséis */}
      <div className="relative z-10 -mt-32 pb-12">
        <div className="px-4 md:px-8">
          <Carousel
            title="Filmes em Destaque"
            movies={allMovies}
            onMovieClick={handleMovieClick}
          />

          <Carousel
            title="Filmes de Ação"
            movies={actionMovies}
            onMovieClick={handleMovieClick}
          />

          <Carousel
            title="Filmes de Drama"
            movies={dramaMovies}
            onMovieClick={handleMovieClick}
          />

          <Carousel
            title="Continuar Assistindo"
            movies={shuffledMovies}
            onMovieClick={handleMovieClick}
          />
        </div>
      </div>

      {/* Modal de detalhes */}
      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
