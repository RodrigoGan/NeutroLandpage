import React, { useEffect, useRef, useState } from 'react';
import { Rocket } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Facilitamos a Reciclagem",
    description: "Conectamos você com coletores qualificados em sua região através do nosso aplicativo intuitivo.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&crop=center",
    alt: "Mulher feliz usando smartphone para chamar coletor através do app Neutro"
  },
  {
    number: "02", 
    title: "Geramos Impacto Real",
    description: "Cada coleta contribui para um ecossistema sustentável que transforma vidas e protege o meio ambiente.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&crop=center",
    alt: "Agricultura comunitária sustentável com pessoas cultivando plantas"
  },
  {
    number: "03",
    title: "Fortalecemos Comunidades", 
    description: "Criamos oportunidades de renda para coletores e cooperativas, fortalecendo toda a cadeia de reciclagem.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop&crop=center",
    alt: "Comunidade trabalhando junta em atividades sustentáveis"
  }
];

const HowItWorksSection: React.FC = () => {
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
    <section ref={sectionRef} id="como-funciona" className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'animate-[fade-in-up_1s_ease-out]' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center rounded-full bg-neutro/10 p-2 mb-4">
            <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-neutro-dark" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Como Funciona</h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Descubra como a Neutro transforma a reciclagem em um processo simples, eficiente e impactante para todos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md transition-all duration-500 hover:shadow-lg hover:scale-105 transform ${
                isVisible ? `animate-[slide-in-bottom_0.8s_ease-out_${index * 0.2}s_both]` : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative mb-3 sm:mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-neutro/20 to-white rounded-full blur-lg opacity-50"></div>
                <span className="relative z-10 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-neutro text-white text-lg sm:text-xl font-bold shadow-md">
                  {step.number}
                </span>
              </div>
              <img 
                src={step.image} 
                alt={step.alt} 
                className="w-full h-40 sm:h-52 object-cover rounded-xl sm:rounded-2xl mb-3 sm:mb-4 transition-transform duration-500 hover:scale-110" 
              />
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-2 text-center">{step.title}</h3>
              <p className="text-sm sm:text-base text-neutral-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
