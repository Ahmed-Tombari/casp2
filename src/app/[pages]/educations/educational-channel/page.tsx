import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pages: string }>;
}): Promise<Metadata> {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'nav' });

  return {
    title: t('educationalChannel'),
    description: `Watch educational videos on our ${t('educationalChannel')}`,
  };
}

export default async function EducationalChannelPage({
  params,
}: {
  params: Promise<{ pages: string }>;
}) {
  const { pages: page } = await params;
  return (
    <main className="min-h-screen pt-24">
      <section className="container py-12">
        <h1>Educational Channel</h1>
        {/* Content will be added */}
      </section>
    </main>
  );
}

