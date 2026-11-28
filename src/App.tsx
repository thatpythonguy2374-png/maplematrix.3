import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
// Supabase authentication is currently disabled. Add your new backend provider here later.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
// import Blog from "./pages/blog";
// import BlogPost from "./pages/blog/[slug]";
import Contact from "./pages/contact";
// import BlogDashboard from "./pages/dashboard/blog";
// import BlogEditor from "./pages/dashboard/blog/editor";
// import ProfilePage from "./pages/dashboard/profile";

import Home from "./pages/home";

import PrivacyPolicyPage from "./pages/legal/privacy-&-policy";
import TermsAndConditionPage from "./pages/legal/terms-&-condition";

import NotFound from "./pages/not-found";

import ECommerce from "./pages/services/e-commerce";
import SEO from "./pages/services/seo";
import MobileApp from "./pages/services/mobile-app-development";
import WebApplications from "./pages/services/web-applications";
import WebsiteDevelopment from "./pages/services/website-development";
import WebsiteMaintain from "./pages/services/website-maintain";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/legal/terms-&-condition"
              element={<TermsAndConditionPage />}
            />
            <Route
              path="/legal/privacy-policy"
              element={<PrivacyPolicyPage />}
            />

            <Route path="/services/e-commerce" element={<ECommerce />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route
              path="/services/mobile-app-development"
              element={<MobileApp />}
            />
            <Route
              path="/services/web-applications"
              element={<WebApplications />}
            />
            <Route
              path="/services/website-development"
              element={<WebsiteDevelopment />}
            />
            <Route
              path="/services/website-maintain"
              element={<WebsiteMaintain />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
