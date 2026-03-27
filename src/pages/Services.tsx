import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroImg from "@/assets/dft-solutions-hero.jpg";
import dataIntelligenceImg from "@/assets/data-intelligence.jpg";
import forensicsRiskImg from "@/assets/forensics-risk.jpg";
import techSolutionsImg from "@/assets/tech-solutions.jpg";
import securityComplianceImg from "@/assets/security-compliance.jpg";
import aiAutomationImg from "@/assets/ai-automation.jpg";
import bankStatementImg from "@/assets/bank-statement.jpg";
import documentAnalysisImg from "@/assets/document-analysis.jpg";
import analyticsImg from "@/assets/analytics.jpg";
import predictiveAnalyticsImg from "@/assets/image-10.jpg";
import customerSegmentationImg from "@/assets/image-9.jpg";
import bankingSectorImg from "@/assets/banking-sector.jpg";
import insuranceSectorImg from "@/assets/insurance-sector.jpg";
import publicSectorImg from "@/assets/public-sector.jpg";
import capabilityBuildingImg from "@/assets/capability-building.jpg";
import { 
  Database, 
  Shield, 
  Code, 
  ChevronRight,
  Phone,
  Landmark,
  HeartPulse,
  Building2,
  GraduationCap,
} from "lucide-react";

const Services = () => {
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
      title: "Digital Forensics",
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
      title: "Tech Solutions",
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

  const sectors = [
    {
      title: "Banking, SACCOs & Microfinance",
      icon: Landmark,
      image: bankingSectorImg,
      description: "We work with banks, SACCOs, and microfinance institutions to improve credit decisioning, strengthen risk controls, and modernize operations in line with regulatory expectations.",
      outcomes: "Our interventions consistently result in faster credit turnaround times, improved portfolio quality, and reduced operational costs through intelligent automation and analytics. Institutions also achieve stronger compliance and greater visibility into risk across their lending and transaction environments.",
    },
    {
      title: "Insurance (Medical & Life)",
      icon: HeartPulse,
      image: insuranceSectorImg,
      description: "We support insurers in addressing claims inefficiencies, fraud exposure, and underwriting challenges — particularly in complex medical insurance environments.",
      outcomes: "Our work delivers faster claims processing, improved fraud detection rates, and more accurate underwriting decisions. Insurers gain tighter control over claims costs, reduced leakages, and enhanced operational efficiency across the policy lifecycle, leading to improved customer experience and financial performance.",
    },
    {
      title: "Public Sector & Regulators",
      icon: Building2,
      image: publicSectorImg,
      description: "We partner with regulators and public institutions to strengthen oversight, governance, and accountability in a digital-first environment.",
      outcomes: "Our engagements result in more effective regulatory frameworks, improved fraud detection and enforcement capabilities, and stronger data governance practices. Institutions are better equipped to supervise markets, enforce compliance, and leverage technology to improve public service delivery.",
    },
    {
      title: "Capability Building Across All Sectors",
      icon: GraduationCap,
      image: capabilityBuildingImg,
      description: "Through DFT Academy, we build the internal capacity required to sustain transformation and ensure responsible AI adoption.",
      outcomes: "Organizations that work with us develop stronger governance cultures, improved compliance awareness, and practical skills in AI, fraud risk, and cybersecurity. This translates into more resilient institutions capable of sustaining long-term transformation.",
    },
  ];

  const scrollToCategories = () => {
    document.getElementById('solution-categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="AI-powered solutions for finance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
            Transforming Finance Through{" "}
            <span className="text-primary">Data, Forensics & FinTech</span>{" "}
            Innovation
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
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
      <section id="solution-categories" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              DFT Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive AI-driven solutions designed for the modern financial ecosystem
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 mb-12 h-auto bg-card border border-border">
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
                        ? "data-[state=active]:bg-success data-[state=active]:text-success-foreground" 
                        : isTechSolutions
                        ? "data-[state=active]:bg-warning data-[state=active]:text-warning-foreground"
                        : "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
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
                  {category.subcategories.map((subcategory, index) => {
                    const borderAccents = ["border-t-primary", "border-t-success", "border-t-warning"];
                    return (
                    <Card 
                      key={index}
                      className={`bg-card border-0 border-t-4 ${borderAccents[index % 3]} shadow-md hover:shadow-xl transition-all duration-300 group`}
                    >
                      <div className="aspect-video w-full overflow-hidden">
                        <img 
                          src={subcategory.image} 
                          alt={subcategory.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {subcategory.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {subcategory.description}
                        </p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-2 mb-4">
                          {subcategory.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${idx % 3 === 0 ? 'bg-primary' : idx % 3 === 1 ? 'bg-success' : 'bg-warning'}`}></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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

      {/* Sectors We Serve */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sectors We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              DFT Group partners with key sectors of the economy as a catalyst for responsible digital transformation — delivering measurable business value through AI, while strengthening governance, reducing risk, and improving operational efficiency.
            </p>
          </div>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
            Our engagements are advisory-led and outcome-driven. We focus on solving real operational challenges and delivering results that are visible at both operational and executive levels.
          </p>

          <div className="space-y-16">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              const isEven = index % 2 === 1;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                      <img 
                        src={sector.image} 
                        alt={sector.title}
                        loading="lazy"
                        width={1024}
                        height={640}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{sector.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {sector.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {sector.outcomes}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-foreground font-semibold max-w-4xl mx-auto leading-relaxed">
              Our commitment is clear: every engagement delivers stronger controls, better decisions, and measurable business value — enabling safer, smarter organizations.
            </p>
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
            Join leading financial institutions who trust DFT Group to drive their digital transformation.
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
