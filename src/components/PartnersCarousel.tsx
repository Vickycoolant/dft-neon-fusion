import { Card, CardContent } from "@/components/ui/card";

interface Partner {
  name: string;
  description: string;
  industry: string;
}

const PartnersCarousel = () => {
  const partners: Partner[] = [
    {
      name: "TechCorp Solutions",
      description:
        "Leading provider of enterprise software solutions for financial institutions.",
      industry: "Fintech Software",
    },
    {
      name: "DataVault Systems",
      description:
        "Secure data management and analytics platform for banks and insurance companies.",
      industry: "Data Security",
    },
    {
      name: "CloudFirst Technologies",
      description:
        "Cloud infrastructure and migration services for financial services industry.",
      industry: "Cloud Solutions",
    },
    {
      name: "AI Dynamics Ltd",
      description:
        "Artificial intelligence and machine learning solutions for credit scoring.",
      industry: "AI/ML",
    },
    {
      name: "SecureNet Partners",
      description:
        "Cybersecurity solutions specializing in financial data protection.",
      industry: "Cybersecurity",
    },
    {
      name: "InsureTech Innovation",
      description:
        "Digital transformation solutions for insurance companies and brokers.",
      industry: "Insurance Tech",
    },
    {
      name: "BlockChain Ventures",
      description:
        "Blockchain and distributed ledger technology for financial transactions.",
      industry: "Blockchain",
    },
    {
      name: "FinAnalytics Pro",
      description:
        "Advanced analytics and reporting tools for financial institutions.",
      industry: "Analytics",
    },
  ];

  // Helper function to generate initials
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  return (
    <div className="relative overflow-hidden w-full py-8">
      {/* Animated wrapper */}
      <div className="flex w-max animate-marquee hover:pause-marquee">
        {[...partners, ...partners].map((partner, index) => (
          <Card
            key={`${partner.name}-${index}`}
            className="w-48 h-48 mx-4 neon-border group hover:shadow-lg transition-all duration-300 flex-shrink-0"
          >
            <CardContent className="p-4 flex flex-col items-center justify-center h-full text-center">
              {/* Initials as mock logo */}
              <div className="w-16 h-16 mb-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-lg font-bold text-primary">
                {getInitials(partner.name)}
              </div>
              <h3 className="text-sm font-semibold mb-1 text-foreground line-clamp-1">
                {partner.name}
              </h3>
              <div className="text-xs text-primary font-medium mb-1 line-clamp-1">
                {partner.industry}
              </div>
              <p className="text-xs text-muted-foreground leading-snug line-clamp-3">
                {partner.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tailwind keyframes + hover pause */}
      <style>{`
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
