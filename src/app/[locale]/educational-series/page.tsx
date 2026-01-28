import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Icon } from '@iconify/react/dist/iconify.js';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'educationalSeries' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/educational-series`,
      languages: {
        'ar': '/ar/educational-series',
        'fr': '/fr/educational-series',
        'en': '/en/educational-series',
      },
    },
  };
}

export default async function EducationalSeriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'educationalSeries' });

  const series = [
    {
      title: t('alWafiTitle'),
      description: t('alWafiDesc'),
      href: '/educational-series/al-wafi',
      icon: 'solar:library-bold-duotone',
      color: 'bg-brand-navy',
    },
    {
      title: t('alMufidTitle'),
      description: t('alMufidDesc'),
      href: '/educational-series/al-mufid',
      icon: 'solar:notebook-bold-duotone',
      color: 'bg-brand-orange',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy pt-32 pb-20 relative overflow-hidden text-center">
        <div className="absolute -top-24 -end-24 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50" />
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Series Cards */}
      <section className="py-20 bg-brand-sky/5 dark:bg-brand-navy-dark transition-colors duration-300">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {series.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group relative bg-white dark:!bg-brand-navy-dark rounded-[3rem] p-10 md:p-16 shadow-soft dark:shadow-none border border-brand-sky/20 dark:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-sky/10 overflow-hidden"
              >
                <div className={`w-20 h-20 rounded-3xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <Icon icon={item.icon} className="text-4xl text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy dark:text-white mb-6 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h2>
                <p className="text-xl text-brand-navy/60 dark:text-white/60 leading-relaxed mb-10">
                  {item.description}
                </p>

                <div className="flex items-center gap-3 text-brand-orange font-bold text-lg group-hover:gap-5 transition-all">
                  <span>Discover the Series</span>
                  <Icon icon="solar:alt-arrow-right-linear" className="text-2xl rtl:rotate-180" />
                </div>

                {/* Background Decoration */}
                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Icon icon={item.icon} className="text-[200px]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

