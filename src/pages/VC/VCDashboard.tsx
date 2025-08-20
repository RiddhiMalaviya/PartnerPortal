import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  BarChart3, 
  Briefcase, 
  PlusCircle, 
  Eye, 
  Settings,
  Bell,
  Calendar
} from 'lucide-react';

const VCDashboard = () => {
  const { userRole, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole !== 'vc_admin') {
      navigate('/');
    }
  }, [userRole, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/vc-homepage');
  };

  if (userRole !== 'vc_admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logout */}
      {/* <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">VC Dashboard</h1>
              <p className="text-gray-600">Welcome to your venture capital portal</p>
            </div>
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto px-4 py-8">
        {/* Hero Panel with Shortcuts */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 mb-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Quick Actions</h2>
              <p className="text-blue-100">Access your most used features</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" size="sm" className="flex items-center gap-2">
                <PlusCircle size={16} />
                New Investment
              </Button>
              <Button variant="secondary" size="sm" className="flex items-center gap-2">
                <Eye size={16} />
                Review Deals
              </Button>
              <Button variant="secondary" size="sm" className="flex items-center gap-2">
                <Calendar size={16} />
                Schedule Meeting
              </Button>
              <Button variant="secondary" size="sm" className="flex items-center gap-2">
                <Settings size={16} />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Main 3 Tiles - KPIs, Market, Products */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* KPIs Tile */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="text-blue-600" size={24} />
                Key Performance Indicators
              </CardTitle>
              <CardDescription>Your portfolio performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Total Portfolio Value</p>
                  <p className="text-xl font-bold text-green-600">$24.5M</p>
                </div>
                <TrendingUp className="text-green-600" size={24} />
              </div>
              
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Active Investments</p>
                  <p className="text-xl font-bold text-blue-600">12</p>
                </div>
                <Briefcase className="text-blue-600" size={24} />
              </div>
              
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">IRR</p>
                  <p className="text-xl font-bold text-purple-600">22.3%</p>
                </div>
                <DollarSign className="text-purple-600" size={24} />
              </div>
            </CardContent>
          </Card>

          {/* Market Tile */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="text-green-600" size={24} />
                Market Insights
              </CardTitle>
              <CardDescription>Latest market trends and opportunities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Hot Sectors</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">AI/ML</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">FinTech</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">CleanTech</span>
                </div>
              </div>
              
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Market Valuation</h4>
                <p className="text-2xl font-bold text-gray-900">$2.1T</p>
                <p className="text-xs text-green-600">+12% from last quarter</p>
              </div>
              
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold text-sm mb-2">New Opportunities</h4>
                <p className="text-lg font-semibold text-blue-600">47</p>
                <p className="text-xs text-gray-600">This month</p>
              </div>
            </CardContent>
          </Card>

          {/* Products Tile */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-indigo-600" size={24} />
                Portfolio Companies
              </CardTitle>
              <CardDescription>Your current investments overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-semibold text-sm">TechStart AI</p>
                  <p className="text-xs text-gray-600">Series A • AI/ML</p>
                </div>
                <span className="text-green-600 text-sm font-semibold">+24%</span>
              </div>
              
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-semibold text-sm">FinFlow Pro</p>
                  <p className="text-xs text-gray-600">Seed • FinTech</p>
                </div>
                <span className="text-green-600 text-sm font-semibold">+18%</span>
              </div>
              
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-semibold text-sm">GreenEnergy Co</p>
                  <p className="text-xs text-gray-600">Series B • CleanTech</p>
                </div>
                <span className="text-red-600 text-sm font-semibold">-5%</span>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                View All Companies
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Updates Feed */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="text-orange-600" size={24} />
              Recent Updates
            </CardTitle>
            <CardDescription>Latest news and updates from your portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 border-l-4 border-blue-500 bg-blue-50">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-sm">TechStart AI closes $2M funding round</p>
                  <p className="text-xs text-gray-600 mb-1">2 hours ago</p>
                  <p className="text-sm text-gray-700">Completed oversubscribed Series A round led by top-tier VC firm.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-3 border-l-4 border-green-500 bg-green-50">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-sm">FinFlow Pro launches new product</p>
                  <p className="text-xs text-gray-600 mb-1">1 day ago</p>
                  <p className="text-sm text-gray-700">Successfully launched mobile app with 10K+ downloads in first week.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-3 border-l-4 border-purple-500 bg-purple-50">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-sm">New investment opportunity in AI sector</p>
                  <p className="text-xs text-gray-600 mb-1">3 days ago</p>
                  <p className="text-sm text-gray-700">Promising startup in computer vision space seeking Series A funding.</p>
                </div>
              </div>
            </div>
            
            <Button variant="outline" size="sm" className="w-full mt-4">
              View All Updates
            </Button>
          </CardContent>
        </Card>

        {/* Footer CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Discover New Opportunities</h3>
              <p className="text-blue-100 mb-4">Browse our curated list of investment-ready startups</p>
              <Button variant="secondary" size="sm">
                Explore Deals
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Portfolio Analytics</h3>
              <p className="text-green-100 mb-4">Deep dive into your investment performance metrics</p>
              <Button variant="secondary" size="sm">
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VCDashboard;
