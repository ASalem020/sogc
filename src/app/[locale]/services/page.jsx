"use client"
import React, { useState } from "react";
import Image from "next/image";
import PartnersCarousel from "../../_Components/PartnersCarousel/PartnersCarousel";
import { useTranslations, useLocale } from 'next-intl';

function FlipButton() {
  const t = useTranslations('services');
  const [isFlipped, setIsFlipped] = useState(false);
  

  return (
    <button 
      className="relative group cursor-pointer perspective w-fit"
      onTouchStart={() => setIsFlipped(true)}
      onTouchEnd={() => setIsFlipped(false)}
    >
      <div className={`relative preserve-3d transition-transform duration-500 ${isFlipped ? 'rotate-x-180 scale-110' : 'group-hover:rotate-x-180 group-hover:scale-110'}`}>
        {/* Front side */}
        <span className="bg-white border-2 border-black lg:text-lg text-sm cursor-pointer text-black px-6 py-2 rounded-full block backface-hidden">
          {t('requestButton')}
        </span>

        {/* Back side */}
        <span className="bg-black text-white lg:text-lg text-sm px-6 py-2 cursor-pointer rounded-full block absolute inset-0 rotate-x-180 backface-hidden">
          {t('requestButtonFlip')}
        </span>
      </div>
    </button>
  );
}

function ServiceCard({ service }) {
  const [isActive, setIsActive] = useState(false);
  

  return (
    <div
      className="flex flex-col md:gap-5 gap-2 my-5 relative group"
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      <Image
        width={1000}
        height={1000}
        className="rounded-lg h-[12rem] md:h-[15rem] lg:h-[18rem] relative object-cover object-center"
        src={`${service.image}`}
        alt="blog"
      />
      <div className={`absolute shadow-lg md:p-5 lg:min-h-[145px] flex flex-col gap-2 items-center lg:top-50 top-35 lg:left-10 lg:right-10 left-5 right-5 bg-white transition-all duration-300 p-3 border-b-black rounded-lg ${isActive ? 'border-b-4 -translate-y-2' : 'group-hover:border-b-4 group-hover:-translate-y-2'}`}>
        <h3 className="lg:text-xl text-sm font-bold text-center">
          {service.title} <span className="text-gray-400">{service.subtitle}</span>
        </h3>
        <p className="lg:text-[16px] text-sm font-light text-gray-500 text-center">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();
  const isArabic = locale === "ar";
  const afterText = isArabic ? "after:content-['الخدمات']" : "after:content-['Services']";
  const services = [
    {
      id: 1,
      title: t('designBuilding.title'),
      subtitle: t('designBuilding.subtitle'),
      description: t('designBuilding.description'),
      image: "/herocar3.webp",
    },
    {
      id: 2,
      title: t('tilingPainting.title'),
      subtitle: t('tilingPainting.subtitle'),
      description: t('tilingPainting.description'),
      image: "/herocar2.jpg",
    },
    {
      id: 3,
      title: t('condoRemodeling.title'),
      subtitle: t('condoRemodeling.subtitle'),
      description: t('condoRemodeling.description'),
      image: "/herocar1.jpg",
    },
    {
      id: 4,
      title: t('safeConstruction.title'),
      subtitle: t('safeConstruction.subtitle'),
      description: t('safeConstruction.description'),
      image: "/herocar2.jpg",
    },
    {
      id: 5,
      title: t('interiorDesign.title'),
      subtitle: t('interiorDesign.subtitle'),
      description: t('interiorDesign.description'),
      image: "/herocar1.jpg",
    },
  ];

  return (
    <div className="my-10 md:mt-30 md:mx-10 md:min-h-screen min-h-[50vh]">
      <div className="md:py-20 md:px-10 py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Title block */}
          <div className="relative flex flex-col md:gap-5 gap-2 items-center md:items-start">
            <h1
              className={`md:text-3xl lg:text-4xl text-2xl text-center md:text-left font-bold  
              before:content-[" "] before:absolute ${isArabic ? "before:-right-15" : "before:-left-15"} px-10 before:top-5  
              md:before:w-20 before:w-0 before:h-1 before:bg-black 
              ${afterText} after:absolute md:after:left-55 after:left-1/2  
              after:-translate-x-1/2 md:after:-top-20  after:-top-18 
              md:after:text-[5rem] after:text-[3rem] after:text-black/25 after:italic`}
            >
              {t('title')} <span className="text-black">{t('titleHighlight')}</span>
            </h1>
            <p className={`lg:text-lg text-sm text-center  ${isArabic ? "md:text-right" : "md:text-left"}`}>
              {t('subtitle')}
            </p>
            <FlipButton />
          </div>

          {/* Service cards */}
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <PartnersCarousel speed={18} pauseOnHover={true} />
      </div>
    </div>
  );
}
