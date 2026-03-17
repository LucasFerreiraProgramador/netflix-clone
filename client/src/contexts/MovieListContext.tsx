/**
 * Contexto de Lista de Filmes Favoritos (Minha Lista)
 * Gerencia os filmes adicionados à lista de favoritos do usuário
 * 
 * Nota didática: Usa localStorage para persistência de dados
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Movie, MovieListContextType } from '@/types';

// Criar o contexto
const MovieListContext = createContext<MovieListContextType | undefined>(undefined);

// Provider do contexto
export const MovieListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [myList, setMyList] = useState<Movie[]>([]);

  // Carregar lista do localStorage ao montar o componente
  React.useEffect(() => {
    const savedList = localStorage.getItem('netflix_mylist');
    if (savedList) {
      try {
        setMyList(JSON.parse(savedList));
      } catch (error) {
        console.error('Erro ao carregar lista de filmes:', error);
      }
    }
  }, []);

  // Adicionar filme à lista
  const addToList = (movie: Movie): void => {
    setMyList((prevList) => {
      // Verificar se o filme já está na lista
      if (prevList.some((m) => m.id === movie.id)) {
        return prevList;
      }
      const newList = [...prevList, movie];
      // Salvar no localStorage
      localStorage.setItem('netflix_mylist', JSON.stringify(newList));
      return newList;
    });
  };

  // Remover filme da lista
  const removeFromList = (movieId: string): void => {
    setMyList((prevList) => {
      const newList = prevList.filter((m) => m.id !== movieId);
      // Salvar no localStorage
      localStorage.setItem('netflix_mylist', JSON.stringify(newList));
      return newList;
    });
  };

  // Verificar se um filme está na lista
  const isInList = (movieId: string): boolean => {
    return myList.some((m) => m.id === movieId);
  };

  const value: MovieListContextType = {
    myList,
    addToList,
    removeFromList,
    isInList,
  };

  return (
    <MovieListContext.Provider value={value}>
      {children}
    </MovieListContext.Provider>
  );
};

// Hook para usar o contexto
export const useMovieList = (): MovieListContextType => {
  const context = useContext(MovieListContext);
  if (context === undefined) {
    throw new Error('useMovieList deve ser usado dentro de um MovieListProvider');
  }
  return context;
};
