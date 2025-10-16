import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Shield, 
  Lightbulb, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Zap
} from "lucide-react";
import aboutHeroImg from "@/assets/about-hero.jpg";
import dataIntelligenceImg from "@/assets/data-intelligence.jpg";
import forensicsRiskImg from "@/assets/forensics-risk.jpg";
import techSolutionsImg from "@/assets/tech-solutions.jpg";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import leader3 from "@/assets/leader-3.jpg";

const About = () => {
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Upholding the highest ethical standards in every interaction, ensuring trust and transparency."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously pushing boundaries with cutting-edge AI and technology solutions."
    },
    {
      icon: Users,
      title: "Client-Centricity",
      description: "Delivering tailored solutions that address specific client challenges and drive measurable results."
    }
  ];

  const services = [
    {
      title: "Data Intelligence & Analytics",
      description: "Advanced AI-powered document analysis, predictive analytics, and customer segmentation for data-driven financial decisions.",
      image: dataIntelligenceImg
    },
    {
      title: "Digital Forensics & Risk Management",
      description: "Comprehensive fraud detection, AML/KYC compliance, and cybersecurity solutions to protect financial assets.",
      image: forensicsRiskImg
    },
    {
      title: "Technology & Embedded Finance",
      description: "Custom software development, cloud solutions, and insurtech platforms for seamless digital transformation.",
      image: techSolutionsImg
    }
  ];

  const leaders = [
    {
      name: "Dr. James Mwangi",
      position: "Chief Executive Officer & Co-Founder",
      image: leader1,
      description: "With 20+ years in financial technology, Dr. Mwangi leads DFT's strategic vision. Former CTO at a leading African bank, he holds a PhD in Computer Science and has published extensively on AI applications in finance."
    },
    {
      name: "Sarah Wanjiku",
      position: "Chief Technology Officer",
      image: leader2,
      description: "Sarah brings 15+ years of experience in AI and machine learning. Previously at Microsoft Azure AI, she specializes in building scalable fintech solutions and holds multiple patents in fraud detection algorithms."
    },
    {
      name: "Michael Ochieng",
      position: "Chief Operations Officer",
      image: leader3,
      description: "Michael has 18+ years managing large-scale financial operations across East Africa. Former Regional Director at Equity Bank, he ensures seamless delivery of DFT's solutions to clients."
    }
  ];

  const clientLogos = [
    { name: "Jubilee Insurance", logo: "JI" },
    { name: "Equity Bank", logo: "EB" },
    { name: "KCB Group", logo: "KCB" },
    { name: "Britam", logo: "BT" },
    { name: "Centum", logo: "CI" },
    { name: "DTB", logo: "DTB" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Brief Company Description with Image */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#4169E1] text-white">
                <Globe className="w-4 h-4 mr-2" />
                Your Strategic Partner
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Empowering Finance with{" "}
                <span className="text-[#4169E1]">AI Innovation</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                For over <strong>15 years</strong>, DFT Consult has been at the forefront of AI-powered financial solutions. 
                We partner with leading banks, insurance companies, and financial institutions across Africa to transform 
                their operations through intelligent automation, advanced analytics, and cutting-edge technology.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Backed by international partnerships with industry leaders like <strong>Perfios</strong>, we combine 
                global expertise with deep local market knowledge to deliver solutions that drive real business impact.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#4169E1]" />
                  <span className="text-gray-700 font-semibold">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#4169E1]" />
                  <span className="text-gray-700 font-semibold">200+ Clients Served</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#4169E1]" />
                  <span className="text-gray-700 font-semibold">Global Partnerships</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutHeroImg} 
                alt="DFT Consult Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Side by Side */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="bg-gradient-to-br from-[#4169E1]/5 to-[#4169E1]/10 border-[#4169E1]/20 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#4169E1] rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-[#4169E1]">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To empower financial institutions with intelligent, reliable, and secure technology solutions 
                  that enhance decision-making, reduce risk, and drive sustainable growth across African markets.
                </p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={dataIntelligenceImg} 
                    alt="Our Mission" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-gradient-to-br from-[#4169E1]/5 to-[#4169E1]/10 border-[#4169E1]/20 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#4169E1] rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-[#4169E1]">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To be the leading African hub for AI-driven financial solutions, recognized globally for innovation, 
                  excellence, and transformative impact on the continent's financial services ecosystem.
                </p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={techSolutionsImg} 
                    alt="Our Vision" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values - 3 Major Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 group border-t-4 border-[#4169E1]">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#4169E1] to-[#4169E1]/70 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Expertise & Specialized Services - 3 Tiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-6">
              Our Expertise & Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored for the financial sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#4169E1] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Button variant="outline" className="w-full border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1] hover:text-white">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships & Global Reach */}
      <section className="py-20 bg-gradient-to-br from-[#4169E1]/5 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-6">
              Partnerships & Global Reach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with international technology leaders to bring world-class solutions to Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4169E1] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">International Technology Partners</h3>
                  <p className="text-gray-600">
                    Our partnership with <strong>Perfios</strong>, a leading Indian fintech solutions provider, 
                    brings cutting-edge AI and data analytics capabilities to our clients.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4169E1] rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-Border Collaborations</h3>
                  <p className="text-gray-600">
                    We work with financial institutions, technology providers, and regulatory bodies 
                    across multiple African countries and beyond.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4169E1] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation Ecosystem</h3>
                  <p className="text-gray-600">
                    Active participation in fintech accelerators, innovation hubs, and industry forums 
                    keeps us at the forefront of emerging technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Global Footprint</h3>
                <p className="text-gray-600">Operations and partnerships across regions</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-[#4169E1]/10 rounded-lg">
                  <div className="text-3xl font-bold text-[#4169E1] mb-2">25+</div>
                  <div className="text-sm text-gray-600">Countries Reached</div>
                </div>
                <div className="text-center p-4 bg-[#4169E1]/10 rounded-lg">
                  <div className="text-3xl font-bold text-[#4169E1] mb-2">200+</div>
                  <div className="text-sm text-gray-600">Institutions Served</div>
                </div>
                <div className="text-center p-4 bg-[#4169E1]/10 rounded-lg">
                  <div className="text-3xl font-bold text-[#4169E1] mb-2">15+</div>
                  <div className="text-sm text-gray-600">Strategic Partners</div>
                </div>
                <div className="text-center p-4 bg-[#4169E1]/10 rounded-lg">
                  <div className="text-3xl font-bold text-[#4169E1] mb-2">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-6">
              Leadership & Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seasoned professionals with deep industry knowledge and global experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {leader.name}
                  </CardTitle>
                  <CardDescription className="text-[#4169E1] font-semibold">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {leader.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Client Success */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-6">
              Impact & Client Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Trusted by leading banks and insurers across Africa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4169E1] mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4169E1] mb-2">200+</div>
              <div className="text-gray-600">Financial Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4169E1] mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4169E1] mb-2">97%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          {/* Client Logos Carousel */}
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right hover:pause-animation">
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-48 h-32 mx-6 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-gray-200 hover:border-[#4169E1] hover:shadow-md transition-all"
                  >
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#4169E1] mb-2">{client.logo}</div>
                      <div className="text-sm text-gray-600 font-semibold">{client.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4169E1]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Partner with us to shape the future of financial technology
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Let's work together to transform your financial operations with AI-powered innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-[#4169E1] hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#4169E1] px-8 py-6 text-lg font-semibold rounded-lg"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default About;
