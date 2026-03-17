/**
 * Componente Footer
 * Exibe informações de copyright e créditos
 */

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-400 text-sm">
          © 2026 Netflix Clone — Todos os direitos reservados - Desenvolvido por{' '}
          <a
            href="https://lucas.ferreiradev.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-500 transition-colors font-semibold"
          >
            Lucas Ferreira
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
