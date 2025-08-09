import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Crown, Gift, Bell, CheckCircle, Sparkles, AlertCircle, Database, Share } from 'lucide-react';
import { insertLandingLead } from '@/lib/supabase';

const userTypes = [
  {
    value: 'usuario-comum',
    label: 'Usuário Comum',
    description: 'Quero agendar coletas e obter benefícios'
  },
  {
    value: 'coletor-individual',
    label: 'Coletor Individual',
    description: 'Quero receber agendamentos e aumentar minha renda'
  },
  {
    value: 'cooperativa',
    label: 'Cooperativa',
    description: 'Quero gerenciar equipes e ampliar coletas'
  },
  {
    value: 'empresa-coletora',
    label: 'Empresa Coletora',
    description: 'Quero comprar materiais dos coletores'
  },
  {
    value: 'empresa-parceira',
    label: 'Empresa Parceira',
    description: 'Quero oferecer benefícios sustentáveis'
  }
];

const LeadCaptureForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    userType: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Função para compartilhar no WhatsApp
  const shareOnWhatsApp = () => {
    const currentUrl = window.location.origin;
    const message = `🎉 Opa! Acabei de garantir meu lugar VIP no NEUTRO! 

🌱 É o novo app que vai revolucionar a reciclagem no Brasil! Conecta coletores, cooperativas e empresas numa rede sustentável incrível.

👑 Como usuário VIP, vou ter acesso antecipado + benefícios exclusivos!

Quer entrar na lista VIP também? 
👉 ${currentUrl}

Vamos juntos transformar pequenos gestos em grandes impactos! 🌍♻️`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp é obrigatório';
    } else {
      // Remove formatação para validar apenas números
      const numbers = formData.whatsapp.replace(/\D/g, '');
      if (numbers.length < 10 || numbers.length > 11) {
        newErrors.whatsapp = 'WhatsApp deve ter 10 ou 11 dígitos';
      }
    }

    if (!formData.userType) {
      newErrors.userType = 'Selecione seu perfil';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função para formatar telefone brasileiro
  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Limita a 11 dígitos (DDD + 9 dígitos)
    const limited = numbers.substring(0, 11);
    
    // Aplica a máscara
    if (limited.length <= 2) {
      return limited;
    } else if (limited.length <= 7) {
      return `(${limited.substring(0, 2)}) ${limited.substring(2)}`;
    } else if (limited.length <= 11) {
      return `(${limited.substring(0, 2)}) ${limited.substring(2, 7)}-${limited.substring(7)}`;
    }
    
    return limited;
  };

  const handleInputChange = (field: string, value: string) => {
    let processedValue = value;
    
    // Aplica máscara no campo WhatsApp
    if (field === 'whatsapp') {
      processedValue = formatPhoneNumber(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: processedValue
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const saveLead = async (data: typeof formData) => {
    try {
      const result = await insertLandingLead({
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        user_type: data.userType
      });

      if (!result.success) {
        throw new Error('Erro ao salvar lead no banco de dados');
      }

      return result;
    } catch (error) {
      console.error('Erro ao salvar lead:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Salvar lead no banco de dados
      await saveLead(formData);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Não reseta mais o formulário automaticamente
      // O usuário precisará recarregar a página para usar novamente
    } catch (error) {
      setIsSubmitting(false);
      console.error('Erro ao enviar formulário:', error);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-green-50 to-neutro/10 border-green-200 animate-[fade-in-up_0.6s_ease-out]">
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-green-100 rounded-full animate-[scale-in_0.5s_ease-out_0.1s_both]">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2 animate-[slide-in-up_0.6s_ease-out_0.2s_both] opacity-0">
            Parabéns! Você está na lista VIP! 🎉
          </h3>
          <p className="text-green-700 mb-4 animate-[slide-in-up_0.6s_ease-out_0.3s_both] opacity-0">
            Você será um dos primeiros a ter acesso ao app Neutro com benefícios exclusivos!
          </p>
          <div className="flex flex-col items-center justify-center space-y-2 text-sm text-green-600 animate-[slide-in-up_0.6s_ease-out_0.4s_both] opacity-0">
            <div className="flex items-center space-x-2">
              <Database className="h-4 w-4" />
              <span>Dados salvos com segurança!</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <span>Receberá novidades em primeira mão!</span>
            </div>
            <div className="flex items-center space-x-2 mt-3 p-2 bg-green-100 rounded-lg">
              <Crown className="h-4 w-4 text-neutro" />
              <span className="font-medium">Status VIP Ativado!</span>
            </div>
          </div>
          
          {/* Botão de Compartilhamento */}
          <div className="mt-6 animate-[slide-in-up_0.6s_ease-out_0.5s_both] opacity-0">
            <Button 
              onClick={shareOnWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              <Share className="mr-2 h-5 w-5" />
              Convide seus amigos! 📲
            </Button>
            <p className="text-xs text-green-600 mt-2 opacity-75">
              Compartilhe e ajude mais pessoas a entrarem na lista VIP!
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm border-neutro/20 shadow-xl">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-3">
          <div className="p-3 bg-gradient-to-br from-neutro to-neutro-dark rounded-full">
            <Crown className="h-6 w-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-neutro-dark">
          Seja um dos Primeiros! 👑
        </CardTitle>
        <CardDescription className="text-sm text-neutral-600">
          Junte-se à lista VIP e garanta benefícios exclusivos quando o app lançar
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Digite seu nome completo"
              className={errors.name ? 'border-red-500' : ''}
              disabled={isSubmitting}
            />
            {errors.name && (
              <div className="flex items-center space-x-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.name}</span>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="seu@email.com"
              className={errors.email ? 'border-red-500' : ''}
              disabled={isSubmitting}
            />
            {errors.email && (
              <div className="flex items-center space-x-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.email}</span>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              value={formData.whatsapp}
              onChange={(e) => handleInputChange('whatsapp', e.target.value)}
              placeholder="(00) 00000-0000"
              className={errors.whatsapp ? 'border-red-500' : ''}
              disabled={isSubmitting}
            />
            {errors.whatsapp && (
              <div className="flex items-center space-x-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.whatsapp}</span>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="userType">Como você pretende usar o Neutro?</Label>
            <Select
              value={formData.userType}
              onValueChange={(value) => handleInputChange('userType', value)}
              disabled={isSubmitting}
            >
              <SelectTrigger className={errors.userType ? 'border-red-500' : ''}>
                <SelectValue placeholder="Selecione seu perfil" />
              </SelectTrigger>
              <SelectContent>
                {userTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex flex-col">
                      <span className="font-medium">{type.label}</span>
                      <span className="text-xs text-neutral-500">{type.description}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.userType && (
              <div className="flex items-center space-x-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.userType}</span>
              </div>
            )}
          </div>
          
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-neutro to-neutro-dark hover:from-neutro-dark hover:to-neutro text-white font-semibold py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Cadastrando...
              </>
            ) : (
              <>
                <Crown className="mr-2 h-4 w-4" />
                Garantir Meu Lugar VIP
              </>
            )}
          </Button>
        </form>
        
        <div className="pt-4 space-y-3">
          <div className="flex items-center space-x-2 text-sm text-neutral-600">
            <Gift className="h-4 w-4 text-neutro" />
            <span>Benefícios exclusivos para early adopters</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-neutral-600">
            <Bell className="h-4 w-4 text-neutro" />
            <span>Novidades em primeira mão</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-neutral-600">
            <Crown className="h-4 w-4 text-neutro" />
            <span>Acesso prioritário ao lançamento</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadCaptureForm; 