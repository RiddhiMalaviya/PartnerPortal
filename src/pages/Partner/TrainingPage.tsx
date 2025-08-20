import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Download, Play, Trophy, BookOpen } from "lucide-react";
import Footer from "@/components/Footer";

const TrainingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Training & Certification</h1>

        {/* Onboarding Track */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Partner Onboarding</h2>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Getting Started Track</span>
                  <Badge variant="secondary">Required</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={33} className="mb-2" />
                  <p className="text-sm text-muted-foreground mb-4">1 of 3 modules completed</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Platform Overview', 'Partner Benefits', 'Success Metrics'].map((module, i) => (
                      <Button key={i} variant="outline" className="justify-start">
                        <Play className="h-4 w-4 mr-2" />
                        {module}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Role-based Tracks */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Role-based Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Sales Certification",
                progress: 0,
                modules: 5,
                icon: Trophy
              },
              {
                title: "Technical Certification",
                progress: 0,
                modules: 7,
                icon: BookOpen
              }
            ].map((track, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <track.icon className="h-5 w-5 mr-2 text-primary" />
                    {track.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={track.progress} className="mb-2" />
                  <p className="text-sm text-muted-foreground mb-4">
                    {track.modules} modules • Estimated 4 hours
                  </p>
                  <Button variant="outline" className="w-full">
                    Start Track
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Completed Certifications */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Your Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Partner Foundations", date: "Aug 15, 2025" }
            ].map((cert, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <Trophy className="h-12 w-12 mx-auto text-primary" />
                    <div>
                      <h3 className="font-medium">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">Completed {cert.date}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TrainingPage;