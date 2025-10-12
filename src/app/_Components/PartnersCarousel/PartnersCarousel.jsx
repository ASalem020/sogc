"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function PartnersCarousel() {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const t = useTranslations('services');
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      direction: isArabic ? 'rtl' : 'ltr',
    },
    [AutoScroll({ speed: 1.5, stopOnInteraction: false, direction: isArabic ? 'backward' : 'forward' })]
  );

  const partners = [
        
    "/png 1.png",
    "/png 1.png",
    "/png 1.png",
    "/png 1.png",
    "/png 1.png",
  ];

  return (
    <section className=" py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-10 `}>
          {t('partners')}
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {partners.concat(partners).map((src, index) => (
              <div
                key={index}
                className="flex-[0_0_auto] w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-4"
              >
                <div className="flex items-center justify-center bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
                  <Image
                    src={src}
                    alt={`Partner ${index + 1}`}
                    width={150}
                    height={80}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
