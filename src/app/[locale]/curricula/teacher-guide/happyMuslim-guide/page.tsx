import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Icon } from '@iconify/react';

// 1. Define strict types for the component props
interface GuideHeroProps {
  title: string;
  desc: string;
  icon: string;
}

interface FileCardProps {
  title: string;
  size: string;
  // 't' is a translation function that takes a string key and returns a string
  t: (key: string) => string; 
}

// 2. Use the interfaces in the components
const GuideHero = ({ title, desc, icon }: GuideHeroProps) => (
  <section className="bg-brand-navy pt-32 pb-24 relative overflow-hidden text-center rounded-b-[4rem] shadow-soft-lg z-10">
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="w-24 h-24 mx-auto bg-white/10 rounded-3xl flex items-center justify-center mb-8 backdrop-blur-md">
           <Icon icon={icon} className="text-5xl text-white" />
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">{title}</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">{desc}</p>
      </div>
  </section>
);

const FileCard = ({ title, size, t }: FileCardProps) => (
  <div className="flex flex-col md:flex-row items-center justify-between p-6 rounded-3xl bg-white dark:bg-brand-navy-dark shadow-soft border border-gray-100 dark:border-white/5 hover:border-brand-orange transition-all group">
      <div className="flex items-center gap-5 mb-4 md:mb-0 w-full md:w-auto">
        <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
           <Icon icon="solar:file-pdf-bold-duotone" className="text-3xl" />
        </div>
        <div className="text-left rtl:text-right">
           <h3 className="text-lg font-bold text-brand-navy dark:text-white group-hover:text-brand-orange transition-colors">{title}</h3>
           <span className="text-xs font-bold text-gray-400 bg-gray-100 dark:bg-white/10 px-2 py-1 rounded-md">PDF • {size}</span>
        </div>
      </div>
      <button className="w-full md:w-auto px-6 py-3 rounded-xl bg-brand-navy text-white font-bold hover:bg-brand-orange transition-colors flex items-center justify-center gap-2 shadow-lg">
         <Icon icon="solar:download-bold-duotone" />
         <span>{t('download')}</span>
      </button>
  </div>
);

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'teacherGuide.happyMuslimGuide' });
  return { title: t('title'), description: t('description') };
}

export default async function HappyMuslimGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'teacherGuide.happyMuslimGuide' });
  const common = await getTranslations({ locale: locale, namespace: 'teacherGuide' });

  const files = [
    { title: t('guideBook1'), size: '5.5 MB' },
    { title: t('guideBook2'), size: '6.2 MB' },
    { title: t('guideBook3'), size: '4.8 MB' },
    { title: t('guideBook4'), size: '5.9 MB' },
    { title: t('guideBook5'), size: '6.0 MB' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-background">
      <GuideHero title={t('title')} desc={t('description')} icon="solar:smile-circle-bold-duotone" />
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
           <div className="flex items-center gap-4 mb-8">
              <div className="h-10 w-2 bg-brand-orange rounded-full"></div>
              <h2 className="text-2xl font-bold text-brand-navy dark:text-white">{common('availableResources')}</h2>
           </div>
           
           <div className="space-y-4">
              {files.map((file, i) => (
                 <FileCard key={i} title={file.title} size={file.size} t={common} />
              ))}
           </div>
        </div>
      </section>
    </main>
  );
}

