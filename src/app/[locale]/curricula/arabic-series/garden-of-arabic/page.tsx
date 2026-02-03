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
  const t = await getTranslations({ locale: locale, namespace: 'gardenOfArabic' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/curricula/garden-of-arabic`,
      languages: {
        ar: '/ar/curricula/garden-of-arabic',
        fr: '/fr/curricula/garden-of-arabic',
        en: '/en/curricula/garden-of-arabic',
      },
    },
  };
}

export default async function GardenOfArabicPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'gardenOfArabic' });
  const isRTL = locale === 'ar';

  // --- Concept: The Growth Stages (Levels) ---
  const levels = [
    {
      id: 1,
      title: t('level1Title'), // The Seeds
      sub: t('level1Sub'), // "Letters & Sounds"
      desc: t('level1Desc'),
      icon: 'solar:leaf-bold-duotone',
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
      border: 'border-emerald-200 dark:border-emerald-800',
    },
    {
      id: 2,
      title: t('level2Title'), // The Roots
      sub: t('level2Sub'), // "Vocabulary Building"
      desc: t('level2Desc'),
      icon: 'mdi-sprout', // Icon representing growth
      color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
      border: 'border-teal-200 dark:border-teal-800',
    },
    {
      id: 3,
      title: t('level3Title'), // The Trunk
      sub: t('level3Sub'), // "Sentence Structure"
      desc: t('level3Desc'),
      icon: 'mdi:tree',
      color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      border: 'border-green-200 dark:border-green-800',
    },
    {
      id: 4,
      title: t('level4Title'), // The Fruit
      sub: t('level4Sub'), // "Fluency & Stories"
      desc: t('level4Desc'),
      icon: 'mdi:apple',
      color: 'bg-lime-100 text-lime-600 dark:bg-lime-900/30 dark:text-lime-400',
      border: 'border-lime-200 dark:border-lime-800',
    }
  ];

  // --- Skills to Harvest (Features) ---
  const skills = [
    { title: t('reading'), icon: 'solar:book-bookmark-bold-duotone' },
    { title: t('writing'), icon: 'solar:pen-new-square-bold-duotone' },
    { title: t('listening'), icon: 'solar:headphones-round-sound-bold-duotone' },
    { title: t('speaking'), icon: 'solar:microphone-large-bold-duotone' },
  ];

  return (
    <main className="min-h-screen bg-background">
      
      {/* ================= HERO SECTION (Nature Themed) ================= */}
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-32 text-center rounded-b-[4rem] shadow-soft-lg z-10">
        
        {/* Abstract Leaves Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
           <Icon icon="solar:leaf-bold" className="absolute top-10 left-10 text-9xl text-emerald-400 animate-pulse-slow" />
           <Icon icon="solar:leaf-bold" className="absolute bottom-20 right-10 text-8xl text-brand-sky animate-pulse-slow" style={{animationDelay: '2s'}} />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 blur-[100px] rounded-full"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-bold mb-8 backdrop-blur-md">
            <Icon icon="solar:sun-2-bold" className="text-brand-gold animate-spin-slow" />
            <span>{t('comprehensiveSeries')}</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {t('title')}
          </h1>
          
          <p className="text-xl text-emerald-50/80 max-w-2xl mx-auto leading-relaxed mb-10">
            {t('description')}
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-4 md:gap-12 flex-wrap">
             {skills.map((skill, idx) => (
               <div key={idx} className="flex items-center gap-2 text-white/80 bg-white/5 px-4 py-2 rounded-2xl backdrop-blur-sm border border-white/5">
                 <Icon icon={skill.icon} className="text-emerald-400" />
                 <span className="font-bold">{skill.title}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ================= THE GARDEN PATH (Levels) ================= */}
      <section className="py-24 -mt-10 relative z-20">
        <div className="container mx-auto max-w-6xl px-4">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">
               {t('stagesOfGrowth')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">{t('stagesDesc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {levels.map((level, idx) => (
              <div 
                key={level.id}
                className={`group relative bg-white dark:bg-brand-navy-dark p-8 md:p-10 rounded-[3rem] shadow-soft border-2 ${level.border} hover:-translate-y-2 hover:shadow-soft-hover transition-all duration-300`}
              >
                {/* Level Number Badge */}
                <div className="absolute top-8 left-8 rtl:right-auto rtl:left-8 ltr:left-auto ltr:right-8">
                   <span className="text-6xl font-black opacity-5 font-sans">{level.id}</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                   {/* Icon Box */}
                   <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl shadow-inner-soft ${level.color}`}>
                      <Icon icon={level.icon} />
                   </div>

                   <div className="text-center sm:rtl:text-right sm:ltr:text-left">
                      <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-1 group-hover:text-emerald-600 transition-colors">
                        {level.title}
                      </h3>
                      <div className="text-sm font-bold text-emerald-600/80 dark:text-emerald-400 mb-4 uppercase tracking-wider">
                        {level.sub}
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                        {level.desc}
                      </p>
                      
                      <Link href={`/curricula/garden-of-arabic/level-${level.id}`} className="inline-flex items-center gap-2 text-brand-navy font-bold hover:gap-3 transition-all">
                         <span>{t('exploreLevel')}</span>
                         <Icon icon="solar:arrow-right-linear" className={`text-xl ${isRTL ? 'rotate-180' : ''}`} />
                      </Link>
                   </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= INTERACTIVE PREVIEW (The "Look Inside") ================= */}
      <section className="py-20 bg-emerald-50/50 dark:bg-[#061410] relative overflow-hidden">
         <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="bg-white dark:bg-brand-navy-dark rounded-[3rem] shadow-soft-lg border border-emerald-100 dark:border-emerald-900/30 overflow-hidden flex flex-col md:flex-row">
               
               {/* Illustration / Image Area */}
               <div className="w-full md:w-1/2 bg-emerald-100 dark:bg-emerald-900/20 p-12 flex items-center justify-center relative">
                  <Icon icon="solar:book-2-bold-duotone" className="text-9xl text-emerald-600/20 absolute" />
                  <div className="relative z-10 bg-white dark:bg-brand-navy p-6 rounded-3xl shadow-soft-lg max-w-sm rotate-3 hover:rotate-0 transition-transform duration-500">
                     <div className="h-4 w-1/3 bg-emerald-100 rounded-full mb-4"></div>
                     <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full mb-2"></div>
                     <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full mb-2"></div>
                     <div className="h-2 w-2/3 bg-gray-100 dark:bg-gray-800 rounded-full mb-6"></div>
                     <div className="aspect-video bg-emerald-50 rounded-xl flex items-center justify-center">
                        <Icon icon="solar:play-circle-bold" className="text-4xl text-emerald-500" />
                     </div>
                  </div>
               </div>

               {/* Content Area */}
               <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-brand-navy dark:text-white mb-6">
                     {t('interactiveTitle')}
                  </h3>
                  <ul className="space-y-6 mb-10">
                     {[t('feature1'), t('feature2'), t('feature3')].map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                           <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                              <Icon icon="solar:check-circle-bold" />
                           </div>
                           <p className="text-lg text-gray-600 dark:text-gray-300">{item}</p>
                        </li>
                     ))}
                  </ul>
                  <button className="w-full sm:w-auto px-8 py-4 bg-brand-navy text-white rounded-2xl font-bold shadow-3d hover:shadow-3d-pressed hover:translate-y-1 transition-all">
                     {t('downloadSample')}
                  </button>
               </div>

            </div>
         </div>
      </section>

    </main>
  );
}

