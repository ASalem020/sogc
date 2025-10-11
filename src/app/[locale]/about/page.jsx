"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Timeline from "../../_Components/Timeline/Timeline";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const afterText = isArabic ? "after:content-['SOGC']" : "after:content-['SOGC']";
  const services = [
    {
      id: 1,
      title: t("service1.title"),
      description: t("service1.description"),
    },
    {
      id: 2,
      title: t("service2.title"),
      description: t("service2.description"),
    },
    {
      id: 3,
      title: t("service3.title"),
      description: t("service3.description"),
    },
    {
      id: 4,
      title: t("service4.title"),
      description: t("service4.description"),
    },
    {
      id: 5,
      title: t("service5.title"),
      description: t("service5.description"),
    },
    {
      id: 6,
      title: t("service6.title"),
      description: t("service6.description"),
    },
  ];

  return (
    <div className="bg-gray-100 overflow-hidden">
      <div className="py-10 md:mx-10 grid grid-cols-1 md:grid-cols-3 md:min-h-screen min-h-[50vh]">
        {/* Left Section - About content */}
        <motion.div
          className="md:pt-20 md:px-10 py-10 px-5 md:col-span-2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.div
            className="relative flex flex-col md:gap-5 gap-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h1
                className={`relative md:text-4xl text-2xl font-bold px-10
                  before:content-[" "] before:absolute before:top-5 md:before:w-20 before:w-0 before:h-1 before:bg-black
                  ${afterText} after:absolute after:-translate-y-1/2  text-center
                  ${isArabic 
                    ? "md:text-right before:-right-15 after:right-1/2 md:after:right-40 after:translate-x-1/2 md:after:-top-10 after:-top-12" 
                    : "md:text-left before:-left-15 after:left-1/2 after:-translate-x-1/2 md:after:left-40 md:after:-top-10 after:-top-12"}
                  md:after:text-[5rem] after:text-[3rem] after:text-black/25 after:italic
                `}
            >
              {t("title")}{" "}
              <span className="text-black ">{t("titleHighlight")}</span>
            </h1>

            <motion.p
              className={`text-sm md:text-lg  text-center ${isArabic ? "md:text-right" : "md:text-left"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("subtitle")}
            </motion.p>
            <motion.p
              className="text-sm md:text-lg  "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t("subtitle2")}
            </motion.p>
          </motion.div>

          {/* Services Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="flex flex-col">
              {services.map((service) => (
                <AccordionItem
                  key={service.id}
                  value={`item-${service.id}`}
                  className="hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-sm md:text-lg font-semibold px-4 py-3 hover:bg-gray-50 transition-all duration-300">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>

        {/* Right Section - Logo */}
        <motion.div
          className="px-20 py-10 md:py-0 md:p-0 flex justify-center items-center md:col-span-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/png 1.png"
            alt="about"
            width={1000}
            height={1000}
            className="w-full h-full md:w-[70%] md:h-[70%]"
          />
        </motion.div>

        {/* Footer Text */}
        <motion.h1
          className="text-center w-full mx-auto md:text-xl font-semibold lg:col-span-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t("footer.description")}
        </motion.h1>
      </div>

      {/* Timeline Section */}
      <Timeline />
    </div>
  );
}
