'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
        aria-label="Switch language"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Icon icon="mdi:translate" width={20} height={20} />
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <Icon icon="mdi:chevron-down" width={16} height={16} />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-thom-dark shadow-soft rounded-lg z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full text-right px-4 py-2 hover:bg-primary hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg ${
                locale === loc ? 'bg-primary/10 font-semibold' : ''
              }`}
            >
              {localeNames[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

