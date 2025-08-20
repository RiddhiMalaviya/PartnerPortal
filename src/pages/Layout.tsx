import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, additionalProducts } from "@/data/products";
import { ArrowRight, BarChart3, Settings, Users, Zap, DollarSign, TrendingUp } from "lucide-react";
import Footer from "@/components/Footer";
import { useState } from "react"
import AuthModal from "@/components/auth/AuthModal"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useNavigate } from "react-router-dom";

const productIcons = {
    "payroll-variance": <BarChart3 className="h-6 w-6" />,
    "redwood-intelligence": <Settings className="h-6 w-6" />,
    "people-analytics": <Users className="h-6 w-6" />,
    "lifecycle-intelligence": <Zap className="h-6 w-6" />,
    "one-finance": <DollarSign className="h-6 w-6" />,
    "erp-insights": <TrendingUp className="h-6 w-6" />
};

const Layout = () => {
    const navigate = useNavigate();
    const allProducts = [...products, ...additionalProducts];
    const [authOpen, setAuthOpen] = useState(false)
    const [authTab, setAuthTab] = useState<"signin" | "signup">("signin")

    const openSignIn = () => {
        setAuthTab("signin")
        setAuthOpen(true)
    }

    const openSignUp = () => {
        setAuthTab("signup")
        setAuthOpen(true)
    }

    // const handleLearnMore = () => {
    //     setAuthTab("signup");
    //     setAuthOpen(true);
    // };

    return (
        <div className="min-h-screen">

            {/* 3. Products */}
            <section id="products" className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Product Portfolio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                title={product.title!}
                                description={product.description!}
                                image={product.image!}
                                slug={product.slug!}
                                icon={productIcons[product.id as keyof typeof productIcons]}
                                // onLearnMore={handleLearnMore}
                            />
                        ))}
                    </div>
                    <AlertDialog>
                        {/* <AlertDialogTrigger asChild>
                            <p className="text-center mt-6 text-muted-foreground cursor-pointer">
                                Learn more → <span className="text-primary underline">Requires sign-in</span>
                            </p>
                        </AlertDialogTrigger> */}
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Sign up Required</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Please sign up to access full product details.
                                    <Button 
                                        className="w-full mt-4" 
                                        // onClick={() => {
                                        //     handleLearnMore();
                                        // }}
                                    >
                                        Become a Partner
                                    </Button>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                        </AlertDialogContent>
                    </AlertDialog>
                    {/* <p className="text-center mt-6 text-muted-foreground">
                        Learn more → <span className="text-primary underline cursor-pointer">Requires sign-in</span>
                    </p> */}
                </div>
            </section>

            {/* 2. Why Partner */}
            <section className="py-16 bg-background">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Why Partner with Us?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl shadow bg-card">
                            <h3 className="text-xl font-semibold mb-2">Revenue & Margin</h3>
                            <p className="text-muted-foreground">Boost profitability with attractive partner margins.</p>
                        </div>
                        <div className="p-6 rounded-2xl shadow bg-card">
                            <h3 className="text-xl font-semibold mb-2">Faster Time-to-Value</h3>
                            <p className="text-muted-foreground">Accelerate client onboarding with ready-to-go solutions.</p>
                        </div>
                        <div className="p-6 rounded-2xl shadow bg-card">
                            <h3 className="text-xl font-semibold mb-2">Co-Marketing & Support</h3>
                            <p className="text-muted-foreground">Get marketing resources and technical enablement.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1. Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Partner with PCLnXAI to transform HR & ERP
                    </h1>
                    {/* <p className="text-xl text-muted-foreground mb-8">
                        Value to partners: margin, speed, enablement.
                    </p> */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" onClick={openSignUp} className="btn-primary">
                            Become a Partner
                        </Button>
                        <Button size="lg" onClick={openSignIn} className="btn-primary">
                            Already a Partner? Sign In
                        </Button>
                        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} defaultTab={authTab} />
                        {/* <Button size="lg" variant="outline" className="text-lg px-8">
                            Explore Products
                        </Button> */}
                    </div>
                </div>
            </section>

            

            

            {/* 4. Use Cases & Industries */}
            <section className="py-16 bg-background text-center">
                <h2 className="text-3xl font-bold mb-8">Use Cases & Industries</h2>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {[
                        { name: "Retail", outcome: "Streamline workforce scheduling" },
                        { name: "Healthcare", outcome: "Optimize staffing & compliance" },
                        { name: "Pharma", outcome: "Ensure quality & efficiency" },
                        { name: "Finance", outcome: "Improve payroll accuracy & insights" },
                    ].map((item) => (
                        <div key={item.name} className="px-4 py-2 rounded-full bg-muted text-sm font-medium">
                            {item.name} – <span className="text-muted-foreground">{item.outcome}</span>
                        </div>
                    ))}
                </div>
                <Button variant="outline">See Industry Playbooks</Button>
                <p className="text-muted-foreground mt-2 text-sm">Requires sign-in</p>
            </section>

            {/* 5. Program Tiers */}
            {/* <section className="py-16 bg-muted/30">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Partner Program Tiers</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl shadow bg-card">
                            <h3 className="font-semibold text-xl">Bronze</h3>
                            <p className="text-muted-foreground">✔ Basic margin<br />✔ Access to knowledge base</p>
                        </div>
                        <div className="p-6 rounded-2xl shadow bg-card">
                            <h3 className="font-semibold text-xl">Silver</h3>
                            <p className="text-muted-foreground">✔ Higher margin<br />✔ Joint marketing campaigns</p>
                        </div>
                        <div className="p-6 rounded-2xl shadow bg-card">
                            <h3 className="font-semibold text-xl">Gold</h3>
                            <p className="text-muted-foreground">✔ Premium margin<br />✔ Dedicated partner manager</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Button variant="outline">
                            View full tier benefits →
                        </Button>
                        <span className="text-primary underline cursor-pointer">Requires sign-in</span>
                    </div>
                </div>
            </section> */}

            {/* 6. Final CTA Strip */}
            {/* <section className="py-12 bg-primary text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" onClick={openSignUp} className="bg-white text-primary hover:bg-gray-100">
                        Become a Partner
                    </Button>
                    <Button 
                        size="lg" 
                        variant="secondary" 
                        className="bg-primary-dark hover:bg-primary"
                        onClick={() => navigate("/contact")}
                    >
                    Contact Partner Team
                    </Button>
                    <AuthModal
                        open={authOpen}
                        onClose={() => setAuthOpen(false)}
                        defaultTab={authTab}
                    />
                </div>
            </section> */}
            <AuthModal 
                open={authOpen} 
                onClose={() => setAuthOpen(false)} 
                defaultTab={authTab} 
            />
            <Footer />
        </div>
    );
};

export default Layout;
