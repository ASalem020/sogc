"use client"
import React from 'react'
import ProjectsCarousel from '../../_Components/ProjectsCarousel/ProjectsCarousel'
import { useLocale, useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const isArabic = locale === "ar";
  const afterText = isArabic ? "after:content-['المشاريع']" : "after:content-['Projects']";
  console.log(afterText);
  
  return (
    <section className=' pt-10 pb-4   bg-gray-100'>
        <div className='md:mx-10 md:py-20 md:px-10 flex flex-col gap-12' >
      <div className='relative flex flex-col'>
  
  <h1 className={`md:text-4xl  text-lg font-bold md:px-10 md:p-0 p-10 pb-0 
  before:content-[" "] before:absolute md:before:-left-15 before:left-3  md:before:top-5 before:top-[14px]  md:before:w-20 before:w-0 md:before:h-1 before:bg-black 
  ${afterText} text-center after:italic after:absolute md:after:left-6 after:left-1/2  after:-translate-x-1/2 md:after:-translate-x-0  md:after:-top-14 after:-top-8 md:after:text-[5rem] after:text-[3rem] after:text-black/15
   ${isArabic ? "md:text-right before:-right-15 after:left-1/2 after:-translate-x-1/2 md:after:-right-6 md:after:-top-19 after:-top-12" : "md:text-left before:-left-15 after:left-1/2 after:-translate-x-1/2 md:after:-top-16 after:-top-12"}    `}>
    {t('title')}
  </h1>
  <p className={`text-lg  text-black  px-10 text-center ${isArabic ? "md:text-right" : "md:text-left"}`}>
    {t('subtitle')}
  </p>

</div>


{/* carousel */}
<div className='w-full'>

    <ProjectsCarousel/>
</div>

        </div>
    </section>
  )
}
