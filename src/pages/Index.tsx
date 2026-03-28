import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Cpu, Shield, Building2, TrendingUp, Handshake, Award, Target, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import PartnersCarousel from "@/components/PartnersCarousel";
import FAQSection from "@/components/FAQSection";
import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServicesSection";
import whyChooseUsBg from "@/assets/why-choose-us-bg.jpg";

const Index = () => {
  const homeFAQs = [
    {
      question: "Are DFT solutions fully compliant with Kenya's Data Protection Act and regulatory guidelines?",
      answer: "Yes. Compliance is built into every solution we design and implement. Our systems align with the Kenya Data Protection Act, Central Bank of Kenya (CBK) guidelines, and relevant regulatory frameworks. We enforce strict data governance, encryption, and access controls to ensure your data remains secure, private, and fully compliant at all times."
    },
    {
      question: "How does DFT ensure data privacy and regulatory compliance in AI-driven environments?",
      answer: "We embed compliance into the full lifecycle of our engagements — from design to deployment and ongoing monitoring. This includes privacy impact assessments, secure data handling protocols, and continuous regulatory alignment. Our approach ensures that AI adoption enhances performance without exposing the organization to legal or compliance risk."
    },
    {
      question: "Are DFT Academy programs accredited and recognized?",
      answer: "Yes. Our training programs are registered with the National Industrial Training Authority (NITA). Participants receive recognized certifications, ensuring that teams build practical, industry-relevant skills in AI, fraud risk management, cybersecurity, and governance within an approved regulatory framework."
    },
    {
      question: "What tangible business value can institutions expect from DFT solutions?",
      answer: "DFT delivers measurable outcomes. Our solutions improve decision quality, reduce fraud and operational risk, and enhance efficiency through AI and analytics. By combining global technology capability with local industry expertise, we enable institutions to realize faster results, stronger controls, and sustainable, value-driven transformation."
    }
  ];

  // services data moved to ServicesSection component

  const whyChooseUs = [
    {
      icon: Award,
      title: "Deep Industry Expertise",
      description: "Extensive experience across banking, insurance, fintech, and AI-driven transformation, enabling us to address complex challenges in regulated environments."
    },
    {
      icon: Target,
      title: "Proven Impact",
      description: "We deliver measurable outcomes — reduced risk, improved decision accuracy, and increased operational efficiency."
    },
    {
      icon: Cpu,
      title: "End-to-End Delivery",
      description: "From strategy to implementation and capability building, we ensure solutions are adopted and sustained."
    },
    {
      icon: Shield,
      title: "Governance-First Approach",
      description: "All solutions are aligned to regulatory requirements, ethical standards, and strong risk management frameworks."
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership",
      description: "We work alongside institutions to drive lasting transformation — not just deliver projects."
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <HeroSlider />

      {/* About Us Brief Section */}
      <section className="relative section-padding bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
              About DFT Group
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Visual element */}
            <div className="relative flex items-center justify-center">
              {/* AI-patterned background - larger with better patterns */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ minHeight: '480px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-success/8 to-warning/12"></div>
                {/* Hexagonal AI pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="ai-hex" x="0" y="0" width="60" height="70" patternUnits="userSpaceOnUse">
                      <path d="M30 0 L60 17.5 L60 52.5 L30 70 L0 52.5 L0 17.5 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                      <circle cx="30" cy="35" r="2.5" fill="currentColor" className="text-primary" />
                      <path d="M0 17.5 L30 35 L60 17.5" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-success" />
                      <path d="M0 52.5 L30 35 L60 52.5" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-warning" />
                    </pattern>
                    <pattern id="ai-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                      <circle cx="15" cy="15" r="1" fill="currentColor" className="text-warning" opacity="0.4" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#ai-hex)" />
                  <rect width="100%" height="100%" fill="url(#ai-dots)" />
                </svg>
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
                  <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                  <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="currentColor" strokeWidth="0.5" className="text-success" />
                  <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.3" className="text-warning" />
                  <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
                </svg>
                {/* Glowing orbs */}
                <div className="absolute top-4 left-4 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-4 right-4 w-48 h-48 bg-success/18 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-warning/15 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-primary/12 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-warning/10 rounded-full blur-3xl"></div>
              </div>

              <div className="w-full max-w-md mx-auto relative z-10 p-8">
                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <Building2 className="w-10 h-10 text-primary mx-auto mb-3" />
                    <span className="text-sm font-semibold text-foreground">Banking Solutions</span>
                  </div>
                  <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-success/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <Shield className="w-10 h-10 text-success mx-auto mb-3" />
                    <span className="text-sm font-semibold text-foreground">Insurance Tech</span>
                  </div>
                  <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-warning/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <Brain className="w-10 h-10 text-warning mx-auto mb-3" />
                    <span className="text-sm font-semibold text-foreground">AI & Analytics</span>
                  </div>
                  <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <TrendingUp className="w-10 h-10 text-primary mx-auto mb-3" />
                    <span className="text-sm font-semibold text-foreground">Financial Analytics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Company introduction */}
            <div className="space-y-6 text-left">
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  DFT Group is a Kenyan advisory and professional services organization that helps financial institutions and regulated organizations unlock measurable business value through AI, data, and forensic intelligence.
                </p>
                <p className="mb-4">
                  We work primarily with banks, insurers, and healthcare organizations to strengthen governance, manage risk, and modernize operations. Our approach combines deep local industry expertise with leading global technology platforms, enabling the delivery of practical, scalable solutions that improve decision-making, enhance operational efficiency, and build digital trust.
                </p>
                <p className="mb-4">
                  DFT's core focus areas include artificial intelligence adoption and governance, data analytics, fraud risk management, and digital transformation.
                </p>
                <p className="mb-4 font-medium text-foreground">
                  The Group operates through three complementary entities:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 shrink-0" />
                    <span><strong className="text-primary">DFT Consulting LLP</strong> – Technology advisory, data analytics, and forensic services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 shrink-0" />
                    <span><strong className="text-primary">DFT Health Services Ltd</strong> – Health insurance technology and TPA services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 shrink-0" />
                    <span><strong className="text-primary">DFT Academy</strong> – Training and capacity development</span>
                  </li>
                </ul>
                <p className="text-foreground font-medium italic">
                  Our purpose is unlocking business value through AI for safer, smarter organizations.
                </p>
              </div>

              <div className="pt-4">
                <Link to="/about">
                  <Button variant="warning" size="lg" className="transition-transform transform hover:scale-105">
                    Read More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section - with background image */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={whyChooseUsBg} 
            alt="" 
            className="w-full h-full object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Why Choose Us?
            </h2>
            <div className="w-24 h-1 bg-warning mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              const borderColors = [
                "border-l-warning",
                "border-l-success",
                "border-l-warning",
                "border-l-success",
                "border-l-warning",
              ];
              return (
                <div key={index} className={`flex items-start gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 border-l-4 ${borderColors[index]} hover:bg-white/20 transition-all duration-300`}>
                  <div className="w-12 h-12 rounded-lg bg-warning/20 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-warning" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DFT Advantage Section */}
      <section className="relative w-full py-24 bg-card overflow-x-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          The DFT Advantage
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
          {/* Left Text Section */}
          <div className="flex-1 text-muted-foreground text-lg leading-relaxed space-y-6">
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold">✔</span>
              <span><strong className="text-primary">99.9999% Quality:</strong> Our AI solutions guarantee the highest reliability and precision in data handling and analytics, ensuring top-tier service for our clients.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-warning font-bold">✔</span>
              <span><strong className="text-warning">AI Innovation:</strong> Constantly innovating, we implement cutting-edge AI technologies that give businesses a competitive advantage.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-success font-bold">✔</span>
              <span><strong className="text-success">Scalability:</strong> Our solutions are designed to grow seamlessly with your business, accommodating increasing data and operational complexity.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold">✔</span>
              <span><strong className="text-primary">Reliability:</strong> With robust architecture and vigilant monitoring, we ensure uninterrupted service and consistent performance.</span>
            </p>
          </div>

          {/* Diamond Visual Section — Hidden on mobile */}
          <div className="hidden md:flex flex-1 relative items-center justify-center min-h-[400px] md:min-h-[500px] overflow-hidden px-4">
            {/* Faded hollow circles in background */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`hollow-${i}`}
                className="absolute rounded-full border-2 opacity-20"
                style={{
                  width: `${80 + i * 40}px`,
                  height: `${80 + i * 40}px`,
                  borderColor: ["hsl(225,85%,35%)", "hsl(48,100%,50%)", "hsl(146,100%,30%)"][i % 3],
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 80}%`,
                  animation: `float ${6 + i * 2}s ease-in-out infinite alternate`,
                }}
              />
            ))}

            <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] mx-auto">
              {/* Top Diamond - Primary Blue */}
              <div
                className="absolute w-28 h-28 md:w-52 md:h-52 flex items-center justify-center text-center text-white font-bold text-xs md:text-lg rounded-lg hover:scale-105 transition-transform"
                style={{
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(45deg)",
                  background: "hsl(225, 85%, 35%)",
                }}
              >
                <div className="-rotate-45 px-2 md:px-4 leading-tight">99.9999% Quality Assurance</div>
              </div>

              {/* Right Diamond - Yellow */}
              <div
                className="absolute w-28 h-28 md:w-52 md:h-52 flex items-center justify-center text-center font-bold text-xs md:text-lg rounded-lg hover:scale-105 transition-transform"
                style={{
                  top: "50%",
                  right: 0,
                  transform: "translate(50%, -50%) rotate(45deg)",
                  background: "hsl(48, 100%, 50%)",
                  color: "hsl(0, 0%, 0%)",
                }}
              >
                <div className="-rotate-45 px-2 md:px-4 leading-tight">AI Innovation</div>
              </div>

              {/* Bottom Diamond - Green */}
              <div
                className="absolute w-28 h-28 md:w-52 md:h-52 flex items-center justify-center text-center text-white font-bold text-xs md:text-lg rounded-lg hover:scale-105 transition-transform"
                style={{
                  bottom: 0,
                  left: "50%",
                  transform: "translate(-50%, 50%) rotate(45deg)",
                  background: "hsl(146, 100%, 30%)",
                }}
              >
                <div className="-rotate-45 px-2 md:px-4 leading-tight">Scalability</div>
              </div>

              {/* Left Diamond - Primary Blue */}
              <div
                className="absolute w-28 h-28 md:w-52 md:h-52 flex items-center justify-center text-center text-white font-bold text-xs md:text-lg rounded-lg hover:scale-105 transition-transform"
                style={{
                  top: "50%",
                  left: 0,
                  transform: "translate(-50%, -50%) rotate(45deg)",
                  background: "hsl(225, 85%, 35%)",
                }}
              >
                <div className="-rotate-45 px-2 md:px-4 leading-tight">Reliability</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating animation keyframes */}
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); opacity: 0.4; }
            50% { transform: translateY(-15px); opacity: 0.6; }
            100% { transform: translateY(0px); opacity: 0.4; }
          }
        `}</style>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
              Our Partners
            </h2>
            <div className="w-24 h-1 bg-warning mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with industry leaders to deliver world-class solutions across banking and insurance.
            </p>
          </div>
          <PartnersCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={homeFAQs} variant="home" />

      {/* CTA Section */}
      <section className="section-padding bg-success">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Let's discuss how AI can transform your organization.
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us today to explore how DFT Group can help you make smarter, safer decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="warning" size="lg">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
