"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations('navbar');
  const locale = useLocale();
  const path = usePathname();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    

    
    
    
    const handleScroll = () => {
      // check if mobile screen
      let scrollPoint = 0;
      if (window.innerWidth < 768) {
        scrollPoint = window.innerHeight * 0.05;
      } else {
        scrollPoint = window.innerHeight * 0.317;
      }

      setIsSticky(window.scrollY > scrollPoint);

      // Show/hide based on scroll direction
      if (isSticky && window.scrollY > lastScrollY) {
        setShow(false); // Scrolling down → hide
      } else {
        setShow(true); // Scrolling up → show
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Helper to create localized links
  const getLocalizedPath = (path) => `/${locale}${path}`;

  return (
    <header>
      {/* navbar for desktop */}
      <nav
        className={`absolute  text-white hidden md:block -top-11  left-0 right-0 bg-black z-50 transition-transform duration-500 p-2  container mx-auto  justify-between rounded-[150px] ${
          isSticky ? " fixed top-0 shadow-md !my-0 " : "  "
        } ${show ? "translate-y-3" : "-translate-y-full"}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div
            className={` ${
              isSticky
                ? "space-x-6  text-[1.1rem] flex items-center gap-2 py-2  "
                : "space-x-6 text-[1.4rem] flex items-center gap-2   "
            } transition-all duration-300 `}
          >
            <img
              src="/png 2.png"
              alt="logo"
              className={` h-8 w-8 !mx-4 ${
                isSticky ? "relative block scale-130  " : "absolute scale-0"
              } transition-all  duration-300`}
            />

            <Link
              href={getLocalizedPath("/")}
              className={`relative inline-block text-lg font-semibold transition-all duration-300
    ${path === getLocalizedPath("/") || path === `/${locale}` ? "text-black bg-white p-2 rounded-4xl" : `text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
    after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-1 duration-500 transition-all  `}
    
  `}
            >
              {t('home')}
            </Link>

            <Link
              href={getLocalizedPath("/about")}
              className={`relative inline-block text-lg font-semibold transition-all duration-300
    ${
      path.includes("/about")
        ? "text-black bg-white p-2 rounded-4xl"
        : `text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
    after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-1 duration-500 transition-all  `
    }
    
  `}
            >
              {t('about')}
            </Link>

            <Link
              href={getLocalizedPath("/services")}
              className={`relative inline-block text-lg font-semibold transition-all duration-300
    ${
      path.includes("/services")
        ? "text-black bg-white p-2 rounded-4xl"
        : `text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
    after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-1 duration-500 transition-all  `
    }

  `}
            >
              {t('services')}
            </Link>

            <Link
              href={getLocalizedPath("/projects")}
              className={`relative inline-block text-lg font-semibold transition-all duration-300
    ${
      path.includes("/projects")
        ? "text-black bg-white p-2 rounded-4xl"
        : `text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
    after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-1 duration-500 transition-all  `
    }

  `}
            >
              {t('projects')}
            </Link>

            <Link
              href={getLocalizedPath("/contact")}
              className={`relative inline-block text-lg font-semibold transition-all duration-300
    ${
      path.includes("/contact")
        ? "text-black bg-white p-2 rounded-4xl"
        : `text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
    after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-1 duration-500 transition-all  `
    }
    
  `}
            >
              {t('contact')}
            </Link>
            <Link
              href={getLocalizedPath("/faq")}
              className={`relative inline-block text-lg font-semibold transition-all duration-300
    ${
      path.includes("/faq")
        ? "text-black bg-white p-2 rounded-4xl"
        : `text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
    after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-1 duration-500 transition-all  `
    }
    
  `}
            >
              {t('faq')}
            </Link>
          </div>
          <div>
            {/* Language Switcher and CTA */}
            <div className="flex items-center  gap-5">
              <LanguageSwitcher />
              <button className="rounded-4xl text-[1.4rem] p-2 hover:!-translate-y-0.5  bg-white !text-black   active:scale-95 transition-all duration-300 cursor-pointer ">
                  {t('startNewProject')}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* navbar for mobile */}
      <nav className="block md:hidden">
        <div
          className={`
              fixed bottom-0 left-0 right-0 bg-black z-50 transition-transform duration-500 mb-1 p-2 pt-0   justify-between rounded-t-lg ${
                isSticky ? " fixed bottom-0 shadow-md !my-0 " : "  "
              } ${show ? "translate-y-3" : "translate-y-full"} `}
        >
          <div
            className={`flex justify-between items-center gap-2 ${
              isSticky
                ? "  text-[0.5rem] flex items-center gap-2 py-2  "
                : "text-[1.2rem] py-1 flex items-center gap-2   "
            } transition-all duration-300 `}
          >
            <img
              src="/png 2.png"
              alt="logo"
              className={`h-8 w-8 !mx-1 ${
                isSticky ? "relative block scale-130  " : "absolute scale-0"
              } transition-all  duration-300`}
            />
            
          <Link
  href={getLocalizedPath("/")}
  className={`relative inline-block text-[0.43rem] font-semibold transition-all duration-300 
    ${path === getLocalizedPath("/") || path === `/${locale}` ? 'text-black bg-white p-2 rounded-4xl' : `text-white ' after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
    after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-1 duration-500 transition-all  `}
    hover:-translate-y-1 
    
  `}
>
  {t('home')}
</Link>

<Link
  href={getLocalizedPath("/about")}
  className={`relative inline-block text-[0.43rem] font-semibold transition-all duration-300 
    ${path.includes('/about') ? 'text-black bg-white p-2 rounded-4xl' : 'text-white'}
    hover:-translate-y-1 
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
    after:bg-current after:transition-all after:duration-300 hover:after:w-full
  `}
>
  {t('about')}
</Link>

<Link
  href={getLocalizedPath("/services")}
  className={`relative inline-block text-[0.43rem] font-semibold transition-all duration-300 
    ${path.includes('/services') ? 'text-black bg-white p-2 rounded-4xl' : 'text-white'}
    hover:-translate-y-1 
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
    after:bg-current after:transition-all after:duration-300 hover:after:w-full
  `}
>
  {t('services')}
</Link>

<Link
  href={getLocalizedPath("/contact")}
  className={`relative inline-block text-[0.43rem] font-semibold transition-all duration-300 
    ${path.includes('/contact') ? 'text-black bg-white p-2 rounded-4xl' : 'text-white'}
    hover:-translate-y-1 
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
    after:bg-current after:transition-all after:duration-300 hover:after:w-full
  `}
>
  {t('contact')}
</Link>
<Link
  href={getLocalizedPath("/faq")}
  className={`relative inline-block text-[0.43rem] font-semibold transition-all duration-300 
    ${path.includes('/faq') ? 'text-black bg-white p-2 rounded-4xl' : 'text-white'}
    hover:-translate-y-1 
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
    after:bg-current after:transition-all after:duration-300 hover:after:w-full
  `}
>
  {t('faq')}
</Link>
<LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
