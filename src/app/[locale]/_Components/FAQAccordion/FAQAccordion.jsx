"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeInAnimation from "../../../../components/animations/FadeInAnimation";

export default function FAQAccordion() {
  const t = useTranslations('faq');
  const locale = useLocale();
  const faqs = t.raw('items');
  const title = t('title');
  const description = t('description');
  const isArabic = locale === 'ar';

  return (
    <FadeInAnimation direction="up" delay={0.4} duration={0.8}>
      <section className="pt-20 pb-10 px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600">
            {description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className={`font-medium text-gray-800 hover:text-gray-900 ${
                  isArabic ? "text-right" : "text-left"
                }`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={`text-gray-600 text-sm leading-relaxed ${
                  isArabic ? "text-right" : "text-left"
                }`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </FadeInAnimation>
  );
}
