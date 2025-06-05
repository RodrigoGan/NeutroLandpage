import React, { useEffect, useRef, useState } from 'react';
import { Home, UserSearch, Users, Factory, Store } from 'lucide-react';

const userTypes = [
  {
    icon: <Home className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
    title: 'Usuário Comum',
    description: 'Solicite coletas, calcule seu impacto e obtenha benefícios.',
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop&crop=center'
  },
  {
    icon: <UserSearch className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
    title: 'Coletor Individual',
    description: 'Receba agendamentos, registre coletas e aumente sua renda.',
    color: 'bg-neutro',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop&crop=center'
  },
  {
    icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
    title: 'Cooperativas',
    description: 'Gerencie equipes e amplie seu alcance de coletas.',
    color: 'bg-green-600',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&crop=center'
  },
  {
    icon: <Factory className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
    title: 'Empresas Coletoras',
    description: 'Compre materiais diretamente dos coletores.',
    color: 'bg-purple-600',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop&crop=center'
  },
  {
    icon: <Store className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
    title: 'Empresas Parceiras',
    description: 'Demonstre responsabilidade ambiental e ofereça benefícios.',
    color: 'bg-orange-600',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center'
  }
];

const UserTypesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-neutral-50 overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'animate-[fade-in-up_1s_ease-out]' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Para <span className="text-neutro animate-[gradient-x_3s_ease_infinite] bg-gradient-to-r from-neutro to-neutro-dark bg-clip-text text-transparent">Todos</span> no Ciclo
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Cada tipo de usuário tem ferramentas específicas para maximizar seu impacto na reciclagem
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {userTypes.map((type, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-105 transform ${
                isVisible ? `animate-[slide-in-up_0.8s_ease-out_${index * 0.1}s_both]` : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img 
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 p-2 sm:p-3 rounded-xl sm:rounded-2xl ${type.color} transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  {type.icon}
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform transition-all duration-500 group-hover:translate-y-[-4px]">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 transform transition-all duration-300 group-hover:text-yellow-300">{type.title}</h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">{type.description}</p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutro/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
