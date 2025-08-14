import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

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
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/about" element={<ProtectedRoute><div>About Page</div></ProtectedRoute>} />
              <Route path="/resources" element={<ProtectedRoute><div>Resources Page</div></ProtectedRoute>} />
              <Route path="/contact" element={<ProtectedRoute><div>Contact Page</div></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
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
