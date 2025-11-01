"use client";
import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Home, ArrowRight, ArrowLeft } from "lucide-react";
import FadeInAnimation from "../../../components/animations/FadeInAnimation";

export default function NotFoundContent({ translations }) {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const t = (key) => translations[key] || key;

  return (
    <main className=" min-h-screen bg-gray-100 flex items-center justify-center  px-4">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
          {/* 404 Title */}
          <FadeInAnimation direction="up" delay={0.1} duration={0.8}>
            <div className="mb-8">
              <h1
                className={`relative md:text-8xl text-6xl font-bold text-black mb-4
                  ${isArabic ? "" : ""}`}
              >
                {t("title")}
              </h1>
            </div>
          </FadeInAnimation>

          {/* Subtitle */}
          <FadeInAnimation direction="up" delay={0.3} duration={0.8}>
            <div className="mb-6">
              <h2
                className={`relative md:text-4xl text-2xl font-bold px-10 mb-4
                  before:content-[" "] before:absolute before:top-5 md:before:w-20 before:w-10 before:h-1 before:bg-black
                  after:content-[" "] after:absolute after:top-5 md:after:w-20 after:w-10 after:h-1 after:bg-black
                  before:-left-2 after:-right-2 text-center
                  md:before:left-40 md:after:right-40
                  ${isArabic ? "" : ""}`}
              >
                {t("subtitle")}
              </h2>
            </div>
          </FadeInAnimation>

          {/* Description */}
          <FadeInAnimation direction="up" delay={0.5} duration={0.8}>
            <div className="mb-8">
              <p className="text-sm md:text-lg text-gray-600 mb-4">
                {t("description")}
              </p>
              <p className="text-sm md:text-lg text-gray-600">
                {t("description2")}
              </p>
            </div>
          </FadeInAnimation>

          {/* Action Buttons */}
          <FadeInAnimation direction="up" delay={0.7} duration={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* <Link
                href={`/${locale}`}
                className={`
                  group relative inline-flex items-center gap-2
                  bg-black text-white px-8 py-3 rounded-full
                  font-semibold text-sm md:text-base
                  hover:bg-gray-800 transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                  ${isArabic ? "flex-row-reverse" : ""}
                `}
              >
                {isArabic ? (
                  <>
                    <span>{t("button")}</span>
                    <Home className="h-5 w-5" />
                  </>
                ) : (
                  <>
                    <Home className="h-5 w-5" />
                    <span>{t("button")}</span>
                  </>
                )}
              </Link> */}

              <Link
                href={`/${locale}`}
                className={`
                  group relative inline-flex items-center gap-2
                  border-2 border-black text-black px-8 py-3 rounded-full
                  font-semibold text-sm md:text-base
                  hover:bg-black hover:text-white transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                  ${isArabic ? "flex-row-reverse" : ""}
                `}
              >
                {isArabic ? (
                  <>
                    <span>{t("buttonAlternative")}</span>
                    <ArrowLeft className="h-5 w-5" />
                  </>
                ) : (
                  <>
                    <ArrowRight className="h-5 w-5" />
                    <span>{t("buttonAlternative")}</span>
                  </>
                )}
              </Link>
            </div>
          </FadeInAnimation>

          {/* Quick Links */}
          <FadeInAnimation direction="up" delay={0.9} duration={0.8}>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                {isArabic ? "روابط سريعة:" : "Quick Links:"}
              </p>
              <div
                className={`flex flex-wrap gap-4 justify-center ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                <Link
                  href={`/${locale}/about`}
                  className="text-gray-600 hover:text-black transition-colors text-sm md:text-base underline underline-offset-4"
                >
                  {isArabic ? "من نحن" : "About"}
                </Link>
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-600 hover:text-black transition-colors text-sm md:text-base underline underline-offset-4"
                >
                  {isArabic ? "خدماتنا" : "Services"}
                </Link>
                <Link
                  href={`/${locale}/projects`}
                  className="text-gray-600 hover:text-black transition-colors text-sm md:text-base underline underline-offset-4"
                >
                  {isArabic ? "مشاريعنا" : "Projects"}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="text-gray-600 hover:text-black transition-colors text-sm md:text-base underline underline-offset-4"
                >
                  {isArabic ? "اتصل بنا" : "Contact"}
                </Link>
              </div>
            </div>
          </FadeInAnimation>
        </div>
      </div>
    </main>
  );
}

