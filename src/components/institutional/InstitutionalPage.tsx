import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Leaf, Eye, Users } from 'lucide-react';

const sections = [
  { id: 'missao', label: 'Missão' },
  { id: 'visao', label: 'Visão' },
  { id: 'valores', label: 'Valores' },
];

const InstitutionalPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('missao');

  // Scroll suave ao clicar no menu
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      missao: missionRef,
      visao: visionRef,
      valores: valuesRef,
    };
    refs[id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Atualiza o hash na URL sem recarregar
    window.history.replaceState(null, '', `#${id}`);
  };

  // Detecta seção ativa ao rolar
  useEffect(() => {
    const handleScroll = () => {
      const offsets = [
        { id: 'missao', ref: missionRef },
        { id: 'visao', ref: visionRef },
        { id: 'valores', ref: valuesRef },
      ];
      const scrollY = window.scrollY + 120; // compensação do menu fixo
      let current = 'missao';
      for (const section of offsets) {
        if (section.ref.current) {
          const top = section.ref.current.offsetTop;
          if (scrollY >= top) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll suave ao acessar via hash na URL
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    const refs = {
      missao: missionRef,
      visao: visionRef,
      valores: valuesRef
    };
    if (hash && refs[hash as keyof typeof refs]) {
      setTimeout(() => {
        refs[hash as keyof typeof refs].current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        setActiveSection(hash);
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header da página */}
      <div
        className="bg-neutro text-white py-16 sm:py-20 cursor-pointer transition hover:brightness-95"
        onClick={() => navigate('/')}
        title="Voltar para a página inicial"
      >
        <div className="container mx-auto px-4 flex flex-col items-center">
          <img 
            src="/Logotipo%20Neutro%20s%C3%B3%20parte%20Branca.png" 
            alt="Logotipo Neutro" 
            className="h-16 w-auto mb-4 drop-shadow-lg"
            style={{ maxWidth: '120px' }}
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            Institucional
          </h1>
          <p className="text-center mt-4 text-lg sm:text-xl text-white/90">
            Conheça mais sobre o Neutro e nossos princípios
          </p>
        </div>
      </div>

      {/* Menu de navegação */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8 py-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={e => handleNavClick(e, section.id)}
                className={`text-neutro hover:text-neutro-dark font-medium transition-colors px-2 py-1 rounded-md ${activeSection === section.id ? 'bg-neutro/10 font-bold shadow-sm' : ''}`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Seção Missão */}
        <section 
          ref={missionRef}
          id="missao" 
          className="mb-16 sm:mb-24 transition-opacity duration-500"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutro mb-6 flex items-center gap-3">
              <Leaf className="h-8 w-8 text-green-600 bg-green-100 rounded-full p-1 shadow-sm" />
              Missão
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 shadow-sm">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Facilitar e incentivar a reciclagem e a economia circular, conectando coletores, 
                empresas coletoras como ferros-velhos e estabelecimentos parceiros para promover 
                um impacto positivo no meio ambiente e na sociedade.
              </p>
            </div>
          </div>
        </section>

        {/* Seção Visão */}
        <section 
          ref={visionRef}
          id="visao" 
          className="mb-16 sm:mb-24 transition-opacity duration-500"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutro mb-6 flex items-center gap-3">
              <Eye className="h-8 w-8 text-blue-600 bg-blue-100 rounded-full p-1 shadow-sm" />
              Visão
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 shadow-sm">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Ser a maior plataforma digital de sustentabilidade do Brasil, impulsionando a reciclagem e a inclusão social dos coletores, tornando a economia circular acessível e transparente para todos.
              </p>
            </div>
          </div>
        </section>

        {/* Seção Valores */}
        <section 
          ref={valuesRef}
          id="valores" 
          className="mb-16 sm:mb-24 transition-opacity duration-500"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutro mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-yellow-600 bg-yellow-100 rounded-full p-1 shadow-sm" />
              Valores
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 shadow-sm">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Sustentabilidade – Priorizamos práticas que reduzem o impacto ambiental e promovem a economia circular.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InstitutionalPage; 