import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { initScrollTracking, initTimeTracking } from "@/lib/analytics";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import CartaoVirtual from "./pages/CartaoVirtual";
import Servicos from "./pages/Servicos";
import Depoimentos from "./pages/Depoimentos";
import Contato from "./pages/Contato";
import Obrigado from "./pages/Obrigado";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Agendar from "./pages/Agendar";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import FisioterapiaGeriatrica from "./pages/servicos/FisioterapiaGeriatrica";
import FisioterapiaNeurologica from "./pages/servicos/FisioterapiaNeurologica";
import ReabilitacaoPosOperatoria from "./pages/servicos/ReabilitacaoPosOperatoria";
import FisioterapiaRespiratoria from "./pages/servicos/FisioterapiaRespiratoria";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";
import ScrollToTop from "./components/ScrollToTop";
import ExitIntentPopup from "./components/cro/ExitIntentPopup";

import SkipLink from "./components/accessibility/SkipLink";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  useEffect(() => {
    // Initialize scroll and time tracking
    const cleanupScroll = initScrollTracking();
    const cleanupTime = initTimeTracking();

    return () => {
      cleanupScroll?.();
      cleanupTime?.();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <SkipLink />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Header />
            <main id="main-content" role="main">
              <Routes>
                <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cartao-virtual" element={<CartaoVirtual />} />
          <Route path="/servicos" element={<Servicos />} />
                <Route path="/servicos/fisioterapia-geriatrica" element={<FisioterapiaGeriatrica />} />
                <Route path="/servicos/fisioterapia-neurologica" element={<FisioterapiaNeurologica />} />
                <Route path="/servicos/reabilitacao-pos-operatoria" element={<ReabilitacaoPosOperatoria />} />
                <Route path="/servicos/fisioterapia-respiratoria" element={<FisioterapiaRespiratoria />} />
                <Route path="/depoimentos" element={<Depoimentos />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/obrigado" element={<Obrigado />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/blog/categoria/:categoria" element={<Blog />} />
                <Route path="/agendar" element={<Agendar />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/auth" element={<Auth />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppFloating />
            <ExitIntentPopup />
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
