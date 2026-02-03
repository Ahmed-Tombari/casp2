import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Icon } from '@iconify/react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'teacherGuide' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/teacher-guide`,
      languages: {
        'ar': '/ar/teacher-guide',
        'fr': '/fr/teacher-guide',
        'en': '/en/teacher-guide',
      },
    },
  };
}

export default async function TeacherGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'teacherGuide' });
  const isRTL = locale === 'ar';

  // Strictly typed array is not strictly required here if inference works, 
  // but this structure is type-safe by default in TS.
  const guides = [
    { 
      id: 'garden',
      title: t('gardenTitle'), 
      desc: t('gardenDesc'),
      icon: 'solar:leaf-bold-duotone', 
      href: '/curricula/teacher-guide/garden-guide',
      color: 'bg-emerald-500',
      fileCount: '4 ' + t('levels')
    },
    { 
      id: 'wafi',
      title: t('wafiTitle'), 
      desc: t('wafiDesc'),
      icon: 'solar:library-bold-duotone', 
      href: '/curricula/teacher-guide/wafi-guide',
      color: 'bg-brand-navy',
      fileCount: '4 ' + t('levels')
    },
    { 
      id: 'mufid',
      title: t('mufidTitle'), 
      desc: t('mufidDesc'),
      icon: 'solar:notebook-bold-duotone', 
      href: '/curricula/teacher-guide/mufid-guide',
      color: 'bg-brand-orange',
      fileCount: '3 ' + t('levels')
    },
    { 
      id: 'happy',
      title: t('happyMuslimGuide.title'), 
      desc: t('happyMuslimGuide.description'),
      icon: 'solar:smile-circle-bold-duotone', 
      href: '/curricula/teacher-guide/happyMuslim-guide',
      color: 'bg-brand-sky',
      fileCount: '5 ' + t('levels')
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-brand-navy pt-32 pb-24 relative overflow-hidden text-center rounded-b-[4rem] shadow-soft-lg z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-sky/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 border border-white/20 text-brand-sky-light text-sm font-bold mb-8 backdrop-blur-md">
            <Icon icon="solar:user-hand-up-bold" className="text-brand-gold" />
            <span>{t('educatorZone')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-20 -mt-12 relative z-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, idx) => (
              <Link 
                key={idx}
                href={guide.href}
                locale={locale}
                className="group relative bg-white dark:bg-brand-navy-dark rounded-[2.5rem] p-8 shadow-soft hover:-translate-y-2 hover:shadow-soft-lg transition-all duration-300 flex flex-col items-center text-center border border-gray-100 dark:border-white/5"
              >
                <div className={`w-20 h-20 rounded-[1.5rem] ${guide.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon icon={guide.icon} className="text-4xl text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {guide.title}
                </h3>
                
                <p className="text-brand-navy/60 dark:text-gray-400 mb-8 leading-relaxed">
                  {guide.desc}
                </p>

                <div className="mt-auto w-full pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-sm font-bold text-gray-400">
                   <div className="flex items-center gap-1">
                      <Icon icon="solar:folder-with-files-bold" />
                      <span>{guide.fileCount}</span>
                   </div>
                   <div className="flex items-center gap-1 text-brand-navy dark:text-brand-sky group-hover:text-brand-orange transition-colors">
                      <span>{t('accessGuide')}</span>
                      <Icon icon="solar:arrow-right-linear" className={isRTL ? "rotate-180" : ""} />
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

