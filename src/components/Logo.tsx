
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showSlogan?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showText = true, 
  size = 'md',
  showSlogan = false
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  const sloganSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center">
        <div className={`relative ${sizes[size]}`}>
          <img 
            src="/lovable-uploads/60ed94da-5552-4dbd-be3d-29b4685341e1.png" 
            alt="Logo Neutro" 
            className="w-full h-full object-contain"
          />
        </div>
        {showText && (
          <div className={`ml-2 font-philosopher font-bold ${textSizes[size]} text-neutro-dark`}>
            NEUTRO
          </div>
        )}
      </div>
      {showSlogan && (
        <div className={`mt-1 text-center font-philosopher ${sloganSizes[size]} text-neutral-600`}>
          Pequenos Gestos, Grandes Impactos
        </div>
      )}
    </div>
  );
};

export default Logo;
