import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, MapPin, CheckCircle, Users, Leaf, Gift, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';

const Agendamento: React.FC = () => {
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
      id: 'como-agendar',
      question: 'Como faço para agendar uma coleta?',
      answer: 'Após fazer seu cadastro, acesse o aplicativo e clique em "Agendar Coleta". Escolha a data, horário e tipo de material que deseja reciclar. O coletor confirmará e fará a coleta no local e horário combinados.'
    },
    {
      id: 'horarios',
      question: 'Quais são os horários disponíveis?',
      answer: 'Os horários variam conforme a disponibilidade dos coletores da sua região. Geralmente temos opções de manhã, tarde e noite. Você pode escolher o horário que melhor se adapta à sua rotina.'
    },
    {
      id: 'materiais',
      question: 'Preciso separar os materiais?',
      answer: 'Preferencialmente sim! É importante separar os materiais por tipo (papel, plástico, metal, vidro, etc.) para facilitar o processo de reciclagem. Cada material tem seu valor e impacto ambiental calculado. Mas caso não consiga separar, você pode agendar uma coleta com a opção de "Materiais Misturados".'
    },
    {
      id: 'cancelamento',
      question: 'Posso cancelar ou reagendar?',
      answer: 'Sim! Você pode cancelar ou reagendar sua coleta até 24 horas antes do horário agendado. Basta acessar o aplicativo e fazer as alterações necessárias.'
    },
    {
      id: 'problemas',
      question: 'E se o coletor não aparecer?',
      answer: 'Se ele não aparecer, após o período da coleta, a coleta ficará com o status de pendente e você poderá cancelar com o motivo de "Coletor não compareceu", poderá avaliar o coletor e solicitar uma nova coleta com outro coletor se preferir.'
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
                <Calendar className="h-8 w-8 text-neutro" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutro-dark mb-4">
              Agendamento de Coletas
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Agende suas coletas de reciclagem de forma simples e rápida. 
              Escolha o horário que melhor se adapta à sua rotina!
            </p>
          </div>

          {/* Como Funciona */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-neutro" />
                Como Funciona o Agendamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-neutro/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-neutro" />
                  </div>
                  <h3 className="font-semibold text-neutro-dark mb-2">1. Escolha Data e Horário</h3>
                  <p className="text-neutral-600 text-sm">
                    Selecione a data e horário que melhor se adaptam à sua rotina
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-neutro/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-neutro" />
                  </div>
                  <h3 className="font-semibold text-neutro-dark mb-2">2. Confirme o Local</h3>
                  <p className="text-neutral-600 text-sm">
                    Confirme o endereço onde a coleta será realizada
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-neutro/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-neutro" />
                  </div>
                  <h3 className="font-semibold text-neutro-dark mb-2">3. Aguarde a Coleta</h3>
                  <p className="text-neutral-600 text-sm">
                    O coletor confirmará e fará a coleta no horário agendado
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
                Benefícios do Agendamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-neutro mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutro-dark mb-1">Horário Flexível</h4>
                    <p className="text-neutral-600 text-sm">
                      Escolha o horário que melhor se adapta à sua rotina
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-neutro mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutro-dark mb-1">Coleta na Porta</h4>
                    <p className="text-neutral-600 text-sm">
                      Não precisa sair de casa, a coleta é feita no seu endereço
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-neutro mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutro-dark mb-1">Impacto Ambiental</h4>
                    <p className="text-neutral-600 text-sm">
                      Acompanhe seu impacto ambiental em tempo real
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-neutro mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutro-dark mb-1">Coletores Avaliados</h4>
                    <p className="text-neutral-600 text-sm">
                      Sistema de avaliações com até 5 estrelas para garantir qualidade do serviço
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gift className="h-5 w-5 text-neutro mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutro-dark mb-1">Sistema de Pontos</h4>
                    <p className="text-neutral-600 text-sm">
                      Ganhe pontos a cada coleta, eleve seu nível e suba no ranking do bairro
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-neutro" />
                Perguntas Frequentes sobre Agendamento
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
                <Calendar className="h-5 w-5 text-neutro" />
                Pronto para Começar?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 mb-6">
                Faça seu cadastro e comece a agendar suas coletas de reciclagem hoje mesmo!
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
                Quero Me Cadastrar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Agendamento; 