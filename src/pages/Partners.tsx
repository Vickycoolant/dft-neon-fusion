import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Handshake, 
  Cpu, 
  Building, 
  Lightbulb, 
  ArrowRight, 
  Star, 
  Globe,
  Shield,
  Zap,
  TrendingUp,
  Users
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import partnersHeroImg from "@/assets/partners-hero.jpg";
import techPartnersImg from "@/assets/tech-partners.jpg";
import financialPartnersImg from "@/assets/financial-partners.jpg";
import advisoryPartnersImg from "@/assets/advisory-partners.jpg";
import innovationPartnersImg from "@/assets/innovation-partners.jpg";
import FAQSection from "@/components/FAQSection";

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
          logo: "PS",
          description: "Leading Indian fintech company providing real-time data aggregation and analytics for financial institutions across global markets.",
          specialty: "Data Analytics & Bank Statement Analysis",
          image: techPartnersImg
        },
        {
          name: "Microsoft Azure",
          logo: "MS",
          description: "Cloud computing platform providing scalable AI services and secure infrastructure for our enterprise solutions.",
          specialty: "Cloud Infrastructure & AI Services",
          image: techPartnersImg
        },
        {
          name: "AWS FinTech Accelerator",
          logo: "AWS",
          description: "Amazon Web Services partnership enabling rapid deployment and scaling of financial technology solutions.",
          specialty: "Cloud Computing & DevOps",
          image: techPartnersImg
        },
        {
          name: "NVIDIA AI Enterprise",
          logo: "NV",
          description: "Advanced GPU computing solutions for machine learning model training and real-time AI inference processing.",
          specialty: "AI Computing & Machine Learning",
          image: techPartnersImg
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
          logo: "JI",
          description: "Leading East African insurance provider partnering with us on digital transformation and automated claims processing solutions.",
          specialty: "Insurance Technology & Claims Automation",
          image: financialPartnersImg
        },
        {
          name: "Equity Bank Group",
          logo: "EB",
          description: "Pan-African financial services provider collaborating on digital lending and customer onboarding solutions.",
          specialty: "Digital Banking & Fintech Innovation",
          image: financialPartnersImg
        },
        {
          name: "KCB Group",
          logo: "KCB",
          description: "Regional banking leader working with us on AI-powered credit scoring and risk management solutions.",
          specialty: "Credit Assessment & Risk Management",
          image: financialPartnersImg
        },
        {
          name: "Centum Investment",
          logo: "CI",
          description: "Leading investment company partnering on alternative credit scoring and SME financing solutions.",
          specialty: "Investment Finance & Credit Solutions",
          image: financialPartnersImg
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
          logo: "CBK",
          description: "Regulatory partnership ensuring all fintech solutions comply with banking regulations and data protection standards.",
          specialty: "Regulatory Compliance & Banking Standards",
          image: advisoryPartnersImg
        },
        {
          name: "PwC East Africa",
          logo: "PwC",
          description: "Global consulting firm providing regulatory guidance and compliance frameworks for financial technology solutions.",
          specialty: "Regulatory Advisory & Compliance",
          image: advisoryPartnersImg
        },
        {
          name: "Deloitte Africa",
          logo: "DL",
          description: "Strategic consulting partner helping navigate complex regulatory environments and market entry strategies.",
          specialty: "Strategic Consulting & Market Intelligence",
          image: advisoryPartnersImg
        },
        {
          name: "KPMG Kenya",
          logo: "KP",
          description: "Professional services firm supporting audit, compliance, and risk management frameworks for financial institutions.",
          specialty: "Audit, Risk & Compliance Advisory",
          image: advisoryPartnersImg
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
          logo: "TT",
          description: "Local technology partner specializing in custom software development and innovative fintech solutions for African markets.",
          specialty: "Custom Software Development & Integration",
          image: innovationPartnersImg
        },
        {
          name: "University of Nairobi - School of Computing",
          logo: "UoN",
          description: "Academic partnership for AI research, talent development, and innovative fintech solution development.",
          specialty: "AI Research & Talent Development",
          image: innovationPartnersImg
        },
        {
          name: "iHub Nairobi",
          logo: "iH",
          description: "Innovation hub connecting us with emerging startups and fostering collaborative technology development in East Africa.",
          specialty: "Startup Innovation & Tech Ecosystem",
          image: innovationPartnersImg
        },
        {
          name: "CIPIT - Centre for Intellectual Property",
          logo: "CIP",
          description: "Research center partnership for intellectual property protection and technology transfer in financial innovation.",
          specialty: "IP Protection & Technology Transfer",
          image: innovationPartnersImg
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

  const partnersFAQs = [
    {
      question: "How can my organization become a partner of DFT Consult?",
      answer: "We're always open to strategic partnerships. Contact us through our partnership inquiry form or reach out directly to our business development team. We'll schedule a consultation to discuss potential collaboration opportunities that align with both our missions."
    },
    {
      question: "What types of partnerships does DFT Consult offer?",
      answer: "We offer various partnership models including technology partnerships (integration and API partnerships), financial sector collaborations, strategic advisory partnerships, and innovation & research partnerships with academic institutions and startups."
    },
    {
      question: "Who is Perfios and what is their relationship with DFT Consult?",
      answer: "Perfios is a leading Indian fintech solutions provider specializing in real-time data aggregation and analytics. Our strategic partnership with Perfios enables us to deliver world-class bank statement analysis and financial data intelligence solutions to African markets."
    },
    {
      question: "Does DFT Consult work with international partners?",
      answer: "Yes, we maintain strategic partnerships with global technology leaders including Microsoft Azure, AWS, and NVIDIA, as well as international consulting firms like PwC, Deloitte, and KPMG to bring world-class solutions to African markets."
    },
    {
      question: "What benefits do partners receive when working with DFT Consult?",
      answer: "Partners gain access to our extensive network across African financial institutions, benefit from our deep local market expertise, collaborative innovation opportunities, and the ability to scale solutions across multiple markets through our established relationships."
    },
    {
      question: "Can startups partner with DFT Consult?",
      answer: "Absolutely! We actively partner with innovation hubs like iHub Nairobi and work with emerging startups through our Development & Innovation Partners program. We're committed to fostering the fintech ecosystem and supporting innovative solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={partnersHeroImg} 
            alt="Strategic Partnership Collaboration" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/30 via-transparent to-[#4169E1]/20"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <Badge className="bg-[#4169E1] text-white mb-6">
            <Handshake className="w-4 h-4 mr-2" />
            Strategic Partnerships
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#4169E1]">
            Our Valued Partners
          </h1>
          <p className="text-xl text-gray-900 max-w-4xl mx-auto mb-8 leading-relaxed">
            We believe in the power of collaboration. Our strategic partnerships with industry leaders like <span className="text-[#4169E1] font-semibold">Perfios</span> - 
            a renowned Indian fintech solutions provider - and other global technology innovators enable us to deliver 
            world-class AI-powered financial solutions tailored for African markets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm bg-[#4169E1]/10 text-[#4169E1]">🤝 Strategic Alliances</Badge>
            <Badge variant="secondary" className="text-sm bg-[#4169E1]/10 text-[#4169E1]">🚀 Innovation Partners</Badge>
            <Badge variant="secondary" className="text-sm bg-[#4169E1]/10 text-[#4169E1]">🌍 Global Reach</Badge>
          </div>
        </div>
      </section>

      {/* Partner Categories - Each category as separate section */}
      {partnerCategories.map((category, categoryIndex) => {
        const IconComponent = category.icon;
        
        return (
          <section 
            key={category.id} 
            className={`py-20 relative ${categoryIndex % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
          >
            {categoryIndex % 2 === 1 && (
              <div className="absolute inset-0 z-0 opacity-5">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#4169E1] flex items-center justify-center mr-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#4169E1]">
                      {category.title}
                    </h2>
                    <p className="text-lg text-gray-700 font-medium">{category.subtitle}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Partner Tiles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {category.partners.map((partner, idx) => (
                  <Card key={idx} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-[#4169E1]/20">
                    <div className="h-32 overflow-hidden relative">
                      <img 
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/20 to-[#4169E1]/5"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4169E1] to-[#4169E1]/70 flex items-center justify-center">
                          <span className="font-bold text-white text-lg">{partner.logo}</span>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex flex-col items-center text-center">
                        <CardTitle className="text-lg mb-2 group-hover:text-[#4169E1] transition-colors">
                          {partner.name}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs mb-3 border-[#4169E1]/30">
                          {partner.specialty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm leading-relaxed text-center">
                        {partner.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Category CTA */}
              <div className="text-center">
                <Button className="group bg-[#4169E1] hover:bg-[#4169E1]/90 text-white">
                  Learn More About {category.title}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </section>
        );
      })}

      {/* Client Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <img 
            src={partnersHeroImg}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4169E1]">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from leading financial institutions who have transformed their operations 
              through our innovative AI-powered solutions.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white border-[#4169E1]/20 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4169E1] to-[#4169E1]/70 flex items-center justify-center mr-3">
                          <span className="font-bold text-white">{testimonial.logo}</span>
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
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        "{testimonial.feedback}"
                      </p>
                      <div className="border-t pt-3">
                        <p className="font-semibold text-sm">{testimonial.author}</p>
                        <p className="text-xs text-gray-500">{testimonial.position}</p>
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

      {/* Partnership Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-[#4169E1]/5 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4169E1]">
              Why Partner With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our ecosystem and unlock new opportunities in the fintech landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-[#4169E1]/20 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-[#4169E1] flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Global Reach</h3>
              <p className="text-gray-600">
                Expand your market reach through our international network and partnerships across African markets
              </p>
            </Card>

            <Card className="text-center p-8 border-[#4169E1]/20 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-[#4169E1] flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation Edge</h3>
              <p className="text-gray-600">
                Access cutting-edge AI technology and innovation resources to stay ahead in the fintech space
              </p>
            </Card>

            <Card className="text-center p-8 border-[#4169E1]/20 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-[#4169E1] flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Collaborative Growth</h3>
              <p className="text-gray-600">
                Grow together through strategic collaboration, shared expertise, and mutual success
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={partnersFAQs} variant="home" />

      {/* Partnership CTA Section */}
      <section className="py-20 bg-[#4169E1]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our ecosystem of innovative partners and unlock new opportunities in the rapidly evolving 
            fintech landscape. Let's build the future of financial services together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4169E1] hover:bg-gray-100">
              <Handshake className="w-5 h-5 mr-2" />
              Explore Partnership Opportunities
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#4169E1]">
              Download Partnership Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
