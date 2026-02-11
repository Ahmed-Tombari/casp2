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
  const t = await getTranslations({ locale: locale, namespace: 'store.theHappyMuslim' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/store/the-happy-muslim`,
      languages: {
        ar: '/ar/store/the-happy-muslim',
        fr: '/fr/store/the-happy-muslim',
        en: '/en/store/the-happy-muslim',
      },
    },
  };
}

export default async function TheHappyMuslimPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'store.theHappyMuslim' });
  const tLevels = await getTranslations({ locale: locale, namespace: 'store.levels' });
  const isRTL = locale === 'ar';

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
      id: 'kg',
      title: tLevels('kg'),
      desc: t('book1Desc'),
      icon: 'solar:sun-2-bold-duotone',
      color: 'bg-brand-gold-light/20 text-brand-gold-dark dark:bg-brand-gold/10 dark:text-brand-gold',
      border: 'border-brand-gold/30',
    },
    {
      id: 'prep',
      title: tLevels('prep'),
      desc: t('book1Desc'),
      icon: 'solar:sun-2-bold-duotone',
      color: 'bg-brand-gold-light/20 text-brand-gold-dark dark:bg-brand-gold/10 dark:text-brand-gold',
      border: 'border-brand-gold/30',
    },
    {
      id: '1',
      title: tLevels('1'),
      desc: t('book1Desc'),
      icon: 'solar:sun-2-bold-duotone',
      color: 'bg-brand-gold-light/20 text-brand-gold-dark dark:bg-brand-gold/10 dark:text-brand-gold',
      border: 'border-brand-gold/30',
    },
    {
      id: '2',
      title: tLevels('2'),
      desc: t('book2Desc'),
      icon: 'solar:hand-shake-bold-duotone',
      color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
      border: 'border-teal-200 dark:border-teal-800',
    },
    {
      id: '3',
      title: tLevels('3'),
      desc: t('book3Desc'),
      icon: 'solar:book-minimalistic-bold-duotone',
      color: 'bg-brand-navy-light/20 text-brand-navy dark:bg-brand-navy/30 dark:text-brand-sky',
      border: 'border-brand-navy/20',
    },
    {
      id: '4',
      title: tLevels('4'),
      desc: t('book4Desc'),
      icon: 'solar:globus-bold-duotone',
      color: 'bg-brand-sky-light/20 text-brand-sky-dark dark:bg-brand-sky/10 dark:text-brand-sky',
      border: 'border-brand-sky/30',
    },
    {
      id: '5',
      title: tLevels('5'),
      desc: t('book4Desc'),
      icon: 'solar:globus-bold-duotone',
      color: 'bg-brand-sky-light/20 text-brand-sky-dark dark:bg-brand-sky/10 dark:text-brand-sky',
      border: 'border-brand-sky/30',
    },
    {
      id: '6',
      title: tLevels('6'),
      desc: t('book4Desc'),
      icon: 'solar:globus-bold-duotone',
      color: 'bg-brand-sky-light/20 text-brand-sky-dark dark:bg-brand-sky/10 dark:text-brand-sky',
      border: 'border-brand-sky/30',
    },
    {
      id: '7',
      title: tLevels('7'),
      desc: t('book4Desc'),
      icon: 'solar:globus-bold-duotone',
      color: 'bg-brand-sky-light/20 text-brand-sky-dark dark:bg-brand-sky/10 dark:text-brand-sky',
      border: 'border-brand-sky/30',
    },
    {
      id: '8',
      title: tLevels('8'),
      desc: t('book4Desc'),
      icon: 'solar:globus-bold-duotone',
      color: 'bg-brand-sky-light/20 text-brand-sky-dark dark:bg-brand-sky/10 dark:text-brand-sky',
      border: 'border-brand-sky/30',
    },
    {
      id: '9',
      title: tLevels('9'),
      desc: t('book4Desc'),
      icon: 'solar:globus-bold-duotone',
      color: 'bg-brand-sky-light/20 text-brand-sky-dark dark:bg-brand-sky/10 dark:text-brand-sky',
      border: 'border-brand-sky/30',
    },
    {
      id: '10',
      title: tLevels('10'),
      desc: t('book4Desc'),
      icon: 'solar:globus-bold-duotone',
      color: 'bg-brand-sky-light/20 text-brand-sky-dark dark:bg-brand-sky/10 dark:text-brand-sky',
      border: 'border-brand-sky/30',
    }
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
          
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed mb-10">
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
       <div className="text-center py-10">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">
               {t('seriesBooks')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t('seriesDesc')}</p>
        </div>

      {/* ================= PDF BOOKS SECTION ================= */}
      <PdfBookGrid 
        levels={books.map(b => ({
          ...b,
          bookCover: "/images/books/سلسلة-the-happy-muslim-213x300.png",
          pdfUrl: "#"
        }))} 
      />

    </main>
  );
}

