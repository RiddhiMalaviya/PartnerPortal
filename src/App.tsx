import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import ContactPage from "./pages/ContactPage";
import ContactSuccess from "./components/contact/ContactSuccess";
import PartnerDashboard from "./pages/Partner/PartnerDashboard";
import ProductsPage from "./pages/Partner/ProductsPage";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import About from "./pages/About";
import ResourcesPage from "./pages/Partner/ResourcesPage";
import ProductDetail from '@/pages/ProductDetail';

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { userRole } = useAuth();
  return userRole ? <>{children}</> : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/homepage" element={<HomePage />} />

              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <PartnerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/products"
                element={
                  <ProtectedRoute>
                    <ProductsPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/products/:slug" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />

              <Route path="/resources" element={<ResourcesPage />} />

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/contact/success" element={<ContactSuccess />} />
              <Route path="*" element={<NotFound />} />

            </Routes>
          </Router>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
