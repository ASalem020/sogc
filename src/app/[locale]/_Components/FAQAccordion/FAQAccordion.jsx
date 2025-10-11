"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQAccordion() {
  const faqs = [
    {
      question: "What services does SOGC Construction offer?",
      answer:
        "We provide a full range of construction and consultation services, including project design, execution, and management with top-quality standards.",
    },
    {
      question: "How can I contact your team?",
      answer:
        "You can reach us through the Contact page on our website or email us directly at info@sogc-construction.com.",
    },
    {
      question: "Do you work on international projects?",
      answer:
        "Yes, our team is experienced in handling projects both locally and internationally.",
    },
    {
      question: "What makes SOGC different from other construction companies?",
      answer:
        "We combine innovation, sustainability, and client-focused solutions to deliver exceptional results every time.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-10">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">
          Find answers to common questions about our construction services.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-gray-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
