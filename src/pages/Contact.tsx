import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Twitter,
  Linkedin
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-email', {
        body: {
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          formType: "Contact Form",
        },
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Your message has been sent successfully. We'll get back to you within 24 hours.",
      });
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
      setErrors({});
    } catch (err) {
      console.error("Error sending email:", err);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again or email us directly at info@dftconsult.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      title: "Phone Number",
      details: ["+254-704-453-592", "+254-704-451-160"],
      bgColor: "bg-success",
      textColor: "text-white"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@dftconsult.com"],
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
    { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/company/dftconsult/posts/?feedView=all", color: "text-blue-700" },
    { icon: Twitter, name: "Twitter", url: "#", color: "text-blue-400" }
  ];

  return (
    <div className="min-h-screen bg-background">
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
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="First name"
                          required
                          className="neon-border"
                        />
                        {errors.firstName && <p className="text-xs text-destructive">{errors.firstName}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Last name"
                          required
                          className="neon-border"
                        />
                        {errors.lastName && <p className="text-xs text-destructive">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        required
                        className="neon-border"
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company or organization"
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
                        placeholder="e.g. Partnership enquiry, Service request"
                        required
                        className="neon-border"
                      />
                      {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your project or requirements in detail..."
                        required
                        rows={6}
                        className="neon-border"
                      />
                      {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                    </div>

                    <Button type="submit" variant="success" size="lg" className="w-full" disabled={isSubmitting}>
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
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

              {/* Embedded Map */}
              <Card className="border-success border-2 mb-8">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-warning">
                    Our Location
                  </CardTitle>
                  <CardDescription>
                    Manga House, Kiambere Road (off Upper Hill Road), Near Nyayo Stadium, Nairobi
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] rounded-lg overflow-hidden">
                    <iframe
                      title="DFT Consult Location - Manga House, Kiambere Road"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8508!2d36.8200!3d-1.3024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1135c1234567%3A0x0!2zMcKwMTgnMDguNyJTIDM2wrA0OScxMi4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
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
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
