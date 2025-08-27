import { Button } from "@/components/ui/button";
import { products, additionalProducts } from "@/data/products";
import { ArrowRight, BarChart3, Settings, Users, Zap, DollarSign, TrendingUp, Mail } from "lucide-react";
import { useState } from "react"
import AuthModal from "@/components/auth/AuthModal"
import { Link, useNavigate } from "react-router-dom";
import { useAutoPopup } from "@/hooks/useAutoPopup"; // Import the hook
import { useAuth } from "@/context/AuthContext";
import { FaLinkedin, FaYoutube } from "react-icons/fa6";
import '@/styles/swiper.css';
import ProductSwiper from "@/components/ProductSwiper";
import Footer from "@/components/Footer";

const productIcons = {
    "payroll-variance": <BarChart3 className="h-6 w-6" />,
    "redwood-intelligence": <Settings className="h-6 w-6" />,
    "people-analytics": <Users className="h-6 w-6" />,
    "lifecycle-intelligence": <Zap className="h-6 w-6" />,
    "one-finance": <DollarSign className="h-6 w-6" />,
    "erp-insights": <TrendingUp className="h-6 w-6" />
};

const HomePage = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authModalTab, setAuthModalTab] = useState<"signin" | "signup">("signin");
    const navigate = useNavigate();
    const { userRole } = useAuth();
    const allProducts = [...products, ...additionalProducts];

    // Auto-popup hook - shows after 5 seconds for non-authenticated users
    const {
        showModal: showAutoPopup,
        closeModal: closeAutoPopup,
        dismissPermanently
    } = useAutoPopup({
        delay: 5000, // 5 seconds
        showOnlyOnce: true
    });

    const openAuthModal = (tab: "signin" | "signup" = "signin") => {
        setAuthModalTab(tab);
        setIsAuthModalOpen(true);
    };

    const closeAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    const handleAuthSuccess = () => {
        closeAuthModal();
        closeAutoPopup(); // Also close auto-popup if it's open
        navigate("/dashboard");
    };
    const handleProductClick = (productId: string) => {
        console.log('Product clicked:', productId); // Handle product click - navigate to details, open modal, etc.
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
            <section className="bg-gradient-to-r from-violet-100 via-violet-300 to-blue-500 py-20 md:py-32">
                <div className="w-full mx-auto flex items-center justify-between gap-6 flex-col md:flex-row px-6">
                    {/* Content - No button */}
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-3xl md:text-5xl font-bold mb-5">
                            Welcome to PCLnXAI Partner Portal
                        </h2>
                        <p className="text-blue-950 mb-4 text-base md:text-lg">
                            Discover powerful Oracle Cloud solutions that transform HR and ERP operations.
                        </p>
                        <p className="text-blue-950 text-base md:text-lg">
                            Join our thriving partner network and unlock exclusive benefits today!
                        </p>
                    </div>
                    <div className="relative flex">
                        <img 
                            src="/assets/payroll-variance.jpg" 
                            alt="Payroll Analytics" 
                            className="w-32 h-32 md:w-34 md:h-34 lg:w-40 lg:h-40 rounded-md shadow-md hover:scale-110 transition-transform duration-300" 
                        />
                        <img 
                            src="/assets/redwood-intelligence.jpg" 
                            alt="Redwood Intelligence" 
                            className="w-32 h-32 md:w-34 md:h-34 lg:w-40 lg:h-40 rounded-md shadow-md hover:scale-110 transition-transform duration-300" 
                        />
                        <img 
                            src="/assets/people-analytics.jpg" 
                            alt="People Analytics" 
                            className="w-32 h-32 md:w-34 md:h-34 lg:w-40 lg:h-40 rounded-md shadow-md hover:scale-110 transition-transform duration-300" 
                        />
                        <img 
                            src="/assets/lifecycle-intelligence.jpg" 
                            alt="Lifecycle Intelligence" 
                            className="w-32 h-32 md:w-34 md:h-34 lg:w-40 lg:h-40 rounded-md shadow-md hover:scale-110 transition-transform duration-300" 
                        />
                    </div>
                </div>
            </section>
            {/* Products Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our Product Suite
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover powerful solutions designed to transform your business operations.
                            Hover over each product to explore features and benefits.
                        </p>
                    </div>

                    <ProductSwiper
                        onProductClick={handleProductClick}
                        showPricing={true}
                        slug="products"
                    />
                </div>
            </section>

            {/* Hero Section */}
            <section className="relative py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Partner with PCLnXAI to transform HR & ERP
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Boost profitability with attractive partner margins.
                        Accelerate client onboarding with ready-to-go solutions.
                        Get marketing resources and technical enablement.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button
                            onClick={() => openAuthModal("signup")}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                        >
                            Become a Partner
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            className="px-8 py-3 text-lg"
                            onClick={() => navigate("/products")}
                        >
                            Explore Products
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Why Partner with Us?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                            <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Revenue & Margin</h3>
                            <p className="text-gray-600">
                                Boost profitability with attractive partner margins and recurring revenue opportunities.
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                            <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Faster Time-to-Value</h3>
                            <p className="text-gray-600">
                                Accelerate client onboarding with ready-to-go solutions and proven methodologies.
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                            <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Co-Marketing & Support</h3>
                            <p className="text-gray-600">
                                Get marketing resources, technical enablement, and dedicated partner support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

            {/* CTA Strip */}
            {/* <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-2xl font-bold mb-6">
                        Ready to Start Your Partnership Journey?
                    </h2>
                    <div className="flex gap-4 justify-center ">
                        <Button
                            onClick={() => openAuthModal("signup")}
                            className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-110 px-8 py-3"
                        >
                            Become a Partner
                        </Button>
                        <Button variant="outline" className="border-white text-blue-600 hover:bg-gray-100 hover:scale-110 px-6 py-3">
                            <Link to="/contact">Contact Partner Team</Link>
                        </Button>
                    </div>
                    <div className="flex gap-6 justify-center mt-8">
                        <a href="http://www.linkedin.com/company/nxaienterprisehcm" className="transform transition-transform duration-200 hover:scale-110">
                            <FaLinkedin size={28} className="transition-opacity duration-200 hover:opacity-80" />
                        </a>
                        <a href="http://www.youtube.com/@pclnXAI" className="transform transition-transform duration-200 hover:scale-110">
                            <FaYoutube size={28} className="transition-opacity duration-200 hover:opacity-80" />
                        </a>
                        <a href="mailto:mailto:%20info@pclnxai.com" className="transform transition-transform duration-200 hover:scale-110">
                            <Mail size={28} className="transition-opacity duration-200 hover:opacity-80" />
                        </a>
                    </div>
                    <div className="mt-8 flex flex-col items-center space-y-4">
                        <div>
                            <strong>Email us at </strong>
                            <a href="mailto:info@pclnxai.com" className="hover:underline" target="_blank" rel="noreferrer noopener">info@pclnxai.com</a>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-sm">
                        <p> PCLnXAI is operated globally by Payroll Cloud Corp (US) and Payroll Cloud Limited (UK).
                            All product offerings, support, and contracts will clearly indicate the responsible legal entity based on your region.
                            © 2023 PCLnXAI. All rights reserved. All trademarks and registered trademarks are the property of their respective owners.
                        </p>
                    </div>
                </div>
            </section> */}
            {/* <a href="https://pclnxai.com/wp-content/uploads/2025/03/Privacy-Policy-for-PCLnXAI.pdf" data-type="link" data-id="https://pclnxai.com/wp-content/uploads/2025/03/Privacy-Policy-for-PCLnXAI.pdf" className="hover:underline">Click here to see our Privacy Policy</a> */}

            {/* Manual Auth Modal */}
            <AuthModal open={isAuthModalOpen} onClose={closeAuthModal} defaultTab={authModalTab} onSuccess={handleAuthSuccess} isAutoPopup={false} />
            {/* Auto-popup Auth Modal - Only shows for non-authenticated users */}
            <AuthModal open={showAutoPopup} onClose={closeAutoPopup} defaultTab="signup" onSuccess={handleAuthSuccess} isAutoPopup={true} onDismissPermanently={dismissPermanently} />
        </div>
    );
};

export default HomePage;
