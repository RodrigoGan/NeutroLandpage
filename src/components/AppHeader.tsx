import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const AppHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Logo className="h-8 w-auto" />
          </Link>

          {/* Menu para desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-neutro transition-colors">
              Início
            </Link>
            <Link to="/institucional#missao" className="text-gray-600 hover:text-neutro transition-colors">
              Missão
            </Link>
            <Link to="/institucional#visao" className="text-gray-600 hover:text-neutro transition-colors">
              Visão
            </Link>
            <Link to="/institucional#valores" className="text-gray-600 hover:text-neutro transition-colors">
              Valores
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-neutro transition-colors">
              Contato
            </Link>
          </nav>

          {/* Botão do menu mobile */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-neutro focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-neutro hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/institucional#missao"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-neutro hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Missão
              </Link>
              <Link
                to="/institucional#visao"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-neutro hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Visão
              </Link>
              <Link
                to="/institucional#valores"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-neutro hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Valores
              </Link>
              <Link
                to="/contato"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-neutro hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
