import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useYandexMetrika } from "./hooks/useYandexMetrika";
import Index from "./pages/Index";
import Apartments from "./pages/Apartments";
import ApartmentDetail from "./pages/ApartmentDetail";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Owners from "./pages/Owners";
import Offers from "./pages/Offers";
import NotFound from "./pages/NotFound";

const AppContent = () => {
  useYandexMetrika();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/apartments" element={<Apartments />} />
      <Route path="/apartment/:id" element={<ApartmentDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/owners" element={<Owners />} />
      <Route path="/offers" element={<Offers />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
