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
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations('faq');
  const faqs = t.raw('items');

  return (
    <section className="  px-4 md:px-10">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
        <p className="text-gray-600">
          {t('description')}
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
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
                    {t('close')}
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
