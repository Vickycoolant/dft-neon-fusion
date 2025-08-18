import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/dft-solutions-hero.jpg";
import dataIntelligenceImg from "@/assets/data-intelligence.jpg";
import forensicsRiskImg from "@/assets/forensics-risk.jpg";
import techSolutionsImg from "@/assets/tech-solutions.jpg";
import decisionIntelligenceImg from "@/assets/decision-intelligence.jpg";
import trainingCapacityImg from "@/assets/training-capacity.jpg";
import securityComplianceImg from "@/assets/security-compliance.jpg";
import aiAutomationImg from "@/assets/ai-automation.jpg";
import africanFintechImg from "@/assets/african-fintech.jpg";
import { 
  Database, 
  Shield, 
  Code, 
  TrendingUp, 
  GraduationCap,
  ChevronRight,
  Phone,
  Mail
} from "lucide-react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const solutionCategories = [
    {
      id: "data-intelligence",
      title: "Data Intelligence",
      summary: "Harness financial documents and analytics for smarter decisions.",
      image: dataIntelligenceImg,
      icon: Database,
      services: [
        "Bank Statement Analysis",
        "GST / ITR Analysis", 
        "Payslip & Credit Card Statement Analysis",
        "Financial Statement Analysis",
        "Predictive & Prescriptive Analytics",
        "Customer Segmentation & Benchmarking"
      ]
    },
    {
      id: "forensics-risk",
      title: "Forensics & Risk Management",
      summary: "Detect fraud, investigate misconduct, and protect digital assets.",
      image: forensicsRiskImg,
      icon: Shield,
      services: [
        "Digital Forensics & Cyber Incident Response",
        "Financial Investigations & Litigation Support",
        "Employee Misconduct & IP Protection",
        "Fraud Detection (tamper, behavioral, deepfake)",
        "Health Insurance Fraud Detection",
        "AML / PEP / UBO Compliance Screening"
      ]
    },
    {
      id: "technology-solutions",
      title: "Technology Solutions", 
      summary: "Deploy cutting-edge software, cloud, and embedded finance tools.",
      image: techSolutionsImg,
      icon: Code,
      services: [
        "Insurtech & Embedded Finance (PCG, FIU++, FIP++)",
        "Open Finance APIs & Consent Management",
        "Custom Software Development",
        "Data Management & Cloud Solutions",
        "Cybersecurity Solutions",
        "IT Infrastructure & Emerging Technologies"
      ]
    },
    {
      id: "decision-intelligence",
      title: "Decision Intelligence & Credit Insights",
      summary: "Automate credit assessments and gain 360° customer insights.",
      image: decisionIntelligenceImg,
      icon: TrendingUp,
      services: [
        "Automated Credit Assessment (CAM)",
        "Personal Finance Management (PFM)",
        "LeadGen (SME/MSME lead generation)",
        "Garner (Collections Optimization)",
        "Nexus AI & Credit Assist (GenAI underwriting)",
        "Business & Customer Due Diligence Reports"
      ]
    }
  ];

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
      category: "Banking"
    },
    {
      title: "Insurance",
      subtitle: "Fraud Detection & Claims Automation", 
      description: "Advanced fraud detection algorithms and automated claims processing that reduce false positives and speed up legitimate claim settlements.",
      category: "Insurance"
    },
    {
      title: "Banking",
      subtitle: "Onboarding & AML/KYC Compliance",
      description: "Streamlined customer onboarding with automated identity verification, risk screening, and compliance reporting for regulatory requirements.",
      category: "Banking"
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
            className="bg-[#4169E1] hover:bg-[#4169E1]/90 text-white px-8 py-4 text-lg rounded-lg font-semibold"
          >
            Explore Our Solutions
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Solutions Categories */}
      <section id="solution-categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-6">
              DFT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-driven solutions designed for the modern financial ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionCategories.map((category) => {
              const IconComponent = category.icon;
              const isHovered = hoveredCard === category.id;
              
              return (
                <Card 
                  key={category.id}
                  className={`bg-white border-0 shadow-md transition-all duration-300 overflow-hidden ${
                    isHovered ? 'shadow-xl transform -translate-y-2' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className={`w-full h-full object-cover transition-transform duration-300 ${
                        isHovered ? 'scale-105' : ''
                      }`}
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#4169E1]/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-[#4169E1]" />
                      </div>
                      <CardTitle className="text-xl font-bold text-[#4169E1]">
                        {category.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 text-base">
                      {category.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {category.services.map((service, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#4169E1] rounded-full flex-shrink-0"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1] hover:text-white"
                    >
                      Learn More
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
            
            {/* Training & Capacity Building Card */}
            <Card 
              className={`bg-white border-0 shadow-md transition-all duration-300 overflow-hidden md:col-span-2 ${
                hoveredCard === 'training' ? 'shadow-xl transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredCard('training')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                  <img 
                    src={trainingCapacityImg} 
                    alt="Training & Capacity Building"
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      hoveredCard === 'training' ? 'scale-105' : ''
                    }`}
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#4169E1]/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-[#4169E1]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#4169E1]">
                      Training & Capacity Building
                    </h3>
                  </div>
                  <p className="text-gray-600 text-base mb-4">
                    Upskill teams in fintech, fraud detection, and data-driven innovation.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {[
                      "FinTech Innovation Workshops",
                      "Fraud & Risk Management Training", 
                      "Data Analytics for Decision Makers",
                      "(Mark as Coming Soon if not yet active)"
                    ].map((service, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#4169E1] rounded-full flex-shrink-0"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1] hover:text-white"
                  >
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
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
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
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
      <section className="py-20 bg-[#4169E1]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your financial workflows?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join leading financial institutions who trust DFT Consult to drive their digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-[#4169E1] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Book a Consultation
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#4169E1] px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Navigation Styles */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Services;