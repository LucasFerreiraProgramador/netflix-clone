/**
 * Contexto de Autenticação
 * Gerencia o estado de login/logout do usuário
 * 
 * Nota didática: Este é um exemplo simplificado de autenticação
 * Em produção, você usaria um serviço de autenticação real (Firebase, Auth0, etc.)
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthContextType } from '@/types';

// Criar o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Credenciais fixas para demonstração (conforme solicitado pelo usuário)
const DEMO_CREDENTIALS = {
  email: 'lucasferreirasilva.dev@gmail.com',
  password: '123456',
};

// Provider do contexto
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Função de login
  const login = async (email: string, password: string): Promise<void> => {
    // Simular delay de requisição
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verificar credenciais
        if (
          email === DEMO_CREDENTIALS.email &&
          password === DEMO_CREDENTIALS.password
        ) {
          // Criar usuário simulado
          const newUser: User = {
            id: '1',
            email: email,
            name: 'Lucas Ferreira Silva',
            avatar: 'https://via.placeholder.com/150?text=LFS',
          };
          setUser(newUser);
          // Salvar no localStorage para persistência
          localStorage.setItem('netflix_user', JSON.stringify(newUser));
          resolve();
        } else {
          reject(new Error('Email ou senha incorretos'));
        }
      }, 500);
    });
  };

  // Função de logout
  const logout = (): void => {
    setUser(null);
    localStorage.removeItem('netflix_user');
  };

  // Verificar se há usuário salvo no localStorage ao carregar
  React.useEffect(() => {
    const savedUser = localStorage.getItem('netflix_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
      }
    }
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: user !== null,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
