import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cpu, Shield, GraduationCap, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServicesSectionProps {
  showCTA?: boolean;
  ctaLink?: string;
  ctaText?: string;
}

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

const accentColors = [
  { iconBg: "bg-primary/10", iconColor: "text-primary", border: "border-primary/20", hoverBorder: "hover:border-primary/40" },
  { iconBg: "bg-success/10", iconColor: "text-success", border: "border-success/20", hoverBorder: "hover:border-success/40" },
  { iconBg: "bg-warning/10", iconColor: "text-warning", border: "border-warning/20", hoverBorder: "hover:border-warning/40" },
  { iconBg: "bg-success/10", iconColor: "text-success", border: "border-success/20", hoverBorder: "hover:border-success/40" },
  { iconBg: "bg-warning/10", iconColor: "text-warning", border: "border-warning/20", hoverBorder: "hover:border-warning/40" },
];

const ServicesSection = ({ showCTA = true, ctaLink = "/services", ctaText = "View All Services" }: ServicesSectionProps) => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-background to-success/[0.06]"></div>
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-hex" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
              <path d="M40 0 L80 23 L80 69 L40 92 L0 69 L0 23 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
              <circle cx="40" cy="46" r="4" fill="currentColor" className="text-success" opacity="0.7" />
              <path d="M0 23 L40 46 L80 23" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-warning" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-hex)" />
        </svg>
        {/* Decorative blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-warning/[0.10] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/[0.10] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-success/[0.07] rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-warning mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At DFT Group, our services are designed to deliver one outcome: measurable business value through AI for safer, smarter organizations. We focus on strengthening decision-making, reducing risk, and improving operational efficiency across regulated industries.
          </p>
        </div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon;
            const colors = accentColors[index];
            return (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border ${colors.border} ${colors.hoverBorder} bg-card/80 backdrop-blur-sm hover:-translate-y-1`}>
                <CardHeader className="flex flex-col items-center text-center pb-4">
                  <div className={`w-20 h-20 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className={`w-10 h-10 ${colors.iconColor}`} />
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
                  <div className="flex items-start gap-2 bg-success/10 rounded-lg p-3 border border-success/20">
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

        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.slice(3).map((service, sliceIndex) => {
            const index = sliceIndex + 3;
            const Icon = service.icon;
            const colors = accentColors[index];
            return (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border ${colors.border} ${colors.hoverBorder} bg-card/80 backdrop-blur-sm hover:-translate-y-1`}>
                <CardHeader className="flex flex-col items-center text-center pb-4">
                  <div className={`w-20 h-20 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className={`w-10 h-10 ${colors.iconColor}`} />
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
                  <div className="flex items-start gap-2 bg-success/10 rounded-lg p-3 border border-success/20">
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

        <div className="text-center mt-10">
          <p className="text-muted-foreground italic max-w-3xl mx-auto mb-8">
            Across all our services, DFT integrates AI, forensic discipline, and governance to ensure that innovation delivers control, and transformation delivers value.
          </p>
          {showCTA && (
            <Link to={ctaLink}>
              <Button variant="success" size="lg">
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
