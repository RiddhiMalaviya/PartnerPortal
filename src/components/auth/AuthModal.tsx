"use client"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import { X, Clock, Gift } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface AuthModalProps {
    open: boolean
    onClose: () => void
    defaultTab?: "signin" | "signup"
    onSuccess?: () => void
    isAutoPopup?: boolean // New prop to identify auto-popup
    onDismissPermanently?: () => void
}

export default function AuthModal({ open, onClose, defaultTab = "signup", onSuccess, isAutoPopup = false, onDismissPermanently }: AuthModalProps) {
    const [activeTab, setActiveTab] = useState(defaultTab);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(open);
    const navigate = useNavigate();

    // Reset to default tab whenever modal opens
    useEffect(() => {
        if (open) {
            setActiveTab(defaultTab);
        }
    }, [open, defaultTab]);

    useEffect(() => {
        setIsAuthModalOpen(open);
    }, [open]);

    const handleSuccess = () => {
        onSuccess?.();
        onClose();
    };

    const handleClose = () => {
        onClose();
    };

    const handleTabChange = (value: string) => {
        setActiveTab(value as "signin" | "signup");
    };

    const handleDismissPermanently = () => {
        onDismissPermanently?.();
        onClose();
    };

    const handleAuthSuccess = () => {
        setIsAuthModalOpen(false);
        navigate("/"); // Redirect to homepage
        onSuccess?.();
        onClose();
    };

    return (
        <Dialog open={isAuthModalOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                {/* Special header for auto-popup */}
                {isAutoPopup && (
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-t-lg -m-6 mb-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                    <Gift className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-900">Join Our Partner Network!</h3>
                                    <p className="text-sm text-blue-700">Start your journey with exclusive benefits</p>
                                </div>
                            </div>
                            {/* <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleClose}
                                className="text-blue-600 hover:text-blue-800"
                            >
                                <X className="h-4 w-4" />
                            </Button> */}
                        </div>
                    </div>
                )}
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold">
                        {isAutoPopup
                            ? "Ready to Transform Your Business?"
                            : activeTab === "signin"
                                ? "Welcome Back"
                                : "Create Partner Account"
                        }
                    </DialogTitle>
                    {isAutoPopup && (
                        <p className="text-center text-gray-600 text-sm">
                            Join thousands of partners already growing their business with us
                        </p>
                    )}
                </DialogHeader>
                {/* <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold">
                        {activeTab === "signin" ? "Welcome Back" : "Create Partner Account"}
                    </DialogTitle>
                </DialogHeader> */}

                <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="signin" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            Sign In
                        </TabsTrigger>
                        <TabsTrigger value="signup" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            Sign Up
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="signin" className="mt-0">
                        <LoginForm onSuccess={handleAuthSuccess} />
                    </TabsContent>

                    <TabsContent value="signup" className="mt-0">
                        <RegisterForm onSuccess={handleAuthSuccess} />
                    </TabsContent>
                </Tabs>

                {isAutoPopup && (
                    <div className="border-t pt-4 mt-4">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-2 text-gray-500">
                                <Clock className="h-4 w-4" />
                                <span>This offer expires soon</span>
                            </div>
                            <button
                                onClick={handleDismissPermanently}
                                className="text-gray-400 hover:text-gray-600 text-xs underline"
                            >
                                Don't show again
                            </button>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}