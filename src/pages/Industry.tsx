import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Shield, CreditCard, TrendingUp, Users, Globe, AlertTriangle, CheckCircle } from "lucide-react";
import bankingChallengesImg from "@/assets/banking-challenges.jpg";
import industryHeroImg from "@/assets/finance-hero.jpg";

const Industry = () => {
  const industries = [
    {
      id: "banking",
      title: "Banking & Financial Services",
      icon: Building2,
      description: "Comprehensive AI-powered solutions for modern banking operations",
      fullDescription: "Our banking solutions leverage artificial intelligence to revolutionize traditional banking processes. From automated credit underwriting to real-time fraud detection, we help financial institutions enhance efficiency, reduce risk, and improve customer experience through cutting-edge technology.",
      features: [
        "AI-powered credit scoring and underwriting",
        "Automated document verification and processing",
        "Real-time fraud detection and prevention",
        "Customer behavior analytics and insights",
        "Regulatory compliance automation",
        "Risk assessment and portfolio management"
      ],
      stats: [
        { label: "Processing Time Reduction", value: "97%" },
        { label: "Accuracy Improvement", value: "99%" },
        { label: "Cost Savings", value: "89%" }
      ],
      challenges: [
        {
          title: "Manual Document Verification",
          description: "Time-consuming manual processing of loan applications and identity documents"
        },
        {
          title: "Fraud Detection Gaps",
          description: "Traditional methods struggle to identify sophisticated financial fraud patterns"
        },
        {
          title: "Slow Credit Underwriting",
          description: "Legacy systems cause delays in credit approval processes"
        },
        {
          title: "Regulatory Compliance",
          description: "Difficulty maintaining compliance with evolving financial regulations"
        }
      ],
      solutions: [
        {
          title: "AI Document Analysis",
          description: "Automated document verification with 99% accuracy and instant processing"
        },
        {
          title: "ML Fraud Detection",
          description: "Advanced algorithms that detect patterns invisible to traditional methods"
        },
        {
          title: "Instant Credit Scoring",
          description: "Real-time risk assessment and credit approval within minutes"
        },
        {
          title: "Automated Compliance",
          description: "Built-in regulatory compliance monitoring and reporting systems"
        }
      ],
      image: "banking-industry"
    },
    {
      id: "finance",
      title: "Finance & Investment",
      icon: TrendingUp,
      description: "Advanced analytics and AI solutions for investment and financial planning",
      fullDescription: "Transform investment decisions with our AI-driven financial analytics platform. We provide sophisticated tools for portfolio optimization, market analysis, and risk management, enabling financial professionals to make data-driven decisions with confidence.",
      features: [
        "Predictive market analysis and forecasting",
        "Portfolio optimization algorithms",
        "Alternative data analysis for investment insights",
        "Automated financial reporting and compliance",
        "Client risk profiling and assessment",
        "Real-time market monitoring and alerts"
      ],
      stats: [
        { label: "Investment Performance", value: "+38%" },
        { label: "Risk Reduction", value: "76%" },
        { label: "Decision Speed", value: "92%" }
      ],
      image: "finance-industry"
    },
    {
      id: "insurance",
      title: "Insurance & Risk Management",
      icon: Shield,
      description: "Intelligent insurance solutions powered by machine learning and AI",
      fullDescription: "Revolutionize insurance operations with our comprehensive AI-powered platform. From claims processing to risk assessment, our solutions help insurance companies improve efficiency, reduce fraud, and enhance customer satisfaction through intelligent automation.",
      features: [
        "Automated claims processing and adjudication",
        "AI-powered underwriting and risk assessment",
        "Fraud detection and investigation tools",
        "Customer segmentation and pricing optimization",
        "Predictive analytics for loss prevention",
        "Digital customer experience platforms"
      ],
      stats: [
        { label: "Claims Processing Speed", value: "94%" },
        { label: "Fraud Detection Rate", value: "98%" },
        { label: "Customer Satisfaction", value: "+67%" }
      ],
      image: "insurance-industry"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={industryHeroImg} 
            alt="Industry AI Solutions" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        </div>
        
        <div className="container-max text-center relative z-10">
          <Badge variant="outline" className="neon-border mb-4">
            <Globe className="w-4 h-4 mr-2" />
            Industry Expertise
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Industries We Serve
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Delivering specialized AI-powered solutions across Banking, Finance, and Insurance sectors. 
            With decades of combined experience, we understand the unique challenges and opportunities 
            in each industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm">🏦 Banking Excellence</Badge>
            <Badge variant="secondary" className="text-sm">📈 Financial Innovation</Badge>
            <Badge variant="secondary" className="text-sm">🛡️ Insurance Technology</Badge>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container-max">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={industry.id} className="mb-20">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-row-dense'}`}>
                  {/* Content */}
                  <div className={`${isEven ? '' : 'lg:col-start-2'} animate-fade-in`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center neon-glow mr-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold gradient-text-neon">
                          {industry.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mt-1">
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    <p className="text-foreground mb-6 leading-relaxed">
                      {industry.fullDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-primary">Key Solutions</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {industry.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {industry.stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-4 rounded-lg bg-secondary/50 neon-border">
                          <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Banking Challenges & Solutions */}
                    {industry.id === 'banking' && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-6 text-primary">Challenges & Our Solutions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Challenges */}
                          <div>
                            <h4 className="text-lg font-medium mb-4 text-muted-foreground">Industry Challenges</h4>
                            <div className="space-y-3">
                              {industry.challenges?.map((challenge, idx) => (
                                <Card key={idx} className="p-4 bg-red-50 border-red-200">
                                  <div className="flex items-start space-x-3">
                                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <h5 className="font-medium text-red-800">{challenge.title}</h5>
                                      <p className="text-sm text-red-600 mt-1">{challenge.description}</p>
                                    </div>
                                  </div>
                                </Card>
                              ))}
                            </div>
                          </div>
                          
                          {/* Solutions */}
                          <div>
                            <h4 className="text-lg font-medium mb-4 text-muted-foreground">DFT Solutions</h4>
                            <div className="space-y-3">
                              {industry.solutions?.map((solution, idx) => (
                                <Card key={idx} className="p-4 bg-green-50 border-green-200">
                                  <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <h5 className="font-medium text-green-800">{solution.title}</h5>
                                      <p className="text-sm text-green-600 mt-1">{solution.description}</p>
                                    </div>
                                  </div>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <Button variant="hero" size="lg" className="w-full sm:w-auto">
                      Explore {industry.title} Solutions
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={`${isEven ? '' : 'lg:col-start-1'} animate-slide-up`}>
                    {industry.id === 'banking' ? (
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={bankingChallengesImg} 
                          alt="Banking Industry Challenges and Solutions"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <Card className="neon-border overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center">
                          <div className="text-center">
                            <IconComponent className="w-24 h-24 text-primary/60 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-primary/80">{industry.title}</h3>
                            <p className="text-muted-foreground mt-2">Industry Visualization</p>
                          </div>
                        </div>
                      </Card>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Proven Industry Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With years of dedicated focus on financial services, we bring deep domain knowledge 
              and technical expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Years of Experience", 
                value: "15+", 
                icon: "📅",
                description: "Delivering excellence in fintech solutions",
                gradient: "from-blue-500 to-purple-600"
              },
              { 
                title: "Financial Institutions Served", 
                value: "200+", 
                icon: "🏦",
                description: "Banks, credit unions, and financial services",
                gradient: "from-green-500 to-blue-500"
              },
              { 
                title: "AI Models Deployed", 
                value: "500+", 
                icon: "🤖",
                description: "Advanced machine learning implementations",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                title: "Countries Reached", 
                value: "25+", 
                icon: "🌍",
                description: "Global footprint across multiple continents",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="text-center pb-2">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <CardTitle className="text-4xl font-bold gradient-text mb-2">
                    {item.value}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    {item.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-neon">
              Ready to Transform Your Industry Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Partner with DFT Consult to leverage cutting-edge AI technology and 
              drive innovation in your financial services operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Schedule Industry Consultation
              </Button>
              <Button variant="outline" size="lg" className="neon-border">
                Download Industry Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industry;