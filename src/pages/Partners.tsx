// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Building2, Users, Globe, Award, ArrowRight } from "lucide-react";

// // const Partners = () => {
// //   const [flippedCard, setFlippedCard] = useState<string | null>(null);

// //   const partners = [
// //     {
// //       id: "techcorp",
// //       name: "TechCorp Solutions",
// //       logo: "🏢",
// //       category: "Technology Partner",
// //       description: "Leading cloud infrastructure and AI development partner",
// //       fullDescription: "TechCorp Solutions provides cutting-edge cloud infrastructure and AI development capabilities, enabling us to deliver scalable and robust fintech solutions. Their expertise in machine learning platforms and data processing has been instrumental in our AI-powered document analysis services.",
// //       partnership: "5+ years",
// //       region: "Global"
// //     },
// //     {
// //       id: "financeplus",
// //       name: "FinancePlus Bank",
// //       logo: "🏦",
// //       category: "Financial Institution",
// //       description: "Major banking partner for credit underwriting solutions",
// //       fullDescription: "FinancePlus Bank has been a strategic partner in developing and refining our automated credit underwriting systems. Through this partnership, we've processed over 1 million loan applications and achieved 95% accuracy in credit risk assessment.",
// //       partnership: "7+ years",
// //       region: "East Africa"
// //     },
// //     {
// //       id: "insureguard",
// //       name: "InsureGuard Ltd",
// //       logo: "🛡️",
// //       category: "Insurance Partner",
// //       description: "Premier insurance company leveraging our AI analytics",
// //       fullDescription: "InsureGuard Ltd utilizes our AI-powered risk assessment and claims processing solutions. This partnership has resulted in 60% faster claims processing and significant reduction in fraudulent claims detection.",
// //       partnership: "4+ years",
// //       region: "Kenya"
// //     },
// //     {
// //       id: "datawise",
// //       name: "DataWise Analytics",
// //       logo: "📊",
// //       category: "Data Partner",
// //       description: "Advanced data science and analytics collaboration",
// //       fullDescription: "DataWise Analytics brings advanced statistical modeling and data science expertise to our AI initiatives. Together, we've developed proprietary algorithms for financial pattern recognition and predictive analytics.",
// //       partnership: "3+ years",
// //       region: "Global"
// //     },
// //     {
// //       id: "cybersec",
// //       name: "CyberSec Pro",
// //       logo: "🔒",
// //       category: "Security Partner",
// //       description: "Cybersecurity and digital forensics expertise",
// //       fullDescription: "CyberSec Pro provides comprehensive cybersecurity solutions and digital forensics capabilities. This partnership ensures our fintech solutions maintain the highest security standards and compliance requirements.",
// //       partnership: "6+ years",
// //       region: "Africa"
// //     },
// //     {
// //       id: "cloudtech",
// //       name: "CloudTech Systems",
// //       logo: "☁️",
// //       category: "Cloud Partner",
// //       description: "Cloud infrastructure and scalability solutions",
// //       fullDescription: "CloudTech Systems manages our cloud infrastructure, ensuring 99.9% uptime and seamless scalability for our AI-powered services. Their expertise enables us to handle peak processing loads efficiently.",
// //       partnership: "4+ years",
// //       region: "Global"
// //     },
// //     {
// //       id: "ai-innovations",
// //       name: "AI Innovations Lab",
// //       logo: "🤖",
// //       category: "AI Research Partner",
// //       description: "Cutting-edge AI research and development",
// //       fullDescription: "AI Innovations Lab collaborates with us on advanced AI research, including natural language processing and computer vision technologies that power our document analysis solutions.",
// //       partnership: "2+ years",
// //       region: "Global"
// //     },
// //     {
// //       id: "regulatory",
// //       name: "Regulatory Compliance Corp",
// //       logo: "⚖️",
// //       category: "Compliance Partner",
// //       description: "Regulatory compliance and legal expertise",
// //       fullDescription: "Regulatory Compliance Corp ensures all our fintech solutions meet international compliance standards and regulatory requirements, particularly in financial services and data protection.",
// //       partnership: "5+ years",
// //       region: "Multiple Regions"
// //     }
// //   ];

// //   const partnerStats = [
// //     { title: "Strategic Partners", value: "25+", icon: "🤝" },
// //     { title: "Countries Covered", value: "15+", icon: "🌍" },
// //     { title: "Joint Projects", value: "100+", icon: "🚀" },
// //     { title: "Years of Partnership", value: "50+", icon: "📅" }
// //   ];

// //   const handleCardFlip = (partnerId: string) => {
// //     setFlippedCard(flippedCard === partnerId ? null : partnerId);
// //   };

// //   return (
// //     <div className="min-h-screen bg-background">
// //       {/* Hero Section */}
// //       <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
// //         <div className="container-max text-center">
// //           <Badge variant="outline" className="neon-border mb-4">
// //             <Users className="w-4 h-4 mr-2" />
// //             Strategic Partnerships
// //           </Badge>
// //           <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
// //             Our Partners
// //           </h1>
// //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
// //             Building the future of fintech through strategic partnerships with industry leaders. 
// //             Together, we deliver innovative AI-powered solutions that transform financial services.
// //           </p>
// //           <div className="flex flex-wrap justify-center gap-4">
// //             <Badge variant="secondary" className="text-sm">🏦 Financial Institutions</Badge>
// //             <Badge variant="secondary" className="text-sm">🤖 AI Technology Partners</Badge>
// //             <Badge variant="secondary" className="text-sm">☁️ Cloud Infrastructure</Badge>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Partnership Stats */}
// //       <section className="section-padding">
// //         <div className="container-max">
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
// //             {partnerStats.map((stat, index) => (
// //               <Card key={index} className="text-center neon-border">
// //                 <CardHeader className="pb-2">
// //                   <div className="text-3xl mb-2">{stat.icon}</div>
// //                   <CardTitle className="text-2xl font-bold gradient-text-neon">
// //                     {stat.value}
// //                   </CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <p className="text-sm text-muted-foreground font-medium">
// //                     {stat.title}
// //                   </p>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Partners Grid */}
// //       <section className="section-padding">
// //         <div className="container-max">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-neon">
// //               Strategic Partner Network
// //             </h2>
// //             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
// //               Click on any partner card to learn more about our collaboration and achievements
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //             {partners.map((partner) => (
// //               <div key={partner.id} className="relative h-64 perspective-1000">
// //                 <div 
// //                   className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
// //                     flippedCard === partner.id ? 'rotate-y-180' : ''
// //                   }`}
// //                   onClick={() => handleCardFlip(partner.id)}
// //                 >
// //                   {/* Front of card */}
// //                   <Card className="absolute inset-0 w-full h-full neon-border backface-hidden">
// //                     <CardHeader className="text-center h-full flex flex-col justify-center">
// //                       <div className="text-6xl mb-4">{partner.logo}</div>
// //                       <CardTitle className="text-lg font-bold">
// //                         {partner.name}
// //                       </CardTitle>
// //                       <Badge variant="outline" className="mt-2 mx-auto">
// //                         {partner.category}
// //                       </Badge>
// //                       <CardDescription className="mt-4 text-sm">
// //                         {partner.description}
// //                       </CardDescription>
// //                     </CardHeader>
// //                   </Card>

// //                   {/* Back of card */}
// //                   <Card className="absolute inset-0 w-full h-full neon-border backface-hidden rotate-y-180 bg-gradient-to-br from-primary/10 to-accent/10">
// //                     <CardContent className="p-4 h-full flex flex-col justify-between">
// //                       <div>
// //                         <h3 className="text-lg font-bold mb-2 gradient-text">
// //                           {partner.name}
// //                         </h3>
// //                         <p className="text-sm text-foreground mb-4 leading-relaxed">
// //                           {partner.fullDescription}
// //                         </p>
// //                       </div>
// //                       <div className="space-y-2">
// //                         <div className="flex justify-between text-xs">
// //                           <span className="text-muted-foreground">Partnership:</span>
// //                           <span className="font-medium">{partner.partnership}</span>
// //                         </div>
// //                         <div className="flex justify-between text-xs">
// //                           <span className="text-muted-foreground">Region:</span>
// //                           <span className="font-medium">{partner.region}</span>
// //                         </div>
// //                       </div>
// //                     </CardContent>
// //                   </Card>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Partnership Approach */}
// //       <section className="section-padding bg-gradient-to-br from-accent/5 to-primary/5">
// //         <div className="container-max">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
// //               Our Partnership Approach
// //             </h2>
// //             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
// //               We believe in collaborative innovation that creates mutual value and drives industry transformation
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 icon: "🤝",
// //                 title: "Collaborative Innovation",
// //                 description: "Working together to develop cutting-edge solutions that address real market needs and challenges."
// //               },
// //               {
// //                 icon: "🎯",
// //                 title: "Mutual Value Creation",
// //                 description: "Building partnerships where both parties benefit and contribute to shared success and growth."
// //               },
// //               {
// //                 icon: "🚀",
// //                 title: "Technology Leadership",
// //                 description: "Combining expertise to stay at the forefront of AI and fintech innovation in global markets."
// //               }
// //             ].map((approach, index) => (
// //               <Card key={index} className="text-center neon-border">
// //                 <CardHeader>
// //                   <div className="text-4xl mb-4">{approach.icon}</div>
// //                   <CardTitle className="text-xl font-bold gradient-text-neon">
// //                     {approach.title}
// //                   </CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <CardDescription className="text-base leading-relaxed">
// //                     {approach.description}
// //                   </CardDescription>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Partnership CTA */}
// //       <section className="section-padding">
// //         <div className="container-max text-center">
// //           <div className="max-w-3xl mx-auto">
// //             <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-neon">
// //               Become Our Partner
// //             </h2>
// //             <p className="text-lg text-muted-foreground mb-8">
// //               Join our network of innovative partners and help us shape the future of financial technology. 
// //               Let's create value together through strategic collaboration.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <Button variant="hero" size="lg">
// //                 Partnership Inquiry
// //                 <ArrowRight className="w-5 h-5 ml-2" />
// //               </Button>
// //               <Button variant="outline" size="lg" className="neon-border">
// //                 Partnership Guide
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// export default Partners;
