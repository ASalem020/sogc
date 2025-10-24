"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("breadcrumb");
  const isArabic = locale === "ar";

  // Generate breadcrumb items based on current path
  const generateBreadcrumbs = () => {
    const baseUrl = "https://www.sogc-construction.com";
    const pathSegments = pathname.split("/").filter(Boolean);
    
    // Remove locale from segments if it exists
    if (pathSegments[0] === locale) {
      pathSegments.shift();
    }

    const breadcrumbs = [
      {
        name: t("home"),
        href: `/${locale}`,
        position: 1,
      },
    ];

    let currentPath = `/${locale}`;
    let position = 2;

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      let name = "";
      switch (segment) {
        case "about":
          name = t("about");
          break;
        case "services":
          name = t("services");
          break;
        case "projects":
          name = t("projects");
          break;
        case "contact":
          name = t("contact");
          break;
        case "faq":
          name = t("faq");
          break;
        default:
          name = segment.charAt(0).toUpperCase() + segment.slice(1);
      }

      breadcrumbs.push({
        name,
        href: currentPath,
        position,
      });
      
      position++;
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb) => ({
      "@type": "ListItem",
      position: breadcrumb.position,
      name: breadcrumb.name,
      item: `https://www.sogc-construction.com${breadcrumb.href}`,
    })),
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {/* Visual Breadcrumb Navigation */}
      <nav 
        className="bg-gray-50 border-b border-gray-200 py-3 px-4"
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto">
          <ol className={`flex items-center space-x-2 text-sm ${
            isArabic ? "flex-row-reverse space-x-reverse" : ""
          }`}>
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight 
                    className={`h-4 w-4 text-gray-400 mx-2 ${
                      isArabic ? "rotate-180" : ""
                    }`} 
                  />
                )}
                {index === 0 ? (
                  <Link
                    href={breadcrumb.href}
                    className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <Home className="h-4 w-4 mr-1" />
                    {breadcrumb.name}
                  </Link>
                ) : index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {breadcrumb.name}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.href}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {breadcrumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
