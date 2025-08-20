import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const VCLoginForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      // Check if VC user exists in localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const vcUser = users.find(
        (user: any) => user.email === formData.email && user.userType === "vc_admin"
      );

      if (!vcUser) {
        setError("VC account not found. Please sign up first.");
        setLoading(false);
        return;
      }

      // In a real app, you'd validate the password here
      // For demo purposes, we'll just check if password field is filled

      // Login as VC admin
      login("vc_admin");
      onSuccess?.(); // Close modal if used inside modal
      navigate("/vc-dashboard");
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold">VC Access Portal</h3>
        <p className="text-sm text-gray-600">Sign in to access investment opportunities</p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          placeholder="Enter your password"
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Signing In..." : "Sign In to VC Portal"}
      </Button>

      <div className="text-center text-sm text-gray-600">
        Don't have a VC account? Switch to Sign Up tab above
      </div>
    </form>
  );
};

export default VCLoginForm;
