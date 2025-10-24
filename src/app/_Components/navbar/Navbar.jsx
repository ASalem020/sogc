"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { FaBars, FaTimes, FaHome, FaInfo, FaCogs, FaProjectDiagram, FaPhone, FaQuestionCircle } from 'react-icons/fa';
import SocialMedia from "../social-media/social-media";

export default function Navbar() {
  const t = useTranslations('navbar');
  const locale = useLocale();
  const path = usePathname();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // check if mobile screen
      let scrollPoint = 0;
      if (window.innerWidth < 768) {
        scrollPoint = window.innerHeight * 0.02;
      } else {
        scrollPoint = window.innerHeight * 0.295;
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

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
    };

    // Prevent body scroll when mobile menu is open
    const handleBodyScroll = (e) => {
      if (isMobileMenuOpen) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    if (isMobileMenuOpen) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchmove', handleBodyScroll, { passive: false });
      document.addEventListener('wheel', handleBodyScroll, { passive: false });
    } else {
      // Restore scrolling
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.removeEventListener('touchmove', handleBodyScroll);
      document.removeEventListener('wheel', handleBodyScroll);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchmove', handleBodyScroll);
      document.removeEventListener('wheel', handleBodyScroll);
      // Cleanup styles on unmount
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "/", label: t('home'), icon: FaHome },
    { href: "/about", label: t('about'), icon: FaInfo },
    { href: "/services", label: t('services'), icon: FaCogs },
    { href: "/projects", label: t('projects'), icon: FaProjectDiagram },
    { href: "/contact", label: t('contact'), icon: FaPhone },
    { href: "/faq", label: t('faq'), icon: FaQuestionCircle },
  ];

  return (
    <header>
      {/* Desktop Navbar */}
      <nav
        className={`absolute text-white hidden md:block  -top-11 left-0 right-0 bg-black z-50 transition-transform duration-500 p-2  container   xl:max-w-6xl   mx-auto justify-between rounded-[150px] ${
          isSticky ? " fixed top-0 shadow-md !my-0 " : "  "
        } ${show ? "translate-y-3" : "-translate-y-full"}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div
            className={` ${
              isSticky
                ? "space-x-6 text-[1.1rem] flex items-center gap-2 py-2  "
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

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedPath(item.href)}
                className={`relative inline-block text-lg font-semibold transition-all duration-300
                  ${path === getLocalizedPath(item.href) || (item.href === "/" && path === `/${locale}`)
                    ? "text-black bg-white p-2 rounded-4xl"
                    : `text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
                      after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-1 duration-500 transition-all`
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div>
            {/* Language Switcher and CTA */}
            <div className="flex items-center gap-5">
              <LanguageSwitcher />
              {/* <Link 
                href={getLocalizedPath("/contact")}
                className="rounded-4xl text-[1.4rem] p-2 hover:!-translate-y-0.5 bg-white !text-black active:scale-95 transition-all duration-300 cursor-pointer"
              >
                {t('startNewProject')}
              </Link> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="block md:hidden">
        {/* Mobile Top Bar */}
        <div
          className={`fixed top-0 left-0 right-0 bg-black z-50 transition-transform duration-500 p-4 ${
            show ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between px-4 items-center">
            {/* Mobile Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/png 2.png"
                alt="logo"
                className="h-8 w-8"
              />
            </div>
              <SocialMedia/>

            {/* Mobile Menu Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="text-white p-2 hover:bg-gray-800 rounded-lg transition-all duration-300"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div
              className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Header */}
              <div className="bg-black p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src="/png 2.png"
                    alt="logo"
                    className="h-8 w-8"
                  />
                  <span className="text-white font-bold text-lg">SOGC</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2 hover:bg-gray-800 rounded-lg transition-all duration-300"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={getLocalizedPath(item.href)}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 transform ${
                        path === getLocalizedPath(item.href) || (item.href === "/" && path === `/${locale}`)
                          ? "bg-black text-white"
                          : "text-gray-700 hover:bg-gray-100 hover:translate-x-2"
                      } ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                      style={{
                        transitionDelay: `${index * 50}ms`
                      }}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}

                {/* Language Switcher */}
                <div className={`pt-4 border-t border-gray-200 transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                     style={{ transitionDelay: `${navItems.length * 50 + 100}ms` }}>
                  <div className="flex items-center justify-between p-3">
                    <span className="text-gray-700 font-medium">Language</span>
                    <LanguageSwitcher />
                  </div>
                </div>

                {/* CTA Button */}
                <div className={`pt-4 transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                     style={{ transitionDelay: `${navItems.length * 50 + 150}ms` }}>
                  <Link
                    href={getLocalizedPath("/contact")}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full bg-black text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    {t('startNewProject')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}