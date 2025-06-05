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
import Layout from './components/Layout';
import InstitutionalPage from './components/institutional/InstitutionalPage';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/institucional" element={<InstitutionalPage />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/collector" element={<CollectorRegister />} />
            <Route path="/sobre" element={<NotFound />} />
            <Route path="/missao" element={<NotFound />} />
            <Route path="/visao" element={<NotFound />} />
            <Route path="/valores" element={<NotFound />} />
            <Route path="/termos" element={<NotFound />} />
            <Route path="/privacidade" element={<NotFound />} />
            <Route path="/cookies" element={<NotFound />} />
            <Route path="/contato" element={<NotFound />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </TooltipProvider>
    <Toaster />
    <Sonner />
  </QueryClientProvider>
);

export default App;
