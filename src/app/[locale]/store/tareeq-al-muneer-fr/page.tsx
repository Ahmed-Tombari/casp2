import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Icon } from '@iconify/react';
import PdfBookGrid from '@/app/components/Store/PdfBookGrid';

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
  const tLevels = await getTranslations({ locale: locale, namespace: 'store.levels' });

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
  const levels = [
    {
      id: 'kg',
      title: tLevels('kg'),
      desc: t('stage1Desc'),
      icon: 'solar:book-bookmark-bold-duotone',
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
      border: 'border-indigo-200 dark:border-indigo-800',
    },
    {
      id: 'prep',
      title: tLevels('prep'),
      desc: t('stage1Desc'),
      icon: 'solar:book-bookmark-bold-duotone',
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
      border: 'border-indigo-200 dark:border-indigo-800',
    },
    {
      id: '1',
      title: tLevels('1'),
      desc: t('stage1Desc'),
      icon: 'solar:book-bookmark-bold-duotone',
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
      border: 'border-indigo-200 dark:border-indigo-800',
    },
    {
      id: '2',
      title: tLevels('2'),
      desc: t('stage2Desc'),
      icon: 'solar:pen-new-square-bold-duotone',
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      border: 'border-rose-200 dark:border-rose-800',
    },
    {
      id: '3',
      title: tLevels('3'),
      desc: t('stage3Desc'),
      icon: 'solar:chat-round-line-bold-duotone',
      color: 'bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400',
      border: 'border-sky-200 dark:border-sky-800',
    },
    {
      id: '4',
      title: tLevels('4'),
      desc: t('stage4Desc'),
      icon: 'solar:diploma-verified-bold-duotone',
      color: 'bg-brand-gold-light/20 text-brand-gold-dark dark:bg-brand-gold/10 dark:text-brand-gold',
      border: 'border-brand-gold/30',
    },
    {
      id: '5',
      title: tLevels('5'),
      desc: t('stage4Desc'),
      icon: 'solar:diploma-verified-bold-duotone',
      color: 'bg-brand-gold-light/20 text-brand-gold-dark dark:bg-brand-gold/10 dark:text-brand-gold',
      border: 'border-brand-gold/30',
    },
    {
      id: '6',
      title: tLevels('6'),
      desc: t('stage4Desc'),
      icon: 'solar:diploma-verified-bold-duotone',
      color: 'bg-brand-gold-light/20 text-brand-gold-dark dark:bg-brand-gold/10 dark:text-brand-gold',
      border: 'border-brand-gold/30',
    },
    {
      id: '7',
      title: tLevels('7'),
      desc: t('stage4Desc'),
      icon: 'solar:diploma-verified-bold-duotone',
      color: 'bg-brand-gold-light/20 text-brand-gold-dark dark:bg-brand-gold/10 dark:text-brand-gold',
      border: 'border-brand-gold/30',
    },
    {
      id: '8',
      title: tLevels('8'),
      desc: t('stage4Desc'),
      icon: 'solar:diploma-verified-bold-duotone',
      color: 'bg-brand-gold-light/20 text-brand-gold-dark dark:bg-brand-gold/10 dark:text-brand-gold',
      border: 'border-brand-gold/30',
    },
    {
      id: '9',
      title: tLevels('9'),
      desc: t('stage4Desc'),
      icon: 'solar:diploma-verified-bold-duotone',
      color: 'bg-brand-gold-light/20 text-brand-gold-dark dark:bg-brand-gold/10 dark:text-brand-gold',
      border: 'border-brand-gold/30',
    },
    {
      id: '10',
      title: tLevels('10'),
      desc: t('stage4Desc'),
      icon: 'solar:diploma-verified-bold-duotone',
      color: 'bg-brand-gold-light/20 text-brand-gold-dark dark:bg-brand-gold/10 dark:text-brand-gold',
      border: 'border-brand-gold/30',
    }
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
        <div className="text-center py-10">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">
               {t('learningPath')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t('pathDesc')}</p>
        </div>

      <PdfBookGrid 
        levels={levels.map(l => ({
          ...l,
          bookCover: "/images/books/سلسلة-الطريق-المنير-213x300.png",
          pdfUrl: "#"
        }))} 
      />

    </main>
  );
}
