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
  const t = await getTranslations({ locale: page, namespace: 'islamicSeries.theHappyMuslim' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${page}/curricula/islamic-series/the-happy-muslim`,
      languages: {
        ar: '/ar/curricula/islamic-series/the-happy-muslim',
        fr: '/fr/curricula/islamic-series/the-happy-muslim',
        en: '/en/curricula/islamic-series/the-happy-muslim',
      },
    },
  };
}

export default async function TheHappyMuslimPage({
  params,
}: {
  params: Promise<{ pages: string }>;
}) {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'islamicSeries.theHappyMuslim' });
  const isRTL = page === 'ar';

  // --- Features: The Ingredients of Happiness ---
  const features = [
    {
      title: t('joyfulLearning'),
      desc: t('joyfulDesc'),
      icon: 'solar:smile-circle-bold-duotone',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600',
    },
    {
      title: t('integratedValues'),
      desc: t('valuesDesc'),
      icon: 'solar:heart-shine-bold-duotone',
      color: 'bg-rose-100',
      textColor: 'text-rose-600',
    },
    {
      title: t('creativeArts'),
      desc: t('creativeDesc'),
      icon: 'solar:palette-bold-duotone',
      color: 'bg-sky-100',
      textColor: 'text-sky-600',
    },
  ];

  // --- The Books/Levels ---
  const books = [
    {
      id: 1,
      title: t('book1Title'), // My Beautiful Religion
      desc: t('book1Desc'),
      icon: 'solar:sun-2-bold-duotone',
      color: 'bg-brand-gold-light/20 text-brand-gold-dark dark:bg-brand-gold/10 dark:text-brand-gold',
      border: 'border-brand-gold/30',
    },
    {
      id: 2,
      title: t('book2Title'), // My Good Manners
      desc: t('book2Desc'),
      icon: 'solar:hand-shake-bold-duotone',
      color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
      border: 'border-teal-200 dark:border-teal-800',
    },
    {
      id: 3,
      title: t('book3Title'), // My Great Prophet
      desc: t('book3Desc'),
      icon: 'solar:book-minimalistic-bold-duotone',
      color: 'bg-brand-navy-light/20 text-brand-navy dark:bg-brand-navy/30 dark:text-brand-sky',
      border: 'border-brand-navy/20',
    },
    {
      id: 4,
      title: t('book4Title'), // My Wonderful World
      desc: t('book4Desc'),
      icon: 'solar:globus-bold-duotone',
      color: 'bg-brand-sky-light/20 text-brand-sky-dark dark:bg-brand-sky/10 dark:text-brand-sky',
      border: 'border-brand-sky/30',
    },
    {
      id: 5,
      title: t('book5Title'), // My Pure Heart
      desc: t('book5Desc'),
      icon: 'solar:heart-bold-duotone',
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      border: 'border-rose-200 dark:border-rose-800',
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-32 text-center rounded-b-[4rem] shadow-soft-lg z-10">
        
        {/* Decorative Background: Sunburst / Joyful Shapes */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
             <Icon icon="solar:sun-2-bold" className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] text-brand-gold animate-spin-slow" style={{animationDuration: '60s'}} />
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-10 text-brand-sky opacity-20 animate-bounce-slow">
           <Icon icon="solar:cloud-bold" className="text-6xl" />
        </div>
        <div className="absolute top-1/3 right-10 text-brand-gold opacity-20 animate-bounce-slow" style={{animationDelay: '1s'}}>
           <Icon icon="solar:star-fall-bold" className="text-6xl" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-sm font-bold mb-8 backdrop-blur-md">
            <Icon icon="solar:emoji-funny-circle-bold" className="text-brand-gold" />
            <span>{t('characterBuilding')}</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {t('title')}
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
            {t('description')}
          </p>

          <button className="px-10 py-4 bg-brand-gold text-brand-navy-dark font-bold rounded-2xl shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 mx-auto">
             <Icon icon="solar:play-circle-bold-duotone" className="text-xl" />
             <span>{t('watchPromo')}</span>
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

      {/* ================= THE BOOKS GRID ================= */}
      <section className="py-12 pb-32">
        <div className="container mx-auto max-w-7xl px-4">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">
               {t('seriesBooks')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t('seriesDesc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div 
                key={book.id}
                className={`group relative flex flex-col bg-white dark:bg-brand-navy-dark p-8 rounded-[2.5rem] shadow-soft border-2 ${book.border} hover:-translate-y-2 hover:shadow-soft-hover transition-all duration-300`}
              >
                {/* Level Badge */}
                <div className="absolute top-6 right-6 rtl:left-6 rtl:right-auto py-1 px-3 rounded-full bg-gray-100 dark:bg-white/5 text-[10px] font-bold uppercase text-gray-400">
                    {t('level')} {book.id}
                </div>

                {/* Icon Box */}
                <div className={`w-20 h-20 shrink-0 rounded-[1.5rem] flex items-center justify-center text-4xl shadow-inner-soft mb-6 ${book.color}`}>
                   <Icon icon={book.icon} />
                </div>

                {/* Content */}
                <div>
                   <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2 group-hover:text-brand-orange transition-colors">
                     {book.title}
                   </h3>
                   <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                     {book.desc}
                   </p>
                   
                   <Link href={`/curricula/the-happy-muslim/book-${book.id}`} className="inline-flex items-center gap-2 text-brand-navy font-bold hover:gap-3 transition-all text-xs uppercase tracking-wider">
                      <span>{t('exploreBook')}</span>
                      <Icon icon="solar:arrow-right-linear" className={`text-lg ${isRTL ? 'rotate-180' : ''}`} />
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
