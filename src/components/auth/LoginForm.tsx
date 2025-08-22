import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, User, Building, Mail, ArrowRight, Eye, EyeOff } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  jobRole: string;
  region: string;
  interest: string;
  role: string;
  createdAt: string;
}

const LoginForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [email, setEmail] = useState("");
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [allPartners, setAllPartners] = useState<User[]>([]);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    loadAllPartners();
  }, []);

  const loadAllPartners = () => {
    try {
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
      const partnerUsers = users.filter((user: User) => user.role === "partner");
      setAllPartners(partnerUsers);
    } catch (error) {
      console.error("Error loading partners:", error);
      setError("Error loading user data");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value.toLowerCase().trim();
    setEmail(emailValue);
    setError("");
    
    if (emailValue) {
      const foundUser = allPartners.find(user => user.email === emailValue);
      if (foundUser) {
        setSelectedUser(foundUser);
        setShowUserDetails(true);
      } else {
        setSelectedUser(null);
        setShowUserDetails(false);
      }
    } else {
      setSelectedUser(null);
      setShowUserDetails(false);
    }
  };

  const handleLogin = async () => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!selectedUser) {
      setError("No account found with this email address. Please check your email or sign up.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Update last login
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
      const updatedUser = { ...selectedUser, lastLogin: new Date().toISOString() };
      const updatedUsers = users.map(u => u.id === selectedUser.id ? updatedUser : u);
      
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      
      login("partner");
      onSuccess?.();
      navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && selectedUser) {
      handleLogin();
    }
  };

  if (allPartners.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <User className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Partner Accounts Found</h3>
          <p className="text-gray-600">
            No partner accounts exist yet. Please sign up to create your account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-2">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome Back!</h3>
        <p className="text-gray-600">Enter your email to continue</p>
      </div>
      
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={handleEmailChange}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="w-full"
          />
        </div>

        {/* Show user details when email matches */}
        {showUserDetails && selectedUser && (
          <div className="p-4 bg-green-50 rounded-lg border border-green-200 animate-in slide-in-from-top duration-200">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-green-900">Account Found!</h4>
                <p className="text-sm text-green-800 font-medium">{selectedUser.name}</p>
                <p className="text-sm text-green-700 flex items-center mt-1">
                  <Building className="h-3 w-3 mr-1" />
                  {selectedUser.company}
                </p>
                <p className="text-xs text-green-600 mt-1">
                  {selectedUser.interest} • {selectedUser.region}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Show suggestion if email doesn't match but there are similar emails */}
        {email && !selectedUser && email.length > 3 && (
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800">
              No account found with this email. 
              {allPartners.length > 0 && (
                <span className="block mt-1 text-xs text-amber-600">
                  {allPartners.length} partner account{allPartners.length > 1 ? 's' : ''} exist{allPartners.length === 1 ? 's' : ''}. Please check your email or sign up.
                </span>
              )}
            </p>
          </div>
        )}
      </div>

      <Button
        className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
        onClick={handleLogin}
        disabled={!selectedUser || isLoading}
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Signing In...
          </>
        ) : selectedUser ? (
          <>
            Continue to Dashboard
            <ArrowRight className="h-4 w-4 ml-2" />
          </>
        ) : (
          "Enter Email to Continue"
        )}
      </Button>

      {/* Show all registered emails for demo/testing purposes */}
      {process.env.NODE_ENV === 'development' && allPartners.length > 0 && (
        <details className="mt-4">
          <summary className="text-xs text-gray-500 cursor-pointer hover:text-gray-700">
            View all registered emails ({allPartners.length})
          </summary>
          <div className="mt-2 p-2 bg-gray-50 rounded text-xs space-y-1">
            {allPartners.map((partner, index) => (
              <div key={partner.id} className="text-gray-600">
                {index + 1}. {partner.email} - {partner.name}
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
};

export default LoginForm;
