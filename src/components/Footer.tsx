import React from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import dftLogo from "@/assets/dft-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const majorServices = [
    "Document Analysis",
    "Bank Statement Analysis",
    "Predictive Analytics",
    "Cybersecurity Solutions",
    "Cloud Solutions",
    "Custom Development",
  ];

  const quickLinks = [
    "Home",
    "Services",
    "Industry",
    "Partners",
    "About Us",
    "Contact",
    "Events & Updates",
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 pt-16 pb-8">
      {/* Full-width wrapper so the footer spans edge-to-edge on all screens */}
      <div className="w-full px-6 lg:px-12">
        {/* Main grid — expands on ultrawide screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-12 w-full">
          {/* Company Info */}
          <div className="space-y-4 xl:col-span-2">
            <div className="flex items-center space-x-3">
              <img src={dftLogo} alt="DFT Consult" className="w-12 h-7 object-contain" />
              <h3 className="text-xl font-bold text-white">DFT Consult</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading AI-powered fintech solutions provider with 15+ years of experience.
              Transforming financial technology through advanced artificial intelligence
              and machine learning innovations.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
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
                    href={`/${link.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "")}`}
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
                  <a href="/services" className="text-gray-300 hover:text-p
