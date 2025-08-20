import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { userRole, logout } = useAuth();

  const getNavigation = () => {
    if (!userRole) {
      // Not logged in - show only Contact
      return [
        // { name: "Contact", href: "/contact" },
      ];
    } else if (userRole === "vc_admin") {
      // VC Admin - show VC specific navigation
      return [
        { name: "Products", href: "/vc-products" },
        { name: "About", href: "/about" },
        { name: "Resources", href: "/resources" },
        { name: "Contact", href: "/contact" },
      ];
    } else if (userRole === "partner") {
      // Partner - show Partner specific navigation
      return [
        { name: "Products", href: "/products" },
        { name: "About", href: "/about" },
        { name: "Resources", href: "/resources" },
        { name: "Contact", href: "/contact" },
      ];
    }
    return [];
  };

  const navigation = getNavigation();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.substring(1);
    return location.pathname === href;
  };

  const handleLogout = () => {
    if (userRole === "vc_admin") {
      logout();
      navigate("/vc-homepage");
    } else {
      logout();
      navigate("/");
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (userRole === "partner") {
      navigate("/dashboard");
    } else if (userRole === "vc_admin") {
      navigate("/vc-dashboard");
    } else {
      navigate("/");
    }
  };

  const handleVCAccess = () => {
    navigate("/vc-homepage");
  };

  // ADD THIS MISSING RETURN STATEMENT
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={handleLogoClick} className="flex items-center">
              <div className="bg-blue-600 text-white rounded-lg p-2 mr-2">
                <span className="font-bold text-lg">EP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Enterprise Portal</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(item.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side buttons - THIS IS WHERE LOGOUT BUTTON SHOWS */}
          <div className="hidden md:flex items-center space-x-4">
            {!userRole ? (
              // When user is NOT logged in
              <>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/contact">Contact</Link>
                </Button>
                <Button onClick={handleVCAccess} className="bg-gradient-to-r from-primary to-primary-dark" size="sm">
                  VC Access
                </Button>
                {/* <Button size="sm">Partner Login</Button> */}
              </>
            ) : (
              // When user IS logged in (partner or vc_admin)
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {userRole === "partner" ? "Partner" : userRole === "vc_admin" ? "VC Admin" : "User"}
                </span>
                <Button onClick={handleLogout} variant="outline" size="sm">
                  Logout
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile auth section */}
              <div className="pt-4 pb-3 border-t border-gray-200">
                {!userRole ? (
                  <div className="space-y-2">
                    <Button onClick={handleVCAccess} variant="outline" className="w-full">
                      VC Access
                    </Button>
                    <Button className="w-full">Partner Login</Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm text-gray-600">
                      Logged in as: {userRole === "partner" ? "Partner" : "VC Admin"}
                    </div>
                    <Button onClick={handleLogout} variant="outline" className="w-full">
                      Logout
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
