import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Calculator from "./pages/Calculator";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import CollectorRegister from "./pages/register/CollectorRegister";
import Layout from './components/Layout'
import InstitutionalPage from './components/institutional/InstitutionalPage'
import TermsOfUse from './pages/TermsOfUse'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Agendamento from './pages/Agendamento'
import EmpresasParceiras from './pages/EmpresasParceiras';
import QuemSomos from './pages/QuemSomos';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/collector" element={<CollectorRegister />} />
            <Route path="/institucional" element={<InstitutionalPage />} />
            <Route path="/termos" element={<TermsOfUse />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/empresas-parceiras" element={<EmpresasParceiras />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
