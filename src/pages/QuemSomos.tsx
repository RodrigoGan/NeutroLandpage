import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Heart, Target, Eye, Award, Leaf, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';

const QuemSomos: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout hideHeader={true} hideFooter={false}>
      <div className="min-h-screen">
        <div className="container py-8 px-4 md:px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-neutro hover:text-neutro-dark"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </div>

          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-neutro/10 rounded-full">
                <Users className="h-8 w-8 text-neutro" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutro-dark mb-4">
              Quem Somos
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Conheça a equipe por trás do Neutro e nossa história de dedicação à sustentabilidade
            </p>
          </div>

          {/* Nossa História */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-neutro" />
                Nossa História
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 leading-relaxed mb-4">
                O Neutro nasceu da paixão por um futuro mais sustentável. Nossa equipe, composta por especialistas em tecnologia, 
                sustentabilidade e inovação social, uniu forças para criar uma solução que conecta pessoas, empresas e o meio ambiente.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Acreditamos que pequenas ações podem gerar grandes impactos. Por isso, desenvolvemos uma plataforma que torna a 
                reciclagem acessível, recompensadora e parte do dia a dia de todos.
              </p>
            </CardContent>
          </Card>

          {/* Nossa Equipe */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-neutro" />
                Nossa Equipe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-neutro/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-neutro" />
                  </div>
                  <h3 className="font-semibold text-neutro-dark mb-2">Especialistas em Sustentabilidade</h3>
                  <p className="text-neutral-600 text-sm">
                    Profissionais dedicados a entender e resolver os desafios ambientais
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-neutro/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-neutro" />
                  </div>
                  <h3 className="font-semibold text-neutro-dark mb-2">Desenvolvedores de Tecnologia</h3>
                  <p className="text-neutral-600 text-sm">
                    Equipe técnica focada em criar soluções inovadoras e acessíveis
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-neutro/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-neutro" />
                  </div>
                  <h3 className="font-semibold text-neutro-dark mb-2">Especialistas em Comunidade</h3>
                  <p className="text-neutral-600 text-sm">
                    Profissionais que conectam pessoas e criam impactos sociais positivos
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-neutro/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-neutro" />
                  </div>
                  <h3 className="font-semibold text-neutro-dark mb-2">Estrategistas de Negócios</h3>
                  <p className="text-neutral-600 text-sm">
                    Especialistas em criar parcerias e modelos sustentáveis
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nossos Valores */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-neutro" />
                Nossos Valores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-neutro mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutro-dark mb-1">Sustentabilidade</h4>
                    <p className="text-neutral-600 text-sm">
                      Compromisso com o meio ambiente e futuro das próximas gerações
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-neutro mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutro-dark mb-1">Comunidade</h4>
                    <p className="text-neutral-600 text-sm">
                      Valorização das pessoas e conexões que criamos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-neutro mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutro-dark mb-1">Inovação</h4>
                    <p className="text-neutral-600 text-sm">
                      Busca constante por soluções criativas e eficientes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-neutro mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutro-dark mb-1">Transparência</h4>
                    <p className="text-neutral-600 text-sm">
                      Clareza em nossas ações e impacto gerado
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Users className="h-5 w-5 text-neutro" />
                Faça Parte da Nossa História
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 mb-6">
                Junte-se a nós na missão de criar um mundo mais sustentável através da reciclagem!
              </p>
              <Button
                onClick={() => {
                  const formElement = document.querySelector('.lead-capture-form');
                  if (formElement) {
                    formElement.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center'
                    });
                  }
                  navigate('/');
                }}
                className="bg-neutro hover:bg-neutro-dark"
              >
                Quero Participar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default QuemSomos; 