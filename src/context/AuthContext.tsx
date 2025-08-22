import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

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
  lastLogin?: string;
}

// interface AuthContextType {
//   userRole: string | null;
//   currentUser: User | null;
//   isAuthenticated: boolean;
//   login: (role: string) => void;
//   logout: () => void;
//   setCurrentUser: (user: User | null) => void;
// }
interface AuthContextType {
  userRole: string | null;
  currentUser: User | null; // ✅ Add this
  login: (role: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<string | null>(() => {
    return localStorage.getItem("userRole") || null;
  });

  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (userRole) {
      localStorage.setItem("userRole", userRole);
    } else {
      localStorage.removeItem("userRole");
    }
  }, [userRole]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  const login = (role: string) => {
    setUserRole(role);
    // currentUser should already be set by the login form
  };

  const logout = () => {
    setUserRole(null);
    setCurrentUser(null);
    localStorage.removeItem("userRole");
    localStorage.removeItem("currentUser");
  };

  return (
    // <AuthContext.Provider value={{ 
    //   userRole, 
    //   currentUser, 
    //   isAuthenticated: !!userRole && !!currentUser,
    //   login, 
    //   logout, 
    //   setCurrentUser 
    // }}>
    <AuthContext.Provider value={{
      userRole,
      currentUser,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
