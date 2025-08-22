import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { ArrowRight, Download, Play, Users, TrendingUp, Target, FileText } from "lucide-react";
import Footer from "@/components/Footer";

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-primary mb-6 font-medium">
                {product.tagline}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-dark">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Product Tour
                </Button>
                <Button size="lg" variant="outline">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div> */}
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                {product.video ? (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  >
                    <source src={product.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Business Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {product.overview}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Key Pain Points Solved</h3>
                <ul className="space-y-3">
                  {product.painPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Who Benefits</h3>
                <div className="flex flex-wrap gap-2">
                  {product.beneficiaries.map((role, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      <Users className="mr-1 h-3 w-3" />
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-5 w-5 text-primary" />
                    Available Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* {(product.resources || []).map((resource, index) => (
                    <div key={index}>
                      <div className="text-sm font-medium text-muted-foreground">{resource.title}</div>
                      <p className="text-xs text-muted-foreground mb-2">{resource.type}</p>
                    </div>
                  ))} */}
                  <div>
                    {/* <div className="text-sm font-medium text-muted-foreground">Sales Enablement</div> */}
                    <ul className="mt-2 space-y-2">
                      <li className="hover:text-primary transition-colors">
                        <a href="https://pclnxai.com/wp-content/uploads/2025/04/OnePager-PCL-nXAI-Payroll-Intelligence-for-CFO.pdf"
                          className="hover:underline inline-block w-full"
                        >Product One-Pagers (Persona-specific)</a>
                      </li>
                      <li className="hover:text-primary transition-colors">Proposal Deck</li>
                      <li className="hover:text-primary transition-colors">Demo Decks (Modular, vertical-specific)</li>
                      <li className="hover:text-primary transition-colors">
                        <a href="https://pclnxai.com/wp-content/uploads/2025/04/Battlecard-PCL-nXAI-vs-Power-BI-Internal-Team.docx"
                          className="hover:underline inline-block w-full"
                        >BaBattlecards (e.g., OTBI vs. PCL nXAI, BI Teams vs. PCL)</a>
                      </li>
                    </ul>
                    {/* <div className="text-lg font-semibold text-foreground">{product.marketOpportunity.tam}</div> */}
                  </div>
                  <div>
                    {/* <div className="text-sm font-medium text-muted-foreground">Technical Resources</div> */}
                    <ul className="mt-2 space-y-2">
                      <li className="hover:text-primary transition-colors">Solution Sheets</li>
                      <li className="hover:text-primary transition-colors">Use Cases</li>
                      <li className="hover:text-primary transition-colors">Industry Packs (Retail, Healthcare, Pharma Finance)</li>
                      <li className="hover:text-primary transition-colors">Pricing & Packaging Playbook</li>
                      <li className="hover:text-primary transition-colors">
                        <a href="https://pclnxai.com/wp-content/uploads/2025/04/Payroll-Variance-recording-final-1-1.mp4"
                          className="hover:underline inline-block w-full"
                        >Product Video Recording</a>
                      </li>
                    </ul>
                    {/* <div className="text-lg font-semibold text-foreground">25 Days Average</div> */}
                  </div>
                  {/* <div>
                    <div className="text-sm font-medium text-muted-foreground">ROI Timeline</div>
                    <div className="text-lg font-semibold text-foreground">3-6 Months</div>
                  </div> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Key Business Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.keyFeatures.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases & Impact */}
      {/* <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Use Cases & Impact</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {product.useCases.map((useCase, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{useCase.industry}</CardTitle>
                  <CardDescription className="text-base">
                    {useCase.scenario}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-l-4 border-success pl-4">
                    <div className="text-sm font-medium text-success mb-1">Impact Delivered</div>
                    <div className="text-foreground">{useCase.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Market Opportunity */}
      {/* <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Market Opportunity</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-sm font-medium text-muted-foreground">TAM</div>
                      <div className="text-lg font-bold text-primary">{product.marketOpportunity.tam}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-sm font-medium text-muted-foreground">SAM</div>
                      <div className="text-lg font-bold text-primary">{product.marketOpportunity.sam}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-sm font-medium text-muted-foreground">SOM</div>
                      <div className="text-lg font-bold text-primary">{product.marketOpportunity.som}</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Growth Trends</h3>
              <ul className="space-y-3 mb-6">
                {product.marketOpportunity.growthTrends.map((trend, index) => (
                  <li key={index} className="flex items-start">
                    <TrendingUp className="mr-2 h-4 w-4 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{trend}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Why Now?</h3>
              <ul className="space-y-3">
                {product.marketOpportunity.whyNow.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Resources */}
      {/* <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Resources & Downloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.resources.map((resource, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.type}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    {resource.gated ? "Partner Access" : "Download"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default ProductPage;