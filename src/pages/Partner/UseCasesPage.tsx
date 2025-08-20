import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, PlayCircle, Download, Building2 } from "lucide-react";
import Footer from "@/components/Footer";

const industries = [
  {
    name: "Retail",
    icon: Building2,
    pains: [
      "Complex workforce scheduling",
      "High turnover management",
      "Payroll compliance"
    ],
    valueProps: [
      "30% reduction in scheduling errors",
      "25% faster onboarding",
      "98% payroll accuracy"
    ],
    assets: [
      { name: "Retail Demo Script", type: "PDF" },
      { name: "Industry ROI Calculator", type: "Excel" },
      { name: "Customer Success Story", type: "Video" }
    ]
  },
  // Add other industries (Healthcare, Finance, etc.)
];

const UseCasesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Industry Use Cases & Playbooks</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Card key={industry.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <industry.icon className="h-5 w-5 text-primary" />
                  {industry.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Key Pain Points</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {industry.pains.map((pain) => (
                        <li key={pain}>{pain}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Value Props</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {industry.valueProps.map((prop) => (
                        <li key={prop}>{prop}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 space-y-2">
                    {industry.assets.map((asset) => (
                      <Button 
                        key={asset.name}
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                      >
                        {asset.type === "PDF" && <FileText className="h-4 w-4 mr-2" />}
                        {asset.type === "Video" && <PlayCircle className="h-4 w-4 mr-2" />}
                        {asset.type === "Excel" && <Download className="h-4 w-4 mr-2" />}
                        {asset.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UseCasesPage;