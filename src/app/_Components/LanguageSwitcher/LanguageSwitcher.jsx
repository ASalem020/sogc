"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
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

