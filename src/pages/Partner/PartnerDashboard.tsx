import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, Users, TrendingUp, Bell, Download, Plus, 
  Send, DollarSign, BookOpen, Headphones, Award,
  BarChart3, Calendar, Mail, Phone
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import LeadRegistrationForm from "./LeadRegistrationForm"; 
import PayoutReports from "./PayoutReports";
import ResourceLibrary from "./ResourceLibrary";
import SupportCenter from "./SupportCenter";

const PartnerDashboard = () => {
  const { currentUser, userRole } = useAuth();
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState('overview');

  // Dashboard stats (you can fetch from API later)
  const stats = {
    totalLeads: 12,
    activeOpportunities: 5,
    monthlyCommissions: 2450,
    resourcesDownloaded: 8
  };

  // Recent activities
  const recentActivities = [
    { type: 'lead', message: 'New lead submitted: Acme Corp', date: '2 hours ago' },
    { type: 'resource', message: 'Downloaded Sales Playbook', date: '1 day ago' },
    { type: 'training', message: 'Completed Product Training Module 1', date: '3 days ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {currentUser?.name?.split(' ')[0]}!
          </h1>
          <p className="text-gray-600">
            {currentUser?.company} • Partner since {new Date(currentUser?.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Leads</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalLeads}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Opportunities</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.activeOpportunities}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Monthly Commission</p>
                  <p className="text-2xl font-bold text-gray-900">${stats.monthlyCommissions}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Download className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Resources Used</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.resourcesDownloaded}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                  onClick={() => setActiveModule('leads')}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Register New Lead
                </Button>
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                  onClick={() => navigate('/products')}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  View Products
                </Button>
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                  onClick={() => setActiveModule('resources')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resources
                </Button>
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                  onClick={() => setActiveModule('support')}
                >
                  <Headphones className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'lead' ? 'bg-green-500' :
                        activity.type === 'resource' ? 'bg-blue-500' : 'bg-purple-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Main Modules */}
          <div className="lg:col-span-2">
            <Tabs value={activeModule} onValueChange={setActiveModule}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="leads">Leads</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="grid gap-6">
                  {/* Lead Pipeline */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Lead Pipeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Qualified Leads</span>
                          <Badge variant="secondary">3 Active</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Proposals Sent</span>
                          <Badge variant="secondary">2 Pending</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Closed Won</span>
                          <Badge variant="default">1 This Month</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Training Progress */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Training Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Product Training</span>
                            <span>75%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Sales Enablement</span>
                            <span>50%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{width: '50%'}}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="leads" className="mt-6">
                <LeadRegistrationForm />
              </TabsContent>

              <TabsContent value="resources" className="mt-6">
                <ResourceLibrary />
              </TabsContent>

              <TabsContent value="reports" className="mt-6">
                <PayoutReports />
              </TabsContent>

              <TabsContent value="support" className="mt-6">
                <SupportCenter />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;
