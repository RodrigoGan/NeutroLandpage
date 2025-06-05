import React from 'react';
import { Award, Recycle, Leaf } from 'lucide-react';

const ImpactSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-neutro/20 text-neutro-dark text-sm font-medium mb-4">
            <Recycle className="h-4 w-4 mr-2" />
            <span>Nosso Impacto</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Pequenos gestos que fazem a diferença
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3 sm:mt-4 max-w-3xl mx-auto">
            Cada material reciclado através do Neutro contribui para um planeta mais sustentável 
            e para a melhoria da vida dos coletores.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-neutral-200">
            <div className="bg-neutro/10 p-3 sm:p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-neutro-dark" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Valorização dos Coletores</h3>
            <p className="text-sm sm:text-base text-neutral-600">
              O Neutro proporciona melhores condições de trabalho, maior visibilidade e renda mais justa para os 
              coletores de materiais recicláveis, valorizando seu papel fundamental na cadeia da reciclagem.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-neutral-200">
            <div className="bg-neutro/10 p-3 sm:p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
              <Recycle className="h-6 w-6 sm:h-8 sm:w-8 text-neutro-dark" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ciclo Sustentável</h3>
            <p className="text-sm sm:text-base text-neutral-600">
              Criamos um ecossistema onde todos os envolvidos no processo de reciclagem se beneficiam: coletores 
              recebem mais materiais, empresas têm acesso a insumos reciclados e a população descarta corretamente.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-neutral-200 sm:col-span-2 lg:col-span-1">
            <div className="bg-neutro/10 p-3 sm:p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
              <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-neutro-dark" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Impacto Ambiental</h3>
            <p className="text-sm sm:text-base text-neutral-600">
              Nosso aplicativo ajuda a reduzir a quantidade de resíduos enviados para aterros, diminuir as 
              emissões de CO₂ e preservar recursos naturais através da economia circular.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
