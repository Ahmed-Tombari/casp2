import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('teachingTools'),
    description: `Explore our ${t('teachingTools')}`,
  };
}

export default async function TeachingToolsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return (
    <main className="min-h-screen pt-24">
      <section className="container py-12">
        <h1 className="mb-8">{t('teachingTools')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href={`/${locale}/teaching-tools/handwriting-exercises`}
            className="p-6 bg-white dark:bg-white/5 rounded-lg shadow-soft dark:shadow-none hover:shadow-soft-hover transition-shadow text-brand-navy dark:text-white"
          >
            <h2 className="font-bold text-xl">{t('handwritingExercises')}</h2>
          </Link>
          <Link
            href={`/${locale}/teaching-tools/letter-coloring`}
            className="p-6 bg-white dark:bg-white/5 rounded-lg shadow-soft dark:shadow-none hover:shadow-soft-hover transition-shadow text-brand-navy dark:text-white"
          >
            <h2 className="font-bold text-xl">{t('letterColoring')}</h2>
          </Link>
        </div>
      </section>
    </main>
  );
}

