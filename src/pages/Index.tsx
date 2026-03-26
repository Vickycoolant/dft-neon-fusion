import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Cpu, Shield, GraduationCap, Lightbulb, CheckCircle, Building2, TrendingUp, Handshake, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";
import PartnersCarousel from "@/components/PartnersCarousel";
import AnimatedDashboard from "@/components/AnimatedDashboard";
import FAQSection from "@/components/FAQSection";
import HeroSlider from "@/components/HeroSlider";

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

  const services = [
    {
      icon: Brain,
      title: "AI & Data-Driven Decision Intelligence",
      description: "We enable organizations to make faster, more accurate, and risk-informed decisions using AI and advanced analytics.",
      detail: "By embedding predictive models and structured data frameworks into core operations, we help institutions proactively identify risks, optimize performance, and unlock new growth opportunities — while maintaining strong governance and compliance.",
      outcome: "Better decisions, reduced risk exposure, and improved operational visibility."
    },
    {
      icon: Cpu,
      title: "Digital Transformation & Operational Efficiency",
      description: "We support end-to-end transformation by aligning technology, processes, and people into a cohesive, high-performing operating model.",
      detail: "Our approach focuses on simplifying complexity, automating key processes, and ensuring that transformation initiatives translate into real operational gains — not just system deployments.",
      outcome: "Streamlined operations, improved efficiency, and scalable digital capabilities."
    },
    {
      icon: Shield,
      title: "Governance, Risk & Compliance",
      description: "We strengthen institutional integrity by embedding governance frameworks and control mechanisms into everyday operations.",
      detail: "From fraud risk management to regulatory alignment and ethical oversight, we ensure that organizations operate with transparency, accountability, and resilience in a rapidly evolving risk landscape.",
      outcome: "Stronger controls, enhanced compliance, and increased stakeholder trust."
    },
    {
      icon: GraduationCap,
      title: "Capability Building & Workforce Enablement",
      description: "We equip leadership teams and operational staff with the knowledge and skills required to adopt AI and digital technologies responsibly.",
      detail: "Through targeted training and structured learning programs, we build internal capacity that supports sustainable transformation and long-term value creation.",
      outcome: "A skilled workforce capable of driving and sustaining digital and AI-led initiatives."
    },
    {
      icon: Lightbulb,
      title: "Strategic Advisory & Transformation Support",
      description: "We provide practical, execution-focused advisory that bridges strategy and implementation.",
      detail: "Our engagements are grounded in industry context, regulatory realities, and technology expertise — ensuring that transformation initiatives are both viable and impactful.",
      outcome: "Clear strategic direction, accelerated execution, and measurable business impact."
    }
  ];

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
            {/* Left side - Dashboard illustration */}
            <div className="relative">
              <AnimatedDashboard />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-muted/40 to-muted/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-muted/30 to-muted/10 rounded-full blur-xl"></div>
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
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At DFT Group, our services are designed to deliver one outcome: measurable business value through AI for safer, smarter organizations. We focus on strengthening decision-making, reducing risk, and improving operational efficiency across regulated industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-card">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {service.detail}
                    </p>
                    <div className="flex items-start gap-2 bg-success/10 rounded-lg p-3">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 shrink-0" />
                      <p className="text-sm font-medium text-success">
                        <span className="font-semibold">Outcome:</span> {service.outcome}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-6">
            <p className="text-muted-foreground italic max-w-3xl mx-auto mb-8">
              Across all our services, DFT integrates AI, forensic discipline, and governance to ensure that innovation delivers control, and transformation delivers value.
            </p>
            <Link to="/services">
              <Button variant="default" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Partners Carousel */}
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
