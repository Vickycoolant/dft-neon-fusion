import { Card, CardContent } from "@/components/ui/card";

interface Partner {
  name: string;
  logo: string;
  description: string;
  industry: string;
}

const PartnersCarousel = () => {
  const partners: Partner[] = [
    {
      name: "TechCorp Solutions",
      logo: "/src/assets/company-logo-1.jpg",
      description:
        "Leading provider of enterprise software solutions for financial institutions.",
      industry: "Fintech Software",
    },
    {
      name: "DataVault Systems",
      logo: "/src/assets/company-logo-2.jpg",
      description:
        "Secure data management and analytics platform for banks and insurance companies.",
      industry: "Data Security",
    },
    {
      name: "CloudFirst Technologies",
      logo: "/src/assets/company-logo-3.jpg",
      description:
        "Cloud infrastructure and migration services for financial services industry.",
      industry: "Cloud Solutions",
    },
    {
      name: "AI Dynamics Ltd",
      logo: "/src/assets/company-logo-1.jpg",
      description:
        "Artificial intelligence and machine learning solutions for credit scoring.",
      industry: "AI/ML",
    },
    {
      name: "SecureNet Partners",
      logo: "/src/assets/company-logo-2.jpg",
      description:
        "Cybersecurity solutions specializing in financial data protection.",
      industry: "Cybersecurity",
    },
    {
      name: "InsureTech Innovation",
      logo: "/src/assets/company-logo-3.jpg",
      description:
        "Digital transformation solutions for insurance companies and brokers.",
      industry: "Insurance Tech",
    },
    {
      name: "BlockChain Ventures",
      logo: "/src/assets/company-logo-1.jpg",
      description:
        "Blockchain and distributed ledger technology for financial transactions.",
      industry: "Blockchain",
    },
    {
      name: "FinAnalytics Pro",
      logo: "/src/assets/company-logo-2.jpg",
      description:
        "Advanced analytics and reporting tools for financial institutions.",
      industry: "Analytics",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full bg-white py-8">
      {/* Animated wrapper */}
      <div className="flex w-max animate-marquee hover:pause-marquee">
        {/* Duplicate array for seamless loop */}
        {[...partners, ...partners].map((partner, index) => (
          <Card
            key={`${partner.name}-${index}`}
            className="min-w-[250px] mx-4 neon-border group hover:shadow-lg transition-all duration-300"
          >
            <CardContent className="p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {partner.name}
              </h3>
              <div className="text-xs text-primary font-medium mb-2">
                {partner.industry}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {partner.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tailwind keyframes + hover pause */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .hover\\:pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PartnersCarousel;
