import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Shield, Users, Building2, FileText, BarChart3, Zap, Brain, Cpu, Target, Award } from "lucide-react";
import heroImage from "@/assets/hero-ai-robot.jpg";
import documentAnalysisImg from "@/assets/document-analysis.jpg";
import bankStatementImg from "@/assets/bank-statement.jpg";
import analyticsImg from "@/assets/analytics.jpg";
import cybersecurityImg from "@/assets/cybersecurity.jpg";
import cloudSolutionsImg from "@/assets/cloud-solutions.jpg";
import aiWorkflowInputImg from "@/assets/ai-workflow-input.jpg";
import aiWorkflowAnalysisImg from "@/assets/ai-workflow-analysis.jpg";
import aiWorkflowOutputImg from "@/assets/ai-workflow-output.jpg";
import bankingIndustryImg from "@/assets/banking-industry.jpg";
import financeIndustryImg from "@/assets/finance-industry.jpg";
import insuranceIndustryImg from "@/assets/insurance-industry.jpg";
import dashboardAnalyticsImg from "@/assets/dashboard-analytics.jpg";
import AnimatedStats from "@/components/AnimatedStats";
import FloatingAIElements from "@/components/FloatingAIElements";
import PartnersCarousel from "@/components/PartnersCarousel";
import AnimatedDashboard from "@/components/AnimatedDashboard";

const Index = () => {
  const statsData = [
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 500, label: "Projects Delivered", suffix: "+" },
    { value: 98, label: "Accuracy Rate", suffix: "%" },
    { value: 50, label: "Enterprise Clients", suffix: "+" }
  ];

  return (
    <div className="min-h-screen bg-background">
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
            <Button variant="hero" size="lg" className="group">
              Explore Our Solutions
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="neon-border">
              Schedule Consultation
            </Button>
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
      <Button 
        size="lg" 
        className="bg-blue-600 hover:bg-blue-700 text-white transition-transform transform hover:scale-105"
      >
        Learn More About Our Approach
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={documentAnalysisImg} 
                  alt="Document Analysis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Document Analysis</CardTitle>
                <CardDescription className="text-base">
                  AI-powered document processing for automated credit underwriting. 
                  Advanced OCR and NLP technologies extract and validate key information 
                  from financial documents with 99% accuracy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={bankStatementImg} 
                  alt="Bank Statement Analysis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Bank Statement Analysis</CardTitle>
                <CardDescription className="text-base">
                  Digitize and analyze bank statements with AI insights. 
                  Real-time transaction categorization, fraud detection, and 
                  financial behavior analysis for instant credit decisions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={analyticsImg} 
                  alt="Predictive Analytics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Predictive Analytics</CardTitle>
                <CardDescription className="text-base">
                  AI-driven forecasting and recommendation systems. 
                  Machine learning models predict market trends, customer behavior, 
                  and risk patterns with industry-leading precision.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={cybersecurityImg} 
                  alt="Cybersecurity Solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Cybersecurity Solutions</CardTitle>
                <CardDescription className="text-base">
                  AI-enhanced digital forensics and security solutions. 
                  Advanced threat detection, incident response, and 
                  comprehensive protection for financial institutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={cloudSolutionsImg} 
                  alt="Cloud Solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Cloud Solutions</CardTitle>
                <CardDescription className="text-base">
                  AI-optimized cloud infrastructure and management. 
                  Scalable, secure cloud architectures designed specifically 
                  for financial services and compliance requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={analyticsImg} 
                  alt="Custom Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Custom Development</CardTitle>
                <CardDescription className="text-base">
                  Tailored AI-integrated software solutions. 
                  Bespoke fintech applications built with cutting-edge AI 
                  technologies to meet your specific business requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-gray-300">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                  Explore Banking Solutions <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
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
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                  Explore Finance Solutions <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
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
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                  Explore Insurance Solutions <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-gray-300">
              View All Industries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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

{/* The DFT Advantage section */}
    import { motion } from "framer-motion";

export default function StatsDiamond() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-white overflow-hidden">
      {/* Floating AI Elements */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-50 blur-xl"
          style={{
            width: Math.random() * 50 + 20,
            height: Math.random() * 50 + 20,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: [
              "rgba(65,105,225,0.6)", // Royal Blue
              "rgba(138,43,226,0.6)", // Violet
              "rgba(148,0,211,0.6)", // Purple
              "rgba(144,238,144,0.6)", // Light Green
              "rgba(57,255,20,0.6)", // Neon Green
            ][Math.floor(Math.random() * 5)],
          }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Left Section - Text */}
      <div className="relative z-10 md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Experience 99.9999% Quality
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our AI-driven solutions deliver six nines of quality, ensuring 
          world-class reliability, precision, and performance. 
          Trusted by organizations that demand excellence, 
          our platform brings intelligence to every decision.
        </p>
      </div>

      {/* Right Section - Diamond Stats */}
      <div className="relative z-10 md:w-1/2 flex items-center justify-center">
        <div className="relative w-72 h-72 flex items-center justify-center">
          {/* Top Tile */}
          <motion.div
            className="absolute w-32 h-32 flex items-center justify-center text-white text-xl font-bold shadow-lg"
            style={{
              background: "linear-gradient(135deg, #4169E1, #1E3A8A)", // Royal Blue
              transform: "rotate(45deg)",
              top: "-40%",
            }}
            whileHover={{ scale: 1.1 }}
          >
            AI
          </motion.div>

          {/* Right Tile */}
          <motion.div
            className="absolute w-32 h-32 flex items-center justify-center text-white text-xl font-bold shadow-lg"
            style={{
              background: "linear-gradient(135deg, #8A2BE2, #6D28D9)", // Violet
              transform: "rotate(45deg)",
              right: "-40%",
            }}
            whileHover={{ scale: 1.1 }}
          >
            99.9999
          </motion.div>

          {/* Bottom Tile */}
          <motion.div
            className="absolute w-32 h-32 flex items-center justify-center text-white text-xl font-bold shadow-lg"
            style={{
              background: "linear-gradient(135deg, #9400D3, #4C1D95)", // Purple
              transform: "rotate(45deg)",
              bottom: "-40%",
            }}
            whileHover={{ scale: 1.1 }}
          >
            Secure
          </motion.div>

          {/* Left Tile */}
          <motion.div
            className="absolute w-32 h-32 flex items-center justify-center text-white text-xl font-bold shadow-lg"
            style={{
              background: "linear-gradient(135deg, #16A34A, #15803D)", // Light Green
              transform: "rotate(45deg)",
              left: "-40%",
            }}
            whileHover={{ scale: 1.1 }}
          >
            Fast
          </motion.div>
        </div>
      </div>
    </div>
  );
}



      {/* Partners Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text-neon">
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent/5 to-primary/5">
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

export default Index;
