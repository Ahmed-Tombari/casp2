import { getTranslations } from 'next-intl/server';
import { Icon } from '@iconify/react';
import BookViewer from '@/app/components/TeacherGuide/DynamicBookViewer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'teacherGuide' });
  return { title: `${t('wafi.title')} - ${t('title')}` };
}

export default async function WafiGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'teacherGuide' });
  const isRTL = locale === 'ar';

  const bookList = [
    { key: 'kg', file: 'teacherskg1.pdf' },
    { key: 'intro', file: 'teacherskg1.pdf' },
    { key: '1', file: 'teacherskg1.pdf' },
    { key: '2', file: 'teacherskg1.pdf' },
    { key: '3', file: 'teacherskg1.pdf' },
    { key: '4', file: 'teacherskg1.pdf' },
    { key: '5', file: 'teacherskg1.pdf' },
    { key: '6', file: 'teacherskg1.pdf' },
    { key: '7', file: 'teacherskg1.pdf' },
    { key: '8', file: 'teacherskg1.pdf' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#020617]">
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-32 text-center rounded-b-[4rem] shadow-soft-lg z-10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
           <Icon icon="solar:library-bold" className="absolute top-10 left-10 text-9xl text-white animate-pulse-slow" />
           <Icon icon="solar:library-bold" className="absolute bottom-20 right-10 text-8xl text-white animate-pulse-slow" style={{animationDelay: '2s'}} />
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm font-bold mb-8 backdrop-blur-md">
            <Icon icon="solar:library-bold-duotone" className="text-blue-300" />
            <span>{t('wafi.title')}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">{t('wafi.title')}</h1>
          <p className="text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed">{t('wafi.desc')}</p>
        </div>
      </section>

      <section className="py-24 -mt-20 relative z-20 px-4">
        <div className="container mx-auto max-w-7xl">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy dark:text-white mb-2">{t('stagesOfGrowth')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bookList.map((item, idx) => (
              <BookViewer
                key={idx}
                title={t(`wafi.books.${item.key}`)}
                pdfUrl={`/pdfbooks/${item.file}`}
                readLabel={t('readBtn')}
                downloadLabel={t('downloadBtn')}
                closeLabel={t('close')}
                color="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                borderColor="border-blue-200 dark:border-blue-800"
                icon="solar:library-bold-duotone"
                isRTL={isRTL}
                coverImage="/images/ourbooks/Illuminating Path Series.png"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
