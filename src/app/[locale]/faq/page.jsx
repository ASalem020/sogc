"use client"
import React from 'react'
import FAQDrawer from '../../_Components/FAQDrawer/FAQDrawer'
import { useTranslations } from 'next-intl';

export const dynamic = 'force-dynamic';

export default function FAQ() {
  const t = useTranslations('faq');
  
  return (
    <section className='my-10 md:mt-30 md:mx-10 md:min-h-screen min-h-[50vh]'>
      <div className='md:py-20 md:px-10 py-10 px-5'>
        <h1 className='text-4xl font-bold text-center mb-5'>{t('title')}</h1>
        <p className='text-lg text-center mb-10'>{t('description')}</p>
        <FAQDrawer />
      </div>
    </section>
  )
}
