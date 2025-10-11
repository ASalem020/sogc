import "../globals.css";
import Navbar from "../_Components/navbar/Navbar";
import Footer from "../_Components/Footer/Footer";
import HeaderSocial from "../_Components/header-social/HeaderSocial";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const isArabic = locale === "ar";
  const baseUrl = "https://www.sogc-construction.com";
  const siteTitle = "SOGC Construction & Consultants";

  return {
    metadataBase: new URL(baseUrl),
    title: isArabic
      ? "شركة سوجك للمقاولات والاستشارات | SOGC Construction & Consultants"
      : `${siteTitle} | Building Egypt’s Future`,
    description: isArabic
      ? "شركة سوجك للمقاولات والاستشارات من الشركات الرائدة في مصر في مجال البناء والهندسة وإدارة المشاريع."
      : "SOGC Construction & Consultants is a leading construction and consulting company in Egypt delivering sustainable engineering and architectural solutions.",
    keywords: isArabic
      ? [
          "سوجك",
          "شركة سوجك",
          "شركة مقاولات مصر",
          "استشارات هندسية",
          "مشاريع سوجك",
          "بناء في مصر",
        ]
      : [
          "SOGC Construction",
          "Construction Company Egypt",
          "Engineering Consultants Egypt",
          "SOGC Projects",
          "Building Contractors Egypt",
        ],
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: siteTitle,
      description: isArabic
        ? "SOGC شركة مقاولات واستشارات هندسية رائدة في مصر."
        : "Explore SOGC — your trusted construction and consulting partner in Egypt.",
      url: baseUrl,
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
      title: siteTitle,
      description: isArabic
        ? "شركة سوجك للمقاولات والاستشارات في مصر."
        : "Delivering excellence in construction and consulting across Egypt.",
      images: [`${baseUrl}/assets/og-image.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
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
