"use client";
import { motion } from "framer-motion";
import React from "react";
import { useTranslations, useLocale } from 'next-intl';

export default function Timeline() {
  const t = useTranslations('about');
  const locale = useLocale();
  const isArabic = locale === "ar";
  const timelineData = [
    {
      year: t('timeline1.time'),
      
      description: t('timeline1.description')
    },
    {
      year: t('timeline2.time'),
      
      description: t('timeline2.description')
    },
    {
      year: t('timeline3.time'),
      
      description: t('timeline3.description')
    },
    {
      year: t('timeline4.time'),
      
      description: t('timeline4.description')
    },
    {
      year: t('timeline5.time'),
      
      description: t('timeline5.description')
    },
    {
      year: t('timeline6.time'),
      
      description: t('timeline6.description')
    },
  ]

  
  return (
    <section className="py-10 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className={`text-xl md:text-3xl font-bold text-center mb-16 text-gray-800`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t('timeline.title')}
        </motion.h2>

        <div className={`relative  border-gray-200 ${isArabic ? "border-r-4" : "border-l-4"}`}>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`mb-10 ${isArabic ? "mr-6" : "ml-6"} relative`}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <span className={`absolute ${isArabic ? "-right-[50px]" : "-left-[50px]"} flex items-center justify-center w-12 h-12  bg-black text-white font-bold rounded-full`}>
                {item.year}
              </span>

              <div className="bg-white shadow-sm p-6">
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
