/* Enhanced ProductDetail Page UI */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  Video,
  Target,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import AuthModal from "@/components/auth/AuthModal";
import { products } from "@/data/products";

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { userRole } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const product = slug ? products.find((p) => p.slug === slug) : null;

  useEffect(() => {
    if (!product) navigate("/");
  }, [product, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const handleGetMoreInfo = () => {
    window.location.href = "mailto:info@pclnxai.com";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge variant="secondary" className="text-sm mb-4">
                {product.category}
              </Badge>

              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-blue-600 mb-6 font-medium">
                {product.tagline}
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                {product.description}
              </p>

              {/* Key Pain Points */}
              <div className="mb-8 bg-gray-50 rounded-xl p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Pain Points Solved
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.painPoints.slice(0, 6).map((painPoint, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 text-gray-700"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{painPoint}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              {/* <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:scale-105 transition"
                  onClick={() => navigate("/contact")}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Sales
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition"
                  onClick={handleGetMoreInfo}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get More Info
                </Button>
              </div> */}
            </div>

            {/* Right Video/Image */}
            <Card className="overflow-hidden shadow-lg rounded-2xl">
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
                  </video>
                ) : product.image ? (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-8">
                    <Video className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Product Demo Coming Soon</p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">
          {/* Left Main Content */}
          <div className="col-span-12 lg:col-span-8 space-y-12">
            {/* Business Overview */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Business Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.overview}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Key Business Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {product.keyFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-blue-50 border border-gray-200 shadow-sm hover:shadow-md transition rounded-xl"
                  >
                    <CardContent className="p-4 flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <span className="text-sm text-gray-700 leading-tight">
                        {feature}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Who Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Who Benefits
              </h2>
              <div className="flex flex-wrap gap-3">
                {product.beneficiaries.map((benefit, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="p-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Use Cases</h2>
              <div className="space-y-6">
                {product.useCases.map((useCase, index) => (
                  <Card key={index} className="border border-gray-200">
                    <CardContent className="p-1">
                      <div className="flex items-start space-x-4">
                        <Target className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-3 text-blue-600">
                            {useCase.industry}
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">Scenario</h4>
                              <p className="text-gray-600 leading-relaxed">{useCase.scenario}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-green-800 mb-2">Impact Delivered</h4>
                              <p className="text-green-700 font-medium leading-relaxed">{useCase.impact}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Resources (30%) */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-8">
              <Card className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources</h2>
                <div className="space-y-4">
                  {product.resources.map((resource, index) => (
                    <div key={index} >
                      {resource.urls && resource.urls !== "#" ? (
                        <a
                          href={resource.urls}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-gray-500 hover:text-blue-500 transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            {/* <FileText className="h-4 w-4 flex-shrink-0" /> */}
                            <span className="font-medium hover:underline hover:text-blue-500">
                              {resource.title}
                            </span>
                          </div>
                        </a>
                      ) : (
                        <div className="text-gray-500">
                          <div className="flex items-center space-x-2">
                            {/* <FileText className="h-4 w-4 flex-shrink-0" /> */}
                            <span className="font-medium hover:text-blue-500">
                              {resource.title}
                            </span>
                          </div>
                          {/* <p className="text-sm text-gray-600 mt-1 ml-6">
                              {resource.type} • {resource.gated ? "Partner Access Required" : "Coming Soon"}
                            </p> */}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Interested in {product.title}?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact our team to learn more about how this solution can transform
            your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition"
              onClick={() => navigate("/contact")}
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Sales
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition"
              onClick={handleGetMoreInfo}
            >
              <Mail className="h-5 w-5 mr-2" />
              Request Info
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
