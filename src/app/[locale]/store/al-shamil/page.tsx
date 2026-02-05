import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Icon } from '@iconify/react';

// --- Type Definitions ---
interface Feature {
  title: string;
  desc: string;
  icon: string;
}

interface Level {
  id: number;
  title: string;
  subtitle: string;
  topics: string[];
  color: string;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'store.alShamil' });
  return { title: t('title'), description: t('description') };
}

export default async function AlShamilPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'store.alShamil' });
  const isRTL = locale === 'ar';

  // --- Features: Why Al-Shamil? ---
  const features: Feature[] = [
    { title: t('academicRigor'), desc: t('academicDesc'), icon: 'solar:diploma-verified-bold-duotone' },
    { title: t('modernTopics'), desc: t('modernDesc'), icon: 'solar:global-bold-duotone' },
    { title: t('skillIntegration'), desc: t('skillDesc'), icon: 'solar:layers-minimalistic-bold-duotone' },
  ];

  // --- The Levels (Modules) ---
  const levels: Level[] = [
    {
      id: 1,
      title: t('level1Title'), // Novice / Foundation
      subtitle: t('level1Sub'),
      topics: [t('topicGreeting'), t('topicFamily'), t('topicDaily')],
      color: 'bg-emerald-500'
    },
    {
      id: 2,
      title: t('level2Title'), // Intermediate
      subtitle: t('level2Sub'),
      topics: [t('topicTravel'), t('topicHealth'), t('topicShopping')],
      color: 'bg-brand-sky'
    },
    {
      id: 3,
      title: t('level3Title'), // Advanced
      subtitle: t('level3Sub'),
      topics: [t('topicMedia'), t('topicCulture'), t('topicLiterature')],
      color: 'bg-brand-navy'
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-28 text-center rounded-b-[4rem] shadow-soft-lg z-10">
        
        {/* Background: Architectural Grid */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 border border-white/20 text-brand-gold-light text-sm font-bold mb-8 backdrop-blur-md">
            <Icon icon="solar:hat-graduation-bold" className="text-brand-gold" />
            <span>{t('forUniversities')}</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {t('title')}
          </h1>
          
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="px-8 py-4 bg-brand-gold text-brand-navy-dark rounded-xl font-bold shadow-3d hover:shadow-3d-pressed hover:translate-y-1 transition-all flex items-center justify-center gap-2">
                <Icon icon="solar:file-download-bold" className="text-xl" />
                {t('downloadBrochure')}
             </button>
             <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold border border-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <Icon icon="solar:videocamera-record-bold" className="text-xl" />
                {t('watchOverview')}
             </button>
          </div>
        </div>
      </section>

      {/* ================= METHODOLOGY ================= */}
      <section className="py-20 -mt-16 relative z-20 px-4">
         <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {features.map((feature, i) => (
                  <div key={i} className="bg-white dark:bg-brand-navy-dark p-8 rounded-[2rem] shadow-soft hover:-translate-y-2 transition-transform duration-300 border-t-4 border-brand-gold flex flex-col items-center text-center">
                     <div className="w-16 h-16 rounded-full bg-brand-navy/5 text-brand-navy dark:text-brand-sky flex items-center justify-center mb-6 text-3xl">
                        <Icon icon={feature.icon} />
                     </div>
                     <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-3">{feature.title}</h3>
                     <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= ACADEMIC LEVELS ================= */}
      <section className="py-12 pb-32">
        <div className="container mx-auto max-w-5xl px-4">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">
               {t('academicPath')}
            </h2>
            <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {levels.map((level) => (
              <div 
                key={level.id}
                className="group bg-white dark:bg-brand-navy-dark rounded-[2.5rem] p-2 shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-stretch">
                   
                   {/* Level Indicator (Left/Right Side) */}
                   <div className={`md:w-32 rounded-[2rem] ${level.color} flex flex-col items-center justify-center py-8 text-white`}>
                      <span className="text-xs font-bold uppercase tracking-widest opacity-80">{t('level')}</span>
                      <span className="text-5xl font-black">{level.id}</span>
                   </div>

                   {/* Content */}
                   <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                         <div>
                            <h3 className="text-2xl font-bold text-brand-navy dark:text-white">{level.title}</h3>
                            <p className="text-brand-orange font-medium">{level.subtitle}</p>
                         </div>
                         <div className="flex gap-2">
                            {/* Topics Tags */}
                            {level.topics.map((topic, i) => (
                               <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-xs font-bold rounded-lg">
                                  {topic}
                               </span>
                            ))}
                         </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-white/5">
                         <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1"><Icon icon="solar:book-2-bold" /> 2 {t('books')}</span>
                            <span className="flex items-center gap-1"><Icon icon="solar:headphones-round-sound-bold" /> {t('audio')}</span>
                         </div>
                         <button className="flex items-center gap-2 text-brand-navy dark:text-white font-bold hover:text-brand-orange transition-colors">
                            {t('viewDetails')}
                            <Icon icon="solar:arrow-right-linear" className={isRTL ? "rotate-180" : ""} />
                         </button>
                      </div>
                   </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
