import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, MapPin, Calendar, Award, Users2 } from "lucide-react";

const About = () => {
  const companyValues = [
    {
      icon: "🎯",
      title: "Innovation Excellence",
      description: "Continuously pushing boundaries in AI and fintech to deliver cutting-edge solutions that transform industries."
    },
    {
      icon: "🤝",
      title: "Client Partnership",
      description: "Building long-term relationships based on trust, transparency, and mutual success with our clients."
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description: "Maintaining the highest standards of data security and regulatory compliance in all our operations."
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "Creating solutions that make a positive difference in financial inclusion and accessibility worldwide."
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "Company Founded",
      description: "DFT Consult established with a vision to transform financial technology through innovative solutions."
    },
    {
      year: "2013",
      title: "AI Integration",
      description: "Pioneered the integration of artificial intelligence in financial document analysis and processing."
    },
    {
      year: "2016",
      title: "Regional Expansion",
      description: "Expanded operations across East Africa, serving major financial institutions and banks."
    },
    {
      year: "2019",
      title: "Digital Transformation",
      description: "Launched comprehensive digital transformation services for the insurance and banking sectors."
    },
    {
      year: "2022",
      title: "AI Leadership",
      description: "Became a recognized leader in AI-powered fintech solutions with 200+ client implementations."
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Achieved international recognition for innovation in financial technology and AI applications."
    }
  ];

  const leadership = [
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      avatar: "👩‍💼",
      description: "15+ years in fintech leadership, driving strategic vision and innovation across global markets."
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      avatar: "👨‍💻",
      description: "AI and machine learning expert with 12+ years building scalable financial technology solutions."
    },
    {
      name: "Dr. Amina Hassan",
      position: "Head of AI Research",
      avatar: "👩‍🔬",
      description: "PhD in Computer Science, leading our AI research initiatives and algorithm development."
    },
    {
      name: "David Kimani",
      position: "Head of Operations",
      avatar: "👨‍💼",
      description: "Operations excellence leader with deep expertise in financial services and regulatory compliance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-max text-center">
          <Badge variant="outline" className="neon-border mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Established in Nairobi, Kenya
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            About DFT Consult
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            For over a decade, we've been at the forefront of financial technology innovation, 
            delivering AI-powered solutions that transform how financial institutions operate 
            and serve their customers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm">
              <Calendar className="w-3 h-3 mr-1" />
              Est. 2010
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Users2 className="w-3 h-3 mr-1" />
              200+ Clients
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Award className="w-3 h-3 mr-1" />
              Industry Leader
            </Badge>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <Card className="neon-border text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center neon-glow">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold gradient-text">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To revolutionize financial services through innovative AI-powered solutions 
                  that enhance efficiency, reduce risk, and improve customer experiences 
                  across the banking, finance, and insurance sectors.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="neon-border text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center neon-glow">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold gradient-text-neon">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be the leading provider of AI-driven financial technology solutions 
                  globally, setting industry standards for innovation, security, and 
                  customer success in the digital transformation of financial services.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="neon-border text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-glow/20 to-accent-glow/20 flex items-center justify-center neon-glow">
                  <Heart className="w-8 h-8 text-primary-glow" />
                </div>
                <CardTitle className="text-2xl font-bold gradient-text">
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Innovation, integrity, excellence, and partnership guide everything we do. 
                  We believe in creating value through ethical AI practices and building 
                  lasting relationships with our clients and communities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <Card key={index} className="neon-border text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-2">{value.icon}</div>
                  <CardTitle className="text-lg font-semibold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Over a decade of innovation, growth, and industry leadership in financial technology
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}`}>
                    <Card className="neon-border">
                      <CardHeader>
                        <Badge variant="outline" className={`w-fit ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                          {item.year}
                        </Badge>
                        <CardTitle className="text-xl font-bold gradient-text-neon">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full neon-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-neon">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals driving innovation and excellence at DFT Consult
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="neon-border text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-4xl">
                    {leader.avatar}
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {leader.name}
                  </CardTitle>
                  <Badge variant="outline" className="mx-auto mt-2">
                    {leader.position}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {leader.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and industry leadership
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Years of Excellence", value: "14+", icon: "📅" },
              { title: "AI Models Deployed", value: "500+", icon: "🤖" },
              { title: "Documents Processed", value: "10M+", icon: "📄" },
              { title: "Client Satisfaction", value: "98%", icon: "⭐" }
            ].map((stat, index) => (
              <Card key={index} className="text-center neon-border">
                <CardHeader className="pb-2">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <CardTitle className="text-2xl font-bold gradient-text-neon">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm font-medium">
                    {stat.title}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-neon">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the growing number of financial institutions that trust DFT Consult 
              to deliver innovative AI-powered solutions that drive business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="neon-border">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;