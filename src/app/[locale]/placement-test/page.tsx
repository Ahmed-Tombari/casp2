import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Icon } from '@iconify/react/dist/iconify.js';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'placementTest' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/placement-test`,
      languages: {
        'ar': '/ar/placement-test',
        'fr': '/fr/placement-test',
        'en': '/en/placement-test',
      },
    },
  };
}

export default async function PlacementTestPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'placementTest' });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden text-center">
        <div className="absolute top-0 end-0 w-80 h-80 bg-white/10 rounded-full blur-3xl opacity-40" />
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Test Info Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-mentor-shadow border border-thom-light text-center">
             <div className="flex flex-wrap justify-center gap-10 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                  <Icon icon="solar:clock-circle-bold-duotone" className="text-2xl" />
                </div>
                <span className="text-lg font-bold text-thom-dark">{t('duration')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <Icon icon="solar:list-check-bold-duotone" className="text-2xl" />
                </div>
                <span className="text-lg font-bold text-thom-dark">{t('questions')}</span>
              </div>
            </div>

            <button className="px-12 py-5 rounded-2xl bg-primary text-white text-xl font-bold hover:bg-secondary transition-all shadow-xl shadow-primary/30 active:scale-95 flex items-center gap-3 mx-auto">
              {t('startAction')}
              <Icon icon="solar:play-bold-duotone" className="text-2xl" />
            </button>
            <p className="mt-8 text-thom-dark/40 font-medium italic">
               Ready to discover your Arabic level? 
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

