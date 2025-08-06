import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Mail, MapPin, Globe, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    return name.trim() && email.trim() && subject.trim() && message.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      const mailtoUrl = `mailto:neutro@neutro.app.br?subject=${encodeURIComponent(`Contato via Site - ${formData.subject}`)}&body=${encodeURIComponent(`
Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}
Assunto: ${formData.subject}

Mensagem:
${formData.message}
      `)}`;
      
      window.open(mailtoUrl);
      
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Limpar formulário após sucesso
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <Layout hideHeader={true} hideFooter={false}>
      <div className="min-h-screen">
        {/* Conteúdo principal */}
        <div className="container py-8 px-4 md:px-6 max-w-6xl mx-auto">
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
                <Mail className="h-8 w-8 text-neutro" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutro-dark mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Tem alguma dúvida, sugestão ou quer saber mais sobre o Neutro? 
              Estamos aqui para ajudar!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulário de Contato */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-neutro" />
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto *</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dúvida sobre o App">Dúvida sobre o App</SelectItem>
                          <SelectItem value="Parceria">Parceria</SelectItem>
                          <SelectItem value="Sugestão">Sugestão</SelectItem>
                          <SelectItem value="Reportar Problema">Reportar Problema</SelectItem>
                          <SelectItem value="Outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Digite sua mensagem aqui..."
                      rows={5}
                      required
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      Por favor, preencha todos os campos obrigatórios.
                    </div>
                  )}

                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <CheckCircle className="h-4 w-4" />
                      Mensagem enviada com sucesso! Em breve entraremos em contato.
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-neutro hover:bg-neutro-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-neutro" />
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-neutro mt-1" />
                    <div>
                      <p className="font-semibold text-neutro-dark">E-mail</p>
                      <p className="text-neutral-600">neutro@neutro.app.br</p>
                      <p className="text-sm text-neutral-500">Resposta em até 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-neutro mt-1" />
                    <div>
                      <p className="font-semibold text-neutro-dark">Endereço</p>
                      <p className="text-neutral-600">
                        Rua 24RF, 60 - Residencial Florença<br />
                        Rio Claro - SP<br />
                        CEP: 13.506-293
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-neutro mt-1" />
                    <div>
                      <p className="font-semibold text-neutro-dark">Website</p>
                      <p className="text-neutral-600">neutro.app.br</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-neutro" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Segunda a Sexta:</span>
                      <span className="text-neutral-600">8h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sábado:</span>
                      <span className="text-neutral-600">9h às 14h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Domingo:</span>
                      <span className="text-neutral-600">Fechado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-neutro" />
                    Tipos de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-semibold text-green-800">Dúvidas sobre o App</p>
                      <p className="text-sm text-green-700">Como funciona, funcionalidades, cadastro</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-blue-800">Parcerias</p>
                      <p className="text-sm text-blue-700">Empresas, coletores, cooperativas</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <p className="font-semibold text-orange-800">Sugestões</p>
                      <p className="text-sm text-orange-700">Melhorias, novas funcionalidades</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="font-semibold text-red-800">Problemas</p>
                      <p className="text-sm text-red-700">Bugs, erros, dificuldades</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact; 