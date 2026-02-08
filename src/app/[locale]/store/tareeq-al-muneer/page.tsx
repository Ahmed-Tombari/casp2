import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Icon } from '@iconify/react';
import PdfBookGrid from '@/app/components/Store/PdfBookGrid';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'store.tareeqAlMuneerAr' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/store/tareeq-al-muneer`,
      languages: {
        ar: '/ar/store/tareeq-al-muneer',
        fr: '/fr/store/tareeq-al-muneer',
        en: '/en/store/tareeq-al-muneer',
      },
    },
  };
}

export default async function TareeqAlMuneerArPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'store.tareeqAlMuneerAr' });
  const tLevels = await getTranslations({ locale: locale, namespace: 'store.levels' });
  const isRTL = locale === 'ar';

  // --- Core Features (The "Light" Pillars) ---
  const features = [
    {
      title: t('phoneticMastery'),
      desc: t('phoneticDesc'),
      icon: 'solar:microphone-large-bold-duotone',
      color: 'bg-amber-100',
      textColor: 'text-amber-600',
    },
    {
      title: t('visualClarity'),
      desc: t('visualDesc'),
      icon: 'solar:eye-bold-duotone',
      color: 'bg-teal-100',
      textColor: 'text-teal-600',
    },
    {
      title: t('gradualProgress'),
      desc: t('gradualDesc'),
      icon: 'mdi:stairs',
      color: 'bg-orange-100',
      textColor: 'text-orange-600',
    },
  ];

  // --- The Milestones (Levels) ---
  const levels = [
    {
      id: 'kg',
      title: tLevels('kg'),
      desc: t('level1Desc'),
      icon: 'solar:letter-bold-duotone',
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
      border: 'border-amber-200 dark:border-amber-800',
    },
    {
      id: 'prep',
      title: tLevels('prep'),
      desc: t('level1Desc'),
      icon: 'solar:letter-bold-duotone',
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
      border: 'border-amber-200 dark:border-amber-800',
    },
    {
      id: '1',
      title: tLevels('1'),
      desc: t('level1Desc'),
      icon: 'solar:letter-bold-duotone',
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
      border: 'border-amber-200 dark:border-amber-800',
    },
    {
      id: '2',
      title: tLevels('2'),
      desc: t('level2Desc'),
      icon: 'solar:soundwave-bold-duotone',
      color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
      border: 'border-teal-200 dark:border-teal-800',
    },
    {
      id: '3',
      title: tLevels('3'),
      desc: t('level3Desc'),
      icon: 'solar:widget-add-bold-duotone',
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
      border: 'border-indigo-200 dark:border-indigo-800',
    },
    {
      id: '4',
      title: tLevels('4'),
      desc: t('level4Desc'),
      icon: 'solar:book-2-bold-duotone',
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      border: 'border-rose-200 dark:border-rose-800',
    },
    {
      id: '5',
      title: tLevels('5'),
      desc: t('level4Desc'),
      icon: 'solar:book-2-bold-duotone',
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      border: 'border-rose-200 dark:border-rose-800',
    },
    {
      id: '6',
      title: tLevels('6'),
      desc: t('level4Desc'),
      icon: 'solar:book-2-bold-duotone',
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      border: 'border-rose-200 dark:border-rose-800',
    },
    {
      id: '7',
      title: tLevels('7'),
      desc: t('level4Desc'),
      icon: 'solar:book-2-bold-duotone',
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      border: 'border-rose-200 dark:border-rose-800',
    },
    {
      id: '8',
      title: tLevels('8'),
      desc: t('level4Desc'),
      icon: 'solar:book-2-bold-duotone',
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      border: 'border-rose-200 dark:border-rose-800',
    },
    {
      id: '9',
      title: tLevels('9'),
      desc: t('level4Desc'),
      icon: 'solar:book-2-bold-duotone',
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      border: 'border-rose-200 dark:border-rose-800',
    },
    {
      id: '10',
      title: tLevels('10'),
      desc: t('level4Desc'),
      icon: 'solar:book-2-bold-duotone',
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      border: 'border-rose-200 dark:border-rose-800',
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      
      {/* ================= HERO SECTION (Illuminated) ================= */}
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-32 text-center rounded-b-[4rem] shadow-soft-lg z-10">
        
        {/* Background Light Effects */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
             {/* Central Glow */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-navy-light blur-[120px] rounded-full mix-blend-screen"></div>
             {/* Ray Patterns */}
             <div className="absolute top-10 right-10 w-64 h-64 bg-amber-400/20 blur-[80px] rounded-full animate-pulse-slow"></div>
             <div className="absolute bottom-10 left-10 w-64 h-64 bg-teal-400/20 blur-[80px] rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 border border-white/20 text-brand-sky-light text-sm font-bold mb-8 backdrop-blur-md shadow-inner-soft">
            <Icon icon="solar:lightbulb-bolt-bold" className="text-brand-gold" />
            <span>{t('literacyProgram')}</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {t('title')}
          </h1>
          
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed mb-10">
            {t('description')}
          </p>

          <button className="group relative px-8 py-4 bg-brand-gold text-brand-navy-dark rounded-2xl font-bold shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:shadow-[0_0_50px_rgba(234,179,8,0.6)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
             <span className="relative z-10 flex items-center gap-2">
                <Icon icon="solar:play-circle-bold-duotone" className="text-xl" />
                {t('startJourney')}
             </span>
             {/* Shine Effect on Button */}
             <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>
          </button>
        </div>
      </section>

      {/* ================= FEATURES (Overlapping Grid) ================= */}
      <section className="py-16 -mt-16 relative z-20 px-4">
         <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {features.map((feature, i) => (
                  <div key={i} className="glass p-8 flex flex-col items-center text-center shadow-soft-md hover:-translate-y-2 transition-transform duration-300 bg-white dark:bg-brand-navy-dark">
                     <div className={`w-16 h-16 rounded-2xl bg-opacity-10 ${feature.color.replace('bg-', 'bg-')} ${feature.textColor} flex items-center justify-center mb-4 text-3xl`}>
                        <Icon icon={feature.icon} />
                     </div>
                     <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">{feature.title}</h3>
                     <p className="text-sm text-brand-navy/60 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= THE PATH MILESTONES ================= */}
        <div className="text-center py-10">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">
               {t('milestones')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t('milestonesDesc')}</p>
        </div>

      <PdfBookGrid 
        levels={levels} 
        bookCover="/images/books/سلسلة-الطريق-المنير-213x300.png"
      />

    </main>
  );
}

