import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Handshake, 
  ArrowRight, 
  Globe,
  Shield,
  Zap,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  Building2,
  Brain,
  FileText,
  Lock,
  BarChart3
} from "lucide-react";
import partnersHeroImg from "@/assets/partners-hero.jpg";
import logoPerfios from "@/assets/logo-perfios.jpg";
import FAQSection from "@/components/FAQSection";
import PartnersCarousel from "@/components/PartnersCarousel";

const Partners = () => {
  const partnersFAQs = [
    {
      question: "How does DFT Consult's partnership with Perfios benefit East African businesses?",
      answer: "Through our partnership with Perfios, we bring world-class AI-powered financial document analysis to East Africa. This means faster loan approvals, automated bank statement analysis, and enhanced fraud detection - all tailored for the African market. Businesses can now access enterprise-grade fintech solutions without the complexity of international implementations."
    },
    {
      question: "What makes iNube Solutions valuable for the African insurance market?",
      answer: "iNube's low-code/no-code insurance platform allows African insurers to digitally transform rapidly without extensive technical resources. Their proven solutions for life, general, crop, health, and motor insurance are adapted by DFT for local regulatory requirements, enabling insurers to compete globally while serving local markets effectively."
    },
    {
      question: "Does DFT provide local support for these international solutions?",
      answer: "Absolutely! As an authorized reseller and implementation partner, we provide full local support including consultation, implementation, customization, training, and ongoing technical support. We bridge the gap between global technology and local business needs, ensuring seamless integration with existing systems."
    },
    {
      question: "Can small and medium enterprises access these solutions?",
      answer: "Yes! One of our key missions is democratizing access to world-class fintech solutions. We've structured flexible pricing and implementation models specifically designed for SMEs in Kenya and East Africa, making enterprise-grade AI technology accessible to businesses of all sizes."
    },
    {
      question: "How does DFT ensure these solutions comply with local regulations?",
      answer: "We work closely with regulatory bodies like the Central Bank of Kenya and Insurance Regulatory Authority to ensure all solutions meet local compliance requirements. Our team customizes international solutions to align with East African regulatory frameworks, data protection laws, and industry standards."
    },
    {
      question: "What kind of ROI can businesses expect from these solutions?",
      answer: "Our clients typically see 60-85% reduction in document processing time, 40-70% improvement in fraud detection, and significant cost savings in operational expenses. The exact ROI varies by industry and implementation scope, but we provide detailed projections during consultation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={partnersHeroImg} 
            alt="Global Technology Partnership" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/20"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <Badge className="bg-success text-white mb-6 text-base px-6 py-2">
            <Handshake className="w-5 h-5 mr-2" />
            Strategic Global Partnerships
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Bringing World-Class AI Technology to Africa
          </h1>
          <p className="text-xl text-gray-900 max-w-4xl mx-auto mb-8 leading-relaxed">
            DFT Consult partners with <span className="text-success font-semibold">global technology leaders</span> to deliver 
            cutting-edge AI and insurance solutions to businesses across Kenya and East Africa. Through our strategic partnerships 
            with <span className="text-primary font-semibold">Perfios</span> and <span className="text-primary font-semibold">iNube Solutions</span>, 
            we empower African financial institutions and insurers with enterprise-grade technology that drives digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm bg-success/10 text-success border-success/30">
              <Globe className="w-4 h-4 mr-2" />
              Global Technology
            </Badge>
            <Badge variant="secondary" className="text-sm bg-primary/10 text-primary border-primary/30">
              <Users className="w-4 h-4 mr-2" />
              Local Expertise
            </Badge>
            <Badge variant="secondary" className="text-sm bg-warning/20 text-warning border-warning/40">
              <Zap className="w-4 h-4 mr-2" />
              Proven Solutions
            </Badge>
          </div>
        </div>
      </section>

      {/* Why These Partnerships Matter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-warning text-black mb-4">
              The DFT Advantage
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Why Our Partnerships Make a Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We don't just resell technology - we bring global innovation to African markets with local expertise, 
              implementation support, and customization for regional needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: "Global Standards",
                description: "Access to enterprise-grade solutions used by leading institutions worldwide",
                color: "text-primary"
              },
              {
                icon: Shield,
                title: "Local Compliance",
                description: "Full adaptation to East African regulatory requirements and data protection laws",
                color: "text-success"
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Dedicated local team for implementation, training, and ongoing technical assistance",
                color: "text-accent"
              },
              {
                icon: TrendingUp,
                title: "Proven ROI",
                description: "60-85% efficiency gains and significant cost savings for our clients",
                color: "text-warning"
              }
            ].map((benefit, idx) => (
              <Card key={idx} className="border-2 border-success/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-${benefit.color.split('-')[1]}/10 flex items-center justify-center mb-4`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner 1: Perfios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <Badge className="bg-success text-white mb-4">
                Technology Partner
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Perfios Software Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <span className="text-success font-semibold">Perfios</span> is a global leader in AI-powered financial data intelligence, 
                operating across <span className="font-semibold">18+ countries</span> and serving banks, NBFCs, fintechs, and insurance companies worldwide. 
                Their AI Operating System revolutionizes how financial institutions process applications, verify documents, and detect fraud.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As DFT's strategic technology partner, Perfios enables us to bring world-class document analysis, bank statement processing, 
                and AI-powered verification to East African financial institutions - solutions that previously required significant 
                international investment and technical complexity.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline" className="border-success text-success">
                  <FileText className="w-4 h-4 mr-2" />
                  Document Analysis
                </Badge>
                <Badge variant="outline" className="border-success text-success">
                  <Brain className="w-4 h-4 mr-2" />
                  AI-Powered Processing
                </Badge>
                <Badge variant="outline" className="border-success text-success">
                  <Lock className="w-4 h-4 mr-2" />
                  Fraud Detection
                </Badge>
                <Badge variant="outline" className="border-success text-success">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Real-Time Analytics
                </Badge>
              </div>
            </div>

            <Card className="border-2 border-primary/20 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/10 to-success/10 flex items-center justify-center">
                <img src={logoPerfios} alt="Perfios Logo" className="max-w-full max-h-full object-contain p-8" />
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-success mb-2">18+</div>
                    <div className="text-sm text-gray-600">Global Markets</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-success mb-2">85%</div>
                    <div className="text-sm text-gray-600">Faster Processing</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-success mb-2">1000+</div>
                    <div className="text-sm text-gray-600">Clients Worldwide</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-success mb-2">99%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Perfios Solutions Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">
              Perfios Solutions Available Through DFT
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Bank Statement Analyzer",
                  description: "AI-powered analysis of bank statements for credit assessment, reducing manual review time by 85%",
                  features: ["Automated Data Extraction", "Fraud Detection", "Credit Risk Assessment", "Multi-Bank Support"]
                },
                {
                  title: "Document Analyzers",
                  description: "Intelligent OCR and document processing for financial statements, tax returns, and compliance documents",
                  features: ["Smart OCR", "Tamper Detection", "Auto-Classification", "Data Validation"]
                },
                {
                  title: "KYC/KYB Solutions",
                  description: "Comprehensive identity verification and business onboarding with AI-powered validation",
                  features: ["Video KYC", "Liveness Detection", "Digital Signature", "Compliance Checks"]
                },
                {
                  title: "Fraud Detection Suite",
                  description: "Advanced AI models to detect document tampering, behavioral anomalies, and fraudulent patterns",
                  features: ["Document Verification", "Behavior Analysis", "Risk Scoring", "Real-Time Alerts"]
                },
                {
                  title: "Credit Assessment Module",
                  description: "Automated CAM generation and underwriting support for faster loan decisions",
                  features: ["Auto CAM Generation", "Risk Analytics", "Portfolio Insights", "Decision Support"]
                },
                {
                  title: "Account Aggregator Integration",
                  description: "Seamless connection to India's Account Aggregator framework with smart routing",
                  features: ["FIU++ Integration", "Smart Routing", "Real-Time Data", "Consent Management"]
                }
              ].map((solution, idx) => (
                <Card key={idx} className="border-2 border-success/20 hover:border-success hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{solution.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner 2: iNube Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <Card className="border-2 border-primary/20 overflow-hidden order-2 lg:order-1">
              <div className="h-64 bg-gradient-to-br from-primary/10 to-warning/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-5xl font-bold text-primary mb-4">iNube</div>
                  <div className="text-xl text-gray-600">Insurance Tech. Simplified.</div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-warning mb-2">25+</div>
                    <div className="text-sm text-gray-600">Insurance Partners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-warning mb-2">800+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-warning mb-2">300+</div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-warning mb-2">15+</div>
                    <div className="text-sm text-gray-600">Countries Served</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="order-1 lg:order-2">
              <Badge className="bg-warning text-black mb-4">
                Insurance Technology Partner
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                iNube Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <span className="text-warning font-semibold">iNube Solutions</span> is a pioneering insurance technology company 
                that has revolutionized how insurers operate through their innovative <span className="font-semibold">Low Code / No Code</span> platform. 
                With over <span className="font-semibold">800+ projects</span> and <span className="font-semibold">25+ insurance clients</span> globally, 
                they deliver comprehensive insurance management systems that are both powerful and easy to implement.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Through our partnership with iNube, DFT brings enterprise-grade insurance platforms to East African insurers, 
                enabling rapid digital transformation without massive technical overhead. Their solutions are battle-tested across 
                life, general, crop, health, motor, and travel insurance sectors.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline" className="border-warning text-warning">
                  <Building2 className="w-4 h-4 mr-2" />
                  Full Suite Platform
                </Badge>
                <Badge variant="outline" className="border-warning text-warning">
                  <Zap className="w-4 h-4 mr-2" />
                  Low Code / No Code
                </Badge>
                <Badge variant="outline" className="border-warning text-warning">
                  <Shield className="w-4 h-4 mr-2" />
                  Compliance Ready
                </Badge>
                <Badge variant="outline" className="border-warning text-warning">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Rapid Deployment
                </Badge>
              </div>
            </div>
          </div>

          {/* iNube Solutions Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">
              iNube Insurance Solutions Available Through DFT
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Life Insurance Platform",
                  description: "Complete policy administration system for individual and group life insurance products",
                  features: ["Policy Management", "Premium Calculation", "Claims Processing", "Agent Portal"]
                },
                {
                  title: "General Insurance System",
                  description: "Comprehensive platform for property, casualty, and general insurance operations",
                  features: ["Multi-Product Support", "Underwriting Engine", "Renewal Management", "Commission Tracking"]
                },
                {
                  title: "Health Insurance Solution",
                  description: "Specialized system for health insurance with network management and cashless processing",
                  features: ["Network Hospital Management", "Pre-Authorization", "Cashless Claims", "TPA Integration"]
                },
                {
                  title: "Motor Insurance Platform",
                  description: "End-to-end motor insurance management with instant quotations and vehicle verification",
                  features: ["Instant Quotes", "Vehicle Verification", "IDV Calculation", "Garage Management"]
                },
                {
                  title: "Crop Insurance System",
                  description: "Agricultural insurance platform with satellite integration and weather-based triggers",
                  features: ["Satellite Integration", "Weather Data", "Crop Damage Assessment", "Farmer Portal"]
                },
                {
                  title: "Travel Insurance Module",
                  description: "Quick-issue travel insurance with global assistance and emergency response",
                  features: ["Instant Issuance", "Global Coverage", "Emergency Assistance", "Multi-Currency Support"]
                }
              ].map((solution, idx) => (
                <Card key={idx} className="border-2 border-warning/20 hover:border-warning hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{solution.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-warning mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Make It Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-primary text-white mb-4">
              Our Implementation Approach
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              From Global Innovation to Local Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              DFT doesn't just connect you with technology - we ensure successful implementation, 
              adoption, and long-term value realization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation & Assessment",
                description: "We analyze your specific needs, existing systems, and regulatory requirements",
                color: "success"
              },
              {
                step: "02",
                title: "Solution Design",
                description: "Custom configuration and integration planning aligned with your business processes",
                color: "primary"
              },
              {
                step: "03",
                title: "Implementation & Training",
                description: "Seamless deployment with comprehensive training for your team",
                color: "warning"
              },
              {
                step: "04",
                title: "Support & Optimization",
                description: "Ongoing technical support and continuous optimization for maximum ROI",
                color: "accent"
              }
            ].map((phase, idx) => (
              <Card key={idx} className="relative overflow-hidden border-2 border-success/20 hover:shadow-lg transition-all duration-300">
                <div className={`absolute top-0 left-0 w-full h-2 bg-${phase.color}`}></div>
                <CardHeader className="pt-8">
                  <div className={`text-5xl font-bold text-${phase.color}/20 mb-2`}>
                    {phase.step}
                  </div>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {phase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-success text-white mb-4">
              Client Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Trusted by Leading Institutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our partnership solutions are transforming financial services across East Africa
            </p>
          </div>

          <PartnersCarousel />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-primary text-white mb-4">
              Common Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Partnership FAQs
            </h2>
          </div>
          <FAQSection faqs={partnersFAQs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-success relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Access World-Class Technology?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's discuss how Perfios and iNube solutions can transform your financial services operations. 
            Schedule a consultation to explore the possibilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              variant="warning"
              className="text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-success hover:bg-white/90 text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Solutions Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
