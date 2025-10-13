"use client";

import React from "react";
import ProjectsCarousel from "../../_Components/ProjectsCarousel/ProjectsCarousel";
import { useLocale, useTranslations } from "next-intl";
import FadeInAnimation from "../../../components/animations/FadeInAnimation";


export default function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const afterText = isArabic
    ? "after:content-['المشاريع']"
    : "after:content-['PROJECTS']";

  return (
    <section className="pt-10 pb-4 bg-gray-100">
      <div className="md:mx-10 md:py-20 md:px-10 flex flex-col gap-12">
        {/* Title Section */}
        <FadeInAnimation direction="up" delay={0.2} duration={0.8}>
          <div className="relative flex flex-col items-center">
            <h1
              className={`relative md:text-4xl text-[1.7rem] font-bold px-10
                before:content-[" "] before:absolute before:top-5 md:before:w-20 before:w-10 before:h-1 before:bg-black
                after:content-[" "] after:absolute after:top-5 md:after:w-20 after:w-10 after:h-1 after:bg-black
                 before:-left-2  after:-right-2
                 md:before:-left-15  md:after:-right-15
                 ${
                  isArabic
                    ? ""
                    : ""
                }
                `}
            >
              {t("title")}
            </h1>
            <p
              className={`text-lg text-black px-10 text-center ${
                isArabic ? "md:text-right" : "md:text-left"
              }`}
            >
              {t("subtitle")}
            </p>
          </div>
        </FadeInAnimation>

        {/* Projects Carousel */}
        <FadeInAnimation direction="up" delay={0.4} duration={0.8}>
          <div className="w-full">
            <ProjectsCarousel />
          </div>
        </FadeInAnimation>
      </div>
    </section>
  );
}
