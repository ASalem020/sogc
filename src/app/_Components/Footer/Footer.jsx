'use client'
import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import SocialMedia from '../../_Components/social-media/social-media'

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-200 text-black">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Company Info Section */}
          <div className="lg:col-span-4">
            <Link href={`/${locale}`} className="inline-block mb-4">
              <Image 
                src="/png 1.png" 
                alt="SOGC Logo" 
                width={180} 
                height={60}
                className="h-20  w-auto"
              />
            </Link>
            <p className="text-sm text-black leading-relaxed mb-4">
              {t('about.description')}
            </p>
            
            {/* Social Media */}
            <SocialMedia />
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-black font-bold text-lg mb-4 border-b border-gray-700 pb-2">
              {t('quickLinks.title')}
            </h3>
            <nav className="space-y-2">
              <Link href={`/${locale}`} className="block text-black  hover:-translate-y-1 hover:translate-x-1 w-fit hover:bg-black hover:text-white rounded-2xl px-2  transition-all duration-300">
                {t('quickLinks.home')}
              </Link>
              <Link href={`/${locale}/about`} className="block text-black  hover:-translate-y-1 hover:translate-x-1 w-fit hover:bg-black hover:text-white rounded-2xl px-2  transition-all duration-300">
                {t('quickLinks.about')}
              </Link>
              <Link href={`/${locale}/services`} className="block text-black  hover:-translate-y-1 hover:translate-x-1 w-fit hover:bg-black hover:text-white rounded-2xl px-2  transition-all duration-300">
                {t('quickLinks.services')}
              </Link>
              <Link href={`/${locale}/projects`} className="block text-black  hover:-translate-y-1 hover:translate-x-1 w-fit hover:bg-black hover:text-white rounded-2xl px-2  transition-all duration-300">
                {t('quickLinks.projects')}
              </Link>
              <Link href={`/${locale}/contact`} className="block text-black  hover:-translate-y-1 hover:translate-x-1 w-fit hover:bg-black hover:text-white rounded-2xl px-2  transition-all duration-300">
                {t('quickLinks.contact')}
              </Link>
              <Link href={`/${locale}/faq`} className="block text-black  hover:-translate-y-1 hover:translate-x-1 w-fit hover:bg-black hover:text-white rounded-2xl px-2  transition-all duration-300">
                {t('quickLinks.faq')}
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-black font-bold text-lg mb-4 border-b border-gray-700 pb-2">
              {t('services.title')}
            </h3>
            <nav className="space-y-2">
              <div className="text-black text-sm  hover:-translate-y-1 transition-all duration-300">
                {t('services.construction')}
              </div>
              <div className="text-black text-sm hover:-translate-y-1 transition-all duration-300">
                {t('services.infrastructure')}
              </div>
              <div className="text-black text-sm hover:-translate-y-1 transition-all duration-300">
                {t('services.finishing')}
              </div>
              <div className="text-black text-sm hover:-translate-y-1 transition-all duration-300">
                {t('services.excavation')}
              </div>
              <div className="text-black text-sm hover:-translate-y-1 transition-all duration-300">
                {t('services.materials')}
              </div>
              <div className="text-black text-sm hover:-translate-y-1 transition-all  hover:bg-black hover:text-white rounded-2xl px-2  duration-300 w-fit hover:translate-x-1">
              <Link href={`/${locale}/services`} className=" text-sm  ">
                {t('services.all')}
              </Link>

              </div>
            </nav>
          </div>

          {/* Contact & Working Hours */}
          <div className="lg:col-span-4">
            <h3 className="text-black font-bold text-lg mb-4 border-b border-gray-700 pb-2">
              {t('contact.title')}
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <p className="text-sm text-black">{t('contact.address')}</p>
                  <p className="text-sm text-black">{t('contact.branch')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href={`tel:${t('contact.phone')}`} className="text-sm text-black hover:text-black transition-all duration-300 hover:translate-x-1 hover:bg-black hover:text-white rounded-2xl px-2">
                  {t('contact.phone')}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href={`mailto:${t('contact.email')}`} className="text-sm text-black  transition-all duration-300 hover:translate-x-1 hover:bg-black hover:text-white rounded-2xl px-2">
                  {t('contact.email')}
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-gray-200 rounded-lg p-4">
              <h4 className="text-black font-semibold text-sm mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {t('hours.title')}
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-black">{t('hours.weekdays')}</span>
                  <span className="text-black font-medium">{t('hours.weekdaysTime')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">{t('hours.friday')}</span>
                  <span className="text-red-400 font-medium">{t('hours.fridayTime')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12">
          <h3 className="text-black font-bold text-lg mb-4 text-center">
            {t('map.title')}
          </h3>
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220587.72028538846!2d32.27693842499997!3d29.96666595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585e8c7b39b1e1%3A0x97517ca551cf6e1e!2sSuez%2C%20Egypt!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SOGC Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-black text-center md:text-left">
              {t('copyright')}
            </p>
            <div className="flex gap-6">
              <Link href={`/${locale}/privacy`} className="text-black hover:text-orange-500 transition-colors">
                {t('privacy')}
              </Link>
              <Link href={`/${locale}/terms`} className="text-black hover:text-orange-500 transition-colors">
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
