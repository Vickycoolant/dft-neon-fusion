import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import heroImg from "@/assets/dft-solutions-hero.jpg";
import dataIntelligenceImg from "@/assets/data-intelligence.jpg";
import forensicsRiskImg from "@/assets/forensics-risk.jpg";
import techSolutionsImg from "@/assets/tech-solutions.jpg";
import securityComplianceImg from "@/assets/security-compliance.jpg";
import aiAutomationImg from "@/assets/ai-automation.jpg";
import africanFintechImg from "@/assets/african-fintech.jpg";
import bankStatementImg from "@/assets/bank-statement.jpg";
import documentAnalysisImg from "@/assets/document-analysis.jpg";
import analyticsImg from "@/assets/analytics.jpg";
import predictiveAnalyticsImg from "@/assets/image-10.jpg";
import customerSegmentationImg from "@/assets/image-9.jpg";
import { 
  Database, 
  Shield, 
  Code, 
  ChevronRight,
  Phone,
  Mail,
  FileText,
  PieChart,
  Lock
} from "lucide-react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("data-intelligence");

  const solutionCategories = [
    {
      id: "data-intelligence",
      title: "Data Intelligence",
      summary: "Harness financial documents and analytics for smarter decisions.",
      image: dataIntelligenceImg,
      icon: Database,
      subcategories: [
        {
          title: "Bank Statement Analysis",
          description: "AI-powered analysis of bank statements to extract insights, detect patterns, and assess financial health for lending decisions.",
          image: bankStatementImg,
          features: ["Transaction categorization", "Income/expense analysis", "Fraud detection"]
        },
       {
          title: "Financial Statement Analysis",
          description: "Deep dive into balance sheets, P&L statements, and cash flow statements for comprehensive business evaluation.",
          image: customerSegmentationImg,
          features: ["Ratio analysis", "Trend identification", "Financial health scoring"]
        },
        {
          title: "Payslip & Credit Card Analysis",
          description: "Comprehensive analysis of salary slips and credit card statements for accurate income verification and spending behavior.",
          image: analyticsImg,
          features: ["Income verification", "Spending patterns", "Credit behavior analysis"]
        },
        {
          title: "Data Governance",
          description: "AI-driven framework ensuring data accuracy, consistency, and compliance across financial systems.",
          image: documentAnalysisImg,
          features: ["Data quality management", "Policy enforcement", "Regulatory compliance"]
        },
        {
          title: "Predictive Analytics",
          description: "Machine learning models that forecast customer behavior, payment likelihood, and business performance trends.",
          image: predictiveAnalyticsImg,
          features: ["Churn prediction", "Default probability", "Revenue forecasting"]
        },
        {
          title: "Customer Segmentation",
          description: "Advanced clustering and profiling techniques to group customers for targeted marketing and personalized services.",
          image: customerSegmentationImg,
          features: ["Behavioral segmentation", "Value-based grouping", "Persona creation"]
        }
      ]
    },
    {
      id: "forensics-risk",
      title: "Digital Forensics & Risk",
      summary: "Detect fraud, investigate misconduct, and protect digital assets.",
      image: forensicsRiskImg,
      icon: Shield,
      subcategories: [
        {
          title: "Digital Forensics Investigation",
          description: "Expert digital evidence collection and analysis for cyber incident response and legal proceedings.",
          image: forensicsRiskImg,
          features: ["Evidence preservation", "Data recovery", "Chain of custody"]
        },
        {
          title: "Financial Fraud Detection",
          description: "AI-powered detection of document tampering, behavioral anomalies, and sophisticated fraud schemes.",
          image: documentAnalysisImg,
          features: ["Document forensics", "Anomaly detection", "Pattern recognition"]
        },
        {
          title: "Employee Misconduct Investigation",
          description: "Comprehensive investigation services for internal fraud, data theft, and policy violations.",
          image: forensicsRiskImg,
          features: ["Email forensics", "Access log analysis", "Timeline reconstruction"]
        },
        {
          title: "Deepfake Detection",
          description: "Advanced AI models to detect synthetic media and fraudulent identity verification attempts.",
          image: aiAutomationImg,
          features: ["Face manipulation detection", "Voice synthesis detection", "Media authenticity"]
        },
        {
          title: "Insurance Fraud Detection",
          description: "Specialized fraud detection for health and general insurance claims using ML and behavioral analytics.",
          image: documentAnalysisImg,
          features: ["Claims pattern analysis", "Provider fraud detection", "Network analysis"]
        },
        {
          title: "AML/KYC Compliance",
          description: "Automated screening for anti-money laundering, politically exposed persons, and beneficial ownership.",
          image: securityComplianceImg,
          features: ["PEP screening", "Sanctions checking", "UBO identification"]
        }
      ]
    },
    {
      id: "technology-solutions",
      title: "Technology Solutions", 
      summary: "Deploy cutting-edge software, cloud, and embedded finance tools.",
      image: techSolutionsImg,
      icon: Code,
      subcategories: [
        {
          title: "Insurtech & Embedded Finance",
          description: "Complete insurance and financial service integrations including PCG, FIU++, and FIP++ implementations.",
          image: techSolutionsImg,
          features: ["Policy management", "Claims processing", "Financial data exchange"]
        },
        
        {
          title: "Data Management Solutions",
          description: "Comprehensive data warehousing, ETL pipelines, and master data management for financial institutions.",
          image: dataIntelligenceImg,
          features: ["Data lakes", "ETL automation", "Data governance"]
        },
        {
          title: "Cybersecurity Solutions",
          description: "Enterprise-grade security including SIEM, vulnerability assessment, and penetration testing services.",
          image: securityComplianceImg,
          features: ["Security audits", "Threat monitoring", "Incident response"]
        },
       
      ]
    }
  ];

  const selectedCategoryData = solutionCategories.find(cat => cat.id === selectedCategory);

  const trustValues = [
    {
      title: "Security & Compliance First",
      description: "Bank-grade security protocols and regulatory compliance ensure your data remains protected while meeting all financial industry standards.",
      image: securityComplianceImg
    },
    {
      title: "AI-Powered Automation",
      description: "Strategic partnership with Perfios enables cutting-edge AI automation that transforms complex financial data into instant, actionable insights.",
      image: aiAutomationImg
    },
    {
      title: "Tailored for African FinTech Ecosystem",
      description: "Deep understanding of African financial markets, regulatory requirements, and local business practices drives our solution development.",
      image: africanFintechImg
    }
  ];

  const useCases = [
    {
      title: "Digital Lending",
      subtitle: "Automated Credit Assessment",
      description: "AI-powered credit scoring and risk assessment for faster, more accurate lending decisions with reduced manual processing time.",
      category: "Banking",
      image: bankStatementImg
    },
    {
      title: "Insurance",
      subtitle: "Fraud Detection & Claims Automation", 
      description: "Advanced fraud detection algorithms and automated claims processing that reduce false positives and speed up legitimate claim settlements.",
      category: "Insurance",
      image: documentAnalysisImg
    },
    {
      title: "Banking",
      subtitle: "Onboarding & AML/KYC Compliance",
      description: "Streamlined customer onboarding with automated identity verification, risk screening, and compliance reporting for regulatory requirements.",
      category: "Banking",
      image: securityComplianceImg
    }
  ];

  const scrollToCategories = () => {
    document.getElementById('solution-categories')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="AI-powered solutions for finance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
            Transforming Finance Through{" "}
            <span className="text-[#4169E1]">Data, Forensics & FinTech</span>{" "}
            Innovation
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
            We deliver AI-powered data insights, robust risk management, and embedded 
            finance platforms to empower financial institutions and businesses.
          </p>
          <Button 
            onClick={scrollToCategories}
            variant="warning"
            size="lg"
          >
            Explore Our Solutions
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Solutions Categories with Tabs */}
      <section id="solution-categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-6">
              DFT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive AI-driven solutions designed for the modern financial ecosystem
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 mb-12 h-auto bg-white border border-gray-200">
              {solutionCategories.map((category) => {
                const IconComponent = category.icon;
                const isDigitalForensics = category.id === "forensics-risk";
                const isTechSolutions = category.id === "technology-solutions";
                return (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className={`flex flex-col items-center gap-2 py-4 ${
                      isDigitalForensics 
                        ? "data-[state=active]:bg-success data-[state=active]:text-white" 
                        : isTechSolutions
                        ? "data-[state=active]:bg-warning data-[state=active]:text-black"
                        : "data-[state=active]:bg-[#4169E1] data-[state=active]:text-white"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-semibold text-sm">{category.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {solutionCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.subcategories.map((subcategory, index) => (
                    <Card 
                      key={index}
                      className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="aspect-video w-full overflow-hidden">
                        <img 
                          src={subcategory.image} 
                          alt={subcategory.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-[#4169E1] transition-colors">
                          {subcategory.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-sm">
                          {subcategory.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-2 mb-4">
                          {subcategory.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                              <div className="w-1.5 h-1.5 bg-[#4169E1] rounded-full flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1] hover:text-white"
                        >
                          Learn More
                          <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Trust / Value Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-6">
              Why Choose DFT
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on trust, powered by innovation, designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="aspect-square w-full max-w-sm mx-auto mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#4169E1] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases / Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our solutions transform financial workflows across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-[#4169E1] bg-[#4169E1]/10 px-2 py-1 rounded-full">
                      {useCase.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#4169E1] transition-colors">
                    {useCase.title}
                  </CardTitle>
                  <CardDescription className="text-[#4169E1] font-semibold">
                    {useCase.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 bg-success">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your financial workflows?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join leading financial institutions who trust DFT Consult to drive their digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                variant="warning"
                size="lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                Book a Consultation
              </Button>
            </Link>
            <Link to="/contact">
              
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
