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
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
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
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-mentor-shadow border border-thom-light space-y-8">
            {guides.map((guide, idx) => (
              <div 
                key={idx} 
                className="flex flex-col md:flex-row items-center justify-between p-6 rounded-3xl bg-cream hover:bg-white border-2 border-transparent hover:border-primary transition-all duration-300 group"
              >
                <div className="flex items-center gap-6 mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon icon={guide.icon} className="text-4xl text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-thom-dark mb-1">
                      {guide.title}
                    </h3>
                    <p className="text-thom-dark/40 font-medium">
                      PDF • {guide.size}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                   <button className="px-6 py-3 rounded-xl bg-thom-dark/5 text-thom-dark font-bold hover:bg-thom-dark hover:text-white transition-all flex items-center gap-2">
                    <Icon icon="solar:eye-bold-duotone" className="text-xl" />
                    {t('preview')}
                  </button>
                  <button className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-secondary transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
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

