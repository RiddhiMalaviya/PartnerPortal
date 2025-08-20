import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import ContactPage from "./pages/ContactPage";
import ContactSuccess from "./components/contact/ContactSuccess";
import PartnerDashboard from "./pages/Partner/PartnerDashboard";
import ProductsPage from "./pages/Partner/ProductsPage";
import EnablementPage from "./pages/Partner/EnablementPage";
import TrainingPage from "./pages/Partner/TrainingPage";
import UseCasesPage from "./pages/Partner/UseCasesPage";
import ResourcesPage from "./pages/Partner/ResourcesPage";
import VCDashboard from "./pages/VC/VCDashboard";
import VCHomePage from "./pages/VC/VCHomePage";
import VCProductsPage from "./pages/VC/VCProductsPage";
import VCProductDetailPage from "./pages/VC/VCProductDetailPage";


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
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/contact/success" element={<ContactSuccess />} />
              {/* <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} /> */}
              <Route path="/vc-homepage" element={<VCHomePage />} />
              <Route
                path="/vc-dashboard"
                element={
                  <ProtectedRoute>
                    <VCDashboard />
                  </ProtectedRoute>
                }
              />
              {/* <Route path="/vc-products" element={
                <ProtectedRoute>
                  <VCProductsPage />
                </ProtectedRoute>
              } />
              <Route path="/vc-product/:id" element={
                <ProtectedRoute>
                  <VCProductDetailPage />
                </ProtectedRoute>
              } /> */}
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
              <Route path="/about" element={<ProtectedRoute><div>About Page</div></ProtectedRoute>} />
              <Route path="/resources" element={<ProtectedRoute><ResourcesPage /></ProtectedRoute>} />
              <Route path="/contact" element={<ProtectedRoute><div>Contact Page</div></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
              {/* <Route
                path="/enablement"
                element={
                  <ProtectedRoute>
                    <EnablementPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/training"
                element={
                  <ProtectedRoute>
                    <TrainingPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/usecases"
                element={
                  <ProtectedRoute>
                    <UseCasesPage />
                  </ProtectedRoute>
                }
              /> */}
            </Routes>
          </Router>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};
// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Header /> 
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <ProtectedRoute>
//                 <HomePage />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/about" element={<ProtectedRoute><div>About Page</div></ProtectedRoute>} />
//           <Route path="/resources" element={<ProtectedRoute><div>Resources Page</div></ProtectedRoute>} />
//           <Route path="/contact" element={<ProtectedRoute><div>Contact Page</div></ProtectedRoute>} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/product/:slug" element={<ProductPage />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

export default App;
