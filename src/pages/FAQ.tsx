import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';

const FAQ: React.FC = () => {
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
      id: 'como-funciona',
      question: 'Como funciona o Neutro?',
      answer: 'O Neutro é uma plataforma que conecta pessoas que querem reciclar com coletores e cooperativas. Você agenda coletas, acompanha seu impacto ambiental e ainda pode ganhar benefícios de empresas parceiras.'
    },
    {
      id: 'cadastro',
      question: 'Como faço meu cadastro?',
      answer: 'O cadastro é simples! Você precisa fornecer nome, e-mail, WhatsApp e endereço. Em seguida, escolhe o tipo de usuário (pessoa física, coletor, cooperativa ou empresa parceira) e pronto!'
    },
    {
      id: 'coletas',
      question: 'Como agendo uma coleta?',
      answer: 'Após o cadastro, você pode agendar coletas através do aplicativo. Escolha a data, horário e tipo de material. O coletor confirmará e fará a coleta no local e horário combinados.'
    },
    {
      id: 'materiais',
      question: 'Quais materiais posso reciclar?',
      answer: 'Aceitamos diversos materiais: papel, papelão, plásticos, metais, vidros, eletrônicos, óleo de cozinha usado, etc. Cada material tem seu valor e impacto ambiental calculado. A lista completa está disponível no aplicativo.'
    },
    {
      id: 'impacto',
      question: 'Como sei meu impacto ambiental?',
      answer: 'O aplicativo calcula automaticamente seu impacto baseado nos materiais reciclados. Você pode ver quantas árvores salvou, CO2 evitado e outros benefícios ambientais em tempo real através do card de Impacto Ambiental no Dashboard do seu perfil.'
    },
    {
      id: 'beneficios',
      question: 'Quais são os benefícios das empresas parceiras?',
      answer: 'Temos parcerias com Restaurantes, Lojas e Educacional. As empresas parceiras oferecem descontos, cupons e vantagens exclusivas relacionados aos seus produtos e serviços para usuários ativos do Neutro. Quanto mais você recicla, mais benefícios você ganha!'
    },
    {
      id: 'seguranca',
      question: 'Meus dados estão seguros?',
      answer: 'Sim! Seguimos rigorosos padrões de segurança e a LGPD. Seus dados pessoais são protegidos e só compartilhamos informações necessárias com coletores e parceiros autorizados.'
    },
    {
      id: 'regioes',
      question: 'O Neutro funciona em todas as regiões?',
      answer: 'Estamos expandindo gradualmente. Atualmente atendemos algumas regiões específicas, mas estamos sempre crescendo. Você pode ajudar a divulgar e fazer indicações pelo próprio aplicativo, ganhando pontos por cada indicação. Assim o app cresce mais rápido e o planeta agradece! Verifique se sua região está disponível no cadastro.'
    },
    {
      id: 'problemas',
      question: 'E se tiver problemas com uma coleta?',
      answer: 'Temos um sistema de suporte completo. Se houver qualquer problema, você pode entrar em contato conosco através do aplicativo ou pelo e-mail neutro@neutro.app.br.'
    },
    {
      id: 'coletor',
      question: 'Como me torno um coletor parceiro?',
      answer: 'É simples! Você só precisa se cadastrar como coletor, escolher a região que irá atender e aguardar as solicitações de coletas daquele bairro que você selecionou. Não há necessidade de aprovação prévia.'
    },
    {
      id: 'empresa',
      question: 'Como minha empresa pode se tornar parceira?',
      answer: 'É simples! Basta se cadastrar como empresa parceira, escolhendo o tipo de empresa (Restaurante, Loja ou Educacional). Depois, monte os cupons de desconto para ganhar visibilidade e mais clientes para seu negócio. Não há necessidade de aprovação prévia.'
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
                <HelpCircle className="h-8 w-8 text-neutro" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutro-dark mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre o Neutro e descubra como fazer parte da revolução da reciclagem!
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between text-lg font-semibold text-neutro-dark hover:text-neutro transition-colors">
                      <span className="flex items-center gap-3">
                        <HelpCircle className="h-5 w-5 text-neutro" />
                        {item.question}
                      </span>
                      {expandedItems[item.id] ? (
                        <ChevronUp className="h-5 w-5 text-neutro" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-neutro" />
                      )}
                    </CardTitle>
                  </CardHeader>
                </button>
                
                {expandedItems[item.id] && (
                  <CardContent className="pt-0">
                    <div className="border-t border-neutral-200 pt-4">
                      <p className="text-neutral-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-neutro" />
                Ainda tem dúvidas?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 mb-4">
                Se sua dúvida não foi respondida aqui, entre em contato conosco. 
                Nossa equipe está sempre pronta para ajudar!
              </p>
              <Button 
                onClick={() => navigate('/contato')}
                className="bg-neutro hover:bg-neutro-dark"
              >
                Entre em Contato
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ; 