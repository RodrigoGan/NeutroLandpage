import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown, Play, MessageCircle } from 'lucide-react';
import Logo from '@/components/Logo';
import LeadCaptureForm from './LeadCaptureForm';

const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.querySelector('.lead-capture-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const scrollToHowItWorks = () => {
    const howItWorksElement = document.querySelector('#como-funciona');
    if (howItWorksElement) {
      howItWorksElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-gradient-to-br from-neutro/10 via-white to-neutral-50 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-[float_6s_ease-in-out_infinite]">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop&crop=center" 
            alt="Planeta sustentável"
            className="w-full h-full object-cover opacity-20 scale-110 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/50"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[100dvh] py-12 md:py-20">
          {/* Text Content with Staggered Animation */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3 animate-[slide-in-left_0.8s_ease-out]">
                <Logo size="md" showText={false} />
                <span className="text-2xl font-bold text-neutro-dark">NEUTRO</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-[slide-in-left_1s_ease-out_0.2s_both]">
                Pequenos Gestos,{' '}
                <span className="text-neutro bg-gradient-to-r from-neutro to-neutro-dark bg-clip-text text-transparent animate-[gradient-x_3s_ease_infinite]">
                  Grandes Impactos
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-[slide-in-left_1.2s_ease-out_0.4s_both] opacity-0">
                Conectamos coletores, cooperativas e empresas para criar um ecossistema 
                sustentável de reciclagem que transforma vidas e protege o planeta.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-[slide-in-left_1.4s_ease-out_0.6s_both] opacity-0">
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-neutro to-neutro-dark"
                onClick={scrollToForm}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Quero Ser Notificado
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-lg group transform transition-all duration-300 hover:scale-105" onClick={scrollToHowItWorks}>
                Saiba Mais
                <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce transition-transform duration-300" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 animate-[slide-in-left_1.6s_ease-out_0.8s_both] opacity-0">
              {[
                { number: "500+", label: "Interessados" },
                { number: "50+", label: "Empresas parceiras" },
                { number: "10k+", label: "Kg reciclados" }
              ].map((stat, index) => (
                <div key={index} className="text-center transform transition-all duration-300 hover:scale-110">
                  <div className="text-2xl sm:text-3xl font-bold text-neutro-dark animate-[count-up_2s_ease-out_1s_both]">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Capture Form with Animation */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-[slide-in-right_1s_ease-out_0.3s_both] opacity-0 mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg group">
              <div className="absolute inset-0 bg-gradient-to-r from-neutro/20 to-neutro-dark/20 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative transform transition-all duration-700 group-hover:scale-105 lead-capture-form">
                <LeadCaptureForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
