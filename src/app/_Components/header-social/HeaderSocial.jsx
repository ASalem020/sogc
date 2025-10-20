"use client";
import React from "react";
import SocialMedia from "../social-media/social-media";
import { FaHandshake, FaPhone, FaMapMarker, FaClock } from "react-icons/fa";
import { FaCalendarCheck, FaLocationCrosshairs } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { FaPhoneVolume } from "react-icons/fa6";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeaderSocial() {
  const t = useTranslations('footer');
  
  return (
    <header className="bg-white shadow-lg pt-20 pb-3 md:pt-3 md:pb-10  lg:block ">
      {/* Top Bar - Social Media & Free Consultation */}
      {/* <div className="bg-gray-800 py-3 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          
          <div className="flex items-center gap-4">
            <SocialMedia />
            <div className="h-4 w-px bg-gray-600"></div>
          </div>
          
          <div className="flex items-center   md:hidden justify-center ">
              <Image
                src="/png 2.png"
                alt="SOGC Logo"
                width={200}
                height={80}
                className="h-12 w-auto  hover:scale-105 transition-transform duration-300"
              />
            </div>
          
          <a 
            href="/contact"
            className="text-white text-sm font-medium hover:text-orange-400 transition-colors duration-300"
          >
            Free Consultation
          </a>
        </div>
      </div> */}

      {/* Main Header */}
      <div className="bg-white">
        <div className="container mx-auto px-1 flex justify-center items-center ">

          {/* Logo */}
              <div className="flex-shrink-0 ps-3 lg:block">
                <Image
                  src="/png 1.png"
                  alt="SOGC Logo"
                  width={200}
                  height={80}
                  className="md:h-35 h-25 w-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
        


          {/* Desktop Layout */}
          {/* <div className=" md:block">
            <div className="flex items-center justify-between md:justify-around">
              
              
              <div className="flex-shrink-0 ps-3 lg:block">
                <Image
                  src="/png 1.png"
                  alt="SOGC Logo"
                  width={200}
                  height={80}
                  className="md:h-35 h-25 w-auto hover:scale-105 transition-transform duration-300"
                />
              </div>

              
              <div className="grid grid-cols-1 items-center gap-1.5">
                
              
                <div className="flex items-center gap-3 group hover:-translate-y-1 transition-all duration-300">
                  <div className="h-8 w-10 md:w-12 lg:w-14 lg:h-12  md:h-10 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-black transition-all duration-300">
                    <FaCalendarCheck className="text-black group-hover:text-white text-lg transition-colors duration-300" />
                  </div>
                  <div className="w-full">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{t('hours.title')}</p>
                    <p className="text-gray-900 font-bold text-xs md:text-sm">
                      {t('hours.weekdays')}: {t('hours.weekdaysTime')}
                    </p>
                    <p className="text-red-600 font-semibold text-xs md:text-sm">
                      {t('hours.friday')}: {t('hours.fridayTime')}
                    </p>
                  </div>
                </div>

               
                <div className="flex items-center gap-3 group hover:-translate-y-1 transition-all duration-300">
                  <div className="h-8 w-10 md:w-12 lg:w-15 lg:h-12   md:h-10 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-black transition-all duration-300">
                    <FaPhoneVolume className="text-black group-hover:text-white text-lg transition-colors duration-300" />
                  </div>
                  <div className="w-full">
                    <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">{t('contact.title')}</p>
                    <a 
                      href="mailto:info@sogc-construction.com"
                      className="text-gray-900 font-bold text-xs md:text-sm hover:text-blue-600 transition-colors duration-300 block"
                    >
                      info@sogc-construction.com
                    </a>
                    <a 
                      href="tel:+201234567890" 
                      className="text-gray-900 font-bold text-xs md:text-sm hover:text-green-600 transition-colors duration-300 block"
                    >
                      +20 123 456 7890
                    </a>
                  </div>
                </div>

               
                <div className="flex items-center gap-3 group hover:-translate-y-1 transition-all duration-300">
                  <div className="h-8 w-10 md:w-12 lg:w-15 lg:h-12  md:h-10 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-black transition-all duration-300">
                    <GrMapLocation className="text-black group-hover:text-white text-lg transition-colors duration-300" />
                  </div>
                  <div className="w-full">
                    <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">{t('map.title')}</p>
                    <p className="text-gray-900  font-bold text-xs md:text-sm">
                      {t('contact.address')}
                    </p>
                    <p className="text-gray-900  font-bold text-xs md:text-sm">
                      {t('contact.branch')}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
}