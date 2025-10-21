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
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className={`text-xl md:text-3xl font-bold text-center mb-16 text-gray-800`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t('timeline.title')}
        </motion.h2>

        {/* Centered Timeline Line */}
        <div className="relative">
          {/* Vertical Line - Desktop: Center, Mobile: Left */}
          <div className={`absolute ${isArabic ? '-right-3 md:right-1/2 md:transform md:translate-x-1/2' : '-left-3 md:left-1/2 md:transform md:-translate-x-1/2'} w-1 h-full bg-black rounded-full`}></div>

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            const isLeft = isArabic ? !isEven : isEven;
            
            return (
              <motion.div
                key={index}
                className="relative mb-16 flex items-center"
                initial={{ opacity: 0, x: isArabic ? (isLeft ? 100 : -100) : (isLeft ? -100 : 100) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Card - Desktop: Alternating, Mobile: Single direction */}
                <div className={`w-full md:w-5/12 ${isArabic 
                  ? `${isLeft ? 'ml-auto pl-8' : 'mr-auto pr-8'} md:${isLeft ? 'ml-auto pl-8' : 'mr-auto pr-8'}` 
                  : `${isLeft ? 'mr-auto pr-8' : 'ml-auto pl-8'} md:${isLeft ? 'mr-auto pr-8' : 'ml-auto pl-8'}`
                }`}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-black relative group">
                    {/* Year Badge */}
                    <div className={`absolute ${isArabic ? '-top-4 -right-1' : '-top-4 -left-2'} w-12 md:w-14 h-12 md:h-14 bg-black rounded-full flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-sm">{item.year}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="pt-4">
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                </div>

                {/* Center Dot - Desktop: Center, Mobile: Left */}
                <div className={`absolute ${isArabic 
                  ? '-right-4 md:right-1/2 md:transform md:translate-x-1/2' 
                  : '-left-4 md:left-1/2 md:transform md:-translate-x-1/2'
                } w-3 h-3 md:w-6 md:h-6 bg-white md:border-4 border-2 border-black rounded-full shadow-lg z-10 flex items-center justify-center`}>
                  <div className="w-1 h-1 md:w-2 md:h-2 bg-black rounded-full"></div>
                </div>

                {/* Connecting Line - Hidden on mobile */}
                <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r ${isLeft 
                  ? (isArabic ? 'from-black via-gray-300 to-transparent left-0 w-8' : 'from-transparent via-gray-300 to-black right-0 w-8')
                  : (isArabic ? 'from-transparent via-gray-300 to-black right-0 w-8' : 'from-black via-gray-300 to-transparent left-0 w-8')
                }`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
