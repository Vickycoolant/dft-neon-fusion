import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  variant?: "home" | "about";
}

const FAQSection = ({ 
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services and solutions",
  faqs,
  variant = "home"
}: FAQSectionProps) => {
  return (
    <section className={`py-20 ${variant === "home" ? "bg-gradient-to-br from-primary/5 to-accent/5" : "bg-white"}`}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-[#4169E1] mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#4169E1]">
              {title}
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-success/10'} border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow`}
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-success py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
