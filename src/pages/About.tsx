import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Heart, 
  Lightbulb, 
  Shield, 
  Award,
  ArrowRight,
  Calendar,
  CheckCircle,
  Globe,
  TrendingUp,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import aboutHeroImg from "@/assets/about-hero.jpg";
import leader1Img from "@/assets/leader-1.jpg";
import leader2Img from "@/assets/leader-2.jpg";
import leader3Img from "@/assets/leader-3.jpg";

const About = () => {
  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Established DFT Consult with a vision to transform financial services through technology innovation."
    },
    {
      year: "2012",
      title: "First Major Banking Partnership",
      description: "Secured our first major contract with a leading regional bank, establishing our credibility in the financial sector."
    },
    {
      year: "2015",
      title: "AI Integration Launch",
      description: "Pioneered the integration of artificial intelligence in financial document analysis and risk assessment."
    },
    {
      year: "2018",
      title: "International Expansion",
      description: "Formed strategic partnerships with global technology providers, including Perfios Software Solutions."
    },
    {
      year: "2021",
      title: "Insurance Automation",
      description: "Expanded services to include comprehensive insurance automation and claims processing solutions."
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Recognized as a leading provider of AI-powered financial solutions across East Africa."
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing innovation with advanced AI models and expanded regional presence."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our business dealings."
    },
    {
      icon: Lightbulb,
      title: "Innovation", 
      description: "We continuously push boundaries to develop cutting-edge solutions that transform the financial landscape."
    },
    {
      icon: Users,
      title: "Client-Centricity",
      description: "Our clients' success drives everything we do. We deliver solutions tailored to their unique needs."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring quality and reliability in all our deliverables."
    },
    {
      icon: Heart,
      title: "Collaboration",
      description: "We believe in the power of partnerships and work closely with clients and partners to achieve mutual success."
    }
  ];

  const services = [
    {
      title: "Automated Credit Underwriting",
      description: "AI-powered systems that analyze creditworthiness with 99% accuracy, reducing processing time from days to minutes."
    },
    {
      title: "Insurance Decision-Making",
      description: "Intelligent automation for claims processing, fraud detection, and policy underwriting in the insurance sector."
    },
    {
      title: "Risk Management Solutions",
      description: "Advanced analytics and AI models for comprehensive risk assessment and management across financial institutions."
    },
    {
      title: "Tailored Software Solutions",
      description: "Custom-built applications and integrations designed specifically for banking, finance, and insurance operations."
    }
  ];

  const leaders = [
    {
      name: "David K. Mwangi",
      position: "Chief Executive Officer & Founder",
      image: leader1Img,
      description: "With over 20 years of experience in financial technology and business strategy, David leads our vision of transforming African financial services through AI innovation. He holds an MBA in Finance and has been instrumental in establishing key partnerships with global technology providers."
    },
    {
      name: "Sarah N. Kimani",
      position: "Chief Technology Officer",
      image: leader2Img,
      description: "Sarah brings 15+ years of expertise in AI and machine learning to drive our technical innovation. She holds a PhD in Computer Science and has published extensively on AI applications in financial services. Under her leadership, our technology stack has revolutionized credit scoring across multiple markets."
    },
    {
      name: "Michael O. Wanjiku",
      position: "Head of Business Development",
      image: leader3Img,
      description: "Michael oversees our strategic partnerships and market expansion initiatives. With a background in international business and 12 years in fintech, he has been key in establishing our partnerships with Perfios and other global technology leaders, expanding our reach across East Africa."
    }
  ];

  const clientLogos = [
    { name: "Jubilee Insurance", logo: "JI" },
    { name: "Equity Bank", logo: "EB" },
    { name: "KCB Group", logo: "KCB" },
    { name: "Centum Investment", logo: "CI" },
    { name: "Britam Insurance", logo: "BI" },
    { name: "Diamond Trust Bank", logo: "DTB" },
    { name: "Cooperative Bank", logo: "CB" },
    { name: "NCBA Group", logo: "NCBA" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Company Overview */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHeroImg} 
            alt="DFT Consult - Your Strategic Partner in AI-Powered Financial Solutions" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        </div>
        
        <div className="container-max text-center relative z-10">
          <Badge variant="outline" className="neon-border mb-6">
            <Award className="w-4 h-4 mr-2" />
            15+ Years of Excellence
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Your Strategic Partner in<br />AI-Powered Financial Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            For over 15 years, DFT Consult has been at the forefront of financial technology innovation, 
            delivering intelligent, reliable solutions that empower banks, insurance companies, and financial institutions 
            across Africa. Through strategic partnerships with global leaders like <span className="text-primary font-semibold">Perfios</span> 
            and cutting-edge AI technology, we transform how financial services operate.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm">🏆 Trusted by Leading Banks</Badge>
            <Badge variant="secondary" className="text-sm">🤖 AI-Powered Solutions</Badge>
            <Badge variant="secondary" className="text-sm">🌍 International Partnerships</Badge>
            <Badge variant="secondary" className="text-sm">🚀 15+ Years Experience</Badge>
          </div>
          <Button variant="hero" size="lg">
            <ArrowRight className="w-5 h-5 mr-2" />
            Discover Our Solutions
          </Button>
        </div>
      </section>

      {/* Company Journey */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Our Journey of Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a vision in 2009 to becoming East Africa's leading AI-powered financial solutions provider, 
              our journey reflects consistent growth and adaptation to technological advances.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <Card className={`w-full max-w-lg neon-border hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-4 neon-glow">
                          <Calendar className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1">{milestone.year}</Badge>
                          <CardTitle className="text-lg">{milestone.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {milestone.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary neon-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="section-padding bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Mission & Vision */}
            <div className="space-y-8">
              <Card className="neon-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-primary mr-3" />
                    <CardTitle className="text-2xl gradient-text">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To empower financial institutions across Africa with intelligent, reliable technology solutions 
                    that enhance operational efficiency, reduce risk, and improve customer experiences through 
                    innovative AI-powered automation and analytics.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="neon-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-8 h-8 text-primary mr-3" />
                    <CardTitle className="text-2xl gradient-text">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To be the leading African hub for AI-driven financial solutions, setting the standard for 
                    innovation in banking, insurance, and fintech across the continent while fostering 
                    financial inclusion and economic growth.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Our Core Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card key={index} className="neon-border hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-4 mt-1">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                            <p className="text-muted-foreground text-sm">{value.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Services */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Our Expertise & Specialized Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We focus exclusively on Banking, Finance, and Insurance sectors, delivering solutions 
              that address the unique challenges and opportunities within these industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group neon-border hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-4 neon-glow">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships & Global Reach */}
      <section className="section-padding bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Partnerships & Global Reach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our strategic partnerships with international technology leaders like Perfios Software Solutions 
              enable us to deliver world-class solutions while maintaining deep understanding of local markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center neon-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">International Technology Partners</h3>
                <p className="text-muted-foreground text-sm">
                  Partnerships with Perfios, Microsoft Azure, AWS, and NVIDIA for cutting-edge technology access
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center neon-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Regional Market Presence</h3>
                <p className="text-muted-foreground text-sm">
                  Strong operations across East Africa with expansion plans for pan-African coverage
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center neon-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Innovation Ecosystem</h3>
                <p className="text-muted-foreground text-sm">
                  Collaborations with universities, research centers, and innovation hubs for continuous innovation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Leadership & Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our seasoned professionals with global experience and deep industry knowledge 
              who drive our vision of transforming African financial services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="group neon-border hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{leader.name}</h3>
                    <p className="text-sm text-gray-200">{leader.position}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardDescription className="text-sm leading-relaxed">
                    {leader.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Client Success */}
      <section className="section-padding bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Impact & Client Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Over 15 years, we've delivered 50+ successful projects and earned the trust of leading 
              financial institutions across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center neon-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </CardContent>
            </Card>
            <Card className="text-center neon-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <p className="text-muted-foreground">Successful Projects</p>
              </CardContent>
            </Card>
            <Card className="text-center neon-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                <p className="text-muted-foreground">Partner Institutions</p>
              </CardContent>
            </Card>
            <Card className="text-center neon-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">99%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>

          {/* Client Logos Carousel */}
          <div className="relative overflow-hidden">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Trusted by Industry Leaders
            </h3>
            <div className="flex animate-marquee hover:pause-marquee">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center neon-glow">
                    <span className="font-bold text-primary text-lg">{client.logo}</span>
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-2 max-w-20">
                    {client.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="section-padding">
        <div className="container-max">
          <Card className="text-center neon-border bg-gradient-to-br from-primary/5 to-accent/5 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-neon">
                Partner with Us to Shape the Future of Financial Technology
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to transform your financial operations with AI-powered solutions? 
                Let's discuss how we can help you achieve your digital transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Our Team
                </Button>
                <Button variant="outline" size="lg" className="neon-border">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Explore Our Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;