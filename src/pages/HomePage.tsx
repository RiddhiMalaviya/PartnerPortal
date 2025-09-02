import { Button } from "@/components/ui/button";
import { products, additionalProducts } from "@/data/products";
import { ArrowRight, BarChart3, Settings, Users, Zap, DollarSign, TrendingUp, Mail, CheckCircle } from "lucide-react";
import { useState } from "react"
import AuthModal from "@/components/auth/AuthModal"
import { Link, useNavigate } from "react-router-dom";
import { useAutoPopup } from "@/hooks/useAutoPopup";
import { useAuth } from "@/context/AuthContext";
import { FaLinkedin, FaYoutube } from "react-icons/fa6";
import ProductSwiper from '@/components/ProductSwiper';
import '@/styles/swiper.css';
import { partnershipData } from "@/data/partnershipData";
import Footer from "@/components/Footer";

const productIcons = {
    "payroll-variance": <BarChart3 className="h-6 w-6" />,
    "redwood-intelligence": <Settings className="h-6 w-6" />,
    "people-analytics": <Users className="h-6 w-6" />,
    "lifecycle-intelligence": <Zap className="h-6 w-6" />,
    "one-finance": <DollarSign className="h-6 w-6" />,
    "erp-insights": <TrendingUp className="h-6 w-6" />
};

const supportData = [
    {
        title: "Dedicated Team",
        description: "Technical onboarding lead and Oracle HCM integration specialist dedicated to your success."
    },
    {
        title: "Flexible Integration",
        description: "Multiple integration options to fit your technology stack and business model perfectly."
    },
    {
        title: "Go-to-Market Support",
        description: "Co-sell campaigns, joint webinars, and customer case studies to accelerate growth."
    },
    {
        title: "Sandbox Access",
        description: "Full feature preview environment for proof of concept and client demonstrations."
    }
];

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
        delay: 5000,
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
        // closeAuthModal();
        closeAutoPopup();
        navigate("/dashboard");
    };

    const handleProductClick = (productId: string) => {
        console.log('Product clicked:', productId); // Handle product click - navigate to details, open modal, etc.
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
            {/* Banner Section */}
            <section className="bg-gradient-to-r from-[#0e171e] to-[#009883] py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 sm:space-y-8">
                        <h2 className="text-white font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-[90%] mx-auto">
                            Welcome to PCLnXAI Partner Portal
                        </h2>

                        <h2 className="text-white font-semibold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight max-w-[90%] mx-auto">
                            Elevate Your Business with Patent Pending Payroll RCA
                        </h2>

                        <p className="text-white/90 text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[65%] mx-auto">
                            Empower Your Success with Breakthrough Payroll Root Cause Analytics. Create powerful partnerships that drive market leadership, innovation, and outstanding client outcomes.
                        </p>
                    </div>
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-center items-center px-4">
                    {/* <Button className="bg-[#ef4b67] mt-4 hover:bg-[#ff5a66]" onClick={() => openAuthModal("signup")}>
                        Explore Partnership
                    </Button> */}
                    <Button className="bg-transparent border-2 text-white mt-4 hover:bg-white hover:text-[#0e171e]">
                        <Link to="/contact">Contact Us</Link>
                    </Button>
                </div>
            </section >

            {/* Products Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50" >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Our Product Suite
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
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
            </section >

            {/* Support Cards Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-100" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            How We Support Our Partners
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                            Comprehensive support to ensure your partnership success from day one.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {supportData.map((support, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
                            >
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                    {support.title}
                                </h3>
                                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                    {support.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Footer Section */}
            <Footer />
            
            {/* Manual Auth Modal */}
            < AuthModal open={isAuthModalOpen} onClose={closeAuthModal} defaultTab={authModalTab} onSuccess={handleAuthSuccess} isAutoPopup={false} />
            {/* Auto-popup Auth Modal - Only shows for non-authenticated users */}
            < AuthModal open={showAutoPopup} onClose={closeAutoPopup} defaultTab="signup" onSuccess={handleAuthSuccess} isAutoPopup={true} onDismissPermanently={dismissPermanently} />
        </div >
    );
};

export default HomePage;
