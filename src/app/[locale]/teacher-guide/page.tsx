import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Icon } from '@iconify/react/dist/iconify.js';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'teacherGuide' });

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

export default async function TeacherGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'teacherGuide' });

  const guides = [
    { title: t('guide1'), icon: 'solar:file-text-bold-duotone', size: '2.4 MB' },
    { title: t('guide2'), icon: 'solar:file-send-bold-duotone', size: '3.1 MB' },
    { title: t('guide3'), icon: 'solar:file-check-bold-duotone', size: '2.8 MB' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="bg-brand-navy pt-32 pb-20 relative overflow-hidden text-center">
        <div className="absolute top-0 end-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-20 bg-brand-sky/5">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-soft border border-brand-sky/20 space-y-8">
            {guides.map((guide, idx) => (
              <div 
                key={idx} 
                className="flex flex-col md:flex-row items-center justify-between p-6 rounded-3xl bg-brand-sky/5 hover:bg-white border-2 border-transparent hover:border-brand-orange transition-all duration-300 group"
              >
                <div className="flex items-center gap-6 mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-2xl bg-brand-sky/10 flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all">
                    <Icon icon={guide.icon} className="text-4xl text-brand-navy group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-1">
                      {guide.title}
                    </h3>
                    <p className="text-brand-navy/40 font-medium">
                      PDF • {guide.size}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                   <button className="px-6 py-3 rounded-xl bg-brand-navy/5 text-brand-navy font-bold hover:bg-brand-navy hover:text-white transition-all flex items-center gap-2">
                    <Icon icon="solar:eye-bold-duotone" className="text-xl" />
                    {t('preview')}
                  </button>
                  <button className="px-6 py-3 rounded-xl bg-brand-orange text-white font-bold hover:bg-brand-orange-dark transition-all flex items-center gap-2 shadow-lg shadow-brand-orange/20">
                    <Icon icon="solar:download-bold-duotone" className="text-xl" />
                    {t('download')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

