import { Button } from "@/components/ui/button";
import { useState } from "react";
import VCAuthModal from "../../components/auth/VCAuthModal"; // Changed import
import Footer from "@/components/Footer";

const VCHomePage = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<"signin" | "signup">("signup");

  const openSignUp = () => {
    setAuthTab("signup");
    setAuthOpen(true);
  };

  const openSignIn = () => {
    setAuthTab("signin");
    setAuthOpen(true);
  };

  const closeAuth = () => {
    setAuthOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
            Access Exclusive Investment Opportunities
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Join our venture capital network to discover vetted startups, advanced portfolio analytics, and connect with industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openSignUp} size="lg" className="px-8 py-3">
              Get Started
            </Button>
            <Button onClick={openSignIn} variant="outline" size="lg" className="px-8 py-3">
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Vetted Investment Opportunities</h3>
            <p className="text-gray-600">Access to carefully screened and evaluated investment opportunities</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Advanced Portfolio Analytics</h3>
            <p className="text-gray-600">Comprehensive tracking tools and analytics for your portfolio</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Network & Connect</h3>
            <p className="text-gray-600">Connect with other VCs, founders, and industry professionals</p>
          </div>
        </div>
      </div>

      <Footer />

      {/* VC Auth Modal */}
      <VCAuthModal 
        open={authOpen} 
        onClose={closeAuth} 
        defaultTab={authTab}
        onSuccess={closeAuth}
      />
    </div>
  );
};

export default VCHomePage;
