import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Instagram, Facebook, Twitter, Linkedin, MessageSquareHeart, Award, Eye, Info, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const AppFooter: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
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
                <Link to="/sobre" className="text-neutral-600 hover:text-neutro transition-colors">
                  Quem Somos
                </Link>
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
                <Link to="/schedule" className="text-neutral-600 hover:text-neutro transition-colors">
                  Agendamento
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-neutral-600 hover:text-neutro transition-colors">
                  Empresas Parceiras
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-600 hover:text-neutro transition-colors">
                  Perguntas Frequentes
                </Link>
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
            <ul className={`space-y-2 ${expandedSections['legal'] ? 'block' : 'hidden'} md:block`}>
              <li className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-neutro" />
                <Link to="/termos" className="text-neutral-600 hover:text-neutro transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-neutral-600 hover:text-neutro transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-neutral-600 hover:text-neutro transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-neutral-600 hover:text-neutro transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
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
