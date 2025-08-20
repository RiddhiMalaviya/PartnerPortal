import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const VCRegisterForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    firm: "",
    title: "",
    aum: "",
    focusAreas: "",
    acceptTerms: false,
    userType: "vc_admin",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!formData.acceptTerms) {
      setError("Please accept the Terms & Conditions");
      setLoading(false);
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.firm) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      
      if (users.some((user: { email: string }) => user.email === formData.email)) {
        setError("User already exists. Please sign in.");
        setLoading(false);
        return;
      }

      // Store new VC user
      const userData = {
        ...formData,
        userType: "vc_admin"
      };
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));

      // Log them in
      login("vc_admin");
      onSuccess?.();
      navigate("/vc-dashboard");
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-h-[75vh] overflow-y-auto">
      <form onSubmit={handleSubmit} className="space-y-4 px-1">
        {/* <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">Create VC Account</h3>
          <p className="text-sm text-gray-600">Join our venture capital network</p>
        </div> */}

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Name Fields - Side by side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="First name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              placeholder="Last name"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password *</Label>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Create a password"
            required
          />
        </div>

        {/* Firm */}
        <div className="space-y-2">
          <Label htmlFor="firm">Firm/Organization *</Label>
          <Input
            id="firm"
            value={formData.firm}
            onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
            placeholder="Your VC firm name"
            required
          />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g., Managing Partner, Principal"
          />
        </div>

        {/* AUM */}
        <div className="space-y-2">
          <Label htmlFor="aum">Assets Under Management</Label>
          <Select onValueChange={(value) => setFormData({ ...formData, aum: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select AUM range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="<10M">Less than $10M</SelectItem>
              <SelectItem value="10M-50M">$10M - $50M</SelectItem>
              <SelectItem value="50M-100M">$50M - $100M</SelectItem>
              <SelectItem value="100M-500M">$100M - $500M</SelectItem>
              <SelectItem value="500M+">$500M+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Focus Areas */}
        <div className="space-y-2">
          <Label htmlFor="focusAreas">Investment Focus Areas</Label>
          <Input
            id="focusAreas"
            value={formData.focusAreas}
            onChange={(e) => setFormData({ ...formData, focusAreas: e.target.value })}
            placeholder="e.g., SaaS, Fintech, Healthcare"
          />
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: !!checked })}
          />
          <Label htmlFor="terms" className="text-sm">
            I accept the Terms & Conditions and Privacy Policy
          </Label>
        </div>

        {/* Submit Button - Always visible */}
        <div className="pt-4 sticky bottom-0 bg-white">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating Account..." : "Create VC Account"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VCRegisterForm;
