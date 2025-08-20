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
    role: "",
    region: "",
    interest: "",
    acceptTerms: false,
    userType: "partner",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      setError("Please accept the Terms & Conditions");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((user: { email: string }) => user.email === formData.email)) {
      setError("User already exists. Please sign in.");
      return;
    }

    // Store new user with forced "partner" role
    const userData = {
      ...formData,
      userType: "partner" // Ensure it's always "partner"
    };
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    
    // Log them in
    login("partner");
    onSuccess?.();
    navigate("/dashboard");
  };

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
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Work Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            placeholder="Company Ltd."
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="role">Role</Label>
          <Input
            id="role"
            placeholder="e.g. IT Director"
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value})}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="region">Region</Label>
          <Select onValueChange={(value) => setFormData({...formData, region: value})} required>
            <SelectTrigger>
              <SelectValue placeholder="Select your region" />
            </SelectTrigger>
            <SelectContent className="w-full z-50 bg-background">
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="interest">Partnership Interest</Label>
          <Select onValueChange={(value) => setFormData({...formData, interest: value})} required>
            <SelectTrigger>
              <SelectValue placeholder="Select your interest" />
            </SelectTrigger>
            <SelectContent className="w-full z-50 bg-background">
              <SelectItem value="implementation">Implementation Partner</SelectItem>
              <SelectItem value="reseller">Reseller Partner</SelectItem>
              <SelectItem value="strategic">Strategic Partner</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="terms"
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => 
              setFormData({...formData, acceptTerms: checked as boolean})
            }
            required
          />
          <Label htmlFor="terms" className="text-sm text-muted-foreground">
            I accept the <a href="#" className="text-primary hover:underline">terms and conditions</a>
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full mt-6" disabled={!formData.acceptTerms}>
        Create Partner Account
      </Button>
    </form>
  );
};

export default RegisterForm;