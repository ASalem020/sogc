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
      <div className=''>
        <FadeInAnimation direction="up" delay={0.4} duration={0.8}>
          <FAQDrawer />
        </FadeInAnimation>
      </div>
    </section>
  )
}
