import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Users, Settings, Zap, Shield, TrendingUp, Eye, Download, PlayCircle } from 'lucide-react';
import { FaUserCheck } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { useAuth } from '@/context/AuthContext';

interface ProductSwiperProps {
    onProductClick?: (productId: string) => void;
    showPricing?: boolean;
    slug?: string; // Made optional since it's not used in the component
}

const ProductSwiper: React.FC<ProductSwiperProps> = ({
    onProductClick,
    showPricing = true
}) => {
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
    const navigate = useNavigate();
    const { userRole } = useAuth();

    // const handleProductAction = (productId: string, action: string) => {
    //     if (action === 'learn-more') {
    //         const product = products.find(p => p.id === productId);
    //         if (product && product.slug) {
    //             if (userRole) {
    //                 navigate(`/products/${product.slug}`); // User is logged in - go to full ProductDetail page
    //             } else {
    //                 navigate(`/product/${product.slug}`); // User is not logged in - go to limited ProductPage
    //             }
    //         } else {
    //             console.error('Product or slug not found for id:', productId);
    //         }
    //     } else {
    //         console.log(`${action} for product:`, productId);
    //         onProductClick?.(productId);
    //     }
    // };
    // In ProductSwiper.tsx - add temporary debugging
    const handleProductAction = (productId: string, action: string) => {
        console.log('User Role:', userRole); // Should show "partner" when logged in
        console.log('Product Action:', action, 'Product ID:', productId);

        if (action === 'learn-more') {
            const product = products.find(p => p.id === productId);
            if (product && product.slug) {
                const targetPath = userRole ? `/products/${product.slug}` : `/product/${product.slug}`;
                console.log('Navigating to:', targetPath);
                navigate(targetPath);
            }
        }
    };

    return (
        <div className="w-full py-8">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                className="product-swiper"
            >
                {products.map((product) => {
                    const IconComponent = product.icon;
                    const isHovered = hoveredProduct === product.id;

                    return (
                        <SwiperSlide key={product.id}>
                            <Card
                                className={`h-full transition-all duration-500 cursor-pointer group ${isHovered
                                    ? 'shadow-2xl scale-105 bg-gradient-to-br from-white to-gray-50'
                                    : 'shadow-lg hover:shadow-xl'
                                    }`}
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                {/* Product Header */}
                                <CardHeader className="relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-10`} />
                                    <div className="relative z-10 flex items-start justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className={`p-3 rounded-lg bg-gradient-to-r ${product.color} text-white`}>
                                                <IconComponent className="h-6 w-6" />
                                            </div>
                                            <div>
                                                {/* <Badge variant="secondary" className="mb-2">
                                                    {product.category}
                                                </Badge> */}
                                                <CardTitle className="text-xl font-bold text-gray-900">
                                                    {product.title}
                                                </CardTitle>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                        {product.description}
                                    </p>
                                </CardHeader>

                                {/* Product Content - Shows on Hover */}
                                <CardContent className="space-y-4">
                                    <div className={`transition-all duration-500 ${isHovered
                                        ? 'opacity-100 max-h-96 transform translate-y-0'
                                        : 'opacity-0 max-h-0 transform translate-y-4 overflow-hidden'
                                        }`}>
                                        {/* Features */}
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-gray-900 flex items-center">
                                                <Settings className="h-4 w-4 mr-2 text-blue-600" />
                                                Key Features
                                            </h4>
                                            <ul className="space-y-1">
                                                {product.keyFeatures.slice(0, 3).map((feature, index) => (
                                                    <li key={index} className="text-sm text-gray-600 flex items-center">
                                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Benefits */}
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-gray-900 flex items-center">
                                                <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                                                Benefits
                                            </h4>
                                            <ul className="space-y-1">
                                                {product.beneficiaries.slice(0, 2).map((benefit, index) => (
                                                    <li key={index} className="text-sm text-gray-600 flex items-center">
                                                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Pricing & Stats */}
                                        {showPricing && (
                                            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                                <div>
                                                    <p className="text-xs text-gray-500">
                                                        {product.clients}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Action Buttons */}
                                        <div className="flex space-x-2 pt-3">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => handleProductAction(product.id, 'learn-more')}
                                                className="w-full text-blue-600 hover:text-blue-700"
                                            >
                                                Learn More
                                                <ArrowRight className="h-3 w-3 ml-1" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Always Visible Bottom Section */}
                                    <div className="pt-4 border-t border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <div className="flex -space-x-1">
                                                    {[1, 2, 3].map((i) => (
                                                        <div
                                                            key={i}
                                                            className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center"
                                                        >
                                                            <FaUserCheck className="text-blue-400 text-xs" />
                                                        </div>
                                                    ))}
                                                </div>
                                                <span className="text-xs text-gray-500">
                                                    Trusted by enterprises
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default ProductSwiper;
