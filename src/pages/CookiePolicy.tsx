import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cookie, Shield, Settings, Eye, ArrowLeft, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';

const CookiePolicy: React.FC = () => {
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
                <Cookie className="h-8 w-8 text-neutro" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutro-dark mb-4">
              Política de Cookies
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-neutro" />
                    O que são Cookies?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, 
                    tablet ou smartphone) quando você visita um site. Eles permitem que o site "lembre" de suas 
                    ações e preferências por um período de tempo.
                  </p>
                  <p>
                    Os cookies nos ajudam a fornecer uma experiência melhor e mais personalizada, além de 
                    nos permitir entender como você usa nosso site para que possamos melhorá-lo continuamente.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cookie className="h-5 w-5 text-neutro" />
                    Tipos de Cookies que Utilizamos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Cookies Essenciais (Necessários):</h4>
                    <p>
                      Estes cookies são essenciais para o funcionamento do site e não podem ser desativados. 
                      Eles não armazenam informações pessoais identificáveis.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Cookies de sessão para manter você logado</li>
                      <li>Cookies de segurança para proteger contra ataques</li>
                      <li>Cookies de funcionalidade básica do site</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Cookies de Performance:</h4>
                    <p>
                      Estes cookies nos ajudam a entender como os visitantes interagem com o site, 
                      coletando e relatando informações anonimamente.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Google Analytics para análise de tráfego</li>
                      <li>Cookies de tempo de carregamento da página</li>
                      <li>Cookies de erros e problemas técnicos</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Cookies de Funcionalidade:</h4>
                    <p>
                      Estes cookies permitem que o site forneça funcionalidades e personalização aprimoradas.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Lembrar suas preferências de idioma</li>
                      <li>Salvar suas configurações de reciclagem</li>
                      <li>Manter suas preferências de notificações</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Cookies de Marketing:</h4>
                    <p>
                      Estes cookies são usados para rastrear visitantes em sites. A intenção é exibir 
                      anúncios relevantes e envolventes para o usuário individual.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Cookies de redes sociais (Facebook, Instagram)</li>
                      <li>Cookies de publicidade do Google</li>
                      <li>Cookies de remarketing</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-neutro" />
                    Como Usamos os Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Para Melhorar a Experiência:</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Lembrar suas preferências e configurações</li>
                      <li>Personalizar o conteúdo baseado em seus interesses</li>
                      <li>Melhorar a velocidade e eficiência do site</li>
                      <li>Fornecer funcionalidades interativas</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Para Análise e Melhorias:</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Entender como você usa nosso site</li>
                      <li>Identificar áreas que precisam de melhoria</li>
                      <li>Medir a eficácia de nossas campanhas</li>
                      <li>Otimizar o desempenho do site</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Para Segurança:</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Proteger contra ataques e fraudes</li>
                      <li>Verificar a autenticidade das sessões</li>
                      <li>Prevenir uso não autorizado</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-neutro" />
                    Cookies de Terceiros
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Alguns cookies em nosso site são definidos por serviços de terceiros que aparecem em nossas páginas:
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Google Analytics:</h4>
                    <p>
                      Usamos o Google Analytics para entender como os visitantes usam nosso site. 
                      O Google Analytics coleta informações anonimamente, incluindo o número de visitantes, 
                      de onde vieram e as páginas que visitaram.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Redes Sociais:</h4>
                    <p>
                      Botões de compartilhamento social podem definir cookies para rastrear sua atividade 
                      de navegação. Isso é usado para personalizar o conteúdo que você vê em redes sociais.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Publicidade:</h4>
                    <p>
                      Podemos usar cookies de publicidade para mostrar anúncios relevantes baseados em 
                      seus interesses e comportamento de navegação.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-neutro" />
                    Como Gerenciar Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Você tem várias opções para gerenciar cookies em nosso site:
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Configurações do Navegador:</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies</li>
                      <li><strong>Firefox:</strong> Opções → Privacidade e Segurança → Cookies</li>
                      <li><strong>Safari:</strong> Preferências → Privacidade → Cookies</li>
                      <li><strong>Edge:</strong> Configurações → Cookies e permissões do site</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Exclusão de Cookies:</h4>
                    <p>
                      Você pode excluir cookies existentes através das configurações do seu navegador. 
                      Note que isso pode afetar a funcionalidade do site.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Modo de Navegação Privada:</h4>
                    <p>
                      Usar o modo de navegação privada/incógnito pode limitar o rastreamento de cookies, 
                      mas pode também limitar algumas funcionalidades do site.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-neutro" />
                    Duração dos Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Cookies de Sessão:</h4>
                    <p>
                      São excluídos automaticamente quando você fecha o navegador. Eles são usados para 
                      manter sua sessão ativa durante a navegação.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutro-dark">Cookies Persistentes:</h4>
                    <p>
                      Permanecem no seu dispositivo por um período específico ou até que você os exclua. 
                      Eles são usados para lembrar suas preferências e configurações.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Preferências:</strong> Até 1 ano</li>
                      <li><strong>Analytics:</strong> Até 2 anos</li>
                      <li><strong>Marketing:</strong> Até 90 dias</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-neutro" />
                    Impacto da Desativação
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Se você desativar cookies, algumas funcionalidades do site podem não funcionar corretamente:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Você precisará fazer login toda vez que visitar o site</li>
                    <li>Suas preferências não serão lembradas</li>
                    <li>Algumas funcionalidades podem não estar disponíveis</li>
                    <li>A experiência pode ser menos personalizada</li>
                    <li>Podemos não conseguir identificar problemas técnicos</li>
                  </ul>
                  <p>
                    <strong>Nota:</strong> Os cookies essenciais para o funcionamento básico do site 
                    não podem ser desativados, pois são necessários para a segurança e funcionalidade.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-neutro" />
                    Atualizações desta Política
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em 
                    nossas práticas ou por outros motivos operacionais, legais ou regulamentares.
                  </p>
                  <p>
                    Quando fizermos alterações significativas, notificaremos você através de:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Uma notificação no site</li>
                    <li>E-mail para usuários cadastrados</li>
                    <li>Atualização da data de "Última atualização"</li>
                  </ul>
                  <p>
                    Recomendamos que você revise esta política regularmente para se manter informado 
                    sobre como usamos cookies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-neutro" />
                    Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700">
                  <p>
                    Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco:
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

export default CookiePolicy; 