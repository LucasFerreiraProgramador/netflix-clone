/**
 * Página 404 - Não Encontrado
 */

import React from 'react';
import { useLocation } from 'wouter';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <AlertCircle className="w-20 h-20 text-red-600 mx-auto mb-6" />
        <h1 className="text-5xl font-black text-white mb-4">404</h1>
        <p className="text-2xl text-gray-300 mb-2">Página não encontrada</p>
        <p className="text-gray-500 mb-8">
          Desculpe, a página que você está procurando não existe.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded transition-colors"
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
}
