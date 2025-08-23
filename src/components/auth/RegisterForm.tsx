import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const RegisterForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobRole: "", // Changed from 'role' to avoid confusion
    region: "",
    interest: "",
    acceptTerms: false,
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'company', 'jobRole', 'region', 'interest'];
    
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        setError(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
        return false;
      }
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (!formData.acceptTerms) {
      setError("Please accept the Terms & Conditions");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      
      // Check if user already exists
      if (users.some((user: { email: string }) => user.email === formData.email.toLowerCase().trim())) {
        setError("An account with this email already exists. Please sign in instead.");
        setIsSubmitting(false);
        return;
      }

      // Create consistent user data structure
      const userData = {
        id: `partner_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name: formData.name.trim(),
        email: formData.email.toLowerCase().trim(),
        company: formData.company.trim(),
        jobRole: formData.jobRole.trim(),
        region: formData.region,
        interest: formData.interest,
        acceptTerms: formData.acceptTerms,
        role: "partner", // ✅ This is what LoginForm checks for
        userType: "partner", // ✅ Keep both for compatibility
        tier: "Bronze",
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };

      // Store the new user
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));

      // Store current user session
      localStorage.setItem("currentUser", JSON.stringify(userData));

      // Auto-login
      login("partner");
      onSuccess?.();
      navigate("/homepage");

    } catch (error) {
      console.error("Registration error:", error);
      setError("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormComplete = formData.name && formData.email && formData.company && 
                        formData.jobRole && formData.region && formData.interest && 
                        formData.acceptTerms;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-2">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Work Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="company">Company Name *</Label>
          <Input
            id="company"
            placeholder="Company Ltd."
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="jobRole">Job Role *</Label>
          <Input
            id="jobRole"
            placeholder="e.g. IT Director, CTO, Partner Manager"
            value={formData.jobRole}
            onChange={(e) => setFormData({...formData, jobRole: e.target.value})}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="region">Region *</Label>
          <Select 
            onValueChange={(value) => setFormData({...formData, region: value})} 
            required
            disabled={isSubmitting}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your region" />
            </SelectTrigger>
            <SelectContent className="w-full z-50 bg-background">
              <SelectItem value="US">United States</SelectItem>
              <SelectItem value="UK">United Kingdom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="interest">Partnership Interest *</Label>
          <Select 
            onValueChange={(value) => setFormData({...formData, interest: value})} 
            required
            disabled={isSubmitting}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your interest" />
            </SelectTrigger>
            <SelectContent className="w-full z-50 bg-background">
              <SelectItem value="Implementation">Implementation Partner</SelectItem>
              <SelectItem value="Reseller">Reseller Partner</SelectItem>
              <SelectItem value="Strategic">Strategic Partner</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-start space-x-2 pt-2">
          <Checkbox 
            id="terms"
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => 
              setFormData({...formData, acceptTerms: checked as boolean})
            }
            required
            disabled={isSubmitting}
          />
          <Label htmlFor="terms" className="text-sm text-muted-foreground leading-5">
            I accept the{" "}
            <a href="#" className="text-primary hover:underline">
              terms and conditions
            </a>
          </Label>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full mt-6" 
        disabled={!isFormComplete || isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Creating Account...
          </>
        ) : (
          "Create Partner Account"
        )}
      </Button>
    </form>
  );
};

export default RegisterForm;
