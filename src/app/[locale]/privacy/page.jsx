"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import FadeInAnimation from "../../../components/animations/FadeInAnimation";

export default function PrivacyPolicy() {
  const t = useTranslations("privacy");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const sections = [
    "collection",
    "usage",
    "protection",
    "sharing",
    "rights",
    "cookies",
    "changes",
    "contact",
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <FadeInAnimation direction="up" delay={0.1} duration={0.8}>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1
                className={`relative md:text-4xl text-2xl font-bold px-10 mb-4
                  before:content-[" "] before:absolute before:top-5 md:before:w-20 before:w-10 before:h-1 before:bg-black
                  after:content-[" "] after:absolute after:top-5 md:after:w-20 after:w-10 after:h-1 after:bg-black
                  before:-left-2 after:-right-2 text-center
                  md:before:-left-15 md:after:-right-15`}
              >
                {t("title")}
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                {t("lastUpdated")}
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {t("introduction")}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <FadeInAnimation
                  key={section}
                  direction="up"
                  delay={0.2 + index * 0.1}
                  duration={0.8}
                >
                  <div className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h2
                      className={`text-xl md:text-2xl font-bold mb-4 text-black ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t(`sections.${section}.title`)}
                    </h2>
                    <p
                      className={`text-gray-600 leading-relaxed text-sm md:text-base ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t(`sections.${section}.content`)}
                    </p>
                  </div>
                </FadeInAnimation>
              ))}
            </div>

            {/* Contact CTA */}
            <FadeInAnimation direction="up" delay={1.0} duration={0.8}>
              <div className="mt-12 p-6 bg-gray-100 rounded-lg text-center">
                <p className="text-gray-700 mb-4">
                  {isArabic
                    ? "لديك أسئلة حول سياسة الخصوصية لدينا؟"
                    : "Have questions about our Privacy Policy?"}
                </p>
                <a
                  href="mailto:info@sogc-construction.com"
                  className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold"
                >
                  {isArabic ? "اتصل بنا" : "Contact Us"}
                </a>
              </div>
            </FadeInAnimation>
          </div>
        </FadeInAnimation>
      </div>
    </main>
  );
}

