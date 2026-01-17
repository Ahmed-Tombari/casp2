import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('progress'),
    description: `Track your learning ${t('progress')}`,
  };
}

export default async function ProgressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <main className="min-h-screen pt-24">
      <section className="container py-12">
        <h1>Progress Tracking</h1>
        {/* Content will be added */}
      </section>
    </main>
  );
}

