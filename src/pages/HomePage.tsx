import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, additionalProducts } from "@/data/products";
import { ArrowRight, BarChart3, Settings, Users, Zap, DollarSign, TrendingUp } from "lucide-react";
import Footer from "@/components/Footer";

const productIcons = {
  "payroll-variance": <BarChart3 className="h-6 w-6" />,
  "redwood-intelligence": <Settings className="h-6 w-6" />,
  "people-analytics": <Users className="h-6 w-6" />,
  "lifecycle-intelligence": <Zap className="h-6 w-6" />,
  "one-finance": <DollarSign className="h-6 w-6" />,
  "erp-insights": <TrendingUp className="h-6 w-6" />
};

const HomePage = () => {
  const allProducts = [...products, ...additionalProducts];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Enterprise Solutions for
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                {" "}Partners & VCs
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our comprehensive suite of enterprise HR and ERP solutions designed to accelerate 
              digital transformation and drive measurable business outcomes for your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-dark text-lg px-8">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl">Decorative elements</div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </section> */}

      {/* Products Section */}
      <section id="products" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six powerful solutions designed to transform your enterprise operations, 
              from payroll optimization to Oracle Cloud migrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
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
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$2.4B</div>
              <div className="text-muted-foreground">Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98.7%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25</div>
              <div className="text-muted-foreground">Day Avg. Implementation</div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join hundreds of enterprises who have accelerated their digital transformation with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Request Partner Kit
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Investment Summary
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;