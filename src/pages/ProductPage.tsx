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
  Lock,
  Target
} from 'lucide-react';
import { products } from '@/data/products';
import AuthModal from '@/components/auth/AuthModal';
import { Chip } from '@heroui/react';

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Section: 60% width */}
          <div className="lg:w-3/5 space-y-8">
            {/* Product Header */}
            <div>
              <Badge variant="secondary" className="mb-4">
                {product.category}
              </Badge>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              <h2 className="text-lg sm:text-xl text-blue-600 mb-6 font-medium">
                {product.tagline}
              </h2>

              <p className="text-gray-700 mb-8 leading-relaxed text-base sm:text-lg">
                {product.description}
              </p>
            </div>

            {/* Business Overview Section */}
            <div className="p-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Overview</h2>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                {product.overview}
              </p>

              {/* Key Pain Points Solved */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Pain Points Solved</h3>
                <div className="space-y-3">
                  {product.painPoints.slice(0,6).map((painPoint, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{painPoint}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Who Benefits</h3>
                <div className="flex flex-wrap gap-3">
                  {product.beneficiaries.slice(0,6).map((benefit, index) => (
                    <Chip
                      key={index}
                      size="sm"
                      variant="solid"
                      className="bg-gray-500 text-white px-3 py-1"
                    >
                      {benefit}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: 40% width */}
          <div className="lg:w-2/5 space-y-6 lg:sticky lg:top-8 lg:self-start">
            
            {/* Video Demo Section */}
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
                  <div className="text-center p-6">
                    <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Demo video available
                    </p>
                  </div>
                )}
              </div>
            </Card>

            {/* Product Overview DOC Card */}
            <Card 
              className="p-6 cursor-pointer hover:shadow-lg transition-shadow border border-gray-200"
              onClick={() => {
                const resource = product.resources[0];
                if (resource?.gated) {
                  setIsAuthModalOpen(true);
                } else {
                  window.open(resource?.urls || '#', '_blank');
                }
              }}
            >
              <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
                Product Overview DOC
              </h3>
              
              <div className="flex flex-col items-center">
                {/* PDF Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>

                {/* File Info */}
                <h4 className="font-semibold text-lg text-gray-900 mb-1">
                  {product.resources[0]?.title || 'file'}
                </h4>

                <p className="text-sm text-gray-600 mb-6">
                  {product.resources[0]?.type || 'pdf'}
                </p>

                {/* Action Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  {product.resources[0]?.gated ? "Partner Access" : "Download"}
                </Button>
              </div>
            </Card>

          </div>
        </div>
      </main>

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
              className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsAuthModalOpen(true)}
            >
              Register for Full Access
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => navigate('/contact')}
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
      />
    </div>
  );
};
export default ProductPage;
