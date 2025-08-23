import { useState } from "react";
import { products, additionalProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BarChart3, Settings, Users, Zap, DollarSign, TrendingUp } from "lucide-react";
import Footer from "@/components/Footer";

const productIcons = {
  "payroll-variance": <BarChart3 className="h-6 w-6" />,
  "redwood-intelligence": <Settings className="h-6 w-6" />,
  "people-analytics": <Users className="h-6 w-6" />,
  "lifecycle-intelligence": <Zap className="h-6 w-6" />,
  "one-finance": <DollarSign className="h-6 w-6" />,
  "erp-insights": <TrendingUp className="h-6 w-6" />
};

const categories = ["All", "Analytics", "ERP", "HR", "Finance", "Intelligence"];

const PartnerProducts = () => {
  const allProducts = [...products, ...additionalProducts];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section>
      <div className="min-h-screen py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-bold mb-4 md:mb-0">Product Portfolio</h1>
            <div className="w-full md:w-auto flex items-center gap-4">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title!}
                description={product.description!}
                image={product.image!}
                slug={product.slug!}
                icon={productIcons[product.id as keyof typeof productIcons]}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PartnerProducts;