import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  Star, 
  Users, 
  Shield, 
  CheckCircle, 
  Zap, 
  Phone,
  Mail,
  Calendar,
  FileText,
  Video,
  Award,
  TrendingUp,
  Globe,
  Settings,
  Target,
  Download,
  ExternalLink
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import AuthModal from '@/components/auth/AuthModal';
import { products } from '@/data/products'; // Import the products array

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); // Use slug instead of productId
  const navigate = useNavigate();
  const { userRole } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Find product by slug from the products array
  const product = slug ? products.find(p => p.slug === slug) : null;

  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleProtectedAction = (action: string) => {
    if (!userRole) {
      setIsAuthModalOpen(true);
    } else {
      console.log(`Performing ${action} for authenticated user`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Badge variant="secondary" className="text-sm">
                  {product.category}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-blue-600 mb-6 font-medium">
                {product.tagline}
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Key Benefits from pain points */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Pain Points Solved:</h3>
                {product.painPoints.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => handleProtectedAction('contact')}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Sales
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => handleProtectedAction('info')}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get More Info
                </Button>
              </div>
            </div>

            {/* Right Side - Video Section */}
            <div className="relative">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                  {product.video ? (
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={product.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <Video className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600">
                        {product.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-2">
                        Product demonstration
                      </p>
                    </div>
                  )}
                </div>
              </Card>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Companies</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold text-gray-900">4.8</span>
                  </div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="market">Market</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-blue-600" />
                      Business Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {product.overview}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-green-600" />
                      Who Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {product.beneficiaries.map((role, index) => (
                        <Badge key={index} variant="outline" className="px-3 py-1">
                          <Users className="mr-1 h-3 w-3" />
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Key Business Features</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                  {product.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 border rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Use Cases Tab */}
            <TabsContent value="use-cases" className="space-y-6">
              <div className="grid gap-6">
                {product.useCases.map((useCase, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Target className="h-8 w-8 text-blue-600 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 text-blue-600">
                            {useCase.industry}
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-1">Scenario</h4>
                              <p className="text-gray-600">{useCase.scenario}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-green-800 mb-1">Impact Delivered</h4>
                              <p className="text-green-700 font-medium">{useCase.impact}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.resources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <FileText className="h-6 w-6 text-blue-600 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">{resource.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{resource.type}</p>
                          {resource.urls && resource.urls !== "#" ? (
                            <a
                              href={resource.urls}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm"
                            >
                              {resource.gated ? "Partner Access" : "View Resource"}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          ) : (
                            <span className="text-xs text-gray-500">
                              {resource.gated ? "Available for partners" : "Coming soon"}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Market Tab */}
            <TabsContent value="market" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Market Opportunity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm font-medium text-gray-600">TAM</div>
                        <div className="text-lg font-bold text-blue-600">
                          {product.marketOpportunity.tam}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-sm font-medium text-gray-600">SAM</div>
                        <div className="text-lg font-bold text-green-600">
                          {product.marketOpportunity.sam}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-sm font-medium text-gray-600">SOM</div>
                        <div className="text-lg font-bold text-purple-600">
                          {product.marketOpportunity.som}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Growth Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.marketOpportunity.growthTrends.map((trend, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <TrendingUp className="h-4 w-4 text-green-600 mt-1" />
                          <span className="text-sm text-gray-700">{trend}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Why Now?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {product.marketOpportunity.whyNow.map((reason, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Interested in {product.title}?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our team to learn more about how this solution can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-110"
              onClick={() => handleProtectedAction('contact')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Sales Team
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-110"
              onClick={() => handleProtectedAction('info')}
            >
              <Mail className="h-5 w-5 mr-2" />
              Request Information
            </Button>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal
        open={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab="signup"
        onSuccess={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
};

export default ProductDetail;
