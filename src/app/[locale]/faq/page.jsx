"use client"
import React from 'react'
import FAQDrawer from '../../_Components/FAQDrawer/FAQDrawer'
import { useTranslations } from 'next-intl';
import FadeInAnimation from '../../../components/animations/FadeInAnimation';


export const dynamic = 'force-dynamic';

export default function FAQ() {
  const t = useTranslations('faq');
  
  return (
    <section className='my-10 md:mt-30 md:mx-10 md:min-h-screen min-h-[50vh]'>
      <div className='md:py-20 md:px-10 py-10 px-5'>
        <FadeInAnimation direction="up" delay={0.2} duration={0.8}>
          <h1 className='text-4xl font-bold text-center mb-5'>{t('title')}</h1>
        </FadeInAnimation>
        <FadeInAnimation direction="up" delay={0.3} duration={0.8}>
          <p className='text-lg text-center mb-10'>{t('description')}</p>
        </FadeInAnimation>
        <FadeInAnimation direction="up" delay={0.4} duration={0.8}>
          <FAQDrawer />
        </FadeInAnimation>
      </div>
    </section>
  )
}
