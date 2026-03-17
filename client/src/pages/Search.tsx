/**
 * Página Search
 * Permite pesquisar filmes por título ou descrição
 */

import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import MovieCard from '@/components/MovieCard';
import MovieModal from '@/components/MovieModal';
import { Movie } from '@/types';
import { searchMovies, moviesData } from '@/data/movies';
import { Search as SearchIcon } from 'lucide-react';

export const Search: React.FC = () => {
  const [, navigate] = useLocation();
  const { isAuthenticated } = useAuth();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length > 0) {
      const searchResults = searchMovies(value);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Conteúdo */}
      <div className="pt-32 pb-12 px-4 md:px-8">
        {/* Barra de pesquisa */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Pesquisar filmes, séries..."
              value={query}
              onChange={handleSearch}
              className="w-full bg-gray-800 border border-gray-700 text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
              autoFocus
            />
          </div>
        </div>

        {/* Resultados */}
        {query.trim().length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <SearchIcon className="w-16 h-16 text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg">
              Digite algo para pesquisar
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-gray-400 text-lg">
              Nenhum resultado encontrado para "{query}"
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-white mb-6">
              Resultados para "{query}"
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {results.map((movie) => (
                <div key={movie.id} onClick={() => handleMovieClick(movie)}>
                  <MovieCard
                    movie={movie}
                    onMovieClick={handleMovieClick}
                  />
                </div>
              ))}
            </div>
          </>
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

export default Search;
