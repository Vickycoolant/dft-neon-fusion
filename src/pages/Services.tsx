import { useState } from "react";
import servicesHeroImg from "@/assets/services-hero.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  CreditCard, 
  Calculator, 
  Receipt, 
  Building2, 
  Shield, 
  Cloud, 
  TrendingUp,
  Users,
  BarChart3,
  Search,
  Lock
} from "lucide-react";

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const serviceCategories = [
    {
      title: "AI-Powered Document Analysis",
      description: "Automate document processing with advanced AI technology",
      color: "from-primary to-accent",
      services: [
        {
          id: "doc-analyzer",
          name: "Document Analyser",
          icon: FileText,
          description: "Digitise and analyse documents to automate credit underwriting using advanced AI algorithms.",
          fullDescription: "Our Document Analyser leverages cutting-edge artificial intelligence to transform traditional document processing. The system automatically extracts, validates, and categorizes information from various document types, enabling faster credit underwriting decisions while maintaining accuracy and compliance standards."
        },
        {
          id: "bsa",
          name: "Bank Statement Analyser (BSA)",
          icon: CreditCard,
          description: "Digitise and analyse bank statements for faster credit underwriting with AI-powered insights.",
          fullDescription: "The Bank Statement Analyser utilizes machine learning algorithms to process bank statements automatically, extracting key financial patterns, cash flow analysis, and risk indicators. This AI-driven solution reduces processing time from hours to minutes while providing comprehensive financial insights."
        },
        {
          id: "itr-analyzer",
          name: "ITR Analyser",
          icon: Calculator,
          description: "Automated ITR & AIS analysis for accurate financial assessments using AI technology.",
          fullDescription: "Our ITR Analyser employs sophisticated AI models to process Income Tax Returns and Annual Information Statements, providing detailed financial analysis, risk assessment, and creditworthiness evaluation with unprecedented accuracy and speed."
        },
        {
          id: "gst-analyzer",
          name: "GST Analyser",
          icon: Receipt,
          description: "Real-time GST data extraction & analysis for smarter credit decisioning with AI insights.",
          fullDescription: "The GST Analyser combines real-time data processing with advanced AI analytics to evaluate business performance through GST filings, providing comprehensive insights into business stability, revenue patterns, and credit risk assessment."
        }
      ]
    },
    {
      title: "Technology Solutions",
      description: "Comprehensive technology services for modern businesses",
      color: "from-accent to-primary",
      services: [
        {
          id: "insurtech",
          name: "Insurtech Solutions",
          icon: Shield,
          description: "AI-powered insurance technology solutions for modern insurance companies.",
          fullDescription: "Our Insurtech solutions integrate artificial intelligence with insurance operations, providing automated claim processing, risk assessment, fraud detection, and customer experience enhancement through advanced machine learning algorithms."
        },
        {
          id: "custom-software",
          name: "Custom Software Development",
          icon: Building2,
          description: "Tailored software solutions with AI integration for your business needs.",
          fullDescription: "We develop bespoke software solutions incorporating AI and machine learning capabilities, designed to address specific business challenges while ensuring scalability, security, and optimal performance."
        },
        {
          id: "cloud-solutions",
          name: "Cloud Solutions",
          icon: Cloud,
          description: "Secure cloud infrastructure with AI-powered optimization and management.",
          fullDescription: "Our cloud solutions leverage AI for intelligent resource management, automated scaling, and predictive maintenance, ensuring optimal performance while reducing costs and enhancing security."
        }
      ]
    },
    {
      title: "Data Analytics & AI",
      description: "Advanced analytics powered by artificial intelligence",
      color: "from-primary/80 to-accent/80",
      services: [
        {
          id: "data-exploration",
          name: "Data Exploration & Profiling",
          icon: Search,
          description: "AI-driven data discovery and profiling for actionable business insights.",
          fullDescription: "Utilize advanced AI algorithms to explore and profile your data, uncovering hidden patterns, quality issues, and opportunities for optimization through automated analysis and intelligent recommendations."
        },
        {
          id: "predictive-analytics",
          name: "Predictive & Prescriptive Analytics",
          icon: TrendingUp,
          description: "AI-powered forecasting and recommendation systems for strategic decisions.",
          fullDescription: "Our AI-powered analytics platform provides predictive modeling and prescriptive recommendations, enabling data-driven decision making through machine learning algorithms and advanced statistical analysis."
        },
        {
          id: "customer-segmentation",
          name: "Customer Segmentation",
          icon: Users,
          description: "AI-based customer segmentation for targeted marketing and service delivery.",
          fullDescription: "Leverage artificial intelligence to segment customers based on behavior, preferences, and value, enabling personalized experiences and optimized marketing strategies through advanced clustering algorithms."
        }
      ]
    },
    {
      title: "Digital Forensics & Security",
      description: "Comprehensive security and investigation services",
      color: "from-accent/60 to-primary/60",
      services: [
        {
          id: "digital-forensics",
          name: "Digital Forensics",
          icon: Lock,
          description: "AI-enhanced digital investigation and evidence analysis services.",
          fullDescription: "Our digital forensics team employs AI-powered tools for comprehensive investigation, evidence collection, and analysis, ensuring thorough and accurate results for legal and compliance requirements."
        },
        {
          id: "cybersecurity",
          name: "Cybersecurity Solutions",
          icon: Shield,
          description: "AI-driven cybersecurity solutions for threat detection and prevention.",
          fullDescription: "Implement advanced AI-based cybersecurity measures including real-time threat detection, automated response systems, and predictive security analytics to protect your digital assets."
        }
      ]
    }
  ];

  const toggleExpand = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={servicesHeroImg} 
            alt="AI Services and Solutions" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        </div>
        
        <div className="container-max text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            AI-Powered Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transforming financial technology with cutting-edge AI solutions. 
            From document analysis to predictive analytics, we deliver intelligent automation 
            that drives efficiency and accuracy.
          </p>
          <Badge variant="outline" className="neon-border text-lg p-2">
            🤖 Powered by Artificial Intelligence
          </Badge>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-neon">
              Our Service Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI-driven solutions designed for the modern financial industry
            </p>
          </div>

          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </span>
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => {
                  const IconComponent = service.icon;
                  const isExpanded = expandedService === service.id;

                  return (
                    <Card key={service.id} className="neon-border group hover:shadow-lg transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center neon-glow">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-lg font-semibold">
                          {service.name}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {isExpanded && (
                          <div className="mt-4 p-4 bg-secondary/50 rounded-lg animate-fade-in">
                            <p className="text-sm text-foreground leading-relaxed">
                              {service.fullDescription}
                            </p>
                          </div>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleExpand(service.id)}
                          className="w-full mt-4 neon-border"
                        >
                          {isExpanded ? "Show Less" : "Learn More"}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Showcase Section */}
      <section className="section-padding bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              AI Technology Workflow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our AI-powered solutions transform your data into actionable insights
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center neon-glow mb-4">
                <FileText className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Input</h3>
              <p className="text-center text-muted-foreground">
                Raw documents,<br />statements & data
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center neon-glow mb-4">
                <BarChart3 className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-center text-muted-foreground">
                Machine learning<br />processing & insights
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-glow to-accent-glow flex items-center justify-center neon-glow mb-4">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Output</h3>
              <p className="text-center text-muted-foreground">
                Intelligent reports<br />& recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-neon">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how our AI-powered solutions can streamline your operations 
              and provide competitive advantages in today's digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="neon-border">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;