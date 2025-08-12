import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Building2, 
  Shield, 
  CreditCard, 
  TrendingUp,
  FileText,
  BarChart3,
  Users,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  ExternalLink
} from "lucide-react";
import heroImage from "@/assets/hero-ai-robot.jpg";

const Index = () => {
  const [currentPartner, setCurrentPartner] = useState(0);

  const partners = [
    { name: "TechCorp Solutions", logo: "🏢", type: "Technology Partner" },
    { name: "FinancePlus Bank", logo: "🏦", type: "Banking Partner" },
    { name: "InsureGuard Ltd", logo: "🛡️", type: "Insurance Partner" },
    { name: "DataWise Analytics", logo: "📊", type: "Data Partner" },
    { name: "CyberSec Pro", logo: "🔒", type: "Security Partner" },
    { name: "CloudTech Systems", logo: "☁️", type: "Cloud Partner" },
    { name: "AI Innovations Lab", logo: "🤖", type: "AI Research" },
    { name: "RegTech Solutions", logo: "⚖️", type: "Compliance" }
  ];

  const industries = [
    {
      title: "Banking & Financial Services",
      icon: Building2,
      description: "AI-powered credit underwriting, fraud detection, and automated document processing for modern banking operations.",
      link: "/industry#banking",
      color: "from-primary to-primary-glow"
    },
    {
      title: "Finance & Investment",
      icon: TrendingUp,
      description: "Advanced analytics, portfolio optimization, and predictive market analysis for investment professionals.",
      link: "/industry#finance",
      color: "from-accent to-accent-glow"
    },
    {
      title: "Insurance & Risk Management",
      icon: Shield,
      description: "Intelligent claims processing, risk assessment, and fraud detection for the insurance industry.",
      link: "/industry#insurance",
      color: "from-primary-glow to-accent"
    }
  ];

  const updates = [
    {
      title: "AI Document Analyzer 3.0 Launch",
      description: "Enhanced processing speed and 99.7% accuracy rate achieved",
      date: "Dec 2024",
      type: "Product Update",
      icon: "🚀"
    },
    {
      title: "Partnership with Major East African Bank",
      description: "Expanding our reach across the regional banking sector",
      date: "Nov 2024",
      type: "Partnership",
      icon: "🤝"
    },
    {
      title: "AI Innovation Conference - Nairobi",
      description: "Join us at the premier fintech conference on January 15th",
      date: "Jan 2025",
      type: "Event",
      icon: "📅"
    },
    {
      title: "ISO 27001 Certification Achieved",
      description: "Strengthening our commitment to data security and compliance",
      date: "Oct 2024",
      type: "Certification",
      icon: "🏆"
    }
  ];

  // Auto-rotate partners carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % Math.max(1, partners.length - 4));
    }, 3000);
    return () => clearInterval(interval);
  }, [partners.length]);

  const nextPartners = () => {
    setCurrentPartner((prev) => (prev + 1) % Math.max(1, partners.length - 4));
  };

  const prevPartners = () => {
    setCurrentPartner((prev) => (prev - 1 + Math.max(1, partners.length - 4)) % Math.max(1, partners.length - 4));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="animate-fade-in">
              <Badge variant="outline" className="neon-border mb-6">
                🤖 AI-Powered Fintech Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Transform</span> Your 
                <br />
                <span className="gradient-text-neon">Financial</span> Operations
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                With over 14 years of industry expertise, DFT Consult delivers cutting-edge 
                AI-powered solutions that revolutionize banking, finance, and insurance operations 
                across East Africa and beyond.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">200+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text-neon">10M+</div>
                  <div className="text-sm text-muted-foreground">Documents Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">98%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services">
                    Explore Our Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="neon-border" asChild>
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden neon-border">
                <img 
                  src={heroImage} 
                  alt="AI-powered fintech solutions"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl neon-border animate-glow">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">AI Processing Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Showcase Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <Badge variant="outline" className="neon-border mb-4">
              🧠 AI Technology Workflow
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
              How Our AI Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our advanced AI technology transforms raw data into actionable insights
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center text-center animate-fade-in">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center neon-glow mb-6">
                <FileText className="w-14 h-14 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 gradient-text">Input</h3>
              <p className="text-muted-foreground max-w-xs">
                Raw documents, bank statements, financial data, and various file formats
              </p>
            </div>

            <div className="flex items-center animate-fade-in">
              <ArrowRight className="w-8 h-8 text-accent animate-pulse" />
            </div>

            <div className="flex flex-col items-center text-center animate-fade-in">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center neon-glow mb-6">
                <BarChart3 className="w-14 h-14 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 gradient-text-neon">AI Analysis</h3>
              <p className="text-muted-foreground max-w-xs">
                Advanced machine learning algorithms process and analyze data patterns
              </p>
            </div>

            <div className="flex items-center animate-fade-in">
              <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
            </div>

            <div className="flex flex-col items-center text-center animate-fade-in">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary-glow to-accent-glow flex items-center justify-center neon-glow mb-6">
                <TrendingUp className="w-14 h-14 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 gradient-text">Output</h3>
              <p className="text-muted-foreground max-w-xs">
                Intelligent reports, risk assessments, and actionable recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text-neon">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized AI solutions for Banking, Finance, and Insurance sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Link key={index} to={industry.link}>
                  <Card className="neon-border group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardHeader className="text-center">
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${industry.color}/20 flex items-center justify-center neon-glow group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-10 h-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:gradient-text-neon transition-all duration-300">
                        {industry.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center leading-relaxed">
                        {industry.description}
                      </CardDescription>
                      <div className="mt-4 flex items-center justify-center text-primary group-hover:text-accent transition-colors">
                        <span className="text-sm font-medium mr-2">Learn More</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Trusted Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver exceptional results
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPartners}
                className="neon-border"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextPartners}
                className="neon-border"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {partners.slice(currentPartner, currentPartner + 5).map((partner, index) => (
                <Card key={index} className="neon-border text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-2">{partner.logo}</div>
                    <h3 className="font-semibold text-sm mb-1">{partner.name}</h3>
                    <Badge variant="outline" className="text-xs">{partner.type}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-6">
              <Button variant="outline" className="neon-border" asChild>
                <Link to="/partners">View All Partners</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Updates & Events */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-neon">
              Latest Updates & Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed about our latest developments and industry events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {updates.map((update, index) => (
              <Card key={index} className="neon-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl">{update.icon}</div>
                    <Badge variant="outline">{update.type}</Badge>
                  </div>
                  <CardTitle className="text-lg font-bold leading-tight">
                    {update.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {update.description}
                  </CardDescription>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {update.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join over 200 financial institutions that trust DFT Consult to deliver 
              innovative AI-powered solutions. Let's discuss how we can help you achieve 
              your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="neon-border" asChild>
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
