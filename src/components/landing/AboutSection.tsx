import React from 'react';
import { Leaf } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-neutro/20 text-neutro-dark text-sm font-medium mb-4">
            <Leaf className="h-4 w-4 mr-2" />
            <span>Sobre o Neutro</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Transformando a reciclagem em impacto social
          </h2>
        </div>

        <div className="text-center space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            O aplicativo <strong>Neutro</strong> surgiu da necessidade de conectar todos os 
            envolvidos no processo de reciclagem, criando um sistema que beneficie coletores, 
            cooperativas, empresas e o meio ambiente.
          </p>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            Nossa plataforma incentiva coletores de materiais recicláveis, proporcionando-lhes 
            melhores condições de trabalho e maior valorização. Ao mesmo tempo, facilita para 
            residentes, condomínios e empresas o descarte correto dos resíduos.
          </p>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            Com o Neutro, transformamos pequenos gestos diários em grandes impactos ambientais 
            e sociais, criando um ciclo virtuoso de sustentabilidade que beneficia toda a 
            sociedade e o planeta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
