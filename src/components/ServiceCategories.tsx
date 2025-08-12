import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Service {
  id: string;
  name: string;
  image: string;
  description: string;
  fullDescription: string;
  category: string;
}

interface ServiceCategoriesProps {
  services: Service[];
  expandedService: string | null;
  onToggleExpand: (serviceId: string) => void;
}

const ServiceCategories = ({ services, expandedService, onToggleExpand }: ServiceCategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(services.map(service => service.category)))];

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div>
      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "neon-glow" : "neon-border"}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => {
          const isExpanded = expandedService === service.id;

          return (
            <Card key={service.id} className="neon-border group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold">
                  {service.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isExpanded && (
                  <div className="mt-4 p-4 bg-secondary/50 rounded-lg animate-fade-in">
                    <p className="text-sm text-foreground leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onToggleExpand(service.id)}
                  className="w-full mt-4 neon-border"
                >
                  {isExpanded ? "Show Less" : "Learn More"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCategories;