import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Handshake, 
  Cpu, 
  Building, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  Star, 
  Globe,
  Shield,
  Zap
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import partnersHeroImg from "@/assets/partners-hero.jpg";
import techPartnersImg from "@/assets/tech-partners.jpg";
import financialPartnersImg from "@/assets/financial-partners.jpg";
import advisoryPartnersImg from "@/assets/advisory-partners.jpg";
import innovationPartnersImg from "@/assets/innovation-partners.jpg";

const Partners = () => {
  const partnerCategories = [
    {
      id: "technology",
      title: "Technology Partners",
      subtitle: "Trusted Technology Leaders",
      description: "International software and AI firms providing cutting-edge tech tools, APIs, and automation solutions to enhance our service delivery.",
      icon: Cpu,
      image: techPartnersImg,
      partners: [
        {
          name: "Perfios Software Solutions",
          description: "Leading Indian fintech company providing real-time data aggregation and analytics for financial institutions across global markets.",
          specialty: "Data Analytics & Bank Statement Analysis"
        },
        {
          name: "Microsoft Azure",
          description: "Cloud computing platform providing scalable AI services and secure infrastructure for our enterprise solutions.",
          specialty: "Cloud Infrastructure & AI Services"
        },
        {
          name: "AWS FinTech Accelerator",
          description: "Amazon Web Services partnership enabling rapid deployment and scaling of financial technology solutions.",
          specialty: "Cloud Computing & DevOps"
        },
        {
          name: "NVIDIA AI Enterprise",
          description: "Advanced GPU computing solutions for machine learning model training and real-time AI inference processing.",
          specialty: "AI Computing & Machine Learning"
        }
      ]
    },
    {
      id: "financial",
      title: "Financial & Industry Partners",
      subtitle: "Financial Sector Collaborators",
      description: "Banks, microfinance institutions, SACCOs, and insurance companies collaborating on innovative financial solutions.",
      icon: Building,
      image: financialPartnersImg,
      partners: [
        {
          name: "Jubilee Insurance",
          description: "Leading East African insurance provider partnering with us on digital transformation and automated claims processing solutions.",
          specialty: "Insurance Technology & Claims Automation"
        },
        {
          name: "Equity Bank Group",
          description: "Pan-African financial services provider collaborating on digital lending and customer onboarding solutions.",
          specialty: "Digital Banking & Fintech Innovation"
        },
        {
          name: "KCB Group",
          description: "Regional banking leader working with us on AI-powered credit scoring and risk management solutions.",
          specialty: "Credit Assessment & Risk Management"
        },
        {
          name: "Centum Investment",
          description: "Leading investment company partnering on alternative credit scoring and SME financing solutions.",
          specialty: "Investment Finance & Credit Solutions"
        }
      ]
    },
    {
      id: "advisory",
      title: "Strategic Advisory Partners",
      subtitle: "Strategic Advisory Allies",
      description: "Consulting firms, compliance specialists, and industry regulators ensuring our solutions meet legal and market standards.",
      icon: Shield,
      image: advisoryPartnersImg,
      partners: [
        {
          name: "Central Bank of Kenya (CBK)",
          description: "Regulatory partnership ensuring all fintech solutions comply with banking regulations and data protection standards.",
          specialty: "Regulatory Compliance & Banking Standards"
        },
        {
          name: "PwC East Africa",
          description: "Global consulting firm providing regulatory guidance and compliance frameworks for financial technology solutions.",
          specialty: "Regulatory Advisory & Compliance"
        },
        {
          name: "Deloitte Africa",
          description: "Strategic consulting partner helping navigate complex regulatory environments and market entry strategies.",
          specialty: "Strategic Consulting & Market Intelligence"
        },
        {
          name: "KPMG Kenya",
          description: "Professional services firm supporting audit, compliance, and risk management frameworks for financial institutions.",
          specialty: "Audit, Risk & Compliance Advisory"
        }
      ]
    },
    {
      id: "innovation",
      title: "Development & Innovation Partners",
      subtitle: "Innovation & Research Partners",
      description: "Research institutions and startups driving innovation through AI research, pilot projects, and talent development.",
      icon: Lightbulb,
      image: innovationPartnersImg,
      partners: [
        {
          name: "Taimos Technologies Ltd",
          description: "Local technology partner specializing in custom software development and innovative fintech solutions for African markets.",
          specialty: "Custom Software Development & Integration"
        },
        {
          name: "University of Nairobi - School of Computing",
          description: "Academic partnership for AI research, talent development, and innovative fintech solution development.",
          specialty: "AI Research & Talent Development"
        },
        {
          name: "iHub Nairobi",
          description: "Innovation hub connecting us with emerging startups and fostering collaborative technology development in East Africa.",
          specialty: "Startup Innovation & Tech Ecosystem"
        },
        {
          name: "CIPIT - Centre for Intellectual Property",
          description: "Research center partnership for intellectual property protection and technology transfer in financial innovation.",
          specialty: "IP Protection & Technology Transfer"
        }
      ]
    }
  ];

  const testimonials = [
    {
      company: "Jubilee Insurance",
      logo: "JI",
      feedback: "DFT Consult transformed our claims processing with AI automation. Processing time reduced by 85% while maintaining 99% accuracy.",
      author: "Sarah Mwangi",
      position: "Head of Digital Innovation"
    },
    {
      company: "Equity Bank",
      logo: "EB", 
      feedback: "Their credit scoring solutions helped us expand lending to underbanked populations with 40% improved risk assessment accuracy.",
      author: "James Kimani",
      position: "Chief Technology Officer"
    },
    {
      company: "KCB Group",
      logo: "KCB",
      feedback: "The AI-powered document analysis reduced our loan application processing time from days to minutes. Exceptional results.",
      author: "Grace Wanjiku",
      position: "Head of Digital Banking"
    },
    {
      company: "Centum Investment",
      logo: "CI",
      feedback: "DFT's alternative credit scoring opened new market segments for us. Their solutions are both innovative and practical.",
      author: "Michael Ochieng",
      position: "Investment Director"
    },
    {
      company: "Britam Insurance",
      logo: "BI",
      feedback: "Outstanding fraud detection capabilities. We've seen a 92% reduction in fraudulent claims since implementing their AI solutions.",
      author: "Patricia Muthoni", 
      position: "Risk Management Director"
    },
    {
      company: "Diamond Trust Bank",
      logo: "DTB",
      feedback: "Their API integration made our digital transformation seamless. Customer onboarding improved dramatically with their solutions.",
      author: "Robert Kuria",
      position: "Head of Operations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={partnersHeroImg} 
            alt="Strategic Partnership Collaboration" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        </div>
        
        <div className="container-max text-center relative z-10">
          <Badge variant="outline" className="neon-border mb-4">
            <Handshake className="w-4 h-4 mr-2" />
            Strategic Partnerships
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Our Valued Partners
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            We believe in the power of collaboration. Our strategic partnerships with industry leaders like <span className="text-primary font-semibold">Perfios</span> - 
            a renowned Indian fintech solutions provider - and other global technology innovators enable us to deliver 
            world-class AI-powered financial solutions tailored for African markets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm">🤝 Strategic Alliances</Badge>
            <Badge variant="secondary" className="text-sm">🚀 Innovation Partners</Badge>
            <Badge variant="secondary" className="text-sm">🌍 Global Reach</Badge>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Partnership Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse partner ecosystem spans technology, finance, advisory, and innovation sectors, 
              creating a comprehensive support network for delivering exceptional solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {partnerCategories.map((category, index) => {
              const IconComponent = category.icon;
              
              return (
                <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 neon-border overflow-hidden">
                  {/* Category Header */}
                  <div className="relative h-48">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center mb-2">
                        <IconComponent className="w-6 h-6 mr-2" />
                        <h3 className="text-xl font-bold">{category.title}</h3>
                      </div>
                      <p className="text-sm text-gray-200">{category.subtitle}</p>
                    </div>
                  </div>

                  <CardHeader>
                    <CardDescription className="text-base leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {category.partners.map((partner, idx) => (
                      <div key={idx} className="border-l-4 border-primary/30 pl-4 py-2">
                        <h4 className="font-semibold text-foreground mb-1">{partner.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{partner.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {partner.specialty}
                        </Badge>
                      </div>
                    ))}
                    
                    <div className="pt-4">
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Learn More About This Partnership
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from leading financial institutions who have transformed their operations 
              through our innovative AI-powered solutions.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white/50 backdrop-blur-sm neon-border hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-3">
                          <span className="font-bold text-primary">{testimonial.logo}</span>
                        </div>
                        <div>
                          <CardTitle className="text-lg">{testimonial.company}</CardTitle>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        "{testimonial.feedback}"
                      </p>
                      <div className="border-t pt-3">
                        <p className="font-semibold text-sm">{testimonial.author}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 neon-glow">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Global Reach</h3>
                <p className="text-sm text-muted-foreground">Expand your market reach through our international network</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 neon-glow">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Innovation Edge</h3>
                <p className="text-sm text-muted-foreground">Access cutting-edge technology and innovation resources</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 neon-glow">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Collaborative Growth</h3>
                <p className="text-sm text-muted-foreground">Grow together through strategic collaboration and shared success</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-neon">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our ecosystem of innovative partners and unlock new opportunities in the rapidly evolving 
              fintech landscape. Let's build the future of financial services together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Handshake className="w-5 h-5 mr-2" />
                Explore Partnership Opportunities
              </Button>
              <Button variant="outline" size="lg" className="neon-border">
                Download Partnership Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;