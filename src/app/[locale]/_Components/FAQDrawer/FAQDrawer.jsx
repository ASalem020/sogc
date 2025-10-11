"use client";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function FAQSection() {
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

      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <Drawer key={index}>
            <DrawerTrigger asChild>
              <button className="flex justify-between items-center w-full bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-left">
                <span className="font-medium text-gray-800">{faq.question}</span>
                <ChevronRight className="text-gray-500 w-5 h-5" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="p-6">
              <DrawerHeader>
                <DrawerTitle className="text-2xl font-semibold">
                  {faq.question}
                </DrawerTitle>
                <DrawerDescription className="text-gray-700 mt-2">
                  {faq.answer}
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline" className="mt-4">
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </section>
  );
}
