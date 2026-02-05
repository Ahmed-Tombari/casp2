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
  const t = await getTranslations({ locale: locale, namespace: 'store.tareeqAlMuneerFr' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/store/tareeq-al-muneer-fr`,
      languages: {
        ar: '/ar/store/tareeq-al-muneer-fr',
        fr: '/fr/store/tareeq-al-muneer-fr',
        en: '/en/store/tareeq-al-muneer-fr',
      },
    },
  };
}

export default async function TareeqAlMuneerFrPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'store.tareeqAlMuneerFr' });
  const isRTL = locale === 'ar';

  // --- Features: Tailored for Francophones ---
  const features = [
    {
      title: t('bilingualMethod'),
      desc: t('bilingualDesc'),
      icon: 'solar:chat-square-check-bold-duotone',
      color: 'bg-indigo-100',
      textColor: 'text-indigo-600',
    },
    {
      title: t('phoneticComparisons'),
      desc: t('phoneticDesc'),
      icon: 'solar:soundwave-square-bold-duotone',
      color: 'bg-rose-100',
      textColor: 'text-rose-600',
    },
    {
      title: t('culturalBridge'),
      desc: t('culturalDesc'),
      icon: 'solar:globus-bold-duotone',
      color: 'bg-brand-sky',
      textColor: 'text-brand-sky-dark',
    },
  ];

  // --- The Learning Stages ---
  const stages = [
    {
      id: 1,
      title: t('stage1'), // Introduction
      desc: t('stage1Desc'), // "Alphabets & Sounds"
      icon: 'solar:book-bookmark-bold-duotone',
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
      border: 'border-indigo-200 dark:border-indigo-800',
    },
    {
      id: 2,
      title: t('stage2'), // Basics
      desc: t('stage2Desc'), // "Vocabulary & Grammar"
      icon: 'solar:pen-new-square-bold-duotone',
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      border: 'border-rose-200 dark:border-rose-800',
    },
    {
      id: 3,
      title: t('stage3'), // Expression
      desc: t('stage3Desc'), // "Simple Sentences"
      icon: 'solar:chat-round-line-bold-duotone',
      color: 'bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400',
      border: 'border-sky-200 dark:border-sky-800',
    },
    {
      id: 4,
      title: t('stage4'), // Mastery
      desc: t('stage4Desc'), // "Short Stories"
      icon: 'solar:diploma-verified-bold-duotone',
      color: 'bg-brand-gold-light/20 text-brand-gold-dark dark:bg-brand-gold/10 dark:text-brand-gold',
      border: 'border-brand-gold/30',
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-32 text-center rounded-b-[4rem] shadow-soft-lg z-10">
        
        {/* Decorative Background: Eiffel Tower / Arch Abstract or simply elegant curves */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
             {/* Abstract curves resembling bridges */}
             <svg className="absolute bottom-0 left-0 w-full h-1/2 text-white/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
             </svg>
             <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white/10 rounded-full animate-spin-slow" style={{animationDuration: '20s'}}></div>
             <div className="absolute top-40 right-40 w-16 h-16 bg-brand-gold/20 rounded-full blur-xl animate-pulse"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-sm font-bold mb-8 backdrop-blur-md">
            <Icon icon="solar:global-bold" className="text-indigo-300" />
            <span>{t('francophoneEdition')}</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {t('title')}
          </h1>
          
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed mb-10">
            {t('description')}
          </p>

          <button className="px-10 py-4 bg-white text-brand-navy font-bold rounded-2xl shadow-3d hover:shadow-3d-pressed hover:translate-y-1 transition-all flex items-center justify-center gap-3 mx-auto">
             <Icon icon="solar:file-download-bold-duotone" className="text-xl" />
             <span>{t('downloadSyllabus')}</span>
          </button>
        </div>
      </section>

      {/* ================= METHODOLOGY (The Bridge) ================= */}
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

      {/* ================= LEARNING STAGES ================= */}
      <section className="py-12 pb-32">
        <div className="container mx-auto max-w-7xl px-4">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">
               {t('learningPath')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t('pathDesc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stages.map((stage) => (
              <div 
                key={stage.id}
                className={`group relative flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white dark:bg-brand-navy-dark p-8 md:p-10 rounded-[3rem] shadow-soft border-2 ${stage.border} hover:-translate-y-2 hover:shadow-soft-hover transition-all duration-300`}
              >
                {/* Level Badge */}
                <div className="absolute top-8 right-8 rtl:left-8 rtl:right-auto py-1 px-3 rounded-full bg-gray-100 dark:bg-white/5 text-xs font-bold uppercase text-gray-400">
                    {t('level')} {stage.id}
                </div>

                {/* Icon Box */}
                <div className={`w-24 h-24 shrink-0 rounded-[2rem] flex items-center justify-center text-5xl shadow-inner-soft ${stage.color}`}>
                   <Icon icon={stage.icon} />
                </div>

                {/* Content */}
                <div className="text-center sm:rtl:text-right sm:ltr:text-left pt-2">
                   <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-2 group-hover:text-brand-orange transition-colors">
                     {stage.title}
                   </h3>
                   <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                     {stage.desc}
                   </p>
                   
                   <Link href={`/store/tareeq-al-muneer-fr/level-${stage.id}`} className="inline-flex items-center gap-2 text-brand-navy font-bold hover:gap-3 transition-all text-sm uppercase tracking-wider">
                      <span>{t('viewDetails')}</span>
                      <Icon icon="solar:arrow-right-linear" className={`text-xl ${isRTL ? 'rotate-180' : ''}`} />
                   </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}

