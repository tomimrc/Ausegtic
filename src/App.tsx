import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Objetivos from "./pages/Objetivos";
import Integrantes from "./pages/Integrantes";
import Docencia from "./pages/Docencia";
import Proyectos from "./pages/Proyectos";
import ProduccionTransferencia from "./pages/ProduccionTransferencia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/objetivos" element={<Objetivos />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/docencia" element={<Docencia />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/produccion-transferencia" element={<ProduccionTransferencia />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
