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
import FadeInAnimation from "../../../components/animations/FadeInAnimation";
import StaggerAnimation from "../../../components/animations/StaggerAnimation";


export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isArabic = locale === "ar";

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
    <main>
      
        <div className="bg-gray-100 overflow-hidden relative">
          
          <div className="py-10 md:mx-10 flex flex-col md:grid md:grid-cols-3 md:min-h-screen min-h-[50vh] z-10 relative">
            {/* Title */}
            
            <motion.div
                className="w-full col-span-3 flex flex-col px-3 gap-2   items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h1
                className={`relative md:text-4xl text-[1.7rem] font-bold px-10
                  before:content-[" "] before:absolute before:top-5 md:before:w-20 before:w-10 before:h-1 before:bg-black
                  after:content-[" "] after:absolute after:top-5 md:after:w-20 after:w-10 after:h-1 after:bg-black
                   before:-left-2  after:-right-2 text-center
                   md:before:-left-15  md:after:-right-15
                   ${
                    isArabic
                      ? ""
                      : ""
                  }
                  `}
                >
                  {t("title")}{" "}
                  <span className="text-black text-center">{t("titleHighlight")}</span>
                </h1>

                <motion.p
                  className={`text-sm  md:text-lg text-center 
                    
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t("subtitle")}
                </motion.p>

                <motion.p
                  className="text-sm  text-center md:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {t("subtitle2")}
                </motion.p>
              </motion.div>
            {/* Left Section */}
            <motion.div
              className="   md:col-span-3"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              

              
            </motion.div>
            {/* Services Accordion */}
            <motion.div
              className=" md:px-10  col-span-1 px-5 md:col-span-2 md:flex md:flex-col md:justify-center"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

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
                      <AccordionTrigger className="text-sm md:text-lg font-semibold px-1.5 py-3 hover:bg-gray-50 transition-all duration-300">
                        {service.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 bg-white/20 text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </motion.div>

            {/* Right Section - Image */}
            <motion.div
              className="px-5 md:py-0 md:p-0 flex justify-center items-start md:items-center col-span-1 md:col-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full max-h-[400px] md:max-h-full flex justify-center items-center">
                <Image
                  src="/png 1.png"
                  alt="about"
                  width={1200}
                  height={1200}
                  className="w-full max-h-[200px]  md:max-h-[400px] object-contain"
                />
              </div>
            </motion.div>

            {/* Footer */}
            <motion.h1
              className="text-center mt-5 px-2 w-full text-sm mx-auto md:text-lg font-semibold col-span-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {t("footer.description")}
            </motion.h1>
          </div>

          {/* Timeline */}
          <Timeline />
        </div>
      </main>
  );
}
