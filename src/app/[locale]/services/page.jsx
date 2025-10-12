"use client";
import React, { useState } from "react";
import Image from "next/image";
import PartnersCarousel from "../../_Components/PartnersCarousel/PartnersCarousel";
import { useTranslations, useLocale } from "next-intl";
import FadeInAnimation from "../../../components/animations/FadeInAnimation";
import StaggerAnimation from "../../../components/animations/StaggerAnimation";
import ParallaxScroll from "../../../components/animations/ParallaxScroll";


function FlipButton() {
  const t = useTranslations("services");
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <FadeInAnimation direction="up" delay={0.4} duration={0.8}>
      <button
        className="relative group cursor-pointer perspective w-fit"
        onTouchStart={() => setIsFlipped(true)}
        onTouchEnd={() => setIsFlipped(false)}
      >
        <div
          className={`relative preserve-3d transition-transform duration-500 ${
            isFlipped
              ? "rotate-x-180 scale-110"
              : "group-hover:rotate-x-180 group-hover:scale-110"
          }`}
        >
          <span className="bg-white border-2 border-black lg:text-lg text-sm cursor-pointer text-black px-6 py-2 rounded-full block backface-hidden">
            {t("requestButton")}
          </span>
          <span className="bg-black text-white lg:text-lg text-sm px-6 py-2 cursor-pointer rounded-full block absolute inset-0 rotate-x-180 backface-hidden">
            {t("requestButtonFlip")}
          </span>
        </div>
      </button>
    </FadeInAnimation>
  );
}

function ServiceCard({ service, index }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <FadeInAnimation 
      direction="up" 
      delay={index * 0.2} 
      duration={0.8}
      distance={50}
    >
      <div
        className="flex flex-col md:gap-5 gap-2 my-5 relative group"
        onTouchStart={() => setIsActive(true)}
        onTouchEnd={() => setIsActive(false)}
      >
        <div className="relative overflow-hidden rounded-lg">
          
            <Image
              width={1000}
              height={1000}
              className="rounded-lg h-[12rem] md:h-[15rem] lg:h-[18rem] relative object-cover object-center transition-transform duration-700 group-hover:scale-110"
              src={`${service.image}`}
              alt={service.title}
            />
         
        </div>
        <div
          className={`absolute shadow-lg md:p-5 lg:min-h-[145px] flex flex-col gap-2 items-center xl:top-40 2xl:top-50 xl:left-10 xl:right-10 lg:top-45 top-35 lg:left-5 lg:right-5 left-5 right-5 bg-white transition-all duration-500 p-3 border-b-black rounded-lg ${
            isActive
              ? "border-b-4 -translate-y-2"
              : "group-hover:border-b-4 group-hover:-translate-y-2"
          }`}
        >
          <h3 className="lg:text-[14px] xl:text-[18px] text-sm font-bold text-center">
            {service.title}{" "}
            <span className="text-gray-400">{service.subtitle}</span>
          </h3>
          <p className="lg:text-[13px] xl:text-[16px] text-sm font-light text-gray-500 text-center">
            {service.description}
          </p>
        </div>
      </div>
    </FadeInAnimation>
  );
}

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const afterText = isArabic
    ? "after:content-['الخدمات']"
    : "after:content-['SERVICES']";

  const services = [
    {
      id: 1,
      title: t("1.title"),
      subtitle: t("1.subtitle"),
      description: t("1.description"),
      image: "/herocar3.webp",
    },
    {
      id: 2,
      title: t("2.title"),
      subtitle: t("2.subtitle"),
      description: t("2.description"),
      image: "/herocar2.jpg",
    },
    {
      id: 3,
      title: t("3.title"),
      subtitle: t("3.subtitle"),
      description: t("3.description"),
      image: "/herocar1.jpg",
    },
    {
      id: 4,
      title: t("4.title"),
      subtitle: t("4.subtitle"),
      description: t("4.description"),
      image: "/herocar2.jpg",
    },
    {
      id: 5,
      title: t("5.title"),
      subtitle: t("5.subtitle"),
      description: t("5.description"),
      image: "/herocar1.jpg",
    },
    {
      id: 6,
      title: t("6.title"),
      subtitle: t("6.subtitle"),
      description: t("6.description"),
      image: "/herocar1.jpg",
    },
  ];

  return (
    <div className="my-10 md:mt-30 md:mx-10 md:min-h-screen min-h-[50vh]">
      <div className="md:py-20 md:px-10 py-10 px-5">
        
        {/* Header Section */}
        <FadeInAnimation direction="up" delay={0.2} duration={0.8}>
          <div className="relative flex flex-col md:gap-5 gap-2 items-center md:items-start">
            <h1
              className={`md:text-3xl lg:text-4xl text-2xl text-center md:text-left font-bold  
              before:content-[" "] before:absolute ${
                isArabic ? "before:-right-15" : "before:-left-15"
              } px-10 before:top-5  
              md:before:w-20 before:w-0 before:h-1 before:bg-black 
              ${afterText} after:absolute md:after:left-55 after:left-1/2  
              after:-translate-x-1/2 md:after:-top-20  after:-top-18 
              md:after:text-[5rem] after:text-[3rem] after:text-black/25 after:italic`}
            >
              {t("title")}{" "}
              <span className="text-black">{t("titleHighlight")}</span>
            </h1>
            
            <FadeInAnimation direction="up" delay={0.3} duration={0.8}>
              <p
                className={`lg:text-lg text-sm text-center ${
                  isArabic ? "md:text-right" : "md:text-left"
                }`}
              >
                {t("subtitle")}
              </p>
            </FadeInAnimation>
            
            <FlipButton />
          </div>
        </FadeInAnimation>

        {/* Services Grid */}
        <StaggerAnimation 
          staggerDelay={0.2} 
          direction="up" 
          delay={0.6}
          duration={0.8}
          distance={40}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </StaggerAnimation>

        {/* Partners Carousel */}
        <FadeInAnimation direction="up" delay={1.2} duration={0.8}>
          <div className="mt-20">
            <PartnersCarousel />
          </div>
        </FadeInAnimation>
        
      </div>
    </div>
  );
}
