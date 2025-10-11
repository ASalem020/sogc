"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import styles from "./PartnersCarousel.css";

export default function PartnersCarousel({ speed = 20, pauseOnHover = true }) {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const t = useTranslations("services");

  // Put your partner logos inside /public/partners/
  // Example names: /public/partners/partner1.png ...
  const basePartners = useMemo(
    () => [
      "/png 1.png",
      "/png 1.png",
      "/png 1.png",
      "/png 1.png",
      "/png 1.png",
      "/png 1.png",
      
    ],
    []
  );

  // Duplicate the list so the track is seamless (2x or 3x is fine)
  const repeated = useMemo(() => [...basePartners, ...basePartners], [basePartners]);

  // Animation duration (seconds) for ONE full loop; tune `speed` to taste.
  // Lower = faster. We scale with number of distinct items (keeps speed visually consistent).
  const durationSeconds = Math.max(8, Math.round((basePartners.length * speed) / 6));

  // Inline CSS vars to control speed & pause behavior per instance
  const cssVars = {
    ["--pm-duration"]: `${durationSeconds}s`,
    ["--pm-gap"]: "1rem",
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{t("partners")}</h2>

        <div
          className={`carousel ${pauseOnHover ? "pauseOnHover" : ""}`}
          style={cssVars}
          aria-hidden="false"
        >
          {/* The track: when isArabic, add class to reverse animation direction */}
          <div
            className={`track `}
            role="list"
          >
            {repeated.map((src, i) => (
              <div key={i} className="flex-[0_0_auto] w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-4">
                <div className="flex items-center justify-center bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
                  <Image
                    src={src}
                    alt={`partner-${i + 1}`}
                    width={200}
                    height={80}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    priority={i < basePartners.length} // prioritize first visible set
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
