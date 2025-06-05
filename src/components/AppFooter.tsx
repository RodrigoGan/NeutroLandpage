import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Instagram, Facebook, Twitter, Linkedin, MessageSquareHeart, Award, Eye, Info, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const AppFooter: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const [showComingSoon, setShowComingSoon] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleComingSoonClick = (e: React.MouseEvent, key: string) => {
    e.preventDefault();
    setShowComingSoon(prev => ({
      ...prev,
      [key]: true
    }));
    setTimeout(() => {
      setShowComingSoon(prev => ({
        ...prev,
        [key]: false
      }));
    }, 2000);
  };

  return (
    <footer className="bg-neutral-100 border-t">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-neutral-600 mb-4">
              Pequenos Gestos, Grandes Impactos
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutro hover:text-neutro-dark transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutro hover:text-neutro-dark transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutro hover:text-neutro-dark transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutro hover:text-neutro-dark transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="md:block">
            <button 
              className="flex items-center justify-between w-full md:hidden"
              onClick={() => toggleSection('institucional')}
            >
              <h4 className="font-bold text-lg">Institucional</h4>
              {expandedSections['institucional'] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <h4 className="font-bold text-lg mb-4 hidden md:block">Institucional</h4>
            <ul className={`space-y-2 ${expandedSections['institucional'] ? 'block' : 'hidden'} md:block`}>
              <li className="flex items-center">
                <Info className="h-4 w-4 mr-2 text-neutro" />
                <div className="relative">
                  <a 
                    href="#" 
                    onClick={(e) => handleComingSoonClick(e, 'quemSomos')}
                    className="text-neutral-600 hover:text-neutro transition-colors"
                  >
                    Quem Somos
                  </a>
                  {showComingSoon['quemSomos'] && (
                    <span className="absolute left-0 top-6 text-xs text-neutro font-medium">
                      Em breve
                    </span>
                  )}
                </div>
              </li>
              <li className="flex items-center">
                <MessageSquareHeart className="h-4 w-4 mr-2 text-neutro" />
                <Link to="/institucional#missao" className="text-neutral-600 hover:text-neutro transition-colors">
                  Missão
                </Link>
              </li>
              <li className="flex items-center">
                <Eye className="h-4 w-4 mr-2 text-neutro" />
                <Link to="/institucional#visao" className="text-neutral-600 hover:text-neutro transition-colors">
                  Visão
                </Link>
              </li>
              <li className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-neutro" />
                <Link to="/institucional#valores" className="text-neutral-600 hover:text-neutro transition-colors">
                  Valores
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:block">
            <button 
              className="flex items-center justify-between w-full md:hidden"
              onClick={() => toggleSection('recursos')}
            >
              <h4 className="font-bold text-lg">Recursos</h4>
              {expandedSections['recursos'] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <h4 className="font-bold text-lg mb-4 hidden md:block">Recursos</h4>
            <ul className={`space-y-2 ${expandedSections['recursos'] ? 'block' : 'hidden'} md:block`}>
              <li>
                <Link to="/calculator" className="text-neutral-600 hover:text-neutro transition-colors">
                  Calculadora de Impacto
                </Link>
              </li>
              <li>
                <div className="relative">
                  <a 
                    href="#" 
                    onClick={(e) => handleComingSoonClick(e, 'schedule')}
                    className="text-neutral-600 hover:text-neutro transition-colors"
                  >
                    Agendamento
                  </a>
                  {showComingSoon['schedule'] && (
                    <span className="absolute left-0 top-6 text-xs text-neutro font-medium">
                      Em breve
                    </span>
                  )}
                </div>
              </li>
              <li>
                <div className="relative">
                  <a 
                    href="#" 
                    onClick={(e) => handleComingSoonClick(e, 'partners')}
                    className="text-neutral-600 hover:text-neutro transition-colors"
                  >
                    Empresas Parceiras
                  </a>
                  {showComingSoon['partners'] && (
                    <span className="absolute left-0 top-6 text-xs text-neutro font-medium">
                      Em breve
                    </span>
                  )}
                </div>
              </li>
              <li>
                <div className="relative">
                  <a 
                    href="#" 
                    onClick={(e) => handleComingSoonClick(e, 'faq')}
                    className="text-neutral-600 hover:text-neutro transition-colors"
                  >
                    Perguntas Frequentes
                  </a>
                  {showComingSoon['faq'] && (
                    <span className="absolute left-0 top-6 text-xs text-neutro font-medium">
                      Em breve
                    </span>
                  )}
                </div>
              </li>
            </ul>
          </div>

          <div className="md:block">
            <button 
              className="flex items-center justify-between w-full md:hidden"
              onClick={() => toggleSection('legal')}
            >
              <h4 className="font-bold text-lg">Legal</h4>
              {expandedSections['legal'] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <h4 className="font-bold text-lg mb-4 hidden md:block">Legal</h4>
            <div className="space-y-2">
              <div 
                className="flex items-center text-gray-600 hover:text-green-600 cursor-pointer"
                onClick={(e) => handleComingSoonClick(e, 'termos')}
              >
                <FileText className="w-4 h-4 mr-2" />
                <span>Termos de Uso</span>
              </div>
              {showComingSoon['termos'] && (
                <div className="text-green-600 text-sm ml-6">Em breve</div>
              )}
              <div 
                className="flex items-center text-gray-600 hover:text-green-600 cursor-pointer"
                onClick={(e) => handleComingSoonClick(e, 'privacidade')}
              >
                <FileText className="w-4 h-4 mr-2" />
                <span>Política de Privacidade</span>
              </div>
              {showComingSoon['privacidade'] && (
                <div className="text-green-600 text-sm ml-6">Em breve</div>
              )}
              <div 
                className="flex items-center text-gray-600 hover:text-green-600 cursor-pointer"
                onClick={(e) => handleComingSoonClick(e, 'cookies')}
              >
                <FileText className="w-4 h-4 mr-2" />
                <span>Política de Cookies</span>
              </div>
              {showComingSoon['cookies'] && (
                <div className="text-green-600 text-sm ml-6">Em breve</div>
              )}
              <div 
                className="flex items-center text-gray-600 hover:text-green-600 cursor-pointer"
                onClick={(e) => handleComingSoonClick(e, 'contato')}
              >
                <MessageSquareHeart className="w-4 h-4 mr-2" />
                <span>Contato</span>
              </div>
              {showComingSoon['contato'] && (
                <div className="text-green-600 text-sm ml-6">Em breve</div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-600 mb-4 md:mb-0 text-center md:text-left">
              &copy; {new Date().getFullYear()} Neutro. Todos os direitos reservados.
            </p>
            <p className="text-neutral-500 text-sm text-center md:text-right">
              neutro.app.br
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
