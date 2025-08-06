import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Shield, Users, Globe, Smartphone, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';

const TermsOfUse: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout hideHeader={true} hideFooter={false}>
      <div className="min-h-screen">
        {/* Conteúdo principal */}
        <div className="container py-8 px-4 md:px-6 max-w-4xl mx-auto">
          {/* Botão voltar no topo */}
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
                <FileText className="h-8 w-8 text-neutro" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutro-dark mb-4">
              Termos de Uso
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-neutro" />
                    Aceitação dos Termos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Ao acessar e usar o aplicativo Neutro, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
                    Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
                  </p>
                  <p>
                    O Neutro é uma plataforma que conecta coletores, cooperativas, empresas e usuários para facilitar 
                    a reciclagem e promover a sustentabilidade ambiental.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-neutro" />
                    Tipos de Usuários e Responsabilidades
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Usuários Comuns:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Devem fornecer informações precisas e atualizadas</li>
                      <li>São responsáveis pela separação adequada dos materiais recicláveis</li>
                      <li>Devem respeitar os horários e condições estabelecidos pelos coletores</li>
                      <li>Não devem solicitar coletas de materiais não recicláveis</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Coletores e Cooperativas:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Devem cumprir os horários agendados</li>
                      <li>São responsáveis pela qualidade do serviço prestado</li>
                      <li>Devem fornecer informações precisas sobre capacidades e áreas de atuação</li>
                      <li>Devem seguir as normas de segurança e higiene</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Empresas Coletoras:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Devem oferecer preços justos e competitivos pelos materiais</li>
                      <li>São responsáveis pela qualidade da pesagem e classificação</li>
                      <li>Devem fornecer comprovantes de pagamento aos fornecedores</li>
                      <li>Devem cumprir as normas ambientais e de segurança</li>
                      <li>São responsáveis pelo transporte e armazenamento adequado dos materiais</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Empresas Parceiras:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Devem cumprir as ofertas e benefícios prometidos</li>
                      <li>São responsáveis pela qualidade dos produtos/serviços oferecidos</li>
                      <li>Devem manter informações atualizadas sobre suas ofertas</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-neutro" />
                    Uso Aceitável
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>Você concorda em usar o Neutro apenas para fins legais e de acordo com estes Termos:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Não usar o serviço para atividades ilegais ou fraudulentas</li>
                    <li>Não tentar acessar sistemas ou dados não autorizados</li>
                    <li>Não interferir no funcionamento da plataforma</li>
                    <li>Não usar informações de outros usuários sem autorização</li>
                    <li>Não promover conteúdo ofensivo ou inadequado</li>
                    <li>Respeitar a privacidade e direitos de outros usuários</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-neutro" />
                    Funcionalidades do Aplicativo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Agendamento de Coletas:</h4>
                    <p>
                      O aplicativo permite agendar coletas de materiais recicláveis. Os usuários são responsáveis 
                      por fornecer informações precisas sobre quantidade e tipo de material.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Calculadora de Impacto:</h4>
                    <p>
                      As estimativas de impacto ambiental são baseadas em dados médios e podem variar. 
                      Não garantimos a precisão absoluta dos cálculos.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Benefícios e Descontos:</h4>
                    <p>
                      Os benefícios oferecidos por empresas parceiras são de responsabilidade exclusiva 
                      dessas empresas. O Neutro não garante a disponibilidade ou qualidade dos benefícios.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-neutro" />
                    Privacidade e Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Suas informações pessoais são tratadas de acordo com nossa Política de Privacidade. 
                    Ao usar o Neutro, você concorda com a coleta e uso de dados conforme descrito.
                  </p>
                  <p>
                    Compartilhamos informações apenas com coletores e empresas parceiras quando necessário 
                    para prestar o serviço, sempre com seu consentimento.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-neutro" />
                    Limitações de Responsabilidade
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    O Neutro é fornecido "como está" e "conforme disponível". Não garantimos que o serviço 
                    será ininterrupto ou livre de erros.
                  </p>
                  <p>
                    Não somos responsáveis por danos diretos, indiretos, incidentais ou consequenciais 
                    decorrentes do uso do aplicativo.
                  </p>
                  <p>
                    A responsabilidade pela qualidade dos serviços prestados pelos coletores e empresas 
                    parceiras é exclusiva desses prestadores.
                  </p>
                  <p>
                    <strong>Negociações entre Usuários:</strong> Todas as negociações realizadas entre usuários 
                    através da plataforma Neutro são de responsabilidade única e exclusiva entre as partes 
                    que estão negociando. O Neutro atua apenas como intermediador e não se responsabiliza 
                    por acordos, valores, prazos ou condições estabelecidas entre os usuários.
                  </p>
                  <p>
                    <strong>Benefícios e Descontos:</strong> Os descontos, benefícios e ofertas concedidos 
                    pelas empresas parceiras são de responsabilidade exclusiva da empresa que está oferecendo. 
                    O Neutro não garante a disponibilidade, validade ou qualidade desses benefícios, 
                    sendo responsabilidade da empresa parceira cumprir as condições prometidas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-neutro" />
                    Modificações dos Termos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Reservamo-nos o direito de modificar estes Termos a qualquer momento. 
                    As alterações entrarão em vigor imediatamente após a publicação.
                  </p>
                  <p>
                    É sua responsabilidade revisar periodicamente os Termos. O uso continuado 
                    do serviço após as modificações constitui aceitação dos novos termos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-neutro" />
                    Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Para dúvidas sobre estes Termos de Uso, entre em contato conosco:
                  </p>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="font-semibold">Neutro App</p>
                    <p>E-mail: neutro@neutro.app.br</p>
                    <p>Website: neutro.app.br</p>
                    <p>Endereço: Rua 24RF, 60 - Residencial Florença - Rio Claro - SP - CEP: 13.506-293</p>
                  </div>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfUse; 