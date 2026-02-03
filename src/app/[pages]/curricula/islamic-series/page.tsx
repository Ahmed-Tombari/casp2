import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Icon } from '@iconify/react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pages: string }>;
}): Promise<Metadata> {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'islamicSeries' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${page}/curricula/islamic-series`,
      languages: {
        ar: '/ar/curricula/islamic-series',
        fr: '/fr/curricula/islamic-series',
        en: '/en/curricula/islamic-series',
      },
    },
  };
}

export default async function IslamicSeriesPage({
  params,
}: {
  params: Promise<{ pages: string }>;
}) {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'islamicSeries' });

  const series = [
    {
      title: t('alTareeqAlMuneerArabicTitle'),
      description: t('alTareeqAlMuneerArabicDesc'),
      href: '/curricula/islamic-series/tareeq-al-muneer',
      icon: 'solar:cup-star-bold',
      color: 'bg-brand-navy',
    },
    {
      title: t('alTareeqAlMuneerFrenchTitle'),
      description: t('alTareeqAlMuneerFrenchDesc'),
      href: '/curricula/islamic-series/tareeq-al-muneer-fr',
      icon: 'solar:hand-stars-bold',
      color: 'bg-brand-orange',
    },
    {
      title: t('theHappyMuslimTitle'),
      description: t('theHappyMuslimDesc'),
      href: '/curricula/islamic-series/the-happy-muslim',
      icon: 'solar:smile-circle-bold-duotone',
      color: 'bg-brand-sky',
    },
    {
      title: t('hidayahTitle'),
      description: t('hidayahDesc'),
      href: '/curricula/islamic-series/hidayah',
      icon: 'solar:book-2-bold-duotone',
      color: 'bg-brand-gold',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-20 text-center">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 bg-brand-sky/5">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {series.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                locale={page}
                className="group relative bg-white rounded-[3rem] p-8 shadow-soft border border-brand-sky/20 transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center h-full"
              >
                <div
                  className={`w-20 h-20 rounded-3xl ${item.color} flex items-center justify-center mb-6`}
                >
                  <Icon icon={item.icon} className="text-4xl text-white" />
                </div>

                <h2 className="text-2xl font-extrabold text-brand-navy mb-4">
                  {item.title}
                </h2>

                <p className="text-lg text-brand-navy/60 mb-8 grow">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-brand-orange font-bold mt-auto">
                  <span>{t('discoverSeries')}</span>
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    className="text-xl rtl:rotate-180"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
