import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Apple, Download, Star } from 'lucide-react';
import Logo from '@/components/Logo';

const GooglePlayIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

const DownloadSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-neutro via-neutro-dark to-green-700 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 border-2 border-white rounded-full animate-[float_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-32 right-20 w-12 sm:w-16 h-12 sm:h-16 border-2 border-white rounded-full animate-[float_5s_ease-in-out_infinite_0.5s]"></div>
        <div className="absolute bottom-20 left-32 w-8 sm:w-12 h-8 sm:h-12 border-2 border-white rounded-full animate-[float_6s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-32 right-10 w-16 sm:w-24 h-16 sm:h-24 border-2 border-white rounded-full animate-[float_4.5s_ease-in-out_infinite_1.5s]"></div>
      </div>

      {/* Gradient overlay animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[slide-across_8s_ease-in-out_infinite]"></div>

      <div className="container relative z-10 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className={`text-white space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'animate-[slide-in-left_1s_ease-out]' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Pronto para fazer a <span className="text-yellow-300 animate-[glow_2s_ease-in-out_infinite_alternate]">diferença?</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                Junte-se a milhares de pessoas que já estão transformando o mundo através 
                de pequenos gestos. Baixe o Neutro e comece hoje mesmo!
              </p>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6 animate-[fade-in_1s_ease-out_0.5s_both] opacity-0">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400 animate-[star-twinkle_2s_ease-in-out_infinite_${i * 0.2}s]`} />
                ))}
              </div>
              <span className="text-sm sm:text-base text-white/90">4.8 na App Store</span>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 animate-[slide-in-up_1s_ease-out_0.7s_both] opacity-0`}>
              <Button className="w-full sm:w-auto bg-white text-neutro-dark hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold flex items-center justify-center gap-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <GooglePlayIcon />
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wide">Disponível no</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </Button>
              
              <Button className="w-full sm:w-auto bg-white text-neutro-dark hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold flex items-center justify-center gap-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Apple className="h-5 w-5 sm:h-6 sm:w-6" />
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wide">Baixe na</div>
                  <div className="font-bold">App Store</div>
                </div>
              </Button>
            </div>

            <div className={`pt-6 sm:pt-8 space-y-3 sm:space-y-4 animate-[fade-in_1s_ease-out_1s_both] opacity-0`}>
              <div className="flex items-center text-sm sm:text-base text-white/90 transform transition-all duration-300 hover:translate-x-2">
                <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                Mais de 10.000 downloads
              </div>
              <div className="flex items-center text-sm sm:text-base text-white/90 transform transition-all duration-300 hover:translate-x-2">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                Avaliação 4.8/5 nas lojas
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'animate-[slide-in-right_1s_ease-out_0.5s_both]' : 'opacity-0 translate-x-10'}`}>
            <div className="relative z-10 transform transition-all duration-700 hover:scale-105">
              <div className="animate-[float_4s_ease-in-out_infinite]">
                <Logo size="lg" showText={false} className="mx-auto mb-6 sm:mb-8" />
              </div>
              <div className="text-center text-white space-y-3 sm:space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold animate-[glow_3s_ease-in-out_infinite_alternate]">Neutro</h3>
                <p className="text-white/90 text-base sm:text-lg">Pequenos Gestos, Grandes Impactos</p>
              </div>
            </div>
            
            {/* Enhanced decorative circles */}
            <div className="absolute -top-8 -right-8 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full blur-xl animate-[pulse_3s_ease-in-out_infinite]"></div>
            <div className="absolute -bottom-8 -left-8 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full blur-xl animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
