"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Save scroll position before language switch
  const saveScrollPosition = () => {
    const scrollPosition = window.scrollY;
    sessionStorage.setItem('scrollPosition', scrollPosition.toString());
    sessionStorage.setItem('scrollTimestamp', Date.now().toString());
  };

  // Restore scroll position after page load
  const restoreScrollPosition = () => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    const savedTimestamp = sessionStorage.getItem('scrollTimestamp');
    
    if (savedPosition && savedTimestamp) {
      const timeDiff = Date.now() - parseInt(savedTimestamp);
      // Only restore if the timestamp is recent (within 5 seconds)
      if (timeDiff < 5000) {
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedPosition),
            behavior: 'smooth'
          });
          // Clear the saved position after restoring
          sessionStorage.removeItem('scrollPosition');
          sessionStorage.removeItem('scrollTimestamp');
        }, 100); // Small delay to ensure page is fully loaded
      }
    }
  };

  // Restore scroll position on component mount
  useEffect(() => {
    restoreScrollPosition();
  }, [locale]);

  const switchLocale = () => {
    // Save current scroll position
    saveScrollPosition();
    
    // Toggle between 'en' and 'ar'
    const newLocale = locale === 'en' ? 'ar' : 'en';
    
    // Remove the current locale from the pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');
    
    // Navigate to the new locale with the same path
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
  };

  return (
    <div className="relative">
      <button
        onClick={switchLocale}
        className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
      >
        <span className="text-sm font-semibold">
          {locale === 'en' ? '🇪🇬 AR' : '🇬🇧 EN'}
        </span>
      </button>
    </div>
  );
}

