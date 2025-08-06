import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import UserTypesSection from '@/components/landing/UserTypesSection';
import DownloadSection from '@/components/landing/DownloadSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroSection />
      <HowItWorksSection />
      <UserTypesSection />
      <DownloadSection />
    </Layout>
  );
};

export default Index;
