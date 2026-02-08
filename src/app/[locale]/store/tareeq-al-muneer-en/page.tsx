import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Icon } from '@iconify/react';
import PdfBookGrid from '@/app/components/Store/PdfBookGrid';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'store.tareeqAlMuneerEn' });
  return { title: t('title'), description: t('description') };
}

export default async function TareeqAlMuneerEnPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'store.tareeqAlMuneerEn' });
  const tLevels = await getTranslations({ locale, namespace: 'store.levels' });
  const isRTL = locale === 'ar';

  // --- Features (Self-Study Focus) ---
  const features = [
    { title: t('englishInstructions'), desc: t('englishDesc'), icon: 'solar:chat-square-check-bold-duotone', color: 'bg-blue-100', textColor: 'text-blue-600' },
    { title: t('phoneticBridge'), desc: t('phoneticDesc'), icon: 'solar:soundwave-bold-duotone', color: 'bg-indigo-100', textColor: 'text-indigo-600' },
    { title: t('selfStudy'), desc: t('selfStudyDesc'), icon: 'solar:user-hand-up-bold-duotone', color: 'bg-brand-sky-light', textColor: 'text-brand-sky-dark' },
  ];

  // --- Milestones ---
  const levels = [
    { id: 'kg', title: tLevels('kg'), desc: t('vol1Sub'), icon: 'solar:letter-bold-duotone', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
    { id: 'prep', title: tLevels('prep'), desc: t('vol1Sub'), icon: 'solar:letter-bold-duotone', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
    { id: '1', title: tLevels('1'), desc: t('vol1Sub'), icon: 'solar:letter-bold-duotone', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
    { id: '2', title: tLevels('2'), desc: t('vol2Sub'), icon: 'solar:pen-new-square-bold-duotone', color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400', border: 'border-indigo-200 dark:border-indigo-800' },
    { id: '3', title: tLevels('3'), desc: t('audioSub'), icon: 'solar:headphones-round-sound-bold-duotone', color: 'bg-brand-orange-light text-brand-orange-dark dark:bg-brand-orange/10 dark:text-brand-orange', border: 'border-brand-orange/30' },
    { id: '4', title: tLevels('4'), desc: t('audioSub'), icon: 'solar:headphones-round-sound-bold-duotone', color: 'bg-brand-orange-light text-brand-orange-dark dark:bg-brand-orange/10 dark:text-brand-orange', border: 'border-brand-orange/30' },
    { id: '5', title: tLevels('5'), desc: t('audioSub'), icon: 'solar:headphones-round-sound-bold-duotone', color: 'bg-brand-orange-light text-brand-orange-dark dark:bg-brand-orange/10 dark:text-brand-orange', border: 'border-brand-orange/30' },
    { id: '6', title: tLevels('6'), desc: t('audioSub'), icon: 'solar:headphones-round-sound-bold-duotone', color: 'bg-brand-orange-light text-brand-orange-dark dark:bg-brand-orange/10 dark:text-brand-orange', border: 'border-brand-orange/30' },
    { id: '7', title: tLevels('7'), desc: t('audioSub'), icon: 'solar:headphones-round-sound-bold-duotone', color: 'bg-brand-orange-light text-brand-orange-dark dark:bg-brand-orange/10 dark:text-brand-orange', border: 'border-brand-orange/30' },
    { id: '8', title: tLevels('8'), desc: t('audioSub'), icon: 'solar:headphones-round-sound-bold-duotone', color: 'bg-brand-orange-light text-brand-orange-dark dark:bg-brand-orange/10 dark:text-brand-orange', border: 'border-brand-orange/30' },
    { id: '9', title: tLevels('9'), desc: t('audioSub'), icon: 'solar:headphones-round-sound-bold-duotone', color: 'bg-brand-orange-light text-brand-orange-dark dark:bg-brand-orange/10 dark:text-brand-orange', border: 'border-brand-orange/30' },
    { id: '10', title: tLevels('10'), desc: t('audioSub'), icon: 'solar:headphones-round-sound-bold-duotone', color: 'bg-brand-orange-light text-brand-orange-dark dark:bg-brand-orange/10 dark:text-brand-orange', border: 'border-brand-orange/30' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#09121E] text-foreground transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-32 text-center rounded-b-[4rem] shadow-soft-lg z-10">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen"></div>
             <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-bold mb-8 backdrop-blur-md shadow-inner-soft">
            <Icon icon="solar:global-bold" className="text-blue-300" />
            <span>{t('englishEdition')}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">{t('title')}</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed mb-10 font-light">{t('description')}</p>
          <button className="group relative px-8 py-4 bg-white text-brand-navy font-bold rounded-2xl shadow-3d hover:shadow-3d-pressed hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mx-auto">
             <Icon icon="solar:file-download-bold-duotone" className="text-xl" />
             <span>{t('downloadSyllabus')}</span>
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 -mt-16 relative z-20 px-4">
         <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {features.map((feature, i) => (
                  <div key={i} className="bg-white dark:bg-[#112240] p-8 rounded-[2rem] shadow-soft flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                     <div className={`w-16 h-16 rounded-2xl bg-opacity-20 ${feature.color} ${feature.textColor} flex items-center justify-center mb-4 text-3xl`}>
                        <Icon icon={feature.icon} />
                     </div>
                     <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">{feature.title}</h3>
                     <p className="text-sm text-brand-navy/60 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Milestones Grid */}
      <div className="text-center py-10">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">{t('packageContent')}</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      <PdfBookGrid 
        levels={levels} 
        bookCover="/images/books/سلسلة-الطريق-المنير-213x300.png"
      />

    </main>
  );
}
