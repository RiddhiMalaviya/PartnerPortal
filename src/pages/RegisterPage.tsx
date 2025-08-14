// src/pages/RegisterPage.tsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const searchParams = new URLSearchParams(location.search);
  const role = searchParams.get("role");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((user: { email: string }) => user.email === email)) {
      setError("User already exists. Please log in.");
      return;
    }

    // Store new user
    const newUser = { email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setError("");
    if (role) {
      login(role);
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;