import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Partner {
  name: string;
  logo: string;
  description: string;
  industry: string;
}

const PartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners: Partner[] = [
    {
      name: "TechCorp Solutions",
      logo: "/src/assets/company-logo-1.jpg",
      description: "Leading provider of enterprise software solutions for financial institutions.",
      industry: "Fintech Software"
    },
    {
      name: "DataVault Systems",
      logo: "/src/assets/company-logo-2.jpg", 
      description: "Secure data management and analytics platform for banks and insurance companies.",
      industry: "Data Security"
    },
    {
      name: "CloudFirst Technologies",
      logo: "/src/assets/company-logo-3.jpg",
      description: "Cloud infrastructure and migration services for financial services industry.",
      industry: "Cloud Solutions"
    },
    {
      name: "AI Dynamics Ltd",
      logo: "/src/assets/company-logo-1.jpg",
      description: "Artificial intelligence and machine learning solutions for credit scoring.",
      industry: "AI/ML"
    },
    {
      name: "SecureNet Partners",
      logo: "/src/assets/company-logo-2.jpg",
      description: "Cybersecurity solutions specializing in financial data protection.",
      industry: "Cybersecurity"
    },
    {
      name: "InsureTech Innovation",
      logo: "/src/assets/company-logo-3.jpg",
      description: "Digital transformation solutions for insurance companies and brokers.",
      industry: "Insurance Tech"
    },
    {
      name: "BlockChain Ventures",
      logo: "/src/assets/company-logo-1.jpg",
      description: "Blockchain and distributed ledger technology for financial transactions.",
      industry: "Blockchain"
    },
    {
      name: "FinAnalytics Pro",
      logo: "/src/assets/company-logo-2.jpg",
      description: "Advanced analytics and reporting tools for financial institutions.",
      industry: "Analytics"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 1 >= partners.length - 3 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisiblePartners = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % partners.length;
      visible.push(partners[index]);
    }
    return visible;
  };

  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-1000 ease-in-out gap-6"
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {partners.map((partner, index) => (
          <Card 
            key={`${partner.name}-${index}`} 
            className="min-w-[22%] neon-border group hover:shadow-lg transition-all duration-300"
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
      
      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: partners.length - 3 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-primary' : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;