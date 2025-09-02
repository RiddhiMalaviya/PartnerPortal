import { Shield, Users, Zap } from "lucide-react";

export const partnershipData = [
    {
        title: "For Consulting Firms",
        subtitle: "Enhancing Your Client's ERP Success: The Payroll Excellence Opportunity",
        description: "Your exceptional ERP consulting engagements become extraordinary with payroll lifecycle optimization. Enhance your successful ERP implementations with specialized payroll intelligence that amplifies your value proposition.",
        columns: [
            {
                heading: "Strategic Enhancement Opportunity",
                points: [
                    "Comprehensive Business Excellence through trusted ERP expertise",
                    "Lifecycle Partnership Excellence with lasting client relationships",
                    "Strategic Growth Enablement through operational efficiency"
                ]
            },
            {
                heading: "Premier Consulting Solution",
                points: [
                    "Lead the market with exclusive Patent Pending technology",
                    "Create competitive differentiation with breakthrough technology",
                    "Generate premium revenue with high-value analytics services"
                ]
            }
        ],
        iconBgColor: "bg-blue-100",
        iconColor: "text-blue-600",
        icon: Shield,
    },
    {
        title: "For HCM Platform Providers",
        subtitle: "Amplify Your Platform Value: Advanced Payroll Intelligence Integration",
        description: "Transform your HCM platform into a comprehensive payroll intelligence powerhouse. Integrate cutting-edge root cause analysis capabilities that provide unmatched value to your enterprise clients.",
        columns: [
            {
                heading: "Platform Enhancement Benefits",
                points: [
                    "Seamless API integration with existing HCM infrastructure",
                    "Enhanced platform differentiation in competitive market",
                    "Increased client retention through advanced analytics"
                ]
            },
            {
                heading: "Revenue Growth Opportunities",
                points: [
                    "Premium module pricing for advanced analytics",
                    "Attract enterprise clients seeking payroll intelligence",
                    "Recurring revenue through subscription-based analytics"
                ]
            }
        ],
        iconBgColor: "bg-purple-100",
        iconColor: "text-purple-600",
        icon: Zap
    },
    {
        title: "For Managed Service Providers",
        subtitle: "Elevate Service Excellence: Proactive Payroll Intelligence Solutions",
        description: "Transform reactive support into proactive intelligence services. Deliver unprecedented value to your managed service clients with predictive payroll analytics that prevent issues before they occur.",
        columns: [
            {
                heading: "Service Enhancement Value",
                points: [
                    "Proactive issue identification and resolution",
                    "Reduced client escalations and support tickets",
                    "Enhanced client satisfaction and retention"
                ]
            },
            {
                heading: "Business Growth Benefits",
                points: [
                    "Premium service tier opportunities",
                    "Competitive advantage in managed services market",
                    "Increased contract values and profit margins"
                ]
            }
        ],
        iconBgColor: "bg-green-100",
        iconColor: "text-green-600",
        icon: Users
    }
];
