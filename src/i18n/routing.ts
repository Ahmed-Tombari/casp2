import { defineRouting } from 'next-intl/routing';


export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ar', 'fr', 'en'],

  // Used when no locale matches
  defaultLocale: 'ar',
  
  // Locale prefix strategy
  localePrefix: 'as-needed', // Only show locale prefix for non-default locale
  localeDetection: false,
});


