import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, FileText, PlayCircle, Download, FileSpreadsheet, Filter } from "lucide-react";
import Footer from "@/components/Footer";
import TrainingPage from "./TrainingPage";
import UseCasesPage from "./UseCasesPage";

const resourceTypes = ["All", "PDF", "Video", "Presentation", "Spreadsheet"];
const categories = ["All", "Sales", "Technical", "Marketing", "Training"];

const resources = [
  {
    title: "Partner Program Overview",
    type: "PDF",
    category: "Sales",
    date: "Aug 15, 2025",
    size: "2.4 MB"
  },
  // Add more resources
];

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState("resources");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || resource.type === selectedType;
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Resource Center</h1>

        <Tabs defaultValue="resources" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="training">Training & Certification</TabsTrigger>
            <TabsTrigger value="usecases">Use Cases</TabsTrigger>
          </TabsList>

          <TabsContent value="resources">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="w-full md:w-auto flex items-center gap-4">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search resources..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <div className="flex items-center gap-2 mr-4">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              {resourceTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  onClick={() => setSelectedType(type)}
                  size="sm"
                >
                  {type}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredResources.map((resource, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      {resource.type === "PDF" && <FileText className="h-8 w-8 text-primary" />}
                      {resource.type === "Video" && <PlayCircle className="h-8 w-8 text-primary" />}
                      {resource.type === "Spreadsheet" && <FileSpreadsheet className="h-8 w-8 text-primary" />}
                      <div>
                        <h3 className="font-medium">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {resource.type} • {resource.category} • {resource.date} • {resource.size}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="training">
            <TrainingPage />
          </TabsContent>

          <TabsContent value="usecases">
            <UseCasesPage />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesPage;