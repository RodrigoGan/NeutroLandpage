import React from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
  hideHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  hideFooter = false, 
  hideHeader = true
}) => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {!hideHeader && <AppHeader />}
      <main className="flex-1 w-full max-w-[100vw] px-4 sm:px-6 md:px-8 lg:px-12">{children}</main>
      {!hideFooter && <AppFooter />}
    </div>
  );
};

export default Layout;
