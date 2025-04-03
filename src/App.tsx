
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import CabinetKnobs from "./pages/CabinetKnobs";
import Earrings from "./pages/Earrings";
import FanPulls from "./pages/FanPulls";
import Keychains from "./pages/Keychains";
import Necklaces from "./pages/Necklaces";
import ValveCaps from "./pages/ValveCaps";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cabinet-knobs" element={<CabinetKnobs />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/fan-pulls" element={<FanPulls />} />
          <Route path="/keychains" element={<Keychains />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/valve-caps" element={<ValveCaps />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
