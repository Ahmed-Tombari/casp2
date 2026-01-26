import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import CategoryCard from '@/app/components/Store/CategoryCard';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'store' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/store`,
      // languages: {
      //   'ar': '/store',
      //   'fr': '/store',
      //   'en': '/store',
      // },
    },
  };
}

export default async function StorePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'store' });
  const navT = await getTranslations({ locale, namespace: 'nav' });

  const categories = [
    {
      title: navT('printedBooks'),
      description: t('printedDesc'),
      icon: 'solar:book-2-bold-duotone',
      href: '/store/printed-books',
      color: 'bg-brand-sky/10 text-brand-navy',
    },
    {
      title: navT('ebooks'),
      description: t('ebooksDesc'),
      icon: 'solar:tablet-bold-duotone',
      href: '/store/ebooks',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      title: navT('educationalCDs'),
      description: t('cdsDesc'),
      icon: 'solar:disk-bold-duotone',
      href: '/store/educational-cds',
      color: 'bg-green-50 text-green-600',
    },
    {
      title: navT('teachingTools'),
      description: t('toolsDesc'),
      icon: 'solar:pen-new-square-bold-duotone',
      href: '/store/teaching-tools',
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Store Hero */}
      <section className="bg-brand-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 end-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 start-0 w-96 h-96 bg-brand-orange/10 rounded-full translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2 blur-3xl" />
        
        <div className="container mx-auto max-w-7xl px-4 relative z-10 text-center">
           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-brand-sky/5">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {categories.map((cat, idx) => (
              <CategoryCard key={idx} {...cat} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

