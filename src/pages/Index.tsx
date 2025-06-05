import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import UserTypesSection from '@/components/landing/UserTypesSection';
import DownloadSection from '@/components/landing/DownloadSection';

const Index = () => {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <UserTypesSection />
      <DownloadSection />
    </>
  );
};

export default Index;
