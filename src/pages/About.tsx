import CoreValuesCarousel from "@/components/CoreValuesCarousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import BookDemoDialog from "@/components/BookDemoDialog";
import { 
  Target, 
  Eye, 
  Shield, 
  Lightbulb, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Zap,
  Building2,
  Brain
} from "lucide-react";
import aboutHeroImg from "@/assets/image-3.jpg";
import dataIntelligenceImg from "@/assets/image-10.jpg";
import forensicsRiskImg from "@/assets/forensics-risk.jpg";
import techSolutionsImg from "@/assets/image-3.jpg";
import simionRutto from "@/assets/simion-rutto.png";
import missionVision1 from "@/assets/mission-vision-1.jpg";
import missionVision2 from "@/assets/mission-vision-2.jpg";
import coreValueIntegrity from "@/assets/core-value-integrity.jpg";
import coreValueInnovation from "@/assets/core-value-innovation.jpg";
import coreValueClient from "@/assets/core-value-client.jpg";
import logoJubilee from "@/assets/logo-jubilee-new.png";
import logoEquity from "@/assets/logo-equity.png";
import logoKcb from "@/assets/logo-kcb-new.png";
import logoBritam from "@/assets/logo-britam-new.png";
import logoCentum from "@/assets/logo-centum-new.jpg";
import logoDtb from "@/assets/logo-dtb.png";
import FAQSection from "@/components/FAQSection";

const About = () => {

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Upholding the highest ethical standards in every interaction, ensuring trust and transparency."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously pushing boundaries with cutting-edge AI and technology solutions."
    },
    {
      icon: Users,
      title: "Client-Centricity",
      description: "Delivering tailored solutions that address specific client challenges and drive measurable results."
    }
  ];

  const services = [
    {
      title: "Data Intelligence & Analytics",
      description: "Advanced AI-powered document analysis, predictive analytics, and customer segmentation for data-driven financial decisions.",
      image: dataIntelligenceImg
    },
    {
      title: "Digital Forensics & Risk Management",
      description: "Comprehensive fraud detection, AML/KYC compliance, and cybersecurity solutions to protect financial assets.",
      image: forensicsRiskImg
    },
    {
      title: "Technology & Embedded Finance",
      description: "Custom software development, cloud solutions, and insurtech platforms for seamless digital transformation.",
      image: techSolutionsImg
    }
  ];

  const leaders = [
    {
      name: "Simion Rutto",
      position: "Founder & Managing Partner",
      credentials: [
        "Certified Fraud Examiner (CFE)",
        "Certified Digital Forensics Expert",
        "Certified Public Accountant (CPA)",
        "Seasoned Internal Auditor",
        "Risk Management Expert"
      ],
      image: simionRutto,
      biography: "Simion Rutto is a cross-disciplinary leader in fraud risk management, forensic audit, digital forensics, data analytics, and corporate governance with 15+ years across the banking and insurance sectors (BFSI). A highly accomplished fraud fighter, his experience spans digital forensics, fraud investigation, data analytics, accounting, auditing, and general management.",
      experience: "He has been responsible for enterprise fraud-risk programs across seven African countries—Kenya, Uganda, Tanzania, Rwanda, Malawi, South Sudan, and Mozambique—and is credited with leading investigations that delivered over USD 1M in annual cost savings. Simion regularly shares his insights at industry forums across Africa, inspiring practitioners and leaders alike.",
      previousRoles: [
        "Group Head of Forensics Services, Britam",
        "Forensic Audit Lead, Britam (covering seven African markets)",
        "Internal Auditor, The Co-operative Bank of Kenya (controls, AML compliance, risk modeling)"
      ]
    }
  ];

  const clientLogos = [
    { name: "Jubilee Insurance", logo: logoJubilee },
    { name: "Equity Bank", logo: logoEquity },
    { name: "KCB Group", logo: logoKcb },
    { name: "Britam", logo: logoBritam },
    { name: "Centum", logo: logoCentum },
    { name: "DTB", logo: logoDtb }
  ];

  const aboutFAQs = [
    {
      question: "What is DFT Group's main area of expertise?",
      answer: "DFT Group specializes in AI-powered solutions for the financial sector, including banking, finance, and insurance. We offer data intelligence & analytics, digital forensics & risk management, and technology & embedded finance solutions tailored for African markets."
    },
    {
      question: "How long has DFT Group been in business?",
      answer: "We have over 15 years of experience delivering cutting-edge AI and fintech solutions to financial institutions across Africa. Our team has served 200+ clients and completed 500+ projects."
    },
    {
      question: "Who are DFT Group's strategic partners?",
      answer: "We partner with international technology leaders like Perfios, a leading Indian fintech solutions provider, bringing global expertise combined with deep local market knowledge to deliver world-class solutions."
    },
    {
      question: "What industries does DFT Group serve?",
      answer: "We primarily serve the banking, finance, and insurance sectors, working with leading institutions across Africa to transform their operations through intelligent automation, advanced analytics, and cutting-edge technology."
    },
    {
      question: "What makes DFT Group different from other fintech consultants?",
      answer: "Our unique combination of 15+ years of local market expertise, international partnerships with technology leaders, and focus on AI-driven innovation sets us apart. We deliver solutions that are both globally informed and locally relevant."
    },
    {
      question: "How can my organization partner with DFT Group?",
      answer: "You can reach out through our contact page to schedule a consultation. We'll discuss your specific needs and how our AI-powered solutions can help transform your operations and drive measurable business impact."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHeroImg} 
            alt="DFT Consult - Empowering Finance with AI" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/20 via-transparent to-[#4169E1]/10"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Badge className="bg-warning text-black mb-6">
            <Globe className="w-4 h-4 mr-2" />
            About DFT Group 
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering Finance with{" "}
            <span className="text-[#4169E1]">AI Innovation</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            For over 15 years, we've been at the forefront of AI-powered financial solutions, 
            partnering with leading institutions across Africa to drive digital transformation and innovation.
          </p>
        </div>
      </section>

      {/* About DFT Group Section - Different design from home page */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-success/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-96 h-96 bg-warning rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-4">
              About DFT Group
            </h2>
            <div className="w-24 h-1 bg-warning mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: visual tiles */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 text-center border-2 border-primary/20 shadow-md hover:shadow-lg transition-all">
                <Building2 className="w-10 h-10 text-primary mx-auto mb-2" />
                <span className="text-sm font-semibold text-gray-800">Banking Solutions</span>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center border-2 border-success/20 shadow-md hover:shadow-lg transition-all">
                <Shield className="w-10 h-10 text-success mx-auto mb-2" />
                <span className="text-sm font-semibold text-gray-800">Insurance Tech</span>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center border-2 border-warning/20 shadow-md hover:shadow-lg transition-all">
                <Brain className="w-10 h-10 text-warning mx-auto mb-2" />
                <span className="text-sm font-semibold text-gray-800">AI & Analytics</span>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center border-2 border-primary/20 shadow-md hover:shadow-lg transition-all">
                <TrendingUp className="w-10 h-10 text-primary mx-auto mb-2" />
                <span className="text-sm font-semibold text-gray-800">Financial Analytics</span>
              </div>
            </div>

            {/* Right: text content */}
            <div className="lg:col-span-3 space-y-5">
              <p className="text-lg leading-relaxed text-gray-700">
                DFT Group is a Kenyan advisory and professional services organization that helps financial institutions and regulated organizations unlock measurable business value through AI, data, and forensic intelligence.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                We work primarily with banks, insurers, and healthcare organizations to strengthen governance, manage risk, and modernize operations.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 font-medium">
                The Group operates through three complementary entities:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span className="text-gray-700"><strong className="text-primary">DFT Consulting LLP</strong> – Technology advisory, data analytics, and forensic services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span className="text-gray-700"><strong className="text-primary">DFT Health Services Ltd</strong> – Health insurance technology and TPA services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span className="text-gray-700"><strong className="text-primary">DFT Academy</strong> – Training and capacity development</span>
                </li>
              </ul>
              <p className="text-gray-800 font-semibold italic border-l-4 border-warning pl-4">
                Our purpose is unlocking business value through AI for safer, smarter organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Rich layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-background to-success/[0.04]"></div>
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="who-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="currentColor" className="text-primary" />
                <path d="M0 30 L60 30 M30 0 L30 60" stroke="currentColor" strokeWidth="0.3" className="text-primary" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#who-pattern)" />
          </svg>
        </div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-success/[0.06] rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warning/[0.03] rounded-full blur-[150px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-10 h-[2px] bg-success rounded-full"></span>
              <span className="text-sm font-semibold tracking-widest uppercase text-success">Who We Are</span>
              <span className="w-10 h-[2px] bg-success rounded-full"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Your Strategic <span className="gradient-text">Technology Partner</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bridging great technology and real-world business needs in Financial Services
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left - Main statement card */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden bg-card p-8 shadow-lg border border-border group hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-success to-warning"></div>
                <div className="pl-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">More Than Technology</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    At <span className="font-bold text-primary">DFT Group</span>, we are more than a technology reseller — we are a <span className="font-semibold text-primary">technology consulting firm</span> dedicated to helping financial institutions turn innovation into measurable business value.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-card p-8 shadow-lg border border-border group hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-success via-primary to-success"></div>
                <div className="pl-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-success" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Bridging the Gap</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Positioned strategically between technology providers and their <span className="font-semibold text-primary">BFSI</span> clients, we ensure every solution is fit-for-purpose, aligned to business goals, and delivered within the shortest possible timelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden bg-card p-8 shadow-lg border border-border group hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-warning via-primary to-warning"></div>
                <div className="pl-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-warning" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Agents of Change</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    As domain experts in banking and insurance, we guide organizations through digital transformation journeys with clarity, discipline, and <span className="font-semibold text-primary">measurable outcomes</span>.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-card p-8 shadow-lg border border-border group hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-warning to-success"></div>
                <div className="pl-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Trusted AI Partners</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We translate artificial intelligence from a buzzword into <span className="font-semibold text-primary">tangible business value</span> — integrating technology advisory, data-driven insights, and industry expertise for faster decisions and lower risk.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom highlight */}
          <div className="max-w-3xl mx-auto mt-10">
            <div className="relative rounded-2xl bg-gradient-to-r from-primary/[0.06] via-success/[0.04] to-warning/[0.06] p-8 text-center border border-primary/10">
              <p className="text-lg text-foreground font-medium leading-relaxed">
                We combine <span className="font-bold text-primary">strategic consulting</span>, <span className="font-bold text-success">implementation oversight</span>, and <span className="font-bold text-warning">domain depth</span> to ensure technology works for you — not the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Purpose */}
      <section className="py-24 relative overflow-hidden">
        {/* Rich layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-background to-warning/[0.04]"></div>
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mvp-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="1.5" fill="currentColor" className="text-primary" />
                <path d="M0 40 L80 40 M40 0 L40 80" stroke="currentColor" strokeWidth="0.2" className="text-primary" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mvp-pattern)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-warning/[0.06] rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-success/[0.04] rounded-full blur-[80px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-10 h-[2px] bg-warning rounded-full"></span>
              <span className="text-sm font-semibold tracking-widest uppercase text-warning">Our Foundation</span>
              <span className="w-10 h-[2px] bg-warning rounded-full"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Mission, Vision & Purpose</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="group relative">
              <div className="absolute -inset-[1px] bg-gradient-to-b from-success via-success/40 to-transparent rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-card rounded-2xl p-8 h-full flex flex-col shadow-lg group-hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-success to-success/70 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-7 h-7 text-success-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Mission</h3>
                </div>
                <div className="w-full h-[2px] bg-gradient-to-r from-success/60 via-success/20 to-transparent mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-lg flex-1">
                  To empower financial institutions with AI-driven solutions that enhance decision-making, efficiency, and digital trust.
                </p>
                <div className="mt-6 flex items-center gap-2 text-success font-semibold text-sm">
                  <Zap className="w-4 h-4" />
                  <span>Driving Impact</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative">
              <div className="absolute -inset-[1px] bg-gradient-to-b from-warning via-warning/40 to-transparent rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-card rounded-2xl p-8 h-full flex flex-col shadow-lg group-hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-warning to-warning/70 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Eye className="w-7 h-7 text-warning-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Vision</h3>
                </div>
                <div className="w-full h-[2px] bg-gradient-to-r from-warning/60 via-warning/20 to-transparent mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-lg flex-1">
                  To be the most trusted AI partner transforming financial services in East Africa.
                </p>
                <div className="mt-6 flex items-center gap-2 text-warning font-semibold text-sm">
                  <Globe className="w-4 h-4" />
                  <span>Leading Innovation</span>
                </div>
              </div>
            </div>

            {/* Purpose */}
            <div className="group relative">
              <div className="absolute -inset-[1px] bg-gradient-to-b from-primary via-primary/40 to-transparent rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-card rounded-2xl p-8 h-full flex flex-col shadow-lg group-hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Lightbulb className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Purpose</h3>
                </div>
                <div className="w-full h-[2px] bg-gradient-to-r from-primary/60 via-primary/20 to-transparent mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-lg flex-1">
                  Unlocking business value through AI for safer, smarter organizations.
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary font-semibold text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>Creating Value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Carousel (matching Partners carousel style) */}
      <section className="py-20 bg-gradient-to-br from-primary/[0.03] via-background to-success/[0.03] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-10 h-[2px] bg-primary rounded-full"></span>
              <span className="text-sm font-semibold tracking-widest uppercase text-primary">What Guides Us</span>
              <span className="w-10 h-[2px] bg-primary rounded-full"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <CoreValuesCarousel coreValues={coreValues} />
        </div>
      </section>

      {/* Partnerships & Global Reach */}
      <section className="py-20 bg-gradient-to-br from-[#4169E1]/5 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-6">
              Partnerships & Global Reach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with international technology leaders to bring world-class solutions to Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4169E1] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">International Technology Partners</h3>
                  <p className="text-gray-600">
                    Our partnership with <strong>Perfios</strong>, a leading Indian fintech solutions provider, 
                    brings cutting-edge AI and data analytics capabilities to our clients.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-Border Collaborations</h3>
                  <p className="text-gray-600">
                    We work with financial institutions, technology providers, and regulatory bodies 
                    across multiple African countries and beyond.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation Ecosystem</h3>
                  <p className="text-gray-600">
                    Active participation in fintech accelerators, innovation hubs, and industry forums 
                    keeps us at the forefront of emerging technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Global Footprint</h3>
                <p className="text-gray-600">Operations and partnerships across regions</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-warning/20 rounded-lg">
                  <div className="text-3xl font-bold text-warning mb-2">6+</div>
                  <div className="text-sm text-gray-600">Countries Reached</div>
                </div>
                <div className="text-center p-4 bg-[#4169E1]/10 rounded-lg">
                  <div className="text-3xl font-bold text-[#4169E1] mb-2">15+</div>
                  <div className="text-sm text-gray-600">Institutions Served</div>
                </div>
                <div className="text-center p-4 bg-success/10 rounded-lg">
                  <div className="text-3xl font-bold text-success mb-2">4+</div>
                  <div className="text-sm text-gray-600">Strategic Partners</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">99.99+</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Book a Demo CTA */}
          <div className="text-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-10 py-6"
              onClick={() => setShowDemoForm(true)}
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Form Dialog */}
      {showDemoForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowDemoForm(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold gradient-text">Book a Demo</h3>
                <button onClick={() => setShowDemoForm(false)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
              </div>
              <p className="text-muted-foreground mt-1">Fill out the form and our team will get back to you within 24 hours.</p>
            </div>
            <form onSubmit={handleDemoSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="demo-name">Full Name *</Label>
                  <Input id="demo-name" name="name" value={demoForm.name} onChange={handleDemoChange} placeholder="Your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-email">Email *</Label>
                  <Input id="demo-email" name="email" type="email" value={demoForm.email} onChange={handleDemoChange} placeholder="your.email@company.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-company">Company</Label>
                <Input id="demo-company" name="company" value={demoForm.company} onChange={handleDemoChange} placeholder="Your company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-message">Message *</Label>
                <Textarea id="demo-message" name="message" value={demoForm.message} onChange={handleDemoChange} placeholder="Tell us about your requirements..." required rows={4} />
              </div>
              <Button type="submit" variant="success" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Request
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Our Leadership */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-6">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading expertise in fraud risk management and forensic services
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {leaders.map((leader, index) => (
              <Card key={index} className="bg-white shadow-2xl border-2 border-[#4169E1]/20 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                  {/* Profile Image */}
                  <div className="md:col-span-1 flex justify-center items-start">
                    <div className="w-full max-w-xs rounded-2xl overflow-hidden shadow-lg border-4 border-[#4169E1]/10">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-xl text-[#4169E1] font-semibold mb-4">
                        {leader.position}
                      </p>
                      
                      {/* Credentials */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Credentials</h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.credentials.map((credential, idx) => (
                            <Badge key={idx} className="bg-success text-white px-3 py-1">
                              {credential}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Biography */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Biography</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {leader.biography}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {leader.experience}
                      </p>
                    </div>

                    {/* Previous Roles */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Previous Roles</h4>
                      <ul className="space-y-2">
                        {leader.previousRoles.map((role, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#4169E1] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - combined home + about FAQs */}
      <FAQSection 
        faqs={[
          {
            question: "Are DFT solutions fully compliant with Kenya's Data Protection Act and regulatory guidelines?",
            answer: "Yes. Compliance is built into every solution we design and implement. Our systems align with the Kenya Data Protection Act, Central Bank of Kenya (CBK) guidelines, and relevant regulatory frameworks. We enforce strict data governance, encryption, and access controls to ensure your data remains secure, private, and fully compliant at all times."
          },
          {
            question: "How does DFT ensure data privacy and regulatory compliance in AI-driven environments?",
            answer: "We embed compliance into the full lifecycle of our engagements — from design to deployment and ongoing monitoring. This includes privacy impact assessments, secure data handling protocols, and continuous regulatory alignment. Our approach ensures that AI adoption enhances performance without exposing the organization to legal or compliance risk."
          },
          {
            question: "Are DFT Academy programs accredited and recognized?",
            answer: "Yes. Our training programs are registered with the National Industrial Training Authority (NITA). Participants receive recognized certifications, ensuring that teams build practical, industry-relevant skills in AI, fraud risk management, cybersecurity, and governance within an approved regulatory framework."
          },
          {
            question: "What tangible business value can institutions expect from DFT solutions?",
            answer: "DFT delivers measurable outcomes. Our solutions improve decision quality, reduce fraud and operational risk, and enhance efficiency through AI and analytics. By combining global technology capability with local industry expertise, we enable institutions to realize faster results, stronger controls, and sustainable, value-driven transformation."
          },
          ...aboutFAQs
        ]} 
        variant="about" 
      />

      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(-66.66%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>

       {/* CTA Section */}
      <section className="py-20 bg-success">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Partner with us to shape the future of financial technology
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Let's work together to transform your financial operations with AI-powered innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-success hover:bg-white/90"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg"
                variant="warning"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;
