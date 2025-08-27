import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Video, Download, File, Presentation, BookOpen } from 'lucide-react';

const resources = [
  {
    id: '1',
    title: 'Partner Program Overview',
    category: 'Sales',
    type: 'PDF',
    size: '2.4 MB',
    date: 'Aug 15, 2025',
    url: '/assets/partner-program-overview.pdf',
    icon: FileText,
    description: 'Complete overview of partnership benefits and requirements'
  },
  {
    id: '2',
    title: 'Product Demo Videos',
    category: 'Training',
    type: 'Video',
    size: '150 MB',
    date: 'Aug 12, 2025',
    url: '/assets/product-demo-videos.zip',
    icon: Video,
    description: 'Comprehensive product demonstration videos for all solutions'
  },
  {
    id: '3',
    title: 'Sales Playbook',
    category: 'Sales',
    type: 'PPTX',
    size: '5.1 MB',
    date: 'Aug 10, 2025',
    url: '/assets/sales-playbook.pptx',
    icon: Presentation,
    description: 'Step-by-step sales methodology and best practices'
  },
  {
    id: '4',
    title: 'Marketing Kit',
    category: 'Marketing',
    type: 'ZIP',
    size: '15.2 MB',
    date: 'Aug 8, 2025',
    url: '/assets/marketing-kit.zip',
    icon: Download,
    description: 'Brand guidelines, logos, brochures, and marketing materials'
  },
  {
    id: '5',
    title: 'Technical Implementation Guide',
    category: 'Technical',
    type: 'PDF',
    size: '3.7 MB',
    date: 'Aug 5, 2025',
    url: '/assets/technical-guide.pdf',
    icon: BookOpen,
    description: 'Technical documentation and implementation guidelines'
  },
  {
    id: '6',
    title: 'Competitive Battlecards',
    category: 'Sales',
    type: 'PDF',
    size: '1.8 MB',
    date: 'Aug 3, 2025',
    url: '/assets/battlecards.pdf',
    icon: File,
    description: 'Competitive comparison and objection handling guide'
  }
];

const ResourceLibrary = () => {
  const handleDownload = (resource: any) => {
    // In production, you would handle actual file download
    window.open(resource.url, '_blank');
    
    // Track download for analytics
    console.log(`Downloaded: ${resource.title}`);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Sales': return 'bg-green-100 text-green-800';
      case 'Marketing': return 'bg-purple-100 text-purple-800';
      case 'Technical': return 'bg-blue-100 text-blue-800';
      case 'Training': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Download className="h-5 w-5 mr-2" />
            Resource Library
          </CardTitle>
          <p className="text-gray-600 text-sm">
            Access sales materials, marketing resources, and technical documentation
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.id} className="border hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      {/* Icon */}
                      <div className="p-3 bg-blue-100 rounded-full mb-4">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                      
                      {/* Category Badge */}
                      <Badge className={`${getCategoryColor(resource.category)} mb-3`}>
                        {resource.category}
                      </Badge>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {resource.description}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="text-xs text-gray-500 mb-4 space-y-1">
                        <p>{resource.type} • {resource.size}</p>
                        <p>Updated: {resource.date}</p>
                      </div>
                      
                      {/* Download Button */}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDownload(resource)}
                        className="w-full hover:bg-blue-50"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{resources.length}</p>
            <p className="text-sm text-gray-600">Total Resources</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">
              {resources.filter(r => r.category === 'Sales').length}
            </p>
            <p className="text-sm text-gray-600">Sales Materials</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">
              {resources.filter(r => r.category === 'Marketing').length}
            </p>
            <p className="text-sm text-gray-600">Marketing Assets</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">
              {resources.filter(r => r.category === 'Training').length}
            </p>
            <p className="text-sm text-gray-600">Training Materials</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResourceLibrary;
