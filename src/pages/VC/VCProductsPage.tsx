import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products, additionalProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BarChart3, Settings, Users, Zap, DollarSign, TrendingUp } from "lucide-react";
import Footer from "@/components/Footer";

const productIcons = {
  "payroll-variance": <BarChart3 className="w-8 h-8" />,
  "redwood-intelligence": <Settings className="w-8 h-8" />,
  "people-analytics": <Users className="w-8 h-8" />,
  "lifecycle-intelligence": <Zap className="w-8 h-8" />,
  "one-finance": <DollarSign className="w-8 h-8" />,
  "erp-insights": <TrendingUp className="w-8 h-8" />
};

const categories = ["All", "Analytics", "ERP", "HR", "Finance", "Intelligence"];

const VCProductsPage = () => {
  const navigate = useNavigate();
  const allProducts = [...products, ...additionalProducts];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Custom ProductCard for VC with navigation to VC product detail
  const VCProductCard = ({ product }) => {
    const handleProductClick = () => {
      navigate(`/vc-product/${product.id}`);
    };

    return (
      <div 
        onClick={handleProductClick}
        className="cursor-pointer hover:scale-105 transition-transform"
      >
        <ProductCard product={product} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 mb-8 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Investment Opportunity Portfolio</h1>
          <p className="text-lg text-blue-100 mb-6">
            Discover cutting-edge enterprise solutions and assess their market potential for your next investment.
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white text-gray-900"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "secondary" : "outline"}
                  size="sm"
                  className={selectedCategory === category ? "bg-white text-blue-600" : "border-white text-blue-600 hover:bg-white hover:text-blue-600"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <VCProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default VCProductsPage;
