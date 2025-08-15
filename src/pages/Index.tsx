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
      <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Dashboard illustration */}
            <div className="relative">
              <AnimatedDashboard />
              
              {/* Floating abstract wave shapes */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-gray-200/40 to-gray-300/40 rounded-full blur-xl"></div>
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-gray-100/40 to-gray-200/40 rounded-full blur-xl"></div>
            </div>

            {/* Right side - Company introduction */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                  Your Strategic Partner in AI-Powered Solutions
                </h2>
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
              </div>

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

              <div className="pt-4">
                <Button variant="outline" size="lg" className="border-primary/20">
                  Learn More About Our Approach
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
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

      {/* The DFT Advantage Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text-neon">
              The DFT Advantage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Why leading financial institutions choose DFT Consult for their AI transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center neon-glow">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced AI Technology</h3>
                  <p className="text-muted-foreground">
                    Cutting-edge machine learning algorithms with 98% accuracy in financial data analysis
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center neon-glow">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategic Partnerships</h3>
                  <p className="text-muted-foreground">
                    Collaborations with 50+ leading financial institutions and technology providers
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-glow to-accent-glow flex items-center justify-center neon-glow">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Accuracy</h3>
                  <p className="text-muted-foreground">
                    Industry-leading precision with consistent 98% accuracy across all AI models
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-glow to-primary-glow flex items-center justify-center neon-glow">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Success Track Record</h3>
                  <p className="text-muted-foreground">
                    15+ years of experience with 500+ successful project implementations
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="neon-border text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">AI Accuracy</div>
              </Card>
              <Card className="neon-border text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Partners</div>
              </Card>
              <Card className="neon-border text-center p-6">
                <div className="text-4xl font-bold text-primary-glow mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </Card>
              <Card className="neon-border text-center p-6">
                <div className="text-4xl font-bold text-accent-glow mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

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