import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DFTMap from "@/components/GoogleMap";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Manga House, 1st Floor", "Kiambere Road", "Nairobi, Kenya"],
      bgColor: "bg-primary",
      textColor: "text-white"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+254-709-385-024", "24/7 Support Available"],
      bgColor: "bg-success",
      textColor: "text-white"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@dftconsult.com", "simion.rutto@dftconsult.com"],
      bgColor: "bg-warning",
      textColor: "text-black"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      bgColor: "bg-accent",
      textColor: "text-white"
    }
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", url: "#", color: "text-blue-600" },
    { icon: Twitter, name: "Twitter", url: "#", color: "text-blue-400" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "text-blue-700" },
    { icon: Instagram, name: "Instagram", url: "#", color: "text-pink-600" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-max text-center">
          <Badge variant="outline" className="neon-border mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to transform your financial operations with AI-powered solutions? 
            Let's discuss how DFT Consult can help your organization achieve its goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm">🤖 AI Consultation</Badge>
            <Badge variant="secondary" className="text-sm">🚀 Quick Response</Badge>
            <Badge variant="secondary" className="text-sm">🤝 Partnership Opportunities</Badge>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className={`${info.bgColor} text-center hover:shadow-lg transition-all duration-300 border-0`}>
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center`}>
                      <IconComponent className={`w-8 h-8 ${info.textColor}`} />
                    </div>
                    <CardTitle className={`text-lg font-bold ${info.textColor}`}>
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className={`text-sm ${info.textColor}`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <Card className="border-success border-2">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-warning">
                    Contact Form
                  </CardTitle>
                  <CardDescription>
                    Let us know how we can help you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="neon-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                          required
                          className="neon-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="neon-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What can we help you with?"
                        required
                        className="neon-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your project or requirements..."
                        required
                        rows={6}
                        className="neon-border"
                      />
                    </div>

                    <Button type="submit" variant="success" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4169E1]">
                  Find Us
                </h2>
                <p className="text-lg text-muted-foreground">
                  Visit our headquarters in Nairobi or connect with us online.
                </p>
              </div>

              {/* Google Map */}
              <Card className="border-success border-2 mb-8">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-warning">
                    Our Location
                  </CardTitle>
                  <CardDescription>
                    Manga House, 1st Floor, Kiambere Road, Nairobi, Kenya
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] rounded-lg overflow-hidden">
                    <DFTMap />
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-success border-2">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-warning">
                    Connect With Us
                  </CardTitle>
                  <CardDescription>
                    Follow us on social media for updates and insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialMedia.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          size="lg"
                          className="neon-border justify-start"
                          asChild
                        >
                          <a href={social.url} target="_blank" rel="noopener noreferrer">
                            <IconComponent className={`w-5 h-5 mr-2 ${social.color}`} />
                            {social.name}
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-success">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Let's Build the Future Together
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Whether you're looking to implement AI-powered document analysis, 
              enhance your risk assessment capabilities, or explore digital transformation opportunities, 
              we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-success hover:bg-white/90">
                Schedule a Consultation
              </Button>
              <Button variant="warning" size="lg">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;