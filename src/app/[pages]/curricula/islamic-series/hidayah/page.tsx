import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Icon } from '@iconify/react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pages: string }>;
}): Promise<Metadata> {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'islamicSeries.hidayah' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${page}/curricula/hidayah`,
      languages: {
        ar: '/ar/curricula/hidayah',
        fr: '/fr/curricula/hidayah',
        en: '/en/curricula/hidayah',
      },
    },
  };
}

export default async function HidayahPage({
  params,
}: {
  params: Promise<{ pages: string }>;
}) {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'islamicSeries.hidayah' });
  const isRTL = page === 'ar';

  // --- Pillars (The Overlapping Feature Grid) ---
  const pillars = [
    {
      title: t('aqidahTitle'),
      desc: t('aqidahDesc'),
      icon: 'solar:sun-2-bold-duotone',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600',
    },
    {
      title: t('fiqhTitle'),
      desc: t('fiqhDesc'),
      icon: 'solar:book-2-bold-duotone',
      color: 'bg-teal-100',
      textColor: 'text-teal-600',
    },
    {
      title: t('akhlaqTitle'),
      desc: t('akhlaqDesc'),
      icon: 'solar:heart-bold-duotone',
      color: 'bg-rose-100',
      textColor: 'text-rose-600',
    },
  ];

  // --- Journey Levels (The Main Content Cards) ---
  const levels = [
    {
      id: 1,
      title: t('level1'), // Believing Buds
      desc: t('level1Desc'),
      icon: 'solar:leaf-bold-duotone',
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
      border: 'border-emerald-200 dark:border-emerald-800',
    },
    {
      id: 2,
      title: t('level2'), // Light of Hearts
      desc: t('level2Desc'),
      icon: 'solar:heart-shine-bold-duotone',
      color: 'bg-brand-gold-light/20 text-brand-gold-dark dark:bg-brand-gold/10 dark:text-brand-gold',
      border: 'border-brand-gold/30',
    },
    {
      id: 3,
      title: t('level3'), // Path of Integrity
      desc: t('level3Desc'),
      icon: 'mdi:road',
      color: 'bg-brand-sky-light/20 text-brand-sky-dark dark:bg-brand-sky/10 dark:text-brand-sky',
      border: 'border-brand-sky/30',
    },
    {
      id: 4,
      title: t('level4'), // Model Generation
      desc: t('level4Desc'),
      icon: 'solar:users-group-rounded-bold-duotone',
      color: 'bg-brand-navy-light/20 text-brand-navy dark:bg-brand-navy/30 dark:text-white',
      border: 'border-brand-navy/20',
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      
      {/* ================= HERO SECTION ================= */}
      {/* Identical structure to previous pages for consistency */}
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-32 text-center rounded-b-[4rem] shadow-soft-lg z-10">
        
        {/* Decorative Background (Subtle Islamic Pattern hint) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #EAB308 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
           <Icon icon="solar:moon-stars-bold" className="absolute top-10 right-10 text-9xl text-brand-gold animate-pulse-slow" />
           <Icon icon="solar:stars-minimalistic-bold-duotone" className="absolute bottom-20 left-10 text-8xl text-brand-sky animate-pulse-slow" style={{animationDelay: '1.5s'}} />
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 border border-white/20 text-brand-gold-light text-sm font-bold mb-8 backdrop-blur-md">
            <Icon icon="solar:star-fall-bold" className="text-brand-gold" />
            <span>{t('islamicStudies')}</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {t('title')}
          </h1>
          
          <p className="text-xl text-emerald-50/80 max-w-2xl mx-auto leading-relaxed mb-8">
            {t('description')}
          </p>
        </div>
      </section>

      {/* ================= PILLARS (Overlapping Grid) ================= */}
      {/* Matches the "Methodology" section of Adult/Arabic Series */}
      <section className="py-16 -mt-16 relative z-20 px-4">
         <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {pillars.map((pillar, i) => (
                  <div key={i} className="glass p-8 flex flex-col items-center text-center shadow-soft-md hover:-translate-y-2 transition-transform duration-300 bg-white dark:bg-brand-navy-dark">
                     <div className={`w-16 h-16 rounded-2xl bg-opacity-10 ${pillar.color.replace('bg-', 'bg-')} ${pillar.textColor} flex items-center justify-center mb-4 text-3xl`}>
                        <Icon icon={pillar.icon} />
                     </div>
                     <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">{pillar.title}</h3>
                     <p className="text-sm text-brand-navy/60 dark:text-gray-400 leading-relaxed">{pillar.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= THE JOURNEY (Level Cards) ================= */}
      {/* Matches the Grid Card style of Garden/Streams */}
      <section className="py-12 pb-32">
        <div className="container mx-auto max-w-7xl px-4">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">
               {t('educationalJourney')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t('journeyDesc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {levels.map((level) => (
              <div 
                key={level.id}
                className={`group relative flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white dark:bg-brand-navy-dark p-8 md:p-10 rounded-[3rem] shadow-soft border-2 ${level.border} hover:-translate-y-2 hover:shadow-soft-hover transition-all duration-300`}
              >
                {/* Icon Box */}
                <div className={`w-24 h-24 shrink-0 rounded-[2rem] flex items-center justify-center text-5xl shadow-inner-soft ${level.color}`}>
                   <Icon icon={level.icon} />
                </div>

                {/* Content */}
                <div className="text-center sm:rtl:text-right sm:ltr:text-left">
                   <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-2 group-hover:text-brand-orange transition-colors">
                     {level.title}
                   </h3>
                   <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                     {level.desc}
                   </p>
                   
                   <Link href={`/curricula/hidayah/level-${level.id}`} className="inline-flex items-center gap-2 text-brand-navy font-bold hover:gap-3 transition-all text-sm uppercase tracking-wider">
                      <span>{t('viewLevel')}</span>
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
