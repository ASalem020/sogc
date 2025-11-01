import React from "react";
import { getTranslations, getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import Navbar from "./_Components/navbar/Navbar";
import Footer from "./_Components/Footer/Footer";
import HeaderSocial from "./_Components/header-social/HeaderSocial";
import FloatingContact from "./_Components/FloatingContact/FloatingContact";
import Breadcrumb from "./_Components/Breadcrumb/Breadcrumb";
import NotFoundContent from "./_Components/NotFoundContent/NotFoundContent";

export async function generateMetadata({ params }) {
  const locale = params?.locale || 'en';
  const isArabic = locale === "ar";
  
  return {
    title: isArabic 
      ? "404 - الصفحة غير موجودة | شركة سوجك"
      : "404 - Page Not Found | SOGC Construction",
    description: isArabic
      ? "الصفحة التي تبحث عنها غير موجودة"
      : "The page you are looking for could not be found.",
  };
}

export default async function NotFound() {
  // Get locale from params or default to 'en'
  let locale = 'en';
  try {
    locale = await getLocale();
  } catch (e) {
    // If locale can't be determined, default to 'en'
    locale = 'en';
  }
  
  const messages = await getMessages({ locale });
  const t = await getTranslations("notFound");
  
  // Pass translations as props
  const translations = {
    title: t("title"),
    subtitle: t("subtitle"),
    description: t("description"),
    description2: t("description2"),
    button: t("button"),
    buttonAlternative: t("buttonAlternative"),
  };

  const isArabic = locale === "ar";

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="flex overflow-x-hidden flex-col min-h-screen justify-between" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          
          <main className="relative">
            
            <Breadcrumb />
            <NotFoundContent translations={translations} />
          </main>
          <Footer />
          <FloatingContact />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

