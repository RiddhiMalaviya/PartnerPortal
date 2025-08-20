import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Presentation, 
  Swords, 
  Megaphone, 
  Bell, 
  Download, 
  ExternalLink,
  Users
} from "lucide-react";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";

const PartnerDashboard = () => {
  const { userRole } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Panel */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome to Partner Portal</h1>
              <p className="text-muted-foreground mt-2">Access all your partnership resources in one place</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">
                <Bell className="mr-2 h-4 w-4" />
                Updates
              </Button>
              <Button>
                <Users className="mr-2 h-4 w-4" />
                Book a Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Tiles */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <FileText className="h-5 w-5 text-primary mr-2" />
                  Sales Kits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Access product brochures, pricing guides, and proposal templates
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resources
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Swords className="h-5 w-5 text-primary mr-2" />
                  Battlecards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Compare our solutions with competitors and highlight key differentiators
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Battlecards
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Presentation className="h-5 w-5 text-primary mr-2" />
                  Demo Decks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Industry-specific presentation decks and demo scripts
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Get Demo Kits
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Megaphone className="h-5 w-5 text-primary mr-2" />
                  Co-Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Marketing assets, campaigns, and joint promotional materials
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Access Assets
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Recent Updates</h2>
          <div className="space-y-4">
            {[
              {
                date: "Aug 15, 2025",
                title: "New Product Release: ERP Insights v2.0",
                type: "Product Update"
              },
              {
                date: "Aug 10, 2025",
                title: "Updated Battlecards for Healthcare Vertical",
                type: "Sales Resource"
              },
              {
                date: "Aug 5, 2025",
                title: "Q3 Partner Marketing Campaign Materials",
                type: "Marketing"
              }
            ].map((update, index) => (
              <Card key={index}>
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium">{update.title}</p>
                    <p className="text-sm text-muted-foreground">{update.date}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTAs */}
      <section className="py-8 bg-gradient-to-b from-[#007BFF] to-[#4C7CE6] text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Need Support?</h3>
                <p className="text-muted-foreground mb-4">
                  Get help from our partner success team
                </p>
                <Button>Contact Support</Button>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Partner Training</h3>
                <p className="text-muted-foreground mb-4">
                  Access certification courses and training materials
                </p>
                <Button>Start Learning</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerDashboard;