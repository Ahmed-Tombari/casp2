import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Icon } from '@iconify/react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'store.hidayahFr' });
  return { title: t('title'), description: t('description') };
}

export default async function HidayahFrenchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'store.hidayahFr' });
  const isRTL = locale === 'ar';

  // --- Pillars: Tailored for Francophones ---
  const pillars = [
    { 
      title: t('bilingualValues'), 
      desc: t('bilingualDesc'), 
      icon: 'solar:chat-square-like-bold-duotone', 
      color: 'bg-indigo-500', 
      textColor: 'text-indigo-600' 
    },
    { 
      title: t('westernContext'), 
      desc: t('contextDesc'), 
      icon: 'solar:city-bold-duotone', 
      color: 'bg-brand-sky', 
      textColor: 'text-brand-sky' 
    },
    { 
      title: t('authenticSources'), 
      desc: t('sourceDesc'), 
      icon: 'solar:book-2-bold-duotone', 
      color: 'bg-brand-gold', 
      textColor: 'text-brand-gold-dark' 
    },
  ];

  // --- The Levels ---
  const levels = [
    {
      id: 1,
      title: t('level1Title'), // Les Bourgeons (Buds)
      desc: t('level1Desc'),
      icon: 'solar:leaf-bold-duotone',
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
      border: 'border-emerald-200 dark:border-emerald-800'
    },
    {
      id: 2,
      title: t('level2Title'), // La Lumière (Light)
      desc: t('level2Desc'),
      icon: 'solar:sun-2-bold-duotone',
      color: 'bg-brand-gold-light/20 text-brand-gold-dark dark:bg-brand-gold/10 dark:text-brand-gold',
      border: 'border-brand-gold/30'
    },
    {
      id: 3,
      title: t('level3Title'), // La Voie (Path)
      desc: t('level3Desc'),
      icon: 'solar:map-point-bold-duotone',
      color: 'bg-brand-navy-light/20 text-brand-navy dark:bg-brand-navy/30 dark:text-brand-sky',
      border: 'border-brand-navy/20'
    },
    {
      id: 4,
      title: t('level4Title'), // L'Exemple (Example/Role Model)
      desc: t('level4Desc'),
      icon: 'solar:user-hand-up-bold-duotone',
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
      border: 'border-indigo-200 dark:border-indigo-800'
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-brand-navy pt-32 pb-32 text-center relative overflow-hidden rounded-b-[4rem] shadow-soft-lg z-10">
        
        {/* Background: Abstract Map / Connections */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 Q 50 0 100 100" stroke="white" strokeWidth="0.5" fill="none" />
              <path d="M0 80 Q 50 -20 100 80" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5" />
           </svg>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-sm font-bold mb-8 backdrop-blur-md">
             <Icon icon="solar:global-bold" />
             <span>{t('francophoneEdition')}</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {t('title')}
          </h1>
          
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            {t('description')}
          </p>

          <button className="px-10 py-4 bg-white text-brand-navy font-bold rounded-2xl shadow-3d hover:shadow-3d-pressed hover:translate-y-1 transition-all flex items-center justify-center gap-3 mx-auto">
             <Icon icon="solar:file-download-bold-duotone" className="text-xl" />
             <span>{t('downloadSyllabus')}</span>
          </button>
        </div>
      </section>

      {/* ================= PILLARS (The Bridge) ================= */}
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

      {/* ================= LEVELS GRID ================= */}
      <section className="py-12 pb-32">
        <div className="container mx-auto max-w-7xl px-4">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">
               {t('learningJourney')}
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
                <div className="text-center sm:rtl:text-right sm:ltr:text-left flex-grow">
                   <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-2 group-hover:text-brand-orange transition-colors">
                     {level.title}
                   </h3>
                   <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                     {level.desc}
                   </p>
                   
                   <Link href={`/store/hidayah-fr/level-${level.id}`} className="inline-flex items-center gap-2 text-brand-navy font-bold hover:gap-3 transition-all text-sm uppercase tracking-wider">
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
