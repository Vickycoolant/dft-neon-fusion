import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import dftLogo from "@/assets/dft-logo-new.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const majorServices = [
    "Document Analysis",
    "Bank Statement Analysis", 
    "Predictive Analytics",
    "Cybersecurity Solutions",
    "Cloud Solutions",
    "Custom Development"
  ];

  const quickLinks = [
    "Home",
    "Services", 
    "Industry",
    "Partners",
    "About Us",
    "Contact",
    "Events & Updates"
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 pt-16 pb-8">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={dftLogo} alt="DFT Consult" className="h-10 w-auto object-contain" />
              <h3 className="text-xl font-bold text-white">DFT Consult</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading AI-powered fintech solutions provider with 15+ years of experience. 
              Transforming financial technology through advanced artificial intelligence 
              and machine learning innovations.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href={`/${link.toLowerCase().replace(' ', '-').replace('&', '')}`}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Major Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Major Services</h4>
            <ul className="space-y-2">
              {majorServices.map((service) => (
                <li key={service}>
                  <a 
                    href="/services"
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Westlands Business District<br />
                    Nairobi, Kenya<br />
                    P.O. Box 12345-00100
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-gray-300 text-sm">+254 700 123 456</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@dftconsult.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} DFT Consult. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;