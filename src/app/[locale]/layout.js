import "../globals.css";
import Navbar from "../_Components/navbar/Navbar";
import Footer from "../_Components/Footer/Footer";
import HeaderSocial from "../_Components/header-social/HeaderSocial";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function generateMetadata({ params, searchParams }) {
  const { locale } = await params;
  const pathname = searchParams?.pathname || '';

  const isArabic = locale === "ar";
  const baseUrl = "https://www.sogc-construction.com";
  const siteTitle = "SOGC Construction & Consultants";

  // Enhanced descriptions for better SEO
  const getPageMetadata = () => {
    if (pathname.includes('/services')) {
      return {
        title: isArabic 
          ? "خدماتنا | شركة سوجك للمقاولات والاستشارات"
          : "Our Services | SOGC Construction & Consultants",
        description: isArabic
          ? "اكتشف خدمات شركة سوجك للمقاولات والاستشارات: البناء والتشييد، التشطيبات الكاملة، الحفر وأعمال التربة، المعدات الثقيلة، خدمات النقل، والخدمات المستقبلية."
          : "Explore SOGC's comprehensive construction services including general contracting, full finishing, excavation, heavy equipment, transportation, and future services.",
      };
    }
    if (pathname.includes('/about')) {
      return {
        title: isArabic 
          ? "من نحن | شركة سوجك للمقاولات والاستشارات"
          : "About Us | SOGC Construction & Consultants",
        description: isArabic
          ? "تعرف على شركة سوجك للمقاولات والاستشارات، الشركة الرائدة في مصر منذ 2018. متخصصون في البناء والتشييد، البنية التحتية، والتشطيبات الداخلية والخارجية."
          : "Learn about SOGC Construction & Consultants, a leading Egyptian construction company since 2018. Specializing in building, infrastructure, and interior/exterior finishing works.",
      };
    }
    if (pathname.includes('/projects')) {
      return {
        title: isArabic 
          ? "مشاريعنا | شركة سوجك للمقاولات والاستشارات"
          : "Our Projects | SOGC Construction & Consultants",
        description: isArabic
          ? "اكتشف أحدث مشاريع شركة سوجك للمقاولات والاستشارات في مختلف أنحاء مصر. مشاريع بناء وتشييد متميزة تعكس خبرتنا وجودتنا العالية."
          : "Discover SOGC's latest construction projects across Egypt. Showcasing our expertise in building and construction with quality and innovation.",
      };
    }
    if (pathname.includes('/contact')) {
      return {
        title: isArabic 
          ? "اتصل بنا | شركة سوجك للمقاولات والاستشارات"
          : "Contact Us | SOGC Construction & Consultants",
        description: isArabic
          ? "تواصل مع شركة سوجك للمقاولات والاستشارات للحصول على استشارة مجانية. نحن متواجدون في السويس والعاشر من رمضان. اتصل بنا الآن لبدء مشروعك."
          : "Contact SOGC Construction & Consultants for a free consultation. We're located in Suez and 10th of Ramadan City. Call us now to start your project.",
      };
    }
    if (pathname.includes('/faq')) {
      return {
        title: isArabic 
          ? "الأسئلة الشائعة | شركة سوجك للمقاولات والاستشارات"
          : "FAQ | SOGC Construction & Consultants",
        description: isArabic
          ? "اكتشف إجابات لأكثر الأسئلة شيوعًا حول خدمات شركة سوجك للمقاولات والاستشارات. احصل على معلومات مفصلة حول مشاريعنا وخدماتنا."
          : "Find answers to frequently asked questions about SOGC Construction & Consultants services. Get detailed information about our projects and services.",
      };
    }
    // Default homepage metadata
    return {
      title: isArabic
        ? "شركة سوجك للمقاولات والاستشارات | SOGC Construction & Consultants"
        : `${siteTitle} | Building Egypt's Future`,
      description: isArabic
        ? "شركة سوجك للمقاولات والاستشارات من الشركات الرائدة في مصر في مجال البناء والهندسة وإدارة المشاريع. نقدم خدمات شاملة في المقاولات العامة والتشطيبات."
        : "SOGC Construction & Consultants is a leading construction and consulting company in Egypt delivering sustainable engineering and architectural solutions. Comprehensive general contracting and finishing services.",
    };
  };

  const pageMetadata = getPageMetadata();

  return {
    metadataBase: new URL(baseUrl),
    title: pageMetadata.title,
    description: pageMetadata.description,
    keywords: isArabic
      ? [
          "سوجك",
          "شركة سوجك",
          "شركة مقاولات مصر",
          "استشارات هندسية",
          "مشاريع سوجك",
          "بناء في مصر",
          "مقاولات عامة",
          "تشطيبات كاملة",
          "حفر وتربة",
          "معدات ثقيلة",
        ]
      : [
          "SOGC Construction",
          "Construction Company Egypt",
          "Engineering Consultants Egypt",
          "SOGC Projects",
          "Building Contractors Egypt",
          "General Contracting",
          "Full Finishing",
          "Excavation Services",
          "Heavy Equipment",
        ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: pageMetadata.title,
      description: pageMetadata.description,
      url: `${baseUrl}/${locale}${pathname}`,
      siteName: siteTitle,
      images: [
        {
          url: `${baseUrl}/assets/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
      locale: isArabic ? "ar_EG" : "en_EG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageMetadata.title,
      description: pageMetadata.description,
      images: [`${baseUrl}/assets/og-image.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}${pathname}`,
      languages: {
        en: `${baseUrl}/en${pathname}`,
        ar: `${baseUrl}/ar${pathname}`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!["en", "ar"].includes(locale)) notFound();

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SOGC Construction & Consultants",
              url: "https://www.sogc-construction.com",
              logo: "https://www.sogc-construction.com/favicon.ico",
              sameAs: [
                "https://www.facebook.com/sogcconstruction",
                "https://www.linkedin.com/company/sogc-construction",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+20XXXXXXXXXX",
                contactType: "Customer Service",
                areaServed: "EG",
                availableLanguage: ["English", "Arabic"],
              },
            }),
          }}
        />
      </head>
      <body
        className="flex overflow-x-hidden flex-col min-h-screen justify-between"
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <HeaderSocial />
          <main className="relative md:mt-7">
            <Navbar />
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
