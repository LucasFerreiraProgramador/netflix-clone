/**
 * Dados mockados de filmes para o Netflix Clone
 * Estes dados são usados para demonstração e aprendizado
 * Em uma aplicação real, viriam de uma API
 */

import { Movie } from '@/types';

// Nota didática: Este é um exemplo de dados estáticos
// Em produção, esses dados viriam de um backend/API

export const moviesData: Movie[] = [
  {
    id: '1',
    title: 'Interestelar',
    description: 'Um grupo de astronautas viaja através de um buraco de minhoca perto de Saturno em busca de um novo lar para a humanidade.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/tut_Analise_Grafica_Cartaz_Interstellar_05_011_4fa28e27.png',
    backdrop: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/048462_d475260a.jpg',
    rating: 8.6,
    year: 2014,
    genre: ['Ficção Científica', 'Drama', 'Aventura'],
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    duration: 169,
    type: 'movie',
  },
  {
    id: '2',
    title: 'Avatar',
    description: 'Um paraplégico marinho é enviado para a lua de Pandora em uma missão, mas acaba se apaixonando pela cultura alienígena e se vê forçado a tomar partido em um conflito.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/big-poster-filme-avatar-tamanho-90x60-cm-lo003-presente-geek(1)_38939d1f.webp',
    backdrop: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/big-poster-filme-avatar-tamanho-90x60-cm-lo003-presente-geek(1)_38939d1f.webp',
    rating: 8.3,
    year: 2009,
    genre: ['Ficção Científica', 'Aventura', 'Drama'],
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    duration: 162,
    type: 'movie',
  },
  {
    id: '3',
    title: 'Dunkirk',
    description: 'Durante a Segunda Guerra Mundial, soldados aliados são cercados na praia de Dunkirk. Um jovem soldado tenta sobreviver enquanto espera pelo resgate.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/CzfK9zNXEAEWO_Q_f581923d.jpg',
    backdrop: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/CzfK9zNXEAEWO_Q_f581923d.jpg',
    rating: 8.0,
    year: 2017,
    genre: ['Guerra', 'Drama', 'Ação'],
    cast: ['Tom Hardy', 'Kenneth Branagh', 'Mark Rylance'],
    duration: 106,
    type: 'movie',
  },
  {
    id: '4',
    title: 'The Batman',
    description: 'Quando um assassino começa a alvejar a elite de Gotham, Batman se vê envolvido em uma investigação que o leva a questionar sua própria existência.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/FD1yq6PWUAYeJUv(1)_d3fdac54.jpg',
    backdrop: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/FD1yq6PWUAYeJUv(1)_d3fdac54.jpg',
    rating: 7.9,
    year: 2022,
    genre: ['Ação', 'Crime', 'Drama'],
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
    duration: 176,
    type: 'movie',
  },
  {
    id: '5',
    title: 'Corações de Ferro',
    description: 'Um jovem soldado enfrenta o horror da guerra enquanto tripula um tanque durante a Segunda Guerra Mundial.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/GUtdNXcWgAAjfSq(1)_96ca6275.jpg',
    backdrop: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/GUtdNXcWgAAjfSq(1)_96ca6275.jpg',
    rating: 7.6,
    year: 2014,
    genre: ['Guerra', 'Drama', 'Ação'],
    cast: ['Brad Pitt', 'Shia LaBeouf', 'Logan Lerman'],
    duration: 134,
    type: 'movie',
  },
  {
    id: '6',
    title: 'Os Sete Magníficos',
    description: 'Sete homens são contratados para proteger uma pequena cidade de bandidos. Um western clássico reimaginado.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/282704_62826904.jpg',
    backdrop: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/282704_62826904.jpg',
    rating: 7.3,
    year: 2016,
    genre: ['Western', 'Ação', 'Drama'],
    cast: ['Denzel Washington', 'Chris Pratt', 'Ethan Hawke'],
    duration: 132,
    type: 'movie',
  },
  {
    id: '7',
    title: '300: A Ascensão do Império',
    description: 'Após os eventos de 300, uma nova batalha épica se desenrola quando o Império Persa tenta conquistar a Grécia.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/big-poster-filme-300-ascensao-do-imperio-lo01-tam-90x60-cm-poster-de-filme(1)_0de213e3.jpg',
    backdrop: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/big-poster-filme-300-ascensao-do-imperio-lo01-tam-90x60-cm-poster-de-filme(1)_0de213e3.jpg',
    rating: 6.8,
    year: 2014,
    genre: ['Ação', 'Fantasia', 'Guerra'],
    cast: ['Sullivan Stapleton', 'Eva Green', 'Jack O\'Connell'],
    duration: 102,
    type: 'movie',
  },
  {
    id: '8',
    title: 'Atirador Americano',
    description: 'Um atirador de elite da Marinha dos EUA é enviado para o Iraque com a missão de proteger seus companheiros. Baseado em uma história real.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/564956(1)_239a0ef8.jpg',
    backdrop: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/564956(1)_239a0ef8.jpg',
    rating: 7.4,
    year: 2014,
    genre: ['Guerra', 'Drama', 'Thriller'],
    cast: ['Bradley Cooper', 'Sienna Miller', 'Kyle Gallner'],
    duration: 132,
    type: 'movie',
  },
  {
    id: '9',
    title: 'Velozes & Furiosos 9',
    description: 'Dom Toretto e sua equipe enfrentam seu inimigo mais poderoso - o irmão que ele nunca conheceu - em uma aventura cheia de ação e velocidade.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/20982-cartaz_275fb427.jpg',
    backdrop: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/20982-cartaz_275fb427.jpg',
    rating: 6.5,
    year: 2021,
    genre: ['Ação', 'Aventura', 'Thriller'],
    cast: ['Vin Diesel', 'Michelle Rodriguez', 'Tyrese Gibson'],
    duration: 145,
    type: 'movie',
  },
  {
    id: '10',
    title: 'O Poderoso Chefão',
    description: 'A história épica da família Corleone, uma das mais poderosas famílias mafiosas de Nova York.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/71nJYTNc-sL._AC_UF1000,1000_QL80__01ea8249.jpg',
    backdrop: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/71nJYTNc-sL._AC_UF1000,1000_QL80__01ea8249.jpg',
    rating: 9.2,
    year: 1972,
    genre: ['Crime', 'Drama'],
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    duration: 175,
    type: 'movie',
  },
  {
    id: '11',
    title: 'Pantera Negra',
    description: 'T\'Challa, o rei de Wakanda, deve defender seu reino e sua tecnologia avançada de ameaças externas.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/107535g_98ca8999.jpg',
    backdrop: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/107535g_98ca8999.jpg',
    rating: 7.3,
    year: 2018,
    genre: ['Ação', 'Aventura', 'Ficção Científica'],
    cast: ['Chadwick Boseman', 'Michael B. Jordan', 'Lupita Nyong\'o'],
    duration: 134,
    type: 'movie',
  },
  {
    id: '12',
    title: 'Senhor dos Anéis: A Sociedade do Anel',
    description: 'Um jovem hobbit embarca em uma jornada épica para destruir um anel maligno e salvar a Terra Média.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/poster-o-senhor-dos-aneis-a-sociedade-do-anel-lo04-90x60-cm-presente-geek_6b9fdac5.jpg',
    backdrop: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663179847405/5dKAeaWFL8JuWB4z2pWYve/poster-o-senhor-dos-aneis-a-sociedade-do-anel-lo04-90x60-cm-presente-geek_6b9fdac5.jpg',
    rating: 8.8,
    year: 2001,
    genre: ['Fantasia', 'Aventura', 'Drama'],
    cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
    duration: 178,
    type: 'movie',
  },
];

/**
 * Funções auxiliares para trabalhar com os dados
 */

// Retorna filmes de um gênero específico
export const getMoviesByGenre = (genre: string): Movie[] => {
  return moviesData.filter((movie) => movie.genre.includes(genre));
};

// Retorna filmes de um tipo específico (movie ou series)
export const getMoviesByType = (type: 'movie' | 'series'): Movie[] => {
  return moviesData.filter((movie) => movie.type === type);
};

// Busca filmes por título (case-insensitive)
export const searchMovies = (query: string): Movie[] => {
  const lowerQuery = query.toLowerCase();
  return moviesData.filter(
    (movie) =>
      movie.title.toLowerCase().includes(lowerQuery) ||
      movie.description.toLowerCase().includes(lowerQuery)
  );
};

// Retorna um filme pelo ID
export const getMovieById = (id: string): Movie | undefined => {
  return moviesData.find((movie) => movie.id === id);
};

// Retorna os filmes mais bem avaliados
export const getTopRatedMovies = (limit: number = 5): Movie[] => {
  return [...moviesData].sort((a, b) => b.rating - a.rating).slice(0, limit);
};
