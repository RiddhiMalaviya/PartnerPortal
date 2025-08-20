import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { products, additionalProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Play, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Download,
  ExternalLink,
  Target,
  AlertTriangle,
  CheckCircle,
  BarChart3
} from "lucide-react";
import Footer from "@/components/Footer";

const VCProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const allProducts = [...products, ...additionalProducts];
    const foundProduct = allProducts.find(p => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Button onClick={() => navigate("/vc-products")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const mockBusinessData = {
    revenue: "$2.4M ARR",
    growth: "+127% YoY",
    customers: "450+ Enterprise",
    marketSize: "$12.8B TAM",
    painPoints: [
      "Manual payroll processing costs companies $300K annually",
      "HR analytics gaps lead to 23% higher turnover rates",
      "Legacy systems create 40% inefficiency in workforce planning"
    ],
    features: [
      "AI-powered predictive analytics",
      "Real-time dashboard and reporting",
      "Seamless ERP integration",
      "Advanced security and compliance",
      "Mobile-first user experience"
    ],
    useCases: [
      {
        title: "Fortune 500 Manufacturing",
        description: "Reduced payroll errors by 89% and saved $450K annually"
      },
      {
        title: "Global Tech Company",
        description: "Improved workforce planning efficiency by 65%"
      },
      {
        title: "Healthcare Network",
        description: "Streamlined HR processes across 12 locations"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Button 
            onClick={() => navigate("/vc-products")}
            variant="ghost"
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section with Video */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg overflow-hidden mb-8">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            <div className="text-white">
              <Badge variant="secondary" className="mb-4">
                Investment Opportunity
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                {product.description}
              </p>
              <div className="flex gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{mockBusinessData.revenue}</div>
                  <div className="text-sm text-blue-200">Annual Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">{mockBusinessData.growth}</div>
                  <div className="text-sm text-blue-200">Growth Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{mockBusinessData.customers}</div>
                  <div className="text-sm text-blue-200">Customers</div>
                </div>
              </div>
            </div>
            
            {/* Video Placeholder */}
            <div className="relative bg-black/20 rounded-lg overflow-hidden min-h-[300px] flex items-center justify-center">
              <Button variant="secondary" size="lg" className="gap-2">
                <Play className="h-6 w-6" />
                Watch Product Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Business Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Business Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">{mockBusinessData.revenue}</div>
                <div className="text-sm text-gray-600">Annual Recurring Revenue</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">{mockBusinessData.marketSize}</div>
                <div className="text-sm text-gray-600">Total Addressable Market</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">{mockBusinessData.customers}</div>
                <div className="text-sm text-gray-600">Enterprise Customers</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">{mockBusinessData.growth}</div>
                <div className="text-sm text-gray-600">Year over Year Growth</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pain Points */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Market Pain Points
            </CardTitle>
            <CardDescription>
              Critical challenges this solution addresses in the enterprise market
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockBusinessData.painPoints.map((pain, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800">{pain}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Key Features & Capabilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {mockBusinessData.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enterprise Use Cases & Success Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {mockBusinessData.useCases.map((useCase, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">{useCase.title}</h4>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market Context */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Market Context & Investment Thesis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">Market Opportunity</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• HR Tech market growing at 22% CAGR through 2028</li>
                  <li>• $12.8B addressable market in enterprise segment</li>
                  <li>• 67% of companies still using legacy HR systems</li>
                  <li>• Remote work driving demand for digital solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Competitive Advantage</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• First-mover in AI-powered payroll analytics</li>
                  <li>• 89% customer retention rate</li>
                  <li>• Strategic partnerships with major ERP vendors</li>
                  <li>• Strong IP portfolio with 12 pending patents</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Downloads */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Due Diligence Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start gap-2">
                <Download className="h-4 w-4" />
                Financial Statements (2024)
              </Button>
              <Button variant="outline" className="justify-start gap-2">
                <Download className="h-4 w-4" />
                Market Analysis Report
              </Button>
              <Button variant="outline" className="justify-start gap-2">
                <Download className="h-4 w-4" />
                Product Demo & Technical Specs
              </Button>
              <Button variant="outline" className="justify-start gap-2">
                <Download className="h-4 w-4" />
                Customer References & Case Studies
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Ready to explore this investment opportunity further?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button size="lg" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Schedule Due Diligence Call
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="h-4 w-4" />
                Request Full Data Room Access
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default VCProductDetailPage;
