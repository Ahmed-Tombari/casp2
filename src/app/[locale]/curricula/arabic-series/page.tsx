import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Icon } from '@iconify/react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'arabicSeries' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/curricula/arabic-series`,
      languages: {
        ar: '/ar/curricula/arabic-series',
        fr: '/fr/curricula/arabic-series',
        en: '/en/curricula/arabic-series',
      },
    },
  };
}

export default async function ArabicSeriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'arabicSeries' });
  const isRTL = locale === 'ar';

  const series = [
    {
      id: 'al-wafi',
      title: t('alWafiTitle'),
      description: t('alWafiDesc'),
      href: '/curricula/arabic-series/al-wafi',
      icon: 'solar:library-bold-duotone',
      color: 'bg-brand-navy',
      hoverBorder: 'group-hover:border-brand-navy',
      textColor: 'text-brand-navy',
      badge: t('comprehensiveChoice'), // "The Comprehensive Choice"
    },
    {
      id: 'al-mufid',
      title: t('alMufidTitle'),
      description: t('alMufidDesc'),
      href: '/curricula/arabic-series/al-mufid',
      icon: 'solar:notebook-bold-duotone',
      color: 'bg-brand-orange',
      hoverBorder: 'group-hover:border-brand-orange',
      textColor: 'text-brand-orange',
      badge: t('practicalChoice'), // "The Practical Choice"
    },
    {
      id: 'garden',
      title: t('gardenOfArabicTitle'),
      description: t('gardenOfArabicDesc'),
      href: '/curricula/garden-of-arabic',
      icon: 'solar:leaf-bold-duotone', // Updated to Solar for consistency
      color: 'bg-emerald-500',
      hoverBorder: 'group-hover:border-emerald-500',
      textColor: 'text-emerald-600',
      badge: t('growthChoice'), // "The Growth Choice"
    },
  ];

  const standards = [
    { icon: 'solar:diploma-verified-bold-duotone', title: t('modernPedagogy'), desc: t('pedagogyDesc') },
    { icon: 'solar:globus-bold-duotone', title: t('culturalDepth'), desc: t('cultureDesc') },
    { icon: 'solar:devices-bold-duotone', title: t('digitalSupport'), desc: t('digitalDesc') },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-28 text-center rounded-b-[4rem] shadow-soft-lg z-10">
        
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
             {/* Abstract Arabic Letter Shapes (Simulated) */}
             <div className="absolute top-10 left-10 text-[10rem] font-serif opacity-20 text-white rotate-12">ع</div>
             <div className="absolute bottom-20 right-20 text-[10rem] font-serif opacity-20 text-brand-sky -rotate-12">ض</div>
             <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand-navy-light rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen opacity-30"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 border border-white/20 text-brand-sky-light text-sm font-bold mb-8 backdrop-blur-md shadow-inner-soft">
            <Icon icon="solar:book-bookmark-bold" className="text-brand-gold" />
            <span>{t('curriculumHub')}</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {t('title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-50/80 max-w-3xl mx-auto leading-relaxed font-light">
            {t('description')}
          </p>
        </div>
      </section>

      {/* ================= STANDARDS (Why Us) ================= */}
      <section className="py-16 -mt-12 relative z-20 px-4">
         <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {standards.map((item, idx) => (
                  <div key={idx} className="glass p-6 flex flex-col items-center text-center shadow-soft-md hover:-translate-y-1 transition-transform duration-300 bg-white dark:bg-brand-navy-dark">
                     <div className="text-4xl text-brand-gold mb-3">
                        <Icon icon={item.icon} />
                     </div>
                     <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-2">{item.title}</h3>
                     <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= THE SERIES CARDS ================= */}
      <section className="py-12 pb-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {series.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                locale={locale}
                className={`group relative flex flex-col bg-white dark:bg-brand-navy-dark rounded-[3rem] p-10 shadow-soft border-2 border-transparent ${item.hoverBorder} transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-lg overflow-hidden`}
              >
                {/* Badge */}
                <div className="absolute top-8 right-8 rtl:left-8 rtl:right-auto">
                   <span className="py-1 px-3 rounded-full bg-gray-100 dark:bg-white/10 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-300 group-hover:bg-white group-hover:text-brand-navy transition-colors">
                      {item.badge}
                   </span>
                </div>

                {/* Hover Background Flood */}
                <div className={`absolute inset-0 opacity-0 ${item.color} group-hover:opacity-100 transition-opacity duration-500 ease-out`} />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Icon */}
                  <div className={`w-24 h-24 rounded-[2.5rem] ${item.color} flex items-center justify-center mb-8 shadow-lg group-hover:bg-white/20 group-hover:shadow-inner-soft transition-all duration-500`}>
                    <Icon icon={item.icon} className="text-5xl text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <h2 className="text-3xl font-extrabold text-brand-navy dark:text-white mb-4 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h2>

                  <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed group-hover:text-white/90 transition-colors duration-300 flex-grow">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-3 font-bold text-lg mt-auto group-hover:text-white transition-colors duration-300">
                    <span className={item.textColor + " group-hover:text-white"}>{t('discoverSeries')}</span>
                    <Icon
                      icon="solar:alt-arrow-right-linear"
                      className={`text-2xl transition-transform group-hover:translate-x-2 ${isRTL ? 'rotate-180 group-hover:-translate-x-2' : ''}`}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

