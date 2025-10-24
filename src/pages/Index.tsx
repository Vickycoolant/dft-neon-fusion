import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Shield, Users, Building2, FileText, BarChart3, Zap, Brain, Cpu, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ai-robot.jpg";
import documentAnalysisImg from "@/assets/document-analysis.jpg";
import bankStatementImg from "@/assets/bank-statement.jpg";
import analyticsImg from "@/assets/analytics.jpg";
import cybersecurityImg from "@/assets/cybersecurity.jpg";
import cloudSolutionsImg from "@/assets/cloud-solutions.jpg";
import aiWorkflowInputImg from "@/assets/image-9.jpg";
import aiWorkflowAnalysisImg from "@/assets/ai-workflow-analysis.jpg";
import aiWorkflowOutputImg from "@/assets/ai-workflow-output.jpg";
import bankingIndustryImg from "@/assets/image-3.jpg";
import financeIndustryImg from "@/assets/image-10.jpg";
import insuranceIndustryImg from "@/assets/insurance-industry.jpg";
import dashboardAnalyticsImg from "@/assets/dashboard-analytics.jpg";
import AnimatedStats from "@/components/AnimatedStats";
import FloatingAIElements from "@/components/FloatingAIElements";
import PartnersCarousel from "@/components/PartnersCarousel";
import AnimatedDashboard from "@/components/AnimatedDashboard";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  const statsData = [
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 300, label: "Projects Delivered", suffix: "+" },
    { value: 99, label: "Accuracy Rate", suffix: "%" },
    { value: 50, label: "Enterprise Clients", suffix: "+" }
  ];

  const homeFAQs = [
    {
      question: "What services does DFT Consult provide?",
      answer: "DFT Consult offers three major service categories: Data Analysis (AI-driven analytics and forecasting), Digital Forensics (security solutions and fraud detection), and Technology Consulting (strategic guidance and custom AI solutions for fintech applications)."
    },
    {
      question: "Which industries does DFT Consult specialize in?",
      answer: "We specialize in the Banking & Financial Services, Finance & Investment, and Insurance & Risk Management sectors. Our AI-powered solutions are specifically tailored for these industries to enhance operations, reduce risk, and improve decision-making."
    },
    {
      question: "How does DFT Consult's AI technology work?",
      answer: "Our AI workflow follows three stages: Input (raw documents and financial data), AI Analysis (advanced machine learning algorithms process and extract insights), and Output (comprehensive reports, risk assessments, credit scores, and actionable recommendations)."
    },
    {
      question: "What makes DFT Consult's solutions reliable?",
      answer: "We guarantee 99.9999% quality assurance in data handling and analytics. Our solutions are built on cutting-edge AI innovation, designed for scalability to grow with your business, and backed by robust architecture for uninterrupted, consistent performance."
    },
    {
      question: "Can DFT Consult integrate with our existing systems?",
      answer: "Yes, our solutions are designed for seamless integration with existing systems. We work with cloud platforms like Microsoft Azure and AWS, and our technology consulting services include custom API development and system integration tailored to your specific infrastructure."
    },
    {
      question: "How can we get started with DFT Consult?",
      answer: "Simply schedule a consultation with our team. We'll discuss your specific business needs, demonstrate relevant solutions, and create a customized implementation plan. Contact us through our website or reach out to our business development team directly."
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="AI Technology Hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        </div>
        
        <FloatingAIElements />
        
        <div className="container-max text-center relative z-10">
          <Badge variant="outline" className="neon-border mb-6 text-sm p-2">
            🚀 AI-Powered Fintech Solutions
          </Badge>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 gradient-text">
            DFT Consult
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transforming Financial Technology with Advanced AI Solutions. 
            Over 15 years of experience in delivering cutting-edge fintech innovations.
          </p>
          
          {/* Animated Statistics */}
          <div className="mb-12 max-w-4xl mx-auto">
            <AnimatedStats stats={statsData} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button variant="hero" size="lg" className="group">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="neon-border">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

     {/* Company Introduction Section */}
<section className="relative section-padding bg-gradient-to-br from-background via-muted/20 to-background">
  <div className="container-max text-center">
    {/* Centered headline */}
    <h2 className="text-4xl md:text-6xl font-bold mb-10 text-primary">
      Your Strategic Partner in AI-Powered Solutions
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left side - Dashboard illustration */}
      <div className="relative">
        <AnimatedDashboard />
        
        {/* Floating abstract wave shapes */}
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-gray-200/40 to-gray-300/40 rounded-full blur-xl"></div>
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-gray-100/40 to-gray-200/40 rounded-full blur-xl"></div>
      </div>

      {/* Right side - Company introduction */}
      <div className="space-y-8 text-left">
        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-6">
            DFT Consult is a leading technology and advisory firm delivering AI-powered solutions 
            to the banking, finance, and insurance industries. We partner with international 
            companies such as <span className="text-primary font-semibold">Perfios</span> — an Indian top-tier technology leader — 
            to provide intelligent automation tools that transform complex financial data into 
            instant, accurate insights.
          </p>
          <p className="mb-6">
            Our expertise spans automated credit underwriting, insurance decision-making, and 
            risk management, as well as the development of tailored software solutions to meet 
            diverse client needs. With a strong focus on streamlining processes and enhancing 
            decision accuracy, we empower financial institutions to make smarter, faster, and 
            more reliable business choices.
          </p>
          <p>
            DFT Consult's approach combines deep industry knowledge with innovative technology, 
            ensuring clients stay ahead in a competitive and rapidly evolving market.
          </p>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-3 bg-white/80 rounded-lg px-4 py-3 shadow-sm border border-gray-100">
            <Building2 className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Banking Solutions</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 rounded-lg px-4 py-3 shadow-sm border border-gray-100">
            <TrendingUp className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Financial Analytics</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 rounded-lg px-4 py-3 shadow-sm border border-gray-100">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Insurance Tech</span>
          </div>
        </div>
      </div>
    </div>

    {/* Centered CTA button */}
    <div className="pt-10 flex justify-center">
      <Link to="/about">
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white transition-transform transform hover:scale-105"
        >
          Learn More About Our Approach
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  </div>
</section>


      {/* DFT Solutions Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
              DFT Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI-powered solutions designed for the modern financial industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={analyticsImg} 
                  alt="Data Analysis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Data Analysis</CardTitle>
                <CardDescription className="text-base">
                  AI-driven data analytics and forecasting systems. 
                  Machine learning models that predict market trends, analyze customer behavior, 
                  and identify risk patterns with industry-leading precision.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/services#data-intelligence">
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={cybersecurityImg} 
                  alt="Digital Forensics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Digital Forensics</CardTitle>
                <CardDescription className="text-base">
                  AI-enhanced digital forensics and security solutions. 
                  Advanced threat detection, incident response, fraud investigation, and 
                  comprehensive cybersecurity protection for financial institutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/services#forensics-risk">
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={cloudSolutionsImg} 
                  alt="Technology Consulting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Technology Consulting</CardTitle>
                <CardDescription className="text-base">
                  Strategic technology consulting and custom AI solutions. 
                  Expert guidance on digital transformation, system integration, and 
                  bespoke fintech applications tailored to your business needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/services#technology-solutions">
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-gray-300">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized AI solutions tailored for Banking, Finance, and Insurance sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={bankingIndustryImg} 
                  alt="Banking Industry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center mb-3">
                  <Building2 className="w-6 h-6 text-primary mr-2" />
                  <CardTitle className="text-xl font-semibold text-primary">Banking & Financial Services</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Comprehensive AI-powered solutions for modern banking operations. 
                  From automated credit underwriting to real-time fraud detection, 
                  transforming traditional banking processes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/industry#banking">
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                    Explore Banking Solutions <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={financeIndustryImg} 
                  alt="Finance Industry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-6 h-6 text-primary mr-2" />
                  <CardTitle className="text-xl font-semibold text-primary">Finance & Investment</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Advanced analytics and AI solutions for investment and financial planning. 
                  Sophisticated tools for portfolio optimization, market analysis, 
                  and risk management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/industry#finance">
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                    Explore Finance Solutions <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={insuranceIndustryImg} 
                  alt="Insurance Industry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center mb-3">
                  <Shield className="w-6 h-6 text-primary mr-2" />
                  <CardTitle className="text-xl font-semibold text-primary">Insurance & Risk Management</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Intelligent insurance solutions powered by machine learning and AI. 
                  From claims processing to risk assessment, enhancing efficiency 
                  and customer satisfaction.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/industry#insurance">
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                    Explore Insurance Solutions <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/industry">
              <Button variant="outline" size="lg" className="border-gray-300">
                View All Industries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Showcase Section */}
      <section className="section-padding bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
              AI Technology Workflow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our sophisticated AI-powered solutions transform your data into actionable insights
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-12">
            <div className="flex flex-col items-center max-w-sm">
              <div className="w-32 h-32 rounded-2xl overflow-hidden mb-6 neon-glow">
                <img 
                  src={aiWorkflowInputImg} 
                  alt="Data Input"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 gradient-text">Input</h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                Raw documents, bank statements, financial data, and unstructured information 
                from multiple sources
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-20 h-1 lg:w-1 lg:h-20 bg-gradient-to-r lg:bg-gradient-to-b from-primary to-accent rounded-full neon-glow"></div>
            </div>

            <div className="flex flex-col items-center max-w-sm">
              <div className="w-32 h-32 rounded-2xl overflow-hidden mb-6 neon-glow">
                <img 
                  src={aiWorkflowAnalysisImg} 
                  alt="AI Analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 gradient-text">AI Analysis</h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                Advanced machine learning algorithms process, validate, and extract 
                meaningful patterns and insights
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-20 h-1 lg:w-1 lg:h-20 bg-gradient-to-r lg:bg-gradient-to-b from-accent to-primary rounded-full neon-glow"></div>
            </div>

            <div className="flex flex-col items-center max-w-sm">
              <div className="w-32 h-32 rounded-2xl overflow-hidden mb-6 neon-glow">
                <img 
                  src={aiWorkflowOutputImg} 
                  alt="Intelligent Output"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 gradient-text">Output</h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                Comprehensive reports, risk assessments, credit scores, and 
                actionable business recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Advantage Section */}
<section className="relative w-full py-24 bg-white">
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#4169E1]">
    The DFT Advantage
  </h2>

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 px-4">
    {/* Left Text Section */}
    <div className="flex-1 text-gray-700 text-lg leading-relaxed pl-6 space-y-6">
      <p className="flex items-start gap-2">
        <span className="text-[#4169E1] font-bold">✔</span>
        <strong className="text-[#4169E1]">99.9999% Quality:</strong> Our AI solutions guarantee the highest reliability and precision and assurance in data handling and analytics, ensuring top-tier service for our clients.
      </p>
      <p className="flex items-start gap-2">
        <span className="text-[#9400D3] font-bold">✔</span>
        <strong className="text-[#9400D3]">AI Innovation:</strong> Constantly innovating, we implement cutting-edge AI technologies that give businesses a competitive advantage.
      </p>
      <p className="flex items-start gap-2">
        <span className="text-[#00FF7F] font-bold">✔</span>
        <strong className="text-[#00FF7F]">Scalability:</strong> Our solutions are designed to grow seamlessly with your business, accommodating increasing data and operational complexity.
      </p>
      <p className="flex items-start gap-2">
        <span className="text-[#8A2BE2] font-bold">✔</span>
        <strong className="text-[#8A2BE2]">Reliability:</strong> With robust architecture and vigilant monitoring, we ensure uninterrupted service and consistent performance.
      </p>
    </div>

    {/* Visual Section: Diamond layout */}
    <div className="flex-1 relative flex items-center justify-center min-h-[450px] md:min-h-[550px] px-4">
      {/* Decorative hollow circles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`circle-${i}`}
          className="absolute rounded-full border-2 opacity-20"
          style={{
            width: `${100 + i * 40}px`,
            height: `${100 + i * 40}px`,
            borderColor: ["#4169E1", "#9400D3", "#8A2BE2"][i % 3],
            top: `${10 + i * 5}%`,
            left: `${10 + i * 5}%`,
            animation: `float ${6 + i * 2}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] mx-auto">
        {/* Top Diamond */}
        <div
          className="absolute w-32 h-32 md:w-56 md:h-56 flex items-center justify-center text-center text-white font-bold text-sm md:text-lg rounded-lg hover:scale-105 transition-transform shadow-lg"
          style={{
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(45deg)",
            background: "linear-gradient(135deg, rgba(65,105,225,1), rgba(65,105,225,0.6))",
            zIndex: 10,
          }}
        >
          <div className="-rotate-45 px-2 md:px-4 leading-snug">99.9999% Quality Assurance</div>
        </div>

        {/* Right Diamond */}
        <div
          className="absolute w-32 h-32 md:w-56 md:h-56 flex items-center justify-center text-center text-white font-bold text-sm md:text-lg rounded-lg hover:scale-105 transition-transform shadow-lg"
          style={{
            top: "50%",
            right: "0%",
            transform: "translate(50%, -50%) rotate(45deg)",
            background: "linear-gradient(135deg, rgba(148,0,211,1), rgba(148,0,211,0.6))",
          }}
        >
          <div className="-rotate-45 px-2 md:px-4 leading-snug">AI Innovation</div>
        </div>

        {/* Bottom Diamond */}
        <div
          className="absolute w-32 h-32 md:w-56 md:h-56 flex items-center justify-center text-center text-white font-bold text-sm md:text-lg rounded-lg hover:scale-105 transition-transform shadow-lg"
          style={{
            bottom: "0%",
            left: "50%",
            transform: "translate(-50%, 50%) rotate(45deg)",
            background: "linear-gradient(135deg, rgba(0,255,127,1), rgba(0,255,127,0.6))",
          }}
        >
          <div className="-rotate-45 px-2 md:px-4 leading-snug">Scalability</div>
        </div>

        {/* Left Diamond */}
        <div
          className="absolute w-32 h-32 md:w-56 md:h-56 flex items-center justify-center text-center text-white font-bold text-sm md:text-lg rounded-lg hover:scale-105 transition-transform shadow-lg"
          style={{
            top: "50%",
            left: "0%",
            transform: "translate(-50%, -50%) rotate(45deg)",
            background: "linear-gradient(135deg, rgba(138,43,226,1), rgba(138,43,226,0.6))",
          }}
        >
          <div className="-rotate-45 px-2 md:px-4 leading-snug">Reliability</div>
        </div>
      </div>
    </div>
  </div>

  {/* Floating animation */}
  <style>{`
    @keyframes float {
      0% { transform: translateY(0px); opacity: 0.4; }
      50% { transform: translateY(-15px); opacity: 0.6; }
      100% { transform: translateY(0px); opacity: 0.4; }
    }
  `}</style>
</section>





      {/* Partners Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
              Our Strategic Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver comprehensive AI-powered solutions
            </p>
          </div>
          
          <PartnersCarousel />
        </div>
      </section>

      {/* Updates & Events Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
              Latest Updates & Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest developments and industry insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Revolution in Credit Scoring",
                date: "December 2024",
                description: "How artificial intelligence is transforming traditional credit assessment methods in the banking sector, with new machine learning models achieving 98% accuracy in risk prediction.",
                category: "Industry Insight",
                image: analyticsImg
              },
              {
                title: "Strategic Partnership Expansion",
                date: "November 2024", 
                description: "DFT Consult announces major partnership with leading East African banks to implement AI-powered document analysis solutions across 50+ branches.",
                category: "Partnership",
                image: bankStatementImg
              },
              {
                title: "Next-Gen AI Platform Launch",
                date: "October 2024",
                description: "Launch of our comprehensive AI analytics platform featuring real-time processing, enhanced security, and advanced predictive capabilities for financial institutions.",
                category: "Product Launch",
                image: aiWorkflowAnalysisImg
              }
            ].map((update, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img 
                    src={update.image} 
                    alt={update.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {update.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{update.date}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {update.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {update.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                    Read More 
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={homeFAQs} variant="home" />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#4169E1]">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how our AI-powered solutions can streamline your operations 
              and provide competitive advantages in today's digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Schedule Consultation
                </Button>
              </Link>
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

export default Index;
