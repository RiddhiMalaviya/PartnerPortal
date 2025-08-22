import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Globe, 
  Shield, 
  Zap,
  Calendar,
  MapPin,
  CheckCircle
} from "lucide-react";

const About = () => {
  const stats = [
    { label: "Global Partners", value: "2,500+", icon: Users },
    { label: "Countries Served", value: "45+", icon: Globe },
    { label: "Years of Experience", value: "15+", icon: Calendar },
    { label: "Client Success Rate", value: "98%", icon: TrendingUp }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Enterprise-grade security with SOC 2 compliance and data protection at every level."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Cutting-edge AI and machine learning technologies to stay ahead of market trends."
    },
    {
      icon: Users,
      title: "Partner Success",
      description: "Dedicated to our partners' growth with comprehensive support and resources."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Proven methodologies that deliver measurable business outcomes for clients."
    }
  ];

  const timeline = [
    {
      year: "2009",
      title: "Founded",
      description: "Started with a vision to transform HR and ERP processes"
    },
    {
      year: "2015",
      title: "Partner Program Launch",
      description: "Introduced our first partner certification program"
    },
    {
      year: "2019",
      title: "AI Integration",
      description: "Launched AI-powered analytics and automation features"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Reached 2000+ partners across 40+ countries"
    },
    {
      year: "2024",
      title: "Next-Gen Platform",
      description: "Unveiled our cloud-native, fully integrated platform"
    }
  ];

  const leadership = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "15+ years in enterprise software, former VP at Oracle",
      image: "https://images.unsplash.com/photo-1494790108755-2616b723b92e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Expert in AI/ML, previously lead architect at Salesforce",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "VP of Partnerships",
      bio: "Built partner ecosystems at Microsoft and AWS",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const achievements = [
    "ISO 27001 Certified Security",
    "SOC 2 Type II Compliant",
    "99.9% Platform Uptime",
    "24/7 Global Support",
    "Multi-language Support",
    "GDPR Compliant"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
                About PCLnXAI
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Transforming Business Through 
                <span className="text-blue-600"> Innovation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We empower organizations worldwide with cutting-edge HR and ERP solutions, 
                backed by AI-driven insights and a thriving partner ecosystem of over 2,500 partners.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Trusted by Fortune 500</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Global Presence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Driving digital transformation through innovative solutions and strategic partnerships
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To democratize enterprise-grade HR and ERP solutions by empowering partners 
                  with the tools, knowledge, and support they need to deliver exceptional 
                  value to their clients worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the world's most trusted partner ecosystem for HR and ERP solutions, 
                  enabling businesses of all sizes to achieve operational excellence through 
                  innovation and collaboration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From startup to industry leader - here's how we've grown over the years
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300 hidden md:block" />
            
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                } justify-center`}>
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                  } text-center`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-2 bg-blue-50 text-blue-700">
                          {event.year}
                        </Badge>
                        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-600 text-sm">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced leaders driving our vision forward and shaping the future of enterprise solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 rounded-full bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trust & Compliance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of security, compliance, and operational excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-blue-100 mb-8">
            Have questions about our solutions or want to learn more about partnership opportunities?
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-2">Headquarters</h3>
              <p className="text-blue-100 text-sm">
                San Francisco, CA<br />
                New York, NY<br />
                London, UK
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-2">Global Presence</h3>
              <p className="text-blue-100 text-sm">
                45+ Countries<br />
                2,500+ Partners<br />
                24/7 Support
              </p>
            </div>
            <div className="text-center">
              <Building2 className="h-8 w-8 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-2">Industries Served</h3>
              <p className="text-blue-100 text-sm">
                Healthcare<br />
                Finance<br />
                Retail & More
              </p>
            </div>
          </div>
          
          <p className="text-blue-100">
            {/* Ready to transform your business? Contact us at <strong>info@pclnxai.com</strong> */}
            Ready to transform your business? Contact us at <a href="mailto:info@pclnxai.com" className="hover:underline" target="_blank" rel="noreferrer noopener">info@pclnxai.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
