import { Cairo } from "next/font/google";
import "../globals.css";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { isRTL } from '@/i18n/config';

// Cairo font for Arabic-first design
const cairo = Cairo({ 
  subsets: ["latin", "arabic"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={isRTL(locale as any) ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={`${cairo.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

