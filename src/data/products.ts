import { ArrowRight, BarChart3, Users, Settings, Zap, Shield, TrendingUp, Eye, Download, PlayCircle } from 'lucide-react';
export interface Product {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  video: string;
  slug: string;
  icon: React.ElementType;
  color: string;
  clients?: string;
  category: string;
  overview: string;
  painPoints: string[];
  beneficiaries: string[];
  keyFeatures: string[];
  useCases: Array<{
    industry: string;
    scenario: string;
    impact: string;
  }>;
  marketOpportunity: {
    tam: string;
    sam: string;
    som: string;
    growthTrends: string[];
    whyNow: string[];
  };
  competitiveAdvantage: Array<{
    feature: string;
    competitor: string;
    ourSolution: string;
  }>;
  resources: Array<{
    title: string;
    type: string;
    gated: boolean;
    urls: string;
  }>;
}

export const products: Product[] = [
  {
    id: "payroll-variance",
    title: "Payroll Variance Analysis",
    tagline: "Real-time payroll discrepancy detection and compliance assurance",
    description: "Gain real-time visibility into payroll discrepancies, automate variance detection, and ensure compliance before payroll finalizes.",
    image: "/assets/payroll-variance.jpg",
    video: "/assets/videoplayback.mp4",
    slug: "payroll-variance-analysis",
    icon: BarChart3,
    color: 'from-blue-500 to-blue-700',
    clients: '500+ Companies',
    category: "Analytics",
    overview: "Payroll Variance Analysis transforms how organizations manage payroll accuracy by providing real-time detection of discrepancies before they impact your bottom line. Our intelligent system continuously monitors payroll data, identifies anomalies, and ensures regulatory compliance across all jurisdictions.",
    painPoints: [
      "Manual payroll reconciliation consuming 40+ hours per pay period",
      "Late discovery of payroll errors resulting in costly corrections",
      "Compliance violations due to oversight in complex regulations",
      "Lack of visibility into payroll trends and patterns"
    ],
    beneficiaries: ["Payroll Managers", "CFOs", "HR Directors", "Compliance Officers"],
    keyFeatures: [
      "Real-time variance detection with instant alerts",
      "Automated compliance checking across multiple jurisdictions",
      "Predictive analytics for payroll trend identification",
      "Seamless integration with existing HRIS systems",
      "Comprehensive audit trails for regulatory reporting",
      "Mobile dashboard for on-the-go monitoring",
      "Customizable approval workflows"
    ],
    useCases: [
      {
        industry: "Healthcare",
        scenario: "Multi-state hospital system with 15,000+ employees and complex shift differentials",
        impact: "Reduced payroll processing time by 65% and eliminated $2.3M in annual overpayments"
      },
      {
        industry: "Retail",
        scenario: "National retailer managing seasonal workforce fluctuations and varying state regulations",
        impact: "Achieved 99.8% payroll accuracy and reduced compliance violations by 90%"
      },
      {
        industry: "Manufacturing",
        scenario: "Industrial company with union contracts and overtime complexity",
        impact: "Streamlined payroll operations saving 200+ hours monthly in manual reconciliation"
      }
    ],
    marketOpportunity: {
      tam: "$12.8B Global Payroll Software Market",
      sam: "$4.2B US Enterprise Payroll Market",
      som: "$850M Addressable Market Segment",
      growthTrends: [
        "15.2% CAGR in payroll automation solutions",
        "Growing demand for compliance automation",
        "Increased focus on real-time financial visibility"
      ],
      whyNow: [
        "Remote workforce increasing payroll complexity",
        "Stricter regulatory compliance requirements",
        "Rising labor costs demanding accuracy"
      ]
    },
    competitiveAdvantage: [
      {
        feature: "Real-time Detection",
        competitor: "End-of-cycle reporting",
        ourSolution: "Instant variance alerts during payroll processing"
      },
      {
        feature: "Predictive Analytics",
        competitor: "Historical reporting only",
        ourSolution: "AI-powered trend prediction and anomaly detection"
      },
      {
        feature: "Multi-jurisdiction Compliance",
        competitor: "Manual compliance checking",
        ourSolution: "Automated compliance validation across all jurisdictions"
      }
    ],
    resources: [
      { title: "Product One-Pagers (Persona-specific)", type: "PDF", gated: false, urls: "https://pclnxai.com/wp-content/uploads/2025/04/OnePager-PCL-nXAI-Payroll-Intelligence-for-CFO.pdf" },
      { title: "Proposal Deck", type: "Tool", gated: false, urls: "#" },
      { title: "Demo Decks (Modular, vertical-specific)", type: "PDF", gated: true, urls: "#" },
      { title: "BaBattlecards (e.g., OTBI vs. PCL nXAI, BI Teams vs. PCL)", type: "PDF", gated: true, urls: "https://pclnxai.com/wp-content/uploads/2025/04/Battlecard-PCL-nXAI-vs-Power-BI-Internal-Team.docx" },
      { title: "Solution Sheets", type: "PDF", gated: true, urls: "#" },
      { title: "Use Cases", type: "PDF", gated: true, urls: "#" },
      { title: "Industry Packs (Retail, Healthcare, Pharma Finance)", type: "PDF", gated: true, urls: "#" },
      { title: "Pricing & Packaging Playbook", type: "PDF", gated: true, urls: "#" },
      { title: "Product Video Recording", type: "PDF", gated: true, urls: "https://pclnxai.com/wp-content/uploads/2025/04/Payroll-Variance-recording-final-1-1.mp4" },
    ]
  },
  {
    id: "redwood-intelligence",
    title: "Redwood Intelligence Suite",
    tagline: "Accelerate Oracle Redwood transitions in 25 days",
    description: "Accelerate your Oracle Redwood transition in just 25 days with automated testing, impact analysis, and seamless defect resolution—no production data required.",
    image: "/assets/redwood-intelligence.jpg",
    video: "/assets/RedWood Intelligence Demo Tour.mp4",
    slug: "redwood-intelligence-suite",
    icon: Users,
    color: 'from-green-500 to-green-700',
    clients: '300+ Companies',
    category: "ERP",
    overview: "Redwood Intelligence Suite revolutionizes Oracle Cloud migrations by providing automated testing and impact analysis that traditionally takes months to complete. Our AI-powered platform ensures smooth transitions while minimizing business disruption and technical risks.",
    painPoints: [
      "Lengthy Oracle Redwood migrations taking 6-12 months",
      "High risk of business disruption during transitions",
      "Extensive manual testing requirements",
      "Lack of clear impact visibility before go-live"
    ],
    beneficiaries: ["IT Directors", "Oracle Administrators", "Project Managers", "CIOs"],
    keyFeatures: [
      "25-day migration timeline with proven methodology",
      "Automated regression testing without production data",
      "AI-powered impact analysis and risk assessment",
      "Real-time defect tracking and resolution",
      "Pre-built Oracle Redwood compatibility framework",
      "Seamless rollback capabilities",
      "Comprehensive training and change management"
    ],
    useCases: [
      {
        industry: "Financial Services",
        scenario: "Regional bank upgrading core Oracle systems with strict regulatory requirements",
        impact: "Completed migration in 23 days with zero business disruption and 40% cost savings"
      },
      {
        industry: "Higher Education",
        scenario: "University system modernizing student information systems across multiple campuses",
        impact: "Reduced testing phase from 4 months to 3 weeks while improving system performance by 60%"
      },
      {
        industry: "Government",
        scenario: "State agency upgrading legacy Oracle systems with minimal downtime requirements",
        impact: "Achieved seamless migration with 99.9% uptime and enhanced security compliance"
      }
    ],
    marketOpportunity: {
      tam: "$8.4B Oracle Services Market",
      sam: "$2.1B Oracle Migration Services",
      som: "$420M Addressable Segment",
      growthTrends: [
        "22% annual growth in Oracle Cloud adoptions",
        "Increasing demand for automated migration tools",
        "Growing emphasis on reduced implementation risk"
      ],
      whyNow: [
        "Oracle's push toward cloud-first architecture",
        "End-of-life for legacy Oracle versions",
        "Business pressure for digital transformation"
      ]
    },
    competitiveAdvantage: [
      {
        feature: "25-Day Timeline",
        competitor: "6-12 month implementations",
        ourSolution: "Proven accelerated methodology with automated testing"
      },
      {
        feature: "No Production Data",
        competitor: "Requires production data access",
        ourSolution: "Synthetic data generation for comprehensive testing"
      },
      {
        feature: "AI Impact Analysis",
        competitor: "Manual impact assessments",
        ourSolution: "Automated risk detection and mitigation planning"
      }
    ],
    resources: [
      { title: "Case Study: Accelerating Redwood Readiness", type: "PDF", gated: false, urls: "https://pclnxai.com/case-study-accelerating-redwood-readiness-at-a-global-hr-organization/"  },
      { title: "Blog: The Essential Guide", type: "PDF", gated: false, urls: "https://pclnxai.com/beyond-the-ui-why-redwood-transitions-demand-lifecycle-intelligence/"  },
      { title: "Achieve Oracle Go-Live in Just 25 Days with Redwood", type: "PDF", gated: false, urls: "https://pclnxai.com/wp-content/uploads/2025/06/Achieve-Oracle-Go-Live-in-Just-25-Days.pdf"  },
      { title: "Whitepaper: Rethinking Testing in the Age of Oracle Redwood", type: "PDF", gated: false, urls: "https://pclnxai.com/whitepapers/"  },
      { title: "Traditional QA vs Redwood Intelligence: A Comparison", type: "PDF", gated: false, urls: "https://www.linkedin.com/posts/pclnxai_redwood-is-live-is-your-test-script-keeping-activity-7339222517397561348-tKS1?utm_source=share&utm_medium=member_desktop&rcm=ACoAACkcKf8ByDn5YgD4NXh_YrhAJ9dQgkm-lfw"  },
      { title: "Use Cases", type: "ZIP", gated: false, urls: "link-to-use-cases"  },
      { title: "Industry Packs (Retail, Healthcare, Pharma, Finance)", type: "ZIP", gated: false, urls: "link-to-industry-packs"  },
      { title: "Pricing & Packaging Playbook", type: "PDF", gated: false, urls: "link-to-pricing-playbook" }
    ]
  },
  {
    id: "people-analytics",
    title: "People Analytics Hub",
    tagline: "Empower HR leaders with real-time workforce insights",
    description: "Empower HR leaders with real-time insights, no-code reporting, and seamless Oracle HCM integration to drive strategic decisions and workforce optimization.",
    image: "/assets/people-analytics.jpg",
    video: "/assets/videoplayback (1).mp4",
    slug: "people-analytics-hub",
    icon: Settings,
    color: 'from-purple-500 to-purple-700',
    clients: '200+ Companies',
    category: "HR",
    overview: "Payroll Variance Analysis transforms how organizations manage payroll accuracy by providing real-time detection of discrepancies before they impact your bottom line. Our intelligent system continuously monitors payroll data, identifies anomalies, and ensures regulatory compliance across all jurisdictions.",
    painPoints: [
      "Manual payroll reconciliation consuming 40+ hours per pay period",
      "Late discovery of payroll errors resulting in costly corrections",
      "Compliance violations due to oversight in complex regulations",
      "Lack of visibility into payroll trends and patterns"
    ],
    beneficiaries: ["Payroll Managers", "CFOs", "HR Directors", "Compliance Officers"],
    keyFeatures: [
      "Real-time variance detection with instant alerts",
      "Automated compliance checking across multiple jurisdictions",
      "Predictive analytics for payroll trend identification",
      "Seamless integration with existing HRIS systems",
      "Comprehensive audit trails for regulatory reporting",
      "Mobile dashboard for on-the-go monitoring",
      "Customizable approval workflows"
    ],
    useCases: [
      {
        industry: "Healthcare",
        scenario: "Multi-state hospital system with 15,000+ employees and complex shift differentials",
        impact: "Reduced payroll processing time by 65% and eliminated $2.3M in annual overpayments"
      },
      {
        industry: "Retail",
        scenario: "National retailer managing seasonal workforce fluctuations and varying state regulations",
        impact: "Achieved 99.8% payroll accuracy and reduced compliance violations by 90%"
      },
      {
        industry: "Manufacturing",
        scenario: "Industrial company with union contracts and overtime complexity",
        impact: "Streamlined payroll operations saving 200+ hours monthly in manual reconciliation"
      }
    ],
    marketOpportunity: {
      tam: "$12.8B Global Payroll Software Market",
      sam: "$4.2B US Enterprise Payroll Market",
      som: "$850M Addressable Market Segment",
      growthTrends: [
        "15.2% CAGR in payroll automation solutions",
        "Growing demand for compliance automation",
        "Increased focus on real-time financial visibility"
      ],
      whyNow: [
        "Remote workforce increasing payroll complexity",
        "Stricter regulatory compliance requirements",
        "Rising labor costs demanding accuracy"
      ]
    },
    competitiveAdvantage: [
      {
        feature: "Real-time Detection",
        competitor: "End-of-cycle reporting",
        ourSolution: "Instant variance alerts during payroll processing"
      },
      {
        feature: "Predictive Analytics",
        competitor: "Historical reporting only",
        ourSolution: "AI-powered trend prediction and anomaly detection"
      },
      {
        feature: "Multi-jurisdiction Compliance",
        competitor: "Manual compliance checking",
        ourSolution: "Automated compliance validation across all jurisdictions"
      }
    ],
    resources: [
      { title: "Product One-Pagers (Persona-specific)", type: "PDF", gated: false, urls: "https://pclnxai.com/wp-content/uploads/2025/04/OnePager-PCL-nXAI-HR-Intelligence-for-CHRO.pdf"  },
      { title: "Proposal Deck", type: "Tool", gated: false, urls: "link-to-proposal-deck"  },
      { title: "Demo Decks (Modular, vertical-specific)", type: "PDF", gated: true, urls: "link-to-demo-deck" },
      { title: "Battlecards (e.g., OTBI vs. PCL nXAI, BI Teams vs. PCL)", type: "PDF", gated: true, urls: "https://pclnxai.com/wp-content/uploads/2025/04/Battlecard-PCL-nXAI-vs-OTBI.docx" },
      { title: "Solution Sheets", type: "PDF", gated: true, urls: "link-to-solution-sheets" },
      { title: "Use Cases", type: "PDF", gated: true, urls: "link-to-use-cases" },
      { title: "Industry Packs (Retail, Healthcare, Pharma, Finance)", type: "PDF", gated: true, urls: "link-to-industry-packs" },
      { title: "Pricing & Packaging Playbook", type: "PDF", gated: true, urls: "link-to-pricing-playbook" },
    ]
  },
  {
    id: "lifecycle-intelligence",
    title: "Life Cycle Intelligence",
    tagline: "Unified Oracle Cloud delivery acceleration",
    description: "Accelerate your Oracle Cloud journey with a unified suite that streamlines every delivery phase—ensuring traceability, faster implementation, and measurable post-go-live outcomes.",
    image: "/assets/lifecycle-intelligence.jpg",
    video: "/assets/videoplayback (2).mp4",
    slug: "lifecycle-intelligence",
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
    clients: '150+ Companies',
    category: "Finance",
    overview: "Payroll Variance Analysis transforms how organizations manage payroll accuracy by providing real-time detection of discrepancies before they impact your bottom line. Our intelligent system continuously monitors payroll data, identifies anomalies, and ensures regulatory compliance across all jurisdictions.",
    painPoints: [
      "Manual payroll reconciliation consuming 40+ hours per pay period",
      "Late discovery of payroll errors resulting in costly corrections",
      "Compliance violations due to oversight in complex regulations",
      "Lack of visibility into payroll trends and patterns"
    ],
    beneficiaries: ["Payroll Managers", "CFOs", "HR Directors", "Compliance Officers"],
    keyFeatures: [
      "Real-time variance detection with instant alerts",
      "Automated compliance checking across multiple jurisdictions",
      "Predictive analytics for payroll trend identification",
      "Seamless integration with existing HRIS systems",
      "Comprehensive audit trails for regulatory reporting",
      "Mobile dashboard for on-the-go monitoring",
      "Customizable approval workflows"
    ],
    useCases: [
      {
        industry: "Healthcare",
        scenario: "Multi-state hospital system with 15,000+ employees and complex shift differentials",
        impact: "Reduced payroll processing time by 65% and eliminated $2.3M in annual overpayments"
      },
      {
        industry: "Retail",
        scenario: "National retailer managing seasonal workforce fluctuations and varying state regulations",
        impact: "Achieved 99.8% payroll accuracy and reduced compliance violations by 90%"
      },
      {
        industry: "Manufacturing",
        scenario: "Industrial company with union contracts and overtime complexity",
        impact: "Streamlined payroll operations saving 200+ hours monthly in manual reconciliation"
      }
    ],
    marketOpportunity: {
      tam: "$12.8B Global Payroll Software Market",
      sam: "$4.2B US Enterprise Payroll Market",
      som: "$850M Addressable Market Segment",
      growthTrends: [
        "15.2% CAGR in payroll automation solutions",
        "Growing demand for compliance automation",
        "Increased focus on real-time financial visibility"
      ],
      whyNow: [
        "Remote workforce increasing payroll complexity",
        "Stricter regulatory compliance requirements",
        "Rising labor costs demanding accuracy"
      ]
    },
    competitiveAdvantage: [
      {
        feature: "Real-time Detection",
        competitor: "End-of-cycle reporting",
        ourSolution: "Instant variance alerts during payroll processing"
      },
      {
        feature: "Predictive Analytics",
        competitor: "Historical reporting only",
        ourSolution: "AI-powered trend prediction and anomaly detection"
      },
      {
        feature: "Multi-jurisdiction Compliance",
        competitor: "Manual compliance checking",
        ourSolution: "Automated compliance validation across all jurisdictions"
      }
    ],
    resources: [
      { title: "Blog: Reduce Oracle Project Rework", type: "PDF", gated: false, urls: "https://pclnxai.com/stop-oracle-rework-before-it-starts/"  },
      { title: "Whitepaper: Lifecycle Intelligence in Oracle ERP", type: "Tool", gated: false, urls: "https://pclnxai.com/wp-content/uploads/2025/05/PCLnXAI_Lifecycle_Whitepaper.pdf"  },
      { title: "Article: Beyond Test Automation: The Case for Oracle Lifecycle Intelligence", type: "PDF", gated: true, urls: "https://www.linkedin.com/posts/pclnxai_oraclecloud-redwood-lifecycleintelligence-activity-7336371827935453184-viWI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAG8dogBgWRtjXj573MYH3krYDUaVak6UXQ&quot;" },
      { title: "Requirement Intelligence", type: "PDF", gated: true, urls: "https://pclnxai.com/requirement-intelligence/" },
      { title: "Fit-Gap Intelligence", type: "PDF", gated: true, urls: "https://pclnxai.com/fit-gap-intelligence/" },
      { title: "Configuration Intelligence", type: "PDF", gated: true, urls: "https://pclnxai.com/configuration-intelligence/" },
      { title: " User Acceptance Testing Intelligence", type: "PDF", gated: true, urls: "https://pclnxai.com/uat-intelligence/" },
      { title: "Post-Go-Live Monitoring", type: "PDF", gated: true, urls: "https://pclnxai.com/post-go-live/" },
    ]
  },
  {
    id: "one-finance",
    title: "One Finance",
    tagline: "Unified Oracle Cloud financial transformation platform",
    description: "Unify and accelerate your Oracle Cloud financial transformations with a single, reusable mapping engine that eliminates complexity, reduces errors, and empowers business users.",
    image: "/assets/one-finance.jpg",
    video: "/assets/videoplayback (3).mp4",
    slug: "one-finance",
    icon: Shield,
    color: 'from-red-500 to-red-700',
    clients: '400+ Companies',
    category: "Intelligence",
    overview: "Payroll Variance Analysis transforms how organizations manage payroll accuracy by providing real-time detection of discrepancies before they impact your bottom line. Our intelligent system continuously monitors payroll data, identifies anomalies, and ensures regulatory compliance across all jurisdictions.",
    painPoints: [
      "Manual payroll reconciliation consuming 40+ hours per pay period",
      "Late discovery of payroll errors resulting in costly corrections",
      "Compliance violations due to oversight in complex regulations",
      "Lack of visibility into payroll trends and patterns"
    ],
    beneficiaries: ["Payroll Managers", "CFOs", "HR Directors", "Compliance Officers"],
    keyFeatures: [
      "Real-time variance detection with instant alerts",
      "Automated compliance checking across multiple jurisdictions",
      "Predictive analytics for payroll trend identification",
      "Seamless integration with existing HRIS systems",
      "Comprehensive audit trails for regulatory reporting",
      "Mobile dashboard for on-the-go monitoring",
      "Customizable approval workflows"
    ],
    useCases: [
      {
        industry: "Healthcare",
        scenario: "Multi-state hospital system with 15,000+ employees and complex shift differentials",
        impact: "Reduced payroll processing time by 65% and eliminated $2.3M in annual overpayments"
      },
      {
        industry: "Retail",
        scenario: "National retailer managing seasonal workforce fluctuations and varying state regulations",
        impact: "Achieved 99.8% payroll accuracy and reduced compliance violations by 90%"
      },
      {
        industry: "Manufacturing",
        scenario: "Industrial company with union contracts and overtime complexity",
        impact: "Streamlined payroll operations saving 200+ hours monthly in manual reconciliation"
      }
    ],
    marketOpportunity: {
      tam: "$12.8B Global Payroll Software Market",
      sam: "$4.2B US Enterprise Payroll Market",
      som: "$850M Addressable Market Segment",
      growthTrends: [
        "15.2% CAGR in payroll automation solutions",
        "Growing demand for compliance automation",
        "Increased focus on real-time financial visibility"
      ],
      whyNow: [
        "Remote workforce increasing payroll complexity",
        "Stricter regulatory compliance requirements",
        "Rising labor costs demanding accuracy"
      ]
    },
    competitiveAdvantage: [
      {
        feature: "Real-time Detection",
        competitor: "End-of-cycle reporting",
        ourSolution: "Instant variance alerts during payroll processing"
      },
      {
        feature: "Predictive Analytics",
        competitor: "Historical reporting only",
        ourSolution: "AI-powered trend prediction and anomaly detection"
      },
      {
        feature: "Multi-jurisdiction Compliance",
        competitor: "Manual compliance checking",
        ourSolution: "Automated compliance validation across all jurisdictions"
      }
    ],
    resources: [
      { title: "Data Alignment: The Key to Successful Finance Projects", type: "PDF", gated: false, urls: "https://pclnxai.com/onefinance/#"  },
      { title: "Case Study: 40% Faster ERP Launch", type: "Tool", gated: false, urls: "https://pclnxai.com/onefinance/#"  },
      { title: "FBDI Simplified – What Every Controller Should Know", type: "PDF", gated: true, urls: "https://pclnxai.com/onefinance/#" },
      { title: "Battlecards (e.g., OTBI vs. PCL nXAI, BI Teams vs. PCL)", type: "PDF", gated: true, urls: "#" },
      { title: "Solution Sheets", type: "PDF", gated: true, urls: "#" },
      { title: "Use Cases", type: "PDF", gated: true, urls: "#" },
      { title: "Industry Packs (Retail, Healthcare, Pharma, Finance)", type: "PDF", gated: true, urls: "#" },
      { title: "Pricing & Packaging Playbook", type: "PDF", gated: true, urls: "#" },
      { title: "Product Video Recording", type: "PDF", gated: true, urls: "#" },
    ]
  },
  {
    id: "erp-insights",
    title: "ERP Insights",
    tagline: "Financial intelligence for strategic decision-making",
    description: "Empower CFOs with financial intelligence, real-time insights, and seamless integration to optimize forecasting, cash flow, and decision-making.",
    image: "/assets/erp-insights.jpg",
    video: "/assets/videoplayback (4).mp4",
    slug: "erp-insights",
    icon: TrendingUp,
    color: 'from-indigo-500 to-indigo-700',
    clients: '350+ Companies',
    category: "Analytics",
    overview: "Payroll Variance Analysis transforms how organizations manage payroll accuracy by providing real-time detection of discrepancies before they impact your bottom line. Our intelligent system continuously monitors payroll data, identifies anomalies, and ensures regulatory compliance across all jurisdictions.",
    painPoints: [
      "Manual payroll reconciliation consuming 40+ hours per pay period",
      "Late discovery of payroll errors resulting in costly corrections",
      "Compliance violations due to oversight in complex regulations",
      "Lack of visibility into payroll trends and patterns"
    ],
    beneficiaries: ["Payroll Managers", "CFOs", "HR Directors", "Compliance Officers"],
    keyFeatures: [
      "Real-time variance detection with instant alerts",
      "Automated compliance checking across multiple jurisdictions",
      "Predictive analytics for payroll trend identification",
      "Seamless integration with existing HRIS systems",
      "Comprehensive audit trails for regulatory reporting",
      "Mobile dashboard for on-the-go monitoring",
      "Customizable approval workflows"
    ],
    useCases: [
      {
        industry: "Healthcare",
        scenario: "Multi-state hospital system with 15,000+ employees and complex shift differentials",
        impact: "Reduced payroll processing time by 65% and eliminated $2.3M in annual overpayments"
      },
      {
        industry: "Retail",
        scenario: "National retailer managing seasonal workforce fluctuations and varying state regulations",
        impact: "Achieved 99.8% payroll accuracy and reduced compliance violations by 90%"
      },
      {
        industry: "Manufacturing",
        scenario: "Industrial company with union contracts and overtime complexity",
        impact: "Streamlined payroll operations saving 200+ hours monthly in manual reconciliation"
      }
    ],
    marketOpportunity: {
      tam: "$12.8B Global Payroll Software Market",
      sam: "$4.2B US Enterprise Payroll Market",
      som: "$850M Addressable Market Segment",
      growthTrends: [
        "15.2% CAGR in payroll automation solutions",
        "Growing demand for compliance automation",
        "Increased focus on real-time financial visibility"
      ],
      whyNow: [
        "Remote workforce increasing payroll complexity",
        "Stricter regulatory compliance requirements",
        "Rising labor costs demanding accuracy"
      ]
    },
    competitiveAdvantage: [
      {
        feature: "Real-time Detection",
        competitor: "End-of-cycle reporting",
        ourSolution: "Instant variance alerts during payroll processing"
      },
      {
        feature: "Predictive Analytics",
        competitor: "Historical reporting only",
        ourSolution: "AI-powered trend prediction and anomaly detection"
      },
      {
        feature: "Multi-jurisdiction Compliance",
        competitor: "Manual compliance checking",
        ourSolution: "Automated compliance validation across all jurisdictions"
      }
    ],
    resources: [
      { title: "Payroll Variance Solution Sheet", type: "PDF", gated: false, urls: "#"  },
      { title: "ROI Calculator", type: "Tool", gated: false, urls: "#"  },
      { title: "Implementation Guide", type: "PDF", gated: true, urls: "#" },
      { title: "Pricing & Packaging", type: "PDF", gated: true, urls: "#" }
    ]
  }, //pending changes in links and resources
  // Additional products would follow the same pattern...
];

// For brevity, I'll create the remaining products with essential data
export const additionalProducts: Partial<Product>[] = [
  // {
  //   id: "people-analytics",
  //   title: "People Analytics Hub",
  //   tagline: "Empower HR leaders with real-time workforce insights",
  //   description: "Empower HR leaders with real-time insights, no-code reporting, and seamless Oracle HCM integration to drive strategic decisions and workforce optimization.",
  //   image: "/src/assets/people-analytics.jpg",
  //   video: "/src/assets/videoplayback (1).mp4",
  //   slug: "people-analytics-hub"
  // },
  // {
  //   id: "lifecycle-intelligence",
  //   title: "Life Cycle Intelligence",
  //   tagline: "Unified Oracle Cloud delivery acceleration",
  //   description: "Accelerate your Oracle Cloud journey with a unified suite that streamlines every delivery phase—ensuring traceability, faster implementation, and measurable post-go-live outcomes.",
  //   image: "/src/assets/lifecycle-intelligence.jpg",
  //   video: "/src/assets/videoplayback (2).mp4",
  //   slug: "lifecycle-intelligence"
  // },
  // {
  //   id: "one-finance",
  //   title: "One Finance",
  //   tagline: "Unified Oracle Cloud financial transformation platform",
  //   description: "Unify and accelerate your Oracle Cloud financial transformations with a single, reusable mapping engine that eliminates complexity, reduces errors, and empowers business users.",
  //   image: "/src/assets/one-finance.jpg",
  //   video: "/src/assets/videoplayback (3).mp4",
  //   slug: "one-finance"
  // },
  // {
  //   id: "erp-insights",
  //   title: "ERP Insights",
  //   tagline: "Financial intelligence for strategic decision-making",
  //   description: "Empower CFOs with financial intelligence, real-time insights, and seamless integration to optimize forecasting, cash flow, and decision-making.",
  //   image: "/src/assets/erp-insights.jpg",
  //   video: "/src/assets/videoplayback (4).mp4",
  //   slug: "erp-insights"
  // }
];