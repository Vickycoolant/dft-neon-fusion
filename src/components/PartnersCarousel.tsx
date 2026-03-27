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
      description: "Leading provider of enterprise software solutions for financial institutions.",
      industry: "Fintech Software",
    },
    {
      name: "DataVault Systems",
      description: "Secure data management and analytics platform for banks and insurance companies.",
      industry: "Data Security",
    },
    {
      name: "CloudFirst Technologies",
      description: "Cloud infrastructure and migration services for financial services industry.",
      industry: "Cloud Solutions",
    },
    {
      name: "AI Dynamics Ltd",
      description: "Artificial intelligence and machine learning solutions for credit scoring.",
      industry: "AI/ML",
    },
    {
      name: "SecureNet Partners",
      description: "Cybersecurity solutions specializing in financial data protection.",
      industry: "Cybersecurity",
    },
    {
      name: "InsureTech Innovation",
      description: "Digital transformation solutions for insurance companies and brokers.",
      industry: "Insurance Tech",
    },
    {
      name: "BlockChain Ventures",
      description: "Blockchain and distributed ledger technology for financial transactions.",
      industry: "Blockchain",
    },
    {
      name: "FinAnalytics Pro",
      description: "Advanced analytics and reporting tools for financial institutions.",
      industry: "Analytics",
    },
  ];

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  const accentStyles = [
    { bg: "from-primary/20 to-primary/10", text: "text-primary", border: "border-primary/20", tag: "bg-primary/10 text-primary" },
    { bg: "from-success/20 to-success/10", text: "text-success", border: "border-success/20", tag: "bg-success/10 text-success" },
    { bg: "from-warning/20 to-warning/10", text: "text-warning", border: "border-warning/20", tag: "bg-warning/10 text-warning" },
    { bg: "from-primary/20 to-primary/10", text: "text-primary", border: "border-primary/20", tag: "bg-primary/10 text-primary" },
    { bg: "from-success/20 to-success/10", text: "text-success", border: "border-success/20", tag: "bg-success/10 text-success" },
    { bg: "from-warning/20 to-warning/10", text: "text-warning", border: "border-warning/20", tag: "bg-warning/10 text-warning" },
    { bg: "from-primary/20 to-primary/10", text: "text-primary", border: "border-primary/20", tag: "bg-primary/10 text-primary" },
    { bg: "from-success/20 to-success/10", text: "text-success", border: "border-success/20", tag: "bg-success/10 text-success" },
  ];

  return (
    <div className="relative overflow-hidden w-full py-8">
      <div className="flex w-max animate-marquee hover:pause-marquee">
        {[...partners, ...partners].map((partner, index) => {
          const style = accentStyles[index % accentStyles.length];
          return (
            <Card
              key={`${partner.name}-${index}`}
              className={`w-52 h-56 mx-4 group hover:shadow-xl transition-all duration-300 flex-shrink-0 border ${style.border} bg-card hover:-translate-y-1`}
            >
              <CardContent className="p-5 flex flex-col items-center justify-center h-full text-center">
                <div className={`w-16 h-16 mb-3 rounded-xl bg-gradient-to-br ${style.bg} flex items-center justify-center text-lg font-bold ${style.text} shadow-sm`}>
                  {getInitials(partner.name)}
                </div>
                <h3 className="text-sm font-semibold mb-1.5 text-foreground line-clamp-1">
                  {partner.name}
                </h3>
                <div className={`text-xs font-semibold mb-2 px-2.5 py-0.5 rounded-full ${style.tag}`}>
                  {partner.industry}
                </div>
                <p className="text-xs text-muted-foreground leading-snug line-clamp-2">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
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
