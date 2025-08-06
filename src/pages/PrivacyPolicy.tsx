import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Eye, Database, Users, Lock, ArrowLeft, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';

const PrivacyPolicy: React.FC = () => {
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
                <Shield className="h-8 w-8 text-neutro" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutro-dark mb-4">
              Política de Privacidade
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
                    Introdução
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    A Neutro App respeita sua privacidade e está comprometida em proteger seus dados pessoais. 
                    Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações.
                  </p>
                  <p>
                    Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) 
                    e outras legislações aplicáveis no Brasil.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-neutro" />
                    Dados que Coletamos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Dados Pessoais:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Nome completo</li>
                      <li>Endereço de e-mail</li>
                      <li>Número de telefone/WhatsApp</li>
                      <li>Endereço residencial</li>
                      <li>Data de nascimento (opcional)</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Dados de Uso:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Histórico de coletas agendadas</li>
                      <li>Preferências de reciclagem</li>
                      <li>Interações com coletores e empresas</li>
                      <li>Dados de localização (quando necessário)</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Dados Técnicos:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Endereço IP</li>
                      <li>Informações do dispositivo</li>
                      <li>Dados de navegação</li>
                      <li>Cookies e tecnologias similares</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-neutro" />
                    Como Usamos Seus Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Principais Finalidades:</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Fornecer e melhorar nossos serviços de reciclagem</li>
                      <li>Conectar usuários com coletores e empresas parceiras</li>
                      <li>Processar agendamentos de coletas</li>
                      <li>Calcular e mostrar impactos ambientais</li>
                      <li>Enviar comunicações sobre o serviço</li>
                      <li>Oferecer benefícios e descontos de empresas parceiras</li>
                      <li>Garantir a segurança e integridade da plataforma</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Base Legal:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Execução de contrato ou procedimentos preliminares</li>
                      <li>Legítimo interesse da Neutro App</li>
                      <li>Consentimento do usuário</li>
                      <li>Cumprimento de obrigação legal</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-neutro" />
                    Compartilhamento de Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Compartilhamos seus dados apenas quando necessário e sempre com medidas de segurança adequadas:
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Com Coletores e Cooperativas:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Nome e contato para agendamento de coletas</li>
                      <li>Endereço para coleta</li>
                      <li>Informações sobre materiais a serem coletados</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Com Empresas Parceiras:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Dados necessários para oferecer benefícios</li>
                      <li>Informações de contato para comunicações</li>
                      <li>Sempre com seu consentimento prévio</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Com Prestadores de Serviços:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Empresas de hospedagem e infraestrutura</li>
                      <li>Serviços de análise e segurança</li>
                      <li>Prestadores de serviços de pagamento</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-neutro" />
                    Segurança dos Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Implementamos medidas técnicas e organizacionais para proteger seus dados:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Criptografia de dados em trânsito e em repouso</li>
                    <li>Controle de acesso rigoroso</li>
                    <li>Monitoramento contínuo de segurança</li>
                    <li>Backup regular dos dados</li>
                    <li>Treinamento da equipe em proteção de dados</li>
                    <li>Auditorias regulares de segurança</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-neutro" />
                    Seus Direitos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Conforme a LGPD, você tem os seguintes direitos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Confirmação:</strong> Saber se processamos seus dados</li>
                    <li><strong>Acesso:</strong> Obter cópia dos dados que temos sobre você</li>
                    <li><strong>Correção:</strong> Corrigir dados incompletos ou incorretos</li>
                    <li><strong>Anonimização:</strong> Transformar dados em anônimos</li>
                    <li><strong>Portabilidade:</strong> Receber dados em formato estruturado</li>
                    <li><strong>Eliminação:</strong> Solicitar exclusão de dados</li>
                    <li><strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
                    <li><strong>Oposição:</strong> Opor-se ao tratamento de dados</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-neutro" />
                    Retenção de Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Mantemos seus dados apenas pelo tempo necessário:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Dados de conta:</strong> Enquanto sua conta estiver ativa</li>
                    <li><strong>Dados de transações:</strong> 5 anos para fins fiscais</li>
                    <li><strong>Logs de segurança:</strong> 2 anos para auditoria</li>
                    <li><strong>Dados de marketing:</strong> Até revogação do consentimento</li>
                    <li><strong>Dados anonimizados:</strong> Indefinidamente para estatísticas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-neutro" />
                    Cookies e Tecnologias Similares
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Utilizamos cookies e tecnologias similares para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Manter sua sessão ativa</li>
                    <li>Lembrar suas preferências</li>
                    <li>Analisar o uso da plataforma</li>
                    <li>Melhorar a experiência do usuário</li>
                    <li>Garantir a segurança da aplicação</li>
                  </ul>
                  <p>
                    Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-neutro" />
                    Menores de Idade
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Nossos serviços não são destinados a menores de 13 anos. Não coletamos intencionalmente 
                    dados pessoais de crianças menores de 13 anos.
                  </p>
                  <p>
                    Se você é pai/mãe ou responsável e descobriu que seu filho nos forneceu dados pessoais, 
                    entre em contato conosco imediatamente.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-neutro" />
                    Alterações na Política
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
                    mudanças significativas através de:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Notificação no aplicativo</li>
                    <li>E-mail para usuários cadastrados</li>
                    <li>Atualização da data de "Última atualização"</li>
                  </ul>
                  <p>
                    O uso continuado do serviço após as alterações constitui aceitação da nova política.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-neutro" />
                    Contato e Dúvidas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade:
                  </p>
                  <div className="bg-neutral-50 p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-neutro" />
                      <span className="font-semibold">E-mail:</span> neutro@neutro.app.br
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-neutro" />
                      <span className="font-semibold">Endereço:</span> Rua 24RF, 60 - Residencial Florença - Rio Claro - SP - CEP: 13.506-293
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-neutro" />
                      <span className="font-semibold">Website:</span> neutro.app.br
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy; 