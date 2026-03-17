/**
 * Página de Login
 * Permite que o usuário faça login com credenciais fixas para demonstração
 * Email: lucasferreirasilva.dev@gmail.com
 * Senha: 123456
 */

import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { AlertCircle, Loader2 } from 'lucide-react';

export const Login: React.FC = () => {
  const [, navigate] = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Erro ao fazer login'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setError('');
    setIsLoading(true);
    setEmail('lucasferreirasilva.dev@gmail.com');
    setPassword('123456');

    try {
      await login('lucasferreirasilva.dev@gmail.com', '123456');
      navigate('/');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Erro ao fazer login'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-red-600 font-black text-5xl tracking-tighter mb-2">
            NETFLIX
          </h1>
          <p className="text-gray-400 text-sm">Clone para Aprendizado</p>
        </div>

        {/* Card de login */}
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Entrar</h2>

          {/* Mensagem de erro */}
          {error && (
            <div className="mb-4 p-4 bg-red-500/20 border border-red-500 rounded flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-red-600 transition-colors"
                disabled={isLoading}
              />
            </div>

            {/* Senha */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sua senha"
                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-red-600 transition-colors"
                disabled={isLoading}
              />
            </div>

            {/* Botão de login */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-gray-500 text-sm">ou</span>
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          {/* Demo login */}
          <button
            onClick={handleDemoLogin}
            disabled={isLoading}
            className="w-full bg-gray-700 hover:bg-gray-600 disabled:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
          >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            Usar Credenciais de Demonstração
          </button>

          {/* Info */}
          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded">
            <p className="text-blue-200 text-xs font-medium mb-2">
              Credenciais de Demonstração:
            </p>
            <p className="text-blue-300 text-xs font-mono">
              Email: lucasferreirasilva.dev@gmail.com
            </p>
            <p className="text-blue-300 text-xs font-mono">
              Senha: 123456
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-8">
          Este é um projeto de estudante para aprendizado de React e desenvolvimento web.
        </p>
      </div>
    </div>
  );
};

export default Login;
