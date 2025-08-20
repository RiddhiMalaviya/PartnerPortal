import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const LoginForm = ({ onSuccess }: { onSuccess?: () => void }) => {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [error, setError] = useState("");
    const [isPartnerExists, setIsPartnerExists] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        checkForPartner();
    }, []);

    const checkForPartner = () => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const hasPartner = users.some((user: any) => user.role === "partner");
        setIsPartnerExists(hasPartner);

        // Auto-select partner role if partner exists
        if (hasPartner) {
            setSelectedRole("partner");
        }
    };

    const handleLogin = () => {
        if (selectedRole) {
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            const user = users.find(
                (u: { userType: string }) => u.userType === selectedRole // Changed from role to userType
            );

            if (!user) {
                setError("No partner account found. Please sign up first.");
                // navigate(`/register?role=${selectedRole}`);
                return;
            }

            login(selectedRole);
            onSuccess?.(); // close modal if used inside modal
            navigate("/dashboard");
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center">{isPartnerExists ? "Click and Login" : "Choose Your Login Type"}</h2>
            {error && (
                <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            <div className="space-y-4">
                {/* Always show Partner Login if partner exists */}
                <Button
                    variant="default"
                    className="w-full"
                    onClick={() => setSelectedRole("partner")}
                >
                    Partner Login
                </Button>
                {/* Only show VC Access if no partner account exists */}
                {/* {!isPartnerExists && (
                    <Button
                        variant={selectedRole === "vc_admin" ? "default" : "outline"}
                        className="w-full"
                        onClick={() => setSelectedRole("vc_admin")}
                    >
                        VC Access
                    </Button>
                )} */}
            </div>
            <Button
                className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700"
                onClick={handleLogin}
                disabled={!selectedRole}
            >
                Proceed to Login
            </Button>
        </div>
    );
};

export default LoginForm;
