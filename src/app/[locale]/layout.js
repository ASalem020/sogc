import '../globals.css'
import Navbar from '../_Components/navbar/Navbar'
import Footer from '../_Components/Footer/Footer'
import HeaderSocial from '../_Components/header-social/HeaderSocial'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  
  return {
    title: "SOGC Construction & Consultants",
    description: "Leading construction company in Egypt",
    keywords: [
      "SOGC",
      "SOGC Construction",
      "SOGC Consultants",
      "Construction Company Egypt",
      "Engineering Consultants Egypt",
      "SOGC Projects",
      "Building Contractors Egypt",
      "SOGC Construction & Consultants",
      "construction company Egypt",
      "building contractors Egypt",
      "Suez construction company",
      "cairo construction company",
      "engineering services Egypt",
      "architecture and design",
      "construction projects",
    ],
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
    },
    openGraph: {
      title: "SOGC Construction & Consultants",
      description: "Explore SOGC Construction & Consultants — your trusted partner for construction and consulting services across Egypt.",
      url: "https://www.sogc-construction.com",
      siteName: "SOGC Construction & Consultants",
      images: [
        {
          url: "https://www.sogc-construction.com/assets/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "SOGC Construction & Consultants",
        },
      ],
      locale: locale === 'ar' ? 'ar_EG' : 'en_EG',
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "SOGC Construction & Consultants | Building Egypt's Future",
      description: "Delivering excellence in construction, engineering, and consulting across Egypt.",
      images: ["https://www.sogc-construction.com/assets/og-image.jpg"],
    },
    alternates: {
      canonical: "https://www.sogc-construction.com",
      languages: {
        'en': 'https://www.sogc-construction.com/en',
        'ar': 'https://www.sogc-construction.com/ar',
      },
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!['en', 'ar'].includes(locale)) {
    notFound();
  }

  // Get messages for the current locale
    const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className='flex overflow-x-hidden flex-col min-h-screen justify-between' suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <HeaderSocial />
          <main className="relative md:mt-7">
            <Navbar />
            {children}
          </main>
          {/* <Footer /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

