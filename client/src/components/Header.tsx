/**
 * Componente Header
 * Exibe o logo NETFLIX, menu de navegação e informações do usuário
 */

import React from 'react';
import { useLocation, useRoute } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useState } from 'react';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [location, navigate] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Verificar se estamos na página de login
  const isLoginPage = location === '/login';

  if (isLoginPage) {
    return null; // Não mostrar header na página de login
  }

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Séries', path: '/series' },
    { label: 'Filmes', path: '/movies' },
    { label: 'Minha Lista', path: '/mylist' },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
           {/* Logo */}
        <div
          onClick={() => navigate('/')}
          className="cursor-pointer flex-shrink-0"
        >
         <h1 className="font-black text-3xl tracking-tighter flex items-center">
         <span className="text-violet-600">LUCAS</span>
         <span className="text-white">FLIX</span>
         </h1>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const activeClass = isActive(item.path)
              ? 'text-white'
              : 'text-gray-400 hover:text-white';
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`text-sm font-medium transition-colors ${activeClass}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Ações do usuário */}
        <div className="flex items-center gap-4">
          {user && (
            <>
              {/* Busca (apenas desktop) */}
              <button
                onClick={() => navigate('/search')}
                className="hidden sm:block text-gray-400 hover:text-white transition-colors"
                title="Pesquisar"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Perfil */}
              <button
                onClick={() => navigate('/profile')}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">{user.name}</span>
              </button>

              {/* Logout */}
              <button
                onClick={logout}
                className="text-gray-400 hover:text-white transition-colors"
                title="Sair"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
         {isMenuOpen && user && (
        <div className="md:hidden bg-black/95 border-t border-gray-700">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const activeClass = isActive(item.path)
                ? 'text-white font-medium'
                : 'text-gray-400 hover:text-white';
              return (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-2 transition-colors ${activeClass}`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => {
                navigate('/search');
                setIsMenuOpen(false);
              }}
              className="text-left py-2 text-gray-400 hover:text-white transition-colors"
            >
              Pesquisar
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
