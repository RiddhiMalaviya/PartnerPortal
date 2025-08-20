import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Video, Presentation } from "lucide-react";
import Footer from "@/components/Footer";

const assetCategories = {
  sales: [
    { 
      title: "Partner Program Overview",
      type: "PDF",
      version: "2.1",
      date: "Aug 15, 2025",
      size: "2.4 MB",
      url: "#"
    },
    { 
      title: "Solution Sales Playbook",
      type: "PPTX",
      version: "3.0",
      date: "Aug 10, 2025",
      size: "5.1 MB",
      url: "#"
    }
  ],
  technical: [
    {
      title: "Technical Implementation Guide",
      type: "PDF",
      version: "4.2",
      date: "Aug 12, 2025",
      size: "3.7 MB",
      url: "#"
    },
    {
      title: "API Documentation",
      type: "PDF",
      version: "2.0",
      date: "Aug 8, 2025",
      size: "1.8 MB",
      url: "#"
    }
  ],
  marketing: [
    {
      title: "Partner Marketing Kit",
      type: "ZIP",
      version: "1.5",
      date: "Aug 14, 2025",
      size: "15.2 MB",
      url: "#"
    },
    {
      title: "Brand Guidelines",
      type: "PDF",
      version: "2.3",
      date: "Aug 5, 2025",
      size: "4.2 MB",
      url: "#"
    }
  ]
};

const EnablementPage = () => {
  const [activeTab, setActiveTab] = useState("sales");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Partner Enablement Hub</h1>
        
        <Tabs defaultValue="sales" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="sales">Sales Enablement</TabsTrigger>
            <TabsTrigger value="technical">Technical Resources</TabsTrigger>
            <TabsTrigger value="marketing">Marketing Assets</TabsTrigger>
          </TabsList>

          {Object.entries(assetCategories).map(([category, assets]) => (
            <TabsContent key={category} value={category} className="space-y-4">
              {assets.map((asset, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      {asset.type === "PDF" ? (
                        <FileText className="h-8 w-8 text-primary" />
                      ) : asset.type === "PPTX" ? (
                        <Presentation className="h-8 w-8 text-primary" />
                      ) : (
                        <Video className="h-8 w-8 text-primary" />
                      )}
                      <div>
                        <h3 className="font-medium">{asset.title}</h3>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>Version {asset.version}</span>
                          <span>{asset.date}</span>
                          <span>{asset.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default EnablementPage;