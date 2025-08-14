import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const LoginPage = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (selectedRole) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (u: { email: string; password: string; role: string }) =>
          u.role === selectedRole
      );

      if (!user) {
        navigate(`/register?role=${selectedRole}`);
        return;
      }

      login(selectedRole);
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Login Type</h2>
        <div className="space-y-4">
          <Button
            variant={selectedRole === "partner" ? "default" : "outline"}
            className="w-full"
            onClick={() => setSelectedRole("partner")}
          >
            Partner Login
          </Button>
          <Button
            variant={selectedRole === "vc_admin" ? "default" : "outline"}
            className="w-full"
            onClick={() => setSelectedRole("vc_admin")}
          >
            VC Access
          </Button>
        </div>
        <Button
          className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700"
          onClick={handleLogin}
          disabled={!selectedRole}
        >
          Proceed to Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;