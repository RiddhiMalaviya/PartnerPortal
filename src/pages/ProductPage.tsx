// src/pages/ProductPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Play,
  CheckCircle,
  Phone,
  Mail,
  Video,
  FileText,
  ExternalLink,
  Lock
} from 'lucide-react';
import { products } from '@/data/products';
import AuthModal from '@/components/auth/AuthModal';

const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
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

  const handleGetMoreInfo = () => {
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);
    navigate(`/products/${product!.slug}`, { replace: true }); // After successful auth, redirect to full product detail page
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
            Back to Home
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

              {/* Limited Key Benefits */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Provide:</h3>
                {product.painPoints.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}

                {/* Show there's more content available */}
                <div className="flex items-center space-x-2 opacity-60">
                  <Lock className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    +{product.painPoints.length - 3} more benefits available
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={handleGetMoreInfo}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Lock className="h-5 w-5 mr-2" />
                  Get More Info
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Sales
                </Button>
              </div>
            </div>

            {/* Right Side - Demo Video */}
            <div className="relative">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                  {product.video ? (
                    <video
                      className="w-full h-full object-cover"
                      controls
                      poster={product.image}
                    >
                      <source src={product.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="text-center">
                      <Video className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600">
                        {product.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-2">
                        Demo video available
                      </p>
                    </div>
                  )}
                </div>
              </Card>

              {/* Basic Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">{product.clients}</div>
                  <div className="text-sm text-gray-600">Trusted By</div>
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

      {/* Limited Resources Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Available Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Show only non-gated resources */}
            {product.resources.filter(resource => !resource.gated).slice(0, 3).map((resource, index) => (
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
                          View Resource
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      ) : (
                        <span className="text-xs text-gray-500">Available for download</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show there are more resources */}
          <div className="text-center mt-8">
            <Button
              variant="outline"
              onClick={handleGetMoreInfo}
              className="text-blue-600 border-blue-600"
            >
              <Lock className="h-4 w-4 mr-2" />
              View All Resources ({product.resources.length} total)
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Register now to access detailed product information, full resources, and exclusive partner benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={handleGetMoreInfo}
            >
              Register for Full Access
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => setIsAuthModalOpen(true)}
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal
        open={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab="signup"
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default ProductPage;
