/**
 * Página Profile
 * Exibe informações do usuário
 */

import React from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import { User, Mail, LogOut } from 'lucide-react';

export const Profile: React.FC = () => {
  const [, navigate] = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Conteúdo */}
      <div className="pt-32 pb-12 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Meu Perfil</h1>

          {/* Card de perfil */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            {/* Avatar */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Informações */}
            <div className="space-y-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Nome
                </label>
                <p className="text-white text-lg font-medium">{user.name}</p>
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-2">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <p className="text-white text-lg font-mono">{user.email}</p>
              </div>

              {/* ID do usuário */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  ID do Usuário
                </label>
                <p className="text-gray-300 text-sm font-mono">{user.id}</p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-700" />

              {/* Informações do projeto */}
              <div>
                <h2 className="text-lg font-bold text-white mb-4">
                  Sobre este Projeto
                </h2>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>
                    Este é um clone da Netflix criado por Lucas Ferreira, usando tecnologias: React, TypeScript e JavaScript.
                  </p>
                  <p>
                    O projeto utiliza dados mockados e não possui backend real. Todas as funcionalidades são simuladas para fins educacionais.
                  </p>
                  <p className="text-xs text-gray-500 mt-4">
                    Versão 1.0.0 - Projeto de Aprendizado
                  </p>
                </div>
              </div>

              {/* Botão de logout */}
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2 mt-8"
              >
                <LogOut className="w-5 h-5" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
