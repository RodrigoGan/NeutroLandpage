import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2, Gift, Users, Star, TrendingUp, ChevronDown, ChevronUp, Coffee, ShoppingBag, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';

const EmpresasParceiras: React.FC = () => {
  const navigate = useNavigate();
  const [expandedItems, setExpandedItems] = React.useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const faqData = [
    {
      id: 'como-parceira',
      question: 'Como minha empresa pode se tornar parceira?',
      answer: 'É simples! Basta se cadastrar como empresa parceira, escolhendo o tipo de empresa (Restaurante, Loja ou Educacional). Depois, monte os cupons de desconto para ganhar visibilidade e mais clientes para seu negócio. Não há necessidade de aprovação prévia.'
    },
    {
      id: 'tipos-empresa',
      question: 'Quais tipos de empresa podem ser parceiras?',
      answer: 'Aceitamos Restaurantes, Lojas (varejo, serviços) e Instituições Educacionais. Cada tipo tem benefícios específicos e pode oferecer descontos relacionados aos seus produtos e serviços.'
    },
    {
      id: 'cupons',
      question: 'Como funcionam os cupons de desconto?',
      answer: 'Você cria cupons personalizados no aplicativo com descontos, condições e validade. Os usuários ativos do Neutro podem resgatar esses cupons, gerando mais visibilidade e clientes para seu negócio.'
    },
    {
      id: 'beneficios-empresa',
      question: 'Quais são os benefícios para minha empresa?',
      answer: 'Maior visibilidade, novos clientes engajados com sustentabilidade, diferenciação competitiva, fortalecimento da marca sustentável, acesso a uma comunidade ativa de recicladores e certificados de responsabilidade ambiental.'
    },
    {
      id: 'usuarios-ativos',
      question: 'O que são usuários ativos?',
      answer: 'São todos os usuários do aplicativo: usuários comum, coletores individuais, cooperativas e seus cooperados, empresas coletoras e seus funcionários e as empresas parceiras com seus proprietários e colaboradores. Eles têm acesso aos cupons e benefícios das empresas parceiras.'
    },
    {
      id: 'custo',
      question: 'Há algum custo para ser parceira?',
      answer: 'Não! Ser empresa parceira é totalmente gratuito. Você só precisa se cadastrar e criar seus cupons de desconto. O investimento é apenas nos descontos que você oferece. Caso queira cadastrar funcionários para que eles também tenham acesso aos benefícios dos cupons de outras empresas parceiras, há uma mensalidade para essa funcionalidade.'
    }
  ];

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
                <Building2 className="h-8 w-8 text-neutro" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutro-dark mb-4">
              Empresas Parceiras
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Conecte-se com uma comunidade engajada em sustentabilidade. 
              Ofereça benefícios e ganhe novos clientes!
            </p>
          </div>

          {/* Tipos de Empresas */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-neutro" />
                Tipos de Empresas Parceiras
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-orange-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Coffee className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-neutro-dark mb-2">Restaurantes</h3>
                  <p className="text-neutral-600 text-sm">
                    Ofereça descontos em refeições, bebidas e experiências gastronômicas para usuários ativos
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-neutro-dark mb-2">Lojas</h3>
                  <p className="text-neutral-600 text-sm">
                    Descontos em produtos, serviços e experiências de compra para a comunidade Neutro
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-neutro-dark mb-2">Educacional</h3>
                  <p className="text-neutral-600 text-sm">
                    Benefícios em cursos, workshops e eventos educacionais relacionados à sustentabilidade
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefícios */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-neutro" />
                Benefícios para Empresas Parceiras
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-neutro mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutro-dark mb-1">Novos Clientes</h4>
                    <p className="text-neutral-600 text-sm">
                      Acesso a uma comunidade engajada com sustentabilidade
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-neutro mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutro-dark mb-1">Maior Visibilidade</h4>
                    <p className="text-neutral-600 text-sm">
                      Destaque no aplicativo para milhares de usuários
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-neutro mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutro-dark mb-1">Diferenciação</h4>
                    <p className="text-neutral-600 text-sm">
                      Posicione sua marca como sustentável e responsável com nossos certificados
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gift className="h-5 w-5 text-neutro mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutro-dark mb-1">Cupons Personalizados</h4>
                    <p className="text-neutral-600 text-sm">
                      Crie ofertas exclusivas para usuários ativos
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Como Funciona */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-neutro" />
                Como Funciona a Parceria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-neutro/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-neutro" />
                  </div>
                  <h3 className="font-semibold text-neutro-dark mb-2">1. Cadastro</h3>
                  <p className="text-neutral-600 text-sm">
                    Registre sua empresa e escolha o tipo de parceira
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-neutro/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-8 w-8 text-neutro" />
                  </div>
                  <h3 className="font-semibold text-neutro-dark mb-2">2. Crie Cupons</h3>
                  <p className="text-neutral-600 text-sm">
                    Desenvolva ofertas atrativas para usuários ativos
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-neutro/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-neutro" />
                  </div>
                  <h3 className="font-semibold text-neutro-dark mb-2">3. Ganhe Clientes</h3>
                  <p className="text-neutral-600 text-sm">
                    Receba novos clientes engajados com sustentabilidade
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-neutro" />
                Perguntas Frequentes sobre Parcerias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faqData.map((item) => (
                  <div key={item.id} className="border border-neutral-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full text-left p-4 hover:bg-neutral-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-neutro-dark">
                          {item.question}
                        </span>
                        {expandedItems[item.id] ? (
                          <ChevronUp className="h-5 w-5 text-neutro" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-neutro" />
                        )}
                      </div>
                    </button>
                    
                    {expandedItems[item.id] && (
                      <div className="border-t border-neutral-200 p-4 bg-neutral-50">
                        <p className="text-neutral-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Building2 className="h-5 w-5 text-neutro" />
                Pronto para Ser Parceira?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 mb-6">
                Cadastre sua empresa e comece a oferecer benefícios para a comunidade Neutro!
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
                Quero Ser Parceira
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default EmpresasParceiras; 