import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/dft-solutions-hero.jpg";
import bankingSectorImg from "@/assets/banking-sector-new.png";
import insuranceSectorImg from "@/assets/insurance-sector-new.jpg";
import publicSectorImg from "@/assets/public-sector.jpg";
import capabilityBuildingImg from "@/assets/capability-building-new.jpg";
import ServicesSection from "@/components/ServicesSection";
import { 
  ChevronRight,
  Phone,
  Landmark,
  HeartPulse,
  Building2,
  GraduationCap,
} from "lucide-react";

const Services = () => {
  const sectors = [
    {
      title: "Banking, SACCOs & Microfinance",
      icon: Landmark,
      image: bankingSectorImg,
      description: "We work with banks, SACCOs, and microfinance institutions to improve credit decisioning, strengthen risk controls, and modernize operations in line with regulatory expectations.",
      outcomes: "Our interventions consistently result in faster credit turnaround times, improved portfolio quality, and reduced operational costs through intelligent automation and analytics. Institutions also achieve stronger compliance and greater visibility into risk across their lending and transaction environments.",
    },
    {
      title: "Insurance (Medical & Life)",
      icon: HeartPulse,
      image: insuranceSectorImg,
      description: "We support insurers in addressing claims inefficiencies, fraud exposure, and underwriting challenges — particularly in complex medical insurance environments.",
      outcomes: "Our work delivers faster claims processing, improved fraud detection rates, and more accurate underwriting decisions. Insurers gain tighter control over claims costs, reduced leakages, and enhanced operational efficiency across the policy lifecycle, leading to improved customer experience and financial performance.",
    },
    {
      title: "Public Sector & Regulators",
      icon: Building2,
      image: publicSectorImg,
      description: "We partner with regulators and public institutions to strengthen oversight, governance, and accountability in a digital-first environment.",
      outcomes: "Our engagements result in more effective regulatory frameworks, improved fraud detection and enforcement capabilities, and stronger data governance practices. Institutions are better equipped to supervise markets, enforce compliance, and leverage technology to improve public service delivery.",
    },
    {
      title: "Capability Building Across All Sectors",
      icon: GraduationCap,
      image: capabilityBuildingImg,
      description: "Through DFT Academy, we build the internal capacity required to sustain transformation and ensure responsible AI adoption.",
      outcomes: "Organizations that work with us develop stronger governance cultures, improved compliance awareness, and practical skills in AI, fraud risk, and cybersecurity. This translates into more resilient institutions capable of sustaining long-term transformation.",
    },
  ];

  const scrollToServices = () => {
    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="AI-powered solutions for finance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
            Transforming Finance Through{" "}
            <span className="text-primary">Data, Forensics & FinTech</span>{" "}
            Innovation
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
            We deliver AI-powered data insights, robust risk management, and embedded 
            finance platforms to empower financial institutions and businesses.
          </p>
          <Button 
            onClick={scrollToServices}
            variant="warning"
            size="lg"
          >
            Explore Our Solutions
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Section - shared component */}
      <div id="services-section">
        <ServicesSection showCTA={false} />
      </div>

      {/* Sectors We Serve */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sectors We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              DFT Group partners with key sectors of the economy as a catalyst for responsible digital transformation — delivering measurable business value through AI, while strengthening governance, reducing risk, and improving operational efficiency.
            </p>
          </div>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
            Our engagements are advisory-led and outcome-driven. We focus on solving real operational challenges and delivering results that are visible at both operational and executive levels.
          </p>

          <div className="space-y-16">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              const isEven = index % 2 === 1;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                      <img 
                        src={sector.image} 
                        alt={sector.title}
                        loading="lazy"
                        width={1024}
                        height={640}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                     <div className="flex items-center gap-3">
                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${index % 2 === 0 ? 'bg-success/10' : 'bg-warning/10'}`}>
                         <IconComponent className={`w-6 h-6 ${index % 2 === 0 ? 'text-success' : 'text-warning'}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{sector.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {sector.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {sector.outcomes}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-foreground font-semibold max-w-4xl mx-auto leading-relaxed">
              Our commitment is clear: every engagement delivers stronger controls, better decisions, and measurable business value — enabling safer, smarter organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 bg-success">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your financial workflows?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join leading financial institutions who trust DFT Group to drive their digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                variant="warning"
                size="lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
