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

const Layout = () => {
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
                    {/* <div className="flex-shrink-0">
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:flex lg:space-x-3">
                            <img
                                src="/assets/payroll-variance.jpg"
                                alt="Payroll Analytics"
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 object-cover"
                            />
                            <img
                                src="/assets/redwood-intelligence.jpg"
                                alt="Redwood Intelligence"
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 object-cover"
                            />
                            <img
                                src="/assets/people-analytics.jpg"
                                alt="People Analytics"
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 object-cover"
                            />
                            <img
                                src="/assets/lifecycle-intelligence.jpg"
                                alt="Lifecycle Intelligence"
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 object-cover"
                            />
                        </div>
                    </div> */}
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-center items-center px-4">
                    <Button className="bg-[#ef4b67] mt-4 hover:bg-[#ff5a66]" onClick={() => openAuthModal("signup")}>
                        Explore Partnership
                    </Button>
                    <Button className="bg-transparent border-2 text-white mt-4 hover:bg-white hover:text-[#0e171e]">
                        <Link to="/contact">Contact Us</Link>
                    </Button>
                </div>
            </section >

            {/* Why Partner Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white" >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
                        Why Partner with PCLnXAI?
                    </h2>
                    <p className="text-center text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 lg:px-8">Our Patent Pending Payroll Root Cause Analysis technology perfectly complements your strengths and creates new revenue streams.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10">
                        <div className="text-center p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                            <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Enhance Client Outcomes</h3>
                            <p className="text-gray-600">
                                Deliver payroll RCA through data-driven analytics that proactively prevent costly errors and compliance risks.
                            </p>
                        </div>
                        <div className="text-center p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                            <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Create Competitive Differentiation</h3>
                            <p className="text-gray-600">
                                Stand out in crowded markets with breakthrough technology that builds trust and loyalty.
                            </p>
                        </div>
                        <div className="text-center p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                            <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Build Lasting Partnerships</h3>
                            <p className="text-gray-600">
                                Provide clients with comprehensive solutions that optimize their most mission-critical business process.
                            </p>
                        </div>

                    </div>
                </div>
            </section >

            {/* Partnership Opportunities Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Partnership Opportunities Tailored to Your Business
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                            Whether you're a consulting firm, HCM platform provider, or managed service provider, we have the perfect partnership model.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {partnershipData.map((partnership, index) => {
                            const IconComponent = partnership.icon; // Extract the icon component

                            return (
                                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8 lg:p-10">
                                    <div className="flex items-start space-x-4 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className={`w-12 h-12 ${partnership.iconBgColor} rounded-lg flex items-center justify-center`}>
                                                <IconComponent className={`w-6 h-6 ${partnership.iconColor}`} />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                                {partnership.title}
                                            </h6>
                                            <p className="text-lg text-gray-600">
                                                {partnership.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed">
                                        {partnership.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {partnership.columns.map((column, colIndex) => (
                                            <div key={colIndex}>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                                    {column.heading}
                                                </h4>
                                                <ul className="space-y-3">
                                                    {column.points.map((point, pointIndex) => (
                                                        <li key={pointIndex} className="flex items-start space-x-3">
                                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                                            <span className="text-gray-700">{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
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
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
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

            {/* Hero Section */}
            <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6" >
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        Join the Leading Innovators
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                        Industry leaders choose PCLnXAI because we deliver proven, patent-pending technology that redefines payroll RCA. Together, we create client success stories that fuel growth and establish market dominance
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                        <Button
                            onClick={() => openAuthModal("signup")}
                            className="bg-[#0e171e] hover:bg-[#2f3941] text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
                        >
                            Start Partnership Discussion
                            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                    </div>
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

            {/* CTA Strip */}
            <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-700 text-white" >
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
                        {/* <a href="https://pclnxai.com/wp-content/uploads/2025/03/Privacy-Policy-for-PCLnXAI.pdf" data-type="link" data-id="https://pclnxai.com/wp-content/uploads/2025/03/Privacy-Policy-for-PCLnXAI.pdf" className="hover:underline">Click here to see our Privacy Policy</a> */}
                    </div>

                    <div className="mt-8 text-center text-sm">
                        <p> PCLnXAI is operated globally by Payroll Cloud Corp (US) and Payroll Cloud Limited (UK).
                            All product offerings, support, and contracts will clearly indicate the responsible legal entity based on your region.
                            © 2023 PCLnXAI. All rights reserved. All trademarks and registered trademarks are the property of their respective owners.
                        </p>
                    </div>
                </div>
            </section >

            {/* Manual Auth Modal */}
            < AuthModal open={isAuthModalOpen} onClose={closeAuthModal} defaultTab={authModalTab} onSuccess={handleAuthSuccess} isAutoPopup={false} />
            {/* Auto-popup Auth Modal - Only shows for non-authenticated users */}
            < AuthModal open={showAutoPopup} onClose={closeAutoPopup} defaultTab="signup" onSuccess={handleAuthSuccess} isAutoPopup={true} onDismissPermanently={dismissPermanently} />
        </div >
    );
};

export default Layout;
