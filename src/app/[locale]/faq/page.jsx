import React from 'react';
import FAQAccordion from '../_Components/FAQAccordion/FAQAccordion';

export const dynamic = 'force-dynamic';

export default function FAQ() {
  return (
    <section className='md:min-h-screen min-h-[50vh]'>
      <FAQAccordion />
    </section>
  );
}
