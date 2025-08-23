import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { userRole, logout, currentUser } = useAuth();

  const getNavigation = () => {
    if (!userRole) {
      return [
        // { name: "About", href: "/about" },
        // { name: "Resources", href: "/resources" },
      ];
    } else if (userRole === "partner") {
      return [
        { name: "Products", href: "/products" },
        { name: "About", href: "/about" },
        { name: "Resources", href: "/resources" },
        { name: "Contact", href: "/contact" },
        { name: "Dashboard", href: "/dashboard" },
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
    logout();
    navigate("/");
  };


  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (userRole === "partner") {
      navigate("/homepage");
    } else {
      navigate("/");
    }
  };

  const getDisplayName = () => {
    if (currentUser?.name) {
      return currentUser.name.split(' ')[0]; 
    }
    return "Partner";
  };

  const getInitials = () => {
    if (currentUser?.name) {
      const names = currentUser.name.split(' ');
      if (names.length >= 2) {
        return `${names[0][0]}${names[1]}`.toUpperCase();
      }
      return names[0][0].toUpperCase();
    }
    return "P";
  };

  const getFullDisplayName = () => {
    return currentUser?.name || "Partner User";
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
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
                  className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(item.href)
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
              <>
                <Button className="bg-gradient-to-r from-primary to-primary-dark" size="sm" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium">{getInitials()}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {getFullDisplayName()}
                    </span>
                  </div>
                  <Button onClick={handleLogout} variant="outline" size="sm">
                    Logout
                  </Button>
                </div>
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
                    <Button className="w-full" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {/* Mobile User Info */}
                    {currentUser && (
                      <div className="px-3 py-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">{getInitials()}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
                            <p className="text-xs text-gray-500">{currentUser.email}</p>
                            <p className="text-xs text-blue-600 font-medium">{currentUser.interest} Partner</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <Link
                      to="/dashboard"
                      className="block w-full text-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    
                    <Button 
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }} 
                      variant="outline" 
                      className="w-full"
                    >
                      Logout
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {isUserMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsUserMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
